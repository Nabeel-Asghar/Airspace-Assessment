"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[8921],{38921:(t,e,n)=>{n.r(e),n.d(e,{loadGLTFMesh:()=>k});var r=n(78745),o=n(54721),s=n(59472),a=n(98501),i=n(30663),c=n(77625),u=n(38256),l=n(88983),f=n(95149),p=n(34696),m=n(57210),d=n(57805),g=n(47442),C=n(54107),x=n(12391),w=n(47188),b=n(16208),h=n(66225),y=n(81229),v=n(57265),A=n(28796),S=n(10406),T=n(72697),B=n(31977);async function k(t,e,n){const a=new b.C(function(t){return null!=t&&t.resolveFile?{busy:!1,request:async(e,n,r)=>{const a=t.resolveFile(e),i="image"===n?"image":"binary"===n?"array-buffer":"json";return(await(0,o.default)(a,{responseType:i,signal:(0,s.pC)(r)?r.signal:null})).data}}:null}(n)),i=(await(0,h.z)(a,e,n,!0)).model,l=i.lods.shift(),g=new Map,C=new Map;i.textures.forEach(((t,e)=>g.set(e,function(t){return new p.Z({data:t.data,wrap:E(t.parameters.wrap)})}(t)))),i.materials.forEach(((t,e)=>C.set(e,function(t,e){const n=new r.Z(function(t,e){return(0,u.f)(Z(t[0]),Z(t[1]),Z(t[2]),e)}(t.color,t.opacity)),o=t.emissiveFactor?new r.Z(function(t){return(0,c.f)(Z(t[0]),Z(t[1]),Z(t[2]))}(t.emissiveFactor)):null;return new f.Z({color:n,colorTexture:(0,s.Wg)((0,s.yw)(t.textureColor,(t=>e.get(t)))),normalTexture:(0,s.Wg)((0,s.yw)(t.textureNormal,(t=>e.get(t)))),emissiveColor:o,emissiveTexture:(0,s.Wg)((0,s.yw)(t.textureEmissive,(t=>e.get(t)))),occlusionTexture:(0,s.Wg)((0,s.yw)(t.textureOcclusion,(t=>e.get(t)))),alphaMode:M(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:(0,s.Wg)((0,s.yw)(t.textureMetallicRoughness,(t=>e.get(t))))})}(t,g))));const y=function(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1};for(const{attributes:{position:r,normal:o,color:s,tangent:a,texCoord0:i}}of t.parts)e+=r.count,o&&(n.normal=!0),s&&(n.color=!0),a&&(n.tangent=!0),i&&(n.texCoord0=!0);return{writeIndex:0,vertexAttributes:{position:(0,x.gS)(d.fP,e),normal:n.normal?(0,x.gS)(d.ct,e):null,tangent:n.tangent?(0,x.gS)(d.ek,e):null,color:n.color?(0,x.gS)(d.mc,e):null,texCoord0:n.texCoord0?(0,x.gS)(d.Eu,e):null},components:[]}}(l);for(const t of l.parts)F(y,t,C);const{position:v,normal:A,tangent:S,color:T,texCoord0:B}=y.vertexAttributes,k={position:v.typedBuffer,normal:(0,s.pC)(A)?A.typedBuffer:null,tangent:(0,s.pC)(S)?S.typedBuffer:null,uv:(0,s.pC)(B)?B.typedBuffer:null,color:(0,s.pC)(T)?T.typedBuffer:null},I=(0,w.w1)(k,t,n);return{transform:I.transform,components:y.components,spatialReference:t.spatialReference,vertexAttributes:new m.ZP({position:I.vertexAttributes.position,normal:I.vertexAttributes.normal,tangent:I.vertexAttributes.tangent,color:k.color,uv:k.uv})}}function F(t,e,n){const{position:r,normal:o,tangent:c,color:u,texCoord0:f}=t.vertexAttributes,p=t.writeIndex,m=e.attributes.position.count;if((0,g.t)(r.slice(p,m),e.attributes.position,e.transform),(0,s.pC)(e.attributes.normal)&&(0,s.pC)(o)){const t=(0,a.a)((0,i.c)(),e.transform);(0,g.a)(o.slice(p,m),e.attributes.normal,t)}else(0,s.pC)(o)&&(0,S.f)(o,0,0,1,{dstIndex:p,count:m});if((0,s.pC)(e.attributes.tangent)&&(0,s.pC)(c)){const t=(0,a.a)((0,i.c)(),e.transform);(0,C.t)(c.slice(p,m),e.attributes.tangent,t)}else(0,s.pC)(c)&&(0,T.f)(c,0,0,1,1,{dstIndex:p,count:m});if((0,s.pC)(e.attributes.texCoord0)&&(0,s.pC)(f)?(0,B.n)(f.slice(p,m),e.attributes.texCoord0):(0,s.pC)(f)&&(0,B.f)(f,0,0,{dstIndex:p,count:m}),(0,s.pC)(e.attributes.color)&&(0,s.pC)(u)){const t=e.attributes.color,n=u.slice(p,m);if(4===t.elementCount)t instanceof d.ek?(0,C.s)(n,t,255):t instanceof d.mc?(0,T.c)(n,t):t instanceof d.v6&&(0,C.a)(n,t,8);else{(0,T.f)(n,255,255,255,255);const e=d.ne.fromTypedArray(n.typedBuffer,n.typedBufferStride);t instanceof d.ct?(0,g.s)(e,t,255):t instanceof d.ne?(0,S.c)(e,t):t instanceof d.mw&&(0,g.b)(e,t,8)}}else(0,s.pC)(u)&&(0,T.f)(u.slice(p,m),255,255,255,255);const x=function(t,e){switch(e){case 4:return(0,y.nh)(t,v.DX);case 5:return(0,y.DA)(t);case 6:return(0,y.jX)(t)}}(e.indices||m,e.primitiveType);if(p)for(let t=0;t<x.length;t++)x[t]+=p;t.components.push(new l.Z({faces:x,material:n.get(e.material).clone(),trustSourceNormals:!0})),t.writeIndex+=m}function M(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function E(t){return{horizontal:I(t.s),vertical:I(t.t)}}function I(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function Z(t){return t**(1/A.K)*255}}}]);