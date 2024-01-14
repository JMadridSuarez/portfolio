(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="159",On={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oo=0,Ss=1,Bo=2,qa=1,Go=2,Zt=3,fn=0,At=1,Jt=2,un=0,ii=1,ys=2,Ts=3,bs=4,Ho=5,An=100,zo=101,Vo=102,Rs=103,ws=104,ko=200,Wo=201,Xo=202,Qo=203,Zr=204,Jr=205,Yo=206,qo=207,Ko=208,jo=209,Zo=210,Jo=211,$o=212,el=213,tl=214,nl=0,il=1,rl=2,rr=3,sl=4,al=5,ol=6,ll=7,os=0,cl=1,ul=2,hn=0,hl=1,dl=2,fl=3,pl=4,ml=5,Ka=300,si=301,ai=302,$r=303,es=304,ur=306,ts=1e3,Gt=1001,ns=1002,Et=1003,Cs=1004,Mr=1005,It=1006,gl=1007,bi=1008,dn=1009,_l=1010,vl=1011,ls=1012,ja=1013,ln=1014,cn=1015,Ri=1016,Za=1017,Ja=1018,yn=1020,xl=1021,Ht=1023,El=1024,Ml=1025,Tn=1026,oi=1027,Al=1028,$a=1029,Sl=1030,eo=1031,to=1033,Ar=33776,Sr=33777,yr=33778,Tr=33779,Ps=35840,Ls=35841,Is=35842,Ds=35843,no=36196,Us=37492,Ns=37496,Fs=37808,Os=37809,Bs=37810,Gs=37811,Hs=37812,zs=37813,Vs=37814,ks=37815,Ws=37816,Xs=37817,Qs=37818,Ys=37819,qs=37820,Ks=37821,br=36492,js=36494,Zs=36495,yl=36283,Js=36284,$s=36285,ea=36286,io=3e3,bn=3001,Tl=3200,bl=3201,ro=0,Rl=1,Ut="",lt="srgb",en="srgb-linear",cs="display-p3",hr="display-p3-linear",sr="linear",qe="srgb",ar="rec709",or="p3",Gn=7680,ta=519,wl=512,Cl=513,Pl=514,so=515,Ll=516,Il=517,Dl=518,Ul=519,na=35044,ia="300 es",is=1035,$t=2e3,lr=2001;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ra=1234567;const Si=Math.PI/180,wi=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function us(i,e){return(i%e+e)%e}function Nl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fl(i,e,t){return i!==e?(t-i)/(e-i):0}function yi(i,e,t){return(1-t)*i+t*e}function Ol(i,e,t,n){return yi(i,e,1-Math.exp(-t*n))}function Bl(i,e=1){return e-Math.abs(us(i,e*2)-e)}function Gl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vl(i,e){return i+Math.random()*(e-i)}function kl(i){return i*(.5-Math.random())}function Wl(i){i!==void 0&&(ra=i);let e=ra+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xl(i){return i*Si}function Ql(i){return i*wi}function rs(i){return(i&i-1)===0&&i!==0}function Yl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ql(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kl={DEG2RAD:Si,RAD2DEG:wi,generateUUID:pi,clamp:mt,euclideanModulo:us,mapLinear:Nl,inverseLerp:Fl,lerp:yi,damp:Ol,pingpong:Bl,smoothstep:Gl,smootherstep:Hl,randInt:zl,randFloat:Vl,randFloatSpread:kl,seededRandom:Wl,degToRad:Xl,radToDeg:Ql,isPowerOfTwo:rs,ceilPowerOfTwo:Yl,floorPowerOfTwo:cr,setQuaternionFromProperEuler:ql,normalize:vt,denormalize:ti};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],v=n[8],_=r[0],p=r[3],u=r[6],y=r[1],M=r[4],S=r[7],T=r[2],C=r[5],w=r[8];return s[0]=o*_+a*y+l*T,s[3]=o*p+a*M+l*C,s[6]=o*u+a*S+l*w,s[1]=c*_+h*y+d*T,s[4]=c*p+h*M+d*C,s[7]=c*u+h*S+d*w,s[2]=f*_+m*y+v*T,s[5]=f*p+m*M+v*C,s[8]=f*u+m*S+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rr.makeScale(e,t)),this}rotate(e){return this.premultiply(Rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Ve;function ao(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jl(){const i=Ci("canvas");return i.style.display="block",i}const sa={};function Ti(i){i in sa||(sa[i]=!0,console.warn(i))}const aa=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oa=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ui={[en]:{transfer:sr,primaries:ar,toReference:i=>i,fromReference:i=>i},[lt]:{transfer:qe,primaries:ar,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hr]:{transfer:sr,primaries:or,toReference:i=>i.applyMatrix3(oa),fromReference:i=>i.applyMatrix3(aa)},[cs]:{transfer:qe,primaries:or,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oa),fromReference:i=>i.applyMatrix3(aa).convertLinearToSRGB()}},Zl=new Set([en,hr]),Xe={enabled:!0,_workingColorSpace:en,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Zl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ui[e].toReference,r=Ui[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ui[i].primaries},getTransfer:function(i){return i===Ut?sr:Ui[i].transfer}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hn;class oo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=Ci("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jl=0;class lo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cr(r[o].image)):s.push(Cr(r[o]))}else s=Cr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $l=0;class St extends Fn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Gt,r=Gt,s=It,o=bi,a=Ht,l=dn,c=St.DEFAULT_ANISOTROPY,h=Ut){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=pi(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bn?lt:Ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ka)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?bn:io}set encoding(e){Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bn?lt:Ut}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Ka;St.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],v=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(m+1)/2,T=(u+1)/2,C=(h+f)/4,w=(d+_)/4,W=(v+p)/4;return M>S&&M>T?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=C/n,s=w/n):S>T?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=C/r,s=W/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=W/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-v)*(p-v)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ec extends Fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ti("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bn?lt:Ut),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class co extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tc extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==v){let p=1-a;const u=l*f+c*m+h*v+d*_,y=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const T=Math.sqrt(M),C=Math.atan2(T,u*y);p=Math.sin(p*C)/T,a=Math.sin(a*C)/T}const S=a*y;if(l=l*p+f*S,c=c*p+m*S,h=h*p+v*S,d=d*p+_*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+h*d+l*m-c*f,e[t+1]=l*v+h*f+c*d-a*m,e[t+2]=c*v+h*m+a*f-l*d,e[t+3]=h*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"YZX":this._x=f*h*d+c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d-f*m*v;break;case"XZY":this._x=f*h*d-c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(la.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(la.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new D,la=new wn;class Pi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(s,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Fi.subVectors(this.max,_i),zn.subVectors(e.a,_i),Vn.subVectors(e.b,_i),kn.subVectors(e.c,_i),tn.subVectors(Vn,zn),nn.subVectors(kn,Vn),_n.subVectors(zn,kn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-_n.z,_n.y,tn.z,0,-tn.x,nn.z,0,-nn.x,_n.z,0,-_n.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-_n.y,_n.x,0];return!Lr(t,zn,Vn,kn,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,zn,Vn,kn,Fi))?!1:(Oi.crossVectors(tn,nn),t=[Oi.x,Oi.y,Oi.z],Lr(t,zn,Vn,kn,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new D,new D,new D,new D,new D,new D,new D,new D],Nt=new D,Ni=new Pi,zn=new D,Vn=new D,kn=new D,tn=new D,nn=new D,_n=new D,_i=new D,Fi=new D,Oi=new D,vn=new D;function Lr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vn.fromArray(i,s);const a=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),l=e.dot(vn),c=t.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const nc=new Pi,vi=new D,Ir=new D;class hs{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Ir)),this.expandByPoint(vi.copy(e.center).sub(Ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new D,Dr=new D,Bi=new D,rn=new D,Ur=new D,Gi=new D,Nr=new D;class uo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dr.copy(e).add(t).multiplyScalar(.5),Bi.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Dr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bi),a=rn.dot(this.direction),l=-rn.dot(Bi),c=rn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,v;if(h>0)if(d=o*l-a,f=o*a-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dr).addScaledVector(Bi,f),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),r=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,r,s){Ur.subVectors(t,e),Gi.subVectors(n,e),Nr.crossVectors(Ur,Gi);let o=this.direction.dot(Nr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rn.subVectors(this.origin,e);const l=a*this.direction.dot(Gi.crossVectors(rn,Gi));if(l<0)return null;const c=a*this.direction.dot(Ur.cross(rn));if(c<0||l+c>o)return null;const h=-a*rn.dot(Nr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,r,s,o,a,l,c,h,d,f,m,v,_,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,f,m,v,_,p)}set(e,t,n,r,s,o,a,l,c,h,d,f,m,v,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=v,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wn.setFromMatrixColumn(e,0).length(),s=1/Wn.setFromMatrixColumn(e,1).length(),o=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,v=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,v=c*h,_=c*d;t[0]=f+_*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,v=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,v=a*h,_=a*d;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+v,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,v=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ic,e,rc)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),sn.crossVectors(n,bt),sn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),sn.crossVectors(n,bt)),sn.normalize(),Hi.crossVectors(bt,sn),r[0]=sn.x,r[4]=Hi.x,r[8]=bt.x,r[1]=sn.y,r[5]=Hi.y,r[9]=bt.y,r[2]=sn.z,r[6]=Hi.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],v=n[2],_=n[6],p=n[10],u=n[14],y=n[3],M=n[7],S=n[11],T=n[15],C=r[0],w=r[4],W=r[8],x=r[12],b=r[1],X=r[5],k=r[9],$=r[13],L=r[2],G=r[6],Y=r[10],V=r[14],re=r[3],K=r[7],q=r[11],ae=r[15];return s[0]=o*C+a*b+l*L+c*re,s[4]=o*w+a*X+l*G+c*K,s[8]=o*W+a*k+l*Y+c*q,s[12]=o*x+a*$+l*V+c*ae,s[1]=h*C+d*b+f*L+m*re,s[5]=h*w+d*X+f*G+m*K,s[9]=h*W+d*k+f*Y+m*q,s[13]=h*x+d*$+f*V+m*ae,s[2]=v*C+_*b+p*L+u*re,s[6]=v*w+_*X+p*G+u*K,s[10]=v*W+_*k+p*Y+u*q,s[14]=v*x+_*$+p*V+u*ae,s[3]=y*C+M*b+S*L+T*re,s[7]=y*w+M*X+S*G+T*K,s[11]=y*W+M*k+S*Y+T*q,s[15]=y*x+M*$+S*V+T*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],v=e[3],_=e[7],p=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*h-n*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],_=e[13],p=e[14],u=e[15],y=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,M=v*f*c-h*p*c-v*l*m+o*p*m+h*l*u-o*f*u,S=h*_*c-v*d*c+v*a*m-o*_*m-h*a*u+o*d*u,T=v*d*l-h*_*l-v*a*f+o*_*f+h*a*p-o*d*p,C=t*y+n*M+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=y*w,e[1]=(_*f*s-d*p*s-_*r*m+n*p*m+d*r*u-n*f*u)*w,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*u+n*l*u)*w,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*m-n*l*m)*w,e[4]=M*w,e[5]=(h*p*s-v*f*s+v*r*m-t*p*m-h*r*u+t*f*u)*w,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*u-t*l*u)*w,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*w,e[8]=S*w,e[9]=(v*d*s-h*_*s-v*n*m+t*_*m+h*n*u-t*d*u)*w,e[10]=(o*_*s-v*a*s+v*n*c-t*_*c-o*n*u+t*a*u)*w,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*m-t*a*m)*w,e[12]=T*w,e[13]=(h*_*r-v*d*r+v*n*f-t*_*f-h*n*p+t*d*p)*w,e[14]=(v*a*r-o*_*r-v*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*d*r-h*a*r+h*n*l-t*d*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,v=s*d,_=o*h,p=o*d,u=a*d,y=l*c,M=l*h,S=l*d,T=n.x,C=n.y,w=n.z;return r[0]=(1-(_+u))*T,r[1]=(m+S)*T,r[2]=(v-M)*T,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(f+u))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(v+M)*w,r[9]=(p-y)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wn.set(r[0],r[1],r[2]).length();const o=Wn.set(r[4],r[5],r[6]).length(),a=Wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,h=1/o,d=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=d,Ft.elements[9]*=d,Ft.elements[10]*=d,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=$t){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===$t)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===lr)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$t){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*c,m=(n+r)*h;let v,_;if(a===$t)v=(o+s)*d,_=-2*d;else if(a===lr)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new D,Ft=new ut,ic=new D(0,0,0),rc=new D(1,1,1),sn=new D,Hi=new D,bt=new D,ca=new ut,ua=new wn;class dr{constructor(e=0,t=0,n=0,r=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ua.setFromEuler(this),this.setFromQuaternion(ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sc=0;const ha=new D,Xn=new wn,qt=new ut,zi=new D,xi=new D,ac=new D,oc=new wn,da=new D(1,0,0),fa=new D(0,1,0),pa=new D(0,0,1),lc={type:"added"},cc={type:"removed"};class yt extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new dr,n=new wn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(da,e)}rotateY(e){return this.rotateOnAxis(fa,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return ha.copy(e).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(da,e)}translateY(e){return this.translateOnAxis(fa,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zi.copy(e):zi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(xi,zi,this.up):qt.lookAt(zi,xi,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Xn.setFromRotationMatrix(qt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,ac),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new D,Kt=new D,Fr=new D,jt=new D,Qn=new D,Yn=new D,ma=new D,Or=new D,Br=new D,Gr=new D;let Vi=!1;class Bt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),Kt.subVectors(n,t),Fr.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(Kt),l=Ot.dot(Fr),c=Kt.dot(Kt),h=Kt.dot(Fr),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,v=(o*h-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,r,s,o,a,l){return Vi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vi=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,jt),l.setScalar(0),l.addScaledVector(s,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),Kt.subVectors(e,t),Ot.cross(Kt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ot.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Vi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vi=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Qn.subVectors(r,n),Yn.subVectors(s,n),Or.subVectors(e,n);const l=Qn.dot(Or),c=Yn.dot(Or);if(l<=0&&c<=0)return t.copy(n);Br.subVectors(e,r);const h=Qn.dot(Br),d=Yn.dot(Br);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qn,o);Gr.subVectors(e,s);const m=Qn.dot(Gr),v=Yn.dot(Gr);if(v>=0&&m<=v)return t.copy(s);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Yn,a);const p=h*v-m*d;if(p<=0&&d-h>=0&&m-v>=0)return ma.subVectors(s,r),a=(d-h)/(d-h+(m-v)),t.copy(r).addScaledVector(ma,a);const u=1/(p+_+f);return o=_*u,a=f*u,t.copy(n).addScaledVector(Qn,o).addScaledVector(Yn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Hr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=us(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hr(o,s,e+1/3),this.g=Hr(o,s,e),this.b=Hr(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const n=fo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Xe.fromWorkingColorSpace(pt.copy(this),e),Math.round(mt(pt.r*255,0,255))*65536+Math.round(mt(pt.g*255,0,255))*256+Math.round(mt(pt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,r=pt.g,s=pt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=lt){Xe.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,r=pt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(ki);const n=yi(an.h,ki.h,t),r=yi(an.s,ki.s,t),s=yi(an.l,ki.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new We;We.NAMES=fo;let uc=0;class Li extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ii,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new D,Wi=new Oe;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),e}}class po extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mo extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hc=0;const Lt=new ut,zr=new yt,qn=new D,Rt=new Pi,Ei=new Pi,ot=new D;class pn extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ao(e)?mo:po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Rt.min,Ei.min),Rt.expandByPoint(ot),ot.addVectors(Rt.max,Ei.max),Rt.expandByPoint(ot)):(Rt.expandByPoint(Ei.min),Rt.expandByPoint(Ei.max))}Rt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ot.fromBufferAttribute(a,c),l&&(qn.fromBufferAttribute(e,c),ot.add(qn)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new D,h[b]=new D;const d=new D,f=new D,m=new D,v=new Oe,_=new Oe,p=new Oe,u=new D,y=new D;function M(b,X,k){d.fromArray(r,b*3),f.fromArray(r,X*3),m.fromArray(r,k*3),v.fromArray(o,b*2),_.fromArray(o,X*2),p.fromArray(o,k*2),f.sub(d),m.sub(d),_.sub(v),p.sub(v);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar($),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar($),c[b].add(u),c[X].add(u),c[k].add(u),h[b].add(y),h[X].add(y),h[k].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,X=S.length;b<X;++b){const k=S[b],$=k.start,L=k.count;for(let G=$,Y=$+L;G<Y;G+=3)M(n[G+0],n[G+1],n[G+2])}const T=new D,C=new D,w=new D,W=new D;function x(b){w.fromArray(s,b*3),W.copy(w);const X=c[b];T.copy(X),T.sub(w.multiplyScalar(w.dot(X))).normalize(),C.crossVectors(W,X);const $=C.dot(h[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=$}for(let b=0,X=S.length;b<X;++b){const k=S[b],$=k.start,L=k.count;for(let G=$,Y=$+L;G<Y;G+=3)x(n[G+0]),x(n[G+1]),x(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[v++]=c[m++]}return new kt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new ut,xn=new uo,Xi=new hs,_a=new D,Kn=new D,jn=new D,Zn=new D,Vr=new D,Qi=new D,Yi=new Oe,qi=new Oe,Ki=new Oe,va=new D,xa=new D,Ea=new D,ji=new D,Zi=new D;class Je extends yt{constructor(e=new pn,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Vr.fromBufferAttribute(d,e),o?Qi.addScaledVector(Vr,h):Qi.addScaledVector(Vr.sub(t),h))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(s),xn.copy(e.ray).recast(e.near),!(Xi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Xi,_a)===null||xn.origin.distanceToSquared(_a)>(e.far-e.near)**2))&&(ga.copy(s).invert(),xn.copy(e.ray).applyMatrix4(ga),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const p=f[v],u=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,T=M;S<T;S+=3){const C=a.getX(S),w=a.getX(S+1),W=a.getX(S+2);r=Ji(this,u,e,n,c,h,d,C,w,W),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const y=a.getX(p),M=a.getX(p+1),S=a.getX(p+2);r=Ji(this,o,e,n,c,h,d,y,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const p=f[v],u=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,T=M;S<T;S+=3){const C=S,w=S+1,W=S+2;r=Ji(this,u,e,n,c,h,d,C,w,W),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const y=p,M=p+1,S=p+2;r=Ji(this,o,e,n,c,h,d,y,M,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function dc(i,e,t,n,r,s,o,a){let l;if(e.side===At?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===fn,a),l===null)return null;Zi.copy(a),Zi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zi);return c<t.near||c>t.far?null:{distance:c,point:Zi.clone(),object:i}}function Ji(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Kn),i.getVertexPosition(l,jn),i.getVertexPosition(c,Zn);const h=dc(i,e,t,n,Kn,jn,Zn,ji);if(h){r&&(Yi.fromBufferAttribute(r,a),qi.fromBufferAttribute(r,l),Ki.fromBufferAttribute(r,c),h.uv=Bt.getInterpolation(ji,Kn,jn,Zn,Yi,qi,Ki,new Oe)),s&&(Yi.fromBufferAttribute(s,a),qi.fromBufferAttribute(s,l),Ki.fromBufferAttribute(s,c),h.uv1=Bt.getInterpolation(ji,Kn,jn,Zn,Yi,qi,Ki,new Oe),h.uv2=h.uv1),o&&(va.fromBufferAttribute(o,a),xa.fromBufferAttribute(o,l),Ea.fromBufferAttribute(o,c),h.normal=Bt.getInterpolation(ji,Kn,jn,Zn,va,xa,Ea,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Bt.getNormal(Kn,jn,Zn,d.normal),h.face=d}return h}class ht extends pn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(d,2));function v(_,p,u,y,M,S,T,C,w,W,x){const b=S/w,X=T/W,k=S/2,$=T/2,L=C/2,G=w+1,Y=W+1;let V=0,re=0;const K=new D;for(let q=0;q<Y;q++){const ae=q*X-$;for(let oe=0;oe<G;oe++){const H=oe*b-k;K[_]=H*y,K[p]=ae*M,K[u]=L,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[u]=C>0?1:-1,h.push(K.x,K.y,K.z),d.push(oe/w),d.push(1-q/W),V+=1}}for(let q=0;q<W;q++)for(let ae=0;ae<w;ae++){const oe=f+ae+G*q,H=f+ae+G*(q+1),j=f+(ae+1)+G*(q+1),he=f+(ae+1)+G*q;l.push(oe,H,he),l.push(H,j,he),re+=6}a.addGroup(m,re,x),m+=re,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const r in n)e[r]=n[r]}return e}function fc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function go(i){return i.getRenderTarget()===null?i.outputColorSpace:Xe.workingColorSpace}const pc={clone:li,merge:xt};var mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mc,this.fragmentShader=gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _o extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=$t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends _o{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Si*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wi*2*Math.atan(Math.tan(Si*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Si*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=-90,$n=1;class _c extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dt(Jn,$n,e,t);r.layers=this.layers,this.add(r);const s=new Dt(Jn,$n,e,t);s.layers=this.layers,this.add(s);const o=new Dt(Jn,$n,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Jn,$n,e,t);a.layers=this.layers,this.add(a);const l=new Dt(Jn,$n,e,t);l.layers=this.layers,this.add(l);const c=new Dt(Jn,$n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class vo extends St{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vc extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ti("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bn?lt:Ut),this.texture=new vo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ht(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:un});s.uniforms.tEquirect.value=t;const o=new Je(r,s),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=It),new _c(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const kr=new D,xc=new D,Ec=new Ve;class on{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=kr.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new hs,$i=new D;class xo{constructor(e=new on,t=new on,n=new on,r=new on,s=new on,o=new on){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],v=r[9],_=r[10],p=r[11],u=r[12],y=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,p-m,S-u).normalize(),n[1].setComponents(l+s,f+c,p+m,S+u).normalize(),n[2].setComponents(l+o,f+h,p+v,S+y).normalize(),n[3].setComponents(l-o,f-h,p-v,S-y).normalize(),n[4].setComponents(l-a,f-d,p-_,S-M).normalize(),t===$t)n[5].setComponents(l+a,f+d,p+_,S+M).normalize();else if(t===lr)n[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(e){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($i.x=r.normal.x>0?e.max.x:e.min.x,$i.y=r.normal.y>0?e.max.y:e.min.y,$i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const d=c.array,f=c.usage,m=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const f=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&v.length===0&&i.bufferSubData(d,0,f),v.length!==0){for(let _=0,p=v.length;_<p;_++){const u=v[_];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class ds extends pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,m=[],v=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*f-o;for(let M=0;M<c;M++){const S=M*d-s;v.push(S,-y,0),_.push(0,0,1),p.push(M/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const M=y+c*u,S=y+c*(u+1),T=y+1+c*(u+1),C=y+1+c*u;m.push(M,S,C),m.push(S,T,C)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ac=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ic=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",$c=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ah=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ch=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ph=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ih=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$h=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Ac,alphahash_pars_fragment:Sc,alphamap_fragment:yc,alphamap_pars_fragment:Tc,alphatest_fragment:bc,alphatest_pars_fragment:Rc,aomap_fragment:wc,aomap_pars_fragment:Cc,batching_pars_vertex:Pc,batching_vertex:Lc,begin_vertex:Ic,beginnormal_vertex:Dc,bsdfs:Uc,iridescence_fragment:Nc,bumpmap_pars_fragment:Fc,clipping_planes_fragment:Oc,clipping_planes_pars_fragment:Bc,clipping_planes_pars_vertex:Gc,clipping_planes_vertex:Hc,color_fragment:zc,color_pars_fragment:Vc,color_pars_vertex:kc,color_vertex:Wc,common:Xc,cube_uv_reflection_fragment:Qc,defaultnormal_vertex:Yc,displacementmap_pars_vertex:qc,displacementmap_vertex:Kc,emissivemap_fragment:jc,emissivemap_pars_fragment:Zc,colorspace_fragment:Jc,colorspace_pars_fragment:$c,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:uu,lightmap_pars_fragment:hu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:vu,lights_phong_pars_fragment:xu,lights_physical_fragment:Eu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Au,lights_fragment_maps:Su,lights_fragment_end:yu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:wu,map_fragment:Cu,map_pars_fragment:Pu,map_particle_fragment:Lu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:Gu,normal_fragment_maps:Hu,normal_pars_fragment:zu,normal_pars_vertex:Vu,normal_vertex:ku,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:qu,opaque_fragment:Ku,packing:ju,premultiplied_alpha_fragment:Zu,project_vertex:Ju,dithering_fragment:$u,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:sh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:hh,specularmap_pars_fragment:dh,tonemapping_fragment:fh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:gh,uv_pars_fragment:_h,uv_pars_vertex:vh,uv_vertex:xh,worldpos_vertex:Eh,background_vert:Mh,background_frag:Ah,backgroundCube_vert:Sh,backgroundCube_frag:yh,cube_vert:Th,cube_frag:bh,depth_vert:Rh,depth_frag:wh,distanceRGBA_vert:Ch,distanceRGBA_frag:Ph,equirect_vert:Lh,equirect_frag:Ih,linedashed_vert:Dh,linedashed_frag:Uh,meshbasic_vert:Nh,meshbasic_frag:Fh,meshlambert_vert:Oh,meshlambert_frag:Bh,meshmatcap_vert:Gh,meshmatcap_frag:Hh,meshnormal_vert:zh,meshnormal_frag:Vh,meshphong_vert:kh,meshphong_frag:Wh,meshphysical_vert:Xh,meshphysical_frag:Qh,meshtoon_vert:Yh,meshtoon_frag:qh,points_vert:Kh,points_frag:jh,shadow_vert:Zh,shadow_frag:Jh,sprite_vert:$h,sprite_frag:ed},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Vt={basic:{uniforms:xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:xt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:xt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:xt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:xt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:xt([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vt.physical={uniforms:xt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const er={r:0,b:0,g:0};function td(i,e,t,n,r,s,o){const a=new We(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function v(p,u){let y=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,l):M&&M.isColor&&(_(M,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ur)?(h===void 0&&(h=new Je(new ht(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:li(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(M.colorSpace)!==qe,(d!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Je(new ds(2,2),new Cn({name:"BackgroundMaterial",uniforms:li(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(er,go(i)),n.buffers.color.setClear(er.r,er.g,er.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:v}}function nd(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function d(L,G,Y,V,re){let K=!1;if(o){const q=_(V,Y,G);c!==q&&(c=q,m(c.object)),K=u(L,V,Y,re),K&&y(L,V,Y,re)}else{const q=G.wireframe===!0;(c.geometry!==V.id||c.program!==Y.id||c.wireframe!==q)&&(c.geometry=V.id,c.program=Y.id,c.wireframe=q,K=!0)}re!==null&&t.update(re,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,W(L,G,Y,V),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,G,Y){const V=Y.wireframe===!0;let re=a[L.id];re===void 0&&(re={},a[L.id]=re);let K=re[G.id];K===void 0&&(K={},re[G.id]=K);let q=K[V];return q===void 0&&(q=p(f()),K[V]=q),q}function p(L){const G=[],Y=[],V=[];for(let re=0;re<r;re++)G[re]=0,Y[re]=0,V[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:V,object:L,attributes:{},index:null}}function u(L,G,Y,V){const re=c.attributes,K=G.attributes;let q=0;const ae=Y.getAttributes();for(const oe in ae)if(ae[oe].location>=0){const j=re[oe];let he=K[oe];if(he===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),j===void 0||j.attribute!==he||he&&j.data!==he.data)return!0;q++}return c.attributesNum!==q||c.index!==V}function y(L,G,Y,V){const re={},K=G.attributes;let q=0;const ae=Y.getAttributes();for(const oe in ae)if(ae[oe].location>=0){let j=K[oe];j===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const he={};he.attribute=j,j&&j.data&&(he.data=j.data),re[oe]=he,q++}c.attributes=re,c.attributesNum=q,c.index=V}function M(){const L=c.newAttributes;for(let G=0,Y=L.length;G<Y;G++)L[G]=0}function S(L){T(L,0)}function T(L,G){const Y=c.newAttributes,V=c.enabledAttributes,re=c.attributeDivisors;Y[L]=1,V[L]===0&&(i.enableVertexAttribArray(L),V[L]=1),re[L]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),re[L]=G)}function C(){const L=c.newAttributes,G=c.enabledAttributes;for(let Y=0,V=G.length;Y<V;Y++)G[Y]!==L[Y]&&(i.disableVertexAttribArray(Y),G[Y]=0)}function w(L,G,Y,V,re,K,q){q===!0?i.vertexAttribIPointer(L,G,Y,re,K):i.vertexAttribPointer(L,G,Y,V,re,K)}function W(L,G,Y,V){if(n.isWebGL2===!1&&(L.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const re=V.attributes,K=Y.getAttributes(),q=G.defaultAttributeValues;for(const ae in K){const oe=K[ae];if(oe.location>=0){let H=re[ae];if(H===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const j=H.normalized,he=H.itemSize,_e=t.get(H);if(_e===void 0)continue;const xe=_e.buffer,Pe=_e.type,Re=_e.bytesPerElement,Te=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||H.gpuType===ja);if(H.isInterleavedBufferAttribute){const Ie=H.data,U=Ie.stride,rt=H.offset;if(Ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<oe.locationSize;Ee++)T(oe.location+Ee,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Ee=0;Ee<oe.locationSize;Ee++)S(oe.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ee=0;Ee<oe.locationSize;Ee++)w(oe.location+Ee,he/oe.locationSize,Pe,j,U*Re,(rt+he/oe.locationSize*Ee)*Re,Te)}else{if(H.isInstancedBufferAttribute){for(let Ie=0;Ie<oe.locationSize;Ie++)T(oe.location+Ie,H.meshPerAttribute);L.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ie=0;Ie<oe.locationSize;Ie++)S(oe.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Ie=0;Ie<oe.locationSize;Ie++)w(oe.location+Ie,he/oe.locationSize,Pe,j,he*Re,he/oe.locationSize*Ie*Re,Te)}}else if(q!==void 0){const j=q[ae];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(oe.location,j);break;case 3:i.vertexAttrib3fv(oe.location,j);break;case 4:i.vertexAttrib4fv(oe.location,j);break;default:i.vertexAttrib1fv(oe.location,j)}}}}C()}function x(){k();for(const L in a){const G=a[L];for(const Y in G){const V=G[Y];for(const re in V)v(V[re].object),delete V[re];delete G[Y]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const G=a[L.id];for(const Y in G){const V=G[Y];for(const re in V)v(V[re].object),delete V[re];delete G[Y]}delete a[L.id]}function X(L){for(const G in a){const Y=a[G];if(Y[L.id]===void 0)continue;const V=Y[L.id];for(const re in V)v(V[re].object),delete V[re];delete Y[L.id]}}function k(){$(),h=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:$,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:X,initAttributes:M,enableAttribute:S,disableUnusedAttributes:C}}function id(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,d){i.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,f){if(f===0)return;let m,v;if(r)m=i,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,d,f),t.update(d,s,f)}function c(h,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function rd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,S=o||e.has("OES_texture_float"),T=M&&S,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:C}}function sd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new on,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,M=y*4;let S=u.clippingState||null;l.value=S,S=h(v,f,M,m);for(let T=0;T!==M;++T)S[T]=t[T];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,v){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const u=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,S=m;M!==_;++M,S+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ad(i){let e=new WeakMap;function t(o,a){return a===$r?o.mapping=si:a===es&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$r||a===es)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class od extends _o{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Ma=[.125,.215,.35,.446,.526,.582],Sn=20,Wr=new od,Aa=new We;let Xr=null,Qr=0,Yr=0;const Mn=(1+Math.sqrt(5))/2,ei=1/Mn,Sa=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Mn,ei),new D(0,Mn,-ei),new D(ei,0,Mn),new D(-ei,0,Mn),new D(Mn,ei,0),new D(-Mn,ei,0)];class ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xr,Qr,Yr),e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ri,format:Ht,colorSpace:en,depthBuffer:!1},r=Ta(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ld(s)),this._blurMaterial=cd(s,e,t)}return r}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,r){const a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Aa),h.toneMapping=hn,h.autoClear=!1;const m=new wt({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),v=new Je(new ht,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Aa),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const M=this._cubeSize;tr(r,y*M,u>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===si||e.mapping===ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sa[(r-1)%Sa.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Je(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Sn-1),_=s/v,p=isFinite(s)?1+Math.floor(h*_):Sn;p>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Sn}`);const u=[];let y=0;for(let w=0;w<Sn;++w){const W=w/_,x=Math.exp(-W*W/2);u.push(x),w===0?y+=x:w<p&&(y+=2*x)}for(let w=0;w<u.length;w++)u[w]=u[w]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const S=this._sizeLods[r],T=3*S*(r>M-ni?r-M+ni:0),C=4*(this._cubeSize-S);tr(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(d,Wr)}}function ld(i){const e=[],t=[],n=[];let r=i;const s=i-ni+1+Ma.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ni?l=Ma[o-i+ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,_=3,p=2,u=1,y=new Float32Array(_*v*m),M=new Float32Array(p*v*m),S=new Float32Array(u*v*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,W=C>2?0:-1,x=[w,W,0,w+2/3,W,0,w+2/3,W+1,0,w,W,0,w+2/3,W+1,0,w,W+1,0];y.set(x,_*v*C),M.set(f,p*v*C);const b=[C,C,C,C,C,C];S.set(b,u*v*C)}const T=new pn;T.setAttribute("position",new kt(y,_)),T.setAttribute("uv",new kt(M,p)),T.setAttribute("faceIndex",new kt(S,u)),e.push(T),r>ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ta(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cd(i,e,t){const n=new Float32Array(Sn),r=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function ba(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ra(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ud(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$r||l===es,h=l===si||l===ai;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ya(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new ya(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dd(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const _=m[v];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let M=0,S=y.length;M<S;M+=3){const T=y[M+0],C=y[M+1],w=y[M+2];f.push(T,C,C,w,w,T)}}else if(v!==void 0){const y=v.array;_=v.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const T=M+0,C=M+1,w=M+2;f.push(T,C,C,w,w,T)}}else return;const p=new(ao(f)?mo:po)(f,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function fd(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,v){i.drawElements(s,v,a,m*l),t.update(v,s,1)}function d(m,v,_){if(_===0)return;let p,u;if(r)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,v,a,m*l,_),t.update(v,s,_)}function f(m,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,v[u]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,_);let u=0;for(let y=0;y<_;y++)u+=v[y];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function pd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function md(i,e){return i[0]-e[0]}function gd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _d(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let G=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let x=0;M===!0&&(x=1),S===!0&&(x=2),T===!0&&(x=3);let b=h.attributes.position.count*x,X=1;b>e.maxTextureSize&&(X=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*X*4*_),$=new co(k,b,X,_);$.type=cn,$.needsUpdate=!0;const L=x*4;for(let Y=0;Y<_;Y++){const V=C[Y],re=w[Y],K=W[Y],q=b*X*4*Y;for(let ae=0;ae<V.count;ae++){const oe=ae*L;M===!0&&(o.fromBufferAttribute(V,ae),k[q+oe+0]=o.x,k[q+oe+1]=o.y,k[q+oe+2]=o.z,k[q+oe+3]=0),S===!0&&(o.fromBufferAttribute(re,ae),k[q+oe+4]=o.x,k[q+oe+5]=o.y,k[q+oe+6]=o.z,k[q+oe+7]=0),T===!0&&(o.fromBufferAttribute(K,ae),k[q+oe+8]=o.x,k[q+oe+9]=o.y,k[q+oe+10]=o.z,k[q+oe+11]=K.itemSize===4?o.w:1)}}p={count:_,texture:$,size:new Oe(b,X)},s.set(h,p),h.addEventListener("dispose",G)}let u=0;for(let M=0;M<f.length;M++)u+=f[M];const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==v){_=[];for(let S=0;S<v;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<v;S++){const T=_[S];T[0]=S,T[1]=f[S]}_.sort(gd);for(let S=0;S<8;S++)S<v&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(md);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const T=a[S],C=T[0],w=T[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+S)!==p[C]&&h.setAttribute("morphTarget"+S,p[C]),u&&h.getAttribute("morphNormal"+S)!==u[C]&&h.setAttribute("morphNormal"+S,u[C]),r[S]=w,y+=w):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),u&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const M=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function vd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Mo extends St{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:Tn,h!==Tn&&h!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tn&&(n=ln),n===void 0&&h===oi&&(n=yn),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ao=new St,So=new Mo(1,1);So.compareFunction=so;const yo=new co,To=new tc,bo=new vo,wa=[],Ca=[],Pa=new Float32Array(16),La=new Float32Array(9),Ia=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wa[r];if(s===void 0&&(s=new Float32Array(r),wa[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function it(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fr(i,e){let t=Ca[e];t===void 0&&(t=new Int32Array(e),Ca[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2fv(this.addr,e),it(t,e)}}function Md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;i.uniform3fv(this.addr,e),it(t,e)}}function Ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4fv(this.addr,e),it(t,e)}}function Sd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Ia.set(n),i.uniformMatrix2fv(this.addr,!1,Ia),it(t,n)}}function yd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;La.set(n),i.uniformMatrix3fv(this.addr,!1,La),it(t,n)}}function Td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Pa.set(n),i.uniformMatrix4fv(this.addr,!1,Pa),it(t,n)}}function bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2iv(this.addr,e),it(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3iv(this.addr,e),it(t,e)}}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4iv(this.addr,e),it(t,e)}}function Pd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2uiv(this.addr,e),it(t,e)}}function Id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3uiv(this.addr,e),it(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4uiv(this.addr,e),it(t,e)}}function Ud(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?So:Ao;t.setTexture2D(e||s,r)}function Nd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||To,r)}function Fd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bo,r)}function Od(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yo,r)}function Bd(i){switch(i){case 5126:return xd;case 35664:return Ed;case 35665:return Md;case 35666:return Ad;case 35674:return Sd;case 35675:return yd;case 35676:return Td;case 5124:case 35670:return bd;case 35667:case 35671:return Rd;case 35668:case 35672:return wd;case 35669:case 35673:return Cd;case 5125:return Pd;case 36294:return Ld;case 36295:return Id;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ud;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Od}}function Gd(i,e){i.uniform1fv(this.addr,e)}function Hd(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function zd(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Vd(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function kd(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wd(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xd(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qd(i,e){i.uniform1iv(this.addr,e)}function Yd(i,e){i.uniform2iv(this.addr,e)}function qd(i,e){i.uniform3iv(this.addr,e)}function Kd(i,e){i.uniform4iv(this.addr,e)}function jd(i,e){i.uniform1uiv(this.addr,e)}function Zd(i,e){i.uniform2uiv(this.addr,e)}function Jd(i,e){i.uniform3uiv(this.addr,e)}function $d(i,e){i.uniform4uiv(this.addr,e)}function ef(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ao,s[o])}function tf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||To,s[o])}function nf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bo,s[o])}function rf(i,e,t){const n=this.cache,r=e.length,s=fr(t,r);nt(n,s)||(i.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yo,s[o])}function sf(i){switch(i){case 5126:return Gd;case 35664:return Hd;case 35665:return zd;case 35666:return Vd;case 35674:return kd;case 35675:return Wd;case 35676:return Xd;case 5124:case 35670:return Qd;case 35667:case 35671:return Yd;case 35668:case 35672:return qd;case 35669:case 35673:return Kd;case 5125:return jd;case 36294:return Zd;case 36295:return Jd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return rf}}class af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bd(t.type)}}class of{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sf(t.type)}}class lf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Da(i,e){i.seq.push(e),i.map[e.id]=e}function cf(i,e,t){const n=i.name,r=n.length;for(qr.lastIndex=0;;){const s=qr.exec(n),o=qr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Da(t,c===void 0?new af(a,i,e):new of(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new lf(a),Da(t,d)),t=d}}}class ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);cf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ua(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const uf=37297;let hf=0;function df(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ff(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===or&&t===ar?n="LinearDisplayP3ToLinearSRGB":e===ar&&t===or&&(n="LinearSRGBToLinearDisplayP3"),i){case en:case hr:return[n,"LinearTransferOETF"];case lt:case cs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Na(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+df(i.getShaderSource(e),o)}else return r}function pf(i,e){const t=ff(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mf(i,e){let t;switch(e){case hl:t="Linear";break;case dl:t="Reinhard";break;case fl:t="OptimizedCineon";break;case pl:t="ACESFilmic";break;case ml:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function _f(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mi(i){return i!==""}function Fa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ss(i){return i.replace(xf,Mf)}const Ef=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mf(i,e){let t=Fe[e];if(t===void 0){const n=Ef.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ss(t)}const Af=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(i){return i.replace(Af,Sf)}function Sf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ga(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Go?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zt&&(e="SHADOWMAP_TYPE_VSM"),e}function Tf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case si:case ai:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Rf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case os:e="ENVMAP_BLENDING_MULTIPLY";break;case cl:e="ENVMAP_BLENDING_MIX";break;case ul:e="ENVMAP_BLENDING_ADD";break}return e}function wf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cf(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yf(t),c=Tf(t),h=bf(t),d=Rf(t),f=wf(t),m=t.isWebGL2?"":gf(t),v=_f(s),_=r.createProgram();let p,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mi).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mi).join(`
`),u.length>0&&(u+=`
`)):(p=[Ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),u=[m,Ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==hn?mf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,pf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=ss(o),o=Fa(o,t),o=Oa(o,t),a=ss(a),a=Fa(a,t),a=Oa(a,t),o=Ba(o),a=Ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=y+p+o,S=y+u+a,T=Ua(r,r.VERTEX_SHADER,M),C=Ua(r,r.FRAGMENT_SHADER,S);r.attachShader(_,T),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(X){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),$=r.getShaderInfoLog(T).trim(),L=r.getShaderInfoLog(C).trim();let G=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,C);else{const V=Na(r,T,"vertex"),re=Na(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+V+`
`+re)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):($===""||L==="")&&(Y=!1);Y&&(X.diagnostics={runnable:G,programLog:k,vertexShader:{log:$,prefix:p},fragmentShader:{log:L,prefix:u}})}r.deleteShader(T),r.deleteShader(C),W=new ir(r,_),x=vf(r,_)}let W;this.getUniforms=function(){return W===void 0&&w(this),W};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,uf)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let Pf=0;class Lf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new If(e),t.set(e,n)),n}}class If{constructor(e){this.id=Pf++,this.code=e,this.usedTimes=0}}function Df(i,e,t,n,r,s,o){const a=new ho,l=new Lf,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,b,X,k,$){const L=k.fog,G=$.geometry,Y=x.isMeshStandardMaterial?k.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||Y),re=V&&V.mapping===ur?V.image.height:null,K=v[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=q!==void 0?q.length:0;let oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let H,j,he,_e;if(K){const gt=Vt[K];H=gt.vertexShader,j=gt.fragmentShader}else H=x.vertexShader,j=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const xe=i.getRenderTarget(),Pe=$.isInstancedMesh===!0,Re=$.isBatchedMesh===!0,Te=!!x.map,Ie=!!x.matcap,U=!!V,rt=!!x.aoMap,Ee=!!x.lightMap,Ne=!!x.bumpMap,be=!!x.normalMap,Ye=!!x.displacementMap,De=!!x.emissiveMap,we=!!x.metalnessMap,ke=!!x.roughnessMap,et=x.anisotropy>0,tt=x.clearcoat>0,A=x.iridescence>0,g=x.sheen>0,N=x.transmission>0,ee=et&&!!x.anisotropyMap,J=tt&&!!x.clearcoatMap,te=tt&&!!x.clearcoatNormalMap,me=tt&&!!x.clearcoatRoughnessMap,se=A&&!!x.iridescenceMap,ue=A&&!!x.iridescenceThicknessMap,R=g&&!!x.sheenColorMap,ie=g&&!!x.sheenRoughnessMap,Q=!!x.specularMap,Se=!!x.specularColorMap,ge=!!x.specularIntensityMap,Ae=N&&!!x.transmissionMap,pe=N&&!!x.thicknessMap,fe=!!x.gradientMap,Ge=!!x.alphaMap,P=x.alphaTest>0,le=!!x.alphaHash,Z=!!x.extensions,z=!!G.attributes.uv1,ne=!!G.attributes.uv2,Me=!!G.attributes.uv3;let He=hn;return x.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(He=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:j,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Re,instancing:Pe,instancingColor:Pe&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:en,map:Te,matcap:Ie,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:re,aoMap:rt,lightMap:Ee,bumpMap:Ne,normalMap:be,displacementMap:f&&Ye,emissiveMap:De,normalMapObjectSpace:be&&x.normalMapType===Rl,normalMapTangentSpace:be&&x.normalMapType===ro,metalnessMap:we,roughnessMap:ke,anisotropy:et,anisotropyMap:ee,clearcoat:tt,clearcoatMap:J,clearcoatNormalMap:te,clearcoatRoughnessMap:me,iridescence:A,iridescenceMap:se,iridescenceThicknessMap:ue,sheen:g,sheenColorMap:R,sheenRoughnessMap:ie,specularMap:Q,specularColorMap:Se,specularIntensityMap:ge,transmission:N,transmissionMap:Ae,thicknessMap:pe,gradientMap:fe,opaque:x.transparent===!1&&x.blending===ii,alphaMap:Ge,alphaTest:P,alphaHash:le,combine:x.combine,mapUv:Te&&_(x.map.channel),aoMapUv:rt&&_(x.aoMap.channel),lightMapUv:Ee&&_(x.lightMap.channel),bumpMapUv:Ne&&_(x.bumpMap.channel),normalMapUv:be&&_(x.normalMap.channel),displacementMapUv:Ye&&_(x.displacementMap.channel),emissiveMapUv:De&&_(x.emissiveMap.channel),metalnessMapUv:we&&_(x.metalnessMap.channel),roughnessMapUv:ke&&_(x.roughnessMap.channel),anisotropyMapUv:ee&&_(x.anisotropyMap.channel),clearcoatMapUv:J&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(x.sheenRoughnessMap.channel),specularMapUv:Q&&_(x.specularMap.channel),specularColorMapUv:Se&&_(x.specularColorMap.channel),specularIntensityMapUv:ge&&_(x.specularIntensityMap.channel),transmissionMapUv:Ae&&_(x.transmissionMap.channel),thicknessMapUv:pe&&_(x.thicknessMap.channel),alphaMapUv:Ge&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||et),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:z,vertexUv2s:ne,vertexUv3s:Me,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Te||Ge),fog:!!L,useFog:x.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jt,flipSided:x.side===At,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Z&&x.extensions.derivatives===!0,extensionFragDepth:Z&&x.extensions.fragDepth===!0,extensionDrawBuffers:Z&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)b.push(X),b.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(y(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){const b=v[x.type];let X;if(b){const k=Vt[b];X=pc.clone(k.uniforms)}else X=x.uniforms;return X}function T(x,b){let X;for(let k=0,$=c.length;k<$;k++){const L=c[k];if(L.cacheKey===b){X=L,++X.usedTimes;break}}return X===void 0&&(X=new Cf(i,b,x,s),c.push(X)),X}function C(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:W}}function Uf(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ha(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function za(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,v,_,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,f,m,v,_,p){const u=o(d,f,m,v,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,v,_,p){const u=o(d,f,m,v,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Nf),n.length>1&&n.sort(f||Ha),r.length>1&&r.sort(f||Ha)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Ff(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new za,i.set(n,[o])):r>=s.length?(o=new za,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Of(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Bf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Gf=0;function Hf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zf(i,e){const t=new Of,n=Bf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(h,d){let f=0,m=0,v=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let _=0,p=0,u=0,y=0,M=0,S=0,T=0,C=0,w=0,W=0,x=0;h.sort(Hf);const b=d===!0?Math.PI:1;for(let k=0,$=h.length;k<$;k++){const L=h[k],G=L.color,Y=L.intensity,V=L.distance,re=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=G.r*Y*b,m+=G.g*Y*b,v+=G.b*Y*b;else if(L.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(L.sh.coefficients[K],Y);x++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const q=L.shadow,ae=n.get(L);ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,r.directionalShadow[_]=ae,r.directionalShadowMap[_]=re,r.directionalShadowMatrix[_]=L.shadow.matrix,S++}r.directional[_]=K,_++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(G).multiplyScalar(Y*b),K.distance=V,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,r.spot[u]=K;const q=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,q.updateMatrices(L),L.castShadow&&W++),r.spotLightMatrix[u]=q.matrix,L.castShadow){const ae=n.get(L);ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,r.spotShadow[u]=ae,r.spotShadowMap[u]=re,C++}u++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(G).multiplyScalar(Y),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=K,y++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*b),K.distance=L.distance,K.decay=L.decay,L.castShadow){const q=L.shadow,ae=n.get(L);ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,ae.shadowCameraNear=q.camera.near,ae.shadowCameraFar=q.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=re,r.pointShadowMatrix[p]=L.shadow.matrix,T++}r.point[p]=K,p++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(Y*b),K.groundColor.copy(L.groundColor).multiplyScalar(Y*b),r.hemi[M]=K,M++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==_||X.pointLength!==p||X.spotLength!==u||X.rectAreaLength!==y||X.hemiLength!==M||X.numDirectionalShadows!==S||X.numPointShadows!==T||X.numSpotShadows!==C||X.numSpotMaps!==w||X.numLightProbes!==x)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=y,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+w-W,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=x,X.directionalLength=_,X.pointLength=p,X.spotLength=u,X.rectAreaLength=y,X.hemiLength=M,X.numDirectionalShadows=S,X.numPointShadows=T,X.numSpotShadows=C,X.numSpotMaps=w,X.numLightProbes=x,r.version=Gf++)}function c(h,d){let f=0,m=0,v=0,_=0,p=0;const u=d.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){const S=h[y];if(S.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),f++}else if(S.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),v++}else if(S.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Va(i,e){const t=new zf(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vf(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Va(i,e),t.set(s,[l])):o>=a.length?(l=new Va(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class kf extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wf extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yf(i,e,t){let n=new xo;const r=new Oe,s=new Oe,o=new ct,a=new kf({depthPacking:bl}),l=new Wf,c={},h=t.maxTextureSize,d={[fn]:At,[At]:fn,[Jt]:Jt},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Xf,fragmentShader:Qf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Je(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qa;let u=this.type;this.render=function(T,C,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const W=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),X=i.state;X.setBlending(un),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=u!==Zt&&this.type===Zt,$=u===Zt&&this.type!==Zt;for(let L=0,G=T.length;L<G;L++){const Y=T[L],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||k===!0||$===!0){const q=this.type!==Zt?{minFilter:Et,magFilter:Et}:{};V.map!==null&&V.map.dispose(),V.map=new Rn(r.x,r.y,q),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const K=V.getViewportCount();for(let q=0;q<K;q++){const ae=V.getViewport(q);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),X.viewport(o),V.updateMatrices(Y,q),n=V.getFrustum(),S(C,w,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Zt&&y(V,w),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(W,x,b)};function y(T,C){const w=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,w,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,w,m,_,null)}function M(T,C,w,W){let x=null;const b=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)x=b;else if(x=w.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=x.uuid,k=C.uuid;let $=c[X];$===void 0&&($={},c[X]=$);let L=$[k];L===void 0&&(L=x.clone(),$[k]=L),x=L}if(x.visible=C.visible,x.wireframe=C.wireframe,W===Zt?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=i.properties.get(x);X.light=w}return x}function S(T,C,w,W,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Zt)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const k=e.update(T),$=T.material;if(Array.isArray($)){const L=k.groups;for(let G=0,Y=L.length;G<Y;G++){const V=L[G],re=$[V.materialIndex];if(re&&re.visible){const K=M(T,re,W,x);T.onBeforeShadow(i,T,C,w,k,K,V),i.renderBufferDirect(w,null,k,K,T,V),T.onAfterShadow(i,T,C,w,k,K,V)}}}else if($.visible){const L=M(T,$,W,x);T.onBeforeShadow(i,T,C,w,k,L,null),i.renderBufferDirect(w,null,k,L,T,null),T.onAfterShadow(i,T,C,w,k,L,null)}}const X=T.children;for(let k=0,$=X.length;k<$;k++)S(X[k],C,w,W,x)}}function qf(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const le=new ct;let Z=null;const z=new ct(0,0,0,0);return{setMask:function(ne){Z!==ne&&!P&&(i.colorMask(ne,ne,ne,ne),Z=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Me,He,st,gt){gt===!0&&(ne*=st,Me*=st,He*=st),le.set(ne,Me,He,st),z.equals(le)===!1&&(i.clearColor(ne,Me,He,st),z.copy(le))},reset:function(){P=!1,Z=null,z.set(-1,0,0,0)}}}function s(){let P=!1,le=null,Z=null,z=null;return{setTest:function(ne){ne?Re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ne){le!==ne&&!P&&(i.depthMask(ne),le=ne)},setFunc:function(ne){if(Z!==ne){switch(ne){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ne}},setLocked:function(ne){P=ne},setClear:function(ne){z!==ne&&(i.clearDepth(ne),z=ne)},reset:function(){P=!1,le=null,Z=null,z=null}}}function o(){let P=!1,le=null,Z=null,z=null,ne=null,Me=null,He=null,st=null,gt=null;return{setTest:function(Qe){P||(Qe?Re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!P&&(i.stencilMask(Qe),le=Qe)},setFunc:function(Qe,_t,zt){(Z!==Qe||z!==_t||ne!==zt)&&(i.stencilFunc(Qe,_t,zt),Z=Qe,z=_t,ne=zt)},setOp:function(Qe,_t,zt){(Me!==Qe||He!==_t||st!==zt)&&(i.stencilOp(Qe,_t,zt),Me=Qe,He=_t,st=zt)},setLocked:function(Qe){P=Qe},setClear:function(Qe){gt!==Qe&&(i.clearStencil(Qe),gt=Qe)},reset:function(){P=!1,le=null,Z=null,z=null,ne=null,Me=null,He=null,st=null,gt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,_=[],p=null,u=!1,y=null,M=null,S=null,T=null,C=null,w=null,W=null,x=new We(0,0,0),b=0,X=!1,k=null,$=null,L=null,G=null,Y=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,K=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),re=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),re=K>=2);let ae=null,oe={};const H=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),he=new ct().fromArray(H),_e=new ct().fromArray(j);function xe(P,le,Z,z){const ne=new Uint8Array(4),Me=i.createTexture();i.bindTexture(P,Me),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Z;He++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,z,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(le+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Me}const Pe={};Pe[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(rr),De(!1),we(Ss),Re(i.CULL_FACE),be(un);function Re(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Te(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Ie(P,le){return m[P]!==le?(i.bindFramebuffer(P,le),m[P]=le,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=le),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function U(P,le){let Z=_,z=!1;if(P)if(Z=v.get(le),Z===void 0&&(Z=[],v.set(le,Z)),P.isWebGLMultipleRenderTargets){const ne=P.texture;if(Z.length!==ne.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,He=ne.length;Me<He;Me++)Z[Me]=i.COLOR_ATTACHMENT0+Me;Z.length=ne.length,z=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,z=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,z=!0);z&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function rt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Ee={[An]:i.FUNC_ADD,[zo]:i.FUNC_SUBTRACT,[Vo]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[Rs]=i.MIN,Ee[ws]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ee[Rs]=P.MIN_EXT,Ee[ws]=P.MAX_EXT)}const Ne={[ko]:i.ZERO,[Wo]:i.ONE,[Xo]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[Zo]:i.SRC_ALPHA_SATURATE,[Ko]:i.DST_COLOR,[Yo]:i.DST_ALPHA,[Qo]:i.ONE_MINUS_SRC_COLOR,[Jr]:i.ONE_MINUS_SRC_ALPHA,[jo]:i.ONE_MINUS_DST_COLOR,[qo]:i.ONE_MINUS_DST_ALPHA,[Jo]:i.CONSTANT_COLOR,[$o]:i.ONE_MINUS_CONSTANT_COLOR,[el]:i.CONSTANT_ALPHA,[tl]:i.ONE_MINUS_CONSTANT_ALPHA};function be(P,le,Z,z,ne,Me,He,st,gt,Qe){if(P===un){u===!0&&(Te(i.BLEND),u=!1);return}if(u===!1&&(Re(i.BLEND),u=!0),P!==Ho){if(P!==y||Qe!==X){if((M!==An||C!==An)&&(i.blendEquation(i.FUNC_ADD),M=An,C=An),Qe)switch(P){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,T=null,w=null,W=null,x.set(0,0,0),b=0,y=P,X=Qe}return}ne=ne||le,Me=Me||Z,He=He||z,(le!==M||ne!==C)&&(i.blendEquationSeparate(Ee[le],Ee[ne]),M=le,C=ne),(Z!==S||z!==T||Me!==w||He!==W)&&(i.blendFuncSeparate(Ne[Z],Ne[z],Ne[Me],Ne[He]),S=Z,T=z,w=Me,W=He),(st.equals(x)===!1||gt!==b)&&(i.blendColor(st.r,st.g,st.b,gt),x.copy(st),b=gt),y=P,X=!1}function Ye(P,le){P.side===Jt?Te(i.CULL_FACE):Re(i.CULL_FACE);let Z=P.side===At;le&&(Z=!Z),De(Z),P.blending===ii&&P.transparent===!1?be(un):be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const z=P.stencilWrite;c.setTest(z),z&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(P){k!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),k=P)}function we(P){P!==Oo?(Re(i.CULL_FACE),P!==$&&(P===Ss?i.cullFace(i.BACK):P===Bo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),$=P}function ke(P){P!==L&&(re&&i.lineWidth(P),L=P)}function et(P,le,Z){P?(Re(i.POLYGON_OFFSET_FILL),(G!==le||Y!==Z)&&(i.polygonOffset(le,Z),G=le,Y=Z)):Te(i.POLYGON_OFFSET_FILL)}function tt(P){P?Re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+V-1),ae!==P&&(i.activeTexture(P),ae=P)}function g(P,le,Z){Z===void 0&&(ae===null?Z=i.TEXTURE0+V-1:Z=ae);let z=oe[Z];z===void 0&&(z={type:void 0,texture:void 0},oe[Z]=z),(z.type!==P||z.texture!==le)&&(ae!==Z&&(i.activeTexture(Z),ae=Z),i.bindTexture(P,le||Pe[P]),z.type=P,z.texture=le)}function N(){const P=oe[ae];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){he.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function Ae(P){_e.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function pe(P,le){let Z=d.get(le);Z===void 0&&(Z=new WeakMap,d.set(le,Z));let z=Z.get(P);z===void 0&&(z=i.getUniformBlockIndex(le,P.name),Z.set(P,z))}function fe(P,le){const z=d.get(le).get(P);h.get(le)!==z&&(i.uniformBlockBinding(le,z,P.__bindingPointIndex),h.set(le,z))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ae=null,oe={},m={},v=new WeakMap,_=[],p=null,u=!1,y=null,M=null,S=null,T=null,C=null,w=null,W=null,x=new We(0,0,0),b=0,X=!1,k=null,$=null,L=null,G=null,Y=null,he.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Te,bindFramebuffer:Ie,drawBuffers:U,useProgram:rt,setBlending:be,setMaterial:Ye,setFlipSided:De,setCullFace:we,setLineWidth:ke,setPolygonOffset:et,setScissorTest:tt,activeTexture:A,bindTexture:g,unbindTexture:N,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:Q,texImage3D:Se,updateUBOMapping:pe,uniformBlockBinding:fe,texStorage2D:R,texStorage3D:ie,texSubImage2D:te,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:ge,viewport:Ae,reset:Ge}}function Kf(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,g){return u?new OffscreenCanvas(A,g):Ci("canvas")}function M(A,g,N,ee){let J=1;if((A.width>ee||A.height>ee)&&(J=ee/Math.max(A.width,A.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const te=g?cr:Math.floor,me=te(J*A.width),se=te(J*A.height);_===void 0&&(_=y(me,se));const ue=N?y(me,se):_;return ue.width=me,ue.height=se,ue.getContext("2d").drawImage(A,0,0,me,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+me+"x"+se+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return rs(A.width)&&rs(A.height)}function T(A){return a?!1:A.wrapS!==Gt||A.wrapT!==Gt||A.minFilter!==Et&&A.minFilter!==It}function C(A,g){return A.generateMipmaps&&g&&A.minFilter!==Et&&A.minFilter!==It}function w(A){i.generateMipmap(A)}function W(A,g,N,ee,J=!1){if(a===!1)return g;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=g;if(g===i.RED&&(N===i.FLOAT&&(te=i.R32F),N===i.HALF_FLOAT&&(te=i.R16F),N===i.UNSIGNED_BYTE&&(te=i.R8)),g===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(te=i.R8UI),N===i.UNSIGNED_SHORT&&(te=i.R16UI),N===i.UNSIGNED_INT&&(te=i.R32UI),N===i.BYTE&&(te=i.R8I),N===i.SHORT&&(te=i.R16I),N===i.INT&&(te=i.R32I)),g===i.RG&&(N===i.FLOAT&&(te=i.RG32F),N===i.HALF_FLOAT&&(te=i.RG16F),N===i.UNSIGNED_BYTE&&(te=i.RG8)),g===i.RGBA){const me=J?sr:Xe.getTransfer(ee);N===i.FLOAT&&(te=i.RGBA32F),N===i.HALF_FLOAT&&(te=i.RGBA16F),N===i.UNSIGNED_BYTE&&(te=me===qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(A,g,N){return C(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==Et&&A.minFilter!==It?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function b(A){return A===Et||A===Cs||A===Mr?i.NEAREST:i.LINEAR}function X(A){const g=A.target;g.removeEventListener("dispose",X),$(g),g.isVideoTexture&&v.delete(g)}function k(A){const g=A.target;g.removeEventListener("dispose",k),G(g)}function $(A){const g=n.get(A);if(g.__webglInit===void 0)return;const N=A.source,ee=p.get(N);if(ee){const J=ee[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(A),Object.keys(ee).length===0&&p.delete(N)}n.remove(A)}function L(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const N=A.source,ee=p.get(N);delete ee[g.__cacheKey],o.memory.textures--}function G(A){const g=A.texture,N=n.get(A),ee=n.get(g);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(N.__webglFramebuffer[J]))for(let te=0;te<N.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(N.__webglFramebuffer[J][te]);else i.deleteFramebuffer(N.__webglFramebuffer[J]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[J])}else{if(Array.isArray(N.__webglFramebuffer))for(let J=0;J<N.__webglFramebuffer.length;J++)i.deleteFramebuffer(N.__webglFramebuffer[J]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,te=g.length;J<te;J++){const me=n.get(g[J]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(g[J])}n.remove(g),n.remove(A)}let Y=0;function V(){Y=0}function re(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function K(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function q(A,g){const N=n.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(N,A,g);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function ae(A,g){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Re(N,A,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function oe(A,g){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Re(N,A,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function H(A,g){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Te(N,A,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const j={[ts]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[ns]:i.MIRRORED_REPEAT},he={[Et]:i.NEAREST,[Cs]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},_e={[wl]:i.NEVER,[Ul]:i.ALWAYS,[Cl]:i.LESS,[so]:i.LEQUAL,[Pl]:i.EQUAL,[Dl]:i.GEQUAL,[Ll]:i.GREATER,[Il]:i.NOTEQUAL};function xe(A,g,N){if(N?(i.texParameteri(A,i.TEXTURE_WRAP_S,j[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[g.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Gt||g.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,b(g.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==Et&&g.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Et||g.minFilter!==Mr&&g.minFilter!==bi||g.type===cn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function Pe(A,g){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",X));const ee=g.source;let J=p.get(ee);J===void 0&&(J={},p.set(ee,J));const te=K(g);if(te!==A.__cacheKey){J[te]===void 0&&(J[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[te].usedTimes++;const me=J[A.__cacheKey];me!==void 0&&(J[A.__cacheKey].usedTimes--,me.usedTimes===0&&L(g)),A.__cacheKey=te,A.__webglTexture=J[te].texture}return N}function Re(A,g,N){let ee=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=i.TEXTURE_3D);const J=Pe(A,g),te=g.source;t.bindTexture(ee,A.__webglTexture,i.TEXTURE0+N);const me=n.get(te);if(te.version!==me.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const se=Xe.getPrimaries(Xe.workingColorSpace),ue=g.colorSpace===Ut?null:Xe.getPrimaries(g.colorSpace),R=g.colorSpace===Ut||se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);const ie=T(g)&&S(g.image)===!1;let Q=M(g.image,ie,!1,h);Q=tt(g,Q);const Se=S(Q)||a,ge=s.convert(g.format,g.colorSpace);let Ae=s.convert(g.type),pe=W(g.internalFormat,ge,Ae,g.colorSpace,g.isVideoTexture);xe(ee,g,Se);let fe;const Ge=g.mipmaps,P=a&&g.isVideoTexture!==!0&&pe!==no,le=me.__version===void 0||J===!0,Z=x(g,Q,Se);if(g.isDepthTexture)pe=i.DEPTH_COMPONENT,a?g.type===cn?pe=i.DEPTH_COMPONENT32F:g.type===ln?pe=i.DEPTH_COMPONENT24:g.type===yn?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:g.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Tn&&pe===i.DEPTH_COMPONENT&&g.type!==ls&&g.type!==ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ln,Ae=s.convert(g.type)),g.format===oi&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,g.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=yn,Ae=s.convert(g.type))),le&&(P?t.texStorage2D(i.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,pe,Q.width,Q.height,0,ge,Ae,null));else if(g.isDataTexture)if(Ge.length>0&&Se){P&&le&&t.texStorage2D(i.TEXTURE_2D,Z,pe,Ge[0].width,Ge[0].height);for(let z=0,ne=Ge.length;z<ne;z++)fe=Ge[z],P?t.texSubImage2D(i.TEXTURE_2D,z,0,0,fe.width,fe.height,ge,Ae,fe.data):t.texImage2D(i.TEXTURE_2D,z,pe,fe.width,fe.height,0,ge,Ae,fe.data);g.generateMipmaps=!1}else P?(le&&t.texStorage2D(i.TEXTURE_2D,Z,pe,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,Ae,Q.data)):t.texImage2D(i.TEXTURE_2D,0,pe,Q.width,Q.height,0,ge,Ae,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,pe,Ge[0].width,Ge[0].height,Q.depth);for(let z=0,ne=Ge.length;z<ne;z++)fe=Ge[z],g.format!==Ht?ge!==null?P?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,Q.depth,ge,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,pe,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,Q.depth,ge,Ae,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,pe,fe.width,fe.height,Q.depth,0,ge,Ae,fe.data)}else{P&&le&&t.texStorage2D(i.TEXTURE_2D,Z,pe,Ge[0].width,Ge[0].height);for(let z=0,ne=Ge.length;z<ne;z++)fe=Ge[z],g.format!==Ht?ge!==null?P?t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,z,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(i.TEXTURE_2D,z,0,0,fe.width,fe.height,ge,Ae,fe.data):t.texImage2D(i.TEXTURE_2D,z,pe,fe.width,fe.height,0,ge,Ae,fe.data)}else if(g.isDataArrayTexture)P?(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,pe,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ae,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,ge,Ae,Q.data);else if(g.isData3DTexture)P?(le&&t.texStorage3D(i.TEXTURE_3D,Z,pe,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ae,Q.data)):t.texImage3D(i.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,ge,Ae,Q.data);else if(g.isFramebufferTexture){if(le)if(P)t.texStorage2D(i.TEXTURE_2D,Z,pe,Q.width,Q.height);else{let z=Q.width,ne=Q.height;for(let Me=0;Me<Z;Me++)t.texImage2D(i.TEXTURE_2D,Me,pe,z,ne,0,ge,Ae,null),z>>=1,ne>>=1}}else if(Ge.length>0&&Se){P&&le&&t.texStorage2D(i.TEXTURE_2D,Z,pe,Ge[0].width,Ge[0].height);for(let z=0,ne=Ge.length;z<ne;z++)fe=Ge[z],P?t.texSubImage2D(i.TEXTURE_2D,z,0,0,ge,Ae,fe):t.texImage2D(i.TEXTURE_2D,z,pe,ge,Ae,fe);g.generateMipmaps=!1}else P?(le&&t.texStorage2D(i.TEXTURE_2D,Z,pe,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ae,Q)):t.texImage2D(i.TEXTURE_2D,0,pe,ge,Ae,Q);C(g,Se)&&w(ee),me.__version=te.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Te(A,g,N){if(g.image.length!==6)return;const ee=Pe(A,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const te=n.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+N);const me=Xe.getPrimaries(Xe.workingColorSpace),se=g.colorSpace===Ut?null:Xe.getPrimaries(g.colorSpace),ue=g.colorSpace===Ut||me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const R=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,Q=[];for(let z=0;z<6;z++)!R&&!ie?Q[z]=M(g.image[z],!1,!0,c):Q[z]=ie?g.image[z].image:g.image[z],Q[z]=tt(g,Q[z]);const Se=Q[0],ge=S(Se)||a,Ae=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),fe=W(g.internalFormat,Ae,pe,g.colorSpace),Ge=a&&g.isVideoTexture!==!0,P=te.__version===void 0||ee===!0;let le=x(g,Se,ge);xe(i.TEXTURE_CUBE_MAP,g,ge);let Z;if(R){Ge&&P&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,fe,Se.width,Se.height);for(let z=0;z<6;z++){Z=Q[z].mipmaps;for(let ne=0;ne<Z.length;ne++){const Me=Z[ne];g.format!==Ht?Ae!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,Me.width,Me.height,Ae,pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,Me.width,Me.height,0,Ae,pe,Me.data)}}}else{Z=g.mipmaps,Ge&&P&&(Z.length>0&&le++,t.texStorage2D(i.TEXTURE_CUBE_MAP,le,fe,Q[0].width,Q[0].height));for(let z=0;z<6;z++)if(ie){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Q[z].width,Q[z].height,Ae,pe,Q[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,Q[z].width,Q[z].height,0,Ae,pe,Q[z].data);for(let ne=0;ne<Z.length;ne++){const He=Z[ne].image[z].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,He.width,He.height,Ae,pe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,He.width,He.height,0,Ae,pe,He.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ae,pe,Q[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,Ae,pe,Q[z]);for(let ne=0;ne<Z.length;ne++){const Me=Z[ne];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Ae,pe,Me.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,Ae,pe,Me.image[z])}}}C(g,ge)&&w(i.TEXTURE_CUBE_MAP),te.__version=J.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ie(A,g,N,ee,J,te){const me=s.convert(N.format,N.colorSpace),se=s.convert(N.type),ue=W(N.internalFormat,me,se,N.colorSpace);if(!n.get(g).__hasExternalTextures){const ie=Math.max(1,g.width>>te),Q=Math.max(1,g.height>>te);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,te,ue,ie,Q,g.depth,0,me,se,null):t.texImage2D(J,te,ue,ie,Q,0,me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ke(g)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,n.get(N).__webglTexture,0,we(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,n.get(N).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function U(A,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer&&!g.stencilBuffer){let ee=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||ke(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===cn?ee=i.DEPTH_COMPONENT32F:J.type===ln&&(ee=i.DEPTH_COMPONENT24));const te=we(g);ke(g)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ee,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ee,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(g.depthBuffer&&g.stencilBuffer){const ee=we(g);N&&ke(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,g.width,g.height):ke(g)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const ee=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<ee.length;J++){const te=ee[J],me=s.convert(te.format,te.colorSpace),se=s.convert(te.type),ue=W(te.internalFormat,me,se,te.colorSpace),R=we(g);N&&ke(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,R,ue,g.width,g.height):ke(g)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R,ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ue,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const ee=n.get(g.depthTexture).__webglTexture,J=we(g);if(g.depthTexture.format===Tn)ke(g)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(g.depthTexture.format===oi)ke(g)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(A){const g=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");rt(g.__webglFramebuffer,A)}else if(N){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]=i.createRenderbuffer(),U(g.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),U(g.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(A,g,N){const ee=n.get(A);g!==void 0&&Ie(ee.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ee(A)}function be(A){const g=A.texture,N=n.get(A),ee=n.get(g);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=g.version,o.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,te=A.isWebGLMultipleRenderTargets===!0,me=S(A)||a;if(J){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let ue=0;ue<g.mipmaps.length;ue++)N.__webglFramebuffer[se][ue]=i.createFramebuffer()}else N.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)N.__webglFramebuffer[se]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(te)if(r.drawBuffers){const se=A.texture;for(let ue=0,R=se.length;ue<R;ue++){const ie=n.get(se[ue]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ke(A)===!1){const se=te?g:[g];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const R=se[ue];N.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const ie=s.convert(R.format,R.colorSpace),Q=s.convert(R.type),Se=W(R.internalFormat,ie,Q,R.colorSpace,A.isXRRenderTarget===!0),ge=we(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Se,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),U(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(i.TEXTURE_CUBE_MAP,g,me);for(let se=0;se<6;se++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Ie(N.__webglFramebuffer[se][ue],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Ie(N.__webglFramebuffer[se],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);C(g,me)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const se=A.texture;for(let ue=0,R=se.length;ue<R;ue++){const ie=se[ue],Q=n.get(ie);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),xe(i.TEXTURE_2D,ie,me),Ie(N.__webglFramebuffer,A,ie,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),C(ie,me)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ee.__webglTexture),xe(se,g,me),a&&g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)Ie(N.__webglFramebuffer[ue],A,g,i.COLOR_ATTACHMENT0,se,ue);else Ie(N.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,se,0);C(g,me)&&w(se),t.unbindTexture()}A.depthBuffer&&Ee(A)}function Ye(A){const g=S(A)||a,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,J=N.length;ee<J;ee++){const te=N[ee];if(C(te,g)){const me=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(te).__webglTexture;t.bindTexture(me,se),w(me),t.unbindTexture()}}}function De(A){if(a&&A.samples>0&&ke(A)===!1){const g=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,ee=A.height;let J=i.COLOR_BUFFER_BIT;const te=[],me=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let R=0;R<g.length;R++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let R=0;R<g.length;R++){te.push(i.COLOR_ATTACHMENT0+R),A.depthBuffer&&te.push(me);const ie=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(ie===!1&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[R]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),ue){const Q=n.get(g[R]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,N,ee,0,0,N,ee,J,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let R=0;R<g.length;R++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.RENDERBUFFER,se.__webglColorRenderbuffer[R]);const ie=n.get(g[R]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function we(A){return Math.min(d,A.samples)}function ke(A){const g=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function et(A){const g=o.render.frame;v.get(A)!==g&&(v.set(A,g),A.update())}function tt(A,g){const N=A.colorSpace,ee=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===is||N!==en&&N!==Ut&&(Xe.getTransfer(N)===qe?a===!1?e.has("EXT_sRGB")===!0&&ee===Ht?(A.format=is,A.minFilter=It,A.generateMipmaps=!1):g=oo.sRGBToLinear(g):(ee!==Ht||J!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}this.allocateTextureUnit=re,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ke}function jf(i,e,t){const n=t.isWebGL2;function r(s,o=Ut){let a;const l=Xe.getTransfer(o);if(s===dn)return i.UNSIGNED_BYTE;if(s===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(s===_l)return i.BYTE;if(s===vl)return i.SHORT;if(s===ls)return i.UNSIGNED_SHORT;if(s===ja)return i.INT;if(s===ln)return i.UNSIGNED_INT;if(s===cn)return i.FLOAT;if(s===Ri)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xl)return i.ALPHA;if(s===Ht)return i.RGBA;if(s===El)return i.LUMINANCE;if(s===Ml)return i.LUMINANCE_ALPHA;if(s===Tn)return i.DEPTH_COMPONENT;if(s===oi)return i.DEPTH_STENCIL;if(s===is)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Al)return i.RED;if(s===$a)return i.RED_INTEGER;if(s===Sl)return i.RG;if(s===eo)return i.RG_INTEGER;if(s===to)return i.RGBA_INTEGER;if(s===Ar||s===Sr||s===yr||s===Tr)if(l===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ps||s===Ls||s===Is||s===Ds)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ps)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ls)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Is)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ds)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===no)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Us||s===Ns)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Us)return l===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ns)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fs||s===Os||s===Bs||s===Gs||s===Hs||s===zs||s===Vs||s===ks||s===Ws||s===Xs||s===Qs||s===Ys||s===qs||s===Ks)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Fs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Os)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ks)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ws)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ys)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qs)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ks)return l===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===br||s===js||s===Zs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===br)return l===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===js)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yl||s===Js||s===$s||s===ea)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===br)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Js)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$s)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ea)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Zf extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ai extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $f extends Fn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,v=null;const _=t.getContextAttributes();let p=null,u=null;const y=[],M=[],S=new Oe;let T=null;const C=new Dt;C.layers.enable(1),C.viewport=new ct;const w=new Dt;w.layers.enable(2),w.viewport=new ct;const W=[C,w],x=new Zf;x.layers.enable(1),x.layers.enable(2);let b=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=y[H];return j===void 0&&(j=new Kr,y[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=y[H];return j===void 0&&(j=new Kr,y[H]=j),j.getGripSpace()},this.getHand=function(H){let j=y[H];return j===void 0&&(j=new Kr,y[H]=j),j.getHandSpace()};function k(H){const j=M.indexOf(H.inputSource);if(j===-1)return;const he=y[j];he!==void 0&&(he.update(H.inputSource,H.frame,c||o),he.dispatchEvent({type:H.type,data:H.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",L);for(let H=0;H<y.length;H++){const j=M[H];j!==null&&(M[H]=null,y[H].disconnect(j))}b=null,X=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Rn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,he=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?oi:Tn,he=_.stencil?yn:ln);const xe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new Rn(f.textureWidth,f.textureHeight,{format:Ht,type:dn,depthTexture:new Mo(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(H){for(let j=0;j<H.removed.length;j++){const he=H.removed[j],_e=M.indexOf(he);_e>=0&&(M[_e]=null,y[_e].disconnect(he))}for(let j=0;j<H.added.length;j++){const he=H.added[j];let _e=M.indexOf(he);if(_e===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=M.length){M.push(he),_e=Pe;break}else if(M[Pe]===null){M[Pe]=he,_e=Pe;break}if(_e===-1)break}const xe=y[_e];xe&&xe.connect(he)}}const G=new D,Y=new D;function V(H,j,he){G.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const _e=G.distanceTo(Y),xe=j.projectionMatrix.elements,Pe=he.projectionMatrix.elements,Re=xe[14]/(xe[10]-1),Te=xe[14]/(xe[10]+1),Ie=(xe[9]+1)/xe[5],U=(xe[9]-1)/xe[5],rt=(xe[8]-1)/xe[0],Ee=(Pe[8]+1)/Pe[0],Ne=Re*rt,be=Re*Ee,Ye=_e/(-rt+Ee),De=Ye*-rt;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(De),H.translateZ(Ye),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const we=Re+Ye,ke=Te+Ye,et=Ne-De,tt=be+(_e-De),A=Ie*Te/ke*we,g=U*Te/ke*we;H.projectionMatrix.makePerspective(et,tt,A,g,we,ke),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function re(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.near=w.near=C.near=H.near,x.far=w.far=C.far=H.far,(b!==x.near||X!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,X=x.far);const j=H.parent,he=x.cameras;re(x,j);for(let _e=0;_e<he.length;_e++)re(he[_e],j);he.length===2?V(x,C,w):x.projectionMatrix.copy(C.projectionMatrix),K(H,x,j)};function K(H,j,he){he===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(he.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=wi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let q=null;function ae(H,j){if(h=j.getViewerPose(c||o),v=j,h!==null){const he=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;he.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let xe=0;xe<he.length;xe++){const Pe=he[xe];let Re=null;if(m!==null)Re=m.getViewport(Pe);else{const Ie=d.getViewSubImage(f,Pe);Re=Ie.viewport,xe===0&&(e.setRenderTargetTextures(u,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(u))}let Te=W[xe];Te===void 0&&(Te=new Dt,Te.layers.enable(xe),Te.viewport=new ct,W[xe]=Te),Te.matrix.fromArray(Pe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Pe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Re.x,Re.y,Re.width,Re.height),xe===0&&(x.matrix.copy(Te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(Te)}}for(let he=0;he<y.length;he++){const _e=M[he],xe=y[he];_e!==null&&xe!==void 0&&xe.update(_e,j,c||o)}q&&q(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),v=null}const oe=new Eo;oe.setAnimationLoop(ae),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}function ep(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,go(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,y,M,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,y,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===At&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===At&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,y,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===At&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tp(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,M){const S=M.program;n.uniformBlockBinding(y,S)}function c(y,M){let S=r[y.id];S===void 0&&(v(y),S=h(y),r[y.id]=S,y.addEventListener("dispose",p));const T=M.program;n.updateUBOMapping(y,T);const C=e.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function h(y){const M=d();y.__bindingPointIndex=M;const S=i.createBuffer(),T=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=r[y.id],S=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,w=S.length;C<w;C++){const W=S[C];if(m(W,C,T)===!0){const x=W.__offset,b=Array.isArray(W.value)?W.value:[W.value];let X=0;for(let k=0;k<b.length;k++){const $=b[k],L=_($);typeof $=="number"?(W.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,x+X,W.__data)):$.isMatrix3?(W.__data[0]=$.elements[0],W.__data[1]=$.elements[1],W.__data[2]=$.elements[2],W.__data[3]=$.elements[0],W.__data[4]=$.elements[3],W.__data[5]=$.elements[4],W.__data[6]=$.elements[5],W.__data[7]=$.elements[0],W.__data[8]=$.elements[6],W.__data[9]=$.elements[7],W.__data[10]=$.elements[8],W.__data[11]=$.elements[0]):($.toArray(W.__data,X),X+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,W.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,S){const T=y.value;if(S[M]===void 0){if(typeof T=="number")S[M]=T;else{const C=Array.isArray(T)?T:[T],w=[];for(let W=0;W<C.length;W++)w.push(C[W].clone());S[M]=w}return!0}else if(typeof T=="number"){if(S[M]!==T)return S[M]=T,!0}else{const C=Array.isArray(S[M])?S[M]:[S[M]],w=Array.isArray(T)?T:[T];for(let W=0;W<C.length;W++){const x=C[W];if(x.equals(w[W])===!1)return x.copy(w[W]),!0}}return!1}function v(y){const M=y.uniforms;let S=0;const T=16;let C=0;for(let w=0,W=M.length;w<W;w++){const x=M[w],b={boundary:0,storage:0},X=Array.isArray(x.value)?x.value:[x.value];for(let k=0,$=X.length;k<$;k++){const L=X[k],G=_(L);b.boundary+=G.boundary,b.storage+=G.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,w>0){C=S%T;const k=T-C;C!==0&&k-b.boundary<0&&(S+=T-C,x.__offset=S)}S+=b.storage}return C=S%T,C>0&&(S+=T-C),y.__size=S,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ro{constructor(e={}){const{canvas:t=jl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const M=this;let S=!1,T=0,C=0,w=null,W=-1,x=null;const b=new ct,X=new ct;let k=null;const $=new We(0);let L=0,G=t.width,Y=t.height,V=1,re=null,K=null;const q=new ct(0,0,G,Y),ae=new ct(0,0,G,Y);let oe=!1;const H=new xo;let j=!1,he=!1,_e=null;const xe=new ut,Pe=new Oe,Re=new D,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?V:1}let U=n;function rt(E,I){for(let O=0;O<E.length;O++){const B=E[O],F=t.getContext(B,I);if(F!==null)return F}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${as}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",le,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&I.shift(),U=rt(I,E),U===null)throw rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Ne,be,Ye,De,we,ke,et,tt,A,g,N,ee,J,te,me,se,ue,R,ie,Q,Se,ge,Ae;function pe(){Ee=new hd(U),Ne=new rd(U,Ee,e),Ee.init(Ne),Se=new jf(U,Ee,Ne),be=new qf(U,Ee,Ne),Ye=new pd(U),De=new Uf,we=new Kf(U,Ee,be,De,Ne,Se,Ye),ke=new ad(M),et=new ud(M),tt=new Mc(U,Ne),ge=new nd(U,Ee,tt,Ne),A=new dd(U,tt,Ye,ge),g=new vd(U,A,tt,Ye),R=new _d(U,Ne,we),me=new sd(De),N=new Df(M,ke,et,Ee,Ne,ge,me),ee=new ep(M,De),J=new Ff,te=new Vf(Ee,Ne),ue=new td(M,ke,et,be,g,f,l),se=new Yf(M,g,Ne),Ae=new tp(U,Ye,Ne,be),ie=new id(U,Ee,Ye,Ne),Q=new fd(U,Ee,Ye,Ne),Ye.programs=N.programs,M.capabilities=Ne,M.extensions=Ee,M.properties=De,M.renderLists=J,M.shadowMap=se,M.state=be,M.info=Ye}pe();const fe=new $f(M,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,Y,!1))},this.getSize=function(E){return E.set(G,Y)},this.setSize=function(E,I,O=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Y=I,t.width=Math.floor(E*V),t.height=Math.floor(I*V),O===!0&&(t.style.width=E+"px",t.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(G*V,Y*V).floor()},this.setDrawingBufferSize=function(E,I,O){G=E,Y=I,V=O,t.width=Math.floor(E*O),t.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,I,O,B){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,I,O,B),be.viewport(b.copy(q).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,I,O,B){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,I,O,B),be.scissor(X.copy(ae).multiplyScalar(V).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){be.setScissorTest(oe=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(E=!0,I=!0,O=!0){let B=0;if(E){let F=!1;if(w!==null){const de=w.texture.format;F=de===to||de===eo||de===$a}if(F){const de=w.texture.type,ve=de===dn||de===ln||de===ls||de===yn||de===Za||de===Ja,ye=ue.getClearColor(),Ce=ue.getClearAlpha(),Be=ye.r,Le=ye.g,Ue=ye.b;ve?(m[0]=Be,m[1]=Le,m[2]=Ue,m[3]=Ce,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Be,v[1]=Le,v[2]=Ue,v[3]=Ce,U.clearBufferiv(U.COLOR,0,v))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),O&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",le,!1),J.dispose(),te.dispose(),De.dispose(),ke.dispose(),et.dispose(),g.dispose(),ge.dispose(),Ae.dispose(),N.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",gt),fe.removeEventListener("sessionend",Qe),_e&&(_e.dispose(),_e=null),_t.stop()};function Ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Ye.autoReset,I=se.enabled,O=se.autoUpdate,B=se.needsUpdate,F=se.type;pe(),Ye.autoReset=E,se.enabled=I,se.autoUpdate=O,se.needsUpdate=B,se.type=F}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){const I=E.target;I.removeEventListener("dispose",Z),z(I)}function z(E){ne(E),De.remove(E)}function ne(E){const I=De.get(E).programs;I!==void 0&&(I.forEach(function(O){N.releaseProgram(O)}),E.isShaderMaterial&&N.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,B,F,de){I===null&&(I=Te);const ve=F.isMesh&&F.matrixWorld.determinant()<0,ye=Do(E,I,O,B,F);be.setMaterial(B,ve);let Ce=O.index,Be=1;if(B.wireframe===!0){if(Ce=A.getWireframeAttribute(O),Ce===void 0)return;Be=2}const Le=O.drawRange,Ue=O.attributes.position;let Ze=Le.start*Be,Tt=(Le.start+Le.count)*Be;de!==null&&(Ze=Math.max(Ze,de.start*Be),Tt=Math.min(Tt,(de.start+de.count)*Be)),Ce!==null?(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Ce.count)):Ue!=null&&(Ze=Math.max(Ze,0),Tt=Math.min(Tt,Ue.count));const at=Tt-Ze;if(at<0||at===1/0)return;ge.setup(F,B,ye,O,Ce);let Xt,Ke=ie;if(Ce!==null&&(Xt=tt.get(Ce),Ke=Q,Ke.setIndex(Xt)),F.isMesh)B.wireframe===!0?(be.setLineWidth(B.wireframeLinewidth*Ie()),Ke.setMode(U.LINES)):Ke.setMode(U.TRIANGLES);else if(F.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),be.setLineWidth(ze*Ie()),F.isLineSegments?Ke.setMode(U.LINES):F.isLineLoop?Ke.setMode(U.LINE_LOOP):Ke.setMode(U.LINE_STRIP)}else F.isPoints?Ke.setMode(U.POINTS):F.isSprite&&Ke.setMode(U.TRIANGLES);if(F.isBatchedMesh)Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Ke.renderInstances(Ze,at,F.count);else if(O.isInstancedBufferGeometry){const ze=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,_r=Math.min(O.instanceCount,ze);Ke.renderInstances(Ze,at,_r)}else Ke.render(Ze,at)};function Me(E,I,O){E.transparent===!0&&E.side===Jt&&E.forceSinglePass===!1?(E.side=At,E.needsUpdate=!0,Di(E,I,O),E.side=fn,E.needsUpdate=!0,Di(E,I,O),E.side=Jt):Di(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),p=te.get(O),p.init(),y.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==O&&E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(M._useLegacyLights);const B=new Set;return E.traverse(function(F){const de=F.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const ye=de[ve];Me(ye,O,F),B.add(ye)}else Me(de,O,F),B.add(de)}),y.pop(),p=null,B},this.compileAsync=function(E,I,O=null){const B=this.compile(E,I,O);return new Promise(F=>{function de(){if(B.forEach(function(ve){De.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){F(E);return}setTimeout(de,10)}Ee.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let He=null;function st(E){He&&He(E)}function gt(){_t.stop()}function Qe(){_t.start()}const _t=new Eo;_t.setAnimationLoop(st),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(E){He=E,fe.setAnimationLoop(E),E===null?_t.stop():_t.start()},fe.addEventListener("sessionstart",gt),fe.addEventListener("sessionend",Qe),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(I),I=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,I,w),p=te.get(E,y.length),p.init(),y.push(p),xe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(xe),he=this.localClippingEnabled,j=me.init(this.clippingPlanes,he),_=J.get(E,u.length),_.init(),u.push(_),zt(E,I,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(re,K),this.info.render.frame++,j===!0&&me.beginShadows();const O=p.state.shadowsArray;if(se.render(O,E,I),j===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(_,E),p.setupLights(M._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let F=0,de=B.length;F<de;F++){const ve=B[F];_s(_,E,ve,ve.viewport)}}else _s(_,E,I);w!==null&&(we.updateMultisampleRenderTarget(w),we.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(M,E,I),ge.resetDefaultState(),W=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function zt(E,I,O,B){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){B&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);const ve=g.update(E),ye=E.material;ye.visible&&_.push(E,ve,ye,O,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||H.intersectsObject(E))){const ve=g.update(E),ye=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Re.copy(ve.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(ye)){const Ce=ve.groups;for(let Be=0,Le=Ce.length;Be<Le;Be++){const Ue=Ce[Be],Ze=ye[Ue.materialIndex];Ze&&Ze.visible&&_.push(E,ve,Ze,O,Re.z,Ue)}}else ye.visible&&_.push(E,ve,ye,O,Re.z,null)}}const de=E.children;for(let ve=0,ye=de.length;ve<ye;ve++)zt(de[ve],I,O,B)}function _s(E,I,O,B){const F=E.opaque,de=E.transmissive,ve=E.transparent;p.setupLightsView(O),j===!0&&me.setGlobalState(M.clippingPlanes,O),de.length>0&&Io(F,de,I,O),B&&be.viewport(b.copy(B)),F.length>0&&Ii(F,I,O),de.length>0&&Ii(de,I,O),ve.length>0&&Ii(ve,I,O),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Io(E,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const de=Ne.isWebGL2;_e===null&&(_e=new Rn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ri:dn,minFilter:bi,samples:de?4:0})),M.getDrawingBufferSize(Pe),de?_e.setSize(Pe.x,Pe.y):_e.setSize(cr(Pe.x),cr(Pe.y));const ve=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor($),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const ye=M.toneMapping;M.toneMapping=hn,Ii(E,O,B),we.updateMultisampleRenderTarget(_e),we.updateRenderTargetMipmap(_e);let Ce=!1;for(let Be=0,Le=I.length;Be<Le;Be++){const Ue=I[Be],Ze=Ue.object,Tt=Ue.geometry,at=Ue.material,Xt=Ue.group;if(at.side===Jt&&Ze.layers.test(B.layers)){const Ke=at.side;at.side=At,at.needsUpdate=!0,vs(Ze,O,B,Tt,at,Xt),at.side=Ke,at.needsUpdate=!0,Ce=!0}}Ce===!0&&(we.updateMultisampleRenderTarget(_e),we.updateRenderTargetMipmap(_e)),M.setRenderTarget(ve),M.setClearColor($,L),M.toneMapping=ye}function Ii(E,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let F=0,de=E.length;F<de;F++){const ve=E[F],ye=ve.object,Ce=ve.geometry,Be=B===null?ve.material:B,Le=ve.group;ye.layers.test(O.layers)&&vs(ye,I,O,Ce,Be,Le)}}function vs(E,I,O,B,F,de){E.onBeforeRender(M,I,O,B,F,de),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(M,I,O,B,E,de),F.transparent===!0&&F.side===Jt&&F.forceSinglePass===!1?(F.side=At,F.needsUpdate=!0,M.renderBufferDirect(O,I,B,F,E,de),F.side=fn,F.needsUpdate=!0,M.renderBufferDirect(O,I,B,F,E,de),F.side=Jt):M.renderBufferDirect(O,I,B,F,E,de),E.onAfterRender(M,I,O,B,F,de)}function Di(E,I,O){I.isScene!==!0&&(I=Te);const B=De.get(E),F=p.state.lights,de=p.state.shadowsArray,ve=F.state.version,ye=N.getParameters(E,F.state,de,I,O),Ce=N.getProgramCacheKey(ye);let Be=B.programs;B.environment=E.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(E.isMeshStandardMaterial?et:ke).get(E.envMap||B.environment),Be===void 0&&(E.addEventListener("dispose",Z),Be=new Map,B.programs=Be);let Le=Be.get(Ce);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===ve)return Es(E,ye),Le}else ye.uniforms=N.getUniforms(E),E.onBuild(O,ye,M),E.onBeforeCompile(ye,M),Le=N.acquireProgram(ye,Ce),Be.set(Ce,Le),B.uniforms=ye.uniforms;const Ue=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=me.uniform),Es(E,ye),B.needsLights=No(E),B.lightsStateVersion=ve,B.needsLights&&(Ue.ambientLightColor.value=F.state.ambient,Ue.lightProbe.value=F.state.probe,Ue.directionalLights.value=F.state.directional,Ue.directionalLightShadows.value=F.state.directionalShadow,Ue.spotLights.value=F.state.spot,Ue.spotLightShadows.value=F.state.spotShadow,Ue.rectAreaLights.value=F.state.rectArea,Ue.ltc_1.value=F.state.rectAreaLTC1,Ue.ltc_2.value=F.state.rectAreaLTC2,Ue.pointLights.value=F.state.point,Ue.pointLightShadows.value=F.state.pointShadow,Ue.hemisphereLights.value=F.state.hemi,Ue.directionalShadowMap.value=F.state.directionalShadowMap,Ue.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ue.spotShadowMap.value=F.state.spotShadowMap,Ue.spotLightMatrix.value=F.state.spotLightMatrix,Ue.spotLightMap.value=F.state.spotLightMap,Ue.pointShadowMap.value=F.state.pointShadowMap,Ue.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function xs(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ir.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Es(E,I){const O=De.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Do(E,I,O,B,F){I.isScene!==!0&&(I=Te),we.resetTextureUnits();const de=I.fog,ve=B.isMeshStandardMaterial?I.environment:null,ye=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:en,Ce=(B.isMeshStandardMaterial?et:ke).get(B.envMap||ve),Be=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ue=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,Tt=!!O.morphAttributes.color;let at=hn;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(at=M.toneMapping);const Xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=Xt!==void 0?Xt.length:0,ze=De.get(B),_r=p.state.lights;if(j===!0&&(he===!0||E!==x)){const Pt=E===x&&B.id===W;me.setState(B,E,Pt)}let je=!1;B.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_r.state.version||ze.outputColorSpace!==ye||F.isBatchedMesh&&ze.batching===!1||!F.isBatchedMesh&&ze.batching===!0||F.isInstancedMesh&&ze.instancing===!1||!F.isInstancedMesh&&ze.instancing===!0||F.isSkinnedMesh&&ze.skinning===!1||!F.isSkinnedMesh&&ze.skinning===!0||F.isInstancedMesh&&ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ze.instancingColor===!1&&F.instanceColor!==null||ze.envMap!==Ce||B.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==me.numPlanes||ze.numIntersection!==me.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Le||ze.morphTargets!==Ue||ze.morphNormals!==Ze||ze.morphColors!==Tt||ze.toneMapping!==at||Ne.isWebGL2===!0&&ze.morphTargetsCount!==Ke)&&(je=!0):(je=!0,ze.__version=B.version);let mn=ze.currentProgram;je===!0&&(mn=Di(B,I,F));let Ms=!1,gi=!1,vr=!1;const dt=mn.getUniforms(),gn=ze.uniforms;if(be.useProgram(mn.program)&&(Ms=!0,gi=!0,vr=!0),B.id!==W&&(W=B.id,gi=!0),Ms||x!==E){dt.setValue(U,"projectionMatrix",E.projectionMatrix),dt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Pt=dt.map.cameraPosition;Pt!==void 0&&Pt.setValue(U,Re.setFromMatrixPosition(E.matrixWorld)),Ne.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,gi=!0,vr=!0)}if(F.isSkinnedMesh){dt.setOptional(U,F,"bindMatrix"),dt.setOptional(U,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Ne.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(U,"boneTexture",Pt.boneTexture,we)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(dt.setOptional(U,F,"batchingTexture"),dt.setValue(U,"batchingTexture",F._matricesTexture,we));const xr=O.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0&&Ne.isWebGL2===!0)&&R.update(F,O,mn),(gi||ze.receiveShadow!==F.receiveShadow)&&(ze.receiveShadow=F.receiveShadow,dt.setValue(U,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(gn.envMap.value=Ce,gn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),gi&&(dt.setValue(U,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&Uo(gn,vr),de&&B.fog===!0&&ee.refreshFogUniforms(gn,de),ee.refreshMaterialUniforms(gn,B,V,Y,_e),ir.upload(U,xs(ze),gn,we)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ir.upload(U,xs(ze),gn,we),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(U,"center",F.center),dt.setValue(U,"modelViewMatrix",F.modelViewMatrix),dt.setValue(U,"normalMatrix",F.normalMatrix),dt.setValue(U,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pt=B.uniformsGroups;for(let Er=0,Fo=Pt.length;Er<Fo;Er++)if(Ne.isWebGL2){const As=Pt[Er];Ae.update(As,mn),Ae.bind(As,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function Uo(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function No(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,I,O){De.get(E.texture).__webglTexture=I,De.get(E.depthTexture).__webglTexture=O;const B=De.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const O=De.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){w=E,T=I,C=O;let B=!0,F=null,de=!1,ve=!1;if(E){const Ce=De.get(E);Ce.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ce.__webglFramebuffer===void 0?we.setupRenderTarget(E):Ce.__hasExternalTextures&&we.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const Le=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?F=Le[I][O]:F=Le[I],de=!0):Ne.isWebGL2&&E.samples>0&&we.useMultisampledRTT(E)===!1?F=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[O]:F=Le,b.copy(E.viewport),X.copy(E.scissor),k=E.scissorTest}else b.copy(q).multiplyScalar(V).floor(),X.copy(ae).multiplyScalar(V).floor(),k=oe;if(be.bindFramebuffer(U.FRAMEBUFFER,F)&&Ne.drawBuffers&&B&&be.drawBuffers(E,F),be.viewport(b),be.scissor(X),be.setScissorTest(k),de){const Ce=De.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ce.__webglTexture,O)}else if(ve){const Ce=De.get(E.texture),Be=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,O||0,Be)}W=-1},this.readRenderTargetPixels=function(E,I,O,B,F,de,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){be.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Ce=E.texture,Be=Ce.format,Le=Ce.type;if(Be!==Ht&&Se.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Le===Ri&&(Ee.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Le!==dn&&Se.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===cn&&(Ne.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-B&&O>=0&&O<=E.height-F&&U.readPixels(I,O,B,F,Se.convert(Be),Se.convert(Le),de)}finally{const Ce=w!==null?De.get(w).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,I,O=0){const B=Math.pow(2,-O),F=Math.floor(I.image.width*B),de=Math.floor(I.image.height*B);we.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,E.x,E.y,F,de),be.unbindTexture()},this.copyTextureToTexture=function(E,I,O,B=0){const F=I.image.width,de=I.image.height,ve=Se.convert(O.format),ye=Se.convert(O.type);we.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,E.x,E.y,F,de,ve,ye,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,E.x,E.y,ve,ye,I.image),B===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O,B,F=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,ye=E.max.z-E.min.z+1,Ce=Se.convert(B.format),Be=Se.convert(B.type);let Le;if(B.isData3DTexture)we.setTexture3D(B,0),Le=U.TEXTURE_3D;else if(B.isDataArrayTexture)we.setTexture2DArray(B,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Ue=U.getParameter(U.UNPACK_ROW_LENGTH),Ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Tt=U.getParameter(U.UNPACK_SKIP_PIXELS),at=U.getParameter(U.UNPACK_SKIP_ROWS),Xt=U.getParameter(U.UNPACK_SKIP_IMAGES),Ke=O.isCompressedTexture?O.mipmaps[0]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ke.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Le,F,I.x,I.y,I.z,de,ve,ye,Ce,Be,Ke.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,F,I.x,I.y,I.z,de,ve,ye,Ce,Ke.data)):U.texSubImage3D(Le,F,I.x,I.y,I.z,de,ve,ye,Ce,Be,Ke),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ue),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),U.pixelStorei(U.UNPACK_SKIP_ROWS,at),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt),F===0&&B.generateMipmaps&&U.generateMipmap(Le),be.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?we.setTextureCube(E,0):E.isData3DTexture?we.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?we.setTexture2DArray(E,0):we.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){T=0,C=0,w=null,be.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cs?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===hr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?bn:io}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bn?lt:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class np extends Ro{}np.prototype.isWebGL1Renderer=!0;class ip extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ps extends pn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new D,f=new D,m=[],v=[],_=[],p=[];for(let u=0;u<=n;u++){const y=[],M=u/n;let S=0;u===0&&o===0?S=.5/t:u===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const C=T/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+M*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(C+S,1-M),y.push(c++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const M=h[u][y+1],S=h[u][y],T=h[u+1][y],C=h[u+1][y+1];(u!==0||o>0)&&m.push(M,S,C),(u!==n-1||l<Math.PI)&&m.push(S,T,C)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wo extends Li{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=os,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const sp=new rp;class ms{constructor(e){this.manager=e!==void 0?e:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ms.DEFAULT_MATERIAL_NAME="__DEFAULT";class ap extends ms{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ka.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ci("img");function l(){h(),ka.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ct extends ms{constructor(e){super(e)}load(e,t,n,r){const s=new St,o=new ap(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class op extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class lp extends op{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const Xa={type:"change"},jr={type:"start"},Qa={type:"end"},nr=new uo,Ya=new on,cp=Math.cos(70*Kl.DEG2RAD);class up extends Fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",g),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",g),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xa),n.update(),s=r.NONE},this.update=function(){const R=new D,ie=new wn().setFromUnitVectors(e.up,new D(0,1,0)),Q=ie.clone().invert(),Se=new D,ge=new wn,Ae=new D,pe=2*Math.PI;return function(Ge=null){const P=n.object.position;R.copy(P).sub(n.target),R.applyQuaternion(ie),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&X(x(Ge)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=n.minAzimuthAngle,Z=n.maxAzimuthAngle;isFinite(le)&&isFinite(Z)&&(le<-Math.PI?le+=pe:le>Math.PI&&(le-=pe),Z<-Math.PI?Z+=pe:Z>Math.PI&&(Z-=pe),le<=Z?a.theta=Math.max(le,Math.min(Z,a.theta)):a.theta=a.theta>(le+Z)/2?Math.max(le,a.theta):Math.min(Z,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*c),R.setFromSpherical(a),R.applyQuaternion(Q),P.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let z=!1;if(n.zoomToCursor&&C){let ne=null;if(n.object.isPerspectiveCamera){const Me=R.length();ne=K(Me*c);const He=Me-ne;n.object.position.addScaledVector(S,He),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Me=new D(T.x,T.y,0);Me.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),z=!0;const He=new D(T.x,T.y,0);He.unproject(n.object),n.object.position.sub(He).add(Me),n.object.updateMatrixWorld(),ne=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ne).add(n.object.position):(nr.origin.copy(n.object.position),nr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(nr.direction))<cp?e.lookAt(n.target):(Ya.setFromNormalAndCoplanarPoint(n.object.up,n.target),nr.intersectPlane(Ya,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),z=!0);return c=1,C=!1,z||Se.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o||Ae.distanceToSquared(n.target)>0?(n.dispatchEvent(Xa),Se.copy(n.object.position),ge.copy(n.object.quaternion),Ae.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",De),n.domElement.removeEventListener("pointercancel",ke),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",ke),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",g),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Wa,l=new Wa;let c=1;const h=new D,d=new Oe,f=new Oe,m=new Oe,v=new Oe,_=new Oe,p=new Oe,u=new Oe,y=new Oe,M=new Oe,S=new D,T=new Oe;let C=!1;const w=[],W={};function x(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function X(R){l.theta-=R}function k(R){l.phi-=R}const $=function(){const R=new D;return function(Q,Se){R.setFromMatrixColumn(Se,0),R.multiplyScalar(-Q),h.add(R)}}(),L=function(){const R=new D;return function(Q,Se){n.screenSpacePanning===!0?R.setFromMatrixColumn(Se,1):(R.setFromMatrixColumn(Se,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Q),h.add(R)}}(),G=function(){const R=new D;return function(Q,Se){const ge=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;R.copy(Ae).sub(n.target);let pe=R.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*Q*pe/ge.clientHeight,n.object.matrix),L(2*Se*pe/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(Q*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),L(Se*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(R){if(!n.zoomToCursor)return;C=!0;const ie=n.domElement.getBoundingClientRect(),Q=R.clientX-ie.left,Se=R.clientY-ie.top,ge=ie.width,Ae=ie.height;T.x=Q/ge*2-1,T.y=-(Se/Ae)*2+1,S.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function q(R){d.set(R.clientX,R.clientY)}function ae(R){re(R),u.set(R.clientX,R.clientY)}function oe(R){v.set(R.clientX,R.clientY)}function H(R){f.set(R.clientX,R.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;X(2*Math.PI*m.x/ie.clientHeight),k(2*Math.PI*m.y/ie.clientHeight),d.copy(f),n.update()}function j(R){y.set(R.clientX,R.clientY),M.subVectors(y,u),M.y>0?Y(b()):M.y<0&&V(b()),u.copy(y),n.update()}function he(R){_.set(R.clientX,R.clientY),p.subVectors(_,v).multiplyScalar(n.panSpeed),G(p.x,p.y),v.copy(_),n.update()}function _e(R){re(R),R.deltaY<0?V(b()):R.deltaY>0&&Y(b()),n.update()}function xe(R){let ie=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ie=!0;break}ie&&(R.preventDefault(),n.update())}function Pe(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),ie=.5*(w[0].pageY+w[1].pageY);d.set(R,ie)}}function Re(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),ie=.5*(w[0].pageY+w[1].pageY);v.set(R,ie)}}function Te(){const R=w[0].pageX-w[1].pageX,ie=w[0].pageY-w[1].pageY,Q=Math.sqrt(R*R+ie*ie);u.set(0,Q)}function Ie(){n.enableZoom&&Te(),n.enablePan&&Re()}function U(){n.enableZoom&&Te(),n.enableRotate&&Pe()}function rt(R){if(w.length==1)f.set(R.pageX,R.pageY);else{const Q=ue(R),Se=.5*(R.pageX+Q.x),ge=.5*(R.pageY+Q.y);f.set(Se,ge)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;X(2*Math.PI*m.x/ie.clientHeight),k(2*Math.PI*m.y/ie.clientHeight),d.copy(f)}function Ee(R){if(w.length===1)_.set(R.pageX,R.pageY);else{const ie=ue(R),Q=.5*(R.pageX+ie.x),Se=.5*(R.pageY+ie.y);_.set(Q,Se)}p.subVectors(_,v).multiplyScalar(n.panSpeed),G(p.x,p.y),v.copy(_)}function Ne(R){const ie=ue(R),Q=R.pageX-ie.x,Se=R.pageY-ie.y,ge=Math.sqrt(Q*Q+Se*Se);y.set(0,ge),M.set(0,Math.pow(y.y/u.y,n.zoomSpeed)),Y(M.y),u.copy(y)}function be(R){n.enableZoom&&Ne(R),n.enablePan&&Ee(R)}function Ye(R){n.enableZoom&&Ne(R),n.enableRotate&&rt(R)}function De(R){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",we),n.domElement.addEventListener("pointerup",ke)),te(R),R.pointerType==="touch"?N(R):et(R))}function we(R){n.enabled!==!1&&(R.pointerType==="touch"?ee(R):tt(R))}function ke(R){me(R),w.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",ke)),n.dispatchEvent(Qa),s=r.NONE}function et(R){let ie;switch(R.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case On.DOLLY:if(n.enableZoom===!1)return;ae(R),s=r.DOLLY;break;case On.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;oe(R),s=r.PAN}else{if(n.enableRotate===!1)return;q(R),s=r.ROTATE}break;case On.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;q(R),s=r.ROTATE}else{if(n.enablePan===!1)return;oe(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(jr)}function tt(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;H(R);break;case r.DOLLY:if(n.enableZoom===!1)return;j(R);break;case r.PAN:if(n.enablePan===!1)return;he(R);break}}function A(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(jr),_e(R),n.dispatchEvent(Qa))}function g(R){n.enabled===!1||n.enablePan===!1||xe(R)}function N(R){switch(se(R),w.length){case 1:switch(n.touches.ONE){case Bn.ROTATE:if(n.enableRotate===!1)return;Pe(),s=r.TOUCH_ROTATE;break;case Bn.PAN:if(n.enablePan===!1)return;Re(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Bn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(),s=r.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(jr)}function ee(R){switch(se(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;rt(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ee(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(R),n.update();break;default:s=r.NONE}}function J(R){n.enabled!==!1&&R.preventDefault()}function te(R){w.push(R)}function me(R){delete W[R.pointerId];for(let ie=0;ie<w.length;ie++)if(w[ie].pointerId==R.pointerId){w.splice(ie,1);return}}function se(R){let ie=W[R.pointerId];ie===void 0&&(ie=new Oe,W[R.pointerId]=ie),ie.set(R.pageX,R.pageY)}function ue(R){const ie=R.pointerId===w[0].pointerId?w[1]:w[0];return W[ie.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",De),n.domElement.addEventListener("pointercancel",ke),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const Co="data:image/png;base64,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",hp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO3cPW4TQRiAYQxI8UFScwKKtIgGpCCukYKCgoYOegQCCqYBiQJFdBwAKKgokKiBK9CQZpFDLBzHXu/uNz/fz/tKU7qY0aP1enfGlzoiQZckHyYCEIkCEIkCEIkCEIkCEIkCEIkCEIkCEIkCEIkCEIkC0IRe/ei6g496RvrZNQtAIwPP+QA0IvBcDEADA8/mADQg8GwPQDsCT38A6gk8uwPQlsAzLABtCDzDA9Ba4BkXgFYCz/gAdBZ4pgUg8IgKD4grj6zQgMAjLywg8OQpJCDw5CscIPDkLRQg8OQvDCDwlCkEIPCUyz0g8JTNNSDwlM8tIPDUySUg8NTLHSDw1M0VIPDUzw0g8LTJBSDwtMs8IPC0zTQg8LTPLCDw6MgkIPDoyRwg8OjKFCDw6MsMIPDozAQg8OhNPSDw6E41IPDoTy0g8NhIJSDw2EkdIPDYShUg8NhLDSDw2EwFIPDYrTkg8NiuKSDw2K8ZIPD4qAkg8PipOiDw+KoqIPD4qxog8PisCiDw+K04IPD4riggr3i8zksVIK+L7HVeqgB5XWSv81IFyOsie52XKkBeF9nrvFQB8rrIXuelDtCbX+0XFzzGv8I0IOLKY/wmuiUi8Dj5Gd8CEXicPUisiQg8Tl9l1EAEHucvU0siAk+Q7RwlEIEn2IaynIjAE3RLaw5EufA8/PanO/x8Uu1G/6DSvNxvqpcgyonnytvfp0MDomQUT7NjPVMQlcCjAVEyjKfpwcIxiEriaYkoGcfT/GjzEEQ18LRAlBzgUfHnCn2IauKpiSg5waMC0DZELfDUQJQc4VEDaB1RSzwlESVneFQBWu7+W4zWeEogSg7xqAOUqxx4ciJKTvG4BJQTTw5EyTEed4BK4JEgSs7xuAJUEs8URCkAHjeAauAZgygFweMCUE08QxClQHjMA2qBpw9RCobHNKCWeDYhSgHxmAWkAc9y3P50ku3hp8VMAnr8/aQ5nOXYPzrurt9710XNJCAtiPaPjrv5jSenIyois4BaI1rFMw+MyDSgVog24ZkHRWQeUG1EfXjmARG5AFQL0RA882CI3AAqjWgMnnkgRK4AlUI0Bc88CCJ3gHIjkuCZB0DkElAuRFI8ezefdldvPesu33ne3X/9pfOYW0BSRFPx7K2gmd19eW54ROQa0FREY/Hs9aDxjsg9oLGIhuIZg2bmGFEIQEMR7cIjQTNziigMoF2ItuHJiWbmEFEoQNsQreMpiWbmDFE4QOuIlnhqopk5QhQS0HJX47UHH/6hOXxRHc3MCaKwgBY9ev+1OZyZcUShAS0CkazwgBaBaHoAOgtE0wLQSiAaH4DWAtG4ALQhEA0PQFsC0bAA1BOIdgegHYGoPwANCETbA9DAQLQ5AI0IRBcD0MhAdD4ATQhE/wMQiQIQiQIQiQIQiQIQiQIQiQIQiQIQiQIQiQIQiQIQiQIQdZL+AqpAqlO1dZ6hAAAAAElFTkSuQmCC",dp="data:image/png;base64,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",fp="data:image/png;base64,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",pp="/portfolio/assets/js-30558d7e.png",mp="/portfolio/assets/mongo-097dea38.png",gp="data:image/png;base64,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",_p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACSElEQVR4nO3cQWolIRRAUfe/P9djyOyPKpBLUCvngMM0xfOihoaMBcEoPwwCIhEQiYBIBEQiIBIBkQiIREAkAiIREImASAREIiASAZEIiERAJAIiERCJgEgERCIgEgGRCIhEQCQCIhEQiYBIBEQiIBIBkQiIREAkAiIREImASAREIiASAZEIiERAJAIiERCJgEjGHGNZZjB/OQMBiWeVGQhIQEtAIli7ZuAEEt8SkAiWE0gE68YZuMIO2IR58RLQAZsw3x7QLr5tLwFtHu7tBLR5uLcT0Obh3k5Am4d7OwFtHu7tBLR5uLcT0Obh3k5Am4d7uyMCKv++bxt5X/56/gJ6YdyfBHToJgloOIEENFxhTqBnrjBX2PIGeuE74+Rv++QEOnSTBDQ8ogU0PKKdQM9cYa6w5Q30wnfGyd/2yQl06CYJaHhEC2h4RDuBnrnC/vAKK1xhwxUmoOEKcwI9c4W5wpZf4w/9VbnwBhreQAIa3kBOoGfeQK6w5Q3kDfS//y/s5FXs/vb5giWgAzZhXrwEdMAmzIuXgA7YhHnxEtABmzAvXgI6YBPmxUtAB2zCvHgJ6IBNmBcvAR2wCfPidfSf0do9nO/Fs6MntDseAf1MQAJKBCSgREACSgQkoERAAkoEJKBEQAJ6b0CcT0AkAiIREImASAREIiASAZEIiERAJAIiERCJgEgERCIgEgGRCIhEQCQCIhEQiYBIBEQiIBIBkQiIREAkAiIREImASAREIiASAZEIiERAJAIiERCJgEgERCIgVvEFlB0ATuIJpsMAAAAASUVORK5CYII=",vp="data:image/png;base64,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",xp="/portfolio/assets/react-57932ce6.png",Ep="data:image/png;base64,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",Mp="/portfolio/assets/tierra-03dcb755.jpeg",Ap="/portfolio/assets/vite-39356cad.png";console.log(Co);const Sp=document.getElementById("box"),pr=new Ro({antialias:!0,alpha:!0});pr.setSize(1100,600);Sp.appendChild(pr.domElement);const gs=new ip,mr=new Dt(75,1200/800,.1,1e3);mr.position.z=30;mr.position.x=5;const yp=new ps(5,32,32),Tp=new Ct,bp=Tp.load(Mp),Rp=new wo({map:bp}),Po=new Je(yp,Rp),wp=new ht(1,1,1),Cp=new Ct,Pp=Cp.load(fp),Lp=new wt({map:Pp}),Pn=new Je(wp,Lp);Pn.position.x=5;Pn.position.z=20;Pn.position.y=-2;Pn.scale.set(2,2,2);const Ip=new ht(1,1,1),Dp=new Ct,Up=Dp.load(Co),Np=new wt({map:Up}),ci=new Je(Ip,Np);ci.position.x=10;ci.position.y=5;ci.position.z=10;const Fp=new ht(1,1,1),Op=new Ct,Bp=Op.load(pp),Gp=new wt({map:Bp}),Ln=new Je(Fp,Gp);Ln.position.x=20;Ln.position.y=3;Ln.position.z=5;Ln.scale.set(2,2,2);const Hp=new ht(1,1,1),zp=new Ct,Vp=zp.load(xp),kp=new wt({map:Vp}),In=new Je(Hp,kp);In.position.x=-8;In.position.y=0;In.position.z=16;In.scale.set(2,2,2);const Wp=new ht(1,1,1),Xp=new Ct,Qp=Xp.load(gp),Yp=new wt({map:Qp}),gr=new Je(Wp,Yp);gr.position.x=-1;gr.position.y=3;gr.position.z=-20;const qp=new ht(1,1,1),Kp=new Ct,jp=Kp.load(Ep),Zp=new wt({map:jp}),Dn=new Je(qp,Zp);Dn.position.x=-10;Dn.position.y=-3;Dn.position.z=-16;Dn.scale.set(2,2,2);const Jp=new ht(1,1,1),$p=new Ct,em=$p.load(vp),tm=new wt({map:em}),Un=new Je(Jp,tm);Un.position.x=-16;Un.position.y=0;Un.position.z=10;Un.scale.set(2,2,2);const nm=new ht(1,1,1),im=new Ct,rm=im.load(_p),sm=new wt({map:rm}),ui=new Je(nm,sm);ui.position.x=16;ui.position.y=4;ui.position.z=-10;const am=new ht(1,1,1),om=new Ct,lm=om.load(mp),cm=new wt({map:lm}),Nn=new Je(am,cm);Nn.position.x=-20;Nn.position.y=4;Nn.position.z=0;Nn.scale.set(2,2,2);const um=new ht(1,1,1),hm=new Ct,dm=hm.load(Ap),fm=new wt({map:dm}),hi=new Je(um,fm);hi.position.x=-17;hi.position.y=0;hi.position.z=-12;const pm=new ht(1,1,1),mm=new Ct,gm=mm.load(hp),_m=new wt({map:gm}),di=new Je(pm,_m);di.position.x=15;di.position.y=0;di.position.z=13;const vm=new ht(1,1,1),xm=new Ct,Em=xm.load(dp),Mm=new wo({map:Em}),fi=new Je(vm,Mm);fi.position.x=10;fi.position.y=0;fi.position.z=-18;const Mt=new Ai;Mt.add(Po);Mt.add(Pn);Mt.add(ci);Mt.add(Ln);Mt.add(In);Mt.add(gr);Mt.add(Dn);Mt.add(Un);Mt.add(ui);Mt.add(Nn);Mt.add(hi);Mt.add(di);Mt.add(fi);gs.add(Mt);const Am=new lp(16777215,3);gs.add(Am);const Sm=new up(mr,pr.domElement);function Lo(){requestAnimationFrame(Lo),Po.rotation.x+=1e-4,Pn.rotation.y+=.01,Pn.rotation.x+=.01,ci.rotation.y+=-.01,ci.rotation.x+=.01,Ln.rotation.y+=.01,Ln.rotation.x+=-.01,In.rotation.y+=.01,In.rotation.x+=-.01,Un.rotation.y+=.01,Un.rotation.x+=-.01,Nn.rotation.y+=-.01,Nn.rotation.x+=.01,di.rotation.y+=-.01,di.rotation.x+=-.01,Dn.rotation.y+=-.01,Dn.rotation.x+=.01,hi.rotation.y+=.01,hi.rotation.x+=.01,ui.rotation.y+=-.01,ui.rotation.x+=.01,fi.rotation.y+=-.01,fi.rotation.x+=.01,Mt.rotation.y+=.01,Sm.update(),pr.render(gs,mr)}Lo();
