"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[6314],{78048:(e,t,r)=>{r.d(t,{e:()=>a});var n,i,s={exports:{}};n=s,void 0!==(i=function(){function e(e,r,i){i=i||2;var s,a,o,u,c,v,h,d=r&&r.length,p=d?r[0]*i:e.length,x=t(e,0,p,i,!0),f=[];if(!x||x.next===x.prev)return f;if(d&&(x=l(e,r,x,i)),e.length>80*i){s=o=e[0],a=u=e[1];for(var y=i;y<p;y+=i)(c=e[y])<s&&(s=c),(v=e[y+1])<a&&(a=v),c>o&&(o=c),v>u&&(u=v);h=0!==(h=Math.max(o-s,u-a))?1/h:0}return n(x,f,i,s,a,h),f}function t(e,t,r,n,i){var s,a;if(i===M(e,t,r,n)>0)for(s=t;s<r;s+=n)a=L(s,e[s],e[s+1],a);else for(s=r-n;s>=t;s-=n)a=L(s,e[s],e[s+1],a);return a&&g(a,a.next)&&(T(a),a=a.next),a}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!g(n,n.next)&&0!==y(n.prev,n,n.next))n=n.next;else{if(T(n),(n=t=n.prev)===n.next)break;r=!0}}while(r||n!==t);return t}function n(e,t,l,u,c,v,d){if(e){!d&&v&&h(e,u,c,v);for(var p,x,f=e;e.prev!==e.next;)if(p=e.prev,x=e.next,v?s(e,u,c,v):i(e))t.push(p.i/l),t.push(e.i/l),t.push(x.i/l),T(e),e=x.next,f=x.next;else if((e=x)===f){d?1===d?n(e=a(r(e),t,l),t,l,u,c,v,2):2===d&&o(e,t,l,u,c,v):n(r(e),t,l,u,c,v,1);break}}}function i(e){var t=e.prev,r=e,n=e.next;if(y(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(x(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&y(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function s(e,t,r,n){var i=e.prev,s=e,a=e.next;if(y(i,s,a)>=0)return!1;for(var o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,u=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,c=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,v=d(o,l,t,r,n),h=d(u,c,t,r,n),p=e.prevZ,f=e.nextZ;p&&p.z>=v&&f&&f.z<=h;){if(p!==e.prev&&p!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;if(p=p.prevZ,f!==e.prev&&f!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&y(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(;p&&p.z>=v;){if(p!==e.prev&&p!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=h;){if(f!==e.prev&&f!==e.next&&x(i.x,i.y,s.x,s.y,a.x,a.y,f.x,f.y)&&y(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function a(e,t,n){var i=e;do{var s=i.prev,a=i.next.next;!g(s,a)&&S(s,i,i.next,a)&&V(s,a)&&V(a,s)&&(t.push(s.i/n),t.push(i.i/n),t.push(a.i/n),T(i),T(i.next),i=e=a),i=i.next}while(i!==e);return r(i)}function o(e,t,i,s,a,o){var l=e;do{for(var u=l.next.next;u!==l.prev;){if(l.i!==u.i&&f(l,u)){var c=b(l,u);return l=r(l,l.next),c=r(c,c.next),n(l,t,i,s,a,o),void n(c,t,i,s,a,o)}u=u.next}l=l.next}while(l!==e)}function l(e,n,i,s){var a,o,l,v=[];for(a=0,o=n.length;a<o;a++)(l=t(e,n[a]*s,a<o-1?n[a+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),v.push(p(l));for(v.sort(u),a=0;a<v.length;a++)i=r(i=c(v[a],i),i.next);return i}function u(e,t){return e.x-t.x}function c(e,t){var n=function(e,t){var r,n=t,i=e.x,s=e.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a){if(a=o,o===i){if(s===n.y)return n;if(s===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===a)return r;var l,u=r,c=r.x,h=r.y,d=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&x(s<h?i:a,s,c,h,s<h?a:i,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(i-n.x),V(n,e)&&(l<d||l===d&&(n.x>r.x||n.x===r.x&&v(r,n)))&&(r=n,d=l)),n=n.next}while(n!==u);return r}(e,t);if(!n)return t;var i=b(n,e),s=r(n,n.next);return r(i,i.next),t===n?s:t}function v(e,t){return y(e.prev,e,t.prev)<0&&y(t.next,e,e.next)<0}function h(e,t,r,n){var i=e;do{if(null===i.z&&(i.z=d(i.x,i.y,t,r,n)),i.prev.next!==i||i.next.prev!==i)return i.prev.next=i,i.next.prev=i,h(e,t,r,n);i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,r,n,i,s,a,o,l,u=1;do{for(r=e,e=null,s=null,a=0;r;){for(a++,n=r,o=0,t=0;t<u&&(o++,n=n.nextZ);t++);for(l=u;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:e=i,i.prevZ=s,s=i;r=n}s.nextZ=null,u*=2}while(a>1)}(i)}function d(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function x(e,t,r,n,i,s,a,o){return(i-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(r-a)*(t-o)>=0&&(r-a)*(s-o)-(i-a)*(n-o)>=0}function f(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&S(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(V(e,t)&&V(t,e)&&function(e,t){var r=e,n=!1,i=(e.x+t.x)/2,s=(e.y+t.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}(e,t)&&(y(e.prev,e,t.prev)||y(e,t.prev,t))||g(e,t)&&y(e.prev,e,e.next)>0&&y(t.prev,t,t.next)>0)}function y(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function g(e,t){return e.x===t.x&&e.y===t.y}function S(e,t,r,n){var i=_(y(e,t,r)),s=_(y(e,t,n)),a=_(y(r,n,e)),o=_(y(r,n,t));return i!==s&&a!==o||!(0!==i||!m(e,r,t))||!(0!==s||!m(e,n,t))||!(0!==a||!m(r,e,n))||!(0!==o||!m(r,t,n))}function m(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function _(e){return e>0?1:e<0?-1:0}function V(e,t){return y(e.prev,e,e.next)<0?y(e,t,e.next)>=0&&y(e,e.prev,t)>=0:y(e,t,e.prev)<0||y(e,e.next,t)<0}function b(e,t){var r=new z(e.i,e.x,e.y),n=new z(t.i,t.x,t.y),i=e.next,s=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function L(e,t,r,n){var i=new z(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function T(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function z(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(e,t,r,n){for(var i=0,s=t,a=r-n;s<r;s+=n)i+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return i}return e.deviation=function(e,t,r,n){var i=t&&t.length,s=i?t[0]*r:e.length,a=Math.abs(M(e,0,s,r));if(i)for(var o=0,l=t.length;o<l;o++){var u=t[o]*r,c=o<l-1?t[o+1]*r:e.length;a-=Math.abs(M(e,u,c,r))}var v=0;for(o=0;o<n.length;o+=3){var h=n[o]*r,d=n[o+1]*r,p=n[o+2]*r;v+=Math.abs((e[h]-e[p])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[p+1]-e[h+1]))}return 0===a&&0===v?0:Math.abs((v-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var s=0;s<e[i].length;s++)for(var a=0;a<t;a++)r.vertices.push(e[i][s][a]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},e}())&&(n.exports=i);var a=s.exports},96540:(e,t,r)=>{r.d(t,{vX:()=>u,s5:()=>o,k3:()=>l,Or:()=>a}),Number.POSITIVE_INFINITY;const n=128/Math.PI,i=1/Math.LN2;function s(e,t){return(e%=t)>=0?e:e+t}function a(e){return s(e*n,256)}function o(e){return s(.7111111111111111*e,256)}function l(e){return Math.log(e)*i}function u(e,t,r){return e>=t&&e<=r||e>=r&&e<=t}},9709:(e,t,r)=>{r.d(t,{dk:()=>d,Gq:()=>y,a:()=>x,mE:()=>p,m2:()=>l,qr:()=>f,jj:()=>a,hF:()=>o});var n=r(32656),i=r(31514),s=r(49269);function a(e,t,r,n,s){switch(e){case i.LW.FILL:return d.from(t,n);case i.LW.LINE:return x.from(t,r);case i.LW.MARKER:return p.from(t);case i.LW.TEXT:return f.from(t);case i.LW.LABEL:return y.from(t,s);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${e}`)}}function o(e){switch(l.load(e).geometryType){case i.LW.MARKER:return new p(e);case i.LW.FILL:return new d(e);case i.LW.LINE:return new x(e);case i.LW.TEXT:return new f(e);case i.LW.LABEL:return new y(e)}}class l{constructor(e){this._data=0,this._data=e}static load(e){const t=this.shared;return t.data=e,t}set data(e){this._data=e}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(e){this.setBits(e,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(e){this.setBit(20,e)}get sdf(){return!!this.bit(11)}set sdf(e){this.setBit(11,e)}get pattern(){return!!this.bit(12)}set pattern(e){this.setBit(12,e)}get textureBinding(){return this.bits(0,8)}set textureBinding(e){this.setBits(e,0,8)}get geometryTypeString(){switch(this.geometryType){case i.LW.FILL:return"fill";case i.LW.MARKER:return"marker";case i.LW.LINE:return"line";case i.LW.TEXT:return"text";case i.LW.LABEL:return"label";default:throw new n.Z(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(e,t){const r=1<<e;t?this._data|=r:this._data&=~r}bit(e){return(this._data&1<<e)>>e}setBits(e,t,r){for(let n=t,i=0;n<r;n++,i++)this.setBit(n,0!=(e&1<<i))}bits(e,t){let r=0;for(let n=e,i=0;n<t;n++,i++)r|=this.bit(n)<<i;return r}hasVV(){return!1}setVV(e,t){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}l.shared=new l(0);const u=e=>class extends e{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(e){this.setBit(16,e)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(e){this.setBit(17,e)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(e){this.setBit(18,e)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(e){this.setBit(19,e)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(e,t){super.setVV(e,t);const r=function(e,t=!1){const r=i.X.SIZE_FIELD_STOPS|i.X.SIZE_MINMAX_VALUE|i.X.SIZE_SCALE_STOPS|i.X.SIZE_UNIT_VALUE,n=(e&(i.mf.FIELD_TARGETS_OUTLINE|i.mf.MINMAX_TARGETS_OUTLINE|i.mf.SCALE_TARGETS_OUTLINE|i.mf.UNIT_TARGETS_OUTLINE))>>>4;return t?r&n:r&~n}(e,t)&e;this.vvSizeMinMaxValue=!!(r&i.X.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(r&i.X.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(r&i.X.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(r&i.X.SIZE_SCALE_STOPS)}},c=e=>class extends e{get vvRotation(){return 0!==this.bit(15)}set vvRotation(e){this.setBit(15,e)}hasVV(){return super.hasVV()||this.vvRotation}setVV(e,t){super.setVV(e,t),this.vvRotation=!t&&!!(e&i.X.ROTATION)}},v=e=>class extends e{get vvColor(){return 0!==this.bit(13)}set vvColor(e){this.setBit(13,e)}hasVV(){return super.hasVV()||this.vvColor}setVV(e,t){super.setVV(e,t),this.vvColor=!t&&!!(e&i.X.COLOR)}},h=e=>class extends e{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(e){this.setBit(14,e)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(e,t){super.setVV(e,t),this.vvOpacity=!t&&!!(e&i.X.OPACITY)}};class d extends(v(h(l))){static load(e){const t=this.shared;return t.data=e,t}static from(e,t){const r=this.load(0);return r.geometryType=i.LW.FILL,t?r.dotDensity=!0:r.setVV(e,!1),r.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(e){this.setBit(15,e)}}d.shared=new d(0);class p extends(v(h(c(u(l))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(0);return t.geometryType=i.LW.MARKER,t.setVV(e,!1),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}p.shared=new p(0);class x extends(v(h(u(l)))){static load(e){const t=this.shared;return t.data=e,t}static from(e,t){const r=this.load(0);return r.geometryType=i.LW.LINE,r.setVV(e,t),r.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}x.shared=new x(0);class f extends(v(h(c(u(l))))){static load(e){const t=this.shared;return t.data=e,t}static from(e){const t=this.load(e);return t.geometryType=i.LW.TEXT,t.setVV(e,!1),t.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}f.shared=new f(0);class y extends(u(l)){static load(e){const t=this.shared;return t.data=e,t}static from(e,t){const r=this.load(0);return r.geometryType=i.LW.LABEL,r.setVV(e,!1),r.mapAligned=(0,s.N)(t),r.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0)},49269:(e,t,r)=>{function n(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{N:()=>n})},31887:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(56140),i=r(77204),s=r(79881),a=(r(95830),r(68055),r(36544),r(87566));let o=class extends i.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,n._)([(0,s.Cb)({readOnly:!0})],o.prototype,"supportsTileUpdates",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"remoteClient",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"service",void 0),(0,n._)([(0,s.Cb)()],o.prototype,"spatialReference",null),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileInfo",void 0),(0,n._)([(0,s.Cb)({constructOnly:!0})],o.prototype,"tileStore",void 0),o=(0,n._)([(0,a.j)("esri.views.2d.layers.features.processors.BaseProcessor")],o);const l=o},50353:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var n=r(56140),i=(r(32656),r(95830)),s=r(36544),a=r(59472),o=r(39105),l=(r(79881),r(68055),r(87566)),u=r(23229),c=r(73032),v=r(83302),h=r(48041),d=r(80264),p=r(45672),x=r(10321),f=r(84767),y=r(67863),g=r(44840),S=r(31887),m=r(28487);function _(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function V(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey},transferList:new Array};for(const e in t.data){const n=t.data[e];if(r.message.data[e]=null,(0,a.pC)(n)){const t=n.stride,i=n.indices.slice(0),s=n.vertices.slice(0),o=n.records.slice(0),l={stride:t,indices:i,vertices:s,records:o,metrics:(0,a.Po)(n.metrics,(e=>e.slice(0)))};r.transferList.push(i,s,o),r.message.data[e]=l}}return r}s.Z.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let b=class extends S.Z{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}destroy(){}get supportsTileUpdates(){return!0}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const n=(0,u.Hg)(this._schema,r);(0,u.uD)(n,"mesh")&&((0,i.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",n),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,r,n){return(0,o.k_)(n),this._onTileData(e,t,r,n)}onTileClear(e){return this._bufferData.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}onTileError(e,t,r){const n=r.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:n})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&(this._bufferData.get(t.key.id).forEach((e=>{const t=new Set;(0,v.Z_)((r=>{const n=e.message.data[r];if((0,a.pC)(n)){const e=h.$.from(n.records).getCursor();for(;e.next();)t.add(e.id)}}));const r=e.message.tileKey;return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:r,data:{type:"update",addOrUpdate:null}})})),this._bufferData.delete(t.key.id));for(const t of e.added)this._bufferData.forEach((e=>{for(const r of e)r.message.tileKey===t.id&&this._updateTileMesh("append",t,V(r),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(V(t))}_createFactory(e){const{geometryType:t,objectIdField:r,fields:n}=this.service,i={geometryType:t,fields:n,spatialReference:c.Z.fromJSON(this.spatialReference)},s=new x.W(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:o,aggregateMatcher:l}=e.mesh;return this._store=s,this._matchers.feature=(0,y.fL)(o,s,i),this._matchers.aggregate=(0,a.Po)(l,(e=>(0,y.fL)(e,s,i))),new p.j(t,r,s)}async _onTileData(e,t,r,n){const{type:i,addOrUpdate:s,remove:l}=t,u=t.end;if(!s){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}const c=this._processFeatures(e,s,r,n);try{const r=await c;if((0,a.Wi)(r)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},n)}for(const t of r)e.key.id!==t.message.tileKey&&this._addBufferData(e.key.id,t);await(0,o.$6)(r.map((r=>{const s=e.key.id===r.message.tileKey,a=s?t.remove:[],o=s&&t.end;return this._updateTileMesh(i,e,r,a,o,t.clear,n.signal)})))}catch(t){this._handleError(e,t,n)}}async _updateTileMesh(e,t,r,n,i,s,l){const u=e,c=r.message.tileKey;c!==t.key.id&&(i=!1);const v=(0,a.Po)(r,(e=>e.message)),h=(0,a.Po)(r,(e=>e.transferList))||[],d={type:u,addOrUpdate:v,remove:n,clear:!1,end:i},p={transferList:(0,a.Wg)(h)||[],signal:l};return(0,o.k_)(p),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:d},p)}async _processFeatures(e,t,r,n){if((0,a.Wi)(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},s=this._factory,l={viewingMode:"",scale:e.scale},u=await this._matchers.feature,c=await this._matchers.aggregate;(0,o.k_)(n);const v=this._getLabelInfos(e,t);return await s.analyze(t.getCursor(),u,c,i,l),(0,o.k_)(n),this._writeFeatureSet(e,t,i,v,s,r)}_writeFeatureSet(e,t,r,n,i,s){const o=t.getSize(),l="simple"===this._schema.mesh.matcher.type&&this._schema.mesh.matcher.isDotDensity,u=new d._(e.key.id,{features:o,records:o,metrics:0},l,s,!0),c={viewingMode:"",scale:e.scale},v=t.getCursor();for(;v.next();)try{const t=v.getDisplayId(),s=(0,a.pC)(n)?n.get(t):null;i.writeCursor(u,v,r,c,e.level,s)}catch(e){}const h=e.tileInfoView.tileInfo.isWrappable;return u.serialize(h)}_handleError(e,t,r){if(!(0,o.D_)(t)){const n={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",n,{signal:r.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if((0,a.Wi)(t))return null;if("subtype"===t.type){const r={type:"subtype",classes:{}};let n=!1;for(const i in t.classes){const s=t.classes[i].filter((t=>_(t,e.scale)));n=n||!!s.length,r.classes[i]=s}return n?r:null}const r=t.classes.filter((t=>_(t,e.scale)));return r.length?{type:"simple",classes:r}:null}_getLabels(e,t){if("subtype"===t.type){var r;const n=this.service.subtypeField,i=(0,a.s3)(n,"Expected to find subtype Field"),s=e.readAttribute(i);return null==s?[]:null!=(r=t.classes[s])?r:[]}return t.classes}_getLabelInfos(e,t){const r=this._getLabelingSchemaForScale(e);if((0,a.Wi)(r))return null;const n=new Map,i=t.getCursor();for(;i.next();){const e=i.getDisplayId(),t=[],s=(0,m.nE)(e),a=s&&1!==i.readAttribute("cluster_count")?"aggregate":"feature",o=this._getLabels(i,r);for(const r of o){if(r.target!==a)continue;const n=i.getStorage(),o=s&&"feature"===a?n.getComputedStringAtIndex(i.readAttribute("referenceId"),r.fieldIndex):n.getComputedStringAtIndex(e,r.fieldIndex);if(!o)continue;const l=(0,f.E)(o.toString()),u=l[0],c=l[1];this._store.getMosaicItem(r.symbol,(0,g._)(u)).then((e=>{t[r.index]={glyphs:e.glyphMosaicItems,rtl:c,index:r.index}}))}n.set(e,t)}return n}};b=(0,n._)([(0,l.j)("esri.views.2d.layers.features.processors.SymbolProcessor")],b);const L=b}}]);