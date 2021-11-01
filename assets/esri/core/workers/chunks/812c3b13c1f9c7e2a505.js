(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4448],{84448:(e,n,t)=>{"use strict";t.r(n),t.d(n,{createLabelFunction:()=>x,formatField:()=>d});var r=t(8811),s=t(45851),a=t(99605),l=t(8486),i=t(63454),u=t(3176),o=t(32555);const c=s.Z.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},f={getAttribute:(e,n)=>e.field(n)};async function x(e,n,s){if(!e||!e.symbol)return p;const a=e.where,l=(0,u.hV)(e),i=a?await Promise.resolve().then(t.bind(t,83343)):null;let x;if("arcade"===l.type){const e=await(0,o.WW)(l.expression,s,n);x={type:"arcade",evaluate(n){try{const t=e.evaluate({$feature:"attributes"in n?e.repurposeFeature(n):e.repurposeAdapter(n)});if(null!=t)return t.toString()}catch(e){c.error(new r.Z("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:n,expression:l}))}return null},needsHydrationToEvaluate:()=>null==(0,u.el)(l.expression)}}else x={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(t=>{const r=t.slice(1,-1),s=n.get(r);if(!s)return t;let a=null;return"attributes"in e?e&&e.attributes&&(a=e.attributes[s.name]):a=e.field(s.name),null==a?"":d(a,s)}))};if(a){let t;try{t=i.WhereClause.create(a,n)}catch(e){return p}const r=x.evaluate;x.evaluate=e=>{const n="attributes"in e?void 0:f;return t.testFeature(e,n)?r(e):null}}return x}function d(e,n){if(null==e)return"";const t=n.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const n=e;for(const e of t.codedValues)if(e.code===n)return e.name}else if("range"===t.type){const n=+e,r="range"in t?t.range[0]:t.minValue,s="range"in t?t.range[1]:t.maxValue;if(r<=n&&n<=s)return t.name}let r=e;return"date"===n.type||"esriFieldTypeDate"===n.type?r=(0,a.p6)(r,(0,a.Ze)("short-date")):(0,i.H7)(n)&&(r=(0,l.uf)(+r)),r||""}},3176:(e,n,t)=>{"use strict";t.d(n,{dI:()=>d,hV:()=>p,YI:()=>f,UO:()=>x,el:()=>m,z7:()=>c});var r=t(86228);const s="__begin__",a="__end__",l=new RegExp(s,"ig"),i=new RegExp(a,"ig"),u=new RegExp("^"+s,"i"),o=new RegExp(a+"$","i");function c(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function p(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function f(e){const n=p(e);if(!n)return null;switch(n.type){case"conventional":return d(n.expression);case"arcade":return n.expression}return null}function x(e){const n=p(e);if(!n)return null;switch(n.type){case"conventional":return function(e){const n=e.match(g);return n&&n[1].trim()||null}(n.expression);case"arcade":return m(n.expression)}return null}function d(e){let n;return e?(n=(0,r.gx)(e,(e=>s+'$feature["'+e+'"]'+a)),n=u.test(n)?n.replace(u,""):'"'+n,n=o.test(n)?n.replace(o,""):n+'"',n=n.replace(l,'" + ').replace(i,' + "')):n='""',n}const g=/^\s*\{([^}]+)\}\s*$/i,b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,y=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function m(e){if(!e)return null;let n=b.exec(e)||w.exec(e);return n?n[1]||n[3]:(n=y.exec(e),n?n[2]:null)}}}]);