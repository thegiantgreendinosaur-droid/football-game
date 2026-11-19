(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="174",xh=0,Ha=1,yh=2,ll=1,hl=2,bn=3,Wn=0,Ve=1,Ne=2,Gn=0,Ui=1,Bi=2,Ga=3,Va=4,Sh=5,ii=100,Mh=101,Th=102,Eh=103,wh=104,Ah=200,bh=201,Ch=202,Rh=203,Sr=204,Mr=205,Ph=206,Ih=207,Lh=208,Dh=209,Nh=210,Uh=211,Fh=212,zh=213,Oh=214,Tr=0,Er=1,wr=2,Hi=3,Ar=4,br=5,Cr=6,Rr=7,ul=0,kh=1,Bh=2,Vn=0,Hh=1,Gh=2,Vh=3,_a=4,Wh=5,Xh=6,qh=7,dl=300,Gi=301,Vi=302,Pr=303,Ir=304,Po=306,Xn=1e3,Hn=1001,Lr=1002,Je=1003,Yh=1004,Ns=1005,mn=1006,No=1007,oi=1008,Ln=1009,fl=1010,pl=1011,Ms=1012,va=1013,ri=1014,gn=1015,Rs=1016,xa=1017,ya=1018,Wi=1020,ml=35902,gl=1021,_l=1022,fn=1023,vl=1024,xl=1025,Fi=1026,Xi=1027,Sa=1028,Ma=1029,yl=1030,Ta=1031,Ea=1033,mo=33776,go=33777,_o=33778,vo=33779,Dr=35840,Nr=35841,Ur=35842,Fr=35843,zr=36196,Or=37492,kr=37496,Br=37808,Hr=37809,Gr=37810,Vr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,Kr=37816,Zr=37817,$r=37818,Jr=37819,jr=37820,Qr=37821,xo=36492,ta=36494,ea=36495,Sl=36283,na=36284,ia=36285,sa=36286,Kh=3200,Zh=3201,Ml=0,$h=1,Bn="",Se="srgb",qi="srgb-linear",Mo="linear",de="srgb",fi=7680,Wa=519,Jh=512,jh=513,Qh=514,Tl=515,tu=516,eu=517,nu=518,iu=519,oa=35044,Xa=35048,qa="300 es",Rn=2e3,To=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const _s=Math.PI/180,Ts=180/Math.PI;function _n(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function wa(n,t){return(n%t+t)%t}function su(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ou(n,t,e){return n!==t?(e-n)/(t-n):0}function vs(n,t,e){return(1-e)*n+e*t}function ru(n,t,e,i){return vs(n,t,1-Math.exp(-e*i))}function au(n,t=1){return t-Math.abs(wa(n,t*2)-t)}function cu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function lu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function uu(n,t){return n+Math.random()*(t-n)}function du(n){return n*(.5-Math.random())}function fu(n){n!==void 0&&(Ya=n);let t=Ya+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pu(n){return n*_s}function mu(n){return n*Ts}function gu(n){return(n&n-1)===0&&n!==0}function _u(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xu(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),d=r((t-i)/2),f=o((i-t)/2),m=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ce={DEG2RAD:_s,RAD2DEG:Ts,generateUUID:_n,clamp:$t,euclideanModulo:wa,mapLinear:su,inverseLerp:ou,lerp:vs,damp:ru,pingpong:au,smoothstep:cu,smootherstep:lu,randInt:hu,randFloat:uu,randFloatSpread:du,seededRandom:fu,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:_u,floorPowerOfTwo:vu,setQuaternionFromProperEuler:xu,normalize:le,denormalize:dn};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,o,r,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],y=s[1],v=s[4],x=s[7],w=s[2],T=s[5],A=s[8];return o[0]=r*_+a*y+c*w,o[3]=r*g+a*v+c*T,o[6]=r*p+a*x+c*A,o[1]=l*_+h*y+u*w,o[4]=l*g+h*v+u*T,o[7]=l*p+h*x+u*A,o[2]=d*_+f*y+m*w,o[5]=d*g+f*v+m*T,o[8]=d*p+f*x+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,m=e*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*r)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(r*e-i*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new Xt;function El(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yu(){const n=Eo("canvas");return n.style.display="block",n}const Ka={};function ti(n){n in Ka||(Ka[n]=!0,console.warn(n))}function Su(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Mu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Za=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$a=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eu(){const n={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===de&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Mo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qi]:{primaries:t,whitePoint:i,transfer:Mo,toXYZ:Za,fromXYZ:$a,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Za,fromXYZ:$a,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),n}const ie=Eu();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pi;class wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=Eo("canvas")),pi.width=t.width,pi.height=t.height;const i=pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=pi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Eo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=In(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Au=0;class Aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=_n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Fo(s[r].image)):o.push(Fo(s[r]))}else o=Fo(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bu=0;class Oe extends Ki{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=Hn,s=Hn,o=mn,r=oi,a=fn,c=Ln,l=Oe.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=_n(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=dl;Oe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,w=(p+1)/2,T=(h+d)/4,A=(u+_)/4,R=(m+g)/4;return v>x&&v>w?v<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(v),s=T/i,o=A/i):x>w?x<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),i=T/s,o=R/s):w<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(w),i=A/o,s=R/o),this.set(i,s,o,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends Ki{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Oe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Aa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Cu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wl extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ru extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=o[r+0],f=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,p*y);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const x=a*y;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),d=c(i/2),f=c(s/2),m=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new L,Ja=new Zi;class li{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,cn):cn.fromBufferAttribute(o,r),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Fs.subVectors(this.max,ns),mi.subVectors(t.a,ns),gi.subVectors(t.b,ns),_i.subVectors(t.c,ns),Nn.subVectors(gi,mi),Un.subVectors(_i,gi),Kn.subVectors(mi,_i);let e=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!Oo(e,mi,gi,_i,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Oo(e,mi,gi,_i,Fs))?!1:(zs.crossVectors(Nn,Un),e=[zs.x,zs.y,zs.z],Oo(e,mi,gi,_i,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,Us=new li,mi=new L,gi=new L,_i=new L,Nn=new L,Un=new L,Kn=new L,ns=new L,Fs=new L,zs=new L,Zn=new L;function Oo(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Zn.fromArray(n,o);const a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),h=i.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pu=new li,is=new L,ko=new L;class Ps{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pu.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(is,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(ko)),this.expandByPoint(is.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new L,Bo=new L,Os=new L,Fn=new L,Ho=new L,ks=new L,Go=new L;class Iu{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Bo.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Bo);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Os),a=Fn.dot(this.direction),c=-Fn.dot(Os),l=Fn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-a,d=r*a-c,m=o*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bo).addScaledVector(Os,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,s,o){Ho.subVectors(e,t),ks.subVectors(i,t),Go.crossVectors(Ho,ks);let r=this.direction.dot(Go),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fn.subVectors(this.origin,t);const c=a*this.direction.dot(ks.crossVectors(Fn,ks));if(c<0)return null;const l=a*this.direction.dot(Ho.cross(Fn));if(l<0||c+l>r)return null;const h=-a*Fn.dot(Go);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,s,o,r,a,c,l,h,u,d,f,m,_,g){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,d,f,m,_,g)}set(t,e,i,s,o,r,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),o=1/vi.setFromMatrixColumn(t,1).length(),r=1/vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,i){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),zn.crossVectors(i,Ye),zn.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),zn.crossVectors(i,Ye)),zn.normalize(),Bs.crossVectors(Ye,zn),s[0]=zn.x,s[4]=Bs.x,s[8]=Ye.x,s[1]=zn.y,s[5]=Bs.y,s[9]=Ye.y,s[2]=zn.z,s[6]=Bs.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],y=i[3],v=i[7],x=i[11],w=i[15],T=s[0],A=s[4],R=s[8],M=s[12],S=s[1],C=s[5],N=s[9],U=s[13],F=s[2],z=s[6],D=s[10],G=s[14],H=s[3],K=s[7],et=s[11],ot=s[15];return o[0]=r*T+a*S+c*F+l*H,o[4]=r*A+a*C+c*z+l*K,o[8]=r*R+a*N+c*D+l*et,o[12]=r*M+a*U+c*G+l*ot,o[1]=h*T+u*S+d*F+f*H,o[5]=h*A+u*C+d*z+f*K,o[9]=h*R+u*N+d*D+f*et,o[13]=h*M+u*U+d*G+f*ot,o[2]=m*T+_*S+g*F+p*H,o[6]=m*A+_*C+g*z+p*K,o[10]=m*R+_*N+g*D+p*et,o[14]=m*M+_*U+g*G+p*ot,o[3]=y*T+v*S+x*F+w*H,o[7]=y*A+v*C+x*z+w*K,o[11]=y*R+v*N+x*D+w*et,o[15]=y*M+v*U+x*G+w*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*c*u-s*l*u-o*a*d+i*l*d+s*a*f-i*c*f)+_*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+g*(+e*l*u-e*a*f-o*r*u+i*r*f+o*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*r*u-i*r*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,v=m*d*l-h*g*l-m*c*f+r*g*f+h*c*p-r*d*p,x=h*_*l-m*u*l+m*a*f-r*_*f-h*a*p+r*u*p,w=m*u*c-h*_*c-m*a*d+r*_*d+h*a*g-r*u*g,T=e*y+i*v+s*x+o*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(_*d*o-u*g*o-_*s*f+i*g*f+u*s*p-i*d*p)*A,t[2]=(a*g*o-_*c*o+_*s*l-i*g*l-a*s*p+i*c*p)*A,t[3]=(u*c*o-a*d*o-u*s*l+i*d*l+a*s*f-i*c*f)*A,t[4]=v*A,t[5]=(h*g*o-m*d*o+m*s*f-e*g*f-h*s*p+e*d*p)*A,t[6]=(m*c*o-r*g*o-m*s*l+e*g*l+r*s*p-e*c*p)*A,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*A,t[8]=x*A,t[9]=(m*u*o-h*_*o-m*i*f+e*_*f+h*i*p-e*u*p)*A,t[10]=(r*_*o-m*a*o+m*i*l-e*_*l-r*i*p+e*a*p)*A,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*f-e*a*f)*A,t[12]=w*A,t[13]=(h*_*s-m*u*s+m*i*d-e*_*d-h*i*g+e*u*g)*A,t[14]=(m*a*s-r*_*s-m*i*c+e*_*c+r*i*g-e*a*g)*A,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,m=o*u,_=r*h,g=r*u,p=a*u,y=c*l,v=c*h,x=c*u,w=i.x,T=i.y,A=i.z;return s[0]=(1-(_+p))*w,s[1]=(f+x)*w,s[2]=(m-v)*w,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(m+v)*A,s[9]=(g-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=vi.set(s[0],s[1],s[2]).length();const r=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const l=1/o,h=1/r,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Rn){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,m;if(a===Rn)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===To)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Rn){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),d=(e+t)*l,f=(i+s)*h;let m,_;if(a===Rn)m=(r+o)*u,_=-2*u;else if(a===To)m=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const vi=new L,ln=new pe,Lu=new L(0,0,0),Du=new L(1,1,1),zn=new L,Bs=new L,Ye=new L,ja=new pe,Qa=new Zi;class vn{constructor(t=0,e=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nu=0;const tc=new L,xi=new Zi,En=new pe,Hs=new L,ss=new L,Uu=new L,Fu=new Zi,ec=new L(1,0,0),nc=new L(0,1,0),ic=new L(0,0,1),sc={type:"added"},zu={type:"removed"},yi={type:"childadded",child:null},Vo={type:"childremoved",child:null};class be extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new L,e=new vn,i=new Zi,s=new L(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hs.copy(t):Hs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ss,Hs,this.up):En.lookAt(Hs,ss,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(En),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,Uu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,wn=new L,Wo=new L,An=new L,Si=new L,Mi=new L,oc=new L,Xo=new L,qo=new L,Yo=new L,Ko=new ye,Zo=new ye,$o=new ye;class on{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){hn.subVectors(s,e),wn.subVectors(i,e),Wo.subVectors(t,e);const r=hn.dot(hn),a=hn.dot(wn),c=hn.dot(Wo),l=wn.dot(wn),h=wn.dot(Wo),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(r*h-a*c)*d;return o.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,An.x),c.addScaledVector(r,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return Ko.setScalar(0),Zo.setScalar(0),$o.setScalar(0),Ko.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,i),$o.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ko,o.x),r.addScaledVector(Zo,o.y),r.addScaledVector($o,o.z),r}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),wn.subVectors(t,e),hn.cross(wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),hn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Si.subVectors(s,i),Mi.subVectors(o,i),Xo.subVectors(t,i);const c=Si.dot(Xo),l=Mi.dot(Xo);if(c<=0&&l<=0)return e.copy(i);qo.subVectors(t,s);const h=Si.dot(qo),u=Mi.dot(qo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Si,r);Yo.subVectors(t,o);const f=Si.dot(Yo),m=Mi.dot(Yo);if(m>=0&&f<=m)return e.copy(o);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(Mi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return oc.subVectors(o,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(oc,a);const p=1/(g+_+d);return r=_*p,a=d*p,e.copy(i).addScaledVector(Si,r).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Jo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=wa(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Jo(r,o,t+1/3),this.g=Jo(r,o,t),this.b=Jo(r,o,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Se){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const i=bl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ie.fromWorkingColorSpace(Fe.copy(this),t),Math.round($t(Fe.r*255,0,255))*65536+Math.round($t(Fe.g*255,0,255))*256+Math.round($t(Fe.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,s=Fe.g,o=Fe.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Se){ie.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,s=Fe.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Gs);const i=vs(On.h,Gs.h,e),s=vs(On.s,Gs.s,e),o=vs(On.l,Gs.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new bt;bt.NAMES=bl;let Ou=0;class $i extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Ui,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=Mr,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sr&&(i.blendSrc=this.blendSrc),this.blendDst!==Mr&&(i.blendDst=this.blendDst),this.blendEquation!==ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new L,Vs=new mt;let ku=0;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=oa,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),o=le(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oa&&(t.usage=this.usage),t}}class Cl extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rl extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Bu=0;const nn=new pe,jo=new be,Ti=new L,Ke=new li,os=new li,Ie=new L;class Me extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(El(t)?Rl:Cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Xt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Ke.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(Ke.min,os.min),Ke.expandByPoint(Ie),Ie.addVectors(Ke.max,os.max),Ke.expandByPoint(Ie)):(Ke.expandByPoint(os.min),Ke.expandByPoint(os.max))}Ke.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Ie.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Ti.fromBufferAttribute(t,l),Ie.add(Ti)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<i.count;R++)a[R]=new L,c[R]=new L;const l=new L,h=new L,u=new L,d=new mt,f=new mt,m=new mt,_=new L,g=new L;function p(R,M,S){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(o,R),f.fromBufferAttribute(o,M),m.fromBufferAttribute(o,S),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[R].add(_),a[M].add(_),a[S].add(_),c[R].add(g),c[M].add(g),c[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,M=y.length;R<M;++R){const S=y[R],C=S.start,N=S.count;for(let U=C,F=C+N;U<F;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new L,x=new L,w=new L,T=new L;function A(R){w.fromBufferAttribute(s,R),T.copy(w);const M=a[R];v.copy(M),v.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(T,M);const C=x.dot(c[R])<0?-1:1;r.setXYZW(R,v.x,v.y,v.z,C)}for(let R=0,M=y.length;R<M;++R){const S=y[R],C=S.start,N=S.count;for(let U=C,F=C+N;U<F;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new L,o=new L,r=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new pe,$n=new Iu,Ws=new Ps,ac=new L,Xs=new L,qs=new L,Ys=new L,Qo=new L,Ks=new L,cc=new L,Zs=new L;class J extends be{constructor(t=new Me,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ks.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Qo.fromBufferAttribute(u,t),r?Ks.addScaledVector(Qo,h):Ks.addScaledVector(Qo.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(o),$n.copy(t.ray).recast(t.near),!(Ws.containsPoint($n.origin)===!1&&($n.intersectSphere(Ws,ac)===null||$n.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(o).invert(),$n.copy(t.ray).applyMatrix4(rc),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,w=v;x<w;x+=3){const T=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);s=$s(this,p,t,i,l,h,u,T,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);s=$s(this,r,t,i,l,h,u,y,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,w=v;x<w;x+=3){const T=x,A=x+1,R=x+2;s=$s(this,p,t,i,l,h,u,T,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=g,v=g+1,x=g+2;s=$s(this,r,t,i,l,h,u,y,v,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Hu(n,t,e,i,s,o,r,a){let c;if(t.side===Ve?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===Wn,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zs);return l<e.near||l>e.far?null:{distance:l,point:Zs.clone(),object:n}}function $s(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,Xs),n.getVertexPosition(c,qs),n.getVertexPosition(l,Ys);const h=Hu(n,t,e,i,Xs,qs,Ys,cc);if(h){const u=new L;on.getBarycoord(cc,Xs,qs,Ys,u),s&&(h.uv=on.getInterpolatedAttribute(s,a,c,l,u,new mt)),o&&(h.uv1=on.getInterpolatedAttribute(o,a,c,l,u,new mt)),r&&(h.normal=on.getInterpolatedAttribute(r,a,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};on.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class xn extends Me{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,r,o,0),m("z","y","x",1,-1,i,e,-t,r,o,1),m("x","z","y",1,1,t,i,e,s,r,2),m("x","z","y",1,-1,t,i,-e,s,r,3),m("x","y","z",1,-1,t,e,i,s,o,4),m("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(_,g,p,y,v,x,w,T,A,R,M){const S=x/A,C=w/R,N=x/2,U=w/2,F=T/2,z=A+1,D=R+1;let G=0,H=0;const K=new L;for(let et=0;et<D;et++){const ot=et*C-U;for(let _t=0;_t<z;_t++){const Ct=_t*S-N;K[_]=Ct*y,K[g]=ot*v,K[p]=F,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(_t/A),u.push(1-et/R),G+=1}}for(let et=0;et<R;et++)for(let ot=0;ot<A;ot++){const _t=d+ot+z*et,Ct=d+ot+z*(et+1),q=d+(ot+1)+z*(et+1),it=d+(ot+1)+z*et;c.push(_t,Ct,it),c.push(Ct,q,it),H+=6}a.addGroup(f,H,M),f+=H,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=Yi(n[e]);for(const s in i)t[s]=i[s]}return t}function Gu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Pl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Vu={clone:Yi,merge:He};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Il extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new L,lc=new mt,hc=new mt;class $e extends Il{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,lc,hc),e.subVectors(hc,lc)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,wi=1;class qu extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Ei,wi,t,e);s.layers=this.layers,this.add(s);const o=new $e(Ei,wi,t,e);o.layers=this.layers,this.add(o);const r=new $e(Ei,wi,t,e);r.layers=this.layers,this.add(r);const a=new $e(Ei,wi,t,e);a.layers=this.layers,this.add(a);const c=new $e(Ei,wi,t,e);c.layers=this.layers,this.add(c);const l=new $e(Ei,wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ll extends Oe{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yu extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ll(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),o=new yn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Gn});o.uniforms.tEquirect.value=e;const r=new J(s,o),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=mn),new qu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}class he extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new he;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ba{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dl extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oa,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new L;class wo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),o=le(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nl extends $i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ai;const rs=new L,bi=new L,Ci=new L,Ri=new mt,as=new mt,Ul=new pe,Js=new L,cs=new L,js=new L,uc=new mt,er=new mt,dc=new mt;class $u extends be{constructor(t=new Nl){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zu(e,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new wo(i,3,0,!1)),Ai.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=Ai,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Ul.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ci.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;Qs(Js.set(-.5,-.5,0),Ci,r,bi,s,o),Qs(cs.set(.5,-.5,0),Ci,r,bi,s,o),Qs(js.set(.5,.5,0),Ci,r,bi,s,o),uc.set(0,0),er.set(1,0),dc.set(1,1);let a=t.ray.intersectTriangle(Js,cs,js,!1,rs);if(a===null&&(Qs(cs.set(-.5,.5,0),Ci,r,bi,s,o),er.set(0,1),a=t.ray.intersectTriangle(Js,js,cs,!1,rs),a===null))return;const c=t.ray.origin.distanceTo(rs);c<t.near||c>t.far||e.push({distance:c,point:rs.clone(),uv:on.getInterpolation(rs,Js,cs,js,uc,er,dc,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qs(n,t,e,i,s,o){Ri.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(as.x=o*Ri.x-s*Ri.y,as.y=s*Ri.x+o*Ri.y):as.copy(Ri),n.copy(t),n.x+=as.x,n.y+=as.y,n.applyMatrix4(Ul)}class Ju extends Oe{constructor(t=null,e=1,i=1,s,o,r,a,c,l=Je,h=Je,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends Ce{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Pi=new pe,pc=new pe,to=[],mc=new li,ju=new pe,ls=new J,hs=new Ps;class gc extends J{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ju)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Pi),mc.copy(t.boundingBox).applyMatrix4(Pi),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Pi),hs.copy(t.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(i),t.ray.intersectsSphere(hs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Pi),pc.multiplyMatrices(i,Pi),ls.matrixWorld=pc,ls.raycast(t,to);for(let r=0,a=to.length;r<a;r++){const c=to[r];c.instanceId=o,c.object=this,e.push(c)}to.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ju(new Float32Array(s*this.count),s,this.count,Sa,gn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nr=new L,Qu=new L,td=new Xt;class ei{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=nr.subVectors(i,e).cross(Qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(nr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||td.getNormalMatrix(t),s=this.coplanarPoint(nr).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Ps,eo=new L;class Ca{constructor(t=new ei,e=new ei,i=new ei,s=new ei,o=new ei,r=new ei){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],y=s[13],v=s[14],x=s[15];if(i[0].setComponents(c-o,d-l,g-f,x-p).normalize(),i[1].setComponents(c+o,d+l,g+f,x+p).normalize(),i[2].setComponents(c+r,d+h,g+m,x+y).normalize(),i[3].setComponents(c-r,d-h,g-m,x-y).normalize(),i[4].setComponents(c-a,d-u,g-_,x-v).normalize(),e===Rn)i[5].setComponents(c+a,d+u,g+_,x+v).normalize();else if(e===To)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qe extends Oe{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fl extends Oe{constructor(t,e,i,s,o,r,a,c,l,h=Fi){if(h!==Fi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Fi&&(i=ri),i===void 0&&h===Xi&&(i=Wi),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Aa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],d=i[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new mt:new L);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,s=[],o=[],r=[],a=new L,c=new pe;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new L)}o[0]=new L,r[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos($t(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,m))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos($t(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ra extends Sn{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new mt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ed extends Ra{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Pa(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const no=new L,ir=new Pa,sr=new Pa,or=new Pa;class zl extends Sn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(no.subVectors(s[0],s[1]).add(s[0]),l=no);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(no.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=no),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ir.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),sr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),or.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ir.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),sr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),or.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(ir.calc(c),sr.calc(c),or.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _c(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function nd(n,t){const e=1-n;return e*e*t}function id(n,t){return 2*(1-n)*n*t}function sd(n,t){return n*n*t}function xs(n,t,e,i){return nd(n,t)+id(n,e)+sd(n,i)}function od(n,t){const e=1-n;return e*e*e*t}function rd(n,t){const e=1-n;return 3*e*e*n*t}function ad(n,t){return 3*(1-n)*n*n*t}function cd(n,t){return n*n*n*t}function ys(n,t,e,i,s){return od(n,t)+rd(n,e)+ad(n,i)+cd(n,s)}class Ol extends Sn{constructor(t=new mt,e=new mt,i=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new mt){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ys(t,s.x,o.x,r.x,a.x),ys(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ld extends Sn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(ys(t,s.x,o.x,r.x,a.x),ys(t,s.y,o.y,r.y,a.y),ys(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kl extends Sn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends Sn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends Sn{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(xs(t,s.x,o.x,r.x),xs(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends Sn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(xs(t,s.x,o.x,r.x),xs(t,s.y,o.y,r.y),xs(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gl extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(_c(a,c.x,l.x,h.x,u.x),_c(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var ra=Object.freeze({__proto__:null,ArcCurve:ed,CatmullRomCurve3:zl,CubicBezierCurve:Ol,CubicBezierCurve3:ld,EllipseCurve:Ra,LineCurve:kl,LineCurve3:hd,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:Hl,SplineCurve:Gl});class ud extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ra[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ra[s.type]().fromJSON(s))}return this}}class aa extends ud{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new kl(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Bl(this.currentPoint.clone(),new mt(t,e),new mt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Ol(this.currentPoint.clone(),new mt(t,e),new mt(i,s),new mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Gl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Ra(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ia extends Me{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new L,d=new mt,f=new L,m=new L,_=new L;let g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let y=0;y<=e;y++){const v=i+y*h*s,x=Math.sin(v),w=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*w,r.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);const A=c[3*T+0]*x,R=c[3*T+1],M=c[3*T+0]*w;l.push(A,R,M)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const x=v+y*t.length,w=x,T=x+t.length,A=x+t.length+1,R=x+1;o.push(w,T,R),o.push(A,R,T)}this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.points,t.segments,t.phiStart,t.phiLength)}}class Ae extends Ia{constructor(t=1,e=1,i=4,s=8){const o=new aa;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Ae(t.radius,t.length,t.capSegments,t.radialSegments)}}class La extends Me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new L,h=new mt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class se extends Me{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;y(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function y(){const x=new L,w=new L;let T=0;const A=(e-t)/i;for(let R=0;R<=o;R++){const M=[],S=R/o,C=S*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,F=U*c+a,z=Math.sin(F),D=Math.cos(F);w.x=C*z,w.y=-S*i+g,w.z=C*D,u.push(w.x,w.y,w.z),x.set(z,A,D).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-S),M.push(m++)}_.push(M)}for(let R=0;R<s;R++)for(let M=0;M<o;M++){const S=_[M][R],C=_[M+1][R],N=_[M+1][R+1],U=_[M][R+1];(t>0||M!==0)&&(h.push(S,C,U),T+=3),(e>0||M!==o-1)&&(h.push(C,N,U),T+=3)}l.addGroup(p,T,0),p+=T}function v(x){const w=m,T=new mt,A=new L;let R=0;const M=x===!0?t:e,S=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const C=m;for(let N=0;N<=s;N++){const F=N/s*c+a,z=Math.cos(F),D=Math.sin(F);A.x=M*D,A.y=g*S,A.z=M*z,u.push(A.x,A.y,A.z),d.push(0,S,0),T.x=z*.5+.5,T.y=D*.5*S+.5,f.push(T.x,T.y),m++}for(let N=0;N<s;N++){const U=w+N,F=C+N;x===!0?h.push(F,F+1,U):h.push(F+1,F,U),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Da extends se{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Da(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Na extends Me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),l(i),h(),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(o.slice(),3)),this.setAttribute("uv",new te(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new L,x=new L,w=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],x),f(e[T+2],w),c(v,x,w,y)}function c(y,v,x,w){const T=w+1,A=[];for(let R=0;R<=T;R++){A[R]=[];const M=y.clone().lerp(x,R/T),S=v.clone().lerp(x,R/T),C=T-R;for(let N=0;N<=C;N++)N===0&&R===T?A[R][N]=M:A[R][N]=M.clone().lerp(S,N/C)}for(let R=0;R<T;R++)for(let M=0;M<2*(T-R)-1;M++){const S=Math.floor(M/2);M%2===0?(d(A[R][S+1]),d(A[R+1][S]),d(A[R][S])):(d(A[R][S+1]),d(A[R+1][S+1]),d(A[R+1][S]))}}function l(y){const v=new L;for(let x=0;x<o.length;x+=3)v.x=o[x+0],v.y=o[x+1],v.z=o[x+2],v.normalize().multiplyScalar(y),o[x+0]=v.x,o[x+1]=v.y,o[x+2]=v.z}function h(){const y=new L;for(let v=0;v<o.length;v+=3){y.x=o[v+0],y.y=o[v+1],y.z=o[v+2];const x=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;r.push(x,1-w)}m(),u()}function u(){for(let y=0;y<r.length;y+=6){const v=r[y+0],x=r[y+2],w=r[y+4],T=Math.max(v,x,w),A=Math.min(v,x,w);T>.9&&A<.1&&(v<.2&&(r[y+0]+=1),x<.2&&(r[y+2]+=1),w<.2&&(r[y+4]+=1))}}function d(y){o.push(y.x,y.y,y.z)}function f(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function m(){const y=new L,v=new L,x=new L,w=new L,T=new mt,A=new mt,R=new mt;for(let M=0,S=0;M<o.length;M+=9,S+=6){y.set(o[M+0],o[M+1],o[M+2]),v.set(o[M+3],o[M+4],o[M+5]),x.set(o[M+6],o[M+7],o[M+8]),T.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),R.set(r[S+4],r[S+5]),w.copy(y).add(v).add(x).divideScalar(3);const C=g(w);_(T,S+0,y,C),_(A,S+2,v,C),_(R,S+4,x,C)}}function _(y,v,x,w){w<0&&y.x===1&&(r[v]=y.x-1),x.x===0&&x.z===0&&(r[v]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.vertices,t.indices,t.radius,t.details)}}class Vl extends aa{constructor(t){super(t),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new aa().fromJSON(s))}return this}}class dd{static triangulate(t,e,i=2){const s=e&&e.length,o=s?e[0]*i:t.length;let r=Wl(t,0,o,i,!0);const a=[];if(!r||r.next===r.prev)return a;let c,l,h,u,d,f,m;if(s&&(r=_d(t,e,r,i)),t.length>80*i){c=h=t[0],l=u=t[1];for(let _=i;_<o;_+=i)d=t[_],f=t[_+1],d<c&&(c=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f);m=Math.max(h-c,u-l),m=m!==0?32767/m:0}return Es(r,a,i,c,l,m,0),a}}function Wl(n,t,e,i,s){let o,r;if(s===Cd(n,t,e,i)>0)for(o=t;o<e;o+=i)r=vc(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=vc(o,n[o],n[o+1],r);return r&&Io(r,r.next)&&(As(r),r=r.next),r}function ci(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Io(e,e.next)||ve(e.prev,e,e.next)===0)){if(As(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Es(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Md(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?pd(n,i,s,o):fd(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),As(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=md(ci(n),t,e),Es(n,t,e,i,s,o,2)):r===2&&gd(n,t,e,i,s,o):Es(ci(n),t,e,i,s,o,1);break}}}function fd(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Li(s,a,o,c,r,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pd(n,t,e,i){const s=n.prev,o=n,r=n.next;if(ve(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=ca(f,m,t,e,i),y=ca(_,g,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&Li(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&Li(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&Li(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&Li(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function md(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Io(s,o)&&Xl(s,i,i.next,o)&&ws(s,o)&&ws(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),As(i),As(i.next),i=n=o),i=i.next}while(i!==n);return ci(i)}function gd(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&wd(r,a)){let c=ql(r,a);r=ci(r,r.next),c=ci(c,c.next),Es(r,t,e,i,s,o,0),Es(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function _d(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Wl(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Ed(l));for(s.sort(vd),o=0;o<s.length;o++)e=xd(s[o],e);return e}function vd(n,t){return n.x-t.x}function xd(n,t){const e=yd(n,t);if(!e)return t;const i=ql(e,n);return ci(i,i.next),ci(e,e.next)}function yd(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Li(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),ws(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Sd(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Sd(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function Md(n,t,e,i){let s=n;do s.z===0&&(s.z=ca(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Td(s)}function Td(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function ca(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ed(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Li(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function wd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ad(n,t)&&(ws(n,t)&&ws(t,n)&&bd(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||Io(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Io(n,t){return n.x===t.x&&n.y===t.y}function Xl(n,t,e,i){const s=so(ve(n,t,e)),o=so(ve(n,t,i)),r=so(ve(e,i,n)),a=so(ve(e,i,t));return!!(s!==o&&r!==a||s===0&&io(n,e,t)||o===0&&io(n,i,t)||r===0&&io(e,n,i)||a===0&&io(e,t,i))}function io(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function so(n){return n>0?1:n<0?-1:0}function Ad(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Xl(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ws(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function bd(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ql(n,t){const e=new la(n.i,n.x,n.y),i=new la(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function vc(n,t,e,i){const s=new la(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function As(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function la(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cd(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class Ss{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return Ss.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];xc(t),yc(i,t);let r=t.length;e.forEach(xc);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,yc(i,e[c]);const a=dd.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function xc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function yc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ua extends Na{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ua(t.radius,t.detail)}}class je extends Me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const y=p*d-r;for(let v=0;v<l;v++){const x=v*u-o;m.push(x,-y,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const v=y+l*p,x=y+l*(p+1),w=y+1+l*(p+1),T=y+1+l*p;f.push(v,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ao extends Me{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new L,m=new mt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const p=o+g/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const g=_*(i+1);for(let p=0;p<i;p++){const y=p+g,v=y,x=y+i+1,w=y+i+2,T=y+1;a.push(v,x,T),a.push(x,w,T)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fa extends Me{constructor(t=new Vl([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(r,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Ss.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const y=m[g];Ss.isClockWise(y)===!0&&(m[g]=y.reverse())}const _=Ss.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){const y=f[g];s.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let g=0,p=_.length;g<p;g++){const y=_[g],v=y[0]+u,x=y[1]+u,w=y[2]+u;i.push(v,x,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rd(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];i.push(r)}return new Fa(i,t.curveSegments)}}function Rd(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class fe extends Me{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const y=[],v=p/i;let x=0;p===0&&r===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const T=w/e;u.x=-t*Math.cos(s+T*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(s+T*o)*Math.sin(r+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+x,1-v),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const v=h[p][y+1],x=h[p][y],w=h[p+1][y],T=h[p+1][y+1];(p!==0||r>0)&&f.push(v,x,T),(p!==i-1||c<Math.PI)&&f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bs extends Me{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const _=m/s*o,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;r.push(_,g,y),r.push(g,p,y)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class za extends Me{constructor(t=new Hl(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new L,c=new L,l=new mt;let h=new L;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function _(){for(let v=0;v<e;v++)g(v);g(o===!1?e:0),y(),p()}function g(v){h=t.getPointAt(v/e,h);const x=r.normals[v],w=r.binormals[v];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,R=Math.sin(A),M=-Math.cos(A);c.x=M*x.x+R*w.x,c.y=M*x.y+R*w.y,c.z=M*x.z+R*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const w=(s+1)*(v-1)+(x-1),T=(s+1)*v+(x-1),A=(s+1)*v+x,R=(s+1)*(v-1)+x;m.push(w,T,R),m.push(T,A,R)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)l.x=v/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new za(new ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jt extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pd extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Id extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kl extends Yl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rr=new pe,Sc=new L,Mc=new L;class Ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zl extends Il{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dd extends Ld{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Di extends Yl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Dd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nd extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Tc(n,t,e,i){const s=Ud(i);switch(e){case gl:return n*t;case vl:return n*t;case xl:return n*t*2;case Sa:return n*t/s.components*s.byteLength;case Ma:return n*t/s.components*s.byteLength;case yl:return n*t*2/s.components*s.byteLength;case Ta:return n*t*2/s.components*s.byteLength;case _l:return n*t*3/s.components*s.byteLength;case fn:return n*t*4/s.components*s.byteLength;case Ea:return n*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _o:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nr:case Fr:return Math.max(n,16)*Math.max(t,8)/4;case Dr:case Ur:return Math.max(n,8)*Math.max(t,8)/2;case zr:case Or:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jr:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xo:case ta:case ea:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sl:case na:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ia:case sa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ud(n){switch(n){case Ln:case fl:return{byteLength:1,components:1};case Ms:case pl:case Rs:return{byteLength:2,components:1};case xa:case ya:return{byteLength:2,components:4};case ri:case va:case gn:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $l(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Fd(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,lf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,zf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xp=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,qp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,jp=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qp=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,tm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,em=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,nm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,im=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,sm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,om=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,rm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,am=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,cm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lm=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,hm=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,um=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,dm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,gm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qt={alphahash_fragment:zd,alphahash_pars_fragment:Od,alphamap_fragment:kd,alphamap_pars_fragment:Bd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:Kd,bsdfs:Zd,iridescence_fragment:$d,bumpmap_pars_fragment:Jd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:of,color_vertex:rf,common:af,cube_uv_reflection_fragment:cf,defaultnormal_vertex:lf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:vf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Sf,fog_pars_vertex:Mf,fog_fragment:Tf,fog_pars_fragment:Ef,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Af,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:If,lights_toon_pars_fragment:Lf,lights_phong_fragment:Df,lights_phong_pars_fragment:Nf,lights_physical_fragment:Uf,lights_physical_pars_fragment:Ff,lights_fragment_begin:zf,lights_fragment_maps:Of,lights_fragment_end:kf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Vf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:$f,morphcolor_vertex:Jf,morphnormal_vertex:jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:op,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:lp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:yp,shadowmap_vertex:Sp,shadowmask_pars_fragment:Mp,skinbase_vertex:Tp,skinning_pars_vertex:Ep,skinning_vertex:wp,skinnormal_vertex:Ap,specularmap_fragment:bp,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Pp,transmission_fragment:Ip,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Np,uv_vertex:Up,worldpos_vertex:Fp,background_vert:zp,background_frag:Op,backgroundCube_vert:kp,backgroundCube_frag:Bp,cube_vert:Hp,cube_frag:Gp,depth_vert:Vp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:Yp,equirect_frag:Kp,linedashed_vert:Zp,linedashed_frag:$p,meshbasic_vert:Jp,meshbasic_frag:jp,meshlambert_vert:Qp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:om,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:cm,meshtoon_vert:lm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},pt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},pn={basic:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new bt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:He([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:He([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:He([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new bt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:He([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:He([pt.points,pt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:He([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:He([pt.common,pt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:He([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:He([pt.sprite,pt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:He([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:He([pt.lights,pt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};pn.physical={uniforms:He([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const oo={r:0,b:0,g:0},jn=new vn,_m=new pe;function vm(n,t,e,i,s,o,r){const a=new bt(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const w=m(v);w===null?p(a,c):w&&w.isColor&&(p(w,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,x){const w=m(x);w&&(w.isCubeTexture||w.mapping===Po)?(h===void 0&&(h=new J(new xn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Yi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(x.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(jn)),h.material.toneMapped=ie.getTransfer(w.colorSpace)!==de,(u!==w||d!==w.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new J(new je(2,2),new yn({name:"BackgroundMaterial",uniforms:Yi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ie.getTransfer(w.colorSpace)!==de,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(oo,Pl(n)),i.buffers.color.setClear(oo.r,oo.g,oo.b,x,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:g,dispose:y}}function xm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function a(S,C,N,U,F){let z=!1;const D=u(U,N,C);o!==D&&(o=D,l(o.object)),z=f(S,U,N,F),z&&m(S,U,N,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(S,C,N,U),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,C,N){const U=N.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let z=F[C.id];z===void 0&&(z={},F[C.id]=z);let D=z[U];return D===void 0&&(D=d(c()),z[U]=D),D}function d(S){const C=[],N=[],U=[];for(let F=0;F<e;F++)C[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,C,N,U){const F=o.attributes,z=C.attributes;let D=0;const G=N.getAttributes();for(const H in G)if(G[H].location>=0){const et=F[H];let ot=z[H];if(ot===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;D++}return o.attributesNum!==D||o.index!==U}function m(S,C,N,U){const F={},z=C.attributes;let D=0;const G=N.getAttributes();for(const H in G)if(G[H].location>=0){let et=z[H];et===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(et=S.instanceColor));const ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),F[H]=ot,D++}o.attributes=F,o.attributesNum=D,o.index=U}function _(){const S=o.newAttributes;for(let C=0,N=S.length;C<N;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){const N=o.newAttributes,U=o.enabledAttributes,F=o.attributeDivisors;N[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),F[S]!==C&&(n.vertexAttribDivisor(S,C),F[S]=C)}function y(){const S=o.newAttributes,C=o.enabledAttributes;for(let N=0,U=C.length;N<U;N++)C[N]!==S[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function v(S,C,N,U,F,z,D){D===!0?n.vertexAttribIPointer(S,C,N,F,z):n.vertexAttribPointer(S,C,N,U,F,z)}function x(S,C,N,U){_();const F=U.attributes,z=N.getAttributes(),D=C.defaultAttributeValues;for(const G in z){const H=z[G];if(H.location>=0){let K=F[G];if(K===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const et=K.normalized,ot=K.itemSize,_t=t.get(K);if(_t===void 0)continue;const Ct=_t.buffer,q=_t.type,it=_t.bytesPerElement,ht=q===n.INT||q===n.UNSIGNED_INT||K.gpuType===va;if(K.isInterleavedBufferAttribute){const st=K.data,At=st.stride,Vt=K.offset;if(st.isInstancedInterleavedBuffer){for(let vt=0;vt<H.locationSize;vt++)p(H.location+vt,st.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let vt=0;vt<H.locationSize;vt++)g(H.location+vt);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let vt=0;vt<H.locationSize;vt++)v(H.location+vt,ot/H.locationSize,q,et,At*it,(Vt+ot/H.locationSize*vt)*it,ht)}else{if(K.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,K.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let st=0;st<H.locationSize;st++)g(H.location+st);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let st=0;st<H.locationSize;st++)v(H.location+st,ot/H.locationSize,q,et,ot*it,ot/H.locationSize*st*it,ht)}}else if(D!==void 0){const et=D[G];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(H.location,et);break;case 3:n.vertexAttrib3fv(H.location,et);break;case 4:n.vertexAttrib4fv(H.location,et);break;default:n.vertexAttrib1fv(H.location,et)}}}}y()}function w(){R();for(const S in i){const C=i[S];for(const N in C){const U=C[N];for(const F in U)h(U[F].object),delete U[F];delete C[N]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const N in C){const U=C[N];for(const F in U)h(U[F].object),delete U[F];delete C[N]}delete i[S.id]}function A(S){for(const C in i){const N=i[C];if(N[S.id]===void 0)continue;const U=N[S.id];for(const F in U)h(U[F].object),delete U[F];delete N[S.id]}}function R(){M(),r=!0,o!==s&&(o=s,l(o.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function ym(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sm(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gn&&!R)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function Mm(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new ei,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||o&&!g)o?h(null):l();else{const y=o?0:i,v=y*4;let x=p.clippingState||null;c.value=x,x=h(m,d,v,f);for(let w=0;w!==v;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)r.copy(u[v]).applyMatrix4(y,a),r.normal.toArray(g,x),g[x+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Tm(n){let t=new WeakMap;function e(r,a){return a===Pr?r.mapping=Gi:a===Ir&&(r.mapping=Vi),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Pr||a===Ir)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Yu(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Ni=4,Ec=[.125,.215,.35,.446,.526,.582],si=20,ar=new Zl,wc=new bt;let cr=null,lr=0,hr=0,ur=!1;const ni=(1+Math.sqrt(5))/2,Ii=1/ni,Ac=[new L(-ni,Ii,0),new L(ni,Ii,0),new L(-Ii,0,ni),new L(Ii,0,ni),new L(0,ni,-Ii),new L(0,ni,Ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Em=new L;class bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,o={}){const{size:r=256,position:a=Em}=o;cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cr,lr,hr),this._renderer.xr.enabled=ur,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Rs,format:fn,colorSpace:qi,depthBuffer:!1},s=Cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(o)),this._blurMaterial=Am(o,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,i,s,o){const c=new $e(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wc),u.toneMapping=Vn,u.autoClear=!1;const m=new Ge({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new J(new xn,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(wc),g=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+h[y],o.y,o.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+h[y],o.z)):(c.up.set(0,l[y],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+h[y]));const x=this._cubeSize;ro(s,v*x,y>2?x:0,x,x),u.setRenderTarget(s),g&&u.render(_,c),u.render(t,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Gi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new J(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ro(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,ar)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ac[(s-o-1)%Ac.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new J(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*si-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):si;g>si&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${si}`);const p=[];let y=0;for(let A=0;A<si;++A){const R=A/_,M=Math.exp(-R*R/2);p.push(M),A===0?y+=M:A<g&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-i;const x=this._sizeLods[s],w=3*x*(s>v-Ni?s-v+Ni:0),T=4*(this._cubeSize-x);ro(e,w,T,3*x,2*x),c.setRenderTarget(e),c.render(u,ar)}}function wm(n){const t=[],e=[],i=[];let s=n;const o=n-Ni+1+Ec.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-Ni?c=Ec[r-n+Ni-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),v=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,R=T>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(M,_*m*T),v.set(d,g*m*T);const S=[T,T,T,T,T,T];x.set(S,p*m*T)}const w=new Me;w.setAttribute("position",new Ce(y,_)),w.setAttribute("uv",new Ce(v,g)),w.setAttribute("faceIndex",new Ce(x,p)),t.push(w),s>Ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cc(n,t,e){const i=new ai(n,t,e);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Am(n,t,e){const i=new Float32Array(si),s=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rc(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pc(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function bm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pr||c===Ir,h=c===Gi||c===Vi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new bc(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new bc(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Cm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ti("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Rm(n,t,e,i){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const w=y[v+0],T=y[v+1],A=y[v+2];d.push(w,T,T,A,A,w)}}else if(m!==void 0){const y=m.array;_=m.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const w=v+0,T=v+1,A=v+2;d.push(w,T,T,A,A,w)}}else return;const g=new(El(d)?Rl:Cl)(d,1);g.version=_;const p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pm(n,t,e){let i;function s(d){i=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,o,d*r),e.update(f,i,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,o,d*r,m),e.update(f,i,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,o,d,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*_[y];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Im(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Lm(n,t,e){const i=new WeakMap,s=new ye;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let w=a.attributes.position.count*x,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*T*4*u),R=new wl(A,w,T,u);R.type=gn,R.needsUpdate=!0;const M=x*4;for(let C=0;C<u;C++){const N=p[C],U=y[C],F=v[C],z=w*T*4*C;for(let D=0;D<N.count;D++){const G=D*M;m===!0&&(s.fromBufferAttribute(N,D),A[z+G+0]=s.x,A[z+G+1]=s.y,A[z+G+2]=s.z,A[z+G+3]=0),_===!0&&(s.fromBufferAttribute(U,D),A[z+G+4]=s.x,A[z+G+5]=s.y,A[z+G+6]=s.z,A[z+G+7]=0),g===!0&&(s.fromBufferAttribute(F,D),A[z+G+8]=s.x,A[z+G+9]=s.y,A[z+G+10]=s.z,A[z+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new mt(w,T)},i.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function Dm(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Jl=new Oe,Ic=new Fl(1,1),jl=new wl,Ql=new Ru,th=new Ll,Lc=[],Dc=[],Nc=new Float32Array(16),Uc=new Float32Array(9),Fc=new Float32Array(4);function Ji(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Lc[s];if(o===void 0&&(o=new Float32Array(s),Lc[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Lo(n,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Nm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function Fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function Om(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Fc.set(i),n.uniformMatrix2fv(this.addr,!1,Fc),Pe(e,i)}}function km(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Uc.set(i),n.uniformMatrix3fv(this.addr,!1,Uc),Pe(e,i)}}function Bm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),Pe(e,i)}}function Hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function Vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function Wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function Xm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function Ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function Km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function Zm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Ic.compareFunction=Tl,o=Ic):o=Jl,e.setTexture2D(t||o,s)}function $m(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ql,s)}function Jm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||th,s)}function jm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jl,s)}function Qm(n){switch(n){case 5126:return Nm;case 35664:return Um;case 35665:return Fm;case 35666:return zm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return jm}}function t0(n,t){n.uniform1fv(this.addr,t)}function e0(n,t){const e=Ji(t,this.size,2);n.uniform2fv(this.addr,e)}function n0(n,t){const e=Ji(t,this.size,3);n.uniform3fv(this.addr,e)}function i0(n,t){const e=Ji(t,this.size,4);n.uniform4fv(this.addr,e)}function s0(n,t){const e=Ji(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function o0(n,t){const e=Ji(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function r0(n,t){const e=Ji(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function a0(n,t){n.uniform1iv(this.addr,t)}function c0(n,t){n.uniform2iv(this.addr,t)}function l0(n,t){n.uniform3iv(this.addr,t)}function h0(n,t){n.uniform4iv(this.addr,t)}function u0(n,t){n.uniform1uiv(this.addr,t)}function d0(n,t){n.uniform2uiv(this.addr,t)}function f0(n,t){n.uniform3uiv(this.addr,t)}function p0(n,t){n.uniform4uiv(this.addr,t)}function m0(n,t,e){const i=this.cache,s=t.length,o=Lo(e,s);Re(i,o)||(n.uniform1iv(this.addr,o),Pe(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Jl,o[r])}function g0(n,t,e){const i=this.cache,s=t.length,o=Lo(e,s);Re(i,o)||(n.uniform1iv(this.addr,o),Pe(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ql,o[r])}function _0(n,t,e){const i=this.cache,s=t.length,o=Lo(e,s);Re(i,o)||(n.uniform1iv(this.addr,o),Pe(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||th,o[r])}function v0(n,t,e){const i=this.cache,s=t.length,o=Lo(e,s);Re(i,o)||(n.uniform1iv(this.addr,o),Pe(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||jl,o[r])}function x0(n){switch(n){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return o0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return c0;case 35668:case 35672:return l0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}class y0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}}class S0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x0(e.type)}}class M0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function zc(n,t){n.seq.push(t),n.map[t.id]=t}function T0(n,t,e){const i=n.name,s=i.length;for(dr.lastIndex=0;;){const o=dr.exec(i),r=dr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){zc(e,l===void 0?new y0(a,n,t):new S0(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new M0(a),zc(e,u)),e=u}}}class yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);T0(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Oc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const E0=37297;let w0=0;function A0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const kc=new Xt;function b0(n){ie._getMatrix(kc,ie.workingColorSpace,n);const t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Mo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+A0(n.getShaderSource(t),r)}else return s}function C0(n,t){const e=b0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function R0(n,t){let e;switch(t){case Hh:e="Linear";break;case Gh:e="Reinhard";break;case Vh:e="Cineon";break;case _a:e="ACESFilmic";break;case Xh:e="AgX";break;case qh:e="Neutral";break;case Wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ao=new L;function P0(){ie.getLuminanceCoefficients(ao);const n=ao.x.toFixed(4),t=ao.y.toFixed(4),e=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function L0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function D0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function ms(n){return n!==""}function Hc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(n){return n.replace(N0,F0)}const U0=new Map;function F0(n,t){let e=qt[t];if(e===void 0){const i=U0.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(z0,O0)}function O0(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Wc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ll?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function B0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function G0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function V0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function W0(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=k0(e),l=B0(e),h=H0(e),u=G0(e),d=V0(e),f=I0(e),m=L0(o),_=s.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ms).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(g=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?R0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,C0("linearToOutputTexel",e.outputColorSpace),P0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),r=ha(r),r=Hc(r,e),r=Gc(r,e),a=ha(a),a=Hc(a,e),a=Gc(a,e),r=Vc(r),a=Vc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+g+r,x=y+p+a,w=Oc(s,s.VERTEX_SHADER,v),T=Oc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(w).trim(),F=s.getShaderInfoLog(T).trim();let z=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,T);else{const G=Bc(s,w,"vertex"),H=Bc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+G+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(D=!1);D&&(C.diagnostics={runnable:z,programLog:N,vertexShader:{log:U,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(w),s.deleteShader(T),R=new yo(s,_),M=D0(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,E0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let X0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Y0(t),e.set(t,i)),i}}class Y0{constructor(t){this.id=X0++,this.code=t,this.usedTimes=0}}function K0(n,t,e,i,s,o,r){const a=new Al,c=new q0,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,S,C,N,U){const F=N.fog,z=U.geometry,D=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||D),H=G&&G.mapping===Po?G.image.height:null,K=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=et!==void 0?et.length:0;let _t=0;z.morphAttributes.position!==void 0&&(_t=1),z.morphAttributes.normal!==void 0&&(_t=2),z.morphAttributes.color!==void 0&&(_t=3);let Ct,q,it,ht;if(K){const Qt=pn[K];Ct=Qt.vertexShader,q=Qt.fragmentShader}else Ct=M.vertexShader,q=M.fragmentShader,c.update(M),it=c.getVertexShaderID(M),ht=c.getFragmentShaderID(M);const st=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,vt=U.isBatchedMesh===!0,Ot=!!M.map,Pt=!!M.matcap,kt=!!G,I=!!M.aoMap,_e=!!M.lightMap,Bt=!!M.bumpMap,Ht=!!M.normalMap,Mt=!!M.displacementMap,Kt=!!M.emissiveMap,yt=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,V=M.clearcoat>0,$=M.dispersion>0,nt=M.iridescence>0,Z=M.sheen>0,wt=M.transmission>0,ft=E&&!!M.anisotropyMap,xt=V&&!!M.clearcoatMap,Zt=V&&!!M.clearcoatNormalMap,ct=V&&!!M.clearcoatRoughnessMap,St=nt&&!!M.iridescenceMap,Dt=nt&&!!M.iridescenceThicknessMap,zt=Z&&!!M.sheenColorMap,ut=Z&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Ut=!!M.specularColorMap,jt=!!M.specularIntensityMap,O=wt&&!!M.transmissionMap,lt=wt&&!!M.thicknessMap,Y=!!M.gradientMap,tt=!!M.alphaMap,dt=M.alphaTest>0,at=!!M.alphaHash,It=!!M.extensions;let ue=Vn;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=n.toneMapping);const me={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Ct,fragmentShader:q,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:vt,batchingColor:vt&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qi,alphaToCoverage:!!M.alphaToCoverage,map:Ot,matcap:Pt,envMap:kt,envMapMode:kt&&G.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:_e,bumpMap:Bt,normalMap:Ht,displacementMap:d&&Mt,emissiveMap:Kt,normalMapObjectSpace:Ht&&M.normalMapType===$h,normalMapTangentSpace:Ht&&M.normalMapType===Ml,metalnessMap:yt,roughnessMap:P,anisotropy:E,anisotropyMap:ft,clearcoat:V,clearcoatMap:xt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ct,dispersion:$,iridescence:nt,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:ut,specularMap:Rt,specularColorMap:Ut,specularIntensityMap:jt,transmission:wt,transmissionMap:O,thicknessMap:lt,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Ui&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:dt,alphaHash:at,combine:M.combine,mapUv:Ot&&_(M.map.channel),aoMapUv:I&&_(M.aoMap.channel),lightMapUv:_e&&_(M.lightMap.channel),bumpMapUv:Bt&&_(M.bumpMap.channel),normalMapUv:Ht&&_(M.normalMap.channel),displacementMapUv:Mt&&_(M.displacementMap.channel),emissiveMapUv:Kt&&_(M.emissiveMap.channel),metalnessMapUv:yt&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:ft&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(M.sheenRoughnessMap.channel),specularMapUv:Rt&&_(M.specularMap.channel),specularColorMapUv:Ut&&_(M.specularColorMap.channel),specularIntensityMapUv:jt&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:lt&&_(M.thicknessMap.channel),alphaMapUv:tt&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ht||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(Ot||tt),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:_t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:Kt&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ne,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:It&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&M.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=m[M.type];let C;if(S){const N=pn[S];C=Vu.clone(N.uniforms)}else C=M.uniforms;return C}function w(M,S){let C;for(let N=0,U=h.length;N<U;N++){const F=h[N];if(F.cacheKey===S){C=F,++C.usedTimes;break}}return C===void 0&&(C=new W0(n,S,M,o),h.push(C)),C}function T(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:R}}function Z0(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function $0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qc(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||$0),i.length>1&&i.sort(d||Xc),s.length>1&&s.sort(d||Xc)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function J0(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new qc,n.set(i,[r])):s>=o.length?(r=new qc,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function j0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new bt};break;case"SpotLight":e={position:new L,direction:new L,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Q0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tg=0;function eg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ng(n){const t=new j0,e=Q0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,o=new pe,r=new pe;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,v=0,x=0,w=0,T=0,A=0;l.sort(eg);for(let M=0,S=l.length;M<S;M++){const C=l[M],N=C.color,U=C.intensity,F=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(C.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(C.sh.coefficients[D],U);A++}else if(C.isDirectionalLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,H=e.get(C);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=C.shadow.matrix,y++}i.directional[f]=D,f++}else if(C.isSpotLight){const D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(N).multiplyScalar(U),D.distance=F,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,i.spot[_]=D;const G=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,G.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[_]=G.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=z,x++}_++}else if(C.isRectAreaLight){const D=t.get(C);D.color.copy(N).multiplyScalar(U),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=D,g++}else if(C.isPointLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){const G=C.shadow,H=e.get(C);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=C.shadow.matrix,v++}i.point[m]=D,m++}else if(C.isHemisphereLight){const D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(U),D.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=D,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=A,i.version=tg++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const v=l[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(v.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),r.identity(),o.copy(v.matrixWorld),o.premultiply(g),r.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),m++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Yc(n){const t=new ng(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function ig(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Yc(n),t.set(s,[a])):o>=r.length?(a=new Yc(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function rg(n,t,e){let i=new Ca;const s=new mt,o=new mt,r=new ye,a=new Pd({depthPacking:Zh}),c=new Id,l={},h=e.maxTextureSize,u={[Wn]:Ve,[Ve]:Wn,[Ne]:Ne},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:sg,fragmentShader:og}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Me;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let p=this.type;this.render=function(T,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Gn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==bn&&this.type===bn,F=p===bn&&this.type!==bn;for(let z=0,D=T.length;z<D;z++){const G=T[z],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const K=H.getFrameExtents();if(s.multiply(K),o.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/K.x),s.x=o.x*K.x,H.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/K.y),s.y=o.y*K.y,H.mapSize.y=o.y)),H.map===null||U===!0||F===!0){const ot=this.type!==bn?{minFilter:Je,magFilter:Je}:{};H.map!==null&&H.map.dispose(),H.map=new ai(s.x,s.y,ot),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const et=H.getViewportCount();for(let ot=0;ot<et;ot++){const _t=H.getViewport(ot);r.set(o.x*_t.x,o.y*_t.y,o.x*_t.z,o.y*_t.w),N.viewport(r),H.updateMatrices(G,ot),i=H.getFrustum(),x(A,R,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&y(H,R),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,C)};function y(T,A){const R=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,R,f,_,null)}function v(T,A,R,M){let S=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=R.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=S.uuid,U=A.uuid;let F=l[N];F===void 0&&(F={},l[N]=F);let z=F[U];z===void 0&&(z=S.clone(),F[U]=z,A.addEventListener("dispose",w)),S=z}if(S.visible=A.visible,S.wireframe=A.wireframe,M===bn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=R}return S}function x(T,A,R,M,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===bn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const U=t.update(T),F=T.material;if(Array.isArray(F)){const z=U.groups;for(let D=0,G=z.length;D<G;D++){const H=z[D],K=F[H.materialIndex];if(K&&K.visible){const et=v(T,K,M,S);T.onBeforeShadow(n,T,A,R,U,et,H),n.renderBufferDirect(R,null,U,et,T,H),T.onAfterShadow(n,T,A,R,U,et,H)}}}else if(F.visible){const z=v(T,F,M,S);T.onBeforeShadow(n,T,A,R,U,z,null),n.renderBufferDirect(R,null,U,z,T,null),T.onAfterShadow(n,T,A,R,U,z,null)}}const N=T.children;for(let U=0,F=N.length;U<F;U++)x(N[U],A,R,M,S)}function w(T){T.target.removeEventListener("dispose",w);for(const R in l){const M=l[R],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const ag={[Tr]:Er,[wr]:Cr,[Ar]:Rr,[Hi]:br,[Er]:Tr,[Cr]:wr,[Rr]:Ar,[br]:Hi};function cg(n,t){function e(){let O=!1;const lt=new ye;let Y=null;const tt=new ye(0,0,0,0);return{setMask:function(dt){Y!==dt&&!O&&(n.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){O=dt},setClear:function(dt,at,It,ue,me){me===!0&&(dt*=ue,at*=ue,It*=ue),lt.set(dt,at,It,ue),tt.equals(lt)===!1&&(n.clearColor(dt,at,It,ue),tt.copy(lt))},reset:function(){O=!1,Y=null,tt.set(-1,0,0,0)}}}function i(){let O=!1,lt=!1,Y=null,tt=null,dt=null;return{setReversed:function(at){if(lt!==at){const It=t.get("EXT_clip_control");lt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ue=dt;dt=null,this.setClear(ue)}lt=at},getReversed:function(){return lt},setTest:function(at){at?st(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(at){Y!==at&&!O&&(n.depthMask(at),Y=at)},setFunc:function(at){if(lt&&(at=ag[at]),tt!==at){switch(at){case Tr:n.depthFunc(n.NEVER);break;case Er:n.depthFunc(n.ALWAYS);break;case wr:n.depthFunc(n.LESS);break;case Hi:n.depthFunc(n.LEQUAL);break;case Ar:n.depthFunc(n.EQUAL);break;case br:n.depthFunc(n.GEQUAL);break;case Cr:n.depthFunc(n.GREATER);break;case Rr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=at}},setLocked:function(at){O=at},setClear:function(at){dt!==at&&(lt&&(at=1-at),n.clearDepth(at),dt=at)},reset:function(){O=!1,Y=null,tt=null,dt=null,lt=!1}}}function s(){let O=!1,lt=null,Y=null,tt=null,dt=null,at=null,It=null,ue=null,me=null;return{setTest:function(Qt){O||(Qt?st(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!O&&(n.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,We,we){(Y!==Qt||tt!==We||dt!==we)&&(n.stencilFunc(Qt,We,we),Y=Qt,tt=We,dt=we)},setOp:function(Qt,We,we){(at!==Qt||It!==We||ue!==we)&&(n.stencilOp(Qt,We,we),at=Qt,It=We,ue=we)},setLocked:function(Qt){O=Qt},setClear:function(Qt){me!==Qt&&(n.clearStencil(Qt),me=Qt)},reset:function(){O=!1,lt=null,Y=null,tt=null,dt=null,at=null,It=null,ue=null,me=null}}}const o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,v=null,x=null,w=null,T=null,A=new bt(0,0,0),R=0,M=!1,S=null,C=null,N=null,U=null,F=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=G>=2);let K=null,et={};const ot=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Ct=new ye().fromArray(ot),q=new ye().fromArray(_t);function it(O,lt,Y,tt){const dt=new Uint8Array(4),at=n.createTexture();n.bindTexture(O,at),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<Y;It++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(lt+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return at}const ht={};ht[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(n.DEPTH_TEST),r.setFunc(Hi),Bt(!1),Ht(Ha),st(n.CULL_FACE),I(Gn);function st(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function At(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Vt(O,lt){return u[O]!==lt?(n.bindFramebuffer(O,lt),u[O]=lt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=lt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function vt(O,lt){let Y=f,tt=!1;if(O){Y=d.get(lt),Y===void 0&&(Y=[],d.set(lt,Y));const dt=O.textures;if(Y.length!==dt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let at=0,It=dt.length;at<It;at++)Y[at]=n.COLOR_ATTACHMENT0+at;Y.length=dt.length,tt=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,tt=!0);tt&&n.drawBuffers(Y)}function Ot(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const Pt={[ii]:n.FUNC_ADD,[Mh]:n.FUNC_SUBTRACT,[Th]:n.FUNC_REVERSE_SUBTRACT};Pt[Eh]=n.MIN,Pt[wh]=n.MAX;const kt={[Ah]:n.ZERO,[bh]:n.ONE,[Ch]:n.SRC_COLOR,[Sr]:n.SRC_ALPHA,[Nh]:n.SRC_ALPHA_SATURATE,[Lh]:n.DST_COLOR,[Ph]:n.DST_ALPHA,[Rh]:n.ONE_MINUS_SRC_COLOR,[Mr]:n.ONE_MINUS_SRC_ALPHA,[Dh]:n.ONE_MINUS_DST_COLOR,[Ih]:n.ONE_MINUS_DST_ALPHA,[Uh]:n.CONSTANT_COLOR,[Fh]:n.ONE_MINUS_CONSTANT_COLOR,[zh]:n.CONSTANT_ALPHA,[Oh]:n.ONE_MINUS_CONSTANT_ALPHA};function I(O,lt,Y,tt,dt,at,It,ue,me,Qt){if(O===Gn){_===!0&&(At(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),O!==Sh){if(O!==g||Qt!==M){if((p!==ii||x!==ii)&&(n.blendEquation(n.FUNC_ADD),p=ii,x=ii),Qt)switch(O){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.ONE,n.ONE);break;case Ga:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ga:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Va:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,w=null,T=null,A.set(0,0,0),R=0,g=O,M=Qt}return}dt=dt||lt,at=at||Y,It=It||tt,(lt!==p||dt!==x)&&(n.blendEquationSeparate(Pt[lt],Pt[dt]),p=lt,x=dt),(Y!==y||tt!==v||at!==w||It!==T)&&(n.blendFuncSeparate(kt[Y],kt[tt],kt[at],kt[It]),y=Y,v=tt,w=at,T=It),(ue.equals(A)===!1||me!==R)&&(n.blendColor(ue.r,ue.g,ue.b,me),A.copy(ue),R=me),g=O,M=!1}function _e(O,lt){O.side===Ne?At(n.CULL_FACE):st(n.CULL_FACE);let Y=O.side===Ve;lt&&(Y=!Y),Bt(Y),O.blending===Ui&&O.transparent===!1?I(Gn):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function Ht(O){O!==xh?(st(n.CULL_FACE),O!==C&&(O===Ha?n.cullFace(n.BACK):O===yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),C=O}function Mt(O){O!==N&&(D&&n.lineWidth(O),N=O)}function Kt(O,lt,Y){O?(st(n.POLYGON_OFFSET_FILL),(U!==lt||F!==Y)&&(n.polygonOffset(lt,Y),U=lt,F=Y)):At(n.POLYGON_OFFSET_FILL)}function yt(O){O?st(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+z-1),K!==O&&(n.activeTexture(O),K=O)}function E(O,lt,Y){Y===void 0&&(K===null?Y=n.TEXTURE0+z-1:Y=K);let tt=et[Y];tt===void 0&&(tt={type:void 0,texture:void 0},et[Y]=tt),(tt.type!==O||tt.texture!==lt)&&(K!==Y&&(n.activeTexture(Y),K=Y),n.bindTexture(O,lt||ht[O]),tt.type=O,tt.texture=lt)}function V(){const O=et[K];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(O){Ct.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ct.copy(O))}function ut(O){q.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),q.copy(O))}function Rt(O,lt){let Y=l.get(lt);Y===void 0&&(Y=new WeakMap,l.set(lt,Y));let tt=Y.get(O);tt===void 0&&(tt=n.getUniformBlockIndex(lt,O.name),Y.set(O,tt))}function Ut(O,lt){const tt=l.get(lt).get(O);c.get(lt)!==tt&&(n.uniformBlockBinding(lt,tt,O.__bindingPointIndex),c.set(lt,tt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,et={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,v=null,x=null,w=null,T=null,A=new bt(0,0,0),R=0,M=!1,S=null,C=null,N=null,U=null,F=null,Ct.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:st,disable:At,bindFramebuffer:Vt,drawBuffers:vt,useProgram:Ot,setBlending:I,setMaterial:_e,setFlipSided:Bt,setCullFace:Ht,setLineWidth:Mt,setPolygonOffset:Kt,setScissorTest:yt,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:nt,texImage2D:St,texImage3D:Dt,updateUBOMapping:Rt,uniformBlockBinding:Ut,texStorage2D:Zt,texStorage3D:ct,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:zt,viewport:ut,reset:jt}}function lg(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return f?new OffscreenCanvas(P,E):Eo("canvas")}function _(P,E,V){let $=1;const nt=yt(P);if((nt.width>V||nt.height>V)&&($=V/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor($*nt.width),wt=Math.floor($*nt.height);u===void 0&&(u=m(Z,wt));const ft=E?m(Z,wt):u;return ft.width=Z,ft.height=wt,ft.getContext("2d").drawImage(P,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+wt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,E,V,$,nt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=E;if(E===n.RED&&(V===n.FLOAT&&(Z=n.R32F),V===n.HALF_FLOAT&&(Z=n.R16F),V===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.R8UI),V===n.UNSIGNED_SHORT&&(Z=n.R16UI),V===n.UNSIGNED_INT&&(Z=n.R32UI),V===n.BYTE&&(Z=n.R8I),V===n.SHORT&&(Z=n.R16I),V===n.INT&&(Z=n.R32I)),E===n.RG&&(V===n.FLOAT&&(Z=n.RG32F),V===n.HALF_FLOAT&&(Z=n.RG16F),V===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RG8UI),V===n.UNSIGNED_SHORT&&(Z=n.RG16UI),V===n.UNSIGNED_INT&&(Z=n.RG32UI),V===n.BYTE&&(Z=n.RG8I),V===n.SHORT&&(Z=n.RG16I),V===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),V===n.UNSIGNED_INT&&(Z=n.RGB32UI),V===n.BYTE&&(Z=n.RGB8I),V===n.SHORT&&(Z=n.RGB16I),V===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),V===n.UNSIGNED_INT&&(Z=n.RGBA32UI),V===n.BYTE&&(Z=n.RGBA8I),V===n.SHORT&&(Z=n.RGBA16I),V===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const wt=nt?Mo:ie.getTransfer($);V===n.FLOAT&&(Z=n.RGBA32F),V===n.HALF_FLOAT&&(Z=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Z=wt===de?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,E){let V;return P?E===null||E===ri||E===Wi?V=n.DEPTH24_STENCIL8:E===gn?V=n.DEPTH32F_STENCIL8:E===Ms&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ri||E===Wi?V=n.DEPTH_COMPONENT24:E===gn?V=n.DEPTH_COMPONENT32F:E===Ms&&(V=n.DEPTH_COMPONENT16),V}function w(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Je&&P.minFilter!==mn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){const E=P.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&h.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),S(E)}function R(P){const E=i.get(P);if(E.__webglInit===void 0)return;const V=P.source,$=d.get(V);if($){const nt=$[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(P),Object.keys($).length===0&&d.delete(V)}i.remove(P)}function M(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const V=P.source,$=d.get(V);delete $[E.__cacheKey],r.memory.textures--}function S(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let nt=0;nt<E.__webglFramebuffer[$].length;nt++)n.deleteFramebuffer(E.__webglFramebuffer[$][nt]);else n.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)n.deleteFramebuffer(E.__webglFramebuffer[$]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=P.textures;for(let $=0,nt=V.length;$<nt;$++){const Z=i.get(V[$]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(V[$])}i.remove(P)}let C=0;function N(){C=0}function U(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function F(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function z(P,E){const V=i.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,P,E);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function D(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function G(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,E);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function H(P,E){const V=i.get(P);if(P.version>0&&V.__version!==P.version){it(V,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const K={[Xn]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Lr]:n.MIRRORED_REPEAT},et={[Je]:n.NEAREST,[Yh]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[No]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},ot={[Jh]:n.NEVER,[iu]:n.ALWAYS,[jh]:n.LESS,[Tl]:n.LEQUAL,[Qh]:n.EQUAL,[nu]:n.GEQUAL,[tu]:n.GREATER,[eu]:n.NOTEQUAL};function _t(P,E){if(E.type===gn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===mn||E.magFilter===No||E.magFilter===Ns||E.magFilter===oi||E.minFilter===mn||E.minFilter===No||E.minFilter===Ns||E.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,K[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,et[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ot[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Je||E.minFilter!==Ns&&E.minFilter!==oi||E.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ct(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));const $=E.source;let nt=d.get($);nt===void 0&&(nt={},d.set($,nt));const Z=F(E);if(Z!==P.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),nt[Z].usedTimes++;const wt=nt[P.__cacheKey];wt!==void 0&&(nt[P.__cacheKey].usedTimes--,wt.usedTimes===0&&M(E)),P.__cacheKey=Z,P.__webglTexture=nt[Z].texture}return V}function q(P,E,V){let $=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=n.TEXTURE_3D);const nt=Ct(P,E),Z=E.source;e.bindTexture($,P.__webglTexture,n.TEXTURE0+V);const wt=i.get(Z);if(Z.version!==wt.__version||nt===!0){e.activeTexture(n.TEXTURE0+V);const ft=ie.getPrimaries(ie.workingColorSpace),xt=E.colorSpace===Bn?null:ie.getPrimaries(E.colorSpace),Zt=E.colorSpace===Bn||ft===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ct=_(E.image,!1,s.maxTextureSize);ct=Kt(E,ct);const St=o.convert(E.format,E.colorSpace),Dt=o.convert(E.type);let zt=v(E.internalFormat,St,Dt,E.colorSpace,E.isVideoTexture);_t($,E);let ut;const Rt=E.mipmaps,Ut=E.isVideoTexture!==!0,jt=wt.__version===void 0||nt===!0,O=Z.dataReady,lt=w(E,ct);if(E.isDepthTexture)zt=x(E.format===Xi,E.type),jt&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,zt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,zt,ct.width,ct.height,0,St,Dt,null));else if(E.isDataTexture)if(Rt.length>0){Ut&&jt&&e.texStorage2D(n.TEXTURE_2D,lt,zt,Rt[0].width,Rt[0].height);for(let Y=0,tt=Rt.length;Y<tt;Y++)ut=Rt[Y],Ut?O&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,Dt,ut.data):e.texImage2D(n.TEXTURE_2D,Y,zt,ut.width,ut.height,0,St,Dt,ut.data);E.generateMipmaps=!1}else Ut?(jt&&e.texStorage2D(n.TEXTURE_2D,lt,zt,ct.width,ct.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,St,Dt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,zt,ct.width,ct.height,0,St,Dt,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,zt,Rt[0].width,Rt[0].height,ct.depth);for(let Y=0,tt=Rt.length;Y<tt;Y++)if(ut=Rt[Y],E.format!==fn)if(St!==null)if(Ut){if(O)if(E.layerUpdates.size>0){const dt=Tc(ut.width,ut.height,E.format,E.type);for(const at of E.layerUpdates){const It=ut.data.subarray(at*dt/ut.data.BYTES_PER_ELEMENT,(at+1)*dt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,at,ut.width,ut.height,1,St,It)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,ct.depth,St,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,zt,ut.width,ut.height,ct.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,ct.depth,St,Dt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,zt,ut.width,ut.height,ct.depth,0,St,Dt,ut.data)}else{Ut&&jt&&e.texStorage2D(n.TEXTURE_2D,lt,zt,Rt[0].width,Rt[0].height);for(let Y=0,tt=Rt.length;Y<tt;Y++)ut=Rt[Y],E.format!==fn?St!==null?Ut?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,zt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?O&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,Dt,ut.data):e.texImage2D(n.TEXTURE_2D,Y,zt,ut.width,ut.height,0,St,Dt,ut.data)}else if(E.isDataArrayTexture)if(Ut){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,zt,ct.width,ct.height,ct.depth),O)if(E.layerUpdates.size>0){const Y=Tc(ct.width,ct.height,E.format,E.type);for(const tt of E.layerUpdates){const dt=ct.data.subarray(tt*Y/ct.data.BYTES_PER_ELEMENT,(tt+1)*Y/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,ct.width,ct.height,1,St,Dt,dt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Dt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,ct.width,ct.height,ct.depth,0,St,Dt,ct.data);else if(E.isData3DTexture)Ut?(jt&&e.texStorage3D(n.TEXTURE_3D,lt,zt,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Dt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,zt,ct.width,ct.height,ct.depth,0,St,Dt,ct.data);else if(E.isFramebufferTexture){if(jt)if(Ut)e.texStorage2D(n.TEXTURE_2D,lt,zt,ct.width,ct.height);else{let Y=ct.width,tt=ct.height;for(let dt=0;dt<lt;dt++)e.texImage2D(n.TEXTURE_2D,dt,zt,Y,tt,0,St,Dt,null),Y>>=1,tt>>=1}}else if(Rt.length>0){if(Ut&&jt){const Y=yt(Rt[0]);e.texStorage2D(n.TEXTURE_2D,lt,zt,Y.width,Y.height)}for(let Y=0,tt=Rt.length;Y<tt;Y++)ut=Rt[Y],Ut?O&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,St,Dt,ut):e.texImage2D(n.TEXTURE_2D,Y,zt,St,Dt,ut);E.generateMipmaps=!1}else if(Ut){if(jt){const Y=yt(ct);e.texStorage2D(n.TEXTURE_2D,lt,zt,Y.width,Y.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Dt,ct)}else e.texImage2D(n.TEXTURE_2D,0,zt,St,Dt,ct);g(E)&&p($),wt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function it(P,E,V){if(E.image.length!==6)return;const $=Ct(P,E),nt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const Z=i.get(nt);if(nt.version!==Z.__version||$===!0){e.activeTexture(n.TEXTURE0+V);const wt=ie.getPrimaries(ie.workingColorSpace),ft=E.colorSpace===Bn?null:ie.getPrimaries(E.colorSpace),xt=E.colorSpace===Bn||wt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!Zt&&!ct?St[tt]=_(E.image[tt],!0,s.maxCubemapSize):St[tt]=ct?E.image[tt].image:E.image[tt],St[tt]=Kt(E,St[tt]);const Dt=St[0],zt=o.convert(E.format,E.colorSpace),ut=o.convert(E.type),Rt=v(E.internalFormat,zt,ut,E.colorSpace),Ut=E.isVideoTexture!==!0,jt=Z.__version===void 0||$===!0,O=nt.dataReady;let lt=w(E,Dt);_t(n.TEXTURE_CUBE_MAP,E);let Y;if(Zt){Ut&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Rt,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){Y=St[tt].mipmaps;for(let dt=0;dt<Y.length;dt++){const at=Y[dt];E.format!==fn?zt!==null?Ut?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,at.width,at.height,zt,at.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,Rt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,at.width,at.height,zt,ut,at.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,Rt,at.width,at.height,0,zt,ut,at.data)}}}else{if(Y=E.mipmaps,Ut&&jt){Y.length>0&&lt++;const tt=yt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Rt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ct){Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,zt,ut,St[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Rt,St[tt].width,St[tt].height,0,zt,ut,St[tt].data);for(let dt=0;dt<Y.length;dt++){const It=Y[dt].image[tt].image;Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,It.width,It.height,zt,ut,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,Rt,It.width,It.height,0,zt,ut,It.data)}}else{Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,ut,St[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Rt,zt,ut,St[tt]);for(let dt=0;dt<Y.length;dt++){const at=Y[dt];Ut?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,zt,ut,at.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,Rt,zt,ut,at.image[tt])}}}g(E)&&p(n.TEXTURE_CUBE_MAP),Z.__version=nt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ht(P,E,V,$,nt,Z){const wt=o.convert(V.format,V.colorSpace),ft=o.convert(V.type),xt=v(V.internalFormat,wt,ft,V.colorSpace),Zt=i.get(E),ct=i.get(V);if(ct.__renderTarget=E,!Zt.__hasExternalTextures){const St=Math.max(1,E.width>>Z),Dt=Math.max(1,E.height>>Z);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,xt,St,Dt,E.depth,0,wt,ft,null):e.texImage2D(nt,Z,xt,St,Dt,0,wt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Ht(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,nt,ct.__webglTexture,0,Bt(E)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,nt,ct.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(P,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const $=E.depthTexture,nt=$&&$.isDepthTexture?$.type:null,Z=x(E.stencilBuffer,nt),wt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=Bt(E);Ht(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Z,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,P)}else{const $=E.textures;for(let nt=0;nt<$.length;nt++){const Z=$[nt],wt=o.convert(Z.format,Z.colorSpace),ft=o.convert(Z.type),xt=v(Z.internalFormat,wt,ft,Z.colorSpace),Zt=Bt(E);V&&Ht(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,xt,E.width,E.height):Ht(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,xt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const nt=$.__webglTexture,Z=Bt(E);if(E.depthTexture.format===Fi)Ht(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Xi)Ht(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Vt(P){const E=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=$}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=n.createRenderbuffer(),st(E.__webglDepthbuffer[$],P,!1);else{const nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),st(E.__webglDepthbuffer,P,!1);else{const $=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(P,E,V){const $=i.get(P);E!==void 0&&ht($.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Vt(P)}function Ot(P){const E=P.texture,V=i.get(P),$=i.get(E);P.addEventListener("dispose",A);const nt=P.textures,Z=P.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=E.version,r.memory.textures++),Z){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let xt=0;xt<E.mipmaps.length;xt++)V.__webglFramebuffer[ft][xt]=n.createFramebuffer()}else V.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)V.__webglFramebuffer[ft]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ft=0,xt=nt.length;ft<xt;ft++){const Zt=i.get(nt[ft]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&Ht(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<nt.length;ft++){const xt=nt[ft];V.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const Zt=o.convert(xt.format,xt.colorSpace),ct=o.convert(xt.type),St=v(xt.internalFormat,Zt,ct,xt.colorSpace,P.isXRRenderTarget===!0),Dt=Bt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,St,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),st(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),_t(n.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let xt=0;xt<E.mipmaps.length;xt++)ht(V.__webglFramebuffer[ft][xt],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else ht(V.__webglFramebuffer[ft],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ft=0,xt=nt.length;ft<xt;ft++){const Zt=nt[ft],ct=i.get(Zt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),_t(n.TEXTURE_2D,Zt),ht(V.__webglFramebuffer,P,Zt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),g(Zt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),_t(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let xt=0;xt<E.mipmaps.length;xt++)ht(V.__webglFramebuffer[xt],P,E,n.COLOR_ATTACHMENT0,ft,xt);else ht(V.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ft,0);g(E)&&p(ft),e.unbindTexture()}P.depthBuffer&&Vt(P)}function Pt(P){const E=P.textures;for(let V=0,$=E.length;V<$;V++){const nt=E[V];if(g(nt)){const Z=y(P),wt=i.get(nt).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}const kt=[],I=[];function _e(P){if(P.samples>0){if(Ht(P)===!1){const E=P.textures,V=P.width,$=P.height;let nt=n.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(P),ft=E.length>1;if(ft)for(let xt=0;xt<E.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<E.length;xt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Zt=i.get(E[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,nt,n.NEAREST),c===!0&&(kt.length=0,I.length=0,kt.push(n.COLOR_ATTACHMENT0+xt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(kt.push(Z),I.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let xt=0;xt<E.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Zt=i.get(E[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Bt(P){return Math.min(s.maxSamples,P.samples)}function Ht(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(P){const E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Kt(P,E){const V=P.colorSpace,$=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==qi&&V!==Bn&&(ie.getTransfer(V)===de?($!==fn||nt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=vt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ht}function hg(n,t){function e(i,s=Bn){let o;const r=ie.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ml)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fl)return n.BYTE;if(i===pl)return n.SHORT;if(i===Ms)return n.UNSIGNED_SHORT;if(i===va)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===Rs)return n.HALF_FLOAT;if(i===gl)return n.ALPHA;if(i===_l)return n.RGB;if(i===fn)return n.RGBA;if(i===vl)return n.LUMINANCE;if(i===xl)return n.LUMINANCE_ALPHA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Sa)return n.RED;if(i===Ma)return n.RED_INTEGER;if(i===yl)return n.RG;if(i===Ta)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===vo)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dr||i===Nr||i===Ur||i===Fr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Dr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ur)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zr||i===Or||i===kr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zr||i===Or)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===kr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Br||i===Hr||i===Gr||i===Vr||i===Wr||i===Xr||i===qr||i===Yr||i===Kr||i===Zr||i===$r||i===Jr||i===jr||i===Qr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Br)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$r)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qr)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xo||i===ta||i===ea)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===xo)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ta)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ea)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===na||i===ia||i===sa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===xo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===na)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Oe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yn({vertexShader:ug,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new je(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends Ki{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new fg,g=e.getContextAttributes();let p=null,y=null;const v=[],x=[],w=new mt;let T=null;const A=new $e;A.viewport=new ye;const R=new $e;R.viewport=new ye;const M=[A,R],S=new Nd;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=v[q];return it===void 0&&(it=new tr,v[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=v[q];return it===void 0&&(it=new tr,v[q]=it),it.getGripSpace()},this.getHand=function(q){let it=v[q];return it===void 0&&(it=new tr,v[q]=it),it.getHandSpace()};function U(q){const it=x.indexOf(q.inputSource);if(it===-1)return;const ht=v[it];ht!==void 0&&(ht.update(q.inputSource,q.frame,l||r),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",z);for(let q=0;q<v.length;q++){const it=x[q];it!==null&&(x[q]=null,v[q].disconnect(it))}C=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,st=null,At=null;g.depth&&(At=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=g.stencil?Xi:Fi,st=g.stencil?Wi:ri);const Vt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ai(d.textureWidth,d.textureHeight,{format:fn,type:Ln,depthTexture:new Fl(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ht={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ai(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let it=0;it<q.removed.length;it++){const ht=q.removed[it],st=x.indexOf(ht);st>=0&&(x[st]=null,v[st].disconnect(ht))}for(let it=0;it<q.added.length;it++){const ht=q.added[it];let st=x.indexOf(ht);if(st===-1){for(let Vt=0;Vt<v.length;Vt++)if(Vt>=x.length){x.push(ht),st=Vt;break}else if(x[Vt]===null){x[Vt]=ht,st=Vt;break}if(st===-1)break}const At=v[st];At&&At.connect(ht)}}const D=new L,G=new L;function H(q,it,ht){D.setFromMatrixPosition(it.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);const st=D.distanceTo(G),At=it.projectionMatrix.elements,Vt=ht.projectionMatrix.elements,vt=At[14]/(At[10]-1),Ot=At[14]/(At[10]+1),Pt=(At[9]+1)/At[5],kt=(At[9]-1)/At[5],I=(At[8]-1)/At[0],_e=(Vt[8]+1)/Vt[0],Bt=vt*I,Ht=vt*_e,Mt=st/(-I+_e),Kt=Mt*-I;if(it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Kt),q.translateZ(Mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const yt=vt+Mt,P=Ot+Mt,E=Bt-Kt,V=Ht+(st-Kt),$=Pt*Ot/P*yt,nt=kt*Ot/P*yt;q.projectionMatrix.makePerspective(E,V,$,nt,yt,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let it=q.near,ht=q.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),S.near=R.near=A.near=it,S.far=R.far=A.far=ht,(C!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,N=S.far),A.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|R.layers.mask;const st=q.parent,At=S.cameras;K(S,st);for(let Vt=0;Vt<At.length;Vt++)K(At[Vt],st);At.length===2?H(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),et(q,S,st)};function et(q,it,ht){ht===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ts*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ot=null;function _t(q,it){if(h=it.getViewerPose(l||r),m=it,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,st=!0);for(let vt=0;vt<ht.length;vt++){const Ot=ht[vt];let Pt=null;if(f!==null)Pt=f.getViewport(Ot);else{const I=u.getViewSubImage(d,Ot);Pt=I.viewport,vt===0&&(t.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let kt=M[vt];kt===void 0&&(kt=new $e,kt.layers.enable(vt),kt.viewport=new ye,M[vt]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),vt===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),st===!0&&S.cameras.push(kt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const vt=u.getDepthInformation(ht[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,s.renderState)}}for(let ht=0;ht<v.length;ht++){const st=x[ht],At=v[ht];st!==null&&At!==void 0&&At.update(st,it,l||r)}ot&&ot(q,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),m=null}const Ct=new $l;Ct.setAnimationLoop(_t),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}}const Qn=new vn,mg=new pe;function gg(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Pl(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ve&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ve&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(g.envMap.value=v,Qn.copy(x),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),g.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Qn)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _g(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function l(y,v){let x=s[y.id];x===void 0&&(m(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",g));const w=v.program;i.updateUBOMapping(y,w);const T=t.render.frame;o[y.id]!==T&&(d(y),o[y.id]=T)}function h(y){const v=u();y.__bindingPointIndex=v;const x=n.createBuffer(),w=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],x=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=x.length;T<A;T++){const R=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,S=R.length;M<S;M++){const C=R[M];if(f(C,T,M,w)===!0){const N=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let z=0;z<U.length;z++){const D=U[z],G=_(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,N+F,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,v,x,w){const T=y.value,A=v+"_"+x;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{const R=w[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return w[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function m(y){const v=y.uniforms;let x=0;const w=16;for(let A=0,R=v.length;A<R;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,C=M.length;S<C;S++){const N=M[S],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,z=U.length;F<z;F++){const D=U[F],G=_(D),H=x%w,K=H%G.boundary,et=H+K;x+=K,et!==0&&w-et<G.storage&&(x+=w-et),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=G.storage}}}const T=x%w;return T>0&&(x+=w-T),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class eh{constructor(t={}){const{canvas:e=yu(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Se,this.toneMapping=Vn,this.toneMappingExposure=1;const x=this;let w=!1,T=0,A=0,R=null,M=-1,S=null;const C=new ye,N=new ye;let U=null;const F=new bt(0);let z=0,D=e.width,G=e.height,H=1,K=null,et=null;const ot=new ye(0,0,D,G),_t=new ye(0,0,D,G);let Ct=!1;const q=new Ca;let it=!1,ht=!1;this.transmissionResolutionScale=1;const st=new pe,At=new pe,Vt=new L,vt=new ye,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function kt(){return R===null?H:1}let I=i;function _e(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ga}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",at,!1),I===null){const k="webgl2";if(I=_e(k,b),I===null)throw _e(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,Ht,Mt,Kt,yt,P,E,V,$,nt,Z,wt,ft,xt,Zt,ct,St,Dt,zt,ut,Rt,Ut,jt,O;function lt(){Bt=new Cm(I),Bt.init(),Ut=new hg(I,Bt),Ht=new Sm(I,Bt,t,Ut),Mt=new cg(I,Bt),Ht.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Kt=new Im(I),yt=new Z0,P=new lg(I,Bt,Mt,yt,Ht,Ut,Kt),E=new Tm(x),V=new bm(x),$=new Fd(I),jt=new xm(I,$),nt=new Rm(I,$,Kt,jt),Z=new Dm(I,nt,$,Kt),zt=new Lm(I,Ht,P),ct=new Mm(yt),wt=new K0(x,E,V,Bt,Ht,jt,ct),ft=new gg(x,yt),xt=new J0,Zt=new ig(Bt),Dt=new vm(x,E,V,Mt,Z,f,c),St=new rg(x,Z,Ht),O=new _g(I,Kt,Ht,Mt),ut=new ym(I,Bt,Kt),Rt=new Pm(I,Bt,Kt),Kt.programs=wt.programs,x.capabilities=Ht,x.extensions=Bt,x.properties=yt,x.renderLists=xt,x.shadowMap=St,x.state=Mt,x.info=Kt}lt();const Y=new pg(x,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(D,G,!1))},this.getSize=function(b){return b.set(D,G)},this.setSize=function(b,k,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,G=k,e.width=Math.floor(b*H),e.height=Math.floor(k*H),W===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(D*H,G*H).floor()},this.setDrawingBufferSize=function(b,k,W){D=b,G=k,H=W,e.width=Math.floor(b*W),e.height=Math.floor(k*W),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(ot)},this.setViewport=function(b,k,W,X){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,k,W,X),Mt.viewport(C.copy(ot).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(_t)},this.setScissor=function(b,k,W,X){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,k,W,X),Mt.scissor(N.copy(_t).multiplyScalar(H).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){Mt.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,W=!0){let X=0;if(b){let B=!1;if(R!==null){const rt=R.texture.format;B=rt===Ea||rt===Ta||rt===Ma}if(B){const rt=R.texture.type,gt=rt===Ln||rt===ri||rt===Ms||rt===Wi||rt===xa||rt===ya,Tt=Dt.getClearColor(),Et=Dt.getClearAlpha(),Gt=Tt.r,Wt=Tt.g,Lt=Tt.b;gt?(m[0]=Gt,m[1]=Wt,m[2]=Lt,m[3]=Et,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Gt,_[1]=Wt,_[2]=Lt,_[3]=Et,I.clearBufferiv(I.COLOR,0,_))}else X|=I.COLOR_BUFFER_BIT}k&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Dt.dispose(),xt.dispose(),Zt.dispose(),yt.dispose(),E.dispose(),V.dispose(),Z.dispose(),jt.dispose(),O.dispose(),wt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ji),Y.removeEventListener("sessionend",qn),rn.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=Kt.autoReset,k=St.enabled,W=St.autoUpdate,X=St.needsUpdate,B=St.type;lt(),Kt.autoReset=b,St.enabled=k,St.autoUpdate=W,St.needsUpdate=X,St.type=B}function at(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const k=b.target;k.removeEventListener("dispose",It),ue(k)}function ue(b){me(b),yt.remove(b)}function me(b){const k=yt.get(b).programs;k!==void 0&&(k.forEach(function(W){wt.releaseProgram(W)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,W,X,B,rt){k===null&&(k=Ot);const gt=B.isMesh&&B.matrixWorld.determinant()<0,Tt=fh(b,k,W,X,B);Mt.setMaterial(X,gt);let Et=W.index,Gt=1;if(X.wireframe===!0){if(Et=nt.getWireframeAttribute(W),Et===void 0)return;Gt=2}const Wt=W.drawRange,Lt=W.attributes.position;let ee=Wt.start*Gt,oe=(Wt.start+Wt.count)*Gt;rt!==null&&(ee=Math.max(ee,rt.start*Gt),oe=Math.min(oe,(rt.start+rt.count)*Gt)),Et!==null?(ee=Math.max(ee,0),oe=Math.min(oe,Et.count)):Lt!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,Lt.count));const Te=oe-ee;if(Te<0||Te===1/0)return;jt.setup(B,X,Tt,W,Et);let xe,ne=ut;if(Et!==null&&(xe=$.get(Et),ne=Rt,ne.setIndex(xe)),B.isMesh)X.wireframe===!0?(Mt.setLineWidth(X.wireframeLinewidth*kt()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(B.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),Mt.setLineWidth(Nt*kt()),B.isLineSegments?ne.setMode(I.LINES):B.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else B.isPoints?ne.setMode(I.POINTS):B.isSprite&&ne.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ti("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ne.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Nt=B._multiDrawStarts,Le=B._multiDrawCounts,re=B._multiDrawCount,an=Et?$.get(Et).bytesPerElement:1,di=yt.get(X).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)di.setValue(I,"_gl_DrawID",qe),ne.render(Nt[qe]/an,Le[qe])}else if(B.isInstancedMesh)ne.renderInstances(ee,Te,B.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Le=Math.min(W.instanceCount,Nt);ne.renderInstances(ee,Te,Le)}else ne.render(ee,Te)};function Qt(b,k,W){b.transparent===!0&&b.side===Ne&&b.forceSinglePass===!1?(b.side=Ve,b.needsUpdate=!0,ui(b,k,W),b.side=Wn,b.needsUpdate=!0,ui(b,k,W),b.side=Ne):ui(b,k,W)}this.compile=function(b,k,W=null){W===null&&(W=b),p=Zt.get(W),p.init(k),v.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const rt=B.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const Tt=rt[gt];Qt(Tt,W,B),X.add(Tt)}else Qt(rt,W,B),X.add(rt)}),p=v.pop(),X},this.compileAsync=function(b,k,W=null){const X=this.compile(b,k,W);return new Promise(B=>{function rt(){if(X.forEach(function(gt){yt.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){B(b);return}setTimeout(rt,10)}Bt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let We=null;function we(b){We&&We(b)}function ji(){rn.stop()}function qn(){rn.start()}const rn=new $l;rn.setAnimationLoop(we),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(b){We=b,Y.setAnimationLoop(b),b===null?rn.stop():rn.start()},Y.addEventListener("sessionstart",ji),Y.addEventListener("sessionend",qn),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,k,R),p=Zt.get(b,v.length),p.init(k),v.push(p),At.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(At),ht=this.localClippingEnabled,it=ct.init(this.clippingPlanes,ht),g=xt.get(b,y.length),g.init(),y.push(g),Y.enabled===!0&&Y.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&Dn(rt,k,-1/0,x.sortObjects)}Dn(b,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(K,et),Pt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Pt&&Dt.addToRenderList(g,b),this.info.render.frame++,it===!0&&ct.beginShadows();const W=p.state.shadowsArray;St.render(W,b,k),it===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,B=g.transmissive;if(p.setupLights(),k.isArrayCamera){const rt=k.cameras;if(B.length>0)for(let gt=0,Tt=rt.length;gt<Tt;gt++){const Et=rt[gt];Ls(X,B,b,Et)}Pt&&Dt.render(b);for(let gt=0,Tt=rt.length;gt<Tt;gt++){const Et=rt[gt];Qi(g,b,Et,Et.viewport)}}else B.length>0&&Ls(X,B,b,k),Pt&&Dt.render(b),Qi(g,b,k);R!==null&&A===0&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,k),jt.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],it===!0&&ct.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Dn(b,k,W,X){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){X&&vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);const gt=Z.update(b),Tt=b.material;Tt.visible&&g.push(b,gt,Tt,W,vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const gt=Z.update(b),Tt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),vt.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),vt.copy(gt.boundingSphere.center)),vt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(Tt)){const Et=gt.groups;for(let Gt=0,Wt=Et.length;Gt<Wt;Gt++){const Lt=Et[Gt],ee=Tt[Lt.materialIndex];ee&&ee.visible&&g.push(b,gt,ee,W,vt.z,Lt)}}else Tt.visible&&g.push(b,gt,Tt,W,vt.z,null)}}const rt=b.children;for(let gt=0,Tt=rt.length;gt<Tt;gt++)Dn(rt[gt],k,W,X)}function Qi(b,k,W,X){const B=b.opaque,rt=b.transmissive,gt=b.transparent;p.setupLightsView(W),it===!0&&ct.setGlobalState(x.clippingPlanes,W),X&&Mt.viewport(C.copy(X)),B.length>0&&hi(B,k,W),rt.length>0&&hi(rt,k,W),gt.length>0&&hi(gt,k,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ls(b,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ai(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Rs:Ln,minFilter:oi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const rt=p.state.transmissionRenderTarget[X.id],gt=X.viewport||C;rt.setSize(gt.z*x.transmissionResolutionScale,gt.w*x.transmissionResolutionScale);const Tt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(F),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Pt&&Dt.render(W);const Et=x.toneMapping;x.toneMapping=Vn;const Gt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),it===!0&&ct.setGlobalState(x.clippingPlanes,X),hi(b,W,X),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Lt=0,ee=k.length;Lt<ee;Lt++){const oe=k[Lt],Te=oe.object,xe=oe.geometry,ne=oe.material,Nt=oe.group;if(ne.side===Ne&&Te.layers.test(X.layers)){const Le=ne.side;ne.side=Ve,ne.needsUpdate=!0,Ds(Te,W,X,xe,ne,Nt),ne.side=Le,ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}x.setRenderTarget(Tt),x.setClearColor(F,z),Gt!==void 0&&(X.viewport=Gt),x.toneMapping=Et}function hi(b,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,rt=b.length;B<rt;B++){const gt=b[B],Tt=gt.object,Et=gt.geometry,Gt=X===null?gt.material:X,Wt=gt.group;Tt.layers.test(W.layers)&&Ds(Tt,k,W,Et,Gt,Wt)}}function Ds(b,k,W,X,B,rt){b.onBeforeRender(x,k,W,X,B,rt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,k,W,X,b,rt),B.transparent===!0&&B.side===Ne&&B.forceSinglePass===!1?(B.side=Ve,B.needsUpdate=!0,x.renderBufferDirect(W,k,X,B,b,rt),B.side=Wn,B.needsUpdate=!0,x.renderBufferDirect(W,k,X,B,b,rt),B.side=Ne):x.renderBufferDirect(W,k,X,B,b,rt),b.onAfterRender(x,k,W,X,B,rt)}function ui(b,k,W){k.isScene!==!0&&(k=Ot);const X=yt.get(b),B=p.state.lights,rt=p.state.shadowsArray,gt=B.state.version,Tt=wt.getParameters(b,B.state,rt,k,W),Et=wt.getProgramCacheKey(Tt);let Gt=X.programs;X.environment=b.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(b.isMeshStandardMaterial?V:E).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Gt===void 0&&(b.addEventListener("dispose",It),Gt=new Map,X.programs=Gt);let Wt=Gt.get(Et);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===gt)return Ba(b,Tt),Wt}else Tt.uniforms=wt.getUniforms(b),b.onBeforeCompile(Tt,x),Wt=wt.acquireProgram(Tt,Et),Gt.set(Et,Wt),X.uniforms=Tt.uniforms;const Lt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),Ba(b,Tt),X.needsLights=mh(b),X.lightsStateVersion=gt,X.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function ts(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=yo.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Ba(b,k){const W=yt.get(b);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function fh(b,k,W,X,B){k.isScene!==!0&&(k=Ot),P.resetTextureUnits();const rt=k.fog,gt=X.isMeshStandardMaterial?k.environment:null,Tt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qi,Et=(X.isMeshStandardMaterial?V:E).get(X.envMap||gt),Gt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let Te=Vn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=x.toneMapping);const xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=xe!==void 0?xe.length:0,Nt=yt.get(X),Le=p.state.lights;if(it===!0&&(ht===!0||b!==S)){const ke=b===S&&X.id===M;ct.setState(X,b,ke)}let re=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Le.state.version||Nt.outputColorSpace!==Tt||B.isBatchedMesh&&Nt.batching===!1||!B.isBatchedMesh&&Nt.batching===!0||B.isBatchedMesh&&Nt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Nt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Nt.instancing===!1||!B.isInstancedMesh&&Nt.instancing===!0||B.isSkinnedMesh&&Nt.skinning===!1||!B.isSkinnedMesh&&Nt.skinning===!0||B.isInstancedMesh&&Nt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Nt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Nt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Nt.instancingMorph===!1&&B.morphTexture!==null||Nt.envMap!==Et||X.fog===!0&&Nt.fog!==rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ct.numPlanes||Nt.numIntersection!==ct.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Wt||Nt.morphTargets!==Lt||Nt.morphNormals!==ee||Nt.morphColors!==oe||Nt.toneMapping!==Te||Nt.morphTargetsCount!==ne)&&(re=!0):(re=!0,Nt.__version=X.version);let an=Nt.currentProgram;re===!0&&(an=ui(X,k,B));let di=!1,qe=!1,es=!1;const ge=an.getUniforms(),tn=Nt.uniforms;if(Mt.useProgram(an.program)&&(di=!0,qe=!0,es=!0),X.id!==M&&(M=X.id,qe=!0),di||S!==b){Mt.buffers.depth.getReversed()?(st.copy(b.projectionMatrix),Mu(st),Tu(st),ge.setValue(I,"projectionMatrix",st)):ge.setValue(I,"projectionMatrix",b.projectionMatrix),ge.setValue(I,"viewMatrix",b.matrixWorldInverse);const Xe=ge.map.cameraPosition;Xe!==void 0&&Xe.setValue(I,Vt.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,qe=!0,es=!0)}if(B.isSkinnedMesh){ge.setOptional(I,B,"bindMatrix"),ge.setOptional(I,B,"bindMatrixInverse");const ke=B.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ge.setValue(I,"boneTexture",ke.boneTexture,P))}B.isBatchedMesh&&(ge.setOptional(I,B,"batchingTexture"),ge.setValue(I,"batchingTexture",B._matricesTexture,P),ge.setOptional(I,B,"batchingIdTexture"),ge.setValue(I,"batchingIdTexture",B._indirectTexture,P),ge.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(I,"batchingColorTexture",B._colorsTexture,P));const en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&zt.update(B,W,an),(qe||Nt.receiveShadow!==B.receiveShadow)&&(Nt.receiveShadow=B.receiveShadow,ge.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(tn.envMap.value=Et,tn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),qe&&(ge.setValue(I,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&ph(tn,es),rt&&X.fog===!0&&ft.refreshFogUniforms(tn,rt),ft.refreshMaterialUniforms(tn,X,H,G,p.state.transmissionRenderTarget[b.id]),yo.upload(I,ts(Nt),tn,P)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(yo.upload(I,ts(Nt),tn,P),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(I,"center",B.center),ge.setValue(I,"modelViewMatrix",B.modelViewMatrix),ge.setValue(I,"normalMatrix",B.normalMatrix),ge.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ke=X.uniformsGroups;for(let Xe=0,Do=ke.length;Xe<Do;Xe++){const Yn=ke[Xe];O.update(Yn,an),O.bind(Yn,an)}}return an}function ph(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function mh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,k,W){yt.get(b.texture).__webglTexture=k,yt.get(b.depthTexture).__webglTexture=W;const X=yt.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const W=yt.get(b);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const gh=I.createFramebuffer();this.setRenderTarget=function(b,k=0,W=0){R=b,T=k,A=W;let X=!0,B=null,rt=!1,gt=!1;if(b){const Et=yt.get(b);if(Et.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(Et.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(Et.__hasExternalTextures)P.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Lt=b.depthTexture;if(Et.__boundDepthTexture!==Lt){if(Lt!==null&&yt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(gt=!0);const Wt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?B=Wt[k][W]:B=Wt[k],rt=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?B=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?B=Wt[W]:B=Wt,C.copy(b.viewport),N.copy(b.scissor),U=b.scissorTest}else C.copy(ot).multiplyScalar(H).floor(),N.copy(_t).multiplyScalar(H).floor(),U=Ct;if(W!==0&&(B=gh),Mt.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&Mt.drawBuffers(b,B),Mt.viewport(C),Mt.scissor(N),Mt.setScissorTest(U),rt){const Et=yt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,W)}else if(gt){const Et=yt.get(b.texture),Gt=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.__webglTexture,W,Gt)}else if(b!==null&&W!==0){const Et=yt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(b,k,W,X,B,rt,gt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){Mt.bindFramebuffer(I.FRAMEBUFFER,Tt);try{const Et=b.texture,Gt=Et.format,Wt=Et.type;if(!Ht.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-X&&W>=0&&W<=b.height-B&&I.readPixels(k,W,X,B,Ut.convert(Gt),Ut.convert(Wt),rt)}finally{const Et=R!==null?yt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,k,W,X,B,rt,gt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const Et=b.texture,Gt=Et.format,Wt=Et.type;if(!Ht.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-X&&W>=0&&W<=b.height-B){Mt.bindFramebuffer(I.FRAMEBUFFER,Tt);const Lt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.bufferData(I.PIXEL_PACK_BUFFER,rt.byteLength,I.STREAM_READ),I.readPixels(k,W,X,B,Ut.convert(Gt),Ut.convert(Wt),0);const ee=R!==null?yt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,ee);const oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Su(I,oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Lt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,rt),I.deleteBuffer(Lt),I.deleteSync(oe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,W=0){b.isTexture!==!0&&(ti("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(b.image.width*X),rt=Math.floor(b.image.height*X),gt=k!==null?k.x:0,Tt=k!==null?k.y:0;P.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,gt,Tt,B,rt),Mt.unbindTexture()};const _h=I.createFramebuffer(),vh=I.createFramebuffer();this.copyTextureToTexture=function(b,k,W=null,X=null,B=0,rt=null){b.isTexture!==!0&&(ti("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],k=arguments[2],rt=arguments[3]||0,W=null),rt===null&&(B!==0?(ti("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=B,B=0):rt=0);let gt,Tt,Et,Gt,Wt,Lt,ee,oe,Te;const xe=b.isCompressedTexture?b.mipmaps[rt]:b.image;if(W!==null)gt=W.max.x-W.min.x,Tt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Gt=W.min.x,Wt=W.min.y,Lt=W.isBox3?W.min.z:0;else{const en=Math.pow(2,-B);gt=Math.floor(xe.width*en),Tt=Math.floor(xe.height*en),b.isDataArrayTexture?Et=xe.depth:b.isData3DTexture?Et=Math.floor(xe.depth*en):Et=1,Gt=0,Wt=0,Lt=0}X!==null?(ee=X.x,oe=X.y,Te=X.z):(ee=0,oe=0,Te=0);const ne=Ut.convert(k.format),Nt=Ut.convert(k.type);let Le;k.isData3DTexture?(P.setTexture3D(k,0),Le=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Le=I.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const re=I.getParameter(I.UNPACK_ROW_LENGTH),an=I.getParameter(I.UNPACK_IMAGE_HEIGHT),di=I.getParameter(I.UNPACK_SKIP_PIXELS),qe=I.getParameter(I.UNPACK_SKIP_ROWS),es=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lt);const ge=b.isDataArrayTexture||b.isData3DTexture,tn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const en=yt.get(b),ke=yt.get(k),Xe=yt.get(en.__renderTarget),Do=yt.get(ke.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Do.__webglFramebuffer);for(let Yn=0;Yn<Et;Yn++)ge&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,B,Lt+Yn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(k).__webglTexture,rt,Te+Yn)),I.blitFramebuffer(Gt,Wt,gt,Tt,ee,oe,gt,Tt,I.DEPTH_BUFFER_BIT,I.NEAREST);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||yt.has(b)){const en=yt.get(b),ke=yt.get(k);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,_h),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,vh);for(let Xe=0;Xe<Et;Xe++)ge?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,B,Lt+Xe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,B),tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,rt,Te+Xe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,rt),B!==0?I.blitFramebuffer(Gt,Wt,gt,Tt,ee,oe,gt,Tt,I.COLOR_BUFFER_BIT,I.NEAREST):tn?I.copyTexSubImage3D(Le,rt,ee,oe,Te+Xe,Gt,Wt,gt,Tt):I.copyTexSubImage2D(Le,rt,ee,oe,Gt,Wt,gt,Tt);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Le,rt,ee,oe,Te,gt,Tt,Et,ne,Nt,xe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,rt,ee,oe,Te,gt,Tt,Et,ne,xe.data):I.texSubImage3D(Le,rt,ee,oe,Te,gt,Tt,Et,ne,Nt,xe):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,rt,ee,oe,gt,Tt,ne,Nt,xe.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,rt,ee,oe,xe.width,xe.height,ne,xe.data):I.texSubImage2D(I.TEXTURE_2D,rt,ee,oe,gt,Tt,ne,Nt,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,an),I.pixelStorei(I.UNPACK_SKIP_PIXELS,di),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,es),rt===0&&k.generateMipmaps&&I.generateMipmap(Le),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,W=null,X=null,B=0){return b.isTexture!==!0&&(ti("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],k=arguments[3],B=arguments[4]||0),ti('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,W,X,B)},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){T=0,A=0,R=null,Mt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const j={LENGTH:64,WIDTH:40,HALF_LENGTH:32,HALF_WIDTH:20,GOAL_WIDTH:6.2,GOAL_HALF_WIDTH:3.1,GOAL_HEIGHT:2.38,GOAL_DEPTH:2.1,POST_RADIUS:.065,PENALTY_AREA_LENGTH:10.5,PENALTY_AREA_WIDTH:19,GOAL_AREA_LENGTH:4,GOAL_AREA_WIDTH:10,PENALTY_SPOT_DIST:8,CENTER_CIRCLE_RADIUS:5.5,CORNER_ARC_RADIUS:1},Yt={RADIUS:.22,GRAVITY:21.5,RESTITUTION_GROUND:.56,RESTITUTION_NET:.14,MAGNUS_COEFF:.16,MAX_SPEED:38},ze={FIXED_DT:1/60,MATCH_CLOCK_SCALE:30,HALFTIME_MATCH_SECONDS:2700,FULLTIME_MATCH_SECONDS:5400,GOAL_CELEBRATION_SECONDS:3,HALFTIME_PAUSE_SECONDS:2.2,KICKOFF_READY_SECONDS:.65,OUT_OF_BOUNDS_SECONDS:.75},bo=[{x:-30.2,y:0,z:0},{x:-16.5,y:0,z:0},{x:-5.5,y:0,z:1.5},{x:9.5,y:0,z:-8.5},{x:11.5,y:0,z:7.5}],Kc=[{x:-30.2,y:0,z:0},{x:-17,y:0,z:0},{x:-8,y:0,z:0},{x:-2,y:0,z:-7.5},{x:-.7,y:0,z:.3}],Oi=[{id:"royal_navy",name:"Royal Navy",shortName:"HOM",primary:"#163876",secondary:"#e8c456",shorts:"#0f254f",socks:"#163876",numberColor:"#ffffff",gkPrimary:"#f59e0b",gkSecondary:"#1f2937",pattern:"shoulders"},{id:"crimson_united",name:"Crimson Red",shortName:"HOM",primary:"#b91c2b",secondary:"#f8fafc",shorts:"#f1f5f9",socks:"#b91c2b",numberColor:"#ffffff",gkPrimary:"#10b981",gkSecondary:"#064e3b",pattern:"solid"},{id:"ivory_gold",name:"Ivory Gold",shortName:"HOM",primary:"#f4f5f7",secondary:"#c8a24a",shorts:"#f4f5f7",socks:"#e5e7eb",numberColor:"#1a202c",gkPrimary:"#2563eb",gkSecondary:"#0f172a",pattern:"sash"},{id:"emerald_stripes",name:"Emerald Stripes",shortName:"HOM",primary:"#0f6b47",secondary:"#e2e8f0",shorts:"#0a3d29",socks:"#0f6b47",numberColor:"#ffffff",gkPrimary:"#f97316",gkSecondary:"#1e293b",pattern:"stripes"}],fr={ivory_away:{id:"ivory_away",name:"Away White",shortName:"AWY",primary:"#f1f5f9",secondary:"#0f172a",shorts:"#1e293b",socks:"#f1f5f9",numberColor:"#0f172a",gkPrimary:"#a3e635",gkSecondary:"#14532d",pattern:"shoulders"},cobalt_away:{id:"cobalt_away",name:"Away Cobalt",shortName:"AWY",primary:"#1d4ed8",secondary:"#93c5fd",shorts:"#1e3a8a",socks:"#1d4ed8",numberColor:"#ffffff",gkPrimary:"#f43f5e",gkSecondary:"#1f2937",pattern:"sash"}};function vg(n){return n==="crimson_united"?fr.ivory_away:n==="ivory_gold"?fr.cobalt_away:fr.ivory_away}const Cn=[{id:"messi",name:"Lionel Messi",shortName:"MESSI",number:10,nationality:"Argentina",countryCode:"ARG",flagColors:["#75aadb","#ffffff","#75aadb"],flagOrientation:"horizontal",position:"RW",positionGroup:"FWD",overall:91,preferredFoot:"left",stats:{pace:84,shooting:92,passing:94,dribbling:97,defending:38,physical:66},appearance:{heightCm:170,build:"slim",skinTone:"#d9a985",hairStyle:"classic_part",hairColor:"#3a281d",facialHair:"short_beard",facialHairColor:"#4a3121",bootColor:"#facc15",bootAccent:"#111827",headShape:"compact",browThickness:1.05,sleeveStyle:"short",sockHeight:"normal",strideStyle:"agile"},cardTier:"gold_icon"},{id:"ronaldo",name:"Cristiano Ronaldo",shortName:"RONALDO",number:7,nationality:"Portugal",countryCode:"POR",flagColors:["#006600","#ff0000","#ffcc00"],flagOrientation:"vertical",position:"ST",positionGroup:"FWD",overall:90,preferredFoot:"right",stats:{pace:87,shooting:95,passing:81,dribbling:86,defending:36,physical:84},appearance:{heightCm:187,build:"athletic",skinTone:"#c88f68",hairStyle:"slick_undercut",hairColor:"#1d1612",facialHair:"none",bootColor:"#f8fafc",bootAccent:"#ef4444",headShape:"angular",browThickness:1.15,sleeveStyle:"long",sockHeight:"high",strideStyle:"upright"},cardTier:"gold_icon"},{id:"mbappe",name:"Kylian Mbappé",shortName:"MBAPPÉ",number:9,nationality:"France",countryCode:"FRA",flagColors:["#002395","#ffffff","#ed2939"],flagOrientation:"vertical",position:"ST",positionGroup:"FWD",overall:92,preferredFoot:"right",stats:{pace:98,shooting:91,passing:83,dribbling:94,defending:39,physical:80},appearance:{heightCm:178,build:"athletic",skinTone:"#7b4b2a",hairStyle:"buzz",hairColor:"#141110",facialHair:"none",bootColor:"#38bdf8",bootAccent:"#f8fafc",headShape:"oval",browThickness:1,sleeveStyle:"short",sockHeight:"high",strideStyle:"agile"},cardTier:"platinum_elite"},{id:"haaland",name:"Erling Haaland",shortName:"HAALAND",number:9,nationality:"Norway",countryCode:"NOR",flagColors:["#ba0c2f","#ffffff","#00205b"],flagOrientation:"cross",position:"ST",positionGroup:"FWD",overall:92,preferredFoot:"left",stats:{pace:91,shooting:96,passing:72,dribbling:82,defending:46,physical:94},appearance:{heightCm:195,build:"towering",skinTone:"#f0ccb3",hairStyle:"ponytail_long",hairColor:"#e6c567",hairHighlight:"#f5dfa0",facialHair:"none",bootColor:"#ef4444",bootAccent:"#fef08a",headShape:"broad",browThickness:.9,sleeveStyle:"short",sockHeight:"normal",strideStyle:"powerful"},cardTier:"platinum_elite"},{id:"vinicius",name:"Vinícius Júnior",shortName:"VINÍCIUS JR",number:7,nationality:"Brazil",countryCode:"BRA",flagColors:["#009c3b","#ffdf00","#002776"],flagOrientation:"brazil",position:"LW",positionGroup:"FWD",overall:91,preferredFoot:"right",stats:{pace:96,shooting:86,passing:84,dribbling:95,defending:34,physical:72},appearance:{heightCm:176,build:"slim",skinTone:"#63391e",hairStyle:"short_twists",hairColor:"#120f0e",facialHair:"none",bootColor:"#f43f5e",bootAccent:"#fde047",headShape:"oval",browThickness:1,sleeveStyle:"short",sockHeight:"normal",strideStyle:"agile"},cardTier:"platinum_elite"},{id:"salah",name:"Mohamed Salah",shortName:"SALAH",number:11,nationality:"Egypt",countryCode:"EGY",flagColors:["#ce1126","#ffffff","#111111"],flagOrientation:"horizontal",position:"RW",positionGroup:"FWD",overall:90,preferredFoot:"left",stats:{pace:91,shooting:90,passing:85,dribbling:91,defending:47,physical:79},appearance:{heightCm:175,build:"athletic",skinTone:"#b67d54",hairStyle:"curly_voluminous",hairColor:"#1a1512",facialHair:"full_beard",facialHairColor:"#1a1512",bootColor:"#22c55e",bootAccent:"#ffffff",headShape:"compact",browThickness:1.2,sleeveStyle:"short",sockHeight:"normal",strideStyle:"agile"},cardTier:"gold_icon"},{id:"yamal",name:"Lamine Yamal",shortName:"YAMAL",number:19,nationality:"Spain",countryCode:"ESP",flagColors:["#aa151b","#f1bf00","#aa151b"],flagOrientation:"horizontal",position:"RW",positionGroup:"FWD",overall:88,preferredFoot:"left",stats:{pace:90,shooting:82,passing:86,dribbling:93,defending:38,physical:65},appearance:{heightCm:180,build:"slim",skinTone:"#9e6843",hairStyle:"curly_highlighted",hairColor:"#1b1613",hairHighlight:"#d9b562",facialHair:"none",bootColor:"#fb7185",bootAccent:"#ffffff",headShape:"oval",browThickness:1,sleeveStyle:"short",sockHeight:"normal",strideStyle:"gliding"},cardTier:"gold_rare"},{id:"kane",name:"Harry Kane",shortName:"KANE",number:9,nationality:"England",countryCode:"ENG",flagColors:["#ffffff","#cf142b","#ffffff"],flagOrientation:"cross",position:"ST",positionGroup:"FWD",overall:90,preferredFoot:"right",stats:{pace:76,shooting:95,passing:88,dribbling:84,defending:51,physical:86},appearance:{heightCm:188,build:"stocky",skinTone:"#ebbfa2",hairStyle:"classic_part",hairColor:"#7a5938",facialHair:"stubble",facialHairColor:"#8c6945",bootColor:"#ffffff",bootAccent:"#1d4ed8",headShape:"angular",browThickness:1,sleeveStyle:"short",sockHeight:"normal",strideStyle:"upright"},cardTier:"gold_icon"},{id:"lewandowski",name:"Robert Lewandowski",shortName:"LEWANDOWSKI",number:9,nationality:"Poland",countryCode:"POL",flagColors:["#ffffff","#dc143c","#dc143c"],flagOrientation:"horizontal",position:"ST",positionGroup:"FWD",overall:89,preferredFoot:"right",stats:{pace:80,shooting:94,passing:82,dribbling:86,defending:45,physical:86},appearance:{heightCm:185,build:"athletic",skinTone:"#e8bca0",hairStyle:"slick_undercut",hairColor:"#3a2b1e",facialHair:"stubble",facialHairColor:"#3f2f21",bootColor:"#f97316",bootAccent:"#111827",headShape:"angular",browThickness:1.1,sleeveStyle:"short",sockHeight:"normal",strideStyle:"upright"},cardTier:"gold_rare"},{id:"bellingham",name:"Jude Bellingham",shortName:"BELLINGHAM",number:5,nationality:"England",countryCode:"ENG",flagColors:["#ffffff","#cf142b","#ffffff"],flagOrientation:"cross",position:"CM",positionGroup:"MID",overall:90,preferredFoot:"right",stats:{pace:84,shooting:87,passing:87,dribbling:90,defending:80,physical:86},appearance:{heightCm:186,build:"athletic",skinTone:"#9d6844",hairStyle:"high_fade",hairColor:"#191411",facialHair:"none",bootColor:"#111827",bootAccent:"#facc15",headShape:"oval",browThickness:1.05,sleeveStyle:"short",sockHeight:"high",strideStyle:"gliding"},cardTier:"gold_icon"},{id:"debruyne",name:"Kevin De Bruyne",shortName:"DE BRUYNE",number:17,nationality:"Belgium",countryCode:"BEL",flagColors:["#111111","#fdda24","#ef3340"],flagOrientation:"vertical",position:"CAM",positionGroup:"MID",overall:90,preferredFoot:"right",stats:{pace:77,shooting:89,passing:96,dribbling:88,defending:66,physical:80},appearance:{heightCm:181,build:"stocky",skinTone:"#f2cab0",hairStyle:"classic_part",hairColor:"#c97a38",hairHighlight:"#df9b57",facialHair:"none",bootColor:"#0ea5e9",bootAccent:"#ffffff",headShape:"broad",browThickness:.9,sleeveStyle:"short",sockHeight:"normal",strideStyle:"powerful"},cardTier:"gold_icon"},{id:"saka",name:"Bukayo Saka",shortName:"SAKA",number:7,nationality:"England",countryCode:"ENG",flagColors:["#ffffff","#cf142b","#ffffff"],flagOrientation:"cross",position:"RW",positionGroup:"MID",overall:89,preferredFoot:"left",stats:{pace:89,shooting:85,passing:87,dribbling:91,defending:62,physical:76},appearance:{heightCm:178,build:"athletic",skinTone:"#5e361c",hairStyle:"high_fade",hairColor:"#13100f",facialHair:"none",bootColor:"#f59e0b",bootAccent:"#111827",headShape:"compact",browThickness:1,sleeveStyle:"short",sockHeight:"normal",strideStyle:"agile"},cardTier:"gold_rare"},{id:"rodri",name:"Rodri",shortName:"RODRI",number:16,nationality:"Spain",countryCode:"ESP",flagColors:["#aa151b","#f1bf00","#aa151b"],flagOrientation:"horizontal",position:"CDM",positionGroup:"MID",overall:91,preferredFoot:"right",stats:{pace:74,shooting:84,passing:91,dribbling:85,defending:89,physical:88},appearance:{heightCm:191,build:"towering",skinTone:"#e0b392",hairStyle:"classic_part",hairColor:"#36261a",facialHair:"stubble",facialHairColor:"#36261a",bootColor:"#1e293b",bootAccent:"#38bdf8",headShape:"angular",browThickness:1.15,sleeveStyle:"short",sockHeight:"normal",strideStyle:"upright"},cardTier:"platinum_elite"},{id:"vandijk",name:"Virgil van Dijk",shortName:"VAN DIJK",number:4,nationality:"Netherlands",countryCode:"NED",flagColors:["#ae1c28","#ffffff","#21468b"],flagOrientation:"horizontal",position:"CB",positionGroup:"DEF",overall:91,preferredFoot:"right",stats:{pace:82,shooting:64,passing:79,dribbling:75,defending:93,physical:92},appearance:{heightCm:195,build:"towering",skinTone:"#996441",hairStyle:"topknot_bun",hairColor:"#161210",facialHair:"goatee",facialHairColor:"#161210",bootColor:"#f8fafc",bootAccent:"#0ea5e9",headShape:"broad",browThickness:1.15,sleeveStyle:"short",sockHeight:"high",strideStyle:"powerful"},cardTier:"platinum_elite"},{id:"saliba",name:"William Saliba",shortName:"SALIBA",number:2,nationality:"France",countryCode:"FRA",flagColors:["#002395","#ffffff","#ed2939"],flagOrientation:"vertical",position:"CB",positionGroup:"DEF",overall:89,preferredFoot:"right",stats:{pace:85,shooting:48,passing:76,dribbling:76,defending:90,physical:87},appearance:{heightCm:192,build:"towering",skinTone:"#61381e",hairStyle:"high_fade",hairColor:"#12100f",facialHair:"none",bootColor:"#facc15",bootAccent:"#111827",headShape:"oval",browThickness:1,sleeveStyle:"short",sockHeight:"normal",strideStyle:"gliding"},cardTier:"gold_rare"},{id:"hakimi",name:"Achraf Hakimi",shortName:"HAKIMI",number:2,nationality:"Morocco",countryCode:"MAR",flagColors:["#c1272d","#006233","#c1272d"],flagOrientation:"horizontal",position:"RB",positionGroup:"DEF",overall:88,preferredFoot:"right",stats:{pace:94,shooting:76,passing:83,dribbling:84,defending:83,physical:81},appearance:{heightCm:181,build:"athletic",skinTone:"#c38b62",hairStyle:"slick_undercut",hairColor:"#171311",facialHair:"short_beard",facialHairColor:"#1c1714",bootColor:"#a3e635",bootAccent:"#0f172a",headShape:"angular",browThickness:1.15,sleeveStyle:"short",sockHeight:"normal",strideStyle:"agile"},cardTier:"gold_rare"},{id:"courtois",name:"Thibaut Courtois",shortName:"COURTOIS",number:1,nationality:"Belgium",countryCode:"BEL",flagColors:["#111111","#fdda24","#ef3340"],flagOrientation:"vertical",position:"GK",positionGroup:"GK",overall:90,preferredFoot:"left",stats:{pace:68,shooting:72,passing:79,dribbling:74,defending:91,physical:88},appearance:{heightCm:200,build:"towering",skinTone:"#e8bea2",hairStyle:"classic_part",hairColor:"#36271c",facialHair:"stubble",facialHairColor:"#3d2c20",bootColor:"#f8fafc",bootAccent:"#111827",headShape:"angular",browThickness:1.05,sleeveStyle:"long",sockHeight:"high",strideStyle:"upright"},cardTier:"gold_icon"},{id:"alisson",name:"Alisson Becker",shortName:"ALISSON",number:1,nationality:"Brazil",countryCode:"BRA",flagColors:["#009c3b","#ffdf00","#002776"],flagOrientation:"brazil",position:"GK",positionGroup:"GK",overall:90,preferredFoot:"right",stats:{pace:72,shooting:74,passing:85,dribbling:76,defending:90,physical:87},appearance:{heightCm:193,build:"athletic",skinTone:"#d9a480",hairStyle:"swept_full",hairColor:"#3a2618",facialHair:"full_beard",facialHairColor:"#3a2618",bootColor:"#22c55e",bootAccent:"#111827",headShape:"broad",browThickness:1.15,sleeveStyle:"long",sockHeight:"high",strideStyle:"powerful"},cardTier:"gold_icon"}],gs=Object.fromEntries(Cn.map(n=>[n.id,n]));function So(n){const t=gs[n];if(!t)throw new Error(`Unknown footballer id: ${n}`);return t}const nh=["alisson","vandijk","bellingham","messi","mbappe"];function xg(n){const t=new Set(n),e=Cn.filter(h=>!t.has(h.id)),i=(h,u)=>{const d=e.filter(m=>m.positionGroup===h&&!s.has(m.id)).sort((m,_)=>_.overall-m.overall),f=[];for(let m=0;m<u&&m<d.length;m++)f.push(d[m]),s.add(d[m].id);return f},s=new Set,o=i("GK",1),r=i("DEF",1),a=i("MID",1),c=i("FWD",2),l=[...o,...r,...a,...c];for(const h of e){if(l.length>=5)break;s.has(h.id)||(l.push(h),s.add(h.id))}return l.slice(0,5)}const yg=[{name:"World Icons",ids:["alisson","vandijk","debruyne","messi","ronaldo"]},{name:"Next Gen Pace",ids:["courtois","hakimi","bellingham","yamal","mbappe"]},{name:"Power & Precision",ids:["courtois","saliba","rodri","vinicius","haaland"]},{name:"Premier Elite",ids:["alisson","vandijk","saka","salah","kane"]}];class Sg{ctx=null;masterGain=null;whiteNoiseBuffer=null;pinkNoiseBuffer=null;muted=!1;lastBounceMs=0;unlock(){const t=this.ensureContext();t&&t.state==="suspended"&&t.resume().catch(()=>{})}setMuted(t){if(this.muted=t,this.masterGain&&this.ctx){const e=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(e),this.masterGain.gain.setTargetAtTime(t?0:.85,e,.015)}}isMuted(){return this.muted}toggleMute(){return this.setMuted(!this.muted),this.muted}playEvent(t){if(this.muted)return;const e=this.ensureContext();if(!e||!this.masterGain)return;e.state==="suspended"&&e.resume().catch(()=>{});const i=Math.max(.08,Math.min(1,Number.isFinite(t.intensity)?t.intensity:.6)),s=e.currentTime;switch(t.type){case"kick_pass":this.playKickPass(e,s,i);break;case"kick_shot":this.playKickShot(e,s,i);break;case"post_hit":this.playPostHit(e,s,i);break;case"net_ripple":this.playNetRipple(e,s,i);break;case"goal_cheer":this.playGoalCheer(e,s,i);break;case"whistle_short":this.playWhistle(e,s,.22,i);break;case"whistle_long":this.playWhistle(e,s,.68,i);break;case"tackle":this.playTackle(e,s,i);break;case"save":this.playSave(e,s,i);break;case"bounce":{const o=performance.now();if(o-this.lastBounceMs<48)return;this.lastBounceMs=o,this.playBounce(e,s,i);break}}}ensureContext(){if(this.ctx)return this.ctx;if(typeof window>"u")return null;const t=window.AudioContext??window.webkitAudioContext;if(!t)return null;try{const e=new t,i=e.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=18,i.ratio.value=6,i.attack.value=.004,i.release.value=.14;const s=e.createGain();return s.gain.value=this.muted?0:.85,s.connect(i),i.connect(e.destination),this.ctx=e,this.masterGain=s,this.whiteNoiseBuffer=this.createWhiteNoiseBuffer(e,2),this.pinkNoiseBuffer=this.createPinkNoiseBuffer(e,3.5),e}catch{return null}}createWhiteNoiseBuffer(t,e){const i=Math.floor(t.sampleRate*e),s=t.createBuffer(1,i,t.sampleRate),o=s.getChannelData(0);for(let r=0;r<i;r++)o[r]=Math.random()*2-1;return s}createPinkNoiseBuffer(t,e){const i=Math.floor(t.sampleRate*e),s=t.createBuffer(1,i,t.sampleRate),o=s.getChannelData(0);let r=0,a=0,c=0,l=0,h=0,u=0,d=0;for(let f=0;f<i;f++){const m=Math.random()*2-1;r=.99886*r+m*.0555179,a=.99332*a+m*.0750759,c=.969*c+m*.153852,l=.8665*l+m*.3104856,h=.55*h+m*.5329522,u=-.7616*u-m*.016898;const _=(r+a+c+l+h+u+d+m*.5362)*.11;d=m*.115926,o[f]=Math.max(-1,Math.min(1,_))}return s}playKickPass(t,e,i){const s=this.masterGain,o=.42+i*.38,r=t.createOscillator(),a=t.createGain();if(r.type="sine",r.frequency.setValueAtTime(112+i*18,e),r.frequency.exponentialRampToValueAtTime(44,e+.09),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.55*o,e+.005),a.gain.exponentialRampToValueAtTime(.001,e+.105),r.connect(a),a.connect(s),r.start(e),r.stop(e+.115),this.whiteNoiseBuffer){const c=t.createBufferSource();c.buffer=this.whiteNoiseBuffer;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1180,e),l.Q.value=2;const h=t.createGain();h.gain.setValueAtTime(.001,e),h.gain.linearRampToValueAtTime(.24*o,e+.003),h.gain.exponentialRampToValueAtTime(.001,e+.028),c.connect(l),l.connect(h),h.connect(s),c.start(e,Math.random()*.5,.04)}}playKickShot(t,e,i){const s=this.masterGain,o=.45+i*.55,r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(150+i*35,e),r.frequency.exponentialRampToValueAtTime(36,e+.155),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.75*o,e+.004),a.gain.exponentialRampToValueAtTime(.001,e+.185),r.connect(a),a.connect(s),r.start(e),r.stop(e+.2);const c=t.createOscillator(),l=t.createGain();if(c.type="triangle",c.frequency.setValueAtTime(240+i*40,e),c.frequency.exponentialRampToValueAtTime(62,e+.085),l.gain.setValueAtTime(.001,e),l.gain.linearRampToValueAtTime(.35*o,e+.004),l.gain.exponentialRampToValueAtTime(.001,e+.095),c.connect(l),l.connect(s),c.start(e),c.stop(e+.105),this.whiteNoiseBuffer){const h=t.createBufferSource();h.buffer=this.whiteNoiseBuffer;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1650+i*500,e),u.Q.value=1.3;const d=t.createGain();d.gain.setValueAtTime(.001,e),d.gain.linearRampToValueAtTime(.42*o,e+.003),d.gain.exponentialRampToValueAtTime(.001,e+.048),h.connect(u),u.connect(d),d.connect(s),h.start(e,Math.random()*.6,.06)}}playPostHit(t,e,i){const s=this.masterGain,o=.45+i*.55,r=[{freq:520,type:"triangle",amp:.36,decay:.58},{freq:874,type:"sine",amp:.28,decay:.44},{freq:1412,type:"triangle",amp:.2,decay:.31},{freq:2180,type:"sine",amp:.1,decay:.16}],a=t.createOscillator(),c=t.createGain();a.frequency.value=345,c.gain.setValueAtTime(110*o,e),c.gain.exponentialRampToValueAtTime(4,e+.18),a.connect(c),a.start(e),a.stop(e+.22);for(let u=0;u<r.length;u++){const d=r[u],f=t.createOscillator(),m=t.createGain();f.type=d.type,f.frequency.setValueAtTime(d.freq,e),u===0&&c.connect(f.frequency),m.gain.setValueAtTime(.001,e),m.gain.linearRampToValueAtTime(d.amp*o,e+.002),m.gain.exponentialRampToValueAtTime(8e-4,e+d.decay),f.connect(m),m.connect(s),f.start(e),f.stop(e+d.decay+.02)}const l=t.createOscillator(),h=t.createGain();l.type="sine",l.frequency.setValueAtTime(160,e),l.frequency.exponentialRampToValueAtTime(52,e+.06),h.gain.setValueAtTime(.32*o,e),h.gain.exponentialRampToValueAtTime(.001,e+.07),l.connect(h),h.connect(s),l.start(e),l.stop(e+.08)}playNetRipple(t,e,i){if(!this.pinkNoiseBuffer)return;const s=this.masterGain,o=.4+i*.5,r=t.createBufferSource();r.buffer=this.pinkNoiseBuffer;const a=t.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(1350,e);const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(2400,e),c.frequency.exponentialRampToValueAtTime(1150,e+.28),c.Q.value=1.1;const l=t.createGain();l.gain.setValueAtTime(.001,e),l.gain.linearRampToValueAtTime(.34*o,e+.035),l.gain.linearRampToValueAtTime(.18*o,e+.12),l.gain.linearRampToValueAtTime(.24*o,e+.17),l.gain.exponentialRampToValueAtTime(.001,e+.34),r.connect(a),a.connect(c),c.connect(l),l.connect(s),r.start(e,Math.random()*1.2,.38)}playGoalCheer(t,e,i){const s=this.masterGain,o=.55+i*.45,r=3.1;if(this.pinkNoiseBuffer){const l=t.createBufferSource();l.buffer=this.pinkNoiseBuffer;const h=t.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(340,e),h.frequency.linearRampToValueAtTime(520,e+.45),h.frequency.linearRampToValueAtTime(390,e+r),h.Q.value=.75;const u=t.createGain();u.gain.setValueAtTime(.001,e),u.gain.linearRampToValueAtTime(.46*o,e+.28),u.gain.setValueAtTime(.42*o,e+1.5),u.gain.exponentialRampToValueAtTime(.001,e+r),l.connect(h),h.connect(u),u.connect(s),l.start(e,0,r+.05);const d=t.createBufferSource();d.buffer=this.pinkNoiseBuffer;const f=t.createBiquadFilter();f.type="bandpass",f.frequency.setValueAtTime(980,e),f.frequency.linearRampToValueAtTime(1450,e+.35),f.frequency.linearRampToValueAtTime(900,e+r),f.Q.value=1.05;const m=t.createGain();m.gain.setValueAtTime(.001,e),m.gain.linearRampToValueAtTime(.32*o,e+.22),m.gain.setValueAtTime(.28*o,e+1.35),m.gain.exponentialRampToValueAtTime(.001,e+r-.15),d.connect(f),f.connect(m),m.connect(s),d.start(e,.3,r+.05)}const a=[293.66,369.99,440,587.33],c=t.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(1350,e),c.connect(s);for(let l=0;l<a.length;l++){const h=t.createOscillator(),u=t.createGain();h.type=l%2===0?"triangle":"sine",h.frequency.setValueAtTime(a[l],e),u.gain.setValueAtTime(5e-4,e),u.gain.linearRampToValueAtTime(.032*o,e+.25+l*.04),u.gain.exponentialRampToValueAtTime(5e-4,e+2.1),h.connect(u),u.connect(c),h.start(e),h.stop(e+2.2)}}playWhistle(t,e,i,s){const o=this.masterGain,r=.45+s*.4,a=t.createOscillator(),c=t.createOscillator();a.type="sine",c.type="triangle",a.frequency.setValueAtTime(2760,e),a.frequency.linearRampToValueAtTime(2910,e+.045),a.frequency.setValueAtTime(2880,e+i*.7),a.frequency.linearRampToValueAtTime(2810,e+i),c.frequency.setValueAtTime(2935,e),c.frequency.linearRampToValueAtTime(3095,e+.045),c.frequency.setValueAtTime(3065,e+i*.7),c.frequency.linearRampToValueAtTime(2990,e+i);const l=t.createOscillator(),h=t.createGain();l.type="sine",l.frequency.value=32,h.gain.value=.34;const u=t.createGain();u.gain.value=.66,l.connect(h),h.connect(u.gain);const d=t.createGain();d.gain.setValueAtTime(.001,e),d.gain.linearRampToValueAtTime(.26*r,e+.022),d.gain.setValueAtTime(.24*r,Math.max(e+.03,e+i-.045)),d.gain.exponentialRampToValueAtTime(.001,e+i);const f=t.createGain();f.gain.value=.7;const m=t.createGain();if(m.gain.value=.3,a.connect(f),c.connect(m),f.connect(u),m.connect(u),u.connect(d),d.connect(o),a.start(e),c.start(e),l.start(e),a.stop(e+i+.02),c.stop(e+i+.02),l.stop(e+i+.02),this.whiteNoiseBuffer){const _=t.createBufferSource();_.buffer=this.whiteNoiseBuffer;const g=t.createBiquadFilter();g.type="bandpass",g.frequency.value=3300,g.Q.value=3.5;const p=t.createGain();p.gain.setValueAtTime(.001,e),p.gain.linearRampToValueAtTime(.07*r,e+.02),p.gain.exponentialRampToValueAtTime(.001,e+i),_.connect(g),g.connect(p),p.connect(o),_.start(e,Math.random()*.4,i+.02)}}playTackle(t,e,i){const s=this.masterGain,o=.45+i*.5;if(this.pinkNoiseBuffer){const c=t.createBufferSource();c.buffer=this.pinkNoiseBuffer;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1050,e),l.frequency.exponentialRampToValueAtTime(360,e+.17),l.Q.value=.9;const h=t.createGain();h.gain.setValueAtTime(.001,e),h.gain.linearRampToValueAtTime(.36*o,e+.018),h.gain.exponentialRampToValueAtTime(.001,e+.19),c.connect(l),l.connect(h),h.connect(s),c.start(e,Math.random()*.9,.22)}const r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(98,e),r.frequency.exponentialRampToValueAtTime(38,e+.1),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.34*o,e+.006),a.gain.exponentialRampToValueAtTime(.001,e+.115),r.connect(a),a.connect(s),r.start(e),r.stop(e+.13)}playSave(t,e,i){const s=this.masterGain,o=.5+i*.5;if(this.whiteNoiseBuffer){const c=t.createBufferSource();c.buffer=this.whiteNoiseBuffer;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1450,e),l.Q.value=1.6;const h=t.createGain();h.gain.setValueAtTime(.001,e),h.gain.linearRampToValueAtTime(.45*o,e+.003),h.gain.exponentialRampToValueAtTime(.001,e+.035),c.connect(l),l.connect(h),h.connect(s),c.start(e,Math.random()*.5,.05)}const r=t.createOscillator(),a=t.createGain();r.type="triangle",r.frequency.setValueAtTime(165,e),r.frequency.exponentialRampToValueAtTime(56,e+.11),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.42*o,e+.004),a.gain.exponentialRampToValueAtTime(.001,e+.12),r.connect(a),a.connect(s),r.start(e),r.stop(e+.13)}playBounce(t,e,i){const s=this.masterGain,o=Math.min(1,i),r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(84+o*20,e),r.frequency.exponentialRampToValueAtTime(40,e+.06),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(.24*o,e+.004),a.gain.exponentialRampToValueAtTime(.001,e+.072),r.connect(a),a.connect(s),r.start(e),r.stop(e+.08)}}const Ze=.94,Mg={agile:{hipAmpMult:.95,kneeAmpMult:1.05,armAmpMult:1.02,bobMult:.92,leanOffset:.04,crouchOffset:-.025,armSpread:.16,twistMult:1.05},upright:{hipAmpMult:1.02,kneeAmpMult:.96,armAmpMult:.96,bobMult:.88,leanOffset:-.075,crouchOffset:.012,armSpread:.1,twistMult:.92},powerful:{hipAmpMult:1.08,kneeAmpMult:1.12,armAmpMult:1.24,bobMult:1.12,leanOffset:.055,crouchOffset:-.012,armSpread:.18,twistMult:1.22},gliding:{hipAmpMult:1.12,kneeAmpMult:.94,armAmpMult:.92,bobMult:.72,leanOffset:-.02,crouchOffset:0,armSpread:.12,twistMult:.88}},Tg={pelvisX:0,pelvisY:Ze,pelvisZ:0,pelvisRotX:0,pelvisRotY:0,pelvisRotZ:0,torsoRotX:0,torsoRotY:0,torsoRotZ:0,headRotX:0,headRotY:0,headRotZ:0,lShoulderX:0,lShoulderY:0,lShoulderZ:.12,lElbowX:-.3,rShoulderX:0,rShoulderY:0,rShoulderZ:-.12,rElbowX:-.3,lHipX:0,lHipY:0,lHipZ:0,lKneeX:.1,lAnkleX:0,rHipX:0,rHipY:0,rHipZ:0,rKneeX:.1,rAnkleX:0,stiffness:15};function Eg(n){n.pelvisX=0,n.pelvisY=Ze,n.pelvisZ=0,n.pelvisRotX=0,n.pelvisRotY=0,n.pelvisRotZ=0,n.torsoRotX=0,n.torsoRotY=0,n.torsoRotZ=0,n.headRotX=0,n.headRotY=0,n.headRotZ=0,n.lShoulderX=0,n.lShoulderY=0,n.lShoulderZ=.12,n.lElbowX=-.3,n.rShoulderX=0,n.rShoulderY=0,n.rShoulderZ=-.12,n.rElbowX=-.3,n.lHipX=0,n.lHipY=0,n.lHipZ=0,n.lKneeX=.1,n.lAnkleX=0,n.rHipX=0,n.rHipY=0,n.rHipZ=0,n.rKneeX=.1,n.rAnkleX=0,n.stiffness=15}function ki(n,t,e){return Math.max(t,Math.min(e,n))}function ae(n,t,e){return n+(t-n)*e}function us(n){return n.actionDuration<=1e-4?.5:ki(1-n.actionTimer/n.actionDuration,0,1)}function ds(n,t,e,i){const s=ki(t.speed/Math.max(t.maxSpeed,1),.18,1.15),o=t.animPhase,r=ki(t.turnLean,-1,1);let a=.48,c=.65,l=.48,h=-.75,u=.12,d=.032,f=-.025,m=e.armSpread;i==="jog"?(a=.42+s*.18,c=.52+s*.25,l=.4+s*.2,h=-.78,u=.1+s*.06,d=.03,f=-.02):i==="run"?(a=.6+s*.26,c=.72+s*.34,l=.62+s*.28,h=-1.05,u=.18+s*.08,d=.044,f=-.032):i==="sprint"?(a=.84+s*.28,c=.95+s*.38,l=.88+s*.32,h=-1.28,u=.28+s*.09,d=.058,f=-.04,m+=.06):(a=.46+s*.26,c=.62+s*.3,l=.44+s*.24,h=-.92,u=.22+s*.06,d=.028,f=-.06,m+=.14),a*=e.hipAmpMult,c*=e.kneeAmpMult,l*=e.armAmpMult,d*=e.bobMult,u=Math.max(.05,u+e.leanOffset),f+=e.crouchOffset;const _=Math.sin(o),g=Math.cos(o),p=-_,y=-g,v=Math.abs(_)*d;n.pelvisY=Ze+f+v-Math.abs(r)*.03,n.pelvisRotY=_*.14*e.twistMult,n.pelvisRotZ=-r*.14,n.pelvisRotX=u*.28,n.torsoRotX=u*.72,n.torsoRotY=-_*(.2+s*.12)*e.twistMult,n.torsoRotZ=-r*.16,n.headRotX=i==="dribble"?-u*.35+.1:-u*.65,n.headRotY=-n.torsoRotY*.55-r*.12,n.headRotZ=r*.14,n.lHipX=-_*a-.08,n.rHipX=-p*a-.08,n.lKneeX=.16+Math.max(0,g)*c+Math.max(0,-_)*(c*.42),n.rKneeX=.16+Math.max(0,y)*c+Math.max(0,-p)*(c*.42),n.lAnkleX=-_*.22+Math.max(0,-_)*.18,n.rAnkleX=-p*.22+Math.max(0,-p)*.18,n.lShoulderX=_*l,n.rShoulderX=p*l,n.lShoulderZ=m+Math.abs(r)*.08,n.rShoulderZ=-(m+Math.abs(r)*.08),n.lShoulderY=-_*.12,n.rShoulderY=-p*.12,n.lElbowX=h-Math.max(0,-_)*.38,n.rElbowX=h-Math.max(0,-p)*.38,n.stiffness=i==="sprint"?19:16.5}function co(n,t,e,i,s,o,r,a,c,l){t==="left"?(n.lHipX=e,n.lHipY=i,n.lHipZ=s,n.lKneeX=o,n.lAnkleX=r,n.rHipX=a,n.rKneeX=c,n.rAnkleX=l):(n.rHipX=e,n.rHipY=-i,n.rHipZ=-s,n.rKneeX=o,n.rAnkleX=r,n.lHipX=a,n.lKneeX=c,n.lAnkleX=l)}function lo(n,t,e,i,s,o,r,a){t==="left"?(n.rShoulderX=e,n.rShoulderZ=-i,n.rElbowX=s,n.lShoulderX=o,n.lShoulderZ=r,n.lElbowX=a):(n.lShoulderX=e,n.lShoulderZ=i,n.lElbowX=s,n.rShoulderX=o,n.rShoulderZ=-r,n.rElbowX=a)}function wg(n,t,e,i){n.root.position.set(t.position.x,t.position.y,t.position.z),n.root.rotation.y=t.facing;const s=ki(e,.001,.1),o=Mg[n.profile.appearance.strideStyle],r=Tg;Eg(r);const a=t.kickLeg==="left"?1:-1;switch(t.actionState){case"idle":{const f=Math.sin(i*2.5+t.slotIndex*1.1),m=Math.sin(i*.95+t.slotIndex*2.3);r.pelvisY=Ze-.018+o.crouchOffset*.5+f*.006,r.torsoRotX=.06+o.leanOffset*.4+f*.015,r.headRotX=-.04,r.headRotY=m*.1,r.lHipX=-.06,r.rHipX=-.06,r.lHipZ=.04,r.rHipZ=-.04,r.lKneeX=.13,r.rKneeX=.13,r.lAnkleX=-.07,r.rAnkleX=-.07,r.lShoulderX=.05,r.rShoulderX=.05,r.lShoulderZ=.14+f*.015,r.rShoulderZ=-(.14+f*.015),r.lElbowX=-.36,r.rElbowX=-.36,r.stiffness=11;break}case"jog":ds(r,t,o,"jog");break;case"run":ds(r,t,o,"run");break;case"sprint":ds(r,t,o,"sprint");break;case"dribble":ds(r,t,o,"dribble");break;case"pass":{const f=us(t);let m=0,_=.2,g=.35;if(f<.3){const p=f/.3;m=.52*p,_=.25+.52*p,g=.18*p}else if(f<.72){const p=(f-.3)/.42,y=1-Math.pow(1-p,3);m=.52-1.32*y,_=.77-.62*y,g=.42}else{const p=(f-.72)/.28;m=-.8*(1-p),_=.15+.08*p,g=.42*(1-p)}r.pelvisY=Ze-.045,r.torsoRotX=.16,r.torsoRotY=a*(m*.48),r.torsoRotZ=a*.12,r.headRotX=-.05,r.headRotY=-r.torsoRotY*.7,co(r,t.kickLeg,m,g,.1,_,.15,-.16,.32,-.14),lo(r,t.kickLeg,-.35,.68,-.52,.32,.32,-.68),r.stiffness=22;break}case"shoot_charge":{const f=ki(t.shotCharge,0,1);r.pelvisY=Ze-.055-f*.03,r.pelvisRotY=a*(.14+f*.16),r.torsoRotX=.16+f*.08,r.torsoRotY=a*(.22+f*.42),r.torsoRotZ=a*(.12+f*.12),r.headRotX=.04,r.headRotY=-r.torsoRotY*.75;const m=.38+f*.92,_=.48+f*1.15;co(r,t.kickLeg,m,.08,.08,_,.28,-.2,.38,-.16),lo(r,t.kickLeg,-.55-f*.32,.72+f*.56,-.38,.48+f*.35,.34,-.85),r.stiffness=18;break}case"shoot_release":{const f=us(t),m=f<.35?1-Math.pow(1-f/.35,3):Math.max(0,1-(f-.35)/.65);r.pelvisY=Ze-.04+m*.04,r.pelvisRotX=-.12*m,r.pelvisRotY=-a*.22*m,r.torsoRotX=.12-.24*m,r.torsoRotY=-a*.58*m,r.torsoRotZ=a*.28*m,r.headRotX=.08*m,r.headRotY=-r.torsoRotY*.7;const _=-1.32*m,g=.1+.18*(1-m),p=.48*m;co(r,t.kickLeg,_,-.14*m,.06,g,p,-.1,.22,-.1),lo(r,t.kickLeg,.72*m,.58*m+.18,-.95,-.85*m,.38*m+.15,-.65),r.stiffness=26;break}case"tackle":{const f=us(t),m=f<.2?f/.2:f<.72?1:Math.max(0,1-(f-.72)/.28);r.pelvisY=Ze-.5*m,r.pelvisZ=.12*m,r.pelvisRotX=-.78*m,r.pelvisRotY=a*.26*m,r.pelvisRotZ=-a*.42*m,r.torsoRotX=.34*m,r.torsoRotY=-a*.22*m,r.headRotX=.36*m,co(r,t.kickLeg,-.88*m,.18*m,.16*m,.1,.32*m,.26*m,1.52*m,.25*m),lo(r,t.kickLeg,.58*m,.78*m+.15,-.32,-.62*m,.85*m+.15,-.55),r.stiffness=22;break}case"stunned":{const m=1-us(t),_=Math.sin(i*19)*m;r.pelvisY=Ze-.08*m,r.torsoRotX=-.26*m,r.torsoRotZ=_*.22,r.torsoRotY=_*.25,r.headRotX=-.22*m,r.headRotZ=-_*.25,r.lHipX=-.22*m+_*.15,r.rHipX=.16*m-_*.15,r.lKneeX=.38*m+.12,r.rKneeX=.32*m+.12,r.lShoulderX=-.45*m+_*.3,r.rShoulderX=-.35*m-_*.3,r.lShoulderZ=.65*m+.2,r.rShoulderZ=-(.65*m+.2),r.lElbowX=-.5,r.rElbowX=-.5,r.stiffness=16;break}case"gk_ready":{const f=Math.sin(i*5.2)*.016;r.pelvisY=Ze-.165+f,r.torsoRotX=.34,r.headRotX=-.28,r.lHipX=-.5,r.rHipX=-.5,r.lHipZ=.17,r.rHipZ=-.17,r.lKneeX=.78,r.rKneeX=.78,r.lAnkleX=-.28,r.rAnkleX=-.28,r.lShoulderX=-.62,r.rShoulderX=-.62,r.lShoulderZ=.44,r.rShoulderZ=-.44,r.lShoulderY=-.22,r.rShoulderY=.22,r.lElbowX=-.88+f*2.5,r.rElbowX=-.88+f*2.5,r.stiffness=14;break}case"gk_dive_left":case"gk_dive_right":{const f=us(t),m=f<.18?f/.18:f<.76?1:Math.max(0,1-(f-.76)/.24),_=Math.sin(Math.min(1,f*1.12)*Math.PI),g=t.actionState==="gk_dive_left",p=g?1:-1;r.pelvisX=p*.2*m,r.pelvisY=Ze-.28*m+_*.24,r.pelvisRotZ=-p*1.42*m,r.pelvisRotX=.12*m,r.torsoRotX=-.06*m,r.torsoRotY=p*.16*m,r.headRotZ=p*.22*m,r.headRotX=-.18*m,r.lShoulderX=-2.68*m,r.rShoulderX=-2.58*m,r.lShoulderZ=.24*m+.1,r.rShoulderZ=-(.24*m+.1),r.lElbowX=-.14,r.rElbowX=-.14,g?(r.lHipX=-.14*m,r.lKneeX=.28*m,r.rHipX=.24*m,r.rKneeX=.52*m,r.rHipZ=-.18*m):(r.rHipX=-.14*m,r.rKneeX=.28*m,r.lHipX=.24*m,r.lKneeX=.52*m,r.lHipZ=.18*m),r.lAnkleX=.35*m,r.rAnkleX=.35*m,r.stiffness=24;break}case"celebrate":{const f=t.speed>1.1,m=Math.sin(i*6.5+t.slotIndex),_=Math.abs(Math.sin(i*5.2+t.slotIndex));if(f)ds(r,t,o,"run"),r.pelvisY+=_*.06,r.torsoRotX=-.04,r.torsoRotZ=m*.14,r.headRotX=-.16,r.lShoulderX=-.18,r.rShoulderX=-.18,r.lShoulderZ=1.38+m*.12,r.rShoulderZ=-(1.38-m*.12),r.lElbowX=-.18,r.rElbowX=-.18;else{r.pelvisY=Ze-.04+_*.24,r.torsoRotX=-.12,r.torsoRotY=m*.22,r.headRotX=-.24,r.lHipX=-.24*_,r.rHipX=-.18*_,r.lHipZ=.14,r.rHipZ=-.14,r.lKneeX=.18+_*.55,r.rKneeX=.18+_*.45;const g=Math.sin(i*11+t.slotIndex)*.28;r.lShoulderX=-2.35+g,r.rShoulderX=-2.35-g,r.lShoulderZ=.58,r.rShoulderZ=-.58,r.lElbowX=-.58+g*.4,r.rElbowX=-.58-g*.4}r.stiffness=14;break}default:{t.actionState;break}}const c=1-Math.exp(-r.stiffness*s);n.pelvis.position.x=ae(n.pelvis.position.x,r.pelvisX,c),n.pelvis.position.y=ae(n.pelvis.position.y,r.pelvisY,c),n.pelvis.position.z=ae(n.pelvis.position.z,r.pelvisZ,c),n.pelvis.rotation.x=ae(n.pelvis.rotation.x,r.pelvisRotX,c),n.pelvis.rotation.y=ae(n.pelvis.rotation.y,r.pelvisRotY,c),n.pelvis.rotation.z=ae(n.pelvis.rotation.z,r.pelvisRotZ,c),n.torso.rotation.x=ae(n.torso.rotation.x,r.torsoRotX,c),n.torso.rotation.y=ae(n.torso.rotation.y,r.torsoRotY,c),n.torso.rotation.z=ae(n.torso.rotation.z,r.torsoRotZ,c),n.headGroup.rotation.x=ae(n.headGroup.rotation.x,r.headRotX,c),n.headGroup.rotation.y=ae(n.headGroup.rotation.y,r.headRotY,c),n.headGroup.rotation.z=ae(n.headGroup.rotation.z,r.headRotZ,c),n.leftShoulder.rotation.x=ae(n.leftShoulder.rotation.x,r.lShoulderX,c),n.leftShoulder.rotation.y=ae(n.leftShoulder.rotation.y,r.lShoulderY,c),n.leftShoulder.rotation.z=ae(n.leftShoulder.rotation.z,r.lShoulderZ,c),n.leftElbow.rotation.x=ae(n.leftElbow.rotation.x,r.lElbowX,c),n.rightShoulder.rotation.x=ae(n.rightShoulder.rotation.x,r.rShoulderX,c),n.rightShoulder.rotation.y=ae(n.rightShoulder.rotation.y,r.rShoulderY,c),n.rightShoulder.rotation.z=ae(n.rightShoulder.rotation.z,r.rShoulderZ,c),n.rightElbow.rotation.x=ae(n.rightElbow.rotation.x,r.rElbowX,c),n.leftHip.rotation.x=ae(n.leftHip.rotation.x,r.lHipX,c),n.leftHip.rotation.y=ae(n.leftHip.rotation.y,r.lHipY,c),n.leftHip.rotation.z=ae(n.leftHip.rotation.z,r.lHipZ,c),n.leftKnee.rotation.x=ae(n.leftKnee.rotation.x,r.lKneeX,c),n.leftAnkle.rotation.x=ae(n.leftAnkle.rotation.x,r.lAnkleX,c),n.rightHip.rotation.x=ae(n.rightHip.rotation.x,r.rHipX,c),n.rightHip.rotation.y=ae(n.rightHip.rotation.y,r.rHipY,c),n.rightHip.rotation.z=ae(n.rightHip.rotation.z,r.rHipZ,c),n.rightKnee.rotation.x=ae(n.rightKnee.rotation.x,r.rKneeX,c),n.rightAnkle.rotation.x=ae(n.rightAnkle.rotation.x,r.rAnkleX,c);const l=t.actionState==="gk_dive_left"||t.actionState==="gk_dive_right",h=Math.max(0,t.position.y+(n.pelvis.position.y-Ze)),u=l?1.55:1+h*.25,d=t.actionState==="tackle"?1.4:1+h*.25;n.shadowBlob.position.x=n.pelvis.position.x*.8,n.shadowBlob.position.y=Math.max(.02,.025-t.position.y/n.heightScale),n.shadowBlob.scale.set(u,d,1),n.shadowBlob.material instanceof Ge&&(n.shadowBlob.material.opacity=ki(.86-h*.45,.35,.88))}const Ag={slim:{width:.91,depth:.92,limb:.91},athletic:{width:1,depth:1,limb:1},stocky:{width:1.09,depth:1.08,limb:1.07},towering:{width:1.1,depth:1.06,limb:1.06}},bg={oval:{sx:.96,sy:1.11,sz:1.02,jawScale:.92},angular:{sx:.93,sy:1.14,sz:1.04,jawScale:.88},broad:{sx:1.05,sy:1.08,sz:1.03,jawScale:1.04},compact:{sx:.97,sy:1.04,sz:.99,jawScale:.95}};function pr(n,t){const e=new bt(n);return t<1?e.multiplyScalar(t):e.lerp(new bt(16777215),Math.min(1,t-1)),e}function Cg(n,t,e){const i=document.createElement("canvas");i.width=256,i.height=256;const s=i.getContext("2d");if(!s){const g=new Qe(i);return g.colorSpace=Se,g}const o=e?t.gkPrimary:t.primary,r=e?t.gkSecondary:t.secondary,a=e?"#ffffff":t.numberColor,c=e?"shoulders":t.pattern;if(s.fillStyle=o,s.fillRect(0,0,256,256),c==="stripes"){s.fillStyle=r;const g=8,p=256/(g*2);for(let y=0;y<g;y++)s.fillRect(y*p*2+p*.5,0,p,256);s.fillStyle=o,s.fillRect(20,42,88,152)}else c==="sash"?(s.save(),s.fillStyle=r,s.beginPath(),s.moveTo(220,0),s.lineTo(256,0),s.lineTo(166,256),s.lineTo(130,256),s.closePath(),s.fill(),s.globalAlpha=.25,s.beginPath(),s.moveTo(0,0),s.lineTo(36,0),s.lineTo(126,256),s.lineTo(90,256),s.closePath(),s.fill(),s.restore()):c==="shoulders"?(s.fillStyle=r,s.fillRect(0,0,256,18),s.fillStyle=o,s.fillRect(36,0,56,18),s.fillRect(164,0,56,18),s.save(),s.fillStyle="rgba(255, 255, 255, 0.05)",s.beginPath(),s.moveTo(128,30),s.lineTo(256,110),s.lineTo(256,150),s.lineTo(128,70),s.closePath(),s.fill(),s.restore()):(s.save(),s.fillStyle=r,s.globalAlpha=.16,s.fillRect(0,0,12,256),s.fillRect(116,0,24,256),s.fillRect(244,0,12,256),s.restore());s.save(),s.fillStyle="rgba(255, 255, 255, 0.035)";for(let g=0;g<256;g+=4)s.fillRect(0,g,256,1);s.fillStyle="rgba(0, 0, 0, 0.04)";for(let g=0;g<256;g+=6)s.fillRect(g,0,1,256);s.restore(),s.fillStyle=r,s.fillRect(0,244,256,8),s.save(),s.strokeStyle=r,s.lineWidth=5,s.beginPath(),s.moveTo(170,0),s.lineTo(192,34),s.lineTo(214,0),s.stroke(),s.restore(),s.save();const l=214,h=72;s.beginPath(),s.moveTo(l-10,h-11),s.lineTo(l+10,h-11),s.lineTo(l+10,h+2),s.quadraticCurveTo(l,h+14,l,h+14),s.quadraticCurveTo(l,h+14,l-10,h+2),s.closePath(),s.fillStyle=r,s.fill(),s.lineWidth=2,s.strokeStyle=a,s.stroke(),s.beginPath(),s.moveTo(l,h-6),s.lineTo(l+5,h+1),s.lineTo(l,h+8),s.lineTo(l-5,h+1),s.closePath(),s.fillStyle=o,s.fill(),s.restore(),s.save(),s.fillStyle=a,s.globalAlpha=.9,s.beginPath(),s.moveTo(162,74),s.lineTo(178,66),s.lineTo(175,72),s.lineTo(164,78),s.closePath(),s.fill(),s.restore(),s.save(),s.fillStyle=a,s.globalAlpha=.85,s.fillRect(160,114,64,3),s.font='bold 12px "Inter", "Segoe UI", Arial, sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("APEX",192,128),s.globalAlpha=.45,s.fillRect(172,137,40,2),s.restore();const u=64;s.save();const d=n.shortName.toUpperCase(),f=d.length>9?13:d.length>7?15:17;s.font=`800 ${f}px "Arial Narrow", "Impact", "Segoe UI", sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=3,s.strokeStyle="rgba(0, 0, 0, 0.35)",s.strokeText(d,u,58,102),s.fillStyle=a,s.fillText(d,u,58,102),s.restore(),s.save();const m=String(n.number);s.font=`900 ${m.length>1?82:90}px "Impact", "Arial Black", sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=6,s.strokeStyle="rgba(0, 0, 0, 0.32)",s.strokeText(m,u,134,96),s.fillStyle=a,s.fillText(m,u,134,96),s.restore();const _=new Qe(i);return _.colorSpace=Se,_.anisotropy=4,_.needsUpdate=!0,_}function Rg(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d");if(t){const i=t.createRadialGradient(32,32,4,32,32,30);i.addColorStop(0,"rgba(0, 0, 0, 0.42)"),i.addColorStop(.55,"rgba(0, 0, 0, 0.22)"),i.addColorStop(1,"rgba(0, 0, 0, 0.0)"),t.fillStyle=i,t.fillRect(0,0,64,64)}const e=new Qe(n);return e.needsUpdate=!0,e}function Pg(n,t){const e=new se(.175,.132,.46,24,8,!1,Math.PI*.5,Math.PI*2),i=e.attributes.position;for(let s=0;s<i.count;s++){let o=i.getX(s);const r=i.getY(s);let a=i.getZ(s);const c=(r+.23)/.46,l=Math.sin(Math.min(1,Math.max(0,c))*Math.PI),h=1+.14*Math.pow(Math.max(0,c),1.6);o*=1.18*n*h;const u=.72+.08*l;if(a*=u*t,a>0&&c>.35&&c<.88&&(a+=.016*Math.sin((c-.35)/.53*Math.PI)*t),c>.92){const d=(c-.92)/.08;o*=1-d*.12,a*=1-d*.14}i.setXYZ(s,o,r,a)}return e.computeVertexNormals(),e}function Ft(n,t=!0,e=!0){return n.castShadow=t,n.receiveShadow=e,n}function Ig(n,t,e,i,s){const o=new he,{sx:r,sy:a,sz:c}=t,l=.118,h=(d,f,m,_,g=1,p=1,y=1,v=e,x=0,w=0,T=0)=>{const A=new J(new fe(d,12,10),v);return A.position.set(f*r,m*a,_*c),A.scale.set(g*r,p*a,y*c),A.rotation.set(x,w,T),Ft(A,!0,!0),o.add(A),A},u=(d=1.045,f=.016,m=-.012,_=Math.PI*.62)=>{const g=new fe(l*d,18,14,0,Math.PI*2,0,_),p=new J(g,e);return p.position.set(0,f*a,m*c),p.scale.set(r,a*.96,c),p.rotation.x=-.22,Ft(p,!0,!0),o.add(p),p};switch(n){case"ponytail_long":{u(1.06,.018,-.012,Math.PI*.65),h(.082,0,.072,.025,1.18,.56,1.05,e,-.25),h(.074,0,.078,-.032,1.15,.64,1.12,i,.15),h(.048,.088,.03,-.02,.6,.9,1.45,e,.1,-.22),h(.048,-.088,.03,-.02,.6,.9,1.45,e,.1,.22);const d=new J(new bs(.034,.01,8,14),s);d.position.set(0,.018*a,-.125*c),d.rotation.x=.35,Ft(d,!0,!0),o.add(d);const f=new J(new Ae(.036,.095,8,12),e);f.position.set(0,-.012*a,-.168*c),f.rotation.x=-.68,Ft(f,!0,!0),o.add(f);const m=new J(new Da(.038,.155,12),i);m.position.set(0,-.105*a,-.205*c),m.rotation.x=Math.PI-.28,Ft(m,!0,!0),o.add(m);const _=new J(new Ae(.02,.09,6,8),e);_.position.set(.016,-.065*a,-.188*c),_.rotation.set(-.35,0,-.12),Ft(_,!0,!0),o.add(_);break}case"topknot_bun":{u(1.045,.016,-.01,Math.PI*.56),h(.08,0,.066,-.01,1.12,.52,1.15,e,.1);const d=new J(new bs(.036,.008,8,14),s);d.position.set(0,.118*a,-.068*c),d.rotation.x=Math.PI*.42,Ft(d,!0,!0),o.add(d),h(.048,0,.145,-.082,.98,.94,1.05,e),h(.034,0,.162,-.094,.92,.85,.95,e);break}case"curly_voluminous":{u(1.07,.016,-.014,Math.PI*.64);const d=[[0,.118,.015,.052],[.056,.105,.025,.048],[-.056,.105,.025,.048],[0,.108,.068,.046],[.05,.095,.065,.043],[-.05,.095,.065,.043],[.095,.068,.01,.046],[-.095,.068,.01,.046],[.092,.062,-.048,.047],[-.092,.062,-.048,.047],[.052,.102,-.045,.05],[-.052,.102,-.045,.05],[0,.112,-.058,.052],[.078,.025,-.082,.046],[-.078,.025,-.082,.046],[0,.048,-.106,.052],[.042,.058,-.098,.048],[-.042,.058,-.098,.048],[.098,.022,-.028,.04],[-.098,.022,-.028,.04],[0,.008,-.105,.042]];for(const[f,m,_,g]of d)h(g,f,m,_,1.02,.96,1.02,e);break}case"curly_highlighted":{u(1.04,.018,-.012,Math.PI*.52);const d=[[.068,.085,.018,.04],[-.068,.085,.018,.04],[.07,.075,-.042,.041],[-.07,.075,-.042,.041],[0,.08,-.082,.044],[.045,.065,-.082,.039],[-.045,.065,-.082,.039],[.038,.094,.055,.036],[-.038,.094,.055,.036]];for(const[m,_,g,p]of d)h(p,m,_,g,1,.95,1,e);const f=[[0,.122,.035,.039],[.046,.115,.048,.035],[-.046,.115,.048,.035],[.012,.112,.08,.034],[-.028,.108,.078,.032],[.054,.112,-.01,.037],[-.054,.112,-.01,.037],[0,.124,-.025,.04],[.035,.106,-.06,.035],[-.035,.106,-.06,.035]];for(const[m,_,g,p]of f)h(p,m,_,g,1.02,.92,1.02,i);break}case"buzz":{u(1.032,.014,-.008,Math.PI*.56),h(.086,0,.052,.024,1.12,.52,.95,e,-.18);break}case"high_fade":{u(1.035,.024,-.012,Math.PI*.45);const d=new J(new se(.082,.094,.046,16),e);d.position.set(0,.102*a,-.002*c),d.scale.set(r*1.02,a,c*1.14),Ft(d,!0,!0),o.add(d);const f=[[0,.118,.048,.032],[.046,.116,.04,.03],[-.046,.116,.04,.03],[.058,.112,-.01,.032],[-.058,.112,-.01,.032],[0,.122,-.005,.036],[.042,.11,-.058,.031],[-.042,.11,-.058,.031],[0,.112,-.068,.033]];for(const[m,_,g,p]of f)h(p,m,_,g,1,.78,1,e);break}case"short_twists":{u(1.04,.022,-.01,Math.PI*.47);const d=new Ae(.016,.042,5,8),f=[[0,.126,.055,.55,0],[.034,.122,.052,.52,-.22],[-.034,.122,.052,.52,.22],[.064,.106,.034,.35,-.58],[-.064,.106,.034,.35,.58],[0,.132,.012,.18,.08],[.042,.126,.008,.15,-.32],[-.042,.126,.008,.15,.32],[.072,.098,-.018,-.05,-.7],[-.072,.098,-.018,-.05,.7],[0,.128,-.036,-.35,0],[.04,.118,-.046,-.38,-.3],[-.04,.118,-.046,-.38,.3],[.062,.088,-.068,-.55,-.45],[-.062,.088,-.068,-.55,.45],[0,.102,-.084,-.68,0],[.022,.114,.078,.75,-.14],[-.022,.114,.078,.75,.14]];for(const[m,_,g,p,y]of f){const v=new J(d,e);v.position.set(m*r,_*a,g*c),v.rotation.set(p,0,y),Ft(v,!0,!0),o.add(v)}break}case"slick_undercut":{u(1.035,.02,-.01,Math.PI*.48),h(.068,-.01,.104,.048,1.15,.62,1.22,e,-.32,.1,-.08),h(.076,-.005,.106,-.012,1.12,.6,1.38,e,-.12,.06,-.06),h(.05,.054,.094,.02,.85,.56,1.4,e,-.15,-.15,-.22),h(.066,0,.074,-.072,1.05,.68,.95,e,.25);break}case"classic_part":{u(1.06,.016,-.014,Math.PI*.63),h(.076,-.022,.088,.022,1.2,.64,1.24,e,-.14,.08,.12),h(.056,-.036,.074,.068,1.25,.48,.78,i,-.25,.22,.16),h(.05,.076,.044,-.008,.75,.88,1.32,e),h(.052,-.078,.046,-.008,.78,.9,1.32,e),h(.072,0,.024,-.082,1.18,.9,.78,e);break}case"swept_full":{u(1.085,.016,-.016,Math.PI*.67),h(.084,0,.098,.024,1.25,.68,1.28,e,-.22),h(.084,0,.096,-.038,1.22,.72,1.25,e,.12),h(.058,.084,.042,-.018,.82,1.05,1.42,e,.12,-.15),h(.058,-.084,.042,-.018,.82,1.05,1.42,e,.12,.15),h(.082,0,.012,-.09,1.18,1.05,.85,e);break}}return o}function Lg(n,t,e,i){if(n==="none")return null;const s=new he,{sx:o,sy:r,sz:a,jawScale:c}=t;if(n==="stubble"){const _=new bt(i).lerp(new bt(e),.36),g=new Jt({color:_,roughness:.92,metalness:0}),p=new J(new fe(.088,14,10,-Math.PI*.08,Math.PI*1.16,Math.PI*.48,Math.PI*.5),g);return p.position.set(0,-.022*r,.022*a),p.scale.set(.95*o*c,.98*r,.94*a),s.add(p),s}const l=new Jt({color:e,roughness:.88,metalness:.02});if(n==="goatee"){const _=new J(new fe(.044,12,10),l);_.position.set(0,-.082*r,.072*a),_.scale.set(1.05*o*c,.82*r,.88*a),Ft(_,!0,!0),s.add(_);const g=new J(new Ae(.011,.038,6,8),l);return g.position.set(0,-.042*r,.104*a),g.rotation.z=Math.PI*.5,s.add(g),s}if(n==="short_beard"){const _=new J(new fe(.092,16,12,-Math.PI*.12,Math.PI*1.24,Math.PI*.44,Math.PI*.54),l);_.position.set(0,-.025*r,.02*a),_.scale.set(.97*o*c,1.02*r,.96*a),Ft(_,!0,!0),s.add(_);const g=new J(new fe(.056,12,10),l);g.position.set(0,-.082*r,.062*a),g.scale.set(1.15*o*c,.78*r,.92*a),Ft(g,!0,!0),s.add(g);const p=new J(new Ae(.012,.046,6,8),l);return p.position.set(0,-.04*r,.104*a),p.rotation.z=Math.PI*.5,s.add(p),s}const h=new J(new fe(.099,16,12,-Math.PI*.15,Math.PI*1.3,Math.PI*.4,Math.PI*.58),l);h.position.set(0,-.028*r,.024*a),h.scale.set(1.01*o*c,1.08*r,1*a),Ft(h,!0,!0),s.add(h);const u=new J(new fe(.068,14,12),l);u.position.set(0,-.092*r,.064*a),u.scale.set(1.16*o*c,.92*r,.98*a),Ft(u,!0,!0),s.add(u);const d=new J(new fe(.048,10,8),l);d.position.set(.064*o,-.052*r,.052*a),d.scale.set(.75,1.1,.95),s.add(d);const f=d.clone();f.position.x=-.064*o,s.add(f);const m=new J(new Ae(.015,.052,6,8),l);return m.position.set(0,-.039*r,.108*a),m.rotation.z=Math.PI*.5,s.add(m),s}function ih(n,t,e){const{appearance:i}=n,s=i.heightCm/182,o=Ag[i.build],r=bg[i.headShape],a=e?t.gkPrimary:t.primary,c=e?t.gkSecondary:t.secondary,l=e?t.gkSecondary:t.shorts,h=e?t.gkPrimary:t.socks,u=i.sleeveStyle==="long"||e,d=Cg(n,t,e),f=new Jt({map:d,roughness:.72,metalness:.04}),m=new Jt({color:a,roughness:.72,metalness:.04}),_=new Jt({color:c,roughness:.65,metalness:.06}),g=new Jt({color:l,roughness:.76,metalness:.03}),p=new Jt({color:h,roughness:.8,metalness:.02}),y=new Jt({color:i.skinTone,roughness:.62,metalness:.02}),v=new Jt({color:pr(i.skinTone,.76),roughness:.68,metalness:0}),x=new Jt({color:i.hairColor,roughness:.82,metalness:.04}),w=new Jt({color:i.hairHighlight??pr(i.hairColor,1.15),roughness:.78,metalness:.05}),T=new Jt({color:1579035,roughness:.7,metalness:.05}),A=new Jt({color:i.bootColor,roughness:.34,metalness:.16}),R=new Jt({color:i.bootAccent,roughness:.32,metalness:.2}),M=new Jt({color:1316636,roughness:.65,metalness:.15}),S=new Jt({color:16317180,roughness:.55,metalness:.04}),C=new Jt({color:c,roughness:.45,metalness:.08}),N=new he;N.scale.setScalar(s);const U=Rg(),F=new La(.47*o.width,20),z=new Ge({map:U,transparent:!0,depthWrite:!1,opacity:.85}),D=new J(F,z);D.rotation.x=-Math.PI*.5,D.position.y=.025,D.renderOrder=1,N.add(D);const G=new he;G.position.set(0,.94,0),N.add(G);const H=Ft(new J(new se(.148*o.width,.158*o.width,.17,18),g));H.scale.set(1.08,1,.78*o.depth),H.position.y=.015,G.add(H);const K=Ft(new J(new se(.151*o.width,.15*o.width,.028,18),_));K.scale.set(1.08,1,.79*o.depth),K.position.y=.095,G.add(K);const et=new he;et.position.set(0,.08,0),G.add(et);const ot=Pg(o.width,o.depth),_t=Ft(new J(ot,f));_t.position.y=.23,et.add(_t);const Ct=Ft(new J(new fe(.185,18,12),m));Ct.position.set(0,.43,0),Ct.scale.set(1.16*o.width,.36,.74*o.depth),et.add(Ct);const q=Ft(new J(new bs(.072,.016,10,18),_));q.rotation.x=Math.PI*.5+.14,q.position.set(0,.478,.012),et.add(q);const it=new he;it.position.set(0,.485,.008),et.add(it);const ht=Ft(new J(new se(.052,.06,.105,14),y));ht.position.set(0,.048,-.005),it.add(ht);const st=new he;st.position.set(0,.192,.006),it.add(st);const At=Ft(new J(new fe(.118,22,18),y));At.scale.set(r.sx,r.sy,r.sz),st.add(At);const Vt=Ft(new J(new fe(.082,16,12),y));Vt.position.set(0,-.044*r.sy,.022*r.sz),Vt.scale.set(.92*r.sx*r.jawScale,.88*r.sy,.92*r.sz),st.add(Vt);const vt=Ft(new J(new Ae(.012,.026,6,8),y));vt.position.set(0,-.008*r.sy,.112*r.sz),vt.rotation.x=-.24,st.add(vt);const Ot=new J(new fe(.013,8,8),y);Ot.position.set(0,-.022*r.sy,.12*r.sz),Ot.scale.set(1.15,.85,.9),st.add(Ot);const Pt=new fe(.022,10,8),kt=Ft(new J(Pt,y));kt.position.set(.112*r.sx,-.006*r.sy,-.004*r.sz),kt.scale.set(.42,1.15,.72),kt.rotation.y=-.22,st.add(kt);const I=Ft(new J(Pt,y));I.position.set(-.112*r.sx,-.006*r.sy,-.004*r.sz),I.scale.set(.42,1.15,.72),I.rotation.y=.22,st.add(I);const _e=new Jt({color:16317180,roughness:.25}),Bt=new Jt({color:1446416,roughness:.15}),Ht=new Ge({color:16777215}),Mt=new Jt({color:pr(i.hairColor,.8),roughness:.85}),Kt=.041*r.sx,yt=.012*r.sy,P=.104*r.sz;for(const ut of[-1,1]){const Rt=new J(new fe(.0155,10,8),_e);Rt.position.set(ut*Kt,yt,P),Rt.scale.set(1.18,.84,.55),st.add(Rt);const Ut=new J(new fe(.0095,10,8),Bt);Ut.position.set(ut*Kt,yt,P+.0065),Ut.scale.set(1,1,.5),st.add(Ut);const jt=new J(new fe(.003,6,6),Ht);jt.position.set(ut*Kt+.003,yt+.003,P+.01),st.add(jt);const O=new J(new Ae(.0052*i.browThickness,.025,5,6),Mt);O.position.set(ut*Kt,yt+.022*r.sy,P+.004),O.rotation.set(0,ut*.18,Math.PI*.5-ut*.08),st.add(O)}const E=new J(new Ae(.005,.026,5,6),v);E.position.set(0,-.054*r.sy,.098*r.sz),E.rotation.z=Math.PI*.5,E.scale.set(1,1,.65),st.add(E);const V=Ig(i.hairStyle,r,x,w,T);st.add(V);const $=Lg(i.facialHair,r,i.facialHairColor??i.hairColor,i.skinTone);$&&st.add($);const nt=.228*o.width,Z=.412,wt=ut=>{const Rt=new he;Rt.position.set(ut*nt,Z,0),et.add(Rt);const Ut=Ft(new J(new fe(.064*o.limb,14,12),m));Ut.scale.set(.95,1.02,.92),Rt.add(Ut);const jt=u?.25:.145,O=Ft(new J(new se(.056*o.limb,.048*o.limb,jt,14),m));if(O.position.y=-jt*.5-.015,Rt.add(O),!u){const at=Ft(new J(new se(.05*o.limb,.05*o.limb,.022,14),_));at.position.y=-jt-.015,Rt.add(at);const It=Ft(new J(new se(.045*o.limb,.04*o.limb,.125,12),y));It.position.y=-.21,Rt.add(It)}const lt=new he;lt.position.set(0,-.27,0),Rt.add(lt);const Y=Ft(new J(new fe(.041*o.limb,10,10),u?m:y));lt.add(Y);const tt=u?m:y,dt=Ft(new J(new se(.041*o.limb,.032*o.limb,.235,12),tt));if(dt.position.y=-.12,lt.add(dt),u){const at=Ft(new J(new se(.036*o.limb,.035*o.limb,.026,12),_));at.position.y=-.23,lt.add(at)}if(e){const at=new he;at.position.set(0,-.275,.008),lt.add(at);const It=Ft(new J(new se(.039,.037,.035,12),C));It.position.y=.04,at.add(It);const ue=Ft(new J(new Ae(.036,.055,8,12),S));ue.scale.set(.68,1,1.15),at.add(ue);const me=Ft(new J(new Ae(.034,.05,8,10),C));me.position.set(ut*.009,.002,-.004),me.scale.set(.6,.96,1.08),at.add(me);const Qt=Ft(new J(new Ae(.015,.03,6,8),S));Qt.position.set(-ut*.016,.004,.036),Qt.rotation.set(.65,0,ut*.35),at.add(Qt)}else{const at=Ft(new J(new Ae(.026*o.limb,.044,6,10),y));at.position.set(0,-.272,.004),at.scale.set(.68,1,1.08),lt.add(at);const It=new J(new Ae(.01*o.limb,.02,5,6),y);It.position.set(-ut*.012,-.262,.024),It.rotation.x=.55,lt.add(It)}return{shoulder:Rt,elbow:lt}},ft=wt(1),xt=wt(-1),Zt=.102*o.width,ct=i.sockHeight==="high",St=ut=>{const Rt=new he;Rt.position.set(ut*Zt,0,0),G.add(Rt);const Ut=Ft(new J(new fe(.088*o.limb,14,12),g));Ut.scale.set(.96,1,.94),Rt.add(Ut);const jt=Ft(new J(new se(.088*o.limb,.076*o.limb,.22,14),g));jt.position.y=-.115,Rt.add(jt);const O=new J(new xn(.012,.21,.022),_);O.position.set(ut*.08*o.limb,-.115,0),Rt.add(O);const lt=Ft(new J(new se(.068*o.limb,.054*o.limb,.21,14),y));lt.position.y=-.315,Rt.add(lt);const Y=new he;Y.position.set(0,-.42,0),Rt.add(Y);const tt=Ft(new J(new fe(.054*o.limb,12,10),ct?p:y));Y.add(tt);const dt=ct?.04:.1,at=Ft(new J(new se(.052*o.limb,.054*o.limb,dt,12),y));at.position.y=-dt*.5,Y.add(at);const It=.425-dt,ue=Ft(new J(new se(.056*o.limb,.039*o.limb,It,14),p));ue.position.y=-dt-It*.5,Y.add(ue);const me=Ft(new J(new Ae(.026*o.limb,.13,6,8),p));me.position.set(0,-.23,.028*o.limb),me.scale.set(1.05,1,.55),Y.add(me);const Qt=Ft(new J(new se(.0575*o.limb,.057*o.limb,.022,14),_));Qt.position.y=-dt-.025,Y.add(Qt);const We=Ft(new J(new se(.0565*o.limb,.056*o.limb,.012,14),_));We.position.y=-dt-.052,Y.add(We);const we=new he;we.position.set(0,-.425,0),Y.add(we);const ji=Ft(new J(new se(.041,.044,.04,12),R));ji.position.set(0,-.008,-.005),we.add(ji);const qn=Ft(new J(new Ae(.041,.145,8,14),A));qn.rotation.x=Math.PI*.5,qn.position.set(0,-.048,.055),qn.scale.set(1.05,1,.86),we.add(qn);const rn=Ft(new J(new fe(.042,12,10),A));rn.position.set(0,-.056,.132),rn.scale.set(1.02,.64,1.25),we.add(rn);const Dn=new J(new Ae(.011,.085,5,8),R);Dn.rotation.x=Math.PI*.5,Dn.rotation.z=ut*.12,Dn.position.set(ut*.036,-.046,.068),we.add(Dn);const Qi=Ft(new J(new xn(.082,.016,.228),M));Qi.position.set(0,-.082,.06),we.add(Qi);const Ls=new se(.006,.004,.012,6),hi=[[-.026,-.025],[.026,-.025],[-.028,.075],[.028,.075],[-.022,.14],[.022,.14]];for(const[Ds,ui]of hi){const ts=new J(Ls,R);ts.position.set(Ds,-.09,ui),we.add(ts)}return{hip:Rt,knee:Y,ankle:we}},Dt=St(1),zt=St(-1);return{root:N,pelvis:G,torso:et,headGroup:it,leftShoulder:ft.shoulder,leftElbow:ft.elbow,rightShoulder:xt.shoulder,rightElbow:xt.elbow,leftHip:Dt.hip,leftKnee:Dt.knee,leftAnkle:Dt.ankle,rightHip:zt.hip,rightKnee:zt.knee,rightAnkle:zt.ankle,shadowBlob:D,heightScale:s,profile:n}}function ua(n){const t=new Set,e=new Set,i=new Set;n.root.traverse(s=>{if(s instanceof J){s.geometry&&t.add(s.geometry);const o=Array.isArray(s.material)?s.material:[s.material];for(const r of o)r&&(e.add(r),(r instanceof Jt||r instanceof Ge)&&(r.map&&i.add(r.map),r.alphaMap&&i.add(r.alphaMap)))}});for(const s of i)s.dispose();for(const s of e)s.dispose();for(const s of t)s.dispose();n.root.clear()}const un=18,Dg=.55,Zc=12.5;function Ng(){const n=(1+Math.sqrt(5))*.5;return[[0,1,n],[0,-1,n],[0,1,-n],[0,-1,-n],[1,n,0],[-1,n,0],[1,-n,0],[-1,-n,0],[n,0,1],[-n,0,1],[n,0,-1],[-n,0,-1]].map(([e,i,s])=>{const o=Math.hypot(e,i,s);return[e/o,i/o,s/o]})}function Ug(){const e=document.createElement("canvas");e.width=512,e.height=256;const i=e.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=256;const o=s.getContext("2d");if(!i||!o)throw new Error("Failed to create 2D contexts for match ball textures");const r=i.createImageData(512,256),a=o.createImageData(512,256),c=r.data,l=a.data,h=Ng(),u=new Float32Array(512),d=new Float32Array(512);for(let _=0;_<512;_++){const p=(_+.5)/512*Math.PI*2;u[_]=Math.cos(p),d[_]=Math.sin(p)}for(let _=0;_<256;_++){const p=(_+.5)/256*Math.PI,y=Math.sin(p),v=Math.cos(p);for(let x=0;x<512;x++){const w=y*u[x],T=y*d[x];let A=-2,R=-2,M=-2,S=0;for(let ot=0;ot<12;ot++){const _t=h[ot],Ct=w*_t[0]+v*_t[1]+T*_t[2];Ct>A?(M=R,R=A,A=Ct,S=ot):Ct>R?(M=R,R=Ct):Ct>M&&(M=Ct)}const C=Math.sin(x*1.9+_*1.3)*Math.cos(x*1.1-_*2.1)*3.5;let N=247+C,U=249+C,F=252+C,z=212+C*2.5;const D=A-R*.24;D>.692?(N=16,U=34,F=64,z=198,D>.775?S%2===0?(N=228,U=186,F=76):(N=22,U=52,F=94):D<.708&&(N=16,U=185,F=129,z=175)):D>.678&&(N=222,U=182,F=78,z=148);const G=A-R;if(G<.042&&M>.58&&(N=14,U=158,F=112,z=170),G<.015){const ot=1-G/.015;N=N*(1-ot*.32)+120*ot*.32,U=U*(1-ot*.32)+132*ot*.32,F=F*(1-ot*.32)+148*ot*.32,z=75+(1-ot)*110}const H=Math.abs(D-.678);if(H<.008){const ot=1-H/.008;N*=1-ot*.28,U*=1-ot*.28,F*=1-ot*.28,z=Math.min(z,82+(1-ot)*90)}const K=(_*512+x)*4;c[K]=Math.max(0,Math.min(255,N)),c[K+1]=Math.max(0,Math.min(255,U)),c[K+2]=Math.max(0,Math.min(255,F)),c[K+3]=255;const et=Math.max(0,Math.min(255,z));l[K]=et,l[K+1]=et,l[K+2]=et,l[K+3]=255}}i.putImageData(r,0,0),o.putImageData(a,0,0);const f=new Qe(e);f.colorSpace=Se,f.anisotropy=8,f.needsUpdate=!0;const m=new Qe(s);return m.anisotropy=4,m.needsUpdate=!0,{map:f,bumpMap:m}}function Fg(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(!e)throw new Error("Failed to create 2D context for ball shadow disc");const i=e.createRadialGradient(128*.5,128*.5,4,128*.5,128*.5,128*.5);i.addColorStop(0,"rgba(8, 22, 12, 0.92)"),i.addColorStop(.45,"rgba(10, 26, 14, 0.58)"),i.addColorStop(.78,"rgba(12, 30, 16, 0.16)"),i.addColorStop(1,"rgba(12, 30, 16, 0.0)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Qe(t);return s.needsUpdate=!0,s}function zg(){const n=un-1,t=un*2,e=t*2,i=new Float32Array(e*3),s=new Float32Array(e),o=new Float32Array(e*2),r=[];for(let h=0;h<2;h++){const u=h*t;for(let d=0;d<un;d++){const f=d/(un-1),m=u+d*2;o[m*2]=f,o[m*2+1]=0,o[(m+1)*2]=f,o[(m+1)*2+1]=1}for(let d=0;d<n;d++){const f=u+d*2,m=f+1,_=f+2,g=f+3;r.push(f,m,_,m,g,_)}}const a=new Me;a.setAttribute("position",new Ce(i,3)),a.setAttribute("aAlpha",new Ce(s,1)),a.setAttribute("uv",new Ce(o,2)),a.setIndex(r);const c=new yn({transparent:!0,depthWrite:!1,side:Ne,blending:Bi,uniforms:{uHeadColor:{value:new bt("#fff9dc")},uMidColor:{value:new bt("#f7c948")},uTailColor:{value:new bt("#18d493")},uOpacity:{value:0}},vertexShader:`
      attribute float aAlpha;
      varying float vAlpha;
      varying vec2 vUv;
      void main() {
        vAlpha = aAlpha;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uHeadColor;
      uniform vec3 uMidColor;
      uniform vec3 uTailColor;
      uniform float uOpacity;
      varying float vAlpha;
      varying vec2 vUv;

      void main() {
        // Soft ribbon edge feathering across width (vUv.y in 0..1)
        float edge = 1.0 - abs(vUv.y * 2.0 - 1.0);
        float core = pow(edge, 1.45);

        vec3 col = mix(uHeadColor, uMidColor, smoothstep(0.0, 0.45, vUv.x));
        col = mix(col, uTailColor, smoothstep(0.35, 1.0, vUv.x));

        float alpha = vAlpha * core * uOpacity;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(col, alpha);
      }
    `}),l=new J(a,c);return l.frustumCulled=!1,l.visible=!1,l.renderOrder=4,{mesh:l,positions:i,alphas:s,material:c}}function Og(n){const t=new he;t.name="MatchBallVisuals";const{map:e,bumpMap:i}=Ug(),s=new fe(Yt.RADIUS,32,24),o=new Jt({map:e,bumpMap:i,bumpScale:.004,roughness:.34,metalness:.08}),r=new J(s,o);r.castShadow=!0,r.receiveShadow=!0,r.position.set(0,Yt.RADIUS,0),t.add(r);const a=Fg(),c=new je(Yt.RADIUS*2.8,Yt.RADIUS*2.8);c.rotateX(-Math.PI*.5);const l=new Ge({map:a,transparent:!0,opacity:.56,depthWrite:!1}),h=new J(c,l);h.position.set(0,.022,0),h.renderOrder=2,t.add(h);const u=zg();t.add(u.mesh),n.add(t);const d=Array.from({length:un},()=>new L);let f=!1,m=0,_=0;const g=new L,p=new Zi,y=new L,v=new L,x=new L,w=new L(0,1,0),T=new L(1,0,0),A=M=>{for(let S=0;S<un;S++)d[S].set(M.x,M.y,M.z);f=!0};return{group:t,ballMesh:r,update:(M,S)=>{const C=Math.min(Math.max(S,0),.05);r.position.set(M.position.x,M.position.y,M.position.z);const N=M.angularVelocity.x,U=M.angularVelocity.y,F=M.angularVelocity.z,z=Math.hypot(N,U,F);z>1e-4&&C>0&&(g.set(N/z,U/z,F/z),p.setFromAxisAngle(g,z*C),r.quaternion.premultiply(p).normalize());const D=Math.max(0,M.position.y-Yt.RADIUS);h.position.set(M.position.x,.022,M.position.z);const G=1+Math.min(D*.24,1.55);h.scale.set(G,1,G),l.opacity=Math.max(.11,.58/(1+D*.42));const H=Math.hypot(M.velocity.x,M.velocity.y,M.velocity.z),K=M.ownerId===null&&M.lastKickPower>Dg&&H>Zc;f||A(M.position),(M.position.x-d[0].x)**2+(M.position.y-d[0].y)**2+(M.position.z-d[0].z)**2>9&&(A(M.position),m=0);const ot=K?ce.clamp((M.lastKickPower-.5)*1.45,.35,1)*ce.clamp((H-Zc)/14,.35,1):0,_t=ot>m?18:9.5;if(m+=(ot-m)*(1-Math.exp(-_t*C)),m<.015){u.mesh.visible=!1,A(M.position);return}_+=C;const Ct=1/95;if(_>=Ct){const vt=Math.min(3,Math.floor(_/Ct));_-=vt*Ct;for(let Ot=0;Ot<vt;Ot++){for(let Pt=un-1;Pt>0;Pt--)d[Pt].copy(d[Pt-1]);d[0].set(M.position.x,M.position.y,M.position.z)}}else d[0].set(M.position.x,M.position.y,M.position.z);const q=u.positions,it=u.alphas,ht=un*2,st=Yt.RADIUS*(.72+.35*m);for(let vt=0;vt<un;vt++){const Ot=vt/(un-1),Pt=d[vt];vt<un-1?y.subVectors(Pt,d[vt+1]):y.subVectors(d[vt-1],Pt),y.lengthSq()<1e-6&&y.set(M.velocity.x,M.velocity.y,M.velocity.z),y.lengthSq()<1e-6?y.set(1,0,0):y.normalize(),v.crossVectors(y,w),v.lengthSq()<1e-4&&v.crossVectors(y,T),v.normalize(),x.crossVectors(v,y).normalize();const kt=Math.pow(1-Ot,1.35),I=st*kt,_e=Math.pow(1-Ot,1.6)*(vt===0?.55:1),Bt=vt*2,Ht=Bt+1;q[Bt*3]=Pt.x+v.x*I,q[Bt*3+1]=Pt.y+v.y*I,q[Bt*3+2]=Pt.z+v.z*I,q[Ht*3]=Pt.x-v.x*I,q[Ht*3+1]=Pt.y-v.y*I,q[Ht*3+2]=Pt.z-v.z*I,it[Bt]=_e,it[Ht]=_e;const Mt=ht+vt*2,Kt=Mt+1;q[Mt*3]=Pt.x+x.x*I,q[Mt*3+1]=Pt.y+x.y*I,q[Mt*3+2]=Pt.z+x.z*I,q[Kt*3]=Pt.x-x.x*I,q[Kt*3+1]=Pt.y-x.y*I,q[Kt*3+2]=Pt.z-x.z*I,it[Mt]=_e*.85,it[Kt]=_e*.85}const At=u.mesh.geometry.attributes.position,Vt=u.mesh.geometry.attributes.aAlpha;At.needsUpdate=!0,Vt.needsUpdate=!0,u.material.uniforms.uOpacity.value=m*.72,u.mesh.visible=!0}}}const mr=["broadcast","wide","dynamic_close"],gr={broadcast:{height:17.5,zOffset:24,fov:42,ballWeight:.68,playerWeight:.22,leadWeight:.1,leadSeconds:.42,maxLeadDist:5.5,clampX:21.5,clampZ:9.5,gantryParallaxX:.92,followLambda:5.2,lookLambda:7.4},wide:{height:23,zOffset:31,fov:44,ballWeight:.68,playerWeight:.22,leadWeight:.1,leadSeconds:.35,maxLeadDist:4,clampX:13.5,clampZ:5.5,gantryParallaxX:.85,followLambda:4.5,lookLambda:6.2},dynamic_close:{height:12.5,zOffset:18,fov:45,ballWeight:.64,playerWeight:.26,leadWeight:.1,leadSeconds:.45,maxLeadDist:5,clampX:25,clampZ:12.5,gantryParallaxX:.95,followLambda:6.4,lookLambda:8.6}};class kg{camera;preset="broadcast";currentPos=new L;currentTarget=new L;desiredPos=new L;desiredTarget=new L;currentFov;shakeIntensity=0;shakeTime=0;shakeOffset=new L;shakeTargetOffset=new L;constructor(t){this.camera=t;const e=gr[this.preset];this.currentFov=e.fov,this.currentTarget.set(0,.4,0),this.currentPos.set(0,e.height,e.zOffset),this.desiredTarget.copy(this.currentTarget),this.desiredPos.copy(this.currentPos),this.camera.fov=this.currentFov,this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentTarget),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0)}setPreset(t){this.preset=t}cyclePreset(){const t=mr.indexOf(this.preset),e=mr[(t+1)%mr.length];return this.preset=e,e}getPreset(){return this.preset}addShake(t){const e=ce.clamp(t,0,1);this.shakeIntensity=Math.min(1,Math.max(this.shakeIntensity,e)+e*.25)}snapTo(t){const e=this.computeDesiredFraming(t);this.currentPos.copy(this.desiredPos),this.currentTarget.copy(this.desiredTarget),this.currentFov=e,this.shakeIntensity=0,this.shakeOffset.set(0,0,0),this.shakeTargetOffset.set(0,0,0),this.applyToCamera()}update(t,e){const i=Math.min(Math.max(e,0),.05),s=gr[this.preset],o=this.computeDesiredFraming(t),r=t.phase==="goal_celebration",a=r?3.2:s.followLambda,c=r?4.2:s.lookLambda,l=1-Math.exp(-a*i),h=1-Math.exp(-c*i),u=1-Math.exp(-4.8*i);if(this.currentPos.lerp(this.desiredPos,l),this.currentTarget.lerp(this.desiredTarget,h),this.currentFov=ce.lerp(this.currentFov,o,u),this.shakeIntensity>.002){this.shakeTime+=i;const d=this.shakeIntensity*this.shakeIntensity*.42;this.shakeOffset.set((Math.sin(this.shakeTime*54)*.65+Math.cos(this.shakeTime*89)*.35)*d,(Math.cos(this.shakeTime*61)*.7+Math.sin(this.shakeTime*97)*.3)*d*.85,Math.sin(this.shakeTime*47)*d*.35),this.shakeTargetOffset.set(this.shakeOffset.x*.45,this.shakeOffset.y*.45,this.shakeOffset.z*.25),this.shakeIntensity*=Math.exp(-9.2*i)}else this.shakeIntensity=0,this.shakeOffset.set(0,0,0),this.shakeTargetOffset.set(0,0,0);this.applyToCamera()}getHorizontalBasis(){const t=this.currentTarget.x-this.currentPos.x,e=this.currentTarget.z-this.currentPos.z,i=Math.hypot(t,e);if(i<1e-5)return{right:{x:1,z:0},forward:{x:0,z:-1}};const s=t/i,o=e/i;return{right:{x:-o,z:s},forward:{x:s,z:o}}}computeDesiredFraming(t){const e=gr[this.preset],i=t.ball;if(t.phase==="goal_celebration"){const w=this.findGoalScorer(t),T=t.latestGoal?.team==="home"?j.HALF_LENGTH:t.latestGoal?.team==="away"?-32:i.position.x>=0?j.HALF_LENGTH:-32,A=w?w.position.x*.72+T*.28:i.position.x*.65+T*.35,R=w?w.position.z*.78:i.position.z*.7,M=ce.clamp(A,-30,j.HALF_LENGTH-2),S=ce.clamp(R,-16,j.HALF_WIDTH-4);return this.desiredTarget.set(M,1.05,S),this.desiredPos.set(M*.94,e.height*.66,S+e.zOffset*.64),Math.max(35,e.fov-4.5)}const s=this.findControlledPlayer(t),o=s?s.position.x:i.position.x,r=s?s.position.z:i.position.z;let a=i.velocity.x*e.leadSeconds,c=i.velocity.z*e.leadSeconds;const l=Math.hypot(a,c);if(l>e.maxLeadDist){const w=e.maxLeadDist/l;a*=w,c*=w}const h=i.position.x+a,u=i.position.z+c,d=i.position.x*e.ballWeight+o*e.playerWeight+h*e.leadWeight,f=i.position.z*e.ballWeight+r*e.playerWeight+u*e.leadWeight,m=ce.clamp(d,-e.clampX,e.clampX),_=ce.clamp(f,-e.clampZ,e.clampZ),g=.4+Math.min(i.position.y*.14,1.2);this.desiredTarget.set(m,g,_);const p=Math.max(0,-_)*.08,y=m*e.gantryParallaxX,v=e.height+p,x=_*.62+e.zOffset;return this.desiredPos.set(y,v,x),e.fov}findControlledPlayer(t){for(let e=0;e<t.players.length;e++){const i=t.players[e];if(i.id===t.controlledPlayerId||i.isControlled)return i}return null}findGoalScorer(t){const e=t.latestGoal?.scorerId;if(!e)return null;for(let i=0;i<t.players.length;i++)if(t.players[i].id===e)return t.players[i];return null}applyToCamera(){this.camera.position.copy(this.currentPos).add(this.shakeOffset),this.camera.lookAt(this.currentTarget.x+this.shakeTargetOffset.x,this.currentTarget.y+this.shakeTargetOffset.y,this.currentTarget.z+this.shakeTargetOffset.z),Math.abs(this.camera.fov-this.currentFov)>.01&&(this.camera.fov=this.currentFov,this.camera.updateProjectionMatrix())}}const fs=180,ho=240,_r=6,Co=40;function Bg(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(!e)throw new Error("Failed to create 2D context for glow disc");const i=e.createRadialGradient(128*.5,128*.5,128*.16,128*.5,128*.5,128*.5);i.addColorStop(0,"rgba(255, 255, 255, 0.0)"),i.addColorStop(.55,"rgba(255, 255, 255, 0.36)"),i.addColorStop(.76,"rgba(255, 255, 255, 0.16)"),i.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Qe(t);return s.needsUpdate=!0,s}function Hg(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(!e)throw new Error("Failed to create 2D context for dashed ring");const i=256*.5,s=256*.5,o=256*.41;e.strokeStyle="rgba(103, 232, 249, 0.28)",e.lineWidth=14,e.beginPath(),e.arc(i,s,o,0,Math.PI*2),e.stroke();const r=12,a=Math.PI*2/r;e.strokeStyle="rgba(235, 253, 255, 0.96)",e.lineWidth=7.5,e.lineCap="round";for(let l=0;l<r;l++){const h=l*a+.08,u=(l+1)*a-.16;e.beginPath(),e.arc(i,s,o,h,u),e.stroke()}const c=new Qe(t);return c.needsUpdate=!0,c}function Gg(){const n=new Vl;n.moveTo(0,-1.14),n.lineTo(.24,-.82),n.lineTo(.11,-.82),n.lineTo(0,-.94),n.lineTo(-.11,-.82),n.lineTo(-.24,-.82),n.closePath();const t=new Fa(n);return t.rotateX(-Math.PI*.5),t}function Vg(){const s=new Float32Array([0,.24,0,.16,.08,0,0,.08,.16,0,.24,0,0,.08,.16,-.16,.08,0,0,.24,0,-.16,.08,0,0,.08,-.16,0,.24,0,0,.08,-.16,.16,.08,0,0,-.22,0,0,.08,.16,.16,.08,0,0,-.22,0,-.16,.08,0,0,.08,.16,0,-.22,0,0,.08,-.16,-.16,.08,0,0,-.22,0,.16,.08,0,0,.08,-.16]),o=new Me;return o.setAttribute("position",new Ce(s,3)),o.computeVertexNormals(),o}function Wg(){const n=(Co+1)*2,t=new Float32Array(n*3),e=[];for(let s=0;s<Co;s++){const o=s*2,r=o+1,a=o+2,c=o+3;e.push(o,r,a,r,c,a)}const i=new Me;return i.setAttribute("position",new Ce(t,3)),i.setIndex(e),i}class Xg{group;controlledGroup;groundRingMesh;groundRingMat;groundGlowMesh;groundGlowMat;facingChevronMesh;facingChevronMat;chargeArcMesh;chargeArcMat;chargeArcPositions;overheadDiamondMesh;overheadDiamondMat;passTargetGroup;passTargetRingMesh;passTargetMat;sparkInstanced;sparkPool=[];sparkCursor=0;confettiInstanced;confettiPool=[];confettiCursor=0;shockwaves=[];shockwaveCursor=0;dummy=new be;tmpColor=new bt;colorEmerald=new bt("#2ef2a4");colorGold=new bt("#fde047");colorOrange=new bt("#fb923c");colorCrimson=new bt("#ef4444");colorCyan=new bt("#38bdf8");confettiPalette=[new bt("#facc15"),new bt("#ffffff"),new bt("#10b981"),new bt("#38bdf8"),new bt("#fb7185")];constructor(t){this.group=new he,this.group.name="PitchEffects",this.controlledGroup=new he,this.controlledGroup.visible=!1;const e=new Ao(.56,.71,48);e.rotateX(-Math.PI*.5),this.groundRingMat=new Ge({color:"#2ef2a4",transparent:!0,opacity:.9,depthWrite:!1,side:Ne}),this.groundRingMesh=new J(e,this.groundRingMat),this.groundRingMesh.position.y=.032,this.groundRingMesh.renderOrder=5,this.controlledGroup.add(this.groundRingMesh);const i=new je(2.05,2.05);i.rotateX(-Math.PI*.5),this.groundGlowMat=new Ge({map:Bg(),color:"#2ef2a4",transparent:!0,opacity:.55,depthWrite:!1,blending:Bi}),this.groundGlowMesh=new J(i,this.groundGlowMat),this.groundGlowMesh.position.y=.026,this.groundGlowMesh.renderOrder=4,this.controlledGroup.add(this.groundGlowMesh);const s=Gg();this.facingChevronMat=new Ge({color:"#ffffff",transparent:!0,opacity:.92,depthWrite:!1,side:Ne}),this.facingChevronMesh=new J(s,this.facingChevronMat),this.facingChevronMesh.position.y=.036,this.facingChevronMesh.renderOrder=6,this.controlledGroup.add(this.facingChevronMesh);const o=Wg();this.chargeArcPositions=o.attributes.position.array,this.chargeArcMat=new Ge({color:"#fde047",transparent:!0,opacity:.94,depthWrite:!1,side:Ne}),this.chargeArcMesh=new J(o,this.chargeArcMat),this.chargeArcMesh.position.y=.038,this.chargeArcMesh.visible=!1,this.chargeArcMesh.renderOrder=7,this.controlledGroup.add(this.chargeArcMesh);const r=Vg();this.overheadDiamondMat=new Jt({color:"#34f5a3",emissive:"#16c97f",emissiveIntensity:.72,roughness:.22,metalness:.25}),this.overheadDiamondMesh=new J(r,this.overheadDiamondMat),this.overheadDiamondMesh.position.y=2.45,this.overheadDiamondMesh.renderOrder=8,this.controlledGroup.add(this.overheadDiamondMesh),this.group.add(this.controlledGroup),this.passTargetGroup=new he,this.passTargetGroup.visible=!1;const a=new je(1.75,1.75);a.rotateX(-Math.PI*.5),this.passTargetMat=new Ge({map:Hg(),color:"#b8f4ff",transparent:!0,opacity:.85,depthWrite:!1}),this.passTargetRingMesh=new J(a,this.passTargetMat),this.passTargetRingMesh.position.y=.029,this.passTargetRingMesh.renderOrder=5,this.passTargetGroup.add(this.passTargetRingMesh),this.group.add(this.passTargetGroup);const c=new Ua(.085,0),l=new Ge({color:"#ffffff",transparent:!0,opacity:.92,depthWrite:!1});this.sparkInstanced=new gc(c,l,fs),this.sparkInstanced.instanceMatrix.setUsage(Xa),this.sparkInstanced.frustumCulled=!1,this.sparkInstanced.renderOrder=6,this.dummy.position.set(0,-50,0),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix();const h=new bt("#ffffff");for(let m=0;m<fs;m++)this.sparkInstanced.setMatrixAt(m,this.dummy.matrix),this.sparkInstanced.setColorAt(m,h),this.sparkPool.push({active:!1,x:0,y:-50,z:0,vx:0,vy:0,vz:0,age:0,life:.4,baseScale:1,gravity:9.5,drag:3,color:new bt("#ffffff")});this.sparkInstanced.instanceMatrix.needsUpdate=!0,this.sparkInstanced.instanceColor&&(this.sparkInstanced.instanceColor.needsUpdate=!0),this.group.add(this.sparkInstanced);const u=new je(.18,.1),d=new Ge({color:"#ffffff",side:Ne,transparent:!0,opacity:.96});this.confettiInstanced=new gc(u,d,ho),this.confettiInstanced.instanceMatrix.setUsage(Xa),this.confettiInstanced.frustumCulled=!1,this.confettiInstanced.renderOrder=7;for(let m=0;m<ho;m++)this.confettiInstanced.setMatrixAt(m,this.dummy.matrix),this.confettiInstanced.setColorAt(m,h),this.confettiPool.push({active:!1,x:0,y:-50,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,vrx:0,vry:0,vrz:0,age:0,life:2.5,scaleX:1,scaleY:1,swayPhase:0,color:new bt("#ffffff")});this.confettiInstanced.instanceMatrix.needsUpdate=!0,this.confettiInstanced.instanceColor&&(this.confettiInstanced.instanceColor.needsUpdate=!0),this.group.add(this.confettiInstanced);const f=new Ao(.32,.48,36);f.rotateX(-Math.PI*.5);for(let m=0;m<_r;m++){const _=new Ge({color:"#fef08a",transparent:!0,opacity:0,depthWrite:!1,blending:Bi,side:Ne}),g=new J(f,_);g.visible=!1,g.renderOrder=6,this.group.add(g),this.shockwaves.push({mesh:g,material:_,active:!1,age:0,life:.34,maxScale:2.4})}t.add(this.group)}updateControlledIndicator(t,e,i,s){if(!t){this.controlledGroup.visible=!1,this.passTargetGroup.visible=!1;return}this.controlledGroup.visible=!0,this.controlledGroup.position.set(t.position.x,0,t.position.z),this.facingChevronMesh.rotation.y=t.facing,this.chargeArcMesh.rotation.y=t.facing;const o=t.hasBall||i.ownerId===t.id,r=1+Math.sin(s*5.2)*.045;this.groundRingMesh.scale.set(r,1,r),this.groundGlowMesh.scale.set(r*1.04,1,r*1.04);const a=o?this.colorGold:this.colorEmerald;this.groundRingMat.color.copy(a),this.groundGlowMat.color.copy(a),this.overheadDiamondMat.color.copy(a),this.overheadDiamondMat.emissive.copy(a),this.overheadDiamondMat.emissiveIntensity=o?.9:.68,this.overheadDiamondMesh.position.y=2.45+Math.sin(s*4.6)*.075,this.overheadDiamondMesh.rotation.y=s*2.4;const c=ce.clamp(t.shotCharge,0,1),l=ce.clamp(t.passCharge,0,1);if(c>.01?(this.updateChargeArcGeometry(c),c<.65?this.tmpColor.lerpColors(this.colorGold,this.colorOrange,c/.65):this.tmpColor.lerpColors(this.colorOrange,this.colorCrimson,(c-.65)/.35),this.chargeArcMat.color.copy(this.tmpColor),this.chargeArcMat.opacity=.82+c*.16,this.chargeArcMesh.visible=!0):l>.01?(this.updateChargeArcGeometry(l),this.chargeArcMat.color.copy(this.colorCyan),this.chargeArcMat.opacity=.78+l*.16,this.chargeArcMesh.visible=!0):this.chargeArcMesh.visible=!1,e!==null&&e.id!==t.id&&(o||i.passTargetId===e.id)&&e){this.passTargetGroup.visible=!0,this.passTargetGroup.position.set(e.position.x,0,e.position.z);const u=1+Math.sin(s*6.5)*.05;this.passTargetRingMesh.scale.set(u,1,u),this.passTargetRingMesh.rotation.y=s*1.4,this.passTargetMat.opacity=o?.86:.62}else this.passTargetGroup.visible=!1}spawnKickBurst(t,e,i){const s=ce.clamp(e,.15,1.2),o=Math.round(i?18+s*20:9+s*8);for(let r=0;r<o;r++){const a=this.sparkPool[this.sparkCursor];this.sparkCursor=(this.sparkCursor+1)%fs;const c=Math.random()*Math.PI*2,l=i&&r<o*.68,h=l?(3.2+Math.random()*5.8)*(.65+s*.65):(1.4+Math.random()*2.8)*(.6+s*.5);if(a.active=!0,a.x=t.x+(Math.random()-.5)*.2,a.y=Math.max(.08,t.y+(Math.random()-.3)*.18),a.z=t.z+(Math.random()-.5)*.2,a.vx=Math.cos(c)*h,a.vy=l?(1.8+Math.random()*4.2)*(.6+s*.5):1.1+Math.random()*2.1,a.vz=Math.sin(c)*h,a.age=0,a.life=l?.28+Math.random()*.24:.32+Math.random()*.22,a.baseScale=l?.65+Math.random()*.85:.7+Math.random()*.7,a.gravity=l?8.5:6.2,a.drag=l?3.8:4.6,l){const u=Math.random();u<.42?a.color.set("#fffbeb"):u<.82?a.color.set("#fde047"):a.color.set("#fb923c")}else Math.random()<.55?a.color.set("#e8f4e5"):a.color.set("#4ea34e")}if(i&&s>.35){const r=this.shockwaves[this.shockwaveCursor];this.shockwaveCursor=(this.shockwaveCursor+1)%_r,r.active=!0,r.age=0,r.life=.28+s*.14,r.maxScale=1.65+s*1.45,r.mesh.position.set(t.x,.04,t.z),r.mesh.scale.set(.4,1,.4),r.material.color.set(s>.72?"#fde047":"#ffffff"),r.material.opacity=.85,r.mesh.visible=!0}}spawnGoalCelebrationBurst(t){const e=t==="away"?j.HALF_LENGTH:-32,i=t==="away"?-1:1,s=130;for(let r=0;r<s;r++){const a=this.confettiPool[this.confettiCursor];this.confettiCursor=(this.confettiCursor+1)%ho,a.active=!0,a.x=e+i*(.4+Math.random()*2.4),a.y=.35+Math.random()*2.1,a.z=(Math.random()-.5)*(j.GOAL_WIDTH+4.5),a.vx=i*(1.8+Math.random()*5.2)+(Math.random()-.5)*2.4,a.vy=5.4+Math.random()*6.8,a.vz=(Math.random()-.5)*6.6,a.rx=Math.random()*Math.PI*2,a.ry=Math.random()*Math.PI*2,a.rz=Math.random()*Math.PI*2,a.vrx=(Math.random()-.5)*11,a.vry=(Math.random()-.5)*11,a.vrz=(Math.random()-.5)*11,a.age=0,a.life=2.1+Math.random()*1.4,a.scaleX=.75+Math.random()*.9,a.scaleY=.7+Math.random()*.85,a.swayPhase=Math.random()*Math.PI*2;const c=this.confettiPalette[r%this.confettiPalette.length];a.color.copy(c)}const o=46;for(let r=0;r<o;r++){const a=this.sparkPool[this.sparkCursor];this.sparkCursor=(this.sparkCursor+1)%fs,a.active=!0,a.x=e+i*(.2+Math.random()*1.6),a.y=.25+Math.random()*1.8,a.z=(Math.random()-.5)*(j.GOAL_WIDTH+2.2),a.vx=i*(1.2+Math.random()*3.6),a.vy=4.2+Math.random()*5.5,a.vz=(Math.random()-.5)*4.8,a.age=0,a.life=.95+Math.random()*.75,a.baseScale=.85+Math.random()*1.1,a.gravity=3.2,a.drag=1.6,a.color.set(r%3===0?"#34f5a3":r%3===1?"#fde047":"#ffffff")}}update(t){const e=Math.min(Math.max(t,0),.05);if(e<=0)return;let i=!1;for(let o=0;o<fs;o++){const r=this.sparkPool[o];if(!r.active)continue;if(i=!0,r.age+=e,r.age>=r.life){r.active=!1,this.dummy.position.set(0,-50,0),this.dummy.scale.set(0,0,0),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.sparkInstanced.setMatrixAt(o,this.dummy.matrix);continue}const a=Math.exp(-r.drag*e);r.vx*=a,r.vz*=a,r.vy-=r.gravity*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.04&&(r.y=.04,r.vy=Math.abs(r.vy)*.25,r.vx*=.65,r.vz*=.65);const c=r.age/r.life,l=r.baseScale*(1-c*c);this.dummy.position.set(r.x,r.y,r.z),this.dummy.rotation.set(r.age*7,r.age*9,0),this.dummy.scale.set(l,l,l),this.dummy.updateMatrix(),this.sparkInstanced.setMatrixAt(o,this.dummy.matrix),this.sparkInstanced.setColorAt(o,r.color)}i&&(this.sparkInstanced.instanceMatrix.needsUpdate=!0,this.sparkInstanced.instanceColor&&(this.sparkInstanced.instanceColor.needsUpdate=!0));let s=!1;for(let o=0;o<ho;o++){const r=this.confettiPool[o];if(!r.active)continue;if(s=!0,r.age+=e,r.age>=r.life){r.active=!1,this.dummy.position.set(0,-50,0),this.dummy.scale.set(0,0,0),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.confettiInstanced.setMatrixAt(o,this.dummy.matrix);continue}const a=Math.exp(-1.85*e);r.vx*=a,r.vz*=a,r.vy=Math.max(-2.1,r.vy-5.2*e);const c=Math.sin(r.age*5.2+r.swayPhase)*.95,l=Math.cos(r.age*4.5+r.swayPhase*1.3)*.95;r.x+=(r.vx+c)*e,r.y+=r.vy*e,r.z+=(r.vz+l)*e,r.y<.05&&(r.y=.05,r.vy=0,r.vx*=.5,r.vz*=.5),r.rx+=r.vrx*e,r.ry+=r.vry*e,r.rz+=r.vrz*e;const h=r.age/r.life,u=h>.72?1-(h-.72)/.28:1;this.dummy.position.set(r.x,r.y,r.z),this.dummy.rotation.set(r.rx,r.ry,r.rz),this.dummy.scale.set(r.scaleX*u,r.scaleY*u,1),this.dummy.updateMatrix(),this.confettiInstanced.setMatrixAt(o,this.dummy.matrix),this.confettiInstanced.setColorAt(o,r.color)}s&&(this.confettiInstanced.instanceMatrix.needsUpdate=!0,this.confettiInstanced.instanceColor&&(this.confettiInstanced.instanceColor.needsUpdate=!0));for(let o=0;o<_r;o++){const r=this.shockwaves[o];if(!r.active)continue;if(r.age+=e,r.age>=r.life){r.active=!1,r.mesh.visible=!1;continue}const a=r.age/r.life,c=1-Math.pow(1-a,2.2),l=ce.lerp(.45,r.maxScale,c);r.mesh.scale.set(l,1,l),r.material.opacity=(1-a)*.72}}updateChargeArcGeometry(t){const s=Math.PI*1.82,o=t*s*.5,r=this.chargeArcPositions;for(let c=0;c<=Co;c++){const l=c/Co,h=-o+l*(o*2),u=Math.sin(h),d=Math.cos(h),f=c*2*3;r[f]=u*.76,r[f+1]=0,r[f+2]=d*.76;const m=f+3;r[m]=u*.93,r[m+1]=0,r[m+2]=d*.93}const a=this.chargeArcMesh.geometry.attributes.position;a.needsUpdate=!0}}const sh=1,da=j.LENGTH+sh*2,fa=j.WIDTH+sh*2,vr=14;function oh(n){let t=n>>>0;return()=>(t=1664525*t+1013904223>>>0,t/4294967295)}function qg(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const i=e.getContext("2d");if(!i)throw new Error("Failed to create 2D context for pitch texture");const s=2048/da,o=1024/fa,r=S=>(S+da*.5)*s,a=S=>(S+fa*.5)*o;i.fillStyle="#256c35",i.fillRect(0,0,2048,1024);const c=j.LENGTH/vr,l=a(-20),u=a(j.HALF_WIDTH)-l,d=.55,f=a(-20-d),m=a(j.HALF_WIDTH+d)-f;for(let S=0;S<vr;S++){const C=-32+S*c,N=C+c,U=r(S===0?C-d:C),F=r(S===vr-1?N+d:N),z=S%2===0,D=i.createLinearGradient(0,f,0,f+m);z?(D.addColorStop(0,"#369346"),D.addColorStop(.5,"#3da14c"),D.addColorStop(1,"#348c43")):(D.addColorStop(0,"#2a7939"),D.addColorStop(.5,"#2f843f"),D.addColorStop(1,"#287236")),i.fillStyle=D,i.fillRect(U,f,F-U+.6,m)}const _=8,g=u/_;for(let S=0;S<_;S++)i.fillStyle=S%2===0?"rgba(255, 255, 220, 0.022)":"rgba(10, 40, 18, 0.022)",i.fillRect(r(-32-d),l+S*g,r(j.HALF_LENGTH+d)-r(-32-d),g);const p=i.createRadialGradient(r(6),a(-2),40,r(0),a(0),2048*.56);p.addColorStop(0,"rgba(255, 244, 196, 0.065)"),p.addColorStop(.55,"rgba(255, 236, 180, 0.02)"),p.addColorStop(1,"rgba(12, 42, 22, 0.08)"),i.fillStyle=p,i.fillRect(0,0,2048,1024);const y=oh(20261119),v=document.createElement("canvas");v.width=256,v.height=256;const x=v.getContext("2d");if(x){const S=x.createImageData(256,256),C=S.data;for(let U=0;U<256;U++)for(let F=0;F<256;F++){const z=(U*256+F)*4,D=(y()-.5)*2,G=Math.sin(F*.8+y()*1.4)*.35+D*.65;G>=0?(C[z]=215,C[z+1]=245,C[z+2]=175,C[z+3]=Math.min(24,Math.floor(G*22))):(C[z]=14,C[z+1]=44,C[z+2]=18,C[z+3]=Math.min(26,Math.floor(-G*24)))}x.putImageData(S,0,0);const N=i.createPattern(v,"repeat");N&&(i.fillStyle=N,i.fillRect(0,0,2048,1024))}i.strokeStyle="rgba(255, 255, 235, 0.024)",i.lineWidth=1;for(let S=8;S<2048;S+=12)i.beginPath(),i.moveTo(S,0),i.lineTo(S,1024),i.stroke();const w=(S,C,N,U,F)=>{const z=r(S),D=a(C),G=N*s,H=U*o;i.save(),i.translate(z,D),i.scale(1,H/G);const K=i.createRadialGradient(0,0,G*.08,0,0,G);K.addColorStop(0,`rgba(138, 128, 86, ${F})`),K.addColorStop(.55,`rgba(110, 124, 72, ${F*.55})`),K.addColorStop(1,"rgba(90, 118, 65, 0)"),i.fillStyle=K,i.beginPath(),i.arc(0,0,G,0,Math.PI*2),i.fill(),i.restore()};w(-32+1.05,0,1.55,2.5,.28),w(j.HALF_LENGTH-1.05,0,1.55,2.5,.28),w(-32+j.PENALTY_SPOT_DIST,0,.85,.85,.16),w(j.HALF_LENGTH-j.PENALTY_SPOT_DIST,0,.85,.85,.16),w(0,0,1,1,.11);const T=.125*((s+o)*.5),A=(S,C)=>{i.strokeStyle=S,i.lineWidth=C,i.lineCap="square",i.lineJoin="miter";const N=r(-32),U=r(j.HALF_LENGTH),F=a(-20),z=a(j.HALF_WIDTH),D=r(0),G=a(0);i.strokeRect(N,F,U-N,z-F),i.beginPath(),i.moveTo(D,F),i.lineTo(D,z),i.stroke(),i.beginPath(),i.ellipse(D,G,j.CENTER_CIRCLE_RADIUS*s,j.CENTER_CIRCLE_RADIUS*o,0,0,Math.PI*2),i.stroke();const H=j.PENALTY_AREA_WIDTH*.5,K=a(-H),et=a(H)-K,ot=j.PENALTY_AREA_LENGTH*s;i.strokeRect(N,K,ot,et),i.strokeRect(U-ot,K,ot,et);const _t=j.GOAL_AREA_WIDTH*.5,Ct=a(-_t),q=a(_t)-Ct,it=j.GOAL_AREA_LENGTH*s;i.strokeRect(N,Ct,it,q),i.strokeRect(U-it,Ct,it,q);const ht=j.CENTER_CIRCLE_RADIUS,st=j.PENALTY_AREA_LENGTH-j.PENALTY_SPOT_DIST,At=Math.acos(Math.min(1,Math.max(-1,st/ht))),Vt=r(-32+j.PENALTY_SPOT_DIST);i.beginPath(),i.ellipse(Vt,G,ht*s,ht*o,0,-At,At),i.stroke();const vt=r(j.HALF_LENGTH-j.PENALTY_SPOT_DIST);i.beginPath(),i.ellipse(vt,G,ht*s,ht*o,0,Math.PI-At,Math.PI+At),i.stroke();const Ot=j.CORNER_ARC_RADIUS*s,Pt=j.CORNER_ARC_RADIUS*o;i.beginPath(),i.ellipse(N,F,Ot,Pt,0,0,Math.PI*.5),i.stroke(),i.beginPath(),i.ellipse(U,F,Ot,Pt,0,Math.PI*.5,Math.PI),i.stroke(),i.beginPath(),i.ellipse(U,z,Ot,Pt,0,Math.PI,Math.PI*1.5),i.stroke(),i.beginPath(),i.ellipse(N,z,Ot,Pt,0,Math.PI*1.5,Math.PI*2),i.stroke()};A("rgba(244, 250, 244, 0.24)",T*1.65),A("rgba(248, 252, 248, 0.94)",T);const R=(S,C,N)=>{i.fillStyle="rgba(248, 252, 248, 0.95)",i.beginPath(),i.ellipse(r(S),a(C),N*s,N*o,0,0,Math.PI*2),i.fill()};R(0,0,.19),R(-32+j.PENALTY_SPOT_DIST,0,.17),R(j.HALF_LENGTH-j.PENALTY_SPOT_DIST,0,.17);const M=new Qe(e);return M.colorSpace=Se,M.anisotropy=16,M.needsUpdate=!0,M}function Yg(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");if(!e)throw new Error("Failed to create 2D context for apron texture");e.fillStyle="#226131",e.fillRect(0,0,512,512);for(let a=0;a<4;a++)e.fillStyle=a%2===0?"rgba(255, 255, 230, 0.025)":"rgba(10, 32, 16, 0.03)",e.fillRect(a*(512/4),0,512/4,512);const i=oh(9941),s=e.getImageData(0,0,512,512),o=s.data;for(let a=0;a<o.length;a+=4){const c=Math.floor((i()-.5)*14);o[a]=Math.max(0,Math.min(255,o[a]+c)),o[a+1]=Math.max(0,Math.min(255,o[a+1]+c)),o[a+2]=Math.max(0,Math.min(255,o[a+2]+c))}e.putImageData(s,0,0);const r=new Qe(t);return r.colorSpace=Se,r.wrapS=Xn,r.wrapT=Xn,r.repeat.set(8,6),r.anisotropy=8,r}function Kg(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(!e)throw new Error("Failed to create 2D context for goal net texture");e.clearRect(0,0,256,256);const i=4,s=256/i;e.strokeStyle="rgba(248, 251, 255, 0.9)",e.lineWidth=4.2,e.lineCap="round";for(let r=-i;r<=i*2;r++){const a=r*s;e.beginPath(),e.moveTo(a,0),e.lineTo(a+256,256),e.stroke(),e.beginPath(),e.moveTo(a,256),e.lineTo(a+256,0),e.stroke()}e.fillStyle="rgba(255, 255, 255, 0.96)";for(let r=0;r<=i*2;r++)for(let a=0;a<=i*2;a++)(a+r)%2===0&&(e.beginPath(),e.arc(a*(s*.5),r*(s*.5),3,0,Math.PI*2),e.fill());const o=new Qe(t);return o.colorSpace=Se,o.wrapS=Xn,o.wrapT=Xn,o.anisotropy=8,o}function Zg(){const e=document.createElement("canvas");e.width=512,e.height=128;const i=e.getContext("2d");if(!i)throw new Error("Failed to create 2D context for perimeter board");const s=i.createLinearGradient(0,0,0,128);s.addColorStop(0,"#24303e"),s.addColorStop(.45,"#19222d"),s.addColorStop(1,"#121821"),i.fillStyle=s,i.fillRect(0,0,512,128),i.fillStyle="rgba(255, 255, 255, 0.05)",i.fillRect(0,4,512,6);const o=i.createLinearGradient(0,0,512,0);o.addColorStop(0,"#0f9b6c"),o.addColorStop(.5,"#17c98b"),o.addColorStop(1,"#0f9b6c"),i.fillStyle=o,i.fillRect(0,128*.44,512,128*.14),i.fillStyle="rgba(226, 193, 98, 0.72)",i.fillRect(0,128*.37,512,3),i.strokeStyle="rgba(8, 12, 18, 0.55)",i.lineWidth=3;for(let a=0;a<512;a+=128)i.beginPath(),i.moveTo(a,0),i.lineTo(a,128),i.stroke();const r=new Qe(e);return r.colorSpace=Se,r.wrapS=Xn,r.wrapT=Hn,r.anisotropy=8,r}function uo(n,t,e,i,s,o,r){const a=(n+1)*(t+1),c=new Float32Array(a*3),l=new Float32Array(a*3),h=new Float32Array(a),u=new Float32Array(a*2),d=[];let f=0,m=0,_=0;for(let y=0;y<=t;y++){const v=y/t;for(let x=0;x<=n;x++){const w=x/n,T=e(w,v);c[f]=T.x,c[f+1]=T.y,c[f+2]=T.z,l[f]=T.x,l[f+1]=T.y,l[f+2]=T.z,f+=3,h[_++]=i(w,v),u[m++]=w*o,u[m++]=v*r}}const g=n+1;for(let y=0;y<t;y++)for(let v=0;v<n;v++){const x=y*g+v,w=x+1,T=x+g,A=T+1;d.push(x,T,w,w,T,A)}const p=new Me;return p.setAttribute("position",new Ce(c,3)),p.setAttribute("uv",new Ce(u,2)),p.setIndex(d),p.computeVertexNormals(),{geometry:p,restPositions:l,pinWeights:h,outwardNormal:s.clone().normalize()}}function $c(n,t,e,i){const s=new he,o=n==="away";s.position.set(o?j.HALF_LENGTH:-32,0,0),s.rotation.y=o?0:Math.PI;const r=j.GOAL_HALF_WIDTH,a=j.GOAL_HEIGHT,c=j.GOAL_DEPTH,l=c*.72,h=j.POST_RADIUS,u=new se(h,h,a,18),d=new J(u,t);d.position.set(0,a*.5,-r),d.castShadow=!0,d.receiveShadow=!0,s.add(d);const f=new J(u,t);f.position.set(0,a*.5,r),f.castShadow=!0,f.receiveShadow=!0,s.add(f);const m=new se(h,h,j.GOAL_WIDTH,18);m.rotateX(Math.PI*.5);const _=new J(m,t);_.position.set(0,a,0),_.castShadow=!0,_.receiveShadow=!0,s.add(_);const g=new fe(h*1.02,16,14);for(const z of[-1,1]){const D=new J(g,t);D.position.set(0,a,z*r),D.castShadow=!0,s.add(D)}const p=h*.52;for(const z of[-1,1]){const D=z*r,G=new zl([new L(0,a,D),new L(l*.72,a,D),new L(l+.16,a*.88,D),new L(c*.92,a*.42,D),new L(c,p,D)]),H=new za(G,24,p,10,!1),K=new J(H,e);K.castShadow=!0,s.add(K)}const y=h*.5,v=new se(y,y,c,10);v.rotateZ(Math.PI*.5);for(const z of[-1,1]){const D=new J(v,e);D.position.set(c*.5,y,z*r),D.receiveShadow=!0,s.add(D)}const x=new se(y,y,j.GOAL_WIDTH,10);x.rotateX(Math.PI*.5);const w=new J(x,e);w.position.set(c,y,0),w.receiveShadow=!0,s.add(w);const T=new se(y*.72,y*.72,j.GOAL_WIDTH,10);T.rotateX(Math.PI*.5);const A=new J(T,e);A.position.set(l,a,0),s.add(A);const R=z=>ce.lerp(c,l,z),M=2.6,S=uo(24,12,(z,D)=>new L(R(D),D*a,ce.lerp(-r,r,z)),(z,D)=>{const G=Math.sin(z*Math.PI),H=ce.smoothstep(D,0,.16),K=.45+.55*(1-ce.smoothstep(D,.85,1));return Math.min(1,H*K*(.35+.65*G))},new L(1,.12,0),j.GOAL_WIDTH*M*.45,a*M*.45),C=uo(10,22,(z,D)=>new L(z*l,a,ce.lerp(-r,r,D)),(z,D)=>{const G=ce.smoothstep(z,0,.25),H=Math.sin(D*Math.PI);return G*(.3+.7*H)},new L(.18,1,0),l*M*.45,j.GOAL_WIDTH*M*.45),N=uo(10,12,(z,D)=>new L(z*R(D),D*a,-r),(z,D)=>{const G=ce.smoothstep(z,0,.22),H=ce.smoothstep(D,0,.16),K=1-.55*ce.smoothstep(z,.84,1);return G*H*K},new L(.25,.08,-1),c*M*.45,a*M*.45),U=uo(10,12,(z,D)=>new L(z*R(D),D*a,r),(z,D)=>{const G=ce.smoothstep(z,0,.22),H=ce.smoothstep(D,0,.16),K=1-.55*ce.smoothstep(z,.84,1);return G*H*K},new L(.25,.08,1),c*M*.45,a*M*.45),F=[S,C,N,U];for(const z of F){const D=new J(z.geometry,i);D.renderOrder=3,s.add(D)}return{group:s,side:n,panels:F,pulses:[],wasActive:!1}}function $g(n){const t=new fe(230,36,20),e=new yn({side:Ve,depthWrite:!1,fog:!1,uniforms:{uZenithColor:{value:new bt("#2768b3")},uMidSkyColor:{value:new bt("#6db4e8")},uHorizonColor:{value:new bt("#dceaf5")},uWarmHorizon:{value:new bt("#f7e3c1")},uSunDir:{value:n.clone().normalize()}},vertexShader:`
      varying vec3 vWorldDir;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldDir = normalize(wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 uZenithColor;
      uniform vec3 uMidSkyColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uWarmHorizon;
      uniform vec3 uSunDir;
      varying vec3 vWorldDir;

      void main() {
        vec3 dir = normalize(vWorldDir);
        float h = clamp(dir.y, 0.0, 1.0);

        // Smooth vertical cerulean-to-warm-crisp-horizon sky gradient
        vec3 sky = mix(uHorizonColor, uMidSkyColor, smoothstep(0.0, 0.34, h));
        sky = mix(sky, uZenithColor, smoothstep(0.28, 0.92, h));

        // Subtle golden late-afternoon warmth toward the sun azimuth near horizon
        float sunAmt = max(dot(dir, uSunDir), 0.0);
        float horizonBand = pow(1.0 - h, 3.0);
        sky = mix(sky, uWarmHorizon, horizonBand * (0.28 + 0.55 * pow(sunAmt, 2.0)));

        // Soft solar halo + crisp sun core
        sky += vec3(1.0, 0.92, 0.74) * pow(sunAmt, 14.0) * 0.24;
        sky += vec3(1.0, 0.97, 0.88) * smoothstep(0.9972, 0.9994, sunAmt) * 0.75;

        gl_FragColor = vec4(sky, 1.0);
      }
    `}),i=new J(t,e);return i.renderOrder=-10,i}function Jg(){const n=new he,t=Zg(),e=.88,i=.14,s=j.HALF_LENGTH+5.6,o=j.HALF_WIDTH+4,r=new Jt({color:"#1b2430",roughness:.45,metalness:.4}),a=(d,f,m,_)=>{const g=t.clone();g.needsUpdate=!0,g.repeat.set(Math.max(1,Math.round(d/5.5)),1);const p=new Jt({map:g,roughness:.42,metalness:.28}),y=new xn(d,e,i),v=[r,r,r,r,p,r],x=new J(y,v);x.position.set(f,e*.5-.01,m),x.rotation.y=_,x.castShadow=!0,x.receiveShadow=!0,n.add(x);const w=new xn(d+.04,.045,i+.04),T=new J(w,r);T.position.set(f,e,m),T.rotation.y=_,n.add(T)},c=s*2-2.4,l=o*2-2.4;a(c,0,-o,0),a(c,0,o,Math.PI),a(l,-s,0,Math.PI*.5),a(l,s,0,-Math.PI*.5);const h=2.1,u=[{x:-s+.6,z:-o+.6,rotY:Math.PI*.25},{x:s-.6,z:-o+.6,rotY:-Math.PI*.25},{x:s-.6,z:o-.6,rotY:-Math.PI*.75},{x:-s+.6,z:o-.6,rotY:Math.PI*.75}];for(const d of u)a(h,d.x,d.z,d.rotY);return n}function jg(){const n=new he,t=[],e=new Jt({color:"#f8fafc",roughness:.3,metalness:.15}),i=new Jt({color:"#1e293b",roughness:.6,metalness:.3}),s=new Jt({color:"#f5b82e",emissive:"#4d3206",emissiveIntensity:.18,roughness:.55,metalness:.05,side:Ne}),o=1.52,r=new se(.018,.022,o,10),a=new se(.042,.05,.06,10),c=new fe(.028,10,8),l=[[-32,-20,0],[j.HALF_LENGTH,-20,1.4],[j.HALF_LENGTH,j.HALF_WIDTH,2.7],[-32,j.HALF_WIDTH,4.1]];for(const[h,u,d]of l){const f=new he;f.position.set(h,0,u);const m=new J(r,e);m.position.y=o*.5,m.castShadow=!0,f.add(m);const _=new J(a,i);_.position.y=.03,f.add(_);const g=new J(c,e);g.position.y=o+.01,f.add(g);const p=.48,y=.32,v=new je(p,y,8,3);v.translate(p*.5+.015,o-y*.5-.04,0);const x=v.attributes.position;for(let A=0;A<x.count;A++){const R=x.getX(A),M=x.getY(A),S=ce.clamp((R-.015)/p,0,1),C=o-y*.5-.04,N=C+(M-C)*(1-.35*S);x.setY(A,N)}v.computeVertexNormals();const w=new Float32Array(x.array),T=new J(v,s);T.castShadow=!0,T.rotation.y=.35,f.add(T),n.add(f),t.push({geometry:v,restPositions:w,phaseOffset:d})}return{group:n,flags:t}}function Qg(){const n=new he,t=new Jt({color:"#2c3846",roughness:.42,metalness:.65}),e=new Jt({color:"#1e2733",roughness:.45,metalness:.55}),i=new Jt({color:"#fffbf0",emissive:"#fff2cc",emissiveIntensity:2.2,roughness:.2,metalness:.1}),s=document.createElement("canvas");s.width=64,s.height=64;const o=s.getContext("2d");if(o){const m=o.createRadialGradient(32,32,2,32,32,32);m.addColorStop(0,"rgba(255, 248, 224, 0.55)"),m.addColorStop(.35,"rgba(255, 240, 200, 0.18)"),m.addColorStop(1,"rgba(255, 240, 200, 0.0)"),o.fillStyle=m,o.fillRect(0,0,64,64)}const r=new Qe(s),a=new Nl({map:r,transparent:!0,depthWrite:!1,blending:Bi}),c=[[-46,-32],[46,-32],[46,32],[-46,32]],l=25.5,h=new se(.18,.42,l,12),u=new se(.62,.78,.9,12),d=new xn(3.8,1.55,.35),f=new je(3.45,1.2);for(const[m,_]of c){const g=new he;g.position.set(m,0,_);const p=Math.atan2(-m,-_);g.rotation.y=p;const y=new J(u,e);y.position.y=.45,g.add(y);const v=new J(h,t);v.position.y=l*.5,g.add(v);const x=new he;x.position.set(0,l-.2,.35),x.rotation.x=.48;const w=new J(d,e);x.add(w);const T=new J(f,i);T.position.z=.19,x.add(T);const A=new $u(a);A.position.set(0,0,.4),A.scale.set(6.5,4.2,1),x.add(A),g.add(x),n.add(g)}return n}function t_(n){const t=new he;t.name="PitchEnvironment",n.fog=new ba("#d8e8f3",.0038);const e=new L(36,48,28),i=$g(e);t.add(i);const s=new Kl("#bce2ff","#386c3b",.88);s.position.set(0,50,0),t.add(s);const o=new Di("#fff2d9",2.2);o.position.copy(e),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.near=10,o.shadow.camera.far=140,o.shadow.camera.left=-40,o.shadow.camera.right=40,o.shadow.camera.top=28,o.shadow.camera.bottom=-28,o.shadow.bias=-35e-5,o.shadow.normalBias=.032,o.shadow.radius=2.4,t.add(o),t.add(o.target);const r=new Di("#a2ceff",.56);r.position.set(-34,24,-30),t.add(r);const a=qg(),c=new je(da,fa);c.rotateX(-Math.PI*.5);const l=new Jt({map:a,roughness:.88,metalness:.02}),h=new J(c,l);h.receiveShadow=!0,h.position.y=0,t.add(h);const u=Yg(),d=new je(114,84);d.rotateX(-Math.PI*.5);const f=new Jt({map:u,roughness:.92,metalness:.01}),m=new J(d,f);m.position.y=-.018,m.receiveShadow=!0,t.add(m);const _=new je(420,420);_.rotateX(-Math.PI*.5);const g=new Jt({color:"#2c5838",roughness:.98,metalness:0}),p=new J(_,g);p.position.y=-.06,t.add(p),t.add(Jg());const{group:y,flags:v}=jg();t.add(y),t.add(Qg());const x=new Jt({color:"#f8fafc",roughness:.24,metalness:.34}),w=new Jt({color:"#dbe2ea",roughness:.34,metalness:.45}),T=Kg(),A=new Jt({map:T,color:"#ffffff",transparent:!0,opacity:.86,alphaTest:.08,side:Ne,depthWrite:!1,roughness:.72,metalness:.02}),R=$c("home",x,w,A),M=$c("away",x,w,A);t.add(R.group),t.add(M.group);const S={home:R,away:M};n.add(t);const C=new L,N=(D,G,H)=>{const K=S[D];if(!K)return;let et,ot,_t;Math.abs(G.x)>j.GOAL_DEPTH+4?(D==="away"?(et=G.x-j.HALF_LENGTH,_t=G.z):(et=-32-G.x,_t=-G.z),ot=G.y):(et=Math.abs(G.x),ot=G.y,_t=D==="away"?G.z:-G.z);const Ct=new L(ce.clamp(et,.35,j.GOAL_DEPTH),ce.clamp(ot,.15,j.GOAL_HEIGHT-.1),ce.clamp(_t,-3.1+.15,j.GOAL_HALF_WIDTH-.15)),q=ce.clamp(H,.25,1.5);K.pulses.push({impact:Ct,power:q,age:0,duration:2.35}),K.pulses.length>6&&K.pulses.shift()},U=(D,G,H)=>{for(let et=D.pulses.length-1;et>=0;et--)D.pulses[et].age+=G,D.pulses[et].age>=D.pulses[et].duration&&D.pulses.splice(et,1);const K=D.pulses.length>0;for(const et of D.panels){const ot=et.geometry.attributes.position,_t=ot.array,Ct=et.restPositions,q=et.pinWeights,it=et.outwardNormal.x,ht=et.outwardNormal.y,st=et.outwardNormal.z,At=q.length;for(let Vt=0;Vt<At;Vt++){const vt=q[Vt],Ot=Vt*3,Pt=Ct[Ot],kt=Ct[Ot+1],I=Ct[Ot+2];if(vt<=.001){_t[Ot]=Pt,_t[Ot+1]=kt,_t[Ot+2]=I;continue}const _e=Math.sin(H*2.1+I*1.3+kt*1.7)*.01*vt;let Bt=it*_e,Ht=ht*_e*.5,Mt=st*_e;if(K)for(let Kt=0;Kt<D.pulses.length;Kt++){const yt=D.pulses[Kt];C.set(Pt-yt.impact.x,kt-yt.impact.y,I-yt.impact.z);const P=C.length(),E=Math.sin(Math.min(yt.age*11,Math.PI*.5)),V=Math.exp(-yt.age*2.15),$=Math.exp(-(P*P)/(1.35*1.35)),nt=yt.power*.54*E*V*$,Z=Math.exp(-yt.age*2.35)*Math.exp(-P*.42),wt=Math.sin(yt.age*17.5-P*4.4),ft=yt.power*.16*Z*wt,xt=(nt+ft)*vt;if(Bt+=it*xt,Ht+=ht*xt,Mt+=st*xt,P>.05){const Zt=nt*.22*vt/P;Bt+=C.x*Zt*.4,Ht+=C.y*Zt,Mt+=C.z*Zt}}_t[Ot]=Pt+Bt,_t[Ot+1]=kt+Ht,_t[Ot+2]=I+Mt}ot.needsUpdate=!0,(K||D.wasActive)&&et.geometry.computeVertexNormals()}D.wasActive=K},F=D=>{for(const G of v){const H=G.geometry.attributes.position,K=H.array,et=G.restPositions;for(let ot=0;ot<H.count;ot++){const _t=ot*3,Ct=et[_t],q=et[_t+1],it=et[_t+2],ht=ce.clamp((Ct-.015)/.48,0,1),st=(Math.sin(D*6.4-ht*5.2+G.phaseOffset)*.055+Math.sin(D*11.2-ht*8.5+G.phaseOffset*1.7)*.018)*ht*ht;K[_t]=Ct-Math.abs(st)*.18,K[_t+1]=q+Math.sin(D*4.2+G.phaseOffset)*.012*ht,K[_t+2]=it+st}H.needsUpdate=!0}};return{group:t,triggerNetRipple:N,update:(D,G)=>{const H=Math.min(Math.max(D,0),.05);U(R,H,G),U(M,H,G),F(G)}}}const Jc=300,jc=320;function Qc(n,t){const e={};for(const s of n)e[s.id]="";if(n.length===0||typeof document>"u")return e;let i=null;try{i=new eh({alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),i.setPixelRatio(1),i.setSize(Jc,jc,!1),i.setClearColor(0,0),i.outputColorSpace=Se,i.toneMapping=_a,i.toneMappingExposure=1.14;const s=new Dl,o=new Kl(16317180,3359061,1.05);s.add(o);const r=new Di(16774628,2.25);r.position.set(-2.1,2.7,3.2),s.add(r);const a=new Di(16639626,1.85);a.position.set(2.4,2.35,-2.35),s.add(a);const c=new Di(12248829,1.1);c.position.set(-2.35,2.05,-2.4),s.add(c);const l=new Di(14870768,.5);l.position.set(1.9,1.4,2.5),s.add(l);const h=new $e(25,Jc/jc,.1,20);for(const u of n){const d=u.positionGroup==="GK",f=ih(u,t,d);try{f.shadowBlob.visible=!1;const m=u.appearance.hairStyle==="ponytail_long"?-.34:-.26;f.root.rotation.y=m,f.torso.rotation.x=.02,f.headGroup.rotation.y=-m*.38,f.headGroup.rotation.x=-.02,f.leftShoulder.rotation.z=.14,f.rightShoulder.rotation.z=-.14,f.leftElbow.rotation.x=-.25,f.rightElbow.rotation.x=-.25;const _=f.heightScale,{hairStyle:g,build:p}=u.appearance,y=g==="curly_voluminous"||g==="topknot_bun"?.028:g==="curly_highlighted"||g==="slick_undercut"?.016:0,v=p==="towering"||p==="stocky"?.03:0,x=(1.56+y)*_,w=(1.62+y)*_,T=(1.62+y*1.3+v)*_;h.position.set(0,w,T),h.lookAt(0,x,0),s.add(f.root),i.render(s,h),e[u.id]=i.domElement.toDataURL("image/png"),s.remove(f.root)}finally{ua(f)}}}catch{}finally{if(i)try{i.dispose(),i.forceContextLoss()}catch{}}return e}const e_=.46;function Q(n,t,e){return n<t?t:n>e?e:n}function rh(n){let t=n;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function tl(n,t){return rh(t-n)}function fo(n,t=0){return Number.isFinite(n)?n:t}function pa(n,t,e){const i=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return(i-Math.floor(i))*2-1}function Is(n){const{pace:t,dribbling:e,defending:i,physical:s}=n.stats,o=t/99,r=e/99,a=i/99,c=s/99,l=5.8+o*2.5,h=7.6+o*3.3;return{baseRunSpeed:l,sprintSpeed:h,dribbleSpeedFactor:.9+r*.085,acceleration:17.5+o*10.5+r*7.5,deceleration:23+r*9,turnRate:7.8+r*7.8,staminaDrainRate:.23-c*.08,staminaRecoverRate:.24+c*.14,tackleReach:1.28+a*.48+c*.18,pickupRadius:.68+r*.16}}function ps(n,t,e,i,s){const o=Is(n.profile);n.maxSpeed=o.sprintSpeed,n.tackleCooldown>0&&(n.tackleCooldown=Math.max(0,n.tackleCooldown-i)),n.kickCooldown>0&&(n.kickCooldown=Math.max(0,n.kickCooldown-i)),n.actionTimer>0&&(n.actionTimer=Math.max(0,n.actionTimer-i),n.actionTimer===0&&(n.actionState==="stunned"||n.actionState==="tackle"||n.actionState==="pass"||n.actionState==="shoot_release"||n.actionState==="gk_dive_left"||n.actionState==="gk_dive_right")&&(n.actionState=n.role==="GK"?"gk_ready":"idle",n.diveDirection=0));const r=n.facing;if(n.actionState==="stunned"){const l=Math.exp(-7*i);n.velocity.x*=l,n.velocity.z*=l,n.turnLean*=Math.exp(-10*i)}else if(n.actionState==="tackle"){const l=Math.exp(-4*i);n.velocity.x*=l,n.velocity.z*=l,n.turnLean*=Math.exp(-8*i)}else if(n.actionState==="gk_dive_left"||n.actionState==="gk_dive_right"){const l=Math.exp(-3.4*i);n.velocity.x*=l,n.velocity.z*=l,n.turnLean*=Math.exp(-8*i)}else{const l=Math.hypot(t.x,t.z),h=l>.04,u=h?t.x/Math.max(1,l):0,d=h?t.z/Math.max(1,l):0,f=Q(l,0,1),m=e&&h&&n.actionState!=="shoot_charge"&&n.actionState!=="pass"&&n.actionState!=="shoot_release";if(m&&n.stamina>.02)n.stamina=Math.max(0,n.stamina-o.staminaDrainRate*i);else{const F=h?.8:1.35;n.stamina=Math.min(1,n.stamina+o.staminaRecoverRate*F*i)}const _=.28+.72*Q(n.stamina/.35,0,1),g=o.baseRunSpeed+(o.sprintSpeed-o.baseRunSpeed)*_;let p=m?g:o.baseRunSpeed*f;n.hasBall&&(p*=o.dribbleSpeedFactor),n.actionState==="shoot_charge"?p*=.82:(n.actionState==="pass"||n.actionState==="shoot_release")&&(p*=.68);const y=u*p,v=d*p,x=Math.hypot(n.velocity.x,n.velocity.z);let w=h?o.acceleration:o.deceleration;h&&x>2&&(n.velocity.x*u+n.velocity.z*d)/(x+1e-5)<.25&&(w=o.deceleration*(.85+n.profile.stats.dribbling/99*.35));const T=y-n.velocity.x,A=v-n.velocity.z,R=Math.hypot(T,A),M=w*i;R<=M?(n.velocity.x=y,n.velocity.z=v):(n.velocity.x+=T/R*M,n.velocity.z+=A/R*M),!h&&Math.hypot(n.velocity.x,n.velocity.z)<.08&&(n.velocity.x=0,n.velocity.z=0);let S=null;if(s!==void 0?S=s:h?S=Math.atan2(u,d):Math.hypot(n.velocity.x,n.velocity.z)>.4&&(S=Math.atan2(n.velocity.x,n.velocity.z)),S!==null){const F=tl(n.facing,S),z=o.turnRate*i;n.facing=rh(n.facing+Q(F,-z,z))}const C=tl(r,n.facing)/Math.max(i,1e-4),N=Q(Math.hypot(n.velocity.x,n.velocity.z)/8.5,0,1),U=Q(-C/8.5*N,-1,1);if(n.turnLean+=(U-n.turnLean)*Math.min(1,12*i),n.actionState!=="shoot_charge"&&n.actionState!=="pass"&&n.actionState!=="shoot_release"&&n.actionState!=="celebrate"){const F=Math.hypot(n.velocity.x,n.velocity.z);n.role==="GK"&&!n.hasBall&&F<2.2?n.actionState="gk_ready":F<.35?n.actionState="idle":n.hasBall&&!m?n.actionState="dribble":m&&F>o.baseRunSpeed*.96?n.actionState="sprint":F>4.2?n.actionState="run":n.actionState="jog"}}n.position.x+=n.velocity.x*i,n.position.y=0,n.position.z+=n.velocity.z*i;const a=n.role==="GK"?j.HALF_LENGTH-.35:j.HALF_LENGTH+.9,c=j.HALF_WIDTH+.9;if(n.position.x=Q(fo(n.position.x,0),-a,a),n.position.z=Q(fo(n.position.z,0),-c,c),n.velocity.x=fo(n.velocity.x,0),n.velocity.y=0,n.velocity.z=fo(n.velocity.z,0),n.speed=Math.hypot(n.velocity.x,n.velocity.z),n.speed>.25){const l=n.profile.appearance.strideStyle==="agile"?1.58:n.profile.appearance.strideStyle==="powerful"?1.32:1.44;n.animPhase=(n.animPhase+n.speed*i*l)%(Math.PI*200)}}function n_(n,t,e){const i=n.profile.stats.dribbling/99,s=Is(n.profile),o=Math.sin(n.facing),r=Math.cos(n.facing),a=-Math.cos(n.facing),c=Math.sin(n.facing),l=n.profile.preferredFoot==="right"?1:-1,h=Q((n.speed-s.baseRunSpeed*.82)/Math.max(.5,s.sprintSpeed-s.baseRunSpeed*.82),0,1),u=n.speed>.5?Math.sin(n.animPhase*2)*(.04+h*.08+(1-i)*.04):0,f=.58+h*(.34+(1-i)*.14)+u,m=l*(.14-h*.04),_=n.position.x+o*f+a*m,g=n.position.z+r*f+c*m,p=13.5+i*14.5,y=n.velocity.x+(_-t.position.x)*p,v=n.velocity.z+(g-t.position.z)*p,x=Math.min(1,(15+i*11)*e);t.velocity.x+=(y-t.velocity.x)*x,t.velocity.z+=(v-t.velocity.z)*x,t.velocity.y=0,t.position.x+=t.velocity.x*e,t.position.z+=t.velocity.z*e,t.position.y>t.radius?t.position.y=Math.max(t.radius,t.position.y-Math.max(2.5,(t.position.y-t.radius)*14)*e):t.position.y=t.radius;const w=t.position.x-n.position.x,T=t.position.z-n.position.z,A=Math.hypot(w,T),R=1.24+h*.28+(1-i)*.14;if(A>R&&A>1e-5){const S=R/A;t.position.x=n.position.x+w*S,t.position.z=n.position.z+T*S}const M=.42;A<M&&(A>1e-5?(t.position.x=n.position.x+w/A*M,t.position.z=n.position.z+T/A*M):(t.position.x=n.position.x+o*.56,t.position.z=n.position.z+r*.56)),t.angularVelocity.x=t.velocity.z/t.radius,t.angularVelocity.y=0,t.angularVelocity.z=-t.velocity.x/t.radius,t.spin.x=0,t.spin.y=0,t.spin.z=0,t.isInAir=t.position.y>t.radius+.06,t.lastTouchPlayerId=n.id,t.lastTouchTeam=n.team}function el(n){const t=e_*2,e=t*t;for(let i=0;i<n.length;i++){const s=n[i];for(let o=i+1;o<n.length;o++){const r=n[o],a=r.position.x-s.position.x,c=r.position.z-s.position.z,l=a*a+c*c;if(l>=e)continue;let h=1,u=0,d=0;l>1e-6&&(d=Math.sqrt(l),h=a/d,u=c/d);const f=t-d,m=.65+s.profile.stats.physical/99*.7,_=.65+r.profile.stats.physical/99*.7,g=1/(m+_),p=_*g,y=m*g;s.position.x-=h*f*p,s.position.z-=u*f*p,r.position.x+=h*f*y,r.position.z+=u*f*y;const v=r.velocity.x-s.velocity.x,x=r.velocity.z-s.velocity.z,w=v*h+x*u;if(w<0){const T=-1.25*w;s.velocity.x-=h*T*p,s.velocity.z-=u*T*p,r.velocity.x+=h*T*y,r.velocity.z+=u*T*y}}}}function i_(n,t,e,i,s,o){const r=s-e,a=o-i,c=r*r+a*a;if(c<1e-6){const m=n-e,_=t-i;return m*m+_*_}const l=Q(((n-e)*r+(t-i)*a)/c,0,1),h=e+r*l,u=i+a*l,d=n-h,f=t-u;return d*d+f*f}function ah(n,t,e){let i=Math.sin(n.facing),s=Math.cos(n.facing);if(e){const c=Math.hypot(e.x,e.z);c>.15&&(i=e.x/c,s=e.z/c)}let o=null,r=-1/0;const a=n.team==="home"?1:-1;for(let c=0;c<t.length;c++){const l=t[c];if(l.team!==n.team||l.id===n.id||l.actionState==="stunned")continue;const h=l.position.x-n.position.x,u=l.position.z-n.position.z,d=Math.hypot(h,u);if(d<2.2||d>44)continue;const f=h/d,m=u/d,_=f*i+m*s;if(_<-.15||l.role==="GK"&&_<.72)continue;const g=1-Q(Math.abs(d-12.5)/26,0,1);let p=10,y=10;for(let T=0;T<t.length;T++){const A=t[T];if(A.team===n.team)continue;const R=Math.sqrt(i_(A.position.x,A.position.z,n.position.x,n.position.z,l.position.x,l.position.z));R<p&&(p=R);const M=Math.hypot(A.position.x-l.position.x,A.position.z-l.position.z);M<y&&(y=M)}const v=Q(p/3.2,0,1)*.75+Q(y/3.5,0,1)*.45,x=f*a>.2?.25:0,w=_*3.1+g*.75+v+x;w>r&&(r=w,o=l)}return o}function Cs(n,t,e,i,s,o,r,a){const c=Q(s,0,1),l=n.profile.stats.passing/99,h=a!==void 0?a:ah(n,e,i);let u=Math.sin(n.facing),d=Math.cos(n.facing),f=14.5+c*8+l*2,m=12;if(h){const M=h.position.x-t.position.x,S=h.position.z-t.position.z;m=Math.max(1.5,Math.hypot(M,S));const C=14.2+c*7.8,N=Q((m-8)*.34,-1.2,5.2);f=Q((C+N)*(.93+l*.11),13,26);const U=Q(m/f,.12,1.35),F=c>.35?.65:.55,z=Q(h.position.x+h.velocity.x*U*F,-32+1.2,j.HALF_LENGTH-1.2),D=Q(h.position.z+h.velocity.z*U*F,-20+1.2,j.HALF_WIDTH-1.2),G=z-t.position.x,H=D-t.position.z,K=Math.hypot(G,H);K>1e-4&&(u=G/K,d=H/K)}else if(i){const M=Math.hypot(i.x,i.z);M>.15&&(u=i.x/M,d=i.z/M)}const _=pa(n.position.x,n.position.z,c+m),g=(1-l*.78)*.085,p=_*g,y=Math.cos(p),v=Math.sin(p),x=u*y-d*v,w=u*v+d*y,T=m>16.5||c>.58?Q((m-12)*.14+c*2.3,.55,4.4):.25,A=n.profile.preferredFoot==="right"?1:-1,R=m>11?A*(1.5+l*3.2)*(.4+c*.6):0;return n.hasBall=!1,n.passCharge=0,n.facing=Math.atan2(x,w),n.actionState="pass",n.actionDuration=.24,n.actionTimer=.24,n.kickCooldown=.24,n.kickLeg=n.profile.preferredFoot,t.ownerId=null,t.position.y=Math.max(t.radius,t.position.y),t.velocity.x=x*f,t.velocity.y=T,t.velocity.z=w*f,t.spin.x=0,t.spin.y=R,t.spin.z=0,t.passTargetId=h?h.id:null,t.pickupLockTimer=.22,t.lastKickerId=n.id,t.lastTouchPlayerId=n.id,t.lastTouchTeam=n.team,t.lastKickPower=Q(.28+c*.45,.25,.78),n.team==="home"?o.homePasses+=1:o.awayPasses+=1,r.push({type:"kick_pass",intensity:Q(f/24,.35,.92),position:{x:t.position.x,y:t.position.y,z:t.position.z}}),h}function ch(n,t,e,i,s,o,r){const a=Q(i,0,1),c=n.profile.stats.shooting/99,l=n.team==="home"?1:-1,h=l*j.HALF_LENGTH;let u;if(r!==void 0)u=r;else if(e&&Math.hypot(e.x,e.z)>.15){const ht=Math.hypot(e.x,e.z),st=e.z/ht;u=Q(st*(j.GOAL_HALF_WIDTH-.32)+n.position.z*.08,-2.84,j.GOAL_HALF_WIDTH-.26)}else u=n.position.z>=0?-1.85:1.85;const d=Math.max(0,a-.86)*2.4,f=(1-c*.72)*(.45+d),m=pa(n.position.x,n.position.z,a*13.7),_=pa(n.position.z,n.position.x,a*7.3),g=u+m*.95*f;let p;a<.25?p=.28+a/.25*.45:a<.78?p=.73+(a-.25)/.53*1.15:p=1.88+(a-.78)/.22*.46+d*.25,p=Q(p+_*.22*f,.24,j.GOAL_HEIGHT+.45);const y=Math.min(Yt.MAX_SPEED,18+a*15+c*4.5);let x=(n.profile.preferredFoot==="right"?1:-1)*l;Math.abs(n.position.z)>4.5&&Math.sign(g)!==Math.sign(n.position.z)&&(x=n.position.z>0?1:-1);const w=x*(3.6+c*5.2)*(.42+a*.58),T=h-t.position.x,A=g-t.position.z,R=Math.max(2,Math.hypot(T,A)),M=Q(R/Math.max(y*.92,12),.1,1.5),S=-w*(T/R)*y*Yt.MAGNUS_COEFF*.5*M*M,C=g-Q(S*.65,-2.2,2.2),N=h-t.position.x,U=C-t.position.z,F=Math.max(1,Math.hypot(N,U)),z=N/F,D=U/F,G=Math.max(12,y*.94),H=Q(F/G,.1,1.45),K=(p-t.position.y)/H+.5*Yt.GRAVITY*H*.88,et=Q(K,.9,Math.min(11.5,y*.42)),ot=Math.sqrt(Math.max(16,y*y-et*et)),_t=a>.45?(a-.45)*4.5:0,Ct=-D*_t,q=z*_t;n.hasBall=!1,n.shotCharge=0,n.passCharge=0,n.facing=Math.atan2(z,D),n.actionState="shoot_release",n.actionDuration=.3,n.actionTimer=.3,n.kickCooldown=.32,n.kickLeg=n.profile.preferredFoot,t.ownerId=null,t.position.y=Math.max(t.radius,t.position.y),t.velocity.x=z*ot,t.velocity.y=et,t.velocity.z=D*ot,t.spin.x=Ct,t.spin.y=w,t.spin.z=q,t.passTargetId=null,t.pickupLockTimer=.24,t.lastKickerId=n.id,t.lastTouchPlayerId=n.id,t.lastTouchTeam=n.team,t.lastKickPower=Q(.45+a*.55,.45,1);const it=Math.abs(g)<=j.GOAL_HALF_WIDTH-.12&&p<=j.GOAL_HEIGHT-.06;return n.team==="home"?(s.homeShots+=1,it&&(s.homeShotsOnTarget+=1)):(s.awayShots+=1,it&&(s.awayShotsOnTarget+=1)),o.push({type:"kick_shot",intensity:Q(.48+a*.52,.48,1),position:{x:t.position.x,y:t.position.y,z:t.position.z}}),y}function lh(n,t,e,i,s){if(n.actionState!=="tackle"||n.actionTimer<n.actionDuration*.22||t.position.y>1.2)return!1;const o=Is(n.profile),r=Math.sin(n.facing),a=Math.cos(n.facing),c=n.position.x+r*.55,l=n.position.z+a*.55;if(Math.hypot(t.position.x-c,t.position.z-l)>o.tackleReach*.72)return!1;if(t.ownerId!==null){const u=e.find(_=>_.id===t.ownerId);if(!u||u.team===n.team)return!1;u.hasBall=!1,u.shotCharge=0,u.passCharge=0,u.actionState="stunned",u.actionDuration=.42,u.actionTimer=.42;const d=u.position.x-n.position.x,f=u.position.z-n.position.z,m=Math.hypot(d,f)||1;return u.velocity.x=d/m*3.2,u.velocity.z=f/m*3.2,t.ownerId=null,t.passTargetId=null,t.velocity.x=r*4.6+n.velocity.x*.25,t.velocity.y=.65,t.velocity.z=a*4.6+n.velocity.z*.25,t.spin.x=0,t.spin.y=0,t.spin.z=0,t.lastTouchPlayerId=n.id,t.lastTouchTeam=n.team,t.lastKickerId=u.id,t.pickupLockTimer=.14,t.lastKickPower=.35,n.team==="home"?i.homeTackles+=1:i.awayTackles+=1,s.push({type:"tackle",intensity:.95,position:{x:t.position.x,y:t.position.y,z:t.position.z}}),!0}return t.lastKickerId!==n.id||t.pickupLockTimer<=0?(t.velocity.x=r*5.8+n.velocity.x*.2,t.velocity.y=.55,t.velocity.z=a*5.8+n.velocity.z*.2,t.passTargetId=null,t.lastTouchPlayerId=n.id,t.lastTouchTeam=n.team,t.lastKickerId=n.id,t.pickupLockTimer=.12,s.push({type:"tackle",intensity:.7,position:{x:t.position.x,y:t.position.y,z:t.position.z}}),!0):!1}function hh(n,t,e,i,s,o){if(n.tackleCooldown>0||n.actionState==="stunned"||n.actionState==="tackle"||n.actionState==="gk_dive_left"||n.actionState==="gk_dive_right")return!1;let r=Math.sin(n.facing),a=Math.cos(n.facing);const c=t.position.x-n.position.x,l=t.position.z-n.position.z,h=Math.hypot(c,l);if(i&&Math.hypot(i.x,i.z)>.2){const _=Math.hypot(i.x,i.z),g=i.x/_,p=i.z/_;if(h<3.8&&h>.1){const y=c/h,v=l/h;if(g*y+p*v>.25){const w=g*.45+y*.55,T=p*.45+v*.55,A=Math.hypot(w,T)||1;r=w/A,a=T/A}else r=g,a=p}else r=g,a=p}else h<4.8&&h>.1&&(r=c/h,a=l/h);const u=n.profile.stats.pace/99,d=n.profile.stats.physical/99,f=9.2+u*2.4+d*1.1;return n.facing=Math.atan2(r,a),n.velocity.x=r*f,n.velocity.z=a*f,n.actionState="tackle",n.actionDuration=.32,n.actionTimer=.32,n.tackleCooldown=.82,n.shotCharge=0,n.passCharge=0,lh(n,t,e,s,o)||o.push({type:"tackle",intensity:.42,position:{x:n.position.x,y:.2,z:n.position.z}}),!0}function s_(n,t,e,i){for(let a=0;a<n.length;a++)n[a].actionState==="tackle"&&lh(n[a],t,n,e,i);if(t.ownerId!==null){const a=n.find(c=>c.id===t.ownerId);if(!a||!a.hasBall)t.ownerId=null;else if(a.role!=="GK")for(let c=0;c<n.length;c++){const l=n[c];if(l.team===a.team||l.role==="GK"||l.actionState==="stunned"||l.tackleCooldown>0)continue;const h=Math.hypot(t.position.x-l.position.x,t.position.z-l.position.z),u=l.profile.stats.defending/99,d=(a.isControlled?.39:.46)+u*.1;if(h<d){const f=(t.position.x-l.position.x)/(h+1e-5),m=(t.position.z-l.position.z)/(h+1e-5),_=f*Math.sin(l.facing)+m*Math.cos(l.facing),g=l.position.x-a.position.x,p=l.position.z-a.position.z,y=Math.hypot(g,p)+1e-5,v=g/y*Math.sin(a.facing)+p/y*Math.cos(a.facing);if(_>.42&&v>.2){const x=l.profile.stats.defending*.65+l.profile.stats.physical*.35,w=a.profile.stats.dribbling*.65+a.profile.stats.physical*.35,T=Math.hypot(t.position.x-a.position.x,t.position.z-a.position.z);if(h<T*.72||x>=w+2)return a.hasBall=!1,a.shotCharge=0,a.passCharge=0,a.actionState="stunned",a.actionDuration=.24,a.actionTimer=.24,l.hasBall=!0,l.tackleCooldown=.85,t.ownerId=l.id,t.passTargetId=null,t.lastTouchPlayerId=l.id,t.lastTouchTeam=l.team,t.spin.x=0,t.spin.y=0,t.spin.z=0,l.team==="home"?e.homeTackles+=1:e.awayTackles+=1,i.push({type:"tackle",intensity:.58,position:{x:t.position.x,y:t.position.y,z:t.position.z}}),l}}}return null}if(t.position.y>1.35)return null;const s=Math.hypot(t.velocity.x,t.velocity.y,t.velocity.z);let o=null,r=1/0;for(let a=0;a<n.length;a++){const c=n[a];if(c.role==="GK"||c.actionState==="stunned"||t.pickupLockTimer>0&&t.lastKickerId===c.id)continue;const l=Is(c.profile),u=t.passTargetId===c.id?l.pickupRadius+.22:l.pickupRadius,d=Math.hypot(t.position.x-c.position.x,t.position.z-c.position.z);d<u&&d<r&&(r=d,o=c)}if(!o)return null;if(s>19.5&&t.passTargetId!==o.id&&t.lastTouchTeam!==o.team){const a=(t.position.x-o.position.x)/(r+1e-4),c=(t.position.z-o.position.z)/(r+1e-4);return t.velocity.x=a*s*.42+o.velocity.x*.4,t.velocity.y=Math.max(1.2,Math.abs(t.velocity.y)*.5),t.velocity.z=c*s*.42+o.velocity.z*.4,t.lastTouchPlayerId=o.id,t.lastTouchTeam=o.team,t.lastKickerId=o.id,t.pickupLockTimer=.16,t.passTargetId=null,i.push({type:"tackle",intensity:.72,position:{x:t.position.x,y:t.position.y,z:t.position.z}}),null}for(let a=0;a<n.length;a++)n[a].hasBall=!1;return o.hasBall=!0,t.ownerId=o.id,t.passTargetId=null,t.lastTouchPlayerId=o.id,t.lastTouchTeam=o.team,t.spin.x=0,t.spin.y=0,t.spin.z=0,t.velocity.y=0,o}function o_(){return{memories:new Map,restartAutoPassTimer:0,restartTakerId:null}}function r_(n){n.memories.clear(),n.restartAutoPassTimer=0,n.restartTakerId=null}function Ro(n,t){let e=n.memories.get(t);return e||(e={passDecisionTimer:.45,shootWindupTimer:0,shootTargetZ:0,shootChargeTarget:.55,gkHoldTimer:0,gkReactionTimer:0,gkTrackingShot:!1,tackleAttemptCooldown:0},n.memories.set(t,e)),e}function De(n,t,e,i,s=1.6,o){n.aiTarget.x=t,n.aiTarget.y=0,n.aiTarget.z=e;const r=t-n.position.x,a=e-n.position.z,c=Math.hypot(r,a);if(c<.25)return{dirX:0,dirZ:0,sprint:!1,faceAngle:o};const l=c<s?Q(c/s,.18,1):1;return{dirX:r/c*l,dirZ:a/c*l,sprint:i&&c>2.2,faceAngle:o}}function a_(n,t,e,i,s,o){const r=s-e,a=o-i,c=r*r+a*a;if(c<1e-6)return Math.hypot(n-e,t-i);const l=Q(((n-e)*r+(t-i)*a)/c,0,1);return Math.hypot(n-(e+r*l),t-(i+a*l))}function ma(n,t,e){const i=n.team==="home"?1:-1;let s=null,o=-1/0;for(let r=0;r<t.length;r++){const a=t[r];if(a.team!==n.team||a.id===n.id||a.role==="GK"||a.actionState==="stunned")continue;const c=a.position.x-n.position.x,l=a.position.z-n.position.z,h=Math.hypot(c,l);if(h<4||h>38)continue;let u=12,d=12;for(let p=0;p<t.length;p++){const y=t[p];if(y.team===n.team)continue;const v=a_(y.position.x,y.position.z,n.position.x,n.position.z,a.position.x,a.position.z);v<u&&(u=v);const x=Math.hypot(y.position.x-a.position.x,y.position.z-a.position.z);x<d&&(d=x)}if(u<1.05&&n.role!=="GK")continue;const f=c*i/22,m=Q(u/3.4,0,1)*1.4+Q(d/4.2,0,1)*1.1,_=1-Q(Math.abs(h-14)/24,0,1),g=m+_*.75+(e?f*1.55:f*.65);g>o&&(o=g,s=a)}return s?{target:s,score:o}:null}function c_(n,t,e,i,s,o,r){const a=Ro(i,n.id),c=n.team==="home"?-1:1,l=c*j.HALF_LENGTH,h=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z);if(n.hasBall&&e.ownerId===n.id){a.gkHoldTimer+=r,a.gkTrackingShot=!1,a.gkReactionTimer=0;const T=n.team==="home"?Math.PI*.5:-Math.PI*.5;if(a.gkHoldTimer>=.6){const A=ma(n,t,!1);if(A)Cs(n,e,t,null,.42,s,o,A.target);else{const R={x:-c,z:n.position.z>=0?.35:-.35};Cs(n,e,t,R,.55,s,o,null)}a.gkHoldTimer=0}return{dirX:0,dirZ:0,sprint:!1,faceAngle:T}}if(a.gkHoldTimer=0,n.actionState==="gk_dive_left"||n.actionState==="gk_dive_right")return{dirX:0,dirZ:0,sprint:!1};const u=e.velocity.x*c,d=Math.hypot(e.velocity.x,e.velocity.y,e.velocity.z),f=Math.abs(l-e.position.x);if(e.ownerId===null&&u>6.5&&d>8.5&&f<34&&(e.lastTouchTeam!==n.team||u>12)){const T=(n.position.x-e.position.x)/e.velocity.x;if(T>.02&&T<.78){const A=-e.spin.y*e.velocity.x*Yt.MAGNUS_COEFF,R=e.position.z+e.velocity.z*T+.5*A*T*T*.65,M=Math.max(e.radius,e.position.y+e.velocity.y*T-.5*Yt.GRAVITY*T*T);if(Math.abs(R)<=j.GOAL_HALF_WIDTH+.65&&M<=j.GOAL_HEIGHT+.55){const C=n.profile.stats.defending/99,N=.09+(1-C)*.09;a.gkTrackingShot||(a.gkTrackingShot=!0,a.gkReactionTimer=0),a.gkReactionTimer+=r;const U=Q(R,-3.1+.25,j.GOAL_HALF_WIDTH-.25),F=U-n.position.z;if(a.gkReactionTimer>=N){if(Math.abs(F)>.72&&T<.46){const z=n.team==="home"?1:-1,D=F*z>0;n.actionState=D?"gk_dive_right":"gk_dive_left",n.diveDirection=D?1:-1,n.actionDuration=.5,n.actionTimer=.5,n.facing=n.team==="home"?Math.PI*.5:-Math.PI*.5;const G=5.6+C*1.45,H=Math.abs(F)/Math.max(T,.22),K=Q(H,4.4,G);return n.velocity.z=Math.sign(F)*K,n.velocity.x=-c*.45,a.gkTrackingShot=!1,{dirX:0,dirZ:0,sprint:!1}}return De(n,n.position.x,U,!0,.35,h)}}}}else a.gkTrackingShot=!1,a.gkReactionTimer=0;if(e.ownerId===null&&e.position.x*c>j.HALF_LENGTH-5.8&&Math.abs(e.position.z)<6.2&&d<7.5&&e.position.y<1.3){const T=Math.hypot(e.position.x-n.position.x,e.position.z-n.position.z);let A=!1;for(let R=0;R<t.length;R++){const M=t[R];if(M.team!==n.team&&Math.hypot(e.position.x-M.position.x,e.position.z-M.position.z)<T-1.2){A=!0;break}}if(!A)return De(n,e.position.x,e.position.z,!0,.4,h)}const g=Math.max(1,Math.abs(l-e.position.x)),p=Q(3.4-g*.055,1.35,3.2),y=c*(j.HALF_LENGTH-p),v=Q(p/Math.max(g,3.5),.14,.46),x=Q(e.position.z*Math.max(.22,v),-2.65,2.65),w=Math.hypot(y-n.position.x,x-n.position.z);return De(n,y,x,w>2.2,.55,h)}function l_(n,t,e,i,s){if(t.ownerId!==null)return null;const o=Math.hypot(t.velocity.x,t.velocity.y,t.velocity.z);for(let r=0;r<n.length;r++){const a=n[r];if(a.role!=="GK"||t.pickupLockTimer>0&&t.lastKickerId===a.id)continue;const c=a.actionState==="gk_dive_left"||a.actionState==="gk_dive_right",l=a.profile.stats.defending/99,h=Q((a.profile.appearance.heightCm-188)/100,0,.14);let u=a.position.z;if(c){const U=a.team==="home"?1:-1,F=a.diveDirection*U;u+=F*.42}const d=(c?.96:.78)+l*.12+h,f=(c?2.18:2.02)+h,m=t.position.x-e.x,_=t.position.y-e.y,g=t.position.z-e.z,p=m*m+_*_+g*g;let y=1;p>1e-6&&(y=Q(((a.position.x-e.x)*m+(Math.min(1.1,t.position.y)-e.y)*_+(u-e.z)*g)/p,0,1));const v=e.x+m*y,x=e.y+_*y,w=e.z+g*y,T=Math.hypot(v-a.position.x,w-u);if(T>d||x>f)continue;const A=a.team==="home"?-1:1;if(v*A>j.HALF_LENGTH+.1)continue;const R=o>18.5||c&&T>d*.62||x>1.55,M=Ro(i,a.id);if(M.gkTrackingShot=!1,M.gkReactionTimer=0,!R&&o<17.5){for(let U=0;U<n.length;U++)n[U].hasBall=!1;return a.hasBall=!0,t.ownerId=a.id,t.passTargetId=null,t.position.x=a.position.x-A*.45,t.position.y=Math.max(t.radius,Math.min(x,1)),t.position.z=a.position.z,t.velocity.x=0,t.velocity.y=0,t.velocity.z=0,t.spin.x=0,t.spin.y=0,t.spin.z=0,t.lastTouchPlayerId=a.id,t.lastTouchTeam=a.team,M.gkHoldTimer=0,o>7.5&&s.push({type:"save",intensity:Q(o/20,.4,.9),position:{x:t.position.x,y:t.position.y,z:t.position.z}}),a}const S=-A,C=w>=a.position.z?1:-1,N=Q(o*.44,6.5,13.5);return t.position.x=a.position.x+S*.52,t.position.y=Math.max(t.radius+.15,x),t.position.z=w,t.velocity.x=S*N*.72,t.velocity.y=Q(2.8+o*.1,2.5,6.2),t.velocity.z=C*N*.68,t.spin.x=0,t.spin.y=C*3.5,t.spin.z=0,t.ownerId=null,t.passTargetId=null,t.lastTouchPlayerId=a.id,t.lastTouchTeam=a.team,t.lastKickerId=a.id,t.pickupLockTimer=.28,t.lastKickPower=.5,s.push({type:"save",intensity:Q(o/22,.55,1),position:{x:t.position.x,y:t.position.y,z:t.position.z}}),null}return null}function h_(n,t,e,i,s,o,r,a,c){let l=null,h=null;const u=i.ownerId?e.find(y=>y.id===i.ownerId)??null:null,d=u!==null&&u.team==="away",f=t.find(y=>y.role==="GK")??null;if(s.restartTakerId!==null&&s.restartAutoPassTimer>0&&u&&u.id===s.restartTakerId&&(s.restartAutoPassTimer=Math.max(0,s.restartAutoPassTimer-a),s.restartAutoPassTimer===0)){const y=ma(u,e,!0);Cs(u,i,e,{x:-1,z:-u.position.z*.05},.35,o,r,y?y.target:null),s.restartTakerId=null}if(d&&u){for(let y=0;y<n.length;y++){const v=n[y],x=Ro(s,v.id);if(v.id===u.id){if(x.shootWindupTimer>0){x.shootWindupTimer=Math.max(0,x.shootWindupTimer-a),v.actionState="shoot_charge",v.shotCharge=Q(1-x.shootWindupTimer/.26,.15,x.shootChargeTarget);const F=Math.atan2(-32-v.position.x,x.shootTargetZ-v.position.z);x.shootWindupTimer===0?(l=ch(v,i,null,x.shootChargeTarget,o,r,x.shootTargetZ),h=v.id,c.set(v.id,{dirX:0,dirZ:0,sprint:!1,faceAngle:F})):c.set(v.id,{dirX:-.25,dirZ:0,sprint:!1,faceAngle:F});continue}let w=1/0,T=null,A=!1;for(let F=0;F<t.length;F++){const z=t[F];if(z.role==="GK")continue;const D=Math.hypot(z.position.x-v.position.x,z.position.z-v.position.z);D<w&&(w=D,T=z),z.position.x<v.position.x&&v.position.x-z.position.x<3.6&&Math.abs(z.position.z-v.position.z)<1.8&&(A=!0)}const R=Math.hypot(-32-v.position.x,-v.position.z);if(v.position.x<-12.5&&Math.abs(v.position.z)<12.5&&R<20.5&&(!A||v.position.x<-17.5)&&v.kickCooldown<=0){const z=(f?f.position.z:0)>=0?-1:1;x.shootTargetZ=z*(1.95+v.profile.stats.shooting/99*.58),x.shootChargeTarget=Q(.36+R/21*.44,.34,.8),x.shootWindupTimer=.22,v.actionState="shoot_charge",c.set(v.id,{dirX:-.25,dirZ:0,sprint:!1});continue}x.passDecisionTimer-=a;const S=w<2.35&&A;if((x.passDecisionTimer<=0||S)&&v.kickCooldown<=0){const F=ma(v,e,!0),z=F?v.position.x-F.target.position.x:0;if(F!==null&&(S&&F.score>1.7||z>4.5&&F.score>2.35||v.position.x>6&&z>3&&F.score>2)&&F){const G=Math.hypot(F.target.position.x-v.position.x,F.target.position.z-v.position.z),H=Q((G-7)/18,.18,.68);Cs(v,i,e,null,H,o,r,F.target),x.passDecisionTimer=1.05,c.set(v.id,{dirX:-.3,dirZ:0,sprint:!1});continue}x.passDecisionTimer=S?.35:.92}let C=v.position.x-11.5,N=v.position.z*.58;if(v.position.x<-10&&(C=-27,N=Q(v.position.z*.36,-5,5)),T&&w<4.8){const F=v.position.x-T.position.x,z=v.position.z-T.position.z,D=Math.hypot(F,z)||1,G=(1-w/4.8)*5.2;N+=z/D*G,Math.abs(N)>15.5&&(N=Math.sign(N)*14)}C=Q(C,-32+4.5,j.HALF_LENGTH-3),N=Q(N,-20+2.8,j.HALF_WIDTH-2.8);const U=w>3.2&&v.stamina>.28;c.set(v.id,De(v,C,N,U,1))}else{x.shootWindupTimer=0;let w=v.homeAnchor.x,T=v.homeAnchor.z;const A=i.position.x;if(v.role==="FWD"){const S=v.slotIndex===3?9.2:-9.2;w=Q(A-11.5,-26.5,10),T=Q(S+i.position.z*.22,-16.5,16.5)}else v.role==="MID"?(w=Q(A-2.5,-18,14),T=Q(-Math.sign(i.position.z||1)*5.8,-12,12)):(w=Q(A+12.5,-2,22),T=Q(i.position.z*.38,-8.5,8.5));if(Math.hypot(w-u.position.x,T-u.position.z)<6.5){const S=w-u.position.x,C=T-u.position.z,N=Math.hypot(S,C)||1;w=Q(u.position.x+S/N*7,-27,27),T=Q(u.position.z+C/N*7,-17,17)}const M=Math.hypot(w-v.position.x,T-v.position.z);c.set(v.id,De(v,w,T,M>7&&v.stamina>.38,1.8))}}return{shotSpeed:l,shooterId:h}}const m=[...n].sort((y,v)=>{const x=Math.hypot(i.position.x-y.position.x,i.position.z-y.position.z),w=Math.hypot(i.position.x-v.position.x,i.position.z-v.position.z);return x-w}),g=(i.passTargetId?n.find(y=>y.id===i.passTargetId)??null:null)??m[0],p=m.find(y=>y.id!==g.id)??null;for(let y=0;y<n.length;y++){const v=n[y],x=Ro(s,v.id);if(x.shootWindupTimer=0,x.tackleAttemptCooldown>0&&(x.tackleAttemptCooldown=Math.max(0,x.tackleAttemptCooldown-a)),v.id===g.id){if(u&&u.team==="home"){const w=u.position.x+u.velocity.x*.14+.55,T=u.position.z+u.velocity.z*.14,A=Math.hypot(u.position.x-v.position.x,u.position.z-v.position.z);if(A<1.75&&v.tackleCooldown<=0&&x.tackleAttemptCooldown<=0&&u.role!=="GK"){const M=i.position.x-v.position.x,S=i.position.z-v.position.z;Math.hypot(M,S)<1.55&&(hh(v,i,e,{x:M,z:S},o,r),x.tackleAttemptCooldown=1.85)}const R=A>2.8&&v.stamina>.28;c.set(v.id,De(v,w,T,R,.7))}else{const w=Q(i.position.x+i.velocity.x*.16,-30.5,30.5),T=Q(i.position.z+i.velocity.z*.16,-19,19);c.set(v.id,De(v,w,T,v.stamina>.22,.45))}continue}if(p&&v.id===p.id){const w=Q(i.position.x+5.8,-14,25),T=Q(i.position.z*.52,-11,11),A=Math.hypot(w-v.position.x,T-v.position.z);c.set(v.id,De(v,w,T,A>6.5&&v.stamina>.35,1.5));continue}if(v.role==="DEF"){const w=Q(Math.max(i.position.x+11,12.5),11,25.5),T=Q(i.position.z*.35,-7.5,7.5),A=Math.hypot(w-v.position.x,T-v.position.z);c.set(v.id,De(v,w,T,A>6&&v.stamina>.35,1.4))}else{const w=Q(i.position.x*.55+v.homeAnchor.x*.45+4.5,-12,22),T=Q(v.homeAnchor.z*.75+i.position.z*.25,-16,16),A=Math.hypot(w-v.position.x,T-v.position.z);c.set(v.id,De(v,w,T,A>8&&v.stamina>.45,2))}}return{shotSpeed:l,shooterId:h}}function u_(n,t,e,i,s){const o=i.ownerId?e.find(c=>c.id===i.ownerId)??null:null,r=o!==null&&o.team==="home";let a=null;if(o===null){let l=Math.hypot(i.position.x-t.position.x,i.position.z-t.position.z)-2.2;for(let h=0;h<n.length;h++){const u=n[h],d=Math.hypot(i.position.x-u.position.x,i.position.z-u.position.z);d<l&&(l=d,a=u.id)}}for(let c=0;c<n.length;c++){const l=n[c];if(i.ownerId===null&&i.passTargetId===l.id){const h=Q(i.position.x+i.velocity.x*.14,-30,30),u=Q(i.position.z+i.velocity.z*.14,-18.5,18.5);s.set(l.id,De(l,h,u,!0,.5));continue}if(l.id===a){const h=Q(i.position.x+i.velocity.x*.14,-30,30),u=Q(i.position.z+i.velocity.z*.14,-18.5,18.5);s.set(l.id,De(l,h,u,l.stamina>.25,.5));continue}if(r&&o){let h,u;if(l.role==="FWD"){const m=l.slotIndex===3?-9.5:9.5;h=Q(o.position.x+11.5,-4,27),o.position.x>16&&Math.sign(o.position.z)!==Math.sign(m)?(h=Q(o.position.x+4.5,18,27),u=Math.sign(m)*4.8):u=Q(m+o.position.z*.18,-16.8,16.8)}else l.role==="MID"?(h=Q(o.position.x+(o.position.x<6?6.5:-4.5),-14,19),u=Q(-Math.sign(o.position.z||1)*5.8,-12,12)):(h=Q(o.position.x-13.5,-22.5,4.5),u=Q(o.position.z*.35,-8.5,8.5));if(Math.hypot(h-o.position.x,u-o.position.z)<6.4){const m=h-o.position.x,_=u-o.position.z,g=Math.hypot(m,_)||1;h=Q(o.position.x+m/g*6.8,-26.5,27.5),u=Q(o.position.z+_/g*6.8,-17.2,17.2)}const f=Math.hypot(h-l.position.x,u-l.position.z);s.set(l.id,De(l,h,u,f>7.5&&l.stamina>.35,1.8))}else{let h,u;if(l.role==="DEF"?(h=Q(Math.min(i.position.x-9.5,-11.5),-25,-9.5),u=Q(i.position.z*.38,-7.8,7.8)):l.role==="MID"?(h=Q(i.position.x-6.5,-20,8),u=Q(i.position.z*.55,-11.5,11.5)):(h=Q(i.position.x*.55+l.homeAnchor.x*.45-3,-16,14),u=Q(l.homeAnchor.z*.72+i.position.z*.25,-16,16)),Math.hypot(h-t.position.x,u-t.position.z)<3.6){const m=h-t.position.x,_=u-t.position.z,g=Math.hypot(m,_)||1;h=Q(t.position.x+m/g*4,-26,26),u=Q(t.position.z+_/g*4,-17.5,17.5)}const f=Math.hypot(h-l.position.x,u-l.position.z);s.set(l.id,De(l,h,u,f>7&&l.stamina>.35,1.6))}}}function d_(n,t,e,i,s,o,r){const a=new Map;let c=null,l=null;const h=[],u=[],d=[];for(let m=0;m<n.length;m++){const _=n[m];_.team==="home"?(h.push(_),_.role!=="GK"&&!_.isControlled&&u.push(_)):_.role!=="GK"&&d.push(_)}for(let m=0;m<n.length;m++){const _=n[m];if(_.role==="GK"&&!_.isControlled){const g=c_(_,n,t,i,s,o,r);a.set(_.id,g)}}const f=h_(d,h,n,t,i,s,o,r,a);return f.shotSpeed!==null&&(c=f.shotSpeed,l=f.shooterId),u_(u,e,n,t,a),{commands:a,lastShotSpeed:c,lastShooterId:l}}function f_(n,t,e){const i=new Map,s=n.find(o=>o.id===t)??null;for(let o=0;o<n.length;o++){const r=n[o];if(r.id===t){const a=e==="home"?22:-22,c=r.position.z>=0?15:-15;r.actionState="celebrate",i.set(r.id,De(r,a,c,!1,1.5))}else if(r.team===e&&r.role!=="GK"&&s){const a=r.slotIndex*1.6,c=Q(s.position.x+Math.cos(a)*2.6,-28,28),l=Q(s.position.z+Math.sin(a)*2.6,-18,18);r.actionState="celebrate",i.set(r.id,De(r,c,l,!1,1.2))}else i.set(r.id,De(r,r.homeAnchor.x*.7,r.homeAnchor.z*.7,!1,2.5))}return i}function Pn(n,t,e){return n<t?t:n>e?e:n}function sn(n,t=0){return Number.isFinite(n)?n:t}function p_(){return{position:{x:0,y:Yt.RADIUS,z:0},velocity:{x:0,y:0,z:0},angularVelocity:{x:0,y:0,z:0},spin:{x:0,y:0,z:0},radius:Yt.RADIUS,ownerId:null,lastTouchPlayerId:null,lastTouchTeam:null,lastKickPower:0,isInAir:!1,passTargetId:null,pickupLockTimer:0,lastKickerId:null}}function nl(n,t=0,e=Yt.RADIUS,i=0){n.position.x=t,n.position.y=Math.max(Yt.RADIUS,e),n.position.z=i,n.velocity.x=0,n.velocity.y=0,n.velocity.z=0,n.angularVelocity.x=0,n.angularVelocity.y=0,n.angularVelocity.z=0,n.spin.x=0,n.spin.y=0,n.spin.z=0,n.ownerId=null,n.passTargetId=null,n.pickupLockTimer=0,n.lastKickerId=null,n.lastKickPower=0,n.isInAir=n.position.y>Yt.RADIUS+.06}function il(n,t,e,i,s,o,r,a){const c=s-t,l=o-e,h=r-i,u=c*c+l*l+h*h;let d=0;u>1e-6&&(d=((n.position.x-t)*c+(n.position.y-e)*l+(n.position.z-i)*h)/u,d=Pn(d,0,1));const f=t+c*d,m=e+l*d,_=i+h*d,g=n.position.x-f,p=n.position.y-m,y=n.position.z-_,v=g*g+p*p+y*y,x=n.radius+a;if(v>=x*x||v<1e-10)return 0;const w=Math.sqrt(v),T=g/w,A=p/w,R=y/w,M=x-w;n.position.x+=T*M,n.position.y+=A*M,n.position.z+=R*M;const S=n.velocity.x*T+n.velocity.y*A+n.velocity.z*R;if(S<0){const C=-1.72*S;return n.velocity.x+=C*T,n.velocity.y+=C*A,n.velocity.z+=C*R,n.spin.y+=(R*n.velocity.x-T*n.velocity.z)*.2,-S}return 0}function m_(n,t,e){const i=[-32,j.HALF_LENGTH],s=[-3.1,j.GOAL_HALF_WIDTH],o=j.POST_RADIUS,r=j.GOAL_HEIGHT;for(let a=0;a<i.length;a++){const c=i[a];if(Math.abs(n.position.x-c)>1.5)continue;for(let h=0;h<s.length;h++){const u=s[h],d=il(n,c,0,u,c,r,u,o);d>1.2&&!e.value&&(e.value=!0,t.push({type:"post_hit",intensity:Pn(d/22,.2,1),position:{x:n.position.x,y:n.position.y,z:n.position.z}}))}const l=il(n,c,r,-3.1,c,r,j.GOAL_HALF_WIDTH,o);l>1.2&&!e.value&&(e.value=!0,t.push({type:"post_hit",intensity:Pn(l/22,.2,1),position:{x:n.position.x,y:n.position.y,z:n.position.z}}))}}function g_(n,t,e,i,s,o){const r=n.radius,a=j.HALF_LENGTH,c=j.GOAL_HALF_WIDTH,l=j.GOAL_HEIGHT,h=j.GOAL_DEPTH,u=d=>{const f=d===1?"away":"home",m=n.position.x*d,_=t*d;if(m<a-r&&_<a-r)return;const g=a+h,p=Math.abs(i)<c-.04&&e<l-.02&&_<=g,y=m>a&&m<=g+r*2;if(p&&m>a){let v=0;if(m>g-r){n.position.x=d*(g-r);const x=n.velocity.x*d;x>0&&(v=Math.max(v,x),n.velocity.x=-d*x*Yt.RESTITUTION_NET,n.velocity.y*=.62,n.velocity.z*=.58,n.spin.x*=.3,n.spin.y*=.3,n.spin.z*=.3)}n.position.z>c-r?(n.position.z=c-r,n.velocity.z>0&&(v=Math.max(v,n.velocity.z),n.velocity.z=-n.velocity.z*Yt.RESTITUTION_NET,n.velocity.x*=.65,n.velocity.y*=.68)):n.position.z<-(c-r)&&(n.position.z=-(c-r),n.velocity.z<0&&(v=Math.max(v,-n.velocity.z),n.velocity.z=-n.velocity.z*Yt.RESTITUTION_NET,n.velocity.x*=.65,n.velocity.y*=.68)),n.position.y>l-r&&(n.position.y=l-r,n.velocity.y>0&&(v=Math.max(v,n.velocity.y),n.velocity.y=-n.velocity.y*Yt.RESTITUTION_NET,n.velocity.x*=.68,n.velocity.z*=.68)),v>1.4&&!o.value&&(o.value=!0,s.push({type:"net_ripple",intensity:Pn(v/20,.2,1),position:{x:n.position.x,y:n.position.y,z:n.position.z},goalSide:f}))}else if(y&&Math.abs(n.position.z)<c+r&&n.position.y<l+r){let v=0;if(Math.abs(i)>=c-.04){const x=i>=0?1:-1;n.position.z=x*(c+r);const w=-n.velocity.z*x;w>0&&(v=Math.max(v,w),n.velocity.z=x*w*Yt.RESTITUTION_NET,n.velocity.x*=.6)}else if(e>=l-.02)n.position.y=l+r,n.velocity.y<0&&(v=Math.max(v,-n.velocity.y),n.velocity.y=-n.velocity.y*Yt.RESTITUTION_NET,n.velocity.x*=.72,n.velocity.z*=.72);else if(_>g){n.position.x=d*(g+r);const x=-n.velocity.x*d;x>0&&(v=Math.max(v,x),n.velocity.x=d*x*Yt.RESTITUTION_NET)}v>1.4&&!o.value&&(o.value=!0,s.push({type:"net_ripple",intensity:Pn(v/22,.18,.85),position:{x:n.position.x,y:n.position.y,z:n.position.z},goalSide:f}))}};u(1),u(-1)}function po(n,t,e){const i=[];let s=null,o=null;if(n.pickupLockTimer>0&&(n.pickupLockTimer=Math.max(0,n.pickupLockTimer-t),n.pickupLockTimer===0&&(n.lastKickerId=null)),n.ownerId!==null)return n.isInAir=n.position.y>n.radius+.06,{events:i,scoredBy:s,outOfBounds:o};const r=Math.hypot(n.velocity.x,n.velocity.y,n.velocity.z),a=r>28?3:r>18?2:1,c=t/a,l={value:!1},h={value:!1},u={value:!1};for(let d=0;d<a;d++){const f=n.position.x,m=n.position.y,_=n.position.z,g=n.position.y<=n.radius+.02&&Math.abs(n.velocity.y)<.35;(!g||n.velocity.y>0)&&(n.velocity.y-=Yt.GRAVITY*c);const p=g?.22:1,y=(n.spin.y*n.velocity.z-n.spin.z*n.velocity.y)*Yt.MAGNUS_COEFF*p,v=(n.spin.z*n.velocity.x-n.spin.x*n.velocity.z)*Yt.MAGNUS_COEFF*p,x=(n.spin.x*n.velocity.y-n.spin.y*n.velocity.x)*Yt.MAGNUS_COEFF*p;n.velocity.x+=Pn(y,-28,28)*c,n.velocity.y+=Pn(v,-18,18)*c,n.velocity.z+=Pn(x,-28,28)*c;const w=Math.exp(-.24*c);if(n.velocity.x*=w,n.velocity.y*=w,n.velocity.z*=w,g){const S=Math.exp(-1.48*c);n.velocity.x*=S,n.velocity.z*=S;const C=Math.hypot(n.velocity.x,n.velocity.z);if(C<.06)n.velocity.x=0,n.velocity.z=0;else{const N=Math.min(C,.38*c),U=(C-N)/C;n.velocity.x*=U,n.velocity.z*=U}}const T=Math.hypot(n.velocity.x,n.velocity.y,n.velocity.z);if(T>Yt.MAX_SPEED){const S=Yt.MAX_SPEED/T;n.velocity.x*=S,n.velocity.y*=S,n.velocity.z*=S}if(n.position.x+=n.velocity.x*c,n.position.y+=n.velocity.y*c,n.position.z+=n.velocity.z*c,n.position.y<=n.radius)if(n.position.y=n.radius,n.velocity.y<-1.15){const S=-n.velocity.y;n.velocity.y=S*Yt.RESTITUTION_GROUND,n.velocity.x*=.94,n.velocity.z*=.94,n.spin.x*=.72,n.spin.y*=.76,n.spin.z*=.72,l.value||(l.value=!0,i.push({type:"bounce",intensity:Pn(S/14,.14,1),position:{x:n.position.x,y:n.position.y,z:n.position.z}}))}else n.velocity.y=0;if(m_(n,i,h),g_(n,f,m,_,i,u),n.position.y<=n.radius+.03&&Math.abs(n.velocity.y)<.35){const S=n.velocity.z/n.radius,C=-n.velocity.x/n.radius,N=Math.min(1,22*c);n.angularVelocity.x+=(S-n.angularVelocity.x)*N,n.angularVelocity.y+=(n.spin.y*.4-n.angularVelocity.y)*N,n.angularVelocity.z+=(C-n.angularVelocity.z)*N;const U=Math.exp(-4.5*c);n.spin.x*=U,n.spin.y*=U,n.spin.z*=U}else{const S=n.velocity.z/n.radius*.35+n.spin.x,C=n.spin.y,N=-n.velocity.x/n.radius*.35+n.spin.z,U=Math.min(1,10*c);n.angularVelocity.x+=(S-n.angularVelocity.x)*U,n.angularVelocity.y+=(C-n.angularVelocity.y)*U,n.angularVelocity.z+=(N-n.angularVelocity.z)*U;const F=Math.exp(-.65*c);n.spin.x*=F,n.spin.y*=F,n.spin.z*=F}if(e&&s===null){const S=Math.abs(n.position.z)<j.GOAL_HALF_WIDTH-.08,C=n.position.y<j.GOAL_HEIGHT-.05,N=j.HALF_LENGTH+n.radius*.45;if(n.position.x>N&&S&&C)s="home";else if(n.position.x<-N&&S&&C)s="away";else if(o===null){const U=j.HALF_WIDTH+n.radius,F=j.HALF_LENGTH+n.radius;n.position.z<-U?o={side:"touchline_north",position:{x:n.position.x,y:n.position.y,z:n.position.z}}:n.position.z>U?o={side:"touchline_south",position:{x:n.position.x,y:n.position.y,z:n.position.z}}:n.position.x<-F&&(!S||!C)?o={side:"goal_line_home",position:{x:n.position.x,y:n.position.y,z:n.position.z}}:n.position.x>F&&(!S||!C)&&(o={side:"goal_line_away",position:{x:n.position.x,y:n.position.y,z:n.position.z}})}}const R=j.HALF_LENGTH+5,M=j.HALF_WIDTH+4.5;n.position.x>R?(n.position.x=R,n.velocity.x=-Math.abs(n.velocity.x)*.35):n.position.x<-R&&(n.position.x=-R,n.velocity.x=Math.abs(n.velocity.x)*.35),n.position.z>M?(n.position.z=M,n.velocity.z=-Math.abs(n.velocity.z)*.35):n.position.z<-M&&(n.position.z=-M,n.velocity.z=Math.abs(n.velocity.z)*.35)}return n.position.x=sn(n.position.x,0),n.position.y=Math.max(n.radius,sn(n.position.y,n.radius)),n.position.z=sn(n.position.z,0),n.velocity.x=sn(n.velocity.x,0),n.velocity.y=sn(n.velocity.y,0),n.velocity.z=sn(n.velocity.z,0),n.angularVelocity.x=sn(n.angularVelocity.x,0),n.angularVelocity.y=sn(n.angularVelocity.y,0),n.angularVelocity.z=sn(n.angularVelocity.z,0),n.spin.x=sn(n.spin.x,0),n.spin.y=sn(n.spin.y,0),n.spin.z=sn(n.spin.z,0),n.isInAir=n.position.y>n.radius+.06,{events:i,scoredBy:s,outOfBounds:o}}const __=["GK","DEF","MID","FWD","FWD"];function sl(){return{homeShots:0,awayShots:0,homeShotsOnTarget:0,awayShotsOnTarget:0,homePasses:0,awayPasses:0,homeTackles:0,awayTackles:0,homePossessionTicks:0,awayPossessionTicks:0}}function ol(n,t,e){const i=bo[e]??bo[2],s=t==="home"?1:-1,o={x:i.x*s,y:0,z:i.z*s},r=Is(n);return{id:`${t}_${e}`,profile:n,team:t,slotIndex:e,role:__[e]??n.positionGroup,position:{x:o.x,y:0,z:o.z},velocity:{x:0,y:0,z:0},facing:t==="home"?Math.PI*.5:-Math.PI*.5,speed:0,maxSpeed:r.sprintSpeed,stamina:1,hasBall:!1,actionState:e===0?"gk_ready":"idle",actionTimer:0,actionDuration:0,kickLeg:n.preferredFoot,shotCharge:0,passCharge:0,animPhase:e*1.1,turnLean:0,isControlled:t==="home"&&e===4,tackleCooldown:0,kickCooldown:0,diveDirection:0,homeAnchor:o,aiTarget:{x:o.x,y:0,z:o.z}}}class v_{homeSquad;awaySquad;homeKit;awayKit;players=[];ball=p_();aiState=o_();phase="squad_select";previousPhase="kickoff_ready";homeScore=0;awayScore=0;matchSeconds=0;half=1;phaseTimer=0;kickoffTeam="home";restartType="kickoff";restartTeam="home";restartPosition={x:0,y:Yt.RADIUS,z:0};controlledPlayerId="home_4";goals=[];latestGoal=null;stats=sl();bannerText=null;lastUserAimDir={x:1,z:0};autoSwitchCooldown=0;lastShotSpeedMs=0;lastTouchByTeam={home:null,away:null};spacePressMode="none";ePressMode="none";postPassSwitchLockTimer=0;constructor(t,e,i,s){this.homeSquad=[...t],this.awaySquad=[...e],this.homeKit=i,this.awayKit=s,this.buildPlayers(),this.setupKickoffPositions("home"),this.phase="squad_select",this.previousPhase="kickoff_ready",this.bannerText=null}resetMatch(t,e,i,s){t&&(this.homeSquad=[...t]),e&&(this.awaySquad=[...e]),i&&(this.homeKit=i),s&&(this.awayKit=s),this.homeScore=0,this.awayScore=0,this.matchSeconds=0,this.half=1,this.kickoffTeam="home",this.restartType="kickoff",this.restartTeam="home",this.restartPosition={x:0,y:Yt.RADIUS,z:0},this.goals=[],this.latestGoal=null,this.stats=sl(),this.lastShotSpeedMs=0,this.lastTouchByTeam={home:null,away:null},this.autoSwitchCooldown=0,this.resetInputLatches(),this.lastUserAimDir={x:1,z:0},r_(this.aiState),this.buildPlayers(),this.setupKickoffPositions("home"),this.phase="kickoff_ready",this.previousPhase="kickoff_ready",this.phaseTimer=ze.KICKOFF_READY_SECONDS,this.bannerText="KICK OFF"}startMatch(){if(this.phase==="fulltime"){this.resetMatch();return}this.resetInputLatches(),this.setupKickoffPositions(this.kickoffTeam),this.phase="kickoff_ready",this.previousPhase="kickoff_ready",this.phaseTimer=ze.KICKOFF_READY_SECONDS,this.bannerText="KICK OFF"}setPaused(t){if(t){if(this.phase!=="paused"&&this.phase!=="squad_select"&&this.phase!=="fulltime"){this.previousPhase=this.phase,this.phase="paused",this.resetInputLatches();const e=this.getControlledPlayer();e&&(e.shotCharge=0,e.passCharge=0,e.actionState==="shoot_charge"&&(e.actionState="idle"))}}else this.phase==="paused"&&(this.resetInputLatches(),this.phase=this.previousPhase)}getSnapshot(){return{phase:this.phase,previousPhase:this.previousPhase,homeScore:this.homeScore,awayScore:this.awayScore,matchSeconds:this.matchSeconds,half:this.half,phaseTimer:this.phaseTimer,kickoffTeam:this.kickoffTeam,restartType:this.restartType,restartTeam:this.restartTeam,restartPosition:{...this.restartPosition},players:this.players,ball:this.ball,controlledPlayerId:this.controlledPlayerId,goals:this.goals,latestGoal:this.latestGoal,stats:this.stats,homeKit:this.homeKit,awayKit:this.awayKit,bannerText:this.bannerText}}getPassTargetPreview(){if(this.phase!=="playing")return null;const t=this.getControlledPlayer();return t?t.hasBall&&this.ball.ownerId===t.id?ah(t,this.players,this.lastUserAimDir):this.ball.ownerId===null&&this.ball.passTargetId&&this.ball.passTargetId.startsWith("home_")?this.findPlayerById(this.ball.passTargetId):null:null}step(t,e,i){const s=Q(Number.isFinite(t)?t:ze.FIXED_DT,0,.05);if(s<=0)return[];if(this.phase==="paused"||this.phase==="squad_select"||this.phase==="fulltime")return[];const o=[];if(this.phase==="kickoff_ready"){this.phaseTimer-=s;for(let r=0;r<this.players.length;r++){const a=this.players[r];a.velocity.x=0,a.velocity.z=0,a.speed=0,a.turnLean=0}if(this.phaseTimer<=0){this.phase="playing",this.bannerText=null,this.phaseTimer=0,o.push({type:"whistle_short",intensity:.85});const r=`${this.kickoffTeam}_4`,a=this.findPlayerById(r);a&&(this.clearAllPossession(),a.hasBall=!0,this.ball.ownerId=a.id,this.ball.lastTouchPlayerId=a.id,this.ball.lastTouchTeam=a.team,this.lastTouchByTeam[a.team]=a.id,this.kickoffTeam==="home"?this.setControlledPlayer(a.id):(this.aiState.restartTakerId=a.id,this.aiState.restartAutoPassTimer=.35))}return o}if(this.phase==="halftime"){this.phaseTimer-=s;for(let r=0;r<this.players.length;r++)ps(this.players[r],{x:0,z:0},!1,s);return po(this.ball,s,!1),this.phaseTimer<=0&&(this.half=2,this.kickoffTeam="away",this.restartType="kickoff",this.restartTeam="away",this.setupKickoffPositions("away"),this.phase="kickoff_ready",this.phaseTimer=ze.KICKOFF_READY_SECONDS,this.bannerText="2ND HALF"),o}if(this.phase==="goal_celebration"){this.phaseTimer-=s;const r=po(this.ball,s,!1);if(o.push(...r.events),this.latestGoal){const a=f_(this.players,this.latestGoal.scorerId,this.latestGoal.team);for(let c=0;c<this.players.length;c++){const l=this.players[c],h=a.get(l.id);ps(l,h?{x:h.dirX,z:h.dirZ}:{x:0,z:0},!1,s)}el(this.players)}return this.phaseTimer<=0&&(this.latestGoal=null,this.setupKickoffPositions(this.kickoffTeam),this.phase="kickoff_ready",this.phaseTimer=ze.KICKOFF_READY_SECONDS,this.bannerText="KICK OFF"),o}if(this.phase==="out_of_bounds"){this.phaseTimer-=s;const r=po(this.ball,s,!1);o.push(...r.events);for(let a=0;a<this.players.length;a++)ps(this.players[a],{x:0,z:0},!1,s);return this.phaseTimer<=0&&(this.setupOutOfBoundsRestart(),this.phase="playing",this.bannerText=null,this.phaseTimer=0,o.push({type:"whistle_short",intensity:.55})),o}return this.stepPlaying(s,e,i)}stepPlaying(t,e,i){const s=[];if(this.matchSeconds+=t*ze.MATCH_CLOCK_SCALE,this.half===1&&this.matchSeconds>=ze.HALFTIME_MATCH_SECONDS)return this.matchSeconds=ze.HALFTIME_MATCH_SECONDS,this.clearAllPossession(),this.resetInputLatches(),this.phase="halftime",this.phaseTimer=ze.HALFTIME_PAUSE_SECONDS,this.bannerText="HALF TIME",s.push({type:"whistle_short",intensity:.9}),s;if(this.half===2&&this.matchSeconds>=ze.FULLTIME_MATCH_SECONDS)return this.matchSeconds=ze.FULLTIME_MATCH_SECONDS,this.clearAllPossession(),this.resetInputLatches(),this.phase="fulltime",this.phaseTimer=0,this.bannerText="FULL TIME",s.push({type:"whistle_long",intensity:1}),s;this.autoSwitchCooldown>0&&(this.autoSwitchCooldown=Math.max(0,this.autoSwitchCooldown-t)),this.postPassSwitchLockTimer>0&&(this.postPassSwitchLockTimer=Math.max(0,this.postPassSwitchLockTimer-t));const o=this.ball.ownerId?this.findPlayerById(this.ball.ownerId):null;o?(o.team==="home"?this.stats.homePossessionTicks+=1:this.stats.awayPossessionTicks+=1,this.lastTouchByTeam[o.team]=o.id):this.ball.lastTouchTeam==="home"?this.stats.homePossessionTicks+=1:this.ball.lastTouchTeam==="away"&&(this.stats.awayPossessionTicks+=1);let r=e.moveX*i.right.x-e.moveZ*i.forward.x,a=e.moveX*i.right.z-e.moveZ*i.forward.z;const c=Math.hypot(r,a);c>1&&(r/=c,a/=c);const l={x:r,z:a};if(c>.12){const p=1/Math.max(c,1e-4);this.lastUserAimDir={x:r*p,z:a*p}}this.handleAutoSwitching();const h=this.getControlledPlayer();if(!h)return s;c<=.12&&(this.lastUserAimDir={x:Math.sin(h.facing),z:Math.cos(h.facing)}),this.handleControlledPlayerActions(h,e,l,t,s);const u=this.getControlledPlayer()??h,d=d_(this.players,this.ball,u,this.aiState,this.stats,s,t);d.lastShotSpeed!==null&&(this.lastShotSpeedMs=d.lastShotSpeed,d.lastShooterId&&(this.lastTouchByTeam.away=d.lastShooterId));for(let p=0;p<this.players.length;p++){const y=this.players[p];if(y.isControlled)ps(y,l,e.sprint,t);else{const v=d.commands.get(y.id);ps(y,v?{x:v.dirX,z:v.dirZ}:{x:0,z:0},v?v.sprint:!1,t,v?.faceAngle)}}el(this.players);const f={x:this.ball.position.x,y:this.ball.position.y,z:this.ball.position.z},m=this.ball.ownerId?this.findPlayerById(this.ball.ownerId):null;let _=null,g=null;if(m&&m.hasBall){n_(m,this.ball,t),this.lastTouchByTeam[m.team]=m.id;const p=Math.abs(this.ball.position.z)<j.GOAL_HALF_WIDTH-.08;this.ball.position.x>j.HALF_LENGTH+this.ball.radius*.45&&p?_="home":this.ball.position.x<-(j.HALF_LENGTH+this.ball.radius*.45)&&p?_="away":this.ball.position.z<-(j.HALF_WIDTH+this.ball.radius)?g={side:"touchline_north",position:{...this.ball.position}}:this.ball.position.z>j.HALF_WIDTH+this.ball.radius?g={side:"touchline_south",position:{...this.ball.position}}:this.ball.position.x<-(j.HALF_LENGTH+this.ball.radius)&&!p?g={side:"goal_line_home",position:{...this.ball.position}}:this.ball.position.x>j.HALF_LENGTH+this.ball.radius&&!p&&(g={side:"goal_line_away",position:{...this.ball.position}})}else{const p=po(this.ball,t,!0);s.push(...p.events),_=p.scoredBy,g=p.outOfBounds}if(_===null&&this.ball.ownerId===null){const p=l_(this.players,this.ball,f,this.aiState,s);p&&(this.lastTouchByTeam[p.team]=p.id)}if(_===null&&g===null){const p=s_(this.players,this.ball,this.stats,s);p&&(this.lastTouchByTeam[p.team]=p.id,p.team==="home"&&p.role!=="GK"&&!p.isControlled&&this.setControlledPlayer(p.id))}return this.ball.lastTouchTeam&&this.ball.lastTouchPlayerId&&(this.lastTouchByTeam[this.ball.lastTouchTeam]=this.ball.lastTouchPlayerId),_!==null?(this.handleGoalScored(_,s),s):(g!==null&&this.handleOutOfBounds(g,s),s)}handleControlledPlayerActions(t,e,i,s,o){const r=t.hasBall&&this.ball.ownerId===t.id,a=Math.hypot(i.x,i.z)>.12?i:null;if(e.spaceJustPressed&&(r&&t.actionState!=="stunned"&&t.actionState!=="tackle"&&t.kickCooldown<=0?(this.spacePressMode="shoot",this.ePressMode==="pass"&&(this.ePressMode="switch_consumed"),t.passCharge=0,t.shotCharge=.1,t.actionState="shoot_charge"):r?this.spacePressMode="tackle_consumed":(this.spacePressMode="tackle_consumed",hh(t,this.ball,this.players,a,this.stats,o))),this.spacePressMode==="shoot")if(!(t.hasBall&&this.ball.ownerId===t.id))t.shotCharge=0,t.actionState==="shoot_charge"&&(t.actionState="idle"),this.spacePressMode="tackle_consumed";else if(e.spaceJustReleased||!e.spaceHeld){const h=Math.max(.18,t.shotCharge);this.lastShotSpeedMs=ch(t,this.ball,a,h,this.stats,o),this.lastTouchByTeam.home=t.id,this.spacePressMode="none",this.ePressMode==="pass"&&(this.ePressMode="switch_consumed"),t.passCharge=0;return}else e.spaceHeld&&(e.spaceJustPressed||(t.shotCharge=Q(t.shotCharge+s/.65,0,1)),t.actionState="shoot_charge");this.spacePressMode==="tackle_consumed"&&(e.spaceJustReleased||!e.spaceHeld)&&(this.spacePressMode="none");const c=t.hasBall&&this.ball.ownerId===t.id;if(e.eJustPressed&&(c&&this.spacePressMode!=="shoot"&&t.actionState!=="stunned"&&t.actionState!=="tackle"&&t.kickCooldown<=0?(this.ePressMode="pass",t.passCharge=.08):c?this.ePressMode="switch_consumed":(this.ePressMode="switch_consumed",this.postPassSwitchLockTimer<=0&&this.switchToBestHomePlayer(!0,a))),this.ePressMode==="pass")if(!(t.hasBall&&this.ball.ownerId===t.id))t.passCharge=0,this.ePressMode="switch_consumed";else if(e.eJustReleased||!e.eHeld){const h=Q(t.passCharge,.08,1),u=Cs(t,this.ball,this.players,a,h,this.stats,o);this.lastTouchByTeam.home=t.id,t.passCharge=0,this.ePressMode="none",this.postPassSwitchLockTimer=.22,t.role==="GK"&&u&&u.team==="home"&&this.setControlledPlayer(u.id);return}else e.eHeld&&(e.eJustPressed||(t.passCharge=Q(t.passCharge+s/.55,0,1)));this.ePressMode==="switch_consumed"&&(e.eJustReleased||!e.eHeld)&&(this.ePressMode="none")}handleAutoSwitching(){const t=this.getControlledPlayer();if(t){if(this.ball.ownerId===null&&this.ball.passTargetId&&this.ball.passTargetId.startsWith("home_")&&this.ball.passTargetId!==this.controlledPlayerId&&this.ball.pickupLockTimer<=.14){const e=this.findPlayerById(this.ball.passTargetId);if(e&&e.role!=="GK"){this.setControlledPlayer(e.id),this.autoSwitchCooldown=.45;return}}if(this.ball.ownerId&&this.ball.ownerId.startsWith("home_")){const e=this.findPlayerById(this.ball.ownerId);if(e&&e.role!=="GK"&&e.id!==this.controlledPlayerId){this.setControlledPlayer(e.id);return}}if(t.role==="GK"&&!t.hasBall){this.switchToBestHomePlayer(!1);return}if(!t.hasBall&&t.actionState!=="tackle"&&this.autoSwitchCooldown<=0){const e=Math.hypot(this.ball.position.x-t.position.x,this.ball.position.z-t.position.z);if(e>8){let i=null,s=e*.56;for(let o=0;o<this.players.length;o++){const r=this.players[o];if(r.team!=="home"||r.role==="GK"||r.id===t.id)continue;const a=Math.hypot(this.ball.position.x-r.position.x,this.ball.position.z-r.position.z);a<s&&(s=a,i=r)}i&&(this.setControlledPlayer(i.id),this.autoSwitchCooldown=.65)}}}}switchToBestHomePlayer(t,e){const i=this.getControlledPlayer(),s=Q(this.ball.position.x+this.ball.velocity.x*.28,-32,j.HALF_LENGTH),o=Q(this.ball.position.z+this.ball.velocity.z*.28,-20,j.HALF_WIDTH),r=this.ball.ownerId?this.findPlayerById(this.ball.ownerId):null,a=r!==null&&r.team==="away"||r===null&&(this.ball.lastTouchTeam==="away"||this.ball.velocity.x<-2);let c=0,l=0;const h=e!=null&&Math.hypot(e.x,e.z)>.15;if(h&&e){const p=Math.hypot(e.x,e.z);c=e.x/p,l=e.z/p}let u=null,d=1/0,f=1/0,m=null,_=1/0;for(let p=0;p<this.players.length;p++){const y=this.players[p];if(y.team!=="home"||t&&y.id===this.controlledPlayerId)continue;const v=Math.hypot(s-y.position.x,o-y.position.z);if(y.role==="GK"){if(!t&&i?.role==="GK")continue;this.ball.position.x<-21&&(m=y,_=v);continue}v<f&&(f=v);let x=v;if(a)if(y.position.x<s+.5){x-=3.2;const w=-32-s,T=0-o,A=Math.hypot(w,T)||1,R=y.position.x-s,M=y.position.z-o,S=Math.hypot(R,M)||1,C=(w*R+T*M)/(A*S);C>.3&&(x-=C*1.4)}else x+=1.6;if(h&&i){const w=y.position.x-i.position.x,T=y.position.z-i.position.z,A=Math.hypot(w,T);if(A>.5){const R=w/A*c+T/A*l;R>.25&&(x-=R*3.8)}}x<d&&(d=x,u=y)}const g=m&&_<f?m:u;g&&(this.setControlledPlayer(g.id),this.autoSwitchCooldown=t?.65:.5)}handleGoalScored(t,e){this.clearAllPossession(),this.resetInputLatches(),t==="home"?this.homeScore+=1:this.awayScore+=1;let i=(this.lastTouchByTeam[t]?this.findPlayerById(this.lastTouchByTeam[t]):null)??(this.ball.lastTouchPlayerId?this.findPlayerById(this.ball.lastTouchPlayerId):null);if(!i||i.team!==t){let h=1/0;for(let u=0;u<this.players.length;u++){const d=this.players[u];if(d.team!==t||d.role==="GK")continue;const f=Math.hypot(this.ball.position.x-d.position.x,this.ball.position.z-d.position.z);f<h&&(h=f,i=d)}}const s=i??this.players[t==="home"?4:9],o=Math.hypot(this.ball.velocity.x,this.ball.velocity.y,this.ball.velocity.z),r=Math.max(this.lastShotSpeedMs,o,11.5),a=Math.round(Q(r*3.6,42,138)),c=Q(Math.ceil(this.matchSeconds/60),1,90),l={scorerId:s.id,scorerName:s.profile.name,scorerShortName:s.profile.shortName,scorerNumber:s.profile.number,team:t,minute:c,shotSpeedKmh:a};this.goals.push(l),this.latestGoal=l,this.kickoffTeam=t==="home"?"away":"home",this.restartType="kickoff",this.restartTeam=this.kickoffTeam,this.restartPosition={x:0,y:Yt.RADIUS,z:0},this.lastShotSpeedMs=0,this.phase="goal_celebration",this.phaseTimer=ze.GOAL_CELEBRATION_SECONDS,this.bannerText="GOAL!",s.actionState="celebrate",e.push({type:"goal_cheer",intensity:1,position:{x:this.ball.position.x,y:this.ball.position.y,z:this.ball.position.z},goalSide:t==="home"?"away":"home",goalEvent:l}),e.push({type:"whistle_short",intensity:.9})}handleOutOfBounds(t,e){this.clearAllPossession(),this.resetInputLatches();const i=this.ball.lastTouchTeam??"home",s=i==="home"?"away":"home";t.side==="touchline_north"||t.side==="touchline_south"?(this.restartType="throw_in",this.restartTeam=s,this.bannerText="THROW IN",this.restartPosition={x:Q(t.position.x,-32+2.5,j.HALF_LENGTH-2.5),y:Yt.RADIUS,z:t.side==="touchline_north"?-20+.75:j.HALF_WIDTH-.75}):t.side==="goal_line_home"?i==="home"?(this.restartType="corner",this.restartTeam="away",this.bannerText="CORNER KICK",this.restartPosition={x:-32+1.1,y:Yt.RADIUS,z:t.position.z>=0?j.HALF_WIDTH-1.1:-20+1.1}):(this.restartType="goal_kick",this.restartTeam="home",this.bannerText="GOAL KICK",this.restartPosition={x:-28,y:Yt.RADIUS,z:Q(t.position.z,-3.5,3.5)}):i==="away"?(this.restartType="corner",this.restartTeam="home",this.bannerText="CORNER KICK",this.restartPosition={x:j.HALF_LENGTH-1.1,y:Yt.RADIUS,z:t.position.z>=0?j.HALF_WIDTH-1.1:-20+1.1}):(this.restartType="goal_kick",this.restartTeam="away",this.bannerText="GOAL KICK",this.restartPosition={x:j.HALF_LENGTH-4,y:Yt.RADIUS,z:Q(t.position.z,-3.5,3.5)}),this.phase="out_of_bounds",this.phaseTimer=ze.OUT_OF_BOUNDS_SECONDS,e.push({type:"whistle_short",intensity:.65})}setupOutOfBoundsRestart(){this.clearAllPossession(),nl(this.ball,this.restartPosition.x,Yt.RADIUS,this.restartPosition.z);const t=this.restartTeam,e=t==="home"?"away":"home",i=t==="home"?1:-1;let s=2;if(this.restartType==="goal_kick")s=0;else if(this.restartType==="corner")s=3;else{let u=1/0;for(let d=0;d<this.players.length;d++){const f=this.players[d];if(f.team!==t||f.role==="GK")continue;const m=Math.hypot(f.position.x-this.restartPosition.x,f.position.z-this.restartPosition.z);m<u&&(u=m,s=f.slotIndex)}}const o=this.findPlayerById(`${t}_${s}`);if(!o)return;for(let u=0;u<this.players.length;u++){const d=this.players[u];d.velocity.x=0,d.velocity.z=0,d.speed=0,d.actionTimer=0,d.actionDuration=0,d.shotCharge=0,d.passCharge=0,d.actionState=d.role==="GK"?"gk_ready":"idle"}const r=Q(-Math.sign(this.restartPosition.x)*.5+i*.5,-1,1),a=-Math.sign(this.restartPosition.z||1),c=Math.hypot(r,a)||1,l=this.restartType==="goal_kick"?i:r/c,h=this.restartType==="goal_kick"?0:a/c;o.position.x=Q(this.restartPosition.x-l*.6,-32+.5,j.HALF_LENGTH-.5),o.position.z=Q(this.restartPosition.z-h*.6,-20+.5,j.HALF_WIDTH-.5),o.facing=Math.atan2(l,h),o.hasBall=!0,this.ball.ownerId=o.id,this.ball.lastTouchPlayerId=o.id,this.ball.lastTouchTeam=t,this.lastTouchByTeam[t]=o.id;for(let u=0;u<this.players.length;u++){const d=this.players[u];if(d.id!==o.id){if(this.restartType==="goal_kick"){const f=d.team==="home"?1:-1,m=bo[d.slotIndex]??bo[2];d.role!=="GK"&&(d.position.x=Q(m.x*f,-24,24),d.position.z=m.z*f)}else if(this.restartType==="corner"&&d.role!=="GK"){const f=i*(j.HALF_LENGTH-7.5);d.team===t?d.role==="FWD"?(d.position.x=f,d.position.z=d.slotIndex===4?1.5:-2.5):d.role==="MID"?(d.position.x=f-i*5,d.position.z=Math.sign(this.restartPosition.z)*5):(d.position.x=0,d.position.z=0):d.role==="DEF"?(d.position.x=f+i*1.5,d.position.z=0):d.role==="MID"?(d.position.x=f-i*2,d.position.z=-Math.sign(this.restartPosition.z)*2.5):(d.position.x=Q(f-i*10,-18,18),d.position.z=d.slotIndex===3?-6:6)}if(d.team===e){const f=d.position.x-this.restartPosition.x,m=d.position.z-this.restartPosition.z,_=Math.hypot(f,m);if(_<6.5){const g=_>.1?f/_:-i,p=_>.1?m/_:-Math.sign(this.restartPosition.z||1);d.position.x=Q(this.restartPosition.x+g*7,-29,29),d.position.z=Q(this.restartPosition.z+p*7,-18,18)}}if(d.team===t&&d.role!=="GK"){const f=d.position.x-this.restartPosition.x,m=d.position.z-this.restartPosition.z;Math.hypot(f,m)<4.5&&(d.position.x=Q(this.restartPosition.x+l*6.5+(d.slotIndex-2)*2.5,-28,28),d.position.z=Q(this.restartPosition.z+h*6.5,-17.5,17.5))}}}t==="home"?(this.setControlledPlayer(o.id),this.aiState.restartTakerId=null,this.aiState.restartAutoPassTimer=0):(this.aiState.restartTakerId=o.id,this.aiState.restartAutoPassTimer=.35,this.switchToBestHomePlayer(!1))}buildPlayers(){this.players=[];for(let t=0;t<5;t++){const e=this.homeSquad[t]??this.homeSquad[0];this.players.push(ol(e,"home",t))}for(let t=0;t<5;t++){const e=this.awaySquad[t]??this.awaySquad[0];this.players.push(ol(e,"away",t))}this.setControlledPlayer("home_4")}setupKickoffPositions(t){this.clearAllPossession(),nl(this.ball,0,Yt.RADIUS,0),this.aiState.restartTakerId=null,this.aiState.restartAutoPassTimer=0,this.resetInputLatches();for(let e=0;e<this.players.length;e++){const i=this.players[e],s=Kc[i.slotIndex]??Kc[2],o=i.team==="home"?1:-1;let r=s.x*o,a=s.z*o;i.team!==t&&i.slotIndex===4?(r=-6.5*o,a=2*o):i.team!==t&&i.slotIndex===3&&(r=-6.2*o,a=-7.5*o),i.position.x=r,i.position.y=0,i.position.z=a,i.velocity.x=0,i.velocity.y=0,i.velocity.z=0,i.speed=0,i.facing=i.team==="home"?Math.PI*.5:-Math.PI*.5,i.hasBall=!1,i.shotCharge=0,i.passCharge=0,i.actionTimer=0,i.actionDuration=0,i.tackleCooldown=0,i.kickCooldown=0,i.diveDirection=0,i.turnLean=0,i.actionState=i.role==="GK"?"gk_ready":"idle",i.stamina=Math.min(1,i.stamina+.35)}this.setControlledPlayer("home_4")}resetInputLatches(){this.spacePressMode="none",this.ePressMode="none",this.postPassSwitchLockTimer=0}clearAllPossession(){this.ball.ownerId=null,this.ball.passTargetId=null;for(let t=0;t<this.players.length;t++)this.players[t].hasBall=!1,this.players[t].shotCharge=0,this.players[t].passCharge=0}setControlledPlayer(t){const e=this.controlledPlayerId!==t;this.controlledPlayerId=t;for(let i=0;i<this.players.length;i++){const s=this.players[i],o=s.id===t;s.isControlled&&!o&&(s.shotCharge=0,s.passCharge=0,s.actionState==="shoot_charge"&&(s.actionState="idle")),s.isControlled=o}e&&(this.spacePressMode==="shoot"&&(this.spacePressMode="tackle_consumed"),this.ePressMode==="pass"&&(this.ePressMode="switch_consumed"))}findPlayerById(t){for(let e=0;e<this.players.length;e++)if(this.players[e].id===t)return this.players[e];return null}getControlledPlayer(){return this.findPlayerById(this.controlledPlayerId)??this.players[4]??null}}const x_={broadcast:"CAM: BROADCAST",wide:"CAM: WIDE",dynamic_close:"CAM: DYNAMIC"};function rl(n){const t=Math.max(0,Math.min(5400,Math.floor(n))),e=Math.floor(t/60),i=t%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function y_(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}class S_{container;callbacks;root;homeSwatchEl;awaySwatchEl;homeScoreEl;awayScoreEl;halfBadgeEl;clockEl;cameraBtnEl;muteBtnEl;playerPillEl;playerNumEl;playerNameEl;playerPosEl;staminaFillEl;powerRowEl;powerFillEl;keyHintEl;ctxSpaceLabelEl;ctxELabelEl;bannerEl;bannerTagEl;bannerTitleEl;bannerSubEl;pauseModalEl;pauseScoreEl;fulltimeModalEl;ftHeadlineEl;ftHomeSwatchEl;ftAwaySwatchEl;ftHomeScoreEl;ftAwayScoreEl;ftHomeGoalsEl;ftAwayGoalsEl;ftStatsEl;lastHomeScore=-1;lastAwayScore=-1;lastClockText="";lastHalfBadge="";lastHomeKitId="";lastAwayKitId="";lastCameraPreset=null;lastControlledId="";lastStaminaPct=-1;lastStaminaTier="";lastShotPct=-1;lastHasPossession=null;lastBannerKey="";lastPhase=null;lastFulltimeKey="";isMuted=!1;constructor(t,e){this.container=t,this.callbacks=e,this.root=document.createElement("div"),this.root.className="match-hud is-hidden",this.buildDom(),this.container.appendChild(this.root)}show(){this.root.classList.remove("is-hidden")}hide(){this.root.classList.add("is-hidden")}update(t,e){this.updateScoreboard(t),this.updateCameraButton(e),this.updateControlledPlayer(t),this.updateContextualControls(t),this.updateBanner(t),this.updateModals(t)}destroy(){this.root.remove()}buildDom(){this.root.innerHTML=`
      <!-- Top-Center Broadcast Scoreboard -->
      <div class="hud-scoreboard-wrap">
        <div class="hud-scoreboard">
          <div class="hud-team hud-team--home">
            <span class="hud-kit-swatch" data-ref="home-swatch"></span>
            <span class="hud-team-name">HOME</span>
          </div>
          <div class="hud-score-cluster" aria-live="polite">
            <span class="hud-score-num" data-ref="home-score">0</span>
            <span class="hud-score-sep">&mdash;</span>
            <span class="hud-score-num" data-ref="away-score">0</span>
          </div>
          <div class="hud-team hud-team--away">
            <span class="hud-team-name">AWAY</span>
            <span class="hud-kit-swatch" data-ref="away-swatch"></span>
          </div>
        </div>
        <div class="hud-clock-pill">
          <span class="hud-half-badge" data-ref="half-badge">1ST</span>
          <span class="hud-clock-time" data-ref="clock">00:00</span>
        </div>
      </div>

      <!-- Top-Right Utility Controls -->
      <div class="hud-utilities">
        <button type="button" class="hud-util-btn" data-ref="btn-camera" tabindex="-1">CAM: BROADCAST</button>
        <button type="button" class="hud-util-btn hud-util-btn--icon" data-ref="btn-mute" tabindex="-1" aria-label="Toggle Audio" title="Mute / Unmute Sound">&#128266;</button>
      </div>

      <!-- Center Broadcast Event Banner -->
      <div class="hud-banner is-hidden" data-ref="banner" aria-live="assertive">
        <div class="hud-banner__tag" data-ref="banner-tag"></div>
        <div class="hud-banner__title" data-ref="banner-title"></div>
        <div class="hud-banner__sub" data-ref="banner-sub"></div>
      </div>

      <!-- Bottom-Left Controlled Player Pill -->
      <div class="hud-player-pill" data-ref="player-pill">
        <div class="hud-player-head">
          <span class="hud-player-num" data-ref="player-num">10</span>
          <div class="hud-player-identity">
            <span class="hud-player-name" data-ref="player-name">LIONEL MESSI</span>
            <span class="hud-player-pos" data-ref="player-pos">RW</span>
          </div>
        </div>
        <div class="hud-meter-row">
          <span class="hud-meter-label">STM</span>
          <div class="hud-meter-track">
            <div class="hud-meter-fill hud-meter-fill--stamina" data-ref="stamina-fill"></div>
          </div>
        </div>
        <div class="hud-meter-row hud-power-row" data-ref="power-row">
          <span class="hud-meter-label">PWR</span>
          <div class="hud-meter-track hud-meter-track--power">
            <div class="hud-meter-fill hud-meter-fill--power" data-ref="power-fill"></div>
          </div>
        </div>
      </div>

      <!-- Bottom-Right Contextual Controls Reminder -->
      <div class="hud-key-hint no-possession" data-ref="key-hint" aria-live="polite">
        <span class="hud-key-item"><b>WASD</b> Move</span>
        <span class="hud-key-div">|</span>
        <span class="hud-key-item"><b>SHIFT</b> Sprint</span>
        <span class="hud-key-div">|</span>
        <span class="hud-key-item hud-key-item--ctx"><b>SPACE</b> <span class="hud-key-action" data-ref="ctx-space-label">TACKLE</span></span>
        <span class="hud-key-div">|</span>
        <span class="hud-key-item hud-key-item--ctx"><b>E</b> <span class="hud-key-action" data-ref="ctx-e-label">SWITCH</span></span>
      </div>

      <!-- Pause Modal -->
      <div class="hud-modal hud-modal--pause is-hidden" data-ref="pause-modal" role="dialog" aria-modal="true" aria-label="Match Paused">
        <div class="hud-modal-card hud-modal-card--pause">
          <div class="hud-modal-eyebrow">PITCH APEX</div>
          <h2 class="hud-modal-title">MATCH PAUSED</h2>
          <div class="hud-pause-score" data-ref="pause-score">HOME 0 &mdash; 0 AWAY</div>

          <div class="hud-modal-actions">
            <button type="button" class="hud-btn hud-btn--primary" data-action="resume">RESUME MATCH <span class="hud-btn-hint">ESC</span></button>
            <button type="button" class="hud-btn hud-btn--secondary" data-action="restart">RESTART MATCH</button>
            <button type="button" class="hud-btn hud-btn--ghost" data-action="change-squad">CHANGE SQUAD</button>
          </div>

          <div class="hud-controls-ref">
            <div class="hud-controls-ref__title">CONTROLS</div>
            <div class="hud-controls-ref__grid">
              <div><kbd>WASD</kbd> / <kbd>Arrows</kbd> Move</div>
              <div><kbd>Shift</kbd> Sprint</div>
              <div><kbd>Space</kbd> Shoot (with ball) / Tackle (without ball)</div>
              <div><kbd>E</kbd> Pass (with ball) / Switch (without ball)</div>
              <div><kbd>C</kbd> Cycle Camera</div>
              <div><kbd>Esc</kbd> Pause / Resume</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Full-Time Match Summary Modal -->
      <div class="hud-modal hud-modal--fulltime is-hidden" data-ref="fulltime-modal" role="dialog" aria-modal="true" aria-label="Full Time Summary">
        <div class="hud-modal-card hud-modal-card--fulltime">
          <div class="hud-modal-eyebrow">FULL TIME</div>
          <h2 class="hud-ft-headline" data-ref="ft-headline">VICTORY</h2>

          <div class="hud-ft-scoreboard">
            <div class="hud-ft-team">
              <span class="hud-kit-swatch hud-kit-swatch--lg" data-ref="ft-home-swatch"></span>
              <span class="hud-ft-team-name">HOME</span>
            </div>
            <div class="hud-ft-score">
              <span data-ref="ft-home-score">0</span>
              <span class="hud-ft-sep">&mdash;</span>
              <span data-ref="ft-away-score">0</span>
            </div>
            <div class="hud-ft-team hud-ft-team--away">
              <span class="hud-ft-team-name">AWAY</span>
              <span class="hud-kit-swatch hud-kit-swatch--lg" data-ref="ft-away-swatch"></span>
            </div>
          </div>

          <div class="hud-ft-goals">
            <div class="hud-ft-goal-col hud-ft-goal-col--home" data-ref="ft-home-goals"></div>
            <div class="hud-ft-goal-divider" aria-hidden="true"></div>
            <div class="hud-ft-goal-col hud-ft-goal-col--away" data-ref="ft-away-goals"></div>
          </div>

          <div class="hud-ft-stats" data-ref="ft-stats"></div>

          <div class="hud-ft-actions">
            <button type="button" id="btn-rematch" class="hud-btn hud-btn--primary">PLAY AGAIN</button>
            <button type="button" id="btn-change-squad" class="hud-btn hud-btn--secondary">CHANGE SQUAD</button>
          </div>
        </div>
      </div>
    `;const t=e=>this.root.querySelector(e);this.homeSwatchEl=t('[data-ref="home-swatch"]'),this.awaySwatchEl=t('[data-ref="away-swatch"]'),this.homeScoreEl=t('[data-ref="home-score"]'),this.awayScoreEl=t('[data-ref="away-score"]'),this.halfBadgeEl=t('[data-ref="half-badge"]'),this.clockEl=t('[data-ref="clock"]'),this.cameraBtnEl=t('[data-ref="btn-camera"]'),this.muteBtnEl=t('[data-ref="btn-mute"]'),this.playerPillEl=t('[data-ref="player-pill"]'),this.playerNumEl=t('[data-ref="player-num"]'),this.playerNameEl=t('[data-ref="player-name"]'),this.playerPosEl=t('[data-ref="player-pos"]'),this.staminaFillEl=t('[data-ref="stamina-fill"]'),this.powerRowEl=t('[data-ref="power-row"]'),this.powerFillEl=t('[data-ref="power-fill"]'),this.keyHintEl=t('[data-ref="key-hint"]'),this.ctxSpaceLabelEl=t('[data-ref="ctx-space-label"]'),this.ctxELabelEl=t('[data-ref="ctx-e-label"]'),this.bannerEl=t('[data-ref="banner"]'),this.bannerTagEl=t('[data-ref="banner-tag"]'),this.bannerTitleEl=t('[data-ref="banner-title"]'),this.bannerSubEl=t('[data-ref="banner-sub"]'),this.pauseModalEl=t('[data-ref="pause-modal"]'),this.pauseScoreEl=t('[data-ref="pause-score"]'),this.fulltimeModalEl=t('[data-ref="fulltime-modal"]'),this.ftHeadlineEl=t('[data-ref="ft-headline"]'),this.ftHomeSwatchEl=t('[data-ref="ft-home-swatch"]'),this.ftAwaySwatchEl=t('[data-ref="ft-away-swatch"]'),this.ftHomeScoreEl=t('[data-ref="ft-home-score"]'),this.ftAwayScoreEl=t('[data-ref="ft-away-score"]'),this.ftHomeGoalsEl=t('[data-ref="ft-home-goals"]'),this.ftAwayGoalsEl=t('[data-ref="ft-away-goals"]'),this.ftStatsEl=t('[data-ref="ft-stats"]'),this.cameraBtnEl.addEventListener("click",()=>{const e=this.callbacks.onCycleCamera();this.updateCameraButton(e),this.cameraBtnEl.blur()}),this.muteBtnEl.addEventListener("click",()=>{this.isMuted=this.callbacks.onToggleMute(),this.syncMuteButton(),this.muteBtnEl.blur()}),t('[data-action="resume"]').addEventListener("click",()=>this.callbacks.onResume()),t('[data-action="restart"]').addEventListener("click",()=>this.callbacks.onRestart()),t('[data-action="change-squad"]').addEventListener("click",()=>this.callbacks.onChangeSquad()),t("#btn-rematch").addEventListener("click",()=>this.callbacks.onRestart()),t("#btn-change-squad").addEventListener("click",()=>this.callbacks.onChangeSquad())}syncMuteButton(){this.muteBtnEl.textContent=this.isMuted?"🔇":"🔊",this.muteBtnEl.classList.toggle("is-muted",this.isMuted),this.muteBtnEl.setAttribute("aria-pressed",String(this.isMuted))}updateScoreboard(t){t.homeKit.id!==this.lastHomeKitId&&(this.lastHomeKitId=t.homeKit.id,this.homeSwatchEl.style.background=`linear-gradient(135deg, ${t.homeKit.primary} 62%, ${t.homeKit.secondary} 62%)`,this.playerNumEl.style.backgroundColor=t.homeKit.primary,this.playerNumEl.style.color=t.homeKit.numberColor),t.awayKit.id!==this.lastAwayKitId&&(this.lastAwayKitId=t.awayKit.id,this.awaySwatchEl.style.background=`linear-gradient(135deg, ${t.awayKit.primary} 62%, ${t.awayKit.secondary} 62%)`),t.homeScore!==this.lastHomeScore&&(this.homeScoreEl.textContent=String(t.homeScore),this.lastHomeScore!==-1&&this.pulseElement(this.homeScoreEl),this.lastHomeScore=t.homeScore),t.awayScore!==this.lastAwayScore&&(this.awayScoreEl.textContent=String(t.awayScore),this.lastAwayScore!==-1&&this.pulseElement(this.awayScoreEl),this.lastAwayScore=t.awayScore);const e=t.phase==="fulltime"?"FT":t.phase==="halftime"?"HT":t.half===1?"1ST":"2ND";e!==this.lastHalfBadge&&(this.lastHalfBadge=e,this.halfBadgeEl.textContent=e);const i=rl(t.matchSeconds);i!==this.lastClockText&&(this.lastClockText=i,this.clockEl.textContent=i)}updateCameraButton(t){t!==this.lastCameraPreset&&(this.lastCameraPreset=t,this.cameraBtnEl.textContent=x_[t])}updateControlledPlayer(t){const e=t.players.find(o=>o.id===t.controlledPlayerId);if(!e){this.playerPillEl.classList.add("is-hidden");return}this.playerPillEl.classList.remove("is-hidden"),e.id!==this.lastControlledId&&(this.lastControlledId=e.id,this.playerNumEl.textContent=String(e.profile.number),this.playerNameEl.textContent=e.profile.name.toUpperCase(),this.playerPosEl.textContent=e.profile.position);const i=Math.round(Math.max(0,Math.min(1,e.stamina))*100);if(i!==this.lastStaminaPct){this.lastStaminaPct=i,this.staminaFillEl.style.width=`${i}%`;const o=i>45?"high":i>20?"mid":"low";o!==this.lastStaminaTier&&(this.lastStaminaTier=o,this.staminaFillEl.dataset.tier=o)}const s=Math.round(Math.max(0,Math.min(1,e.shotCharge))*100);if(s!==this.lastShotPct){this.lastShotPct=s,this.powerFillEl.style.width=`${s}%`,this.powerRowEl.classList.toggle("is-charging",s>0);const o=s<45?"low":s<78?"mid":"high";this.powerFillEl.dataset.zone=o}}updateContextualControls(t){const e=t.players.find(s=>s.id===t.controlledPlayerId),i=!!(e&&e.hasBall&&t.ball.ownerId===e.id);i!==this.lastHasPossession&&(this.lastHasPossession=i,this.keyHintEl.classList.toggle("has-possession",i),this.keyHintEl.classList.toggle("no-possession",!i),this.ctxSpaceLabelEl.textContent=i?"SHOOT":"TACKLE",this.ctxELabelEl.textContent=i?"PASS":"SWITCH")}updateBanner(t){let e="none",i="event",s="",o="",r="";if(t.phase==="paused"||t.phase==="fulltime"||t.phase==="squad_select")e="none";else if(t.phase==="goal_celebration"&&t.latestGoal){const a=t.latestGoal;i="goal",s=a.team==="home"?"HOME GOAL":"AWAY GOAL",o="GOAL!",r=`#${a.scorerNumber} ${a.scorerName.toUpperCase()}  •  ${a.minute}'  •  ${Math.round(a.shotSpeedKmh)} KM/H`,e=`goal:${a.team}:${a.scorerId}:${a.minute}:${t.homeScore}-${t.awayScore}`}else t.phase==="halftime"?(i="halftime",s="45:00",o="HALF TIME",r=`HOME ${t.homeScore} — ${t.awayScore} AWAY`,e=`ht:${t.homeScore}-${t.awayScore}`):t.bannerText?(i="event",o=t.bannerText.toUpperCase(),s=t.restartTeam==="home"?"HOME BALL":"AWAY BALL",r="",e=`banner:${o}:${s}`):t.phase==="kickoff_ready"?(i="event",s=t.kickoffTeam==="home"?"HOME KICK OFF":"AWAY KICK OFF",o="KICK OFF",r=t.half===1?"FIRST HALF":"SECOND HALF",e=`ko:${t.half}:${t.kickoffTeam}`):t.phase==="out_of_bounds"&&(i="event",s=t.restartTeam==="home"?"HOME":"AWAY",o=t.restartType==="corner"?"CORNER KICK":t.restartType==="goal_kick"?"GOAL KICK":"THROW IN",r="",e=`oob:${o}:${s}`);if(e!==this.lastBannerKey){if(this.lastBannerKey=e,e==="none"){this.bannerEl.classList.add("is-hidden");return}this.bannerEl.className=`hud-banner hud-banner--${i}`,this.bannerTagEl.textContent=s,this.bannerTagEl.classList.toggle("is-empty",s.length===0),this.bannerTitleEl.textContent=o,this.bannerSubEl.textContent=r,this.bannerSubEl.classList.toggle("is-empty",r.length===0),this.bannerEl.offsetWidth,this.bannerEl.classList.add("is-visible")}}updateModals(t){const e=t.phase!==this.lastPhase;if(e&&(this.lastPhase=t.phase,this.pauseModalEl.classList.toggle("is-hidden",t.phase!=="paused"),this.fulltimeModalEl.classList.toggle("is-hidden",t.phase!=="fulltime")),t.phase==="paused"&&e&&(this.pauseScoreEl.textContent=`HOME ${t.homeScore} — ${t.awayScore} AWAY  •  ${rl(t.matchSeconds)}`),t.phase==="fulltime"){const i=`${t.homeScore}-${t.awayScore}-${t.goals.length}-${t.stats.homeShots}-${t.stats.awayShots}`;i!==this.lastFulltimeKey&&(this.lastFulltimeKey=i,this.renderFulltimeSummary(t))}}renderFulltimeSummary(t){const{homeScore:e,awayScore:i,homeKit:s,awayKit:o,goals:r,stats:a}=t;let c="MATCH DRAWN",l="draw";e>i?(c="VICTORY",l="win"):e<i&&(c="DEFEAT",l="loss"),this.ftHeadlineEl.textContent=c,this.ftHeadlineEl.dataset.tone=l,this.ftHomeScoreEl.textContent=String(e),this.ftAwayScoreEl.textContent=String(i),this.ftHomeSwatchEl.style.background=`linear-gradient(135deg, ${s.primary} 62%, ${s.secondary} 62%)`,this.ftAwaySwatchEl.style.background=`linear-gradient(135deg, ${o.primary} 62%, ${o.secondary} 62%)`;const h=r.filter(p=>p.team==="home"),u=r.filter(p=>p.team==="away"),d=(p,y)=>p.length===0?'<div class="hud-ft-goal-empty">&mdash;</div>':p.map(v=>{const x=`${y_(v.scorerShortName)} #${v.scorerNumber}`,w=`${v.minute}' (${Math.round(v.shotSpeedKmh)} km/h)`;return y==="home"?`<div class="hud-ft-goal-item"><span>${x}</span><span class="hud-ft-goal-min">${w}</span></div>`:`<div class="hud-ft-goal-item"><span class="hud-ft-goal-min">${w}</span><span>${x}</span></div>`}).join("");this.ftHomeGoalsEl.innerHTML=d(h,"home"),this.ftAwayGoalsEl.innerHTML=d(u,"away");const f=a.homePossessionTicks+a.awayPossessionTicks,m=f>0?Math.round(a.homePossessionTicks/f*100):50,_=100-m,g=[{label:"POSSESSION",homeVal:`${m}%`,awayVal:`${_}%`,homeNum:m,awayNum:_},{label:"SHOTS",homeVal:String(a.homeShots),awayVal:String(a.awayShots),homeNum:a.homeShots,awayNum:a.awayShots},{label:"ON TARGET",homeVal:String(a.homeShotsOnTarget),awayVal:String(a.awayShotsOnTarget),homeNum:a.homeShotsOnTarget,awayNum:a.awayShotsOnTarget},{label:"PASSES",homeVal:String(a.homePasses),awayVal:String(a.awayPasses),homeNum:a.homePasses,awayNum:a.awayPasses},{label:"TACKLES",homeVal:String(a.homeTackles),awayVal:String(a.awayTackles),homeNum:a.homeTackles,awayNum:a.awayTackles}];this.ftStatsEl.innerHTML=g.map(p=>{const y=p.homeNum+p.awayNum,v=y>0?Math.round(p.homeNum/y*100):50,x=100-v;return`
          <div class="hud-stat-row">
            <div class="hud-stat-head">
              <span class="hud-stat-val">${p.homeVal}</span>
              <span class="hud-stat-label">${p.label}</span>
              <span class="hud-stat-val">${p.awayVal}</span>
            </div>
            <div class="hud-stat-bar">
              <div class="hud-stat-bar__home" style="width:${v}%;background:${s.primary}"></div>
              <div class="hud-stat-bar__away" style="width:${x}%;background:${o.primary}"></div>
            </div>
          </div>
        `}).join("")}pulseElement(t){t.classList.remove("is-pulsing"),t.offsetWidth,t.classList.add("is-pulsing")}}function M_(n){const[t,e,i]=n.flagColors;let s="";switch(n.flagOrientation){case"horizontal":{s=`
        <rect x="0" y="0" width="24" height="5.4" fill="${t}" />
        <rect x="0" y="5.3" width="24" height="5.4" fill="${e}" />
        <rect x="0" y="10.6" width="24" height="5.4" fill="${i}" />
      `,n.countryCode==="ARG"?s+='<circle cx="12" cy="8" r="1.45" fill="#f2b824" />':n.countryCode==="ESP"?s=`
          <rect x="0" y="0" width="24" height="4" fill="${t}" />
          <rect x="0" y="4" width="24" height="8" fill="${e}" />
          <rect x="0" y="12" width="24" height="4" fill="${i}" />
          <rect x="6.5" y="6.2" width="2.4" height="3.6" rx="0.5" fill="#aa151b" opacity="0.85" />
        `:n.countryCode==="MAR"?s=`
          <rect x="0" y="0" width="24" height="16" fill="${t}" />
          <polygon points="12,4.4 13.1,7.4 16.2,7.4 13.7,9.2 14.6,12.1 12,10.3 9.4,12.1 10.3,9.2 7.8,7.4 10.9,7.4" fill="none" stroke="${e}" stroke-width="1.05" />
        `:n.countryCode==="POL"&&(s=`
          <rect x="0" y="0" width="24" height="8" fill="${t}" />
          <rect x="0" y="8" width="24" height="8" fill="${e}" />
        `);break}case"vertical":{n.countryCode==="POR"?s=`
          <rect x="0" y="0" width="9.5" height="16" fill="${t}" />
          <rect x="9.5" y="0" width="14.5" height="16" fill="${e}" />
          <circle cx="9.5" cy="8" r="2.6" fill="${i}" />
          <circle cx="9.5" cy="8" r="1.4" fill="${e}" />
        `:s=`
          <rect x="0" y="0" width="8.1" height="16" fill="${t}" />
          <rect x="8" y="0" width="8.1" height="16" fill="${e}" />
          <rect x="16" y="0" width="8" height="16" fill="${i}" />
        `;break}case"cross":{n.countryCode==="ENG"?s=`
          <rect x="0" y="0" width="24" height="16" fill="${t}" />
          <rect x="10.2" y="0" width="3.6" height="16" fill="${e}" />
          <rect x="0" y="6.2" width="24" height="3.6" fill="${e}" />
        `:s=`
          <rect x="0" y="0" width="24" height="16" fill="${t}" />
          <rect x="6.4" y="0" width="4.4" height="16" fill="${e}" />
          <rect x="0" y="5.8" width="24" height="4.4" fill="${e}" />
          <rect x="7.5" y="0" width="2.2" height="16" fill="${i}" />
          <rect x="0" y="6.9" width="24" height="2.2" fill="${i}" />
        `;break}case"brazil":{s=`
        <rect x="0" y="0" width="24" height="16" fill="${t}" />
        <polygon points="12,1.8 22.2,8 12,14.2 1.8,8" fill="${e}" />
        <circle cx="12" cy="8" r="3.4" fill="${i}" />
        <path d="M9.1,7.5 Q12,6.4 14.9,8.3" fill="none" stroke="#ffffff" stroke-width="0.7" />
      `;break}}return`<svg class="flag-svg" viewBox="0 0 24 16" width="24" height="16" aria-hidden="true" focusable="false">
    ${s}
    <rect x="0.3" y="0.3" width="23.4" height="15.4" fill="none" stroke="rgba(0,0,0,0.28)" stroke-width="0.6" />
  </svg>`}function uh(n){const{skinTone:t,hairColor:e}=n.appearance,i=n.cardTier==="gold_icon"?"#1d242e":n.cardTier==="platinum_elite"?"#1f2b38":"#182330";return`<svg class="player-card__fallback-svg" viewBox="0 0 120 132" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="bust-grad-${n.id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${i}" stop-opacity="0.96" />
        <stop offset="100%" stop-color="#0b1117" stop-opacity="0.98" />
      </linearGradient>
    </defs>
    <path d="M18,132 C20,98 35,84 60,84 C85,84 100,98 102,132 Z" fill="url(#bust-grad-${n.id})" />
    <path d="M46,84 L60,97 L74,84" fill="none" stroke="#d4af37" stroke-width="2.5" opacity="0.85" />
    <rect x="52" y="70" width="16" height="18" rx="6" fill="${t}" />
    <ellipse cx="60" cy="48" rx="21" ry="25" fill="${t}" />
    <path d="M39,46 C39,26 48,18 60,18 C72,18 81,26 81,46 C77,36 70,32 60,32 C50,32 43,36 39,46 Z" fill="${e}" />
    <text x="60" y="119" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-size="18" font-weight="800" fill="rgba(248,250,252,0.55)">${n.number}</text>
  </svg>`}function xr(n){return n.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function T_(n){return n?`<svg class="player-card__etch" viewBox="0 0 100 112" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <polygon
        points="11.6,2.8 88.4,2.8 96.6,8.4 96.6,95.4 50,108.8 3.4,95.4 3.4,8.4"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        vector-effect="non-scaling-stroke"
      />
      <path
        d="M 38 2.8 L 50 7.2 L 62 2.8"
        fill="none"
        stroke="currentColor"
        stroke-width="0.9"
        stroke-opacity="0.7"
        vector-effect="non-scaling-stroke"
      />
    </svg>`:`<svg class="player-card__etch" viewBox="0 0 100 148" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <g stroke="currentColor" fill="none" vector-effect="non-scaling-stroke">
      <polygon
        points="11.4,3.1 88.6,3.1 96.7,9.4 96.7,126.5 50,144.3 3.3,126.5 3.3,9.4"
        stroke-width="1"
      />
      <path d="M 37 3.1 L 50 8.2 L 63 3.1" stroke-width="0.95" stroke-opacity="0.75" />
      <path d="M 3.3 56 L 50 16 L 96.7 56" stroke-width="0.8" stroke-opacity="0.22" />
      <path d="M 14 78 L 50 42 L 86 78" stroke-width="0.75" stroke-opacity="0.16" />
      <path d="M 36 135.5 L 50 141.2 L 64 135.5" stroke-width="0.9" stroke-opacity="0.55" />
    </g>
  </svg>`}function ka(){const n=document.createElement("div");return n.className="player-card__portrait-glow",n.setAttribute("aria-hidden","true"),n}function dh(n,t,e){const i=document.createElement("img");return i.className="player-card__portrait",i.src=e,i.alt=t.name,i.draggable=!1,i.addEventListener("error",()=>{n.innerHTML="",n.appendChild(ka()),n.insertAdjacentHTML("beforeend",uh(t))}),i}function E_(n,t){const e=document.createElement("div");return e.className="player-card__portrait-wrap",e.dataset.portraitFor=n.id,e.appendChild(ka()),t?e.appendChild(dh(e,n,t)):e.insertAdjacentHTML("beforeend",uh(n)),e}function w_(n,t,e){if(!e)return;n.querySelector(".player-card__portrait-glow")||n.prepend(ka());const i=n.querySelector("img.player-card__portrait");if(i){i.src!==e&&(i.src=e);return}const s=n.querySelector(".player-card__fallback-svg");s&&s.remove(),n.appendChild(dh(n,t,e))}function al(n,t,e){const i=!!e?.compact,s=!!e?.selected,o=e?.slotLabel,r=document.createElement("button");r.type="button",r.className=["player-card",`player-card--${n.cardTier}`,i?"player-card--compact":"player-card--full",s?"is-selected":""].filter(Boolean).join(" "),r.dataset.playerId=n.id,r.dataset.tier=n.cardTier,r.setAttribute("aria-label",`${n.name}, ${n.position}, Overall ${n.overall}`),e?.onClick&&r.addEventListener("click",e.onClick);const a=document.createElement("div");a.className="player-card__shell",a.insertAdjacentHTML("beforeend",T_(i));const c=document.createElement("div");if(c.className="player-card__sheen",c.setAttribute("aria-hidden","true"),a.appendChild(c),o||s){const m=document.createElement("span");m.className=s&&!i?"player-card__badge player-card__badge--selected":"player-card__badge",m.textContent=o??"IN SQUAD",a.appendChild(m)}const l=document.createElement("div");l.className="player-card__stage";const h=document.createElement("div");h.className="player-card__meta",h.innerHTML=`
    <span class="player-card__ovr">${n.overall}</span>
    <span class="player-card__pos">${xr(n.position)}</span>
    <span class="player-card__meta-rule" aria-hidden="true"></span>
    <span class="player-card__nation">
      ${M_(n)}
      <span class="player-card__cc">${xr(n.countryCode)}</span>
    </span>
  `,l.appendChild(h),l.appendChild(E_(n,t)),a.appendChild(l);const u=document.createElement("div");u.className="player-card__nameplate";const d=i?n.shortName:n.name,f=i?d.length>=9?" player-card__name--compact-long":"":d.length>=16?" player-card__name--xlong":d.length>=13?" player-card__name--long":"";if(u.innerHTML=`
    <span class="player-card__name${f}">${xr(d.toUpperCase())}</span>
    ${i?`<span class="player-card__compact-num">#${n.number}</span>`:""}
  `,a.appendChild(u),!i){const{pace:m,shooting:_,passing:g,dribbling:p,defending:y,physical:v}=n.stats,x=(T,A)=>`
      <div class="player-card__stat${A>=90?" is-elite":""}">
        <span class="player-card__stat-val">${A}</span>
        <span class="player-card__stat-key">${T}</span>
      </div>
    `,w=document.createElement("div");w.className="player-card__stats",w.innerHTML=`
      <div class="player-card__stat-col">
        ${x("PAC",m)}
        ${x("SHO",_)}
        ${x("PAS",g)}
      </div>
      <div class="player-card__stat-divider" aria-hidden="true"></div>
      <div class="player-card__stat-col">
        ${x("DRI",p)}
        ${x("DEF",y)}
        ${x("PHY",v)}
      </div>
    `,a.appendChild(w)}return r.appendChild(a),r}const yr=["GK","DEF","MID","FWD","FWD"],A_=["GK","DEF","MID","FWD","FWD"],b_=["ALL","FWD","MID","DEF","GK"];class C_{container;callbacks;root;portraits;homeSquadIds;homeKitId;activeSlot=4;manualSlotLock=!1;activeFilter="ALL";lastSwappedSlot=null;swapFlashTimer=null;nextFwdSlot=3;presetsEl;kitsEl;ratingsEl;slotHintEl;startingGridEl;filterTabsEl;rosterGridEl;constructor(t,e,i,s){this.container=t,this.portraits={...e},this.callbacks=s,this.homeSquadIds=this.sanitizeSquadIds(i.homeSquadIds),this.homeKitId=Oi.some(o=>o.id===i.homeKitId)?i.homeKitId:Oi[0].id,this.root=document.createElement("section"),this.root.className="squad-screen",this.root.setAttribute("aria-label","Matchday Squad Selection"),this.buildShell(),this.container.appendChild(this.root),this.renderAll()}show(){this.root.classList.remove("is-hidden")}hide(){this.root.classList.add("is-hidden")}updatePortraits(t){this.portraits={...this.portraits,...t};const e=this.root.querySelectorAll("[data-portrait-for]");for(const i of e){const s=i.dataset.portraitFor;if(!s)continue;const o=gs[s],r=this.portraits[s];o&&r&&w_(i,o,r)}}destroy(){this.swapFlashTimer!==null&&(window.clearTimeout(this.swapFlashTimer),this.swapFlashTimer=null),this.root.remove()}sanitizeSquadIds(t){const e=[],i=new Set;for(const s of t)gs[s]&&!i.has(s)&&e.length<5&&(e.push(s),i.add(s));for(const s of nh){if(e.length>=5)break;i.has(s)||(e.push(s),i.add(s))}if(gs[e[0]]?.positionGroup!=="GK"){const s=e.findIndex(o=>gs[o]?.positionGroup==="GK");if(s>0){const[o]=e.splice(s,1);e.unshift(o)}else{const o=Cn.find(r=>r.positionGroup==="GK"&&!i.has(r.id));o&&(e[0]=o.id)}}return e.slice(0,5)}buildShell(){this.root.innerHTML=`
      <header class="squad-header">
        <div class="squad-brand">
          <div class="squad-brand__eyebrow">MATCHDAY 5v5</div>
          <div class="squad-brand__row">
            <h1 class="squad-brand__title">PITCH APEX</h1>
            <span class="squad-brand__subtitle">5v5 Matchday Squad</span>
          </div>
        </div>

        <div class="squad-header__controls">
          <div class="squad-control-group">
            <span class="squad-control-label">PRESETS</span>
            <div class="squad-presets" data-mount="presets"></div>
          </div>

          <div class="squad-control-group">
            <span class="squad-control-label">HOME KIT</span>
            <div class="squad-kits" data-mount="kits"></div>
          </div>

          <button type="button" id="btn-kickoff" class="btn-kickoff">
            <span>KICK OFF</span>
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M3.5 2.5L13 8L3.5 13.5V2.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      <div class="squad-body">
        <aside class="squad-starting" aria-label="Your Starting 5">
          <div class="squad-panel-head">
            <div>
              <h2 class="squad-panel-title">YOUR STARTING 5</h2>
              <p class="squad-panel-hint" data-mount="slot-hint">Select any slot to swap</p>
            </div>
            <div class="squad-ratings" data-mount="ratings"></div>
          </div>

          <div class="squad-pitch-board">
            <div class="squad-pitch-lines" aria-hidden="true"></div>
            <div class="squad-starting-grid" data-mount="starting-grid"></div>
          </div>
        </aside>

        <main class="squad-roster" aria-label="Available Footballers">
          <div class="squad-roster-toolbar">
            <div class="squad-filter-tabs" role="tablist" aria-label="Filter by position" data-mount="filter-tabs"></div>
            <span class="squad-roster-note">Click any player card to add or focus in squad</span>
          </div>
          <div class="squad-grid" data-mount="roster-grid"></div>
        </main>
      </div>

      <footer class="squad-footer" aria-label="Match Controls">
        <span class="squad-key-item"><kbd>WASD</kbd> Move</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Shift</kbd> Sprint</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Space</kbd> Shoot / Tackle</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>E</kbd> Pass / Switch</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>C</kbd> Camera</span>
        <span class="squad-key-sep" aria-hidden="true">&bull;</span>
        <span class="squad-key-item"><kbd>Esc</kbd> Pause</span>
      </footer>
    `,this.presetsEl=this.root.querySelector('[data-mount="presets"]'),this.kitsEl=this.root.querySelector('[data-mount="kits"]'),this.ratingsEl=this.root.querySelector('[data-mount="ratings"]'),this.slotHintEl=this.root.querySelector('[data-mount="slot-hint"]'),this.startingGridEl=this.root.querySelector('[data-mount="starting-grid"]'),this.filterTabsEl=this.root.querySelector('[data-mount="filter-tabs"]'),this.rosterGridEl=this.root.querySelector('[data-mount="roster-grid"]'),this.root.querySelector("#btn-kickoff").addEventListener("click",()=>{this.callbacks.onStartMatch({homeSquadIds:[...this.homeSquadIds],homeKitId:this.homeKitId})})}renderAll(){this.renderPresets(),this.renderKits(),this.renderRatings(),this.renderStartingFive(),this.renderFilterTabs(),this.renderRosterGrid()}renderPresets(){this.presetsEl.innerHTML="";for(const t of yg){const e=t.ids.length===this.homeSquadIds.length&&t.ids.every((s,o)=>this.homeSquadIds[o]===s),i=document.createElement("button");i.type="button",i.className=`squad-preset-pill${e?" is-active":""}`,i.textContent=t.name,i.addEventListener("click",()=>{this.homeSquadIds=this.sanitizeSquadIds(t.ids),this.manualSlotLock=!1,this.triggerSwapFlash(null),this.renderAll()}),this.presetsEl.appendChild(i)}}renderKits(){this.kitsEl.innerHTML="";for(const t of Oi){const e=t.id===this.homeKitId,i=document.createElement("button");i.type="button",i.className=`squad-kit-swatch${e?" is-active":""}`,i.title=t.name,i.setAttribute("aria-label",`Select ${t.name} kit`),i.setAttribute("aria-pressed",String(e)),i.style.setProperty("--kit-primary",t.primary),i.style.setProperty("--kit-secondary",t.secondary),i.innerHTML='<span class="squad-kit-swatch__fill"></span><span class="squad-kit-swatch__trim"></span>',i.addEventListener("click",()=>{this.homeKitId!==t.id&&(this.homeKitId=t.id,this.renderKits())}),this.kitsEl.appendChild(i)}}renderRatings(){const t=this.homeSquadIds.map(r=>So(r)),e=Math.round(t.reduce((r,a)=>r+a.overall,0)/t.length),i=Math.round((t[3].overall+t[4].overall)/2),s=Math.round(t[2].overall),o=Math.round((t[0].overall+t[1].overall)/2);this.ratingsEl.innerHTML=`
      <div class="squad-rating-chip squad-rating-chip--ovr">
        <span class="squad-rating-chip__val">${e}</span>
        <span class="squad-rating-chip__key">OVR</span>
      </div>
      <div class="squad-rating-chip">
        <span class="squad-rating-chip__val">${i}</span>
        <span class="squad-rating-chip__key">ATT</span>
      </div>
      <div class="squad-rating-chip">
        <span class="squad-rating-chip__val">${s}</span>
        <span class="squad-rating-chip__key">MID</span>
      </div>
      <div class="squad-rating-chip">
        <span class="squad-rating-chip__val">${o}</span>
        <span class="squad-rating-chip__key">DEF</span>
      </div>
    `}renderStartingFive(){const t=yr[this.activeSlot],e=So(this.homeSquadIds[this.activeSlot]);this.slotHintEl.textContent=`Active slot: ${t} (${e.shortName})`,this.startingGridEl.innerHTML="";const i=[3,4,1,2,0];for(const s of i){const o=So(this.homeSquadIds[s]),r=s===this.activeSlot,a=s===this.lastSwappedSlot,c=document.createElement("div");c.className=["squad-slot",`squad-slot--${A_[s].toLowerCase()}`,s===0?"squad-slot--gk-anchor":"",r?"is-active-slot":"",a?"just-swapped":""].filter(Boolean).join(" "),c.dataset.slotIndex=String(s);const l=al(o,this.portraits[o.id],{compact:!0,selected:!1,slotLabel:yr[s],onClick:()=>{this.activeSlot=s,this.manualSlotLock=!0,this.renderStartingFive()}});c.appendChild(l),this.startingGridEl.appendChild(c)}}renderFilterTabs(){this.filterTabsEl.innerHTML="";for(const t of b_){const e=t==="ALL"?Cn.length:Cn.filter(o=>o.positionGroup===t).length,i=t===this.activeFilter,s=document.createElement("button");s.type="button",s.role="tab",s.className=`squad-filter-tab${i?" is-active":""}`,s.setAttribute("aria-selected",String(i)),s.innerHTML=`<span>${t}</span><span class="squad-filter-tab__count">${e}</span>`,s.addEventListener("click",()=>{this.activeFilter!==t&&(this.activeFilter=t,this.renderFilterTabs(),this.renderRosterGrid())}),this.filterTabsEl.appendChild(s)}}renderRosterGrid(){this.rosterGridEl.innerHTML="";const t=this.activeFilter==="ALL"?Cn:Cn.filter(e=>e.positionGroup===this.activeFilter);for(const e of t){const i=this.homeSquadIds.indexOf(e.id),s=i!==-1,o=al(e,this.portraits[e.id],{compact:!1,selected:s,slotLabel:s?yr[i]:void 0,onClick:()=>this.handleRosterPlayerClick(e)});this.rosterGridEl.appendChild(o)}}handleRosterPlayerClick(t){const e=this.homeSquadIds.indexOf(t.id);if(e!==-1){this.activeSlot=e,this.manualSlotLock=!0,this.renderStartingFive();return}const i=this.resolveTargetSlot(t);this.homeSquadIds[i]=t.id,this.activeSlot=i,this.manualSlotLock=!1,this.triggerSwapFlash(i),this.renderPresets(),this.renderRatings(),this.renderStartingFive(),this.renderRosterGrid()}resolveTargetSlot(t){if(t.positionGroup==="GK")return 0;if(this.manualSlotLock&&this.activeSlot>=1&&this.activeSlot<=4)return this.activeSlot;switch(t.positionGroup){case"DEF":return 1;case"MID":return 2;case"FWD":{if(this.activeSlot===3||this.activeSlot===4){const i=this.activeSlot;return this.nextFwdSlot=i===3?4:3,i}const e=this.nextFwdSlot;return this.nextFwdSlot=e===3?4:3,e}}}triggerSwapFlash(t){this.swapFlashTimer!==null&&(window.clearTimeout(this.swapFlashTimer),this.swapFlashTimer=null),this.lastSwappedSlot=t,t!==null&&(this.swapFlashTimer=window.setTimeout(()=>{this.lastSwappedSlot=null,this.startingGridEl.querySelector(".just-swapped")?.classList.remove("just-swapped")},420))}}class R_{keys=new Set;spaceJustPressed=!1;spaceJustReleased=!1;eJustPressed=!1;eJustReleased=!1;enabled=!1;callbacks;constructor(t){this.callbacks=t,window.addEventListener("keydown",this.handleKeyDown,{passive:!1}),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}setGameplayEnabled(t){this.enabled=t,t||this.clearState()}clearState(){this.keys.clear(),this.spaceJustPressed=!1,this.spaceJustReleased=!1,this.eJustPressed=!1,this.eJustReleased=!1}consumeInput(){const t=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,e=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,i=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,s=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0;let o=t-e,r=i-s;const a=Math.hypot(o,r);a>1&&(o/=a,r/=a);const c={moveX:o,moveZ:r,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),spaceHeld:this.keys.has("Space"),spaceJustPressed:this.spaceJustPressed,spaceJustReleased:this.spaceJustReleased,eHeld:this.keys.has("KeyE"),eJustPressed:this.eJustPressed,eJustReleased:this.eJustReleased};return this.spaceJustPressed=!1,this.spaceJustReleased=!1,this.eJustPressed=!1,this.eJustReleased=!1,c}handleKeyDown=t=>{if(this.callbacks.onAnyInteraction(),t.code==="Escape"&&!t.repeat){t.preventDefault(),this.callbacks.onTogglePause();return}if(!this.enabled)return;if(t.code==="KeyC"&&!t.repeat){t.preventDefault(),this.callbacks.onCycleCamera();return}if(t.code==="KeyM"&&!t.repeat){t.preventDefault(),this.callbacks.onToggleMute();return}(t.code==="Space"||t.code==="ArrowUp"||t.code==="ArrowDown"||t.code==="ArrowLeft"||t.code==="ArrowRight")&&t.preventDefault();const e=this.keys.has(t.code);this.keys.add(t.code),!e&&!t.repeat&&(t.code==="Space"&&(this.spaceJustPressed=!0),t.code==="KeyE"&&(this.eJustPressed=!0))};handleKeyUp=t=>{const e=this.keys.has(t.code);this.keys.delete(t.code),e&&this.enabled&&(t.code==="Space"&&(this.spaceJustReleased=!0),t.code==="KeyE"&&(this.eJustReleased=!0))};handleBlur=()=>{this.clearState()};destroy(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}class P_{canvasContainer;uiRoot;renderer;scene;camera;cameraController;pitch;ballVisuals;effects;soundEngine;inputManager;matchEngine;squadSelectUI;hud;playerRigs=new Map;portraits={};currentSquadState;rafId=null;lastFrameTime=0;accumulator=0;elapsedTime=0;constructor(t,e){this.canvasContainer=t,this.uiRoot=e,this.renderer=new eh({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(this.canvasContainer.clientWidth||window.innerWidth,this.canvasContainer.clientHeight||window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hl,this.renderer.toneMapping=_a,this.renderer.toneMappingExposure=1.06,this.renderer.outputColorSpace=Se,this.canvasContainer.appendChild(this.renderer.domElement),this.scene=new Dl;const i=(this.canvasContainer.clientWidth||window.innerWidth)/Math.max(1,this.canvasContainer.clientHeight||window.innerHeight);this.camera=new $e(42,i,.4,260),this.cameraController=new kg(this.camera),this.pitch=t_(this.scene),this.ballVisuals=Og(this.scene),this.effects=new Xg(this.scene),this.soundEngine=new Sg,this.inputManager=new R_({onTogglePause:()=>this.handleTogglePause(),onCycleCamera:()=>this.handleCycleCamera(),onToggleMute:()=>{this.soundEngine.toggleMute()},onAnyInteraction:()=>{this.soundEngine.unlock()}}),this.currentSquadState={homeSquadIds:[...nh],homeKitId:Oi[0].id};const{homeSquad:s,awaySquad:o,homeKit:r,awayKit:a}=this.resolveTeams(this.currentSquadState);this.matchEngine=new v_(s,o,r,a),this.rebuildPlayerRigs(this.matchEngine.getSnapshot()),this.cameraController.snapTo(this.matchEngine.getSnapshot()),this.portraits=Qc(Cn,r),this.squadSelectUI=new C_(this.uiRoot,this.portraits,this.currentSquadState,{onStartMatch:c=>this.startNewMatch(c)}),this.hud=new S_(this.uiRoot,{onResume:()=>this.handleResume(),onRestart:()=>this.handleRestartMatch(),onChangeSquad:()=>this.returnToSquadSelect(),onToggleMute:()=>this.soundEngine.toggleMute(),onCycleCamera:()=>this.handleCycleCamera()}),this.hud.hide(),this.squadSelectUI.show(),this.inputManager.setGameplayEnabled(!1),window.__PITCH_APEX__={getSnapshot:()=>this.matchEngine.getSnapshot(),cycleCamera:()=>this.handleCycleCamera(),getPlayerRigCount:()=>this.playerRigs.size,getPortraitsLoaded:()=>Object.values(this.portraits).filter(c=>c.length>0).length},window.addEventListener("resize",this.handleResize),this.lastFrameTime=performance.now(),this.loop(this.lastFrameTime)}resolveTeams(t){const e=t.homeSquadIds.map(r=>So(r)),i=xg(t.homeSquadIds),s=Oi.find(r=>r.id===t.homeKitId)??Oi[0],o=vg(s.id);return{homeSquad:e,awaySquad:i,homeKit:s,awayKit:o}}rebuildPlayerRigs(t){for(const e of this.playerRigs.values())this.scene.remove(e.root),ua(e);this.playerRigs.clear();for(const e of t.players){const i=e.team==="home"?t.homeKit:t.awayKit,s=e.role==="GK",o=ih(e.profile,i,s);o.root.position.set(e.position.x,e.position.y,e.position.z),o.root.rotation.y=e.facing,this.scene.add(o.root),this.playerRigs.set(e.id,o)}}startNewMatch(t){this.soundEngine.unlock();const e=t.homeKitId!==this.currentSquadState.homeKitId;this.currentSquadState={homeSquadIds:[...t.homeSquadIds],homeKitId:t.homeKitId};const{homeSquad:i,awaySquad:s,homeKit:o,awayKit:r}=this.resolveTeams(this.currentSquadState);e&&(this.portraits=Qc(Cn,o),this.squadSelectUI.updatePortraits(this.portraits)),this.matchEngine.resetMatch(i,s,o,r),this.matchEngine.startMatch();const a=this.matchEngine.getSnapshot();this.rebuildPlayerRigs(a),this.cameraController.snapTo(a),this.squadSelectUI.hide(),this.hud.show(),this.hud.update(a,this.cameraController.getPreset()),this.inputManager.clearState(),this.inputManager.setGameplayEnabled(!0),this.accumulator=0,this.soundEngine.playEvent({type:"whistle_short",intensity:.9})}handleRestartMatch(){this.startNewMatch(this.currentSquadState)}returnToSquadSelect(){this.inputManager.setGameplayEnabled(!1);const{homeSquad:t,awaySquad:e,homeKit:i,awayKit:s}=this.resolveTeams(this.currentSquadState);this.matchEngine.resetMatch(t,e,i,s);const o=this.matchEngine.getSnapshot();this.rebuildPlayerRigs(o),this.cameraController.snapTo(o),this.hud.hide(),this.squadSelectUI.show()}handleTogglePause(){const t=this.matchEngine.getSnapshot();t.phase==="squad_select"||t.phase==="fulltime"||(t.phase==="paused"?this.handleResume():(this.matchEngine.setPaused(!0),this.inputManager.setGameplayEnabled(!1),this.hud.update(this.matchEngine.getSnapshot(),this.cameraController.getPreset())))}handleResume(){this.matchEngine.setPaused(!1),this.inputManager.clearState(),this.inputManager.setGameplayEnabled(!0),this.hud.update(this.matchEngine.getSnapshot(),this.cameraController.getPreset())}handleCycleCamera(){const t=this.cameraController.cyclePreset();return this.hud.update(this.matchEngine.getSnapshot(),t),t}processSimEvents(t){for(const e of t)if(this.soundEngine.playEvent(e),e.type==="net_ripple"&&e.goalSide&&e.position&&this.pitch.triggerNetRipple(e.goalSide,e.position,Math.max(.4,e.intensity)),(e.type==="kick_pass"||e.type==="kick_shot")&&e.position&&(this.effects.spawnKickBurst(e.position,e.intensity,e.type==="kick_shot"),e.type==="kick_shot"&&e.intensity>.5&&this.cameraController.addShake(e.intensity*.42)),e.type==="post_hit"&&this.cameraController.addShake(Math.max(.35,e.intensity*.65)),e.type==="goal_cheer"&&e.goalEvent){const i=e.goalEvent.team==="home"?"away":"home";this.effects.spawnGoalCelebrationBurst(i),this.cameraController.addShake(.35)}}loop=t=>{this.rafId=requestAnimationFrame(this.loop);const e=Math.min((t-this.lastFrameTime)/1e3,.05);this.lastFrameTime=t,this.elapsedTime+=e;const i=this.matchEngine.getSnapshot();if(i.phase!=="squad_select"&&i.phase!=="paused"){this.accumulator+=e;const o=4;let r=0;for(;this.accumulator>=ze.FIXED_DT&&r<o;){const a=this.inputManager.consumeInput(),c=this.cameraController.getHorizontalBasis(),l=this.matchEngine.step(ze.FIXED_DT,a,c);l.length>0&&this.processSimEvents(l),this.accumulator-=ze.FIXED_DT,r++}}const s=this.matchEngine.getSnapshot();for(const o of s.players){const r=this.playerRigs.get(o.id);r&&wg(r,o,e,this.elapsedTime)}if(this.ballVisuals.update(s.ball,e),this.pitch.update(e,this.elapsedTime),s.phase!=="squad_select"){const o=s.players.find(a=>a.id===s.controlledPlayerId)??null,r=this.matchEngine.getPassTargetPreview();this.effects.updateControlledIndicator(o,r,s.ball,this.elapsedTime),this.cameraController.update(s,e),this.hud.update(s,this.cameraController.getPreset())}else{this.effects.updateControlledIndicator(null,null,s.ball,this.elapsedTime);const o=this.elapsedTime*.14;this.camera.position.set(Math.sin(o)*14,16.5+Math.sin(o*.7)*1.4,25.5+Math.cos(o)*3),this.camera.lookAt(0,.5,-1.5)}this.effects.update(e),this.renderer.render(this.scene,this.camera)};handleResize=()=>{const t=this.canvasContainer.clientWidth||window.innerWidth,e=Math.max(1,this.canvasContainer.clientHeight||window.innerHeight);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)};destroy(){this.rafId!==null&&cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),this.inputManager.destroy(),this.squadSelectUI.destroy(),this.hud.destroy();for(const t of this.playerRigs.values())this.scene.remove(t.root),ua(t);this.playerRigs.clear(),this.renderer.dispose()}}function cl(){const n=document.getElementById("canvas-container"),t=document.getElementById("ui-root");if(!n||!t)throw new Error("Missing #canvas-container or #ui-root mount elements");new P_(n,t)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cl):cl();
