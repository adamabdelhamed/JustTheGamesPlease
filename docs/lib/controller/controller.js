(function(global){
  'use strict';
  const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
  const orientation=()=>innerWidth>innerHeight?'landscape':'portrait';

  function createJoystick(options){
    const element=typeof options.element==='string'?document.querySelector(options.element):options.element;
    if(!element)throw new Error('createJoystick requires an element');
    const container=options.container||document.body,knob=element.querySelector(options.knobSelector||'.stick-knob');
    const radius=options.radius||54,layout=options.orientationLayout||{},recenter=options.recenterRadius||{};
    const drift=Object.assign({enabled:false,maxOffset:0,smoothing:.18},options.drift);
    let pointer=null,center={x:0,y:0},defaultCenter={x:0,y:0},driftOffset={x:0,y:0},listeners=[],endListeners=[];
    element.classList.add('game-controller-joystick');

    function configuredCenter(){
      const mode=orientation(),value=layout[mode]||layout.portrait||{};
      const fromRight=value.xFromRight!=null,valueX=fromRight?innerWidth-value.xFromRight:(value.x!=null?value.x:radius+20);
      return{x:valueX,y:value.y!=null?value.y:innerHeight-(value.yFromBottom!=null?value.yFromBottom:radius+20)};
    }
    function render(){
      element.style.left=(center.x-radius)+'px';element.style.top=(center.y-radius)+'px';
      element.style.width=element.style.height=(radius*2)+'px';
    }
    function emit(x,y){
      const magnitude=clamp(Math.hypot(x,y),0,1),input={x,y,magnitude,angleRadians:Math.atan2(y,x)};
      listeners.forEach(fn=>fn(input));
    }
    function apply(event){
      let dx=event.clientX-center.x,dy=event.clientY-center.y,distance=Math.hypot(dx,dy);
      if(distance>radius&&drift.enabled){
        const excess=distance-radius,targetX=clamp(dx/distance*excess,-drift.maxOffset,drift.maxOffset),targetY=clamp(dy/distance*excess,-drift.maxOffset,drift.maxOffset);
        driftOffset.x+=(targetX-driftOffset.x)*drift.smoothing;driftOffset.y+=(targetY-driftOffset.y)*drift.smoothing;
        const length=Math.hypot(driftOffset.x,driftOffset.y);if(length>drift.maxOffset){driftOffset.x*=drift.maxOffset/length;driftOffset.y*=drift.maxOffset/length}
        center.x=defaultCenter.x+driftOffset.x;center.y=defaultCenter.y+driftOffset.y;render();
        dx=event.clientX-center.x;dy=event.clientY-center.y;distance=Math.hypot(dx,dy);
      }
      const scale=distance>radius?radius/distance:1,x=dx*scale/radius,y=dy*scale/radius;
      if(knob)knob.style.transform=`translate(calc(-50% + ${x*radius}px),calc(-50% + ${y*radius}px))`;
      emit(x,y);
    }
    function down(event){
      if(pointer!==null||event.__gameControllerClaimed||event.button!==0||(options.enabled&&!options.enabled())||event.target.closest('button,input,select,a'))return;
      const distance=Math.hypot(event.clientX-center.x,event.clientY-center.y),limit=recenter[orientation()]||radius;
      if(distance>limit)return;
      event.preventDefault();event.__gameControllerClaimed=true;pointer=event.pointerId;
      if(distance>radius){defaultCenter={x:event.clientX,y:event.clientY};center={...defaultCenter};driftOffset={x:0,y:0};render()}
      container.setPointerCapture?.(pointer);element.classList.add('game-controller-active','active');apply(event);
    }
    function move(event){if(event.pointerId===pointer){event.preventDefault();apply(event)}}
    function end(event,cancelled){
      if(event.pointerId!==pointer)return;event.preventDefault();
      const last={cancelled};endListeners.forEach(fn=>fn(last));pointer=null;emit(0,0);
      if(knob)knob.style.transform='translate(-50%,-50%)';element.classList.remove('game-controller-active','active');
      if(options.resetOnRelease!==false){defaultCenter=configuredCenter();center={...defaultCenter};driftOffset={x:0,y:0};render()}
    }
    function reset(){defaultCenter=configuredCenter();center={...defaultCenter};driftOffset={x:0,y:0};render()}
    container.addEventListener('pointerdown',down);container.addEventListener('pointermove',move);container.addEventListener('pointerup',e=>end(e,false));container.addEventListener('pointercancel',e=>end(e,true));
    addEventListener('resize',reset);reset();
    return{onChange(fn){listeners.push(fn);return this},onEnd(fn){endListeners.push(fn);return this},reset,getCenter(){return{...center}}};
  }
  global.gameController={createJoystick};
})(window);
