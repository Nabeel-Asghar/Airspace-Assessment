"use strict";(self.webpackChunkreact_esri_template=self.webpackChunkreact_esri_template||[]).push([[3134,508],{7855:(e,t,n)=>{n.d(t,{A:()=>V,B:()=>b,C:()=>D,D:()=>H,E:()=>I,F:()=>_,G:()=>C,H:()=>S,I:()=>j,J:()=>k,K:()=>L,a:()=>c,b:()=>a,c:()=>o,d:()=>u,e:()=>s,f:()=>f,g:()=>q,h:()=>l,i:()=>h,j:()=>m,k:()=>x,l:()=>v,m:()=>y,n:()=>w,o:()=>G,p:()=>M,q:()=>Z,r:()=>g,s:()=>N,t:()=>p,u:()=>z,v:()=>E,w:()=>d,x:()=>A,y:()=>R,z:()=>P});var i=n(65798),r=n(10165);function s(e){return i.G.extendedSpatialReferenceInfo(e)}function o(e,t,n){return i.G.clip(r.N,e,t,n)}function c(e,t,n){return i.G.cut(r.N,e,t,n)}function a(e,t,n){return i.G.contains(r.N,e,t,n)}function u(e,t,n){return i.G.crosses(r.N,e,t,n)}function f(e,t,n,s){return i.G.distance(r.N,e,t,n,s)}function l(e,t,n){return i.G.equals(r.N,e,t,n)}function h(e,t,n){return i.G.intersects(r.N,e,t,n)}function p(e,t,n){return i.G.touches(r.N,e,t,n)}function d(e,t,n){return i.G.within(r.N,e,t,n)}function m(e,t,n){return i.G.disjoint(r.N,e,t,n)}function G(e,t,n){return i.G.overlaps(r.N,e,t,n)}function g(e,t,n,s){return i.G.relate(r.N,e,t,n,s)}function x(e,t){return i.G.isSimple(r.N,e,t)}function N(e,t){return i.G.simplify(r.N,e,t)}function v(e,t,n=!1){return i.G.convexHull(r.N,e,t,n)}function y(e,t,n){return i.G.difference(r.N,e,t,n)}function w(e,t,n){return i.G.symmetricDifference(r.N,e,t,n)}function M(e,t,n){return i.G.intersect(r.N,e,t,n)}function z(e,t,n=null){return i.G.union(r.N,e,t,n)}function Z(e,t,n,s,o,c,a){return i.G.offset(r.N,e,t,n,s,o,c,a)}function E(e,t,n,s,o=!1){return i.G.buffer(r.N,e,t,n,s,o)}function A(e,t,n,s,o,c,a){return i.G.geodesicBuffer(r.N,e,t,n,s,o,c,a)}function R(e,t,n,s=!0){return i.G.nearestCoordinate(r.N,e,t,n,s)}function P(e,t,n){return i.G.nearestVertex(r.N,e,t,n)}function V(e,t,n,s,o){return i.G.nearestVertices(r.N,e,t,n,s,o)}function b(e,t,n,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const s=i.G.rotate(t,n,r);return s.spatialReference=e,s}function D(e,t,n){if(null==t||null==n)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(t,n);return r.spatialReference=e,r}function H(e,t,n){if(null==t||null==n)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(t,n);return r.spatialReference=e,r}function I(e,t,n,s,o){return i.G.generalize(r.N,e,t,n,s,o)}function _(e,t,n,s){return i.G.densify(r.N,e,t,n,s)}function C(e,t,n,s,o=0){return i.G.geodesicDensify(r.N,e,t,n,s,o)}function S(e,t,n){return i.G.planarArea(r.N,e,t,n)}function j(e,t,n){return i.G.planarLength(r.N,e,t,n)}function k(e,t,n,s){return i.G.geodesicArea(r.N,e,t,n,s)}function L(e,t,n,s){return i.G.geodesicLength(r.N,e,t,n,s)}var q=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:s,clip:o,cut:c,contains:a,crosses:u,distance:f,equals:l,intersects:h,touches:p,within:d,disjoint:m,overlaps:G,relate:g,isSimple:x,simplify:N,convexHull:v,difference:y,symmetricDifference:w,intersect:M,union:z,offset:Z,buffer:E,geodesicBuffer:A,nearestCoordinate:R,nearestVertex:P,nearestVertices:V,rotate:b,flipHorizontal:D,flipVertical:H,generalize:I,densify:_,geodesicDensify:C,planarArea:S,planarLength:j,geodesicArea:k,geodesicLength:L})},10165:(e,t,n)=>{n.d(t,{N:()=>i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const i=new r(e.getPointX(t),e.getPointY(t),n),s=e.hasZ(t),o=e.hasM(t);return s&&(i.z=e.getPointZ(t)),o&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new c(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const i=e.hasZ(t),r=e.hasM(t),s=new a(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class s{constructor(e,t,n,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(e,t,n,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class c{constructor(e,t,n,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(e,t,n,i,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},93134:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>i.v,clip:()=>i.c,contains:()=>i.b,convexHull:()=>i.l,crosses:()=>i.d,cut:()=>i.a,densify:()=>i.F,difference:()=>i.m,disjoint:()=>i.j,distance:()=>i.f,equals:()=>i.h,extendedSpatialReferenceInfo:()=>i.e,flipHorizontal:()=>i.C,flipVertical:()=>i.D,generalize:()=>i.E,geodesicArea:()=>i.J,geodesicBuffer:()=>i.x,geodesicDensify:()=>i.G,geodesicLength:()=>i.K,intersect:()=>i.p,intersects:()=>i.i,isSimple:()=>i.k,nearestCoordinate:()=>i.y,nearestVertex:()=>i.z,nearestVertices:()=>i.A,offset:()=>i.q,overlaps:()=>i.o,planarArea:()=>i.H,planarLength:()=>i.I,relate:()=>i.r,rotate:()=>i.B,simplify:()=>i.s,symmetricDifference:()=>i.n,touches:()=>i.t,union:()=>i.u,within:()=>i.w}),n(65798),n(10165);var i=n(7855)}}]);