import {
  createTestPage, neonShapeCatalog, NeonTopDownSceneRenderer, NeonShapeActor,
  NeonShapeDisposal, type NeonShapeLabelPosition,
} from "../../src/index";
import { exportShapeTunings, loadShapeTuningStorage, saveShapeTuningStorage } from "./tuning-storage";

const q = <T extends Element>(selector: string) => document.querySelector<T>(selector)!;
const canvas=q<HTMLCanvasElement>("#stage"),status=q<HTMLOutputElement>("#test-status"),error=q<HTMLElement>("#error");
const select=q<HTMLSelectElement>("#shape"),zoom=q<HTMLInputElement>("#zoom"),depth=q<HTMLInputElement>("#depth"),thickness=q<HTMLInputElement>("#thickness");
const intensity=q<HTMLInputElement>("#intensity"),coverage=q<HTMLInputElement>("#coverage"),speed=q<HTMLInputElement>("#speed"),bleed=q<HTMLInputElement>("#bleed");
const rotationX=q<HTMLInputElement>("#rotation-x"),rotationY=q<HTMLInputElement>("#rotation-y"),rotationZ=q<HTMLInputElement>("#rotation-z"),rotationReadout=q<HTMLOutputElement>("#rotation-readout");
const labelText=q<HTMLInputElement>("#label-text"),labelPosition=q<HTMLSelectElement>("#label-position"),labelOffset=q<HTMLInputElement>("#label-offset"),labelFont=q<HTMLSelectElement>("#label-font"),labelSize=q<HTMLInputElement>("#label-size");
const velocityX=q<HTMLInputElement>("#velocity-x"),velocityY=q<HTMLInputElement>("#velocity-y"),impactMagnitude=q<HTMLInputElement>("#impact-magnitude"),impactVector=q<HTMLElement>("#impact-vector");
const disposal=q<HTMLSelectElement>("#disposal"),explodeMagnitude=q<HTMLInputElement>("#explode-magnitude"),notes=q<HTMLTextAreaElement>("#notes"),auto=q<HTMLInputElement>("#auto"),title=q<HTMLElement>("#title"),readout=q<HTMLElement>("#readout");
select.innerHTML=neonShapeCatalog.map((shape,i)=>`<option value="${i}">${shape.family.toUpperCase()} · ${shape.name}</option>`).join("");
const requested=new URLSearchParams(location.search).get("shape"),requestedIndex=neonShapeCatalog.findIndex(shape=>shape.id===requested);if(requestedIndex>=0)select.value=String(requestedIndex);
const storage=loadShapeTuningStorage();
zoom.value=String(storage.tunings.zoom*100);depth.value=String(storage.tunings.depth*100);thickness.value=String(storage.tunings.lineThickness*100);intensity.value=String(storage.tunings.energyIntensity*100);coverage.value=String(storage.tunings.energyCoverage*100);speed.value=String(storage.tunings.energySpeed*100);bleed.value=String(storage.tunings.energyBleed*100);
const currentShape=()=>neonShapeCatalog[Number(select.value)];
let actor=new NeonShapeActor({shape:currentShape(),scale:Number(zoom.value)/100});
const loadShapeSettings=()=>{const saved=storage.labels[currentShape().id];notes.value=storage.notes[currentShape().id]??"";labelText.value=saved?.text??"";labelPosition.value=saved?.position??"above";labelOffset.value=String(saved?.offset??8);labelFont.value=saved?.fontFamily??"Segoe UI, sans-serif";labelSize.value=String(saved?.fontSize??18);actor=new NeonShapeActor({shape:currentShape(),scale:Number(zoom.value)/100});};
loadShapeSettings();
const saveTunings=()=>{storage.tunings={zoom:+zoom.value/100,depth:+depth.value/100,lineThickness:+thickness.value/100,energyIntensity:+intensity.value/100,energyCoverage:+coverage.value/100,energySpeed:+speed.value/100,energyBleed:+bleed.value/100};saveShapeTuningStorage(storage)};
[zoom,depth,thickness,intensity,coverage,speed,bleed].forEach(control=>control.addEventListener("input",saveTunings));
const saveLabel=()=>{storage.labels[currentShape().id]={text:labelText.value,position:labelPosition.value,offset:+labelOffset.value,fontFamily:labelFont.value,fontSize:+labelSize.value};saveShapeTuningStorage(storage)};
[labelText,labelPosition,labelOffset,labelFont,labelSize].forEach(control=>control.addEventListener("input",saveLabel));
select.addEventListener("change",loadShapeSettings);notes.addEventListener("input",()=>{storage.notes[currentShape().id]=notes.value;saveShapeTuningStorage(storage)});
q("#export").addEventListener("click",()=>exportShapeTunings(storage));
let dragging=false,px=0,py=0,inputX=0,inputY=0,impactDirection={x:0,y:-1};
const radians=(degrees:number)=>degrees*Math.PI/180;
const clampDegrees=(value:number)=>Math.max(-180,Math.min(180,value));
const rotationLabel=()=>`X ${(+rotationX.value).toFixed(0)}, Y ${(+rotationY.value).toFixed(0)}, Z ${(+rotationZ.value).toFixed(0)}`;
const reset=()=>{rotationX.value="16";rotationY.value="-17";rotationZ.value="0";actor.moveTo(0,0).setVelocity(0,0).regenerate()};q("#reset").addEventListener("click",reset);
canvas.addEventListener("pointerdown",event=>{if(event.shiftKey){dragging=true;px=event.clientX;py=event.clientY;canvas.setPointerCapture(event.pointerId);return}const rect=canvas.getBoundingClientRect();impactDirection={x:event.clientX-(rect.left+rect.width/2),y:(rect.top+rect.height/2)-event.clientY};impactVector.style.transform=`rotate(${Math.atan2(-impactDirection.y,impactDirection.x)}rad)`});
canvas.addEventListener("pointermove",event=>{if(dragging){rotationY.value=String(clampDegrees(+rotationY.value+(event.clientX-px)*.45));rotationX.value=String(clampDegrees(+rotationX.value+(event.clientY-py)*.45));px=event.clientX;py=event.clientY;auto.checked=false}});
canvas.addEventListener("pointerup",()=>dragging=false);
q("#impact").addEventListener("click",()=>actor.impact({direction:impactDirection,magnitude:+impactMagnitude.value/100}));
q("#stop-movement").addEventListener("click",()=>{velocityX.value="0";velocityY.value="0";actor.setVelocity(0,0)});
q("#dispose").addEventListener("click",()=>{actor.explodeMagnitude=+explodeMagnitude.value/100;actor.dispose(disposal.value as NeonShapeDisposal);setTimeout(()=>{actor=new NeonShapeActor({shape:currentShape(),scale:+zoom.value/100,explodeMagnitude:+explodeMagnitude.value/100})},1100)});
const controllerWindow=window as unknown as {gameController?:{createJoystick(options:object):{onChange(fn:(input:{x:number;y:number})=>void):unknown}}};
controllerWindow.gameController?.createJoystick({element:"#stick",knobSelector:"i",radius:54,orientationLayout:{portrait:{x:86,yFromBottom:86},landscape:{x:86,yFromBottom:86}}}).onChange(value=>{inputX=value.x;inputY=value.y;auto.checked=false});
const test=createTestPage("neon-factory-shape-inspector",{impact:(direction:{x:number;y:number},magnitude:number)=>actor.impact({direction,magnitude}),dispose:(mode:NeonShapeDisposal)=>actor.dispose(mode),moveTo:(x:number,y:number)=>actor.moveTo(x,y)},status);
try{const renderer=await NeonTopDownSceneRenderer.create(canvas,900,700);let frame=0,last=performance.now();
const render=(now:number)=>{const dt=Math.min(.04,(now-last)/1000);last=now;rotationX.value=String(clampDegrees(+rotationX.value+inputY*dt*126));rotationY.value=String(clampDegrees(+rotationY.value+inputX*dt*126));actor.shape={...currentShape(),depth:+depth.value/100};actor.scale=+zoom.value/100;actor.setVelocity(+velocityX.value/100,+velocityY.value/100).update(dt);
let ax=radians(+rotationX.value),ay=radians(+rotationY.value),az=radians(+rotationZ.value);if(auto.checked){const wave=Math.sin(now/700)*.24;if(actor.shape.rock==="pitch")ax+=wave;if(actor.shape.rock==="roll")az+=wave;if(actor.shape.rock==="yaw"||actor.shape.rock==="orbit")ay+=wave}
actor.rotationX=ax;actor.rotationY=ay;actor.rotationZ=az;actor.label=labelText.value?{text:labelText.value,position:labelPosition.value as NeonShapeLabelPosition,offset:+labelOffset.value,fontFamily:labelFont.value,fontSize:+labelSize.value}:undefined;
const currentRotationLabel=rotationLabel();rotationReadout.value=currentRotationLabel;
title.textContent=actor.shape.name;readout.textContent=`${actor.shape.family.toUpperCase()} · ${actor.shape.rock} · rotation ${currentRotationLabel} · position ${actor.x.toFixed(2)}, ${actor.y.toFixed(2)}`;
renderer.render({shapes:[{...actor.renderInstance({lineThickness:+thickness.value/100,energyIntensity:+intensity.value/100,energyCoverage:+coverage.value/100,energySpeed:+speed.value/100,energyBleed:+bleed.value/100}),x:450+actor.x*280,y:350-actor.y*280,size:actor.scale*280}]},now/1000);frame=requestAnimationFrame(render)};frame=requestAnimationFrame(render);
addEventListener("pagehide",()=>{cancelAnimationFrame(frame);renderer.destroy()},{once:true});test.ready();test.assert("WebGPU shape renderer initialized",true);test.assert("Behavior driver is exposed",true);
}catch(cause){const message=cause instanceof Error?cause.message:String(cause);error.hidden=false;error.textContent=message;test.assert("WebGPU shape renderer initialized",false,message)}
