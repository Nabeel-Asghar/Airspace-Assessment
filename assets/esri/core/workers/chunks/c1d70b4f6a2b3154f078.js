(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[704],{69238:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(77645),n=r(47987);const o=4294967296,i=(0,s.Z)("esri-text-decoder")?new TextDecoder("utf-8"):null,a=(0,s.Z)("safari")||(0,s.Z)("ios")?6:(0,s.Z)("ff")?12:32;class u{constructor(e,t,r=0,s=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,r,s)}init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}clone(){return new u(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*o;return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*o;return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),o=e(n,t,r,s);return n.release(),o}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=u.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){u.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,r=this._pos,s=0;if(this._end-r>=10)do{if(t=e[r++],s|=127&t,0==(128&t))break;if(t=e[r++],s|=(127&t)<<7,0==(128&t))break;if(t=e[r++],s|=(127&t)<<14,0==(128&t))break;if(t=e[r++],s|=(127&t)<<21,0==(128&t))break;if(t=e[r++],s+=268435456*(127&t),0==(128&t))break;if(t=e[r++],s+=34359738368*(127&t),0==(128&t))break;if(t=e[r++],s+=4398046511104*(127&t),0==(128&t))break;if(t=e[r++],s+=562949953421312*(127&t),0==(128&t))break;if(t=e[r++],s+=72057594037927940*(127&t),0==(128&t))break;if(t=e[r++],s+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;r!==this._end&&(t=e[r],0!=(128&t));)++r,s+=(127&t)*n,n*=128;if(r===this._end)throw new Error("Varint overrun!");++r,s+=t*n}return this._pos=r,s}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>a&&i){const s=e.subarray(t,r);return i.decode(s)}let s="",n="";for(let o=t;o<r;++o){const t=e[o];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}u.pool=new n.Z(u,null,(e=>{e._data=null,e._dataView=null}));const c=u},70128:(e,t,r)=>{"use strict";r.d(t,{K9:()=>q,O7:()=>d,G$:()=>I});var s=r(8811),n=r(67380),o=r(69238),i=r(47369),a=r(16264);const u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],c=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],l=["upperLeft","lowerLeft"];function d(e){return e>=u.length?null:u[e]}function h(e){return e>=c.length?null:c[e]}function p(e){return e>=l.length?null:l[e]}function f(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function y(e,t,r){const s=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case 3:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addCoordinatePoint(s,e.getSInt64(),o++);break}case 1:case 2:default:e.skip()}return s}function g(e,t,r){const s=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addLength(s,e.getUInt32(),o++);break}case 3:{const r=e.getUInt32(),o=e.pos()+r;let i=0;for(t.allocateCoordinates(s);e.pos()<o;)t.addCoordinate(s,e.getSInt64(),i),i++,i===n&&(i=0);break}case 1:default:e.skip()}return s}function m(e){const t=new i.Z;let r="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.lengths.push(e.getUInt32());break}case 3:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.coords.push(e.getSInt64());break}case 1:r=a.A[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function b(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function _(e){const t={type:d(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=d(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=h(e.getEnum());break;case 5:e.skip();break;case 6:t.defaultValue=e.getString();break;default:e.skip()}return t}function S(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function F(e,t,r,s){const n=t.createFeature(r);let o=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[o++].name;n.attributes[t]=e.processMessage(b);break}case 2:n.geometry=e.processMessageWithArgs(g,t,r);break;case 4:n.centroid=e.processMessageWithArgs(y,t,r);break;default:e.skip()}return n}function k(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function x(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function I(e){const t={originPosition:p(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=p(e.getEnum());break;case 2:t.scale=e.processMessage(k);break;case 3:t.translate=e.processMessage(x);break;default:e.skip()}return t}function w(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function O(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function C(e,t){const r=t.createFeatureResult();r.geometryType=f(t,0);let s=!1;for(;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(w);break;case 7:r.geometryType=f(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(O,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(I);break;case 9:{const t=e.getBool();r.exceededTransferLimit=t;break}case 13:t.addField(r,e.processMessage(_));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,e.processMessageWithArgs(F,t,r,r.fields));break;case 2:r.uniqueIdField=e.processMessage(S);break;case 6:default:e.skip()}return t.finishFeatureResult(r),r}function T(e,t){const r={};let s=null;for(;e.next();)switch(e.tag()){case 4:s=e.processMessageWithArgs(m);break;case 1:r.featureResult=e.processMessageWithArgs(C,t);break;case 2:case 3:default:e.skip()}return(0,n.pC)(s)&&r.featureResult&&t.addQueryGeometry(r,s),r}function q(e,t){try{const r=2,s=new o.Z(new Uint8Array(e),new DataView(e)),n={};for(;s.next();)switch(s.tag()){case r:n.queryResult=s.processMessageWithArgs(T,t);break;default:s.skip()}return n}catch(e){throw new s.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},16264:(e,t,r)=>{"use strict";r.d(t,{A:()=>u,J:()=>c});var s=r(30817),n=r(31174),o=r(96535),i=r(96442),a=r(47369);const u=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class c{constructor(e){this.options=e,this.geometryTypes=u,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new i.Z}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,n.fS)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,s._R)(this.options.sourceSpatialReference)/(0,s._R)(e.spatialReference);if(1!==t)for(const r of e.features){if(!r.geometry||!r.geometry.coords)continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new o.Z}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.Z}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.Z}}},59347:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});var s=r(70128);function n(e,t){const r=(0,s.K9)(e,t),n=r.queryResult.featureResult,o=r.queryResult.queryGeometry,i=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=o,n.queryGeometryType=i),n}},31295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{executeQuery:()=>p,executeQueryForCount:()=>m,executeQueryForExtent:()=>b,executeQueryForIds:()=>g,executeQueryPBF:()=>f,executeQueryPBFBuffer:()=>y,queryToQueryStringParameters:()=>h,runQuery:()=>_});var s=r(93100),n=r(67380),o=r(99204),i=r(64334),a=r(1688),u=r(59347),c=r(80312),l=r(81472);const d="Layer does not support extent calculation.";function h(e,t){const r=e.geometry,s=e.toJSON(),o=s;if((0,n.pC)(r)&&(o.geometry=JSON.stringify(r),o.geometryType=(0,i.Ji)(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),s.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=s.groupByFieldsForStatistics.join(",")),s.objectIds&&(o.objectIds=s.objectIds.join(",")),s.orderByFields&&(o.orderByFields=s.orderByFields.join(",")),!s.outFields||!s.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete o.outFields:-1!==s.outFields.indexOf("*")?o.outFields="*":o.outFields=s.outFields.join(","),s.outSR?o.outSR=s.outSR.wkid||JSON.stringify(s.outSR):r&&(s.returnGeometry||s.returnCentroid)&&(o.outSR=o.inSR),s.returnGeometry&&delete s.returnGeometry,s.outStatistics&&(o.outStatistics=JSON.stringify(s.outStatistics)),s.pixelSize&&(o.pixelSize=JSON.stringify(s.pixelSize)),s.quantizationParameters&&(o.quantizationParameters=JSON.stringify(s.quantizationParameters)),s.parameterValues&&(o.parameterValues=JSON.stringify(s.parameterValues)),s.rangeValues&&(o.rangeValues=JSON.stringify(s.rangeValues)),s.dynamicDataSource&&(o.layer=JSON.stringify({source:s.dynamicDataSource}),delete s.dynamicDataSource),s.timeExtent){const e=s.timeExtent,{start:t,end:r}=e;null==t&&null==r||(o.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete s.timeExtent}return o}async function p(e,t,r,s){const o=(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await _(e,t,"json",s);return(0,c.p)(t,r,o.data),o}async function f(e,t,r,s){if((0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty)return Promise.resolve({data:r.createFeatureResult()});const o=await y(e,t,s),i=o;return i.data=(0,u.C)(o.data,r),i}function y(e,t,r){return _(e,t,"pbf",r)}function g(e,t,r){return(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):_(e,t,"json",r,{returnIdsOnly:!0})}function m(e,t,r){return(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):_(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function b(e,t,r){return(0,n.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):_(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(d);if(t.hasOwnProperty("count"))throw new Error(d);return e}))}function _(e,t,r,i={},u={}){const c="string"==typeof e?(0,o.mN)(e):e,d=t.geometry?[t.geometry]:[];return i.responseType="pbf"===r?"array-buffer":"json",(0,a.aX)(d,null,i).then((e=>{const a=e&&e[0];(0,n.pC)(a)&&((t=t.clone()).geometry=a);const d=(0,l.A)({...c.query,f:r,...u,...h(t,u)});return(0,s.default)((0,o.v_)(c.path,"query"),{...i,query:{...d,...i.query}})}))}},92422:(e,t,r)=>{"use strict";r.d(t,{X:()=>b,O:()=>m});var s,n=r(27512),o=r(93100),i=r(99204),a=r(14983),u=r(42963),c=r(84066),l=(r(77645),r(38215)),d=(r(45851),r(74184));const h={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let p=s=class extends u.wq{constructor(e){super(e),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:e}=this,t=function(e){const{exifInfo:t,exifName:r,tagName:s}=e;if(!t||!r||!s)return null;const n=t.find((e=>e.name===r));return n?function(e){const{tagName:t,tags:r}=e;if(!r||!t)return null;const s=r.find((e=>e.name===t));return s&&s.value||null}({tagName:s,tags:n.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e});return h[t]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,a._)([(0,c.Cb)({type:String})],p.prototype,"contentType",void 0),(0,a._)([(0,c.Cb)()],p.prototype,"exifInfo",void 0),(0,a._)([(0,c.Cb)({readOnly:!0})],p.prototype,"orientationInfo",null),(0,a._)([(0,c.Cb)({type:l.z8})],p.prototype,"id",void 0),(0,a._)([(0,c.Cb)({type:String})],p.prototype,"globalId",void 0),(0,a._)([(0,c.Cb)({type:String})],p.prototype,"keywords",void 0),(0,a._)([(0,c.Cb)({type:String})],p.prototype,"name",void 0),(0,a._)([(0,c.Cb)({json:{read:!1}})],p.prototype,"parentGlobalId",void 0),(0,a._)([(0,c.Cb)({json:{read:!1}})],p.prototype,"parentObjectId",void 0),(0,a._)([(0,c.Cb)({type:l.z8})],p.prototype,"size",void 0),(0,a._)([(0,c.Cb)({json:{read:!1}})],p.prototype,"url",void 0),p=s=(0,a._)([(0,d.j)("esri.layers.support.AttachmentInfo")],p);const f=p;var y=r(81472);function g(e){const t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function m(e,t){const r={};for(const s of e){const{parentObjectId:e,parentGlobalId:o,attachmentInfos:a}=s;for(const s of a){const{id:a}=s,u=(0,i.qg)((0,n.Dp)(`${t}/${e}/attachments/${a}`)),c=f.fromJSON(s);c.set({url:u,parentObjectId:e,parentGlobalId:o}),r[e]?r[e].push(c):r[e]=[c]}}return r}function b(e,t,r){let s={query:(0,y.A)({...e.query,f:"json",...g(t)})};return r&&(s={...r,...s,query:{...r.query,...s.query}}),(0,o.default)(e.path+"/queryAttachments",s)}},59467:(e,t,r)=>{"use strict";r.d(t,{lA:()=>n,cv:()=>i,en:()=>o});var s=r(99204);function n(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function o(e){return"string"==typeof e?(0,s.mN)(e):e}function i(e,t,r){const s={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let e=0;e<o.length;e++)s[n][e]=i(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?o:JSON.stringify(o);else s[n]=o}return s}},70704:(e,t,r)=>{"use strict";r.d(t,{Z:()=>M});var s=r(14983),n=r(8811),o=r(77645),i=r(67380),a=r(8764),u=r(84066),c=(r(38215),r(45851),r(74184)),l=r(90305),d=r(59467),h=r(92422),p=r(79849),f=r(31295),y=r(4271);r(18507);var g=r(56368),m=r(8669),b=r(17253),_=r(54997),S=r(81956);function F(e,t){return t}function k(e,t,r,s){switch(r){case 0:return O(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?O(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function x(e,t,r,s){switch(r){case 2:return O(e,t,2);default:return k(e,t,r,s)}}function I(e,t,r,s){switch(r){case 2:return O(e,t,3);default:return k(e,t,r,s)}}function w(e,t,r,s){switch(r){case 3:return O(e,t,3);default:return x(e,t,r,s)}}function O({translate:e,scale:t},r,s){return e[s]+r*t[s]}class C{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=F,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,S.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:(0,b.Bg)(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=(0,_.$g)(r.clone(),r,!1,!1,this.transform),o=(0,_.di)(n,s,!1,!1);e.queryGeometryType=s,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),n=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?w:t?x:r?I:k}}var T=r(93100),q=r(81472);function R(e,t){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!=t&&t.returnCountOnly?delete r.outFields:-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function j(e,t,r={},s){const n=(0,q.A)({...e.query,f:"json",...s,...R(t,s)});return(0,T.default)(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...n}})}var D=r(9393),v=r(99204),P=r(64334),G=r(1688),N=r(80312);const V="Layer does not support extent calculation.";function E(e,t){var r,s;const n=e.geometry,o=e.toJSON(),a=o;if((0,i.pC)(n)&&(a.geometry=JSON.stringify(n),a.geometryType=(0,P.Ji)(n),a.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),null!=(r=o.topFilter)&&r.groupByFields&&(a.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!=(s=o.topFilter)&&s.orderByFields&&(a.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(a.topFilter=JSON.stringify(a.topFilter)),o.objectIds&&(a.objectIds=o.objectIds.join(",")),o.orderByFields&&(a.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?-1!==o.outFields.indexOf("*")?a.outFields="*":a.outFields=o.outFields.join(","):delete a.outFields,o.outSR?a.outSR=o.outSR.wkid||JSON.stringify(o.outSR):n&&o.returnGeometry&&(a.outSR=a.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const e=o.timeExtent,{start:t,end:r}=e;null==t&&null==r||(a.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete o.timeExtent}return a}function Z(e,t,r,s={},n={}){const o="string"==typeof e?(0,v.mN)(e):e,a=t.geometry?[t.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,G.aX)(a,null,s).then((e=>{const a=e&&e[0];(0,i.pC)(a)&&((t=t.clone()).geometry=a);const u=(0,q.A)({...o.query,f:r,...n,...E(t,n)});return(0,T.default)((0,v.v_)(o.path,"queryTopFeatures"),{...s,query:{...u,...s.query}})}))}var B=r(93641),J=r(62636);let A=class extends J.Z{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(e,t){return this.executeJSON(e,t).then((r=>this.featureSetFromJSON(e,r,t)))}async executeJSON(e,t){var r;const s={...this.requestOptions,...t},n=this._normalizeQuery(e),i=null!=(null==(r=e.outStatistics)?void 0:r[0]),a=(0,o.Z)("featurelayer-pbf-statistics"),u=!i||a;let c;if("pbf"===this.format&&u)try{c=await async function(e,t,r){const s=(0,d.en)(e),n={...r},o=y.Z.from(t),i=!o.quantizationParameters,{data:a}=await(0,f.executeQueryPBF)(s,o,new C({sourceSpatialReference:o.sourceSpatialReference,applyTransform:i}),n);return a}(this.url,n,s)}catch(e){if("query:parsing-pbf"!==e.name)throw e;this.format="json"}return"json"!==this.format&&u||(c=await async function(e,t,r){const s=(0,d.en)(e),n={...r},o=y.Z.from(t),{data:i}=await(0,f.executeQuery)(s,o,o.sourceSpatialReference,n);return i}(this.url,n,s)),this._normalizeFields(c.fields),c}async featureSetFromJSON(e,t,s){if(!(this._queryIs3DObjectFormat(e)&&(0,i.pC)(this.infoFor3D)&&t.features&&t.features.length))return m.default.fromJSON(t);const{meshFeatureSetFromJSON:n}=await(0,a.Hl)(Promise.all([r.e(5387),r.e(799),r.e(1288),r.e(1558)]).then(r.bind(r,61558)),s);return n(e,this.infoFor3D,t)}executeForCount(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return async function(e,t,r){const s=(0,d.en)(e);return(0,f.executeQueryForCount)(s,y.Z.from(t),{...r}).then((e=>e.data.count))}(this.url,s,r)}executeForExtent(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return async function(e,t,r){const s=(0,d.en)(e);return(0,f.executeQueryForExtent)(s,y.Z.from(t),{...r}).then((e=>({count:e.data.count,extent:g.Z.fromJSON(e.data.extent)})))}(this.url,s,r)}executeForIds(e,t){const r={...this.requestOptions,...t},s=this._normalizeQuery(e);return async function(e,t,r){const s=(0,d.en)(e);return(0,f.executeQueryForIds)(s,y.Z.from(t),{...r}).then((e=>e.data.objectIds))}(this.url,s,r)}executeRelationshipQuery(e,t){e=D.Z.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){return t=D.Z.from(t),async function(e,t,r){const s=await j(e,t,r),n=s.data,o=n.geometryType,i=n.spatialReference,a={};for(const e of n.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:i,hasZ:!!n.hasZ,hasM:!!n.hasM,features:e.relatedRecords};if(null!=e.objectId)a[e.objectId]=t;else for(const r in e)e.hasOwnProperty(r)&&"relatedRecords"!==r&&(a[e[r]]=t)}return{...s,data:a}}((0,d.en)(e),t,r).then((e=>{const t=e.data,r={};return Object.keys(t).forEach((e=>r[e]=m.default.fromJSON(t[e]))),r}))}(this.url,e,r)}executeRelationshipQueryForCount(e,t){e=D.Z.from(e);const r={...this.requestOptions,...t};return(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){return t=D.Z.from(t),async function(e,t,r){const s=await j(e,t,r,{returnCountOnly:!0}),n=s.data,o={};for(const e of n.relatedRecordGroups)null!=e.objectId&&(o[e.objectId]=e.count);return{...s,data:o}}((0,d.en)(e),t,{...r}).then((e=>e.data))}(this.url,e,r)}executeAttachmentQuery(e,t){const r={...this.requestOptions,...t};return async function(e,t,r){const s=(0,d.en)(e);return(0,h.X)(s,p.Z.from(t),{...r}).then((e=>(0,h.O)(e.data.attachmentGroups,s.path)))}(this.url,e,r)}executeTopFeaturesQuery(e,t){const r={...this.requestOptions,...t};return async function(e,t,r,s){const n=(0,d.en)(e),o={...s},{data:i}=await async function(e,t,r,s){const n=await Z(e,t,"json",s);return(0,N.p)(t,r,n.data),n}(n,B.Z.from(t),r,o);return m.default.fromJSON(i)}(this.parsedUrl,e,this.sourceSpatialReference,r)}executeForTopIds(e,t){const r={...this.requestOptions,...t};return async function(e,t,r){const s=(0,d.en)(e);return(await async function(e,t,r){return(0,i.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):Z(e,t,"json",r,{returnIdsOnly:!0})}(s,B.Z.from(t),{...r})).data.objectIds}(this.parsedUrl,e,r)}executeForTopExtents(e,t){const r={...this.requestOptions,...t};return async function(e,t,r){const s=(0,d.en)(e),n=await async function(e,t,r){return(0,i.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):Z(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(V);if(t.hasOwnProperty("count"))throw new Error(V);return e}))}(s,B.Z.from(t),{...r});return{count:n.data.count,extent:g.Z.fromJSON(n.data.extent)}}(this.parsedUrl,e,r)}executeForTopCount(e,t){const r={...this.requestOptions,...t};return async function(e,t,r){const s=(0,d.en)(e);return(await(n=s,o=B.Z.from(t),a={...r},(0,i.pC)(o.timeExtent)&&o.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):Z(n,o,"json",a,{returnIdsOnly:!0,returnCountOnly:!0}))).data.count;var n,o,a}(this.parsedUrl,e,r)}_normalizeQuery(e){let t=y.Z.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?l.n.from(e.dynamicDataSource):this.dynamicDataSource),(0,i.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;for(const e of this.infoFor3D.queryFormats){if("3D_glb"===e.id){t.formatOf3DObjects=e.id;break}"3D_gltf"!==e.id||t.formatOf3DObjects||(t.formatOf3DObjects=e.id)}if(!t.formatOf3DObjects)throw new n.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,i.Wi)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,(0,i.Wi)(t.outFields)&&(t.outFields=[]);const{originX:r,originY:s,originZ:n,translationX:o,translationY:a,translationZ:u,scaleX:c,scaleY:l,scaleZ:d,rotationX:h,rotationY:p,rotationZ:f,rotationDeg:y}=this.infoFor3D.transformFieldRoles;t.outFields.push(r,s,n,o,a,u,c,l,d,h,p,f,y)}}return t}_normalizeFields(e){if((0,i.pC)(this.fieldsIndex)&&(0,i.pC)(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return(0,i.pC)(this.infoFor3D)&&e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,s._)([(0,u.Cb)({type:l.n})],A.prototype,"dynamicDataSource",void 0),(0,s._)([(0,u.Cb)()],A.prototype,"fieldsIndex",void 0),(0,s._)([(0,u.Cb)()],A.prototype,"format",void 0),(0,s._)([(0,u.Cb)()],A.prototype,"gdbVersion",void 0),(0,s._)([(0,u.Cb)()],A.prototype,"infoFor3D",void 0),(0,s._)([(0,u.Cb)()],A.prototype,"sourceSpatialReference",void 0),A=(0,s._)([(0,c.j)("esri.tasks.QueryTask")],A);const M=A},62636:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(14983),n=r(29438),o=r(99204),i=r(84066),a=(r(77645),r(38215),r(45851),r(74184));let u=class extends n.Z{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,o.mN)(e):null}_encode(e,t,r){const s={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let e=0;e<o.length;e++)s[n][e]=this._encode(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?o:JSON.stringify(o);else s[n]=o}return s}};(0,s._)([(0,i.Cb)({readOnly:!0})],u.prototype,"parsedUrl",null),(0,s._)([(0,i.Cb)()],u.prototype,"requestOptions",void 0),(0,s._)([(0,i.Cb)({type:String})],u.prototype,"url",void 0),u=(0,s._)([(0,a.j)("esri.tasks.Task")],u);const c=u},81472:(e,t,r)=>{"use strict";function s(e){const t={};for(const r in e){if("declaredClass"===r)continue;const n=e[r];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[r]=[];for(let e=0;e<n.length;e++)t[r][e]=s(n[e])}else"object"==typeof n?n.toJSON&&(t[r]=JSON.stringify(n)):t[r]=n}return t}r.d(t,{A:()=>s})}}]);