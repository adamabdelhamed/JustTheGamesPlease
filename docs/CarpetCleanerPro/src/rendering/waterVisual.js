import * as THREE from 'three/webgpu';
import { SIMULATION } from '../config/gameConfig.js';
import { WORLD, classifySurface, floorHeightAt } from '../world/worldLayout.js';

export function createWaterVisual(resources) {
  const field = createWaterField(resources);
  const rig = createHoseRig(resources);
  return { group:rig.group, fieldMesh:field.mesh, setPose:p=>rig.setPose(p), setSelected:v=>rig.setSelected(v), setField:i=>field.setInspection(i), addPending:e=>field.addPending(e), update:t=>rig.update(t) };
}

function createHoseRig(resources){
  const group=new THREE.Group();group.visible=false;
  const metal=new THREE.MeshStandardMaterial({color:0x536c67,metalness:.82,roughness:.2});
  const rubber=new THREE.MeshStandardMaterial({color:0x14241f,roughness:.8});
  const water=new THREE.MeshPhysicalMaterial({color:0x8be5ff,roughness:.03,transmission:.28,transparent:true,opacity:.78,clearcoat:1,depthWrite:false});
  const barrelG=new THREE.CylinderGeometry(.09,.13,.85,16),gripG=new THREE.BoxGeometry(.18,.48,.2),streamG=new THREE.CylinderGeometry(.035,.12,1.0,16),impactG=new THREE.RingGeometry(.08,.26,36);
  resources.push(metal,rubber,water,barrelG,gripG,streamG,impactG);
  const barrel=new THREE.Mesh(barrelG,metal);barrel.position.set(-.42,.85,0);barrel.rotation.z=Math.PI/2;
  const grip=new THREE.Mesh(gripG,rubber);grip.position.set(-.68,.56,0);grip.rotation.z=-.22;
  const stream=new THREE.Mesh(streamG,water);stream.position.set(0,.5,0);
  const impact=new THREE.Mesh(impactG,water);impact.position.y=.025;impact.rotation.x=-Math.PI/2;
  group.add(barrel,grip,stream,impact);barrel.castShadow=grip.castShadow=true;
  let active=false,selected=false,hasPose=false;
  return{group,setPose(pose){hasPose=true;group.visible=selected;group.position.set(pose.x,pose.y+.015,pose.z);group.rotation.y=-pose.orientation;active=pose.contact;stream.visible=impact.visible=active;},setSelected(v){selected=v;group.visible=selected&&hasPose;},update(t){if(!active)return;stream.scale.set(.9+Math.sin(t*24)*.08,1,.9+Math.sin(t*24)*.08);impact.scale.setScalar(.8+(t*2.6%1)*.75);}};
}

function createWaterField(resources){
  const colorData=new Uint8Array(SIMULATION.gridWidth*SIMULATION.gridHeight*4),heightData=new Uint8Array(colorData.length),values=new Float32Array(SIMULATION.gridWidth*SIMULATION.gridHeight);
  const texture=makeTexture(new Uint8Array(4),true),height=makeTexture(new Uint8Array(4),false);
  const material=new THREE.MeshPhysicalMaterial({map:texture,alphaMap:height,displacementMap:height,displacementScale:.075,bumpMap:height,bumpScale:.055,transparent:true,alphaTest:.008,depthWrite:false,roughness:.025,metalness:0,transmission:.34,thickness:.06,ior:1.333,clearcoat:1,clearcoatRoughness:.015,opacity:.88});
  const geometry=surfaceGeometry(),mesh=new THREE.Mesh(geometry,material);mesh.visible=false;mesh.renderOrder=11;resources.push(texture,height,material,geometry);let pending=false;
  function pixel(i){const a=Math.min(1,values[i]/.7),o=i*4;colorData[o]=105;colorData[o+1]=205;colorData[o+2]=245;colorData[o+3]=Math.round(Math.sqrt(a)*220);const h=Math.round(Math.pow(a,.68)*255);heightData[o]=heightData[o+1]=heightData[o+2]=h;heightData[o+3]=255;return a>.002}
  function upload(){texture.image={data:colorData,width:SIMULATION.gridWidth,height:SIMULATION.gridHeight};texture.needsUpdate=true;height.image={data:heightData,width:SIMULATION.gridWidth,height:SIMULATION.gridHeight};height.needsUpdate=true;mesh.visible=true}
  function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;upload()})}
  return{mesh,setInspection(inspection){values.set(inspection.values);let visible=false;for(let i=0;i<values.length;i++)visible||=pixel(i);upload();mesh.visible=visible;},addPending(entries){for(const e of entries){values[e.index]=Math.min(100,values[e.index]+e.density);pixel(e.index)}schedule();}};
}
function makeTexture(data,srgb){const t=new THREE.DataTexture(data,1,1,THREE.RGBAFormat,THREE.UnsignedByteType);if(srgb)t.colorSpace=THREE.SRGBColorSpace;t.flipY=true;t.minFilter=t.magFilter=THREE.LinearFilter;t.needsUpdate=true;return t}
function surfaceGeometry(){const g=new THREE.PlaneGeometry(WORLD.floor.width,WORLD.floor.depth,176,112),p=g.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i),z=-p.getY(i),lift=classifySurface(x,z)==='carpet'?WORLD.rug.thickness+.082:.042;p.setZ(i,floorHeightAt(x)+lift)}g.rotateX(-Math.PI/2);return g}
