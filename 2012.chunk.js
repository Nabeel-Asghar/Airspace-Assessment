"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[2012,1012],{71012:(t,e,r)=>{r.d(e,{a:()=>i,c:()=>n,g:()=>s});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}},17149:(t,e,r)=>{r.d(e,{W:()=>o});var n=r(95830),s=r(56291),i=r(7369);const a=(0,n.Z)("mapview-transitions-duration");class o extends s.s{constructor(){super(...arguments),this._childrenSet=new Set,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""}set effect(t){(this._effectList||t)&&(this._effectList||(this._effectList=new i.ZP(a)),this._effectList.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectList&&(this._effectList.transitionStep(t,e),this._effectList.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;const r=t.parent;return r&&r!==this&&r.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear();for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){return this.children.sort(t)}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}},56291:(t,e,r)=>{r.d(e,{s:()=>o});var n=r(35470),s=r(95830),i=r(39105);const a=1/(0,s.Z)("mapview-transitions-duration");class o extends n.Z{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,i.hh)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,i.hh)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null==(t=this.parent)||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,r=this.computedOpacity;if(r===e)this.computedVisible=this.visible;else{const n=t*a;this.computedOpacity=r>e?Math.max(e,r-n):Math.min(e,r+n),this.computedVisible=this.computedOpacity>0;const s=e===this.computedOpacity;this.inFadeTransition=!s,s||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},83302:(t,e,r)=>{r.d(e,{mR:()=>Z,C$:()=>O,e2:()=>x,wO:()=>N,Mk:()=>B,cM:()=>$,Z_:()=>G,ws:()=>U,xV:()=>z,UK:()=>X,Yw:()=>W,$_:()=>L,nU:()=>F,$K:()=>V,hj:()=>C,Y8:()=>M});var n=r(32656),s=r(36544),i=(r(33655),r(51482),r(31514)),a=r(38035);class o{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,e,r,n,s,i,a,o,c){this.color=t,this.haloColor=e,this.haloSize=r,this.size=n,this.angle=s,this.offsetX=i,this.offsetY=a,this.hAnchor=o,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}o.pool=new a.Z(o),r(8634);const c=s.Z.getLogger("esri.views.2d.engine.webgl.Utils"),u="geometry",l=[{name:u,strideInBytes:36,divisor:0}],h=[{name:u,strideInBytes:12,divisor:0}],f=[{name:u,strideInBytes:40,divisor:0}],d=[{name:u,strideInBytes:36,divisor:0}],p=[{name:u,strideInBytes:36,divisor:0}];function v(t){const e={};for(const r of t)e[r.name]=r.strideInBytes;return e}const g=v([{name:u,strideInBytes:36,divisor:0}]),m=v(l),_=v(h),y=v(f),A=v(d),S=v(p);function L(t,e){switch(t){case i.LW.MARKER:return g;case i.LW.FILL:return e?_:m;case i.LW.LINE:return y;case i.LW.TEXT:return A;case i.LW.LABEL:return S}}const E=[u],w=[u],T=[u],I=[u],b=[u];function R(t){switch(t){case i.LW.MARKER:return E;case i.LW.FILL:return w;case i.LW.LINE:return T;case i.LW.TEXT:return I;case i.LW.LABEL:return b}}function M(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function O(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function x(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function V(t){return null!=t}function C(t){return"number"==typeof t}function U(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return c.error(new n.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function z(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return c.error(new n.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function F(t){switch(t){case"opacity":return i.pc.OPACITY;case"color":return i.pc.COLOR;case"rotation":return i.pc.ROTATION;case"size":return i.pc.SIZE;default:return c.error(`Cannot interpret unknown vv: ${t}`),null}}function N(t,e,r,n,s,i,a){for(const e in i){const n=i[e].stride,a=M(n),o=i[e].data,c=r[e].data,u=n*s.vertexCount/a,l=n*t/a,h=n*s.vertexFrom/a;for(let t=0;t<u;++t)c[t+l]=o[t+h]}const o=s.indexCount;for(let r=0;r<o;++r)n[r+e]=a[r+s.indexFrom]-s.vertexFrom+t}const Z={[u]:35044};function B(t,e){const r=[];for(let n=0;n<5;++n){const s=R(n),i={};for(const t of s)i[t]={data:e(n,t)};r.push({data:t(n),buffers:i})}return r}function P(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function W(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void c.error(new n.Z("webgl-utils",`Unable to handle type ${t}`))}}function X(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void c.error(new n.Z("webgl-utils",`Unable to handle type ${t}`))}}const D=t=>{const e=new Map;for(const r in t)for(const n of t[r])e.set(n.name,n.location);return e},q=t=>{const e={};for(const r in t){const n=t[r];e[r]=n.length?n[0].stride:0}return e},k=new Map,$=(t,e)=>{if(!k.has(t)){const r=function(t){const e={};for(const r in t){const n=t[r];let s=0;e[r]=n.map((t=>{const e={...t,normalized:t.normalized||!1,divisor:t.divisor||0,offset:s,stride:0};return s+=t.count*P(t.type),e})),e[r].forEach((t=>t.stride=s))}return e}(e),n={strides:q(r),bufferLayouts:r,attributes:D(e)};k.set(t,n)}return k.get(t)};function G(t){t(i.LW.FILL),t(i.LW.LINE),t(i.LW.MARKER),t(i.LW.TEXT),t(i.LW.LABEL)}},51482:(t,e,r)=>{r.d(e,{pr:()=>s,t2:()=>i,aH:()=>a});var n=r(53986);function s(t,e=0,r=!1){const n=t[e+3];return t[e+0]*=n,t[e+1]*=n,t[e+2]*=n,r||(t[e+3]*=255),t}function i(t){if(!t)return 0;const{r:e,g:r,b:s,a:i}=t;return(0,n.Jz)(e*i,r*i,s*i,255*i)}function a(t){if(!t)return 0;const[e,r,s,i]=t;return(0,n.Jz)(e*(i/255),r*(i/255),s*(i/255),i)}},71286:(t,e,r)=>{r.d(e,{xl:()=>S,aK:()=>L,eF:()=>u,eq:()=>z,XJ:()=>C,$0:()=>a,iV:()=>I,Zd:()=>T,uG:()=>w,Jc:()=>R,xm:()=>o,m4:()=>E,MI:()=>F,AI:()=>n,Ip:()=>U,ru:()=>s,fL:()=>V,iJ:()=>d,nM:()=>p,Ij:()=>v,f2:()=>g,Ic:()=>f,Al:()=>h,QU:()=>m,Jw:()=>_,kF:()=>y,yP:()=>A,D3:()=>l,Iw:()=>c,tQ:()=>b,I_:()=>i,a:()=>x,CU:()=>O,V4:()=>M});const n=1e-30,s=4294967295,i=512,a=8,o=29,c=8,u={metrics:{width:15,height:17,left:0,top:-7,advance:14}},l=0,h=0,f=0,d=1,p=2,v=3,g=4,m=5,_=6,y=5,A=6,S=1,L=2,E=2,w=1,T=2,I=4,b=1.05,R=6,M=5,O=6,x=1.15,V=2,C=7,U=500,z=128,F=10},31514:(t,e,r)=>{var n,s,i,a,o,c,u;r.d(e,{Un:()=>u,pc:()=>a,jx:()=>i,LW:()=>n,X:()=>o,mf:()=>c}),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(n||(n={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(s||(s={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(i||(i={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(a||(a={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(o||(o={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(u||(u={}))},9709:(t,e,r)=>{r.d(e,{dk:()=>d,Gq:()=>m,a:()=>v,mE:()=>p,m2:()=>c,qr:()=>g,jj:()=>a,hF:()=>o});var n=r(32656),s=r(31514),i=r(49269);function a(t,e,r,n,i){switch(t){case s.LW.FILL:return d.from(e,n);case s.LW.LINE:return v.from(e,r);case s.LW.MARKER:return p.from(e);case s.LW.TEXT:return g.from(e);case s.LW.LABEL:return m.from(e,i);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function o(t){switch(c.load(t).geometryType){case s.LW.MARKER:return new p(t);case s.LW.FILL:return new d(t);case s.LW.LINE:return new v(t);case s.LW.TEXT:return new g(t);case s.LW.LABEL:return new m(t)}}class c{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case s.LW.FILL:return"fill";case s.LW.MARKER:return"marker";case s.LW.LINE:return"line";case s.LW.TEXT:return"text";case s.LW.LABEL:return"label";default:throw new n.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const r=1<<t;e?this._data|=r:this._data&=~r}bit(t){return(this._data&1<<t)>>t}setBits(t,e,r){for(let n=e,s=0;n<r;n++,s++)this.setBit(n,0!=(t&1<<s))}bits(t,e){let r=0;for(let n=t,s=0;n<e;n++,s++)r|=this.bit(n)<<s;return r}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}c.shared=new c(0);const u=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const r=function(t,e=!1){const r=s.X.SIZE_FIELD_STOPS|s.X.SIZE_MINMAX_VALUE|s.X.SIZE_SCALE_STOPS|s.X.SIZE_UNIT_VALUE,n=(t&(s.mf.FIELD_TARGETS_OUTLINE|s.mf.MINMAX_TARGETS_OUTLINE|s.mf.SCALE_TARGETS_OUTLINE|s.mf.UNIT_TARGETS_OUTLINE))>>>4;return e?r&n:r&~n}(t,e)&t;this.vvSizeMinMaxValue=!!(r&s.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&s.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&s.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&s.X.SIZE_SCALE_STOPS)}},l=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e&&!!(t&s.X.ROTATION)}},h=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e&&!!(t&s.X.COLOR)}},f=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e&&!!(t&s.X.OPACITY)}};class d extends(h(f(c))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const r=this.load(0);return r.geometryType=s.LW.FILL,e?r.dotDensity=!0:r.setVV(t,!1),r.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}d.shared=new d(0);class p extends(h(f(l(u(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=s.LW.MARKER,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class v extends(h(f(u(c)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const r=this.load(0);return r.geometryType=s.LW.LINE,r.setVV(t,e),r.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}v.shared=new v(0);class g extends(h(f(l(u(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=s.LW.TEXT,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}g.shared=new g(0);class m extends(u(c)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const r=this.load(0);return r.geometryType=s.LW.LABEL,r.setVV(t,!1),r.mapAligned=(0,i.N)(e),r.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0)},49269:(t,e,r)=>{function n(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(e,{N:()=>n})},53986:(t,e,r)=>{r.d(e,{UJ:()=>i,Jz:()=>a,Au:()=>s});const n=new Float32Array(1);function s(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function i(t,e){return 65535&t|e<<16}function a(t,e,r,n){return 255&t|(255&e)<<8|(255&r)<<16|n<<24}new Uint32Array(n.buffer)},7369:(t,e,r)=>{r.d(e,{ZP:()=>F});var n=r(66039),s=r(32656),i=r(82550),a=r(36544),o=r(6897),c=r(67128);class u{constructor(t,e,r){this.strength=t,this.radius=e,this.threshold=r,this.type="bloom"}interpolate(t,e,r){this.strength=v(t.strength,e.strength,r),this.radius=v(t.radius,e.radius,r),this.threshold=v(t.threshold,e.threshold,r)}clone(){return new u(this.strength,this.radius,this.threshold)}}class l{constructor(t){this.radius=t,this.type="blur"}interpolate(t,e,r){this.radius=Math.round(v(t.radius,e.radius,r))}clone(){return new l(this.radius)}}class h{constructor(t,e){this.type=t,this.amount=e,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.amount=v(t.amount,e.amount,r),this._updateMatrix()}clone(){return new h(this.type,this.amount)}_updateMatrix(){const t=this._colorMatrix||(0,o.c)();switch(this.type){case"brightness":this._colorMatrix=((t,e)=>{const r=(0,c.h)(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1);return(0,c.e)(r,r)})(t,this.amount);break;case"contrast":this._colorMatrix=((t,e)=>{const r=(0,c.h)(t,e,0,0,.5-.5*e,0,e,0,.5-.5*e,0,0,e,.5-.5*e,0,0,0,1);return(0,c.e)(r,r)})(t,this.amount);break;case"grayscale":this._colorMatrix=((t,e)=>{const r=1-this.amount,n=(0,c.h)(t,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1);return(0,c.e)(n,n)})(t);break;case"invert":this._colorMatrix=((t,e)=>{const r=1-2*e,n=(0,c.h)(t,r,0,0,e,0,r,0,e,0,0,r,e,0,0,0,1);return(0,c.e)(n,n)})(t,this.amount);break;case"saturate":this._colorMatrix=((t,e)=>{const r=(0,c.h)(t,.213+.787*e,.715-.715*e,.072-.072*e,0,.213-.213*e,.715+.285*e,.072-.072*e,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,1);return(0,c.e)(r,r)})(t,this.amount);break;case"sepia":this._colorMatrix=((t,e)=>{const r=1-this.amount,n=(0,c.h)(t,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1);return(0,c.e)(n,n)})(t)}}}class f{constructor(t,e,r,n){this.offsetX=t,this.offsetY=e,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(t,e,r){this.offsetX=v(t.offsetX,e.offsetX,r),this.offsetY=v(t.offsetY,e.offsetY,r),this.blurRadius=v(t.blurRadius,e.blurRadius,r),this.color[0]=Math.round(v(t.color[0],e.color[0],r)),this.color[1]=Math.round(v(t.color[1],e.color[1],r)),this.color[2]=Math.round(v(t.color[2],e.color[2],r)),this.color[3]=v(t.color[3],e.color[3],r)}clone(){return new f(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}}class d{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.angle=v(t.angle,e.angle,r),this._updateMatrix()}clone(){return new d(this.angle)}_updateMatrix(){const t=this._colorMatrix||(0,o.c)();this._colorMatrix=((t,e)=>{const r=Math.sin(e*Math.PI/180),n=Math.cos(e*Math.PI/180),s=(0,c.h)(t,.213+.787*n-.213*r,.715-.715*n-.715*r,.072-.072*n+.928*r,0,.213-.213*n+.143*r,.715+.285*n+.14*r,.072-.072*n-.283*r,0,.213-.213*n-.787*r,.715-.715*n+.715*r,.072+.928*n+.072*r,0,0,0,0,1);return(0,c.e)(s,s)})(t,this.angle)}}class p{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,e,r){this.amount=v(t.amount,e.amount,r)}clone(){return new p(this.amount)}}function v(t,e,r){return t+(e-t)*r}r(71012);var g,m,_={exports:{}};function y(t){let e;try{e=t?_.exports.parse(t):[]}catch(e){return{input:t,parsedFunctions:[],effects:[],error:new s.Z("effect:invalid-syntax","Invalid effect syntax",{input:t,error:e})}}const r={input:t,parsedFunctions:e,effects:[],error:null};try{for(const t of e)r.effects.push(A(t))}catch(t){r.effects.length=0,r.error=t}return r}function A(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1;return S(t.parameters,1),1===t.parameters.length&&(e=I(t.parameters[0])),new h(t.name,e)}(t);case"opacity":return function(t){let e=1;return S(t.parameters,1),1===t.parameters.length&&(e=I(t.parameters[0])),new p(e)}(t);case"hue-rotate":return function(t){let e=0;return S(t.parameters,1),1===t.parameters.length&&(e=function(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==w[t.unit])throw new s.Z("effect:type-error",`Expected <angle>, Actual: ${L(t)}`,{term:t})}(t),t.value*w[t.unit]||0}(t.parameters[0])),new d(e)}(t);case"blur":return function(t){let e=0;return S(t.parameters,1),1===t.parameters.length&&(e=b(t.parameters[0]),E(e,t.parameters[0])),new l(e)}(t);case"drop-shadow":return function(t){const e=[];let r;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new s.Z("effect:type-error","Accepts only one color",{});r=R(n)}else{const t=b(n);if(Object.isFrozen(e))throw new s.Z("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&E(t,n)}if(e.length<2||e.length>3)throw new s.Z("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new f(e[0],e[1],e[2]||0,r||M("black"))}(t);case"bloom":return function(t){let e=1,r=0,n=0;return S(t.parameters,3),t.parameters[0]&&(e=I(t.parameters[0])),t.parameters[1]&&(r=b(t.parameters[1]),E(r,t.parameters[1])),t.parameters[2]&&(n=I(t.parameters[2])),new u(e,r,n)}(t)}}catch(e){throw e.details.filter=t,e}throw new s.Z("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function S(t,e){if(t.length>e)throw new s.Z("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function L(t){return"color"===t.type?"<color>":T[t.unit]?"<length>":w[t.unit]?"<angle>":"%"===t.unit?"<percentage>":"<double>"}function E(t,e){if(t<0)throw new s.Z("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}m=function(){function t(e,r,n,s){this.message=e,this.expected=r,this.found=n,this.location=s,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}return function(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}(t,Error),t.buildMessage=function(t,e){var r={literal:function(t){return'"'+s(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?i(t.parts[e][0])+"-"+i(t.parts[e][1]):i(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function s(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return r[t.type](t)}return"Expected "+function(t){var e,r,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=a(t[e]);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+s(t)+'"':"end of input"}(e)+" found."},{SyntaxError:t,parse:function(e,r){r=void 0!==r?r:{};var n,s={},i={start:at},a=at,o=rt("none"),c="none",u=tt("none",!1),l=tt(")",!1),h=tt(",",!1),f=rt("whitespace"),d=/^[ \t\n\r]/,p=et([" ","\t","\n","\r"],!1,!1),v=rt("function"),g=tt("(",!1),m=rt("identifier"),_=/^[a-z\-]/,y=et([["a","z"],"-"],!1,!1),A=rt("percentage"),S=tt("%",!1),L=rt("length"),E=tt("px",!1),w=tt("cm",!1),T=tt("mm",!1),I=tt("in",!1),b=tt("pt",!1),R=tt("pc",!1),M=rt("angle"),O=tt("deg",!1),x=tt("rad",!1),V="grad",C=tt("grad",!1),U="turn",z=tt("turn",!1),F=rt("number"),N=rt("color"),Z=tt("#",!1),B=/^[0-9a-fA-F]/,P=et([["0","9"],["a","f"],["A","F"]],!1,!1),W=/^[+\-]/,X=et(["+","-"],!1,!1),D=/^[0-9]/,q=et([["0","9"]],!1,!1),k=tt(".",!1),$=tt("e",!1),G=0,Y=0,H=[{line:1,column:1}],K=0,j=[],J=0;if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".');a=i[r.startRule]}function Q(){return e.substring(Y,G)}function tt(t,e){return{type:"literal",text:t,ignoreCase:e}}function et(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function rt(t){return{type:"other",description:t}}function nt(t){var r,n=H[t];if(n)return n;for(r=t-1;!H[r];)r--;for(n={line:(n=H[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return H[t]=n,n}function st(t,e){var r=nt(t),n=nt(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function it(t){G<K||(G>K&&(K=G,j=[]),j.push(t))}function at(){var t;return(t=ot())===s&&(t=function(){var t,e;if(t=[],(e=ct())!==s)for(;e!==s;)t.push(e),e=ct();else t=s;return t}()),t}function ot(){var t,r;return J++,t=G,lt()!==s?(e.substr(G,4)===c?(r=c,G+=4):(r=s,0===J&&it(u)),r!==s&&lt()!==s?(Y=t,t=[]):(G=t,t=s)):(G=t,t=s),J--,t===s&&0===J&&it(o),t}function ct(){var t,r,n,i;return t=G,lt()!==s&&(r=function(){var t,r,n;return J++,t=G,(r=ht())!==s?(40===e.charCodeAt(G)?(n="(",G++):(n=s,0===J&&it(g)),n!==s?(Y=t,t=r=r):(G=t,t=s)):(G=t,t=s),J--,t===s&&(r=s,0===J&&it(v)),t}())!==s&&lt()!==s?((n=function(){var t,r,n,i,a,o,c,u;if(t=G,(r=ut())!==s){for(n=[],i=G,(a=lt())!==s?(44===e.charCodeAt(G)?(o=",",G++):(o=s,0===J&&it(h)),o===s&&(o=null),o!==s&&(c=lt())!==s&&(u=ut())!==s?i=a=[a,o,c,u]:(G=i,i=s)):(G=i,i=s);i!==s;)n.push(i),i=G,(a=lt())!==s?(44===e.charCodeAt(G)?(o=",",G++):(o=s,0===J&&it(h)),o===s&&(o=null),o!==s&&(c=lt())!==s&&(u=ut())!==s?i=a=[a,o,c,u]:(G=i,i=s)):(G=i,i=s);n!==s?(Y=t,t=r=function(t,e){return e.length>0?function(t,e,r){return[t].concat(function(t,e){return t.map((function(t){return t[3]}))}(e))}(t,e):[t]}(r,n)):(G=t,t=s)}else G=t,t=s;return t}())===s&&(n=null),n!==s&&lt()!==s?(41===e.charCodeAt(G)?(i=")",G++):(i=s,0===J&&it(l)),i!==s&&lt()!==s?(Y=t,t=function(t,e){return{type:"function",name:t,parameters:e||[]}}(r,n)):(G=t,t=s)):(G=t,t=s)):(G=t,t=s),t}function ut(){var t,e;return t=G,(e=ft())===s&&(e=dt())===s&&(e=pt())===s&&(e=function(){var t,e;return J++,t=G,lt()!==s&&(e=gt())!==s?(Y=t,t=function(t){return{value:t,unit:null}}(e)):(G=t,t=s),J--,t===s&&0===J&&it(F),t}()),e!==s&&(Y=t,e=function(t){return{type:"quantity",value:t.value,unit:t.unit}}(e)),(t=e)===s&&(t=G,(e=vt())!==s&&(Y=t,e=function(t){return{type:"color",colorType:t.type,value:t.value}}(e)),t=e),t}function lt(){var t,r;for(J++,t=[],d.test(e.charAt(G))?(r=e.charAt(G),G++):(r=s,0===J&&it(p));r!==s;)t.push(r),d.test(e.charAt(G))?(r=e.charAt(G),G++):(r=s,0===J&&it(p));return J--,t===s&&(r=s,0===J&&it(f)),t}function ht(){var t,r,n;if(J++,t=G,r=[],_.test(e.charAt(G))?(n=e.charAt(G),G++):(n=s,0===J&&it(y)),n!==s)for(;n!==s;)r.push(n),_.test(e.charAt(G))?(n=e.charAt(G),G++):(n=s,0===J&&it(y));else r=s;return r!==s&&(Y=t,r=Q()),J--,(t=r)===s&&(r=s,0===J&&it(m)),t}function ft(){var t,r,n;return J++,t=G,lt()!==s&&(r=gt())!==s?(37===e.charCodeAt(G)?(n="%",G++):(n=s,0===J&&it(S)),n!==s?(Y=t,t=function(t){return{value:t,unit:"%"}}(r)):(G=t,t=s)):(G=t,t=s),J--,t===s&&0===J&&it(A),t}function dt(){var t,r,n;return J++,t=G,lt()!==s&&(r=gt())!==s?("px"===e.substr(G,2)?(n="px",G+=2):(n=s,0===J&&it(E)),n!==s?(Y=t,t=function(t){return{value:t,unit:"px"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,lt()!==s&&(r=gt())!==s?("cm"===e.substr(G,2)?(n="cm",G+=2):(n=s,0===J&&it(w)),n!==s?(Y=t,t=function(t){return{value:t,unit:"cm"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,lt()!==s&&(r=gt())!==s?("mm"===e.substr(G,2)?(n="mm",G+=2):(n=s,0===J&&it(T)),n!==s?(Y=t,t=function(t){return{value:t,unit:"mm"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,lt()!==s&&(r=gt())!==s?("in"===e.substr(G,2)?(n="in",G+=2):(n=s,0===J&&it(I)),n!==s?(Y=t,t=function(t){return{value:t,unit:"in"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,lt()!==s&&(r=gt())!==s?("pt"===e.substr(G,2)?(n="pt",G+=2):(n=s,0===J&&it(b)),n!==s?(Y=t,t=function(t){return{value:t,unit:"pt"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,lt()!==s&&(r=gt())!==s?("pc"===e.substr(G,2)?(n="pc",G+=2):(n=s,0===J&&it(R)),n!==s?(Y=t,t=function(t){return{value:t,unit:"pc"}}(r)):(G=t,t=s)):(G=t,t=s)))))),J--,t===s&&0===J&&it(L),t}function pt(){var t,r,n;return J++,t=G,(r=gt())!==s?("deg"===e.substr(G,3)?(n="deg",G+=3):(n=s,0===J&&it(O)),n!==s?(Y=t,t=r=function(t){return{value:t,unit:"deg"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,(r=gt())!==s?("rad"===e.substr(G,3)?(n="rad",G+=3):(n=s,0===J&&it(x)),n!==s?(Y=t,t=r=function(t){return{value:t,unit:"rad"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,(r=gt())!==s?(e.substr(G,4)===V?(n=V,G+=4):(n=s,0===J&&it(C)),n!==s?(Y=t,t=r=function(t){return{value:t,unit:"grad"}}(r)):(G=t,t=s)):(G=t,t=s),t===s&&(t=G,(r=gt())!==s?(e.substr(G,4)===U?(n=U,G+=4):(n=s,0===J&&it(z)),n!==s?(Y=t,t=r=function(t){return{value:t,unit:"turn"}}(r)):(G=t,t=s)):(G=t,t=s)))),J--,t===s&&(r=s,0===J&&it(M)),t}function vt(){var t,r,n,i;if(J++,t=G,35===e.charCodeAt(G)?(r="#",G++):(r=s,0===J&&it(Z)),r!==s){if(n=[],B.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===J&&it(P)),i!==s)for(;i!==s;)n.push(i),B.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===J&&it(P));else n=s;n!==s?(Y=t,t=r={type:"hex",value:Q()}):(G=t,t=s)}else G=t,t=s;return t===s&&(t=G,(r=ct())!==s&&(Y=t,r=function(t){return{type:"function",value:t}}(r)),(t=r)===s&&(t=G,(r=ht())!==s&&(Y=t,r={type:"named",value:Q()}),t=r)),J--,t===s&&(r=s,0===J&&it(N)),t}function gt(){var t,r,n,i,a,o,c,u;if(t=G,W.test(e.charAt(G))?(r=e.charAt(G),G++):(r=s,0===J&&it(X)),r===s&&(r=null),r!==s){for(n=G,i=[],D.test(e.charAt(G))?(a=e.charAt(G),G++):(a=s,0===J&&it(q));a!==s;)i.push(a),D.test(e.charAt(G))?(a=e.charAt(G),G++):(a=s,0===J&&it(q));if(i!==s)if(46===e.charCodeAt(G)?(a=".",G++):(a=s,0===J&&it(k)),a!==s){if(o=[],D.test(e.charAt(G))?(c=e.charAt(G),G++):(c=s,0===J&&it(q)),c!==s)for(;c!==s;)o.push(c),D.test(e.charAt(G))?(c=e.charAt(G),G++):(c=s,0===J&&it(q));else o=s;o!==s?n=i=[i,a,o]:(G=n,n=s)}else G=n,n=s;else G=n,n=s;if(n===s)if(n=[],D.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===J&&it(q)),i!==s)for(;i!==s;)n.push(i),D.test(e.charAt(G))?(i=e.charAt(G),G++):(i=s,0===J&&it(q));else n=s;if(n!==s){if(i=G,101===e.charCodeAt(G)?(a="e",G++):(a=s,0===J&&it($)),a!==s)if(W.test(e.charAt(G))?(o=e.charAt(G),G++):(o=s,0===J&&it(X)),o===s&&(o=null),o!==s){if(c=[],D.test(e.charAt(G))?(u=e.charAt(G),G++):(u=s,0===J&&it(q)),u!==s)for(;u!==s;)c.push(u),D.test(e.charAt(G))?(u=e.charAt(G),G++):(u=s,0===J&&it(q));else c=s;c!==s?i=a=[a,o,c]:(G=i,i=s)}else G=i,i=s;else G=i,i=s;i===s&&(i=null),i!==s?(Y=t,t=r=parseFloat(Q())):(G=t,t=s)}else G=t,t=s}else G=t,t=s;return t}if((n=a())!==s&&G===e.length)return n;throw n!==s&&G<e.length&&it({type:"end"}),function(e,r,n){return new t(t.buildMessage(e,r),e,r,n)}(j,K<e.length?e.charAt(K):null,K<e.length?st(K,K+1):st(K,K))}}},(g=_).exports&&(g.exports=m());const w={deg:1,grad:.9,rad:180/Math.PI,turn:360},T={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/73};function I(t){!function(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new s.Z("effect:type-error",`Expected <double> or <percentage>, Actual: ${L(t)}`,{term:t})}(t);const e=t.value;return E(e,t),"%"===t.unit?.01*e:e}function b(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==T[t.unit])throw new s.Z("effect:type-error",`Expected <length>, Actual: ${L(t)}`,{term:t})}(t),t.value*T[t.unit]||0}function R(t){switch(t.colorType){case"hex":return(0,n.rW)(t.value);case"named":return M(t.value);case"function":return function(t){if(S(t.parameters,4),O.test(t.name))return[I(t.parameters[0]),I(t.parameters[1]),I(t.parameters[2]),t.parameters[3]?I(t.parameters[3]):1];if(x.test(t.name))return(0,n.B7)(function(t){return function(t){if("quantity"!==t.type||null!==t.unit)throw new s.Z("effect:type-error",`Expected <double>, Actual: ${L(t)}`,{term:t})}(t),E(t.value,t),t.value}(t.parameters[0]),I(t.parameters[1]),I(t.parameters[2]),t.parameters[3]?I(t.parameters[3]):1);throw new s.Z("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}(t.value)}}function M(t){const e=(0,n.VL)(t);if(!e)throw new s.Z("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return e}const O=/^rgba?/i,x=/^hsla?/i;function V(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new h(t.type,0);case"saturate":case"brightness":case"contrast":return new h(t.type,1);case"opacity":return new p(1);case"hue-rotate":return new d(0);case"blur":return new l(0);case"drop-shadow":return new f(0,0,0,[...(0,n.h$)("transparent")]);case"bloom":return new u(0,0,0)}}function C(t,e){const r=t.length>e.length?t:e;return(t.length>e.length?e:t).every(((t,e)=>t.type===r[e].type))}function U(t,e){const r=t.length>e.length?t:e,n=t.length>e.length?e:t;for(let t=n.length;t<r.length;t++)n.push(V(r[t]))}function z(t,e,r){return t+(e-t)*r}const F=class{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(t){if(t=t||"",this._effect===t)return;this._effect=t;const e=function(t){if(!t)return[];if("string"==typeof t){const e=y(t);return e.error?e.error:[{scale:-1,effects:e.effects}]}const e=[];for(const r of t){if(!isFinite(r.scale)||r.scale<=0)return new s.Z("effect:invalid-scale","scale must be finite and greater than 0",{stop:r});const t=y(r.value);if(t.error)return t.error;e.push({scale:r.scale,effects:t.effects})}e.sort(((t,e)=>e.effects.length-t.effects.length));for(let t=0;t<e.length-1;t++){if(!C(e[t].effects,e[t+1].effects))return new s.Z("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[t].effects,b:e[t+1].effects});U(e[t].effects,e[t+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}(t);Array.isArray(e)?this._transitionTo(e):(this._transitionTo([]),a.Z.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:t,error:e}))}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}_transitionTo(t){this.scale>0&&function(t,e,r){var n,s,i,a;return null==(n=t[0])||!n.effects||null==(s=e[0])||!s.effects||!((-1===(null==(i=t[0])?void 0:i.scale)||-1===(null==(a=e[0])?void 0:a.scale))&&(t.length>1||e.length>1)&&r<=0)&&C(t[0].effects,e[0].effects)}(this._current,t,this.scale)?(this._final=t,this._to=(0,i.d9)(t),function(t,e,r){var n,s;const i=t.length>e.length?t:e,a=t.length>e.length?e:t,o=a[a.length-1],c=null!=(n=null==o?void 0:o.scale)?n:r,u=null!=(s=null==o?void 0:o.effects)?s:[];for(let t=a.length;t<i.length;t++)a.push({scale:c,effects:[...u]});for(let t=0;t<i.length;t++)a[t].scale=-1===a[t].scale?r:a[t].scale,i[t].scale=-1===i[t].scale?r:i[t].scale,U(a[t].effects,i[t].effects)}(this._current,this._to,this.scale),this._from=(0,i.d9)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?(0,i.d9)(this._current[0].effects):[]}_applyTimeTransition(t){if(!this._to)return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const r=this._current[t],n=this._from[t],s=this._to[t];r.scale=z(n.scale,s.scale,e);for(let t=0;t<r.effects.length;t++){const i=r.effects[t],a=n.effects[t],o=s.effects[t];i.interpolate(a,o,e)}}1===e&&(this._current=this._final,this._effects=this._current[0]?(0,i.d9)(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,r=this._current.length-1;let n,s,i=1;if(1===e.length||t>=e[0].scale)s=n=e[0].effects;else if(t<=e[r].scale)s=n=e[r].effects;else for(let a=0;a<r;a++){const r=e[a],o=e[a+1];if(r.scale>=t&&o.scale<=t){i=(t-r.scale)/(o.scale-r.scale),n=r.effects,s=o.effects;break}}for(let t=0;t<this._effects.length;t++)this._effects[t].interpolate(n[t],s[t],i)}}}}]);