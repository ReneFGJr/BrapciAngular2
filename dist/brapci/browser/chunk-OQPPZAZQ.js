import{a as Uh}from"./chunk-M5BDHKN6.js";import{a as bh,c as Mh,d as Ch,e as wh,f as Sh,g as Fo,h as Th,i as Eh,j as Ah,k as Ph,l as Ih,m as Rh,n as kh,o as Oh,q as Dh,r as Nh}from"./chunk-LTC66MXU.js";import{a as Fh}from"./chunk-DMQZNPMN.js";import{a as Bo}from"./chunk-72QVEBZH.js";import{c as $t,d as Vt}from"./chunk-URFU5ZW7.js";import{a as Uo}from"./chunk-GS3W7ICU.js";import"./chunk-7AD2CRLT.js";import{a as Lh}from"./chunk-EXXG6RDH.js";import{a as Or}from"./chunk-D73CHGRT.js";import{$a as V,Aa as ft,Ab as Do,B as Jt,Ba as Be,Bb as No,Ca as Bt,D as et,Da as B,E as tt,Ea as Pr,F as dn,Fa as Ir,Fb as vh,G as Zn,Ga as Rr,Ha as uh,Hb as kr,I as ah,Ia as ba,Ib as Lo,J as oh,Ja as Ke,Ka as b,Kb as yh,L as qe,La as H,M as Er,Ma as re,Na as Bn,O as sh,Oa as hh,P as lh,Pa as ph,Q as Qi,Qa as fh,R as Ut,S as Po,U as g,V as ch,Va as Vc,Xa as Dn,Ya as Tt,Z as Kn,Za as Ma,_ as je,_a as L,ab as zt,da as On,e as Bc,eb as te,fb as mh,h as zc,ha as ze,ia as dh,ja as se,ka as le,kb as Ro,la as ya,lb as gh,m as th,ma as Io,mb as ko,na as rt,oa as at,p as nh,pa as Me,pb as Ye,qa as w,qb as _h,ra as v,s as ih,sa as Ge,ta as ce,u as rh,ua as ye,ub as xh,va as pt,ya as Ar,za as ht,zb as Oo}from"./chunk-DKWWICXD.js";import{a as gn,b as vn,e as Tr}from"./chunk-6MDQTQU3.js";var Fg=n=>["/v",n],Ug=(n,e)=>e.id;function Bg(n,e){n&1&&(w(0,"p",1),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"author.noRecords")))}function zg(n,e){if(n&1&&(w(0,"a",9),b(1),v()),n&2){let t=B().$implicit;Ke("is-strong",t.totalPublications>5),Me("routerLink",Tt(4,Fg,t.id)),g(),re(" ",t.name," ")}}function Vg(n,e){if(n&1&&(w(0,"span"),b(1),v()),n&2){let t=B().$implicit;Ke("is-strong",t.totalPublications>5),g(),H(t.name)}}function Gg(n,e){if(n&1&&(w(0,"li",4)(1,"span",5),se(2,zg,2,6,"a",6)(3,Vg,2,3,"span",7),v(),w(4,"span",8),b(5),v()()),n&2){let t=e.$implicit;g(2),le(t.id&&!t.id.startsWith("coauthor_")?2:3),g(3),H(t.totalPublications)}}function Hg(n,e){if(n&1&&(w(0,"h2",2),b(1,"Total de colaboradores: "),w(2,"strong"),b(3),v()(),w(4,"ul",3),rt(5,Gg,6,2,"li",4,Ug),v()),n&2){let t=B();g(3),H(t.collaboratorTotal),g(2),at(t.coauthors)}}var zo=class n{coauthors=[];get collaboratorTotal(){return Math.max(this.coauthors.length-1,0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-coauthors-list"]],inputs:{coauthors:"coauthors"},decls:3,vars:1,consts:[[1,"coauthors-table-wrapper"],[1,"coauthors-empty","mb-0"],[1,"mb-2"],["aria-label","Lista de coautores",1,"coauthors-list",2,"column-count","2","column-gap","30px"],[1,"coauthors-item"],[1,"coauthor-name"],[3,"routerLink","is-strong"],[3,"is-strong"],[1,"coauthor-count"],[3,"routerLink"]],template:function(t,i){t&1&&(w(0,"div",0),se(1,Bg,3,3,"p",1)(2,Hg,7,1),v()),t&2&&(g(),le(i.coauthors.length===0?1:2))},dependencies:[Ye,Lo,Vt,$t],styles:["[_nghost-%COMP%]{display:block}.coauthors-table-wrapper[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.coauthors-empty[_ngcontent-%COMP%]{padding:1rem;text-align:center;color:var(--theme-muted);font-style:italic}.coauthors-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.coauthors-total[_ngcontent-%COMP%]{color:var(--theme-ink);font-size:.92rem;margin:0}.coauthors-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:.5rem;break-inside:avoid;margin:0;padding:0;line-height:1.15;border-bottom:1px solid var(--theme-line)}.coauthor-name[_ngcontent-%COMP%], .coauthor-count[_ngcontent-%COMP%]{padding:.35rem .15rem}.coauthor-count[_ngcontent-%COMP%]{min-width:2ch;text-align:right;font-weight:600}.coauthor-name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.is-strong[_ngcontent-%COMP%]{font-weight:700}a[_ngcontent-%COMP%]{color:var(--theme-link);text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.coauthors-item[_ngcontent-%COMP%]:hover{background-color:var(--theme-sand)}.coauthors-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.95rem}.coauthors-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--theme-card-bg);border-bottom:2px solid var(--theme-line)}.coauthors-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.75rem;text-align:left;font-weight:600;color:var(--theme-ink)}.coauthors-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.75rem;border-bottom:1px solid var(--theme-line);color:var(--theme-ink)}.coauthors-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--theme-sand)}.coauthors-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-link);text-decoration:none}.coauthors-table[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.coauthors-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .coauthors-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:center;width:100px}"]})};var lp=0,wd=1,cp=2;var Ja=1,dp=2,ia=3,yi=0,_n=1,ri=2,ai=0,or=1,Sd=2,Td=3,Ed=4,up=5;var Fi=100,hp=101,pp=102,fp=103,mp=104,gp=200,_p=201,xp=202,vp=203,ds=204,us=205,yp=206,bp=207,Mp=208,Cp=209,wp=210,Sp=211,Tp=212,Ep=213,Ap=214,hs=0,ps=1,fs=2,sr=3,ms=4,gs=5,_s=6,xs=7,Hs=0,Pp=1,Ip=2,Xn=0,Ad=1,Pd=2,Id=3,Rd=4,kd=5,Od=6,Dd=7;var pd=300,Hi=301,dr=302,Ws=303,Xs=304,Za=306,vs=1e3,ei=1001,ys=1002,rn=1003,Rp=1004;var Ka=1005;var on=1006,qs=1007;var Wi=1008;var Cn=1009,Nd=1010,Ld=1011,ra=1012,js=1013,qn=1014,jn=1015,oi=1016,$s=1017,Ys=1018,aa=1020,Fd=35902,Ud=35899,Bd=1021,zd=1022,Fn=1023,ti=1026,Xi=1027,Vd=1028,Js=1029,ur=1030,Zs=1031;var Ks=1033,Qa=33776,eo=33777,to=33778,no=33779,Qs=35840,el=35841,tl=35842,nl=35843,il=36196,rl=37492,al=37496,ol=37488,sl=37489,ll=37490,cl=37491,dl=37808,ul=37809,hl=37810,pl=37811,fl=37812,ml=37813,gl=37814,_l=37815,xl=37816,vl=37817,yl=37818,bl=37819,Ml=37820,Cl=37821,wl=36492,Sl=36494,Tl=36495,El=36283,Al=36284,Pl=36285,Il=36286;var Pa=2300,bs=2301,cs=2302,fd=2303,md=2400,gd=2401,_d=2402;var kp=3200;var Gd=0,Op=1,Ci="",An="srgb",lr="srgb-linear",Ia="linear",bt="srgb";var rr=7680;var xd=519,Dp=512,Np=513,Lp=514,Rl=515,Fp=516,Up=517,kl=518,Bp=519,vd=35044;var Hd="300 es",Hn=2e3,jr=2001;function Wg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zp(){let n=Ra("canvas");return n.style.display="block",n}var Bh={},$r=null;function Wd(...n){let e="THREE."+n.shift();$r?$r("log",e,...n):console.log(e,...n)}function Vp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=Vp(n);let e="THREE."+n.shift();if($r)$r("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=Vp(n);let e="THREE."+n.shift();if($r)$r("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ka(...n){let e=n.join(" ");e in Bh||(Bh[e]=!0,$e(...n))}function Gp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var Hp={[hs]:ps,[fs]:_s,[ms]:xs,[sr]:gs,[ps]:hs,[_s]:fs,[xs]:ms,[gs]:sr},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gc=Math.PI/180,Ms=180/Math.PI;function io(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function qg(n,e){return(n%e+e)%e}function Hc(n,e,t){return(1-t)*n+t*e}function Ca(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var _t=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ni=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=a[o+0],f=a[o+1],_=a[o+2],M=a[o+3];if(h!==M||l!==u||c!==f||d!==_){let m=l*u+c*f+d*_+h*M;m<0&&(u=-u,f=-f,_=-_,M=-M,m=-m);let p=1-s;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,s=Math.sin(s*S)/A,l=l*p+u*s,c=c*p+f*s,d=d*p+_*s,h=h*p+M*s}else{l=l*p+u*s,c=c*p+f*s,d=d*p+_*s,h=h*p+M*s;let S=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=S,c*=S,d*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){let s=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=a[o],u=a[o+1],f=a[o+2],_=a[o+3];return e[t]=s*_+d*h+l*f-c*u,e[t+1]=l*_+d*u+c*h-s*f,e[t+2]=c*_+d*f+s*u-l*h,e[t+3]=d*_-s*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(r/2),h=s(a/2),u=l(i/2),f=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=u*d*h+c*f*_,this._y=c*f*h-u*d*_,this._z=c*d*_+u*f*h,this._w=c*d*h-u*f*_;break;case"YXZ":this._x=u*d*h+c*f*_,this._y=c*f*h-u*d*_,this._z=c*d*_-u*f*h,this._w=c*d*h+u*f*_;break;case"ZXY":this._x=u*d*h-c*f*_,this._y=c*f*h+u*d*_,this._z=c*d*_+u*f*h,this._w=c*d*h-u*f*_;break;case"ZYX":this._x=u*d*h-c*f*_,this._y=c*f*h+u*d*_,this._z=c*d*_-u*f*h,this._w=c*d*h+u*f*_;break;case"YZX":this._x=u*d*h+c*f*_,this._y=c*f*h+u*d*_,this._z=c*d*_-u*f*h,this._w=c*d*h-u*f*_;break;case"XZY":this._x=u*d*h-c*f*_,this._y=c*f*h-u*d*_,this._z=c*d*_+u*f*h,this._w=c*d*h+u*f*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+s+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(a-c)*f,this._z=(o-r)*f}else if(i>s&&i>h){let f=2*Math.sqrt(1+i-s-h);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(a+c)/f}else if(s>h){let f=2*Math.sqrt(1+s-i-h);this._w=(a-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-i-s);this._w=(o-r)/f,this._x=(a+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*s+r*c-a*l,this._y=r*d+o*l+a*s-i*c,this._z=a*d+o*c+i*l-r*s,this._w=o*d-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,o=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,o=-o,s=-s);let l=1-t;if(s<.9995){let c=Math.acos(s),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*i),d=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+l*c+o*h-s*d,this.y=i+l*d+s*c-a*h,this.z=r+l*h+a*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new W,zh=new ni,nt=class n{constructor(e,t,i,r,a,o,s,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],f=i[5],_=i[8],M=r[0],m=r[3],p=r[6],S=r[1],A=r[4],T=r[7],R=r[2],I=r[5],O=r[8];return a[0]=o*M+s*S+l*R,a[3]=o*m+s*A+l*I,a[6]=o*p+s*T+l*O,a[1]=c*M+d*S+h*R,a[4]=c*m+d*A+h*I,a[7]=c*p+d*T+h*O,a[2]=u*M+f*S+_*R,a[5]=u*m+f*A+_*I,a[8]=u*p+f*T+_*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*s*c-i*a*d+i*s*l+r*a*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],h=d*o-s*c,u=s*l-d*a,f=c*a-o*l,_=t*h+i*u+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=h*M,e[1]=(r*c-d*i)*M,e[2]=(s*i-r*o)*M,e[3]=u*M,e[4]=(d*t-r*l)*M,e[5]=(r*a-s*t)*M,e[6]=f*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*a)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xc=new nt,Vh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jg(){let n={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===bt&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?Ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lr]:{primaries:e,whitePoint:i,transfer:Ia,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}var gt=jg();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Dr,Cs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dr===void 0&&(Dr=Ra("canvas")),Dr.width=e.width,Dr.height=e.height;let r=Dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Dr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=vi(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vi(t[i]/255)*255):t[i]=vi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$g=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(qc(r[o].image)):a.push(qc(r[o]))}else a=qc(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cs.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var Yg=0,jc=new W,wi=(()=>{class n extends bi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ei,a=ei,o=on,s=Wi,l=Fn,c=Cn,d=n.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=io(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){$e(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){$e(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=pd,n.DEFAULT_ANISOTROPY=1,n})(),Lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,T=(f+1)/2,R=(p+1)/2,I=(d+u)/4,O=(h+M)/4,y=(_+m)/4;return A>T&&A>R?A<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(A),r=I/i,a=O/i):T>R?T<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),i=I/r,a=y/r):R<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),i=O/a,r=y/a),this.set(i,r,a,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-M)/S,this.z=(u-d)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ws=class extends bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new wi(r),o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends ws{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Oa=class extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ss=class extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ot=class n{constructor(e,t,i,r,a,o,s,l,c,d,h,u,f,_,M,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,d,h,u,f,_,M,m)}set(e,t,i,r,a,o,s,l,c,d,h,u,f,_,M,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),a=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){let u=o*d,f=o*h,_=s*d,M=s*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=u-M*c,t[9]=-s*l,t[2]=M-u*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*d,f=l*h,_=c*d,M=c*h;t[0]=u+M*s,t[4]=_*s-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=f*s-_,t[6]=M+u*s,t[10]=o*l}else if(e.order==="ZXY"){let u=l*d,f=l*h,_=c*d,M=c*h;t[0]=u-M*s,t[4]=-o*h,t[8]=_+f*s,t[1]=f+_*s,t[5]=o*d,t[9]=M-u*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){let u=o*d,f=o*h,_=s*d,M=s*h;t[0]=l*d,t[4]=_*c-f,t[8]=u*c+M,t[1]=l*h,t[5]=M*c+u,t[9]=f*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,_=s*l,M=s*c;t[0]=l*d,t[4]=M-u*h,t[8]=_*h+f,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-c*d,t[6]=f*h+_,t[10]=u-M*h}else if(e.order==="XZY"){let u=o*l,f=o*c,_=s*l,M=s*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+M,t[5]=o*d,t[9]=f*h-_,t[2]=_*h-f,t[6]=s*d,t[10]=M*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Zg)}lookAt(e,t,i){let r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ii.crossVectors(i,Tn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ii.crossVectors(i,Tn)),Ii.normalize(),Vo.crossVectors(Tn,Ii),r[0]=Ii.x,r[4]=Vo.x,r[8]=Tn.x,r[1]=Ii.y,r[5]=Vo.y,r[9]=Tn.y,r[2]=Ii.z,r[6]=Vo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],f=i[13],_=i[2],M=i[6],m=i[10],p=i[14],S=i[3],A=i[7],T=i[11],R=i[15],I=r[0],O=r[4],y=r[8],E=r[12],Q=r[1],k=r[5],F=r[9],X=r[13],Z=r[2],j=r[6],Y=r[10],G=r[14],de=r[3],oe=r[7],ve=r[11],Pe=r[15];return a[0]=o*I+s*Q+l*Z+c*de,a[4]=o*O+s*k+l*j+c*oe,a[8]=o*y+s*F+l*Y+c*ve,a[12]=o*E+s*X+l*G+c*Pe,a[1]=d*I+h*Q+u*Z+f*de,a[5]=d*O+h*k+u*j+f*oe,a[9]=d*y+h*F+u*Y+f*ve,a[13]=d*E+h*X+u*G+f*Pe,a[2]=_*I+M*Q+m*Z+p*de,a[6]=_*O+M*k+m*j+p*oe,a[10]=_*y+M*F+m*Y+p*ve,a[14]=_*E+M*X+m*G+p*Pe,a[3]=S*I+A*Q+T*Z+R*de,a[7]=S*O+A*k+T*j+R*oe,a[11]=S*y+A*F+T*Y+R*ve,a[15]=S*E+A*X+T*G+R*Pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],_=e[3],M=e[7],m=e[11],p=e[15],S=l*f-c*u,A=s*f-c*h,T=s*u-l*h,R=o*f-c*d,I=o*u-l*d,O=o*h-s*d;return t*(M*S-m*A+p*T)-i*(_*S-m*R+p*I)+r*(_*A-M*R+p*O)-a*(_*T-M*I+m*O)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],_=e[12],M=e[13],m=e[14],p=e[15],S=t*s-i*o,A=t*l-r*o,T=t*c-a*o,R=i*l-r*s,I=i*c-a*s,O=r*c-a*l,y=d*M-h*_,E=d*m-u*_,Q=d*p-f*_,k=h*m-u*M,F=h*p-f*M,X=u*p-f*m,Z=S*X-A*F+T*k+R*Q-I*E+O*y;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/Z;return e[0]=(s*X-l*F+c*k)*j,e[1]=(r*F-i*X-a*k)*j,e[2]=(M*O-m*I+p*R)*j,e[3]=(u*I-h*O-f*R)*j,e[4]=(l*Q-o*X-c*E)*j,e[5]=(t*X-r*Q+a*E)*j,e[6]=(m*T-_*O-p*A)*j,e[7]=(d*O-u*T+f*A)*j,e[8]=(o*F-s*Q+c*y)*j,e[9]=(i*Q-t*F-a*y)*j,e[10]=(_*I-M*T+p*S)*j,e[11]=(h*T-d*I-f*S)*j,e[12]=(s*E-o*k-l*y)*j,e[13]=(t*k-i*E+r*y)*j,e[14]=(M*A-_*R-m*S)*j,e[15]=(d*R-h*A+u*S)*j,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,d=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,d*s+i,d*l-r*o,0,c*l-r*s,d*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,d=o+o,h=s+s,u=a*c,f=a*d,_=a*h,M=o*d,m=o*h,p=s*h,S=l*c,A=l*d,T=l*h,R=i.x,I=i.y,O=i.z;return r[0]=(1-(M+p))*R,r[1]=(f+T)*R,r[2]=(_-A)*R,r[3]=0,r[4]=(f-T)*I,r[5]=(1-(u+p))*I,r[6]=(m+S)*I,r[7]=0,r[8]=(_+A)*O,r[9]=(m-S)*O,r[10]=(1-(u+M))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let o=Nr.set(r[0],r[1],r[2]).length(),s=Nr.set(r[4],r[5],r[6]).length(),l=Nr.set(r[8],r[9],r[10]).length();a<0&&(o=-o),zn.copy(this);let c=1/o,d=1/s,h=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),i.x=o,i.y=s,i.z=l,this}makePerspective(e,t,i,r,a,o,s=Hn,l=!1){let c=this.elements,d=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),_,M;if(l)_=a/(o-a),M=o*a/(o-a);else if(s===Hn)_=-(o+a)/(o-a),M=-2*o*a/(o-a);else if(s===jr)_=-o/(o-a),M=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Hn,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),f=-(i+r)/(i-r),_,M;if(l)_=1/(o-a),M=o/(o-a);else if(s===Hn)_=-2/(o-a),M=-(o+a)/(o-a);else if(s===jr)_=-1/(o-a),M=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Nr=new W,zn=new Ot,Jg=new W(0,0,0),Zg=new W(1,1,1),Ii=new W,Vo=new W,Tn=new W,Hh=new Ot,Wh=new ni,Ui=(()=>{class n{constructor(t=0,i=0,r=0,a=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,o=a[0],s=a[4],l=a[8],c=a[1],d=a[5],h=a[9],u=a[2],f=a[6],_=a[10];switch(i){case"XYZ":this._y=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,_),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kg=0,Xh=new W,Lr=new ni,fi=new Ot,Go=new W,wa=new W,Qg=new W,e0=new ni,qh=new W(1,0,0),jh=new W(0,1,0),$h=new W(0,0,1),Yh={type:"added"},t0={type:"removed"},Fr={type:"childadded",child:null},$c={type:"childremoved",child:null},Wn=(()=>{class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,i=new Ui,r=new ni,a=new W(1,1,1);function o(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,i){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Go.copy(t):Go.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(wa,Go,this.up):fi.lookAt(Go,wa,this.up),this.quaternion.setFromRotationMatrix(fi),a&&(fi.extractRotation(a.matrixWorld),Lr.setFromRotationMatrix(fi),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(We("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(t0),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let s=this.children[r].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,t,Qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,o=this.matrix.elements;o[12]+=i-o[0]*i-o[4]*r-o[8]*a,o[13]+=r-o[1]*i-o[5]*r-o[9]*a,o[14]+=a-o[2]*i-o[6]*r-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>vn(gn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>gn({},l)),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){let u=c[d];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(o(t.materials,this.material[c]));a.material=l}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];a.animations.push(o(t.animations,c))}}if(i){let l=s(t.geometries),c=s(t.materials),d=s(t.textures),h=s(t.images),u=s(t.shapes),f=s(t.skeletons),_=s(t.animations),M=s(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),d.length>0&&(r.textures=d),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=a,r;function s(l){let c=[];for(let d in l){let h=l[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}}return n.DEFAULT_UP=new W(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),ar=class extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},n0={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null,s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ut=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=qg(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Yc(o,a,e+1/3),this.g=Yc(o,a,e),this.b=Yc(o,a,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=An){function i(a){a!==void 0&&parseFloat(a)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let i=Wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return gt.workingToColorSpace(hn.copy(this),e),Math.round(mt(hn.r*255,0,255))*65536+Math.round(mt(hn.g*255,0,255))*256+Math.round(mt(hn.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(hn.copy(this),t);let i=hn.r,r=hn.g,a=hn.b,o=Math.max(i,r,a),s=Math.min(i,r,a),l,c,d=(s+o)/2;if(s===o)l=0,c=0;else{let h=o-s;switch(c=d<=.5?h/(o+s):h/(2-o-s),o){case i:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-i)/h+2;break;case a:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=An){gt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,r=hn.b;return e!==An?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Ho);let i=Hc(Ri.h,Ho.h,t),r=Hc(Ri.s,Ho.s,t),a=Hc(Ri.l,Ho.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ut;ut.NAMES=Wp;var Da=class extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new W,mi=new W,Jc=new W,gi=new W,Ur=new W,Br=new W,Jh=new W,Zc=new W,Kc=new W,Qc=new W,ed=new Lt,td=new Lt,nd=new Lt,Li=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Vn.subVectors(r,t),mi.subVectors(i,t),Jc.subVectors(e,t);let o=Vn.dot(Vn),s=Vn.dot(mi),l=Vn.dot(Jc),c=mi.dot(mi),d=mi.dot(Jc),h=o*c-s*s;if(h===0)return a.set(0,0,0),null;let u=1/h,f=(c*l-s*d)*u,_=(o*d-s*l)*u;return a.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(s,gi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ed,a.x),o.addScaledVector(td,a.y),o.addScaledVector(nd,a.z),o}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),mi.subVectors(e,t),Vn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,a=this.c,o,s;Ur.subVectors(r,i),Br.subVectors(a,i),Zc.subVectors(e,i);let l=Ur.dot(Zc),c=Br.dot(Zc);if(l<=0&&c<=0)return t.copy(i);Kc.subVectors(e,r);let d=Ur.dot(Kc),h=Br.dot(Kc);if(d>=0&&h<=d)return t.copy(r);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Ur,o);Qc.subVectors(e,a);let f=Ur.dot(Qc),_=Br.dot(Qc);if(_>=0&&f<=_)return t.copy(a);let M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(Br,s);let m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return Jh.subVectors(a,r),s=(h-d)/(h-d+(f-_)),t.copy(r).addScaledVector(Jh,s);let p=1/(m+M+u);return o=M*p,s=u*p,t.copy(i).addScaledVector(Ur,o).addScaledVector(Br,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(a,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}let r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Xo.subVectors(this.max,Sa),zr.subVectors(e.a,Sa),Vr.subVectors(e.b,Sa),Gr.subVectors(e.c,Sa),ki.subVectors(Vr,zr),Oi.subVectors(Gr,Vr),er.subVectors(zr,Gr);let t=[0,-ki.z,ki.y,0,-Oi.z,Oi.y,0,-er.z,er.y,ki.z,0,-ki.x,Oi.z,0,-Oi.x,er.z,0,-er.x,-ki.y,ki.x,0,-Oi.y,Oi.x,0,-er.y,er.x,0];return!id(t,zr,Vr,Gr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!id(t,zr,Vr,Gr,Xo))?!1:(qo.crossVectors(ki,Oi),t=[qo.x,qo.y,qo.z],id(t,zr,Vr,Gr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new W,new W,new W,new W,new W,new W,new W,new W],Gn=new W,Wo=new ii,zr=new W,Vr=new W,Gr=new W,ki=new W,Oi=new W,er=new W,Sa=new W,Xo=new W,qo=new W,tr=new W;function id(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){tr.fromArray(n,a);let s=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=t.dot(tr),d=i.dot(tr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}var Yt=new W,jo=new _t,i0=0,Pn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vd,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ca(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),a=yn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vd&&(e.usage=this.usage),e}};var Na=class extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var La=class extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var fn=class extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}},r0=new ii,Ta=new W,rd=new W,cr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):r0.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);let t=Ta.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(rd)),this.expandByPoint(Ta.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},a0=0,Nn=new Ot,ad=new Wn,Hr=new W,En=new ii,Ea=new ii,nn=new W,bn=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wg(e)?La:Na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new nt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let a=t[i];En.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){let s=t[a];Ea.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(En.min,Ea.min),En.expandByPoint(nn),nn.addVectors(En.max,Ea.max),En.expandByPoint(nn)):(En.expandByPoint(Ea.min),En.expandByPoint(Ea.max))}En.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)nn.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let a=0,o=t.length;a<o;a++){let s=t[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)nn.fromBufferAttribute(s,c),l&&(Hr.fromBufferAttribute(e,c),nn.add(Hr)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),s=[],l=[];for(let y=0;y<i.count;y++)s[y]=new W,l[y]=new W;let c=new W,d=new W,h=new W,u=new _t,f=new _t,_=new _t,M=new W,m=new W;function p(y,E,Q){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(a,y),f.fromBufferAttribute(a,E),_.fromBufferAttribute(a,Q),d.sub(c),h.sub(c),f.sub(u),_.sub(u);let k=1/(f.x*_.y-_.x*f.y);isFinite(k)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(k),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(k),s[y].add(M),s[E].add(M),s[Q].add(M),l[y].add(m),l[E].add(m),l[Q].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,E=S.length;y<E;++y){let Q=S[y],k=Q.start,F=Q.count;for(let X=k,Z=k+F;X<Z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let A=new W,T=new W,R=new W,I=new W;function O(y){R.fromBufferAttribute(r,y),I.copy(R);let E=s[y];A.copy(E),A.sub(R.multiplyScalar(R.dot(E))).normalize(),T.crossVectors(I,E);let k=T.dot(l[y])<0?-1:1;o.setXYZW(y,A.x,A.y,A.z,k)}for(let y=0,E=S.length;y<E;++y){let Q=S[y],k=Q.start,F=Q.count;for(let X=k,Z=k+F;X<Z;X+=3)O(e.getX(X+0)),O(e.getX(X+1)),O(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new W,a=new W,o=new W,s=new W,l=new W,c=new W,d=new W,h=new W;if(e)for(let u=0,f=e.count;u<f;u+=3){let _=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),s.add(d),l.add(d),c.add(d),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(s,l){let c=s.array,d=s.itemSize,h=s.normalized,u=new c.constructor(l.length*d),f=0,_=0;for(let M=0,m=l.length;M<m;M++){s.isInterleavedBufferAttribute?f=l[M]*s.data.stride+s.offset:f=l[M]*d;for(let p=0;p<d;p++)u[_++]=c[f++]}return new Pn(u,d,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let s in r){let l=r[s],c=e(l,i);t.setAttribute(s,c)}let a=this.morphAttributes;for(let s in a){let l=[],c=a[s];for(let d=0,h=c.length;d<h;d++){let u=c[d],f=e(u,i);l.push(f)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,l=o.length;s<l;s++){let c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let a=e.morphAttributes;for(let c in a){let d=[],h=a[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var o0=0,Mi=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=io(),this.name="",this.type="Material",this.blending=or,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ds,this.blendDst=us,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ds&&(i.blendSrc=this.blendSrc),this.blendDst!==us&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let o=[];for(let s in a){let l=a[s];delete l.metadata,o.push(l)}return o}if(t){let a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xi=new W,od=new W,$o=new W,Di=new W,sd=new W,Yo=new W,ld=new W,Kr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){od.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(od);let a=e.distanceTo(t)*.5,o=-this.direction.dot($o),s=Di.dot(this.direction),l=-Di.dot($o),c=Di.lengthSq(),d=Math.abs(1-o*o),h,u,f,_;if(d>0)if(h=o*l-s,u=o*s-l,_=a*d,h>=0)if(u>=-_)if(u<=_){let M=1/d;h*=M,u*=M,f=h*(h+o*u+2*s)+u*(o*h+u+2*l)+c}else u=a,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*l)+c;else u=-a,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-o*a+s)),u=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(h=Math.max(0,-(o*a+s)),u=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+u*(u+2*l)+c);else u=o>0?-a:a,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(od).addScaledVector($o,u),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),r=xi.dot(xi)-i*i,a=e.radius*e.radius;if(r>a)return null;let o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,a){sd.subVectors(t,e),Yo.subVectors(i,e),ld.crossVectors(sd,Yo);let o=this.direction.dot(ld),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=s*this.direction.dot(Yo.crossVectors(Di,Yo));if(l<0)return null;let c=s*this.direction.dot(sd.cross(Di));if(c<0||l+c>o)return null;let d=-s*Di.dot(ld);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fa=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zh=new Ot,nr=new Kr,Jo=new cr,Kh=new W,Zo=new W,Ko=new W,Qo=new W,cd=new W,es=new W,Qh=new W,ts=new W,Mn=class extends Wn{constructor(e=new bn,t=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){let s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){es.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let d=s[l],h=a[l];d!==0&&(cd.fromBufferAttribute(h,e),o?es.addScaledVector(cd,d):es.addScaledVector(cd.sub(t),d))}t.add(es)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(a),nr.copy(e.ray).recast(e.near),!(Jo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Jo,Kh)===null||nr.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Zh.copy(a).invert(),nr.copy(e.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,nr)))}_computeIntersections(e,t,i){let r,a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let m=u[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,R=A;T<R;T+=3){let I=s.getX(T),O=s.getX(T+1),y=s.getX(T+2);r=ns(this,p,e,i,c,d,h,I,O,y),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,f.start),M=Math.min(s.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){let S=s.getX(m),A=s.getX(m+1),T=s.getX(m+2);r=ns(this,o,e,i,c,d,h,S,A,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=u.length;_<M;_++){let m=u[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,R=A;T<R;T+=3){let I=T,O=T+1,y=T+2;r=ns(this,p,e,i,c,d,h,I,O,y),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){let S=m,A=m+1,T=m+2;r=ns(this,o,e,i,c,d,h,S,A,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function s0(n,e,t,i,r,a,o,s){let l;if(e.side===_n?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===yi,s),l===null)return null;ts.copy(s),ts.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,Zo),n.getVertexPosition(l,Ko),n.getVertexPosition(c,Qo);let d=s0(n,e,t,i,Zo,Ko,Qo,Qh);if(d){let h=new W;Li.getBarycoord(Qh,Zo,Ko,Qo,h),r&&(d.uv=Li.getInterpolatedAttribute(r,s,l,c,h,new _t)),a&&(d.uv1=Li.getInterpolatedAttribute(a,s,l,c,h,new _t)),o&&(d.normal=Li.getInterpolatedAttribute(o,s,l,c,h,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:s,b:l,c,normal:new W,materialIndex:0};Li.getNormal(Zo,Ko,Qo,u.normal),d.face=u,d.barycoord=h}return d}var Ts=class extends wi{constructor(e=null,t=1,i=1,r,a,o,s,l,c=rn,d=rn,h,u){super(null,o,s,l,c,d,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dd=new W,l0=new W,c0=new nt,Ln=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=dd.subVectors(i,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(dd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||c0.getNormalMatrix(e),r=this.coplanarPoint(dd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ir=new cr,d0=new _t(.5,.5),is=new W,Qr=class{constructor(e=new Ln,t=new Ln,i=new Ln,r=new Ln,a=new Ln,o=new Ln){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){let r=this.planes,a=e.elements,o=a[0],s=a[1],l=a[2],c=a[3],d=a[4],h=a[5],u=a[6],f=a[7],_=a[8],M=a[9],m=a[10],p=a[11],S=a[12],A=a[13],T=a[14],R=a[15];if(r[0].setComponents(c-o,f-d,p-_,R-S).normalize(),r[1].setComponents(c+o,f+d,p+_,R+S).normalize(),r[2].setComponents(c+s,f+h,p+M,R+A).normalize(),r[3].setComponents(c-s,f-h,p-M,R-A).normalize(),i)r[4].setComponents(l,u,m,T).normalize(),r[5].setComponents(c-l,f-u,p-m,R-T).normalize();else if(r[4].setComponents(c-l,f-u,p-m,R-T).normalize(),t===Hn)r[5].setComponents(c+l,f+u,p+m,R+T).normalize();else if(t===jr)r[5].setComponents(l,u,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);let t=d0.distanceTo(e.center);return ir.radius=.7071067811865476+t,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ea=class extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Es=new W,As=new W,ep=new Ot,Aa=new Kr,rs=new cr,ud=new W,tp=new W,Ua=class extends Wn{constructor(e=new bn,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Es.fromBufferAttribute(t,r-1),As.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Es.distanceTo(As);e.setAttribute("lineDistance",new fn(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(r),rs.radius+=a,e.ray.intersectsSphere(rs)===!1)return;ep.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(ep);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){let f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let M=f,m=_-1;M<m;M+=c){let p=d.getX(M),S=d.getX(M+1),A=as(this,e,Aa,l,p,S,M);A&&t.push(A)}if(this.isLineLoop){let M=d.getX(_-1),m=d.getX(f),p=as(this,e,Aa,l,M,m,_-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=f,m=_-1;M<m;M+=c){let p=as(this,e,Aa,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){let M=as(this,e,Aa,l,_-1,f,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){let s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}};function as(n,e,t,i,r,a,o){let s=n.geometry.attributes.position;if(Es.fromBufferAttribute(s,r),As.fromBufferAttribute(s,a),t.distanceSqToSegment(Es,As,ud,tp)>i)return;ud.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ud);if(!(c<e.near||c>e.far))return{distance:c,point:tp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ba=class extends wi{constructor(e=[],t=Hi,i,r,a,o,s,l,c,d){super(e,t,i,r,a,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Bi=class extends wi{constructor(e,t,i=qn,r,a,o,s=rn,l=rn,c,d=ti,h=1){if(d!==ti&&d!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,r,a,o,s,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ps=class extends Bi{constructor(e,t=qn,i=Hi,r,a,o=rn,s=rn,l,c=ti){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,r,a,o,s,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},za=class extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ta=class n extends bn{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};let s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);let l=[],c=[],d=[],h=[],u=0,f=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(d,3)),this.setAttribute("uv",new fn(h,2));function _(M,m,p,S,A,T,R,I,O,y,E){let Q=T/O,k=R/y,F=T/2,X=R/2,Z=I/2,j=O+1,Y=y+1,G=0,de=0,oe=new W;for(let ve=0;ve<Y;ve++){let Pe=ve*k-X;for(let Te=0;Te<j;Te++){let ot=Te*Q-F;oe[M]=ot*S,oe[m]=Pe*A,oe[p]=Z,c.push(oe.x,oe.y,oe.z),oe[M]=0,oe[m]=0,oe[p]=I>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(Te/O),h.push(1-ve/y),G+=1}}for(let ve=0;ve<y;ve++)for(let Pe=0;Pe<O;Pe++){let Te=u+Pe+j*ve,ot=u+Pe+j*(ve+1),kt=u+(Pe+1)+j*(ve+1),Rt=u+(Pe+1)+j*ve;l.push(Te,ot,Rt),l.push(ot,kt,Rt),de+=6}s.addGroup(f,de,E),f+=de,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Va=class n extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,d=l+1,h=e/s,u=t/l,f=[],_=[],M=[],m=[];for(let p=0;p<d;p++){let S=p*u-o;for(let A=0;A<c;A++){let T=A*h-a;_.push(T,-S,0),M.push(0,0,1),m.push(A/s),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<s;S++){let A=S+c*p,T=S+c*(p+1),R=S+1+c*(p+1),I=S+1+c*p;f.push(A,T,I),f.push(T,R,I)}this.setIndex(f),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(M,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ga=class n extends bn{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+s,Math.PI),c=0,d=[],h=new W,u=new W,f=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){let S=[],A=p/i,T=0;p===0&&o===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){let I=R/t;h.x=-e*Math.cos(r+I*a)*Math.sin(o+A*s),h.y=e*Math.cos(o+A*s),h.z=e*Math.sin(r+I*a)*Math.sin(o+A*s),_.push(h.x,h.y,h.z),u.copy(h).normalize(),M.push(u.x,u.y,u.z),m.push(I+T,1-A),S.push(c++)}d.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let A=d[p][S+1],T=d[p][S],R=d[p+1][S],I=d[p+1][S+1];(p!==0||o>0)&&f.push(A,T,I),(p!==i-1||l<Math.PI)&&f.push(T,R,I)}this.setIndex(f),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(M,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function hr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=hr(n[t]);for(let r in i)e[r]=i[r]}return e}function u0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Xp={clone:hr,merge:mn},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=u0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Is=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ha=class extends Mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Hs,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Rs=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ks=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function os(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var zi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,a=t[--i-1],e>=a)break t}o=i,i=0;break n}break e}for(;i<o;){let s=i+o>>>1;e<t[s]?o=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let o=0;o!==r;++o)t[o]=i[a+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Os=class extends zi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:md,endingEnd:md}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,o=e+1,s=r[a],l=r[o];if(s===void 0)switch(this.getSettings_().endingStart){case gd:a=e,s=2*t-i;break;case _d:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gd:o=e,l=2*i-t;break;case _d:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-s),this._weightNext=c/(l-i),this._offsetPrev=a*d,this._offsetNext=o*d}interpolate_(e,t,i,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(i-t)/(r-t),M=_*_,m=M*_,p=-u*m+2*u*M-u*_,S=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,A=(-1-f)*m+(1.5+f)*M+.5*_,T=f*m-f*M;for(let R=0;R!==s;++R)a[R]=p*o[d+R]+S*o[c+R]+A*o[l+R]+T*o[h+R];return a}},Ds=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,d=(i-t)/(r-t),h=1-d;for(let u=0;u!==s;++u)a[u]=o[c+u]*h+o[l+u]*d;return a}},Ns=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ls=class extends zi{interpolate_(e,t,i,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,d=this.settings||this.DefaultSettings_,h=d.inTangents,u=d.outTangents;if(!h||!u){let M=(i-t)/(r-t),m=1-M;for(let p=0;p!==s;++p)a[p]=o[c+p]*m+o[l+p]*M;return a}let f=s*2,_=e-1;for(let M=0;M!==s;++M){let m=o[c+M],p=o[l+M],S=_*f+M*2,A=u[S],T=u[S+1],R=e*f+M*2,I=h[R],O=h[R+1],y=(i-t)/(r-t),E,Q,k,F,X;for(let Z=0;Z<8;Z++){E=y*y,Q=E*y,k=1-y,F=k*k,X=F*k;let Y=X*t+3*F*y*A+3*k*E*I+Q*r-i;if(Math.abs(Y)<1e-10)break;let G=3*F*(A-t)+6*k*y*(I-A)+3*E*(r-I);if(Math.abs(G)<1e-10)break;y=y-Y/G,y=Math.max(0,Math.min(1,y))}a[M]=X*m+3*F*y*T+3*k*E*O+Q*p}return a}},kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=os(t,this.TimeBufferType),this.values=os(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:os(e.times,Array),values:os(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ns(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ds(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Os(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ls(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Pa:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case cs:t=this.InterpolantFactoryMethodSmooth;break;case fd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return cs;case this.InterpolantFactoryMethodBezier:return fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,o=r-1;for(;a!==r&&i[a]<e;)++a;for(;o!==-1&&i[o]>t;)--o;if(++o,a!==0||o!==r){a>=o&&(o=Math.max(o,1),a=o-1);let s=this.getValueSize();this.times=i.slice(a,o),this.values=this.values.slice(a*s,o*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==a;s++){let l=i[s];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,s,l,o),e=!1;break}o=l}if(r!==void 0&&Xg(r))for(let s=0,l=r.length;s!==l;++s){let c=r[s];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,s,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===cs,a=e.length-1,o=1;for(let s=1;s<a;++s){let l=!1,c=e[s],d=e[s+1];if(c!==d&&(s!==1||c!==e[0]))if(r)l=!0;else{let h=s*i,u=h-i,f=h+i;for(let _=0;_!==i;++_){let M=t[h+_];if(M!==t[u+_]||M!==t[f+_]){l=!0;break}}}if(l){if(s!==o){e[o]=e[s];let h=s*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++o}}if(a>0){e[o]=e[a];for(let s=a*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[s+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=bs;var Vi=class extends kn{constructor(e,t,i){super(e,t,i)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Pa;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}};Fs.prototype.ValueTypeName="color";var Us=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}};Us.prototype.ValueTypeName="number";var Bs=class extends zi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=(i-t)/(r-t),c=e*s;for(let d=c+s;c!==d;c+=4)ni.slerpFlat(a,0,o,c-s,o,c,l);return a}},Wa=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Bs(this.times,this.values,this.getValueSize(),e)}};Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends kn{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Pa;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends kn{constructor(e,t,i,r){super(e,t,i,r)}};zs.prototype.ValueTypeName="vector";var Xa=class extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var hd=new Ot,np=new W,ip=new W,yd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ss=new W,ls=new ni,Qn=new W,qa=class extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ss,ls,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,ls,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ss,ls,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,ls,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new W,rp=new _t,ap=new _t,pn=class extends qa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,rp,ap),t.subVectors(ap,rp)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var na=class extends qa{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bd=class extends yd{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ja=class extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new bd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},$a=class extends Xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wr=-90,Xr=1,Vs=class extends Wn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new pn(Wr,Xr,e,t);r.layers=this.layers,this.add(r);let a=new pn(Wr,Xr,e,t);a.layers=this.layers,this.add(a);let o=new pn(Wr,Xr,e,t);o.layers=this.layers,this.add(o);let s=new pn(Wr,Xr,e,t);s.layers=this.layers,this.add(s);let l=new pn(Wr,Xr,e,t);l.layers=this.layers,this.add(l);let c=new pn(Wr,Xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(let c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,o,s,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Gs=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var qd="\\[\\]\\.:\\/",f0=new RegExp("["+qd+"]","g"),jd="[^"+qd+"]",m0="[^"+qd.replace("\\.","")+"]",g0=/((?:WC+[\/:])*)/.source.replace("WC",jd),_0=/(WCOD+)?/.source.replace("WCOD",m0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jd),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jd),y0=new RegExp("^"+g0+_0+x0+v0+"$"),b0=["material","materials","bones","map"],Md=class{constructor(e,t,i){let r=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(t){let i=y0.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let o=r.nodeName.substring(a+1);b0.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let s=0;s<o.length;s++){let l=o[s];if(l.name===i||l.uuid===i)return l;let c=r(l.children);if(c)return c}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,o=r.length;a!==o;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let d=i.objectIndex;switch(r){case"materials":if(!t.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===d){d=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(d!==void 0){if(t[d]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let s=t[a];if(s===void 0){let d=i.nodeName;We("PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Md,n})();Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _T=new Float32Array(1);var op=new Ot,Ya=class{constructor(e,t,i=0,r=1/0){this.ray=new Kr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(op),this}intersectObject(e,t=!0,i=[]){return Cd(e,this,i,t),i.sort(sp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Cd(e[r],this,i,t);return i.sort(sp),i}};function sp(n,e){return n.distance-e.distance}function Cd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let a=n.children;for(let o=0,s=a.length;o<s;o++)Cd(a[o],e,t,!0)}}function $d(n,e,t,i){let r=M0(i);switch(t){case Bd:return n*e;case Vd:return n*e/r.components*r.byteLength;case Js:return n*e/r.components*r.byteLength;case ur:return n*e*2/r.components*r.byteLength;case Zs:return n*e*2/r.components*r.byteLength;case zd:return n*e*3/r.components*r.byteLength;case Fn:return n*e*4/r.components*r.byteLength;case Ks:return n*e*4/r.components*r.byteLength;case Qa:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(n,16)*Math.max(e,8)/4;case Qs:case tl:return Math.max(n,8)*Math.max(e,8)/2;case il:case rl:case ol:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wl:case Sl:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case El:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(n){switch(n){case Cn:case Nd:return{byteLength:1,components:1};case ra:case Ld:case oi:return{byteLength:2,components:1};case $s:case Ys:return{byteLength:2,components:4};case qn:case js:case jn:return{byteLength:4,components:1};case Fd:case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function mf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function w0(n){let e=new WeakMap;function t(s,l){let c=s.array,d=s.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),s.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:h}}function i(s,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,s),h.length===0)n.bufferSubData(c,0,d);else{h.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<h.length;f++){let _=h[u],M=h[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,h[u]=M)}h.length=u+1;for(let f=0,_=h.length;f<_;f++){let M=h[f];n.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);let l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:r,remove:a,update:o}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
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
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
#endif`,__=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,C_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
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
#endif`,$_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Gx=`#define MATCAP
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
}`,Hx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
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
}`,jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,$x=`#define STANDARD
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
}`,Yx=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Jx=`#define TOON
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
}`,Zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Kx=`uniform float size;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:S0,alphahash_pars_fragment:T0,alphamap_fragment:E0,alphamap_pars_fragment:A0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:R0,aomap_pars_fragment:k0,batching_pars_vertex:O0,batching_vertex:D0,begin_vertex:N0,beginnormal_vertex:L0,bsdfs:F0,iridescence_fragment:U0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:H0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:j0,common:$0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:J0,displacementmap_pars_vertex:Z0,displacementmap_vertex:K0,emissivemap_fragment:Q0,emissivemap_pars_fragment:e_,colorspace_fragment:t_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:r_,envmap_pars_fragment:a_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:__,envmap_vertex:s_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:d_,fog_pars_fragment:u_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:p_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:v_,lights_phong_fragment:y_,lights_phong_pars_fragment:b_,lights_physical_fragment:M_,lights_physical_pars_fragment:C_,lights_fragment_begin:w_,lights_fragment_maps:S_,lights_fragment_end:T_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:A_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:I_,map_fragment:R_,map_pars_fragment:k_,map_particle_fragment:O_,map_particle_pars_fragment:D_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:L_,morphinstance_vertex:F_,morphcolor_vertex:U_,morphnormal_vertex:B_,morphtarget_pars_vertex:z_,morphtarget_vertex:V_,normal_fragment_begin:G_,normal_fragment_maps:H_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:$_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:Z_,opaque_fragment:K_,packing:Q_,premultiplied_alpha_fragment:ex,project_vertex:tx,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:sx,shadowmap_vertex:lx,shadowmask_pars_fragment:cx,skinbase_vertex:dx,skinning_pars_vertex:ux,skinning_vertex:hx,skinnormal_vertex:px,specularmap_fragment:fx,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:_x,transmission_fragment:xx,transmission_pars_fragment:vx,uv_pars_fragment:yx,uv_pars_vertex:bx,uv_vertex:Mx,worldpos_vertex:Cx,background_vert:wx,background_frag:Sx,backgroundCube_vert:Tx,backgroundCube_frag:Ex,cube_vert:Ax,cube_frag:Px,depth_vert:Ix,depth_frag:Rx,distance_vert:kx,distance_frag:Ox,equirect_vert:Dx,equirect_frag:Nx,linedashed_vert:Lx,linedashed_frag:Fx,meshbasic_vert:Ux,meshbasic_frag:Bx,meshlambert_vert:zx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Hx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:jx,meshphysical_vert:$x,meshphysical_frag:Yx,meshtoon_vert:Jx,meshtoon_frag:Zx,points_vert:Kx,points_frag:Qx,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},li={basic:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:mn([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:mn([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:mn([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:mn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:mn([be.lights,be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};li.physical={uniforms:mn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Ol={r:0,b:0,g:0},pr=new Ui,rv=new Ot;function av(n,e,t,i,r,a){let o=new ut(0),s=r===!0?0:1,l,c,d=null,h=0,u=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let T=S.backgroundBlurriness>0;A=e.get(A,T)}return A}function _(S){let A=!1,T=f(S);T===null?m(o,s):T&&T.isColor&&(m(T,1),A=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,A){let T=f(A);T&&(T.isCubeTexture||T.mapping===Za)?(c===void 0&&(c=new Mn(new ta(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:hr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),pr.copy(A.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rv.makeRotationFromEuler(pr)),c.material.toneMapped=gt.getTransfer(T.colorSpace)!==bt,(d!==T||h!==T.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Mn(new Va(2,2),new Rn({name:"BackgroundMaterial",uniforms:hr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=gt.getTransfer(T.colorSpace)!==bt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,h=T.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Ol,Xd(n)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,A,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),s=A,m(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(S){s=S,m(o,s)},render:_,addToRenderList:M,dispose:p}}function ov(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),a=r,o=!1;function s(k,F,X,Z,j){let Y=!1,G=h(k,Z,X,F);a!==G&&(a=G,c(a.object)),Y=f(k,Z,X,j),Y&&_(k,Z,X,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,T(k,F,X,Z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function d(k){return n.deleteVertexArray(k)}function h(k,F,X,Z){let j=Z.wireframe===!0,Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);let G=k.isInstancedMesh===!0?k.id:0,de=Y[G];de===void 0&&(de={},Y[G]=de);let oe=de[X.id];oe===void 0&&(oe={},de[X.id]=oe);let ve=oe[j];return ve===void 0&&(ve=u(l()),oe[j]=ve),ve}function u(k){let F=[],X=[],Z=[];for(let j=0;j<t;j++)F[j]=0,X[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:Z,object:k,attributes:{},index:null}}function f(k,F,X,Z){let j=a.attributes,Y=F.attributes,G=0,de=X.getAttributes();for(let oe in de)if(de[oe].location>=0){let Pe=j[oe],Te=Y[oe];if(Te===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Pe===void 0||Pe.attribute!==Te||Te&&Pe.data!==Te.data)return!0;G++}return a.attributesNum!==G||a.index!==Z}function _(k,F,X,Z){let j={},Y=F.attributes,G=0,de=X.getAttributes();for(let oe in de)if(de[oe].location>=0){let Pe=Y[oe];Pe===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(Pe=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(Pe=k.instanceColor));let Te={};Te.attribute=Pe,Pe&&Pe.data&&(Te.data=Pe.data),j[oe]=Te,G++}a.attributes=j,a.attributesNum=G,a.index=Z}function M(){let k=a.newAttributes;for(let F=0,X=k.length;F<X;F++)k[F]=0}function m(k){p(k,0)}function p(k,F){let X=a.newAttributes,Z=a.enabledAttributes,j=a.attributeDivisors;X[k]=1,Z[k]===0&&(n.enableVertexAttribArray(k),Z[k]=1),j[k]!==F&&(n.vertexAttribDivisor(k,F),j[k]=F)}function S(){let k=a.newAttributes,F=a.enabledAttributes;for(let X=0,Z=F.length;X<Z;X++)F[X]!==k[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function A(k,F,X,Z,j,Y,G){G===!0?n.vertexAttribIPointer(k,F,X,j,Y):n.vertexAttribPointer(k,F,X,Z,j,Y)}function T(k,F,X,Z){M();let j=Z.attributes,Y=X.getAttributes(),G=F.defaultAttributeValues;for(let de in Y){let oe=Y[de];if(oe.location>=0){let ve=j[de];if(ve===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(ve=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(ve=k.instanceColor)),ve!==void 0){let Pe=ve.normalized,Te=ve.itemSize,ot=e.get(ve);if(ot===void 0)continue;let kt=ot.buffer,Rt=ot.type,ie=ot.bytesPerElement,me=Rt===n.INT||Rt===n.UNSIGNED_INT||ve.gpuType===js;if(ve.isInterleavedBufferAttribute){let xe=ve.data,it=xe.stride,He=ve.offset;if(xe.isInstancedInterleavedBuffer){for(let Je=0;Je<oe.locationSize;Je++)p(oe.location+Je,xe.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Je=0;Je<oe.locationSize;Je++)m(oe.location+Je);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let Je=0;Je<oe.locationSize;Je++)A(oe.location+Je,Te/oe.locationSize,Rt,Pe,it*ie,(He+Te/oe.locationSize*Je)*ie,me)}else{if(ve.isInstancedBufferAttribute){for(let xe=0;xe<oe.locationSize;xe++)p(oe.location+xe,ve.meshPerAttribute);k.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let xe=0;xe<oe.locationSize;xe++)m(oe.location+xe);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let xe=0;xe<oe.locationSize;xe++)A(oe.location+xe,Te/oe.locationSize,Rt,Pe,Te*ie,Te/oe.locationSize*xe*ie,me)}}else if(G!==void 0){let Pe=G[de];if(Pe!==void 0)switch(Pe.length){case 2:n.vertexAttrib2fv(oe.location,Pe);break;case 3:n.vertexAttrib3fv(oe.location,Pe);break;case 4:n.vertexAttrib4fv(oe.location,Pe);break;default:n.vertexAttrib1fv(oe.location,Pe)}}}}S()}function R(){E();for(let k in i){let F=i[k];for(let X in F){let Z=F[X];for(let j in Z){let Y=Z[j];for(let G in Y)d(Y[G].object),delete Y[G];delete Z[j]}}delete i[k]}}function I(k){if(i[k.id]===void 0)return;let F=i[k.id];for(let X in F){let Z=F[X];for(let j in Z){let Y=Z[j];for(let G in Y)d(Y[G].object),delete Y[G];delete Z[j]}}delete i[k.id]}function O(k){for(let F in i){let X=i[F];for(let Z in X){let j=X[Z];if(j[k.id]===void 0)continue;let Y=j[k.id];for(let G in Y)d(Y[G].object),delete Y[G];delete j[k.id]}}}function y(k){for(let F in i){let X=i[F],Z=k.isInstancedMesh===!0?k.id:0,j=X[Z];if(j!==void 0){for(let Y in j){let G=j[Y];for(let de in G)d(G[de].object),delete G[de];delete j[Y]}delete X[Z],Object.keys(X).length===0&&delete i[F]}}}function E(){Q(),o=!0,a!==r&&(a=r,c(a.object))}function Q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:E,resetDefaultState:Q,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfObject:y,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function sv(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,h){h!==0&&(n.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function s(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=d[_];t.update(f,i,1)}function l(c,d,h,u){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],d[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let _=0;for(let M=0;M<h;M++)_+=d[M]*u[M];t.update(_,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function lv(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(O){return!(O!==Fn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(O){let y=O===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Cn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==jn&&!y)}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&($e("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:T,maxSamples:R,samples:I}}function cv(n){let e=this,t=null,i=0,r=!1,a=!1,o=new Ln,s=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||i!==0||r;return r=u,i=h.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){let _=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||a&&!m)a?d(null):c();else{let S=a?0:i,A=S*4,T=p.clippingState||null;l.value=T,T=d(_,u,A,f);for(let R=0;R!==A;++R)T[R]=t[R];p.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,f,_){let M=h!==null?h.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let p=f+M*4,S=u.matrixWorldInverse;s.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,T=f;A!==M;++A,T+=4)o.copy(h[A]).applyMatrix4(S,s),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var qi=4,qp=[.125,.215,.35,.446,.526,.582],mr=20,dv=256,ro=new na,jp=new ut,Yd=null,Jd=0,Zd=0,Kd=!1,uv=new W,Nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:o=256,position:s=uv}=a;Yd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,s),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Jd,Zd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:oi,format:Fn,colorSpace:lr,depthBuffer:!1},r=$p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$p(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hv(a)),this._blurMaterial=fv(a,e,t),this._ggxMaterial=pv(a,e,t)}return r}_compileMaterial(e){let t=new Mn(new bn,e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,i,r,a){let l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(jp),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new ta,new Fa({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(jp),p=!0);for(let A=0;A<6;A++){let T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[A],a.y,a.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[A],a.z)):(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[A]));let R=this._cubeSize;oa(r,T*R,A>2?R:0,R,R),h.setRenderTarget(r),p&&h.render(M,l),h.render(e,l)}h.toneMapping=f,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Hi||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;let s=a.uniforms;s.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ro)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[i];s.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,f=h*u,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-qi?i-_+qi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,oa(a,m,p,3*M,2*M),r.setRenderTarget(a),r.render(s,ro),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,oa(e,m,p,3*M,2*M),r.setRenderTarget(e),r.render(s,ro)}_blur(e,t,i,r,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let d=3,h=this._lodMeshes[r];h.material=c;let u=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*mr-1),M=a/_,m=isFinite(a)?1+Math.floor(d*M):mr;m>mr&&$e(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);let p=[],S=0;for(let O=0;O<mr;++O){let y=O/M,E=Math.exp(-y*y/2);p.push(E),O===0?S+=E:O<m&&(S+=2*E)}for(let O=0;O<p.length;O++)p[O]=p[O]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);let{_lodMax:A}=this;u.dTheta.value=_,u.mipInt.value=A-i;let T=this._sizeLods[r],R=3*T*(r>A-qi?r-A+qi:0),I=4*(this._cubeSize-T);oa(t,R,I,3*T,2*T),l.setRenderTarget(t),l.render(h,ro)}};function hv(n){let e=[],t=[],i=[],r=n,a=n-qi+1+qp.length;for(let o=0;o<a;o++){let s=Math.pow(2,r);e.push(s);let l=1/s;o>n-qi?l=qp[o-n+qi-1]:o===0&&(l=0),t.push(l);let c=1/(s-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,_=6,M=3,m=2,p=1,S=new Float32Array(M*_*f),A=new Float32Array(m*_*f),T=new Float32Array(p*_*f);for(let I=0;I<f;I++){let O=I%3*2/3-1,y=I>2?0:-1,E=[O,y,0,O+2/3,y,0,O+2/3,y+1,0,O,y,0,O+2/3,y+1,0,O,y+1,0];S.set(E,M*_*I),A.set(u,m*_*I);let Q=[I,I,I,I,I,I];T.set(Q,p*_*I)}let R=new bn;R.setAttribute("position",new Pn(S,M)),R.setAttribute("uv",new Pn(A,m)),R.setAttribute("faceIndex",new Pn(T,p)),i.push(new Mn(R,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function $p(n,e,t){let i=new In(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pv(n,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fv(n,e,t){let i=new Float32Array(mr),r=new W(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Yp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Jp(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}var Ll=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ba(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ta(5,5,5),a=new Rn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ai});a.uniforms.tEquirect.value=t;let o=new Mn(r,a),s=t.minFilter;return t.minFilter===Wi&&(t.minFilter=on),new Vs(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}};function mv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,f=!1){return u==null?null:f?o(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ws||f===Xs)if(e.has(u)){let _=e.get(u).texture;return s(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Ll(_.height);return M.fromEquirectangularTexture(n,u),e.set(u,M),u.addEventListener("dispose",c),s(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,_=f===Ws||f===Xs,M=f===Hi||f===dr;if(_||M){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Nl(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return _&&S&&S.height>0||M&&S&&l(S)?(i===null&&(i=new Nl(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function s(u,f){return f===Ws?u.mapping=Hi:f===Xs&&(u.mapping=dr),u}function l(u){let f=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function gv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ka("WebGLRenderer: "+i+" extension not supported."),r}}}function _v(n,e,t,i){let r={},a=new WeakMap;function o(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];let f=a.get(u);f&&(e.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(h){let u=[],f=h.index,_=h.attributes.position,M=0;if(_===void 0)return;if(f!==null){let S=f.array;M=f.version;for(let A=0,T=S.length;A<T;A+=3){let R=S[A+0],I=S[A+1],O=S[A+2];u.push(R,I,I,O,O,R)}}else{let S=_.array;M=_.version;for(let A=0,T=S.length/3-1;A<T;A+=3){let R=A+0,I=A+1,O=A+2;u.push(R,I,I,O,O,R)}}let m=new(_.count>=65535?La:Na)(u,1);m.version=M;let p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){let u=a.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:d}}function xv(n,e,t){let i;function r(u){i=u}let a,o;function s(u){a=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,a,u*o),t.update(f,i,1)}function c(u,f,_){_!==0&&(n.drawElementsInstanced(i,f,a,u*o,_),t.update(f,i,_))}function d(u,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,u,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function h(u,f,_,M){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,a,u,0,M,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*M[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function vv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yv(n,e,t){let i=new WeakMap,r=new Lt;function a(o,s,l){let c=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=d!==void 0?d.length:0,u=i.get(s);if(u===void 0||u.count!==h){let Q=function(){y.dispose(),i.delete(s),s.removeEventListener("dispose",Q)};var f=Q;u!==void 0&&u.texture.dispose();let _=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],S=s.morphAttributes.normal||[],A=s.morphAttributes.color||[],T=0;_===!0&&(T=1),M===!0&&(T=2),m===!0&&(T=3);let R=s.attributes.position.count*T,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let O=new Float32Array(R*I*4*h),y=new Oa(O,R,I,h);y.type=jn,y.needsUpdate=!0;let E=T*4;for(let k=0;k<h;k++){let F=p[k],X=S[k],Z=A[k],j=R*I*4*k;for(let Y=0;Y<F.count;Y++){let G=Y*E;_===!0&&(r.fromBufferAttribute(F,Y),O[j+G+0]=r.x,O[j+G+1]=r.y,O[j+G+2]=r.z,O[j+G+3]=0),M===!0&&(r.fromBufferAttribute(X,Y),O[j+G+4]=r.x,O[j+G+5]=r.y,O[j+G+6]=r.z,O[j+G+7]=0),m===!0&&(r.fromBufferAttribute(Z,Y),O[j+G+8]=r.x,O[j+G+9]=r.y,O[j+G+10]=r.z,O[j+G+11]=Z.itemSize===4?r.w:1)}}u={count:h,texture:y,size:new _t(R,I)},i.set(s,u),s.addEventListener("dispose",Q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let M=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function bv(n,e,t,i,r){let a=new WeakMap;function o(c){let d=r.render.frame,h=c.geometry,u=e.get(c,h);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return u}function s(){a=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:s}}var Mv={[Ad]:"LINEAR_TONE_MAPPING",[Pd]:"REINHARD_TONE_MAPPING",[Id]:"CINEON_TONE_MAPPING",[Rd]:"ACES_FILMIC_TONE_MAPPING",[Od]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[kd]:"CUSTOM_TONE_MAPPING"};function Cv(n,e,t,i,r){let a=new In(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new In(e,t,{type:oi,depthBuffer:!1,stencilBuffer:!1}),s=new bn;s.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new fn([0,2,0,0,2,0],2));let l=new Is({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Mn(s,l),d=new na(-1,1,1,-1,0,1),h=null,u=null,f=!1,_,M=null,m=[],p=!1;this.setSize=function(S,A){a.setSize(S,A),o.setSize(S,A);for(let T=0;T<m.length;T++){let R=m[T];R.setSize&&R.setSize(S,A)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;let A=a.width,T=a.height;for(let R=0;R<m.length;R++){let I=m[R];I.setSize&&I.setSize(A,T)}},this.begin=function(S,A){if(f||S.toneMapping===Xn&&m.length===0)return!1;if(M=A,A!==null){let T=A.width,R=A.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return p===!1&&S.setRenderTarget(a),_=S.toneMapping,S.toneMapping=Xn,!0},this.hasRenderPass=function(){return p},this.end=function(S,A){S.toneMapping=_,f=!0;let T=a,R=o;for(let I=0;I<m.length;I++){let O=m[I];if(O.enabled!==!1&&(O.render(S,R,T,A),O.needsSwap!==!1)){let y=T;T=R,R=y}}if(h!==S.outputColorSpace||u!==S.toneMapping){h=S.outputColorSpace,u=S.toneMapping,l.defines={},gt.getTransfer(h)===bt&&(l.defines.SRGB_TRANSFER="");let I=Mv[u];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(M),S.render(c,d),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o.dispose(),s.dispose(),l.dispose()}}var gf=new wi,tu=new Bi(1,1),_f=new Oa,xf=new Ss,vf=new Ba,Zp=[],Kp=[],Qp=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function la(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,a=Zp[r];if(a===void 0&&(a=new Float32Array(r),Zp[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bl(n,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),Kt(t,i)}}function Pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),Kt(t,i)}}function Iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;Qp.set(i),n.uniformMatrix4fv(this.addr,!1,Qp),Kt(t,i)}}function Rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Nv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Bv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(tu.compareFunction=t.isReversedDepthBuffer()?kl:Rl,a=tu):a=gf,t.setTexture2D(e||a,r)}function zv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xf,r)}function Vv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vf,r)}function Gv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_f,r)}function Hv(n){switch(n){case 5126:return wv;case 35664:return Sv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Pv;case 35676:return Iv;case 5124:case 35670:return Rv;case 35667:case 35671:return kv;case 35668:case 35672:return Ov;case 35669:case 35673:return Dv;case 5125:return Nv;case 36294:return Lv;case 36295:return Fv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Wv(n,e){n.uniform1fv(this.addr,e)}function Xv(n,e){let t=la(e,this.size,2);n.uniform2fv(this.addr,t)}function qv(n,e){let t=la(e,this.size,3);n.uniform3fv(this.addr,t)}function jv(n,e){let t=la(e,this.size,4);n.uniform4fv(this.addr,t)}function $v(n,e){let t=la(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yv(n,e){let t=la(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jv(n,e){let t=la(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zv(n,e){n.uniform1iv(this.addr,e)}function Kv(n,e){n.uniform2iv(this.addr,e)}function Qv(n,e){n.uniform3iv(this.addr,e)}function ey(n,e){n.uniform4iv(this.addr,e)}function ty(n,e){n.uniform1uiv(this.addr,e)}function ny(n,e){n.uniform2uiv(this.addr,e)}function iy(n,e){n.uniform3uiv(this.addr,e)}function ry(n,e){n.uniform4uiv(this.addr,e)}function ay(n,e,t){let i=this.cache,r=e.length,a=Bl(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));let o;this.type===n.SAMPLER_2D_SHADOW?o=tu:o=gf;for(let s=0;s!==r;++s)t.setTexture2D(e[s]||o,a[s])}function oy(n,e,t){let i=this.cache,r=e.length,a=Bl(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xf,a[o])}function sy(n,e,t){let i=this.cache,r=e.length,a=Bl(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vf,a[o])}function ly(n,e,t){let i=this.cache,r=e.length,a=Bl(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_f,a[o])}function cy(n){switch(n){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return jv;case 35674:return $v;case 35675:return Yv;case 35676:return Jv;case 5124:case 35670:return Zv;case 35667:case 35671:return Kv;case 35668:case 35672:return Qv;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ly}}var nu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}},iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cy(t.type)}},ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,o=r.length;a!==o;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Qd=/(\w+)(\])?(\[|\.)?/g;function nf(n,e){n.seq.push(e),n.map[e.id]=e}function dy(n,e,t){let i=n.name,r=i.length;for(Qd.lastIndex=0;;){let a=Qd.exec(i),o=Qd.lastIndex,s=a[1],l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){nf(t,c===void 0?new nu(s,n,e):new iu(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new ru(s),nf(t,h)),t=h}}}var sa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let s=e.getActiveUniform(t,o),l=e.getUniformLocation(t,s.name);dy(s,l,this)}let r=[],a=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){let s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function rf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uy=37297,hy=0;function py(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){let s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}var af=new nt;function fy(n){gt._getMatrix(af,gt.workingColorSpace,n);let e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Ia:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function of(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+py(n.getShaderSource(e),s)}else return a}function my(n,e){let t=fy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gy={[Ad]:"Linear",[Pd]:"Reinhard",[Id]:"Cineon",[Rd]:"ACESFilmic",[Od]:"AgX",[Dd]:"Neutral",[kd]:"Custom"};function _y(n,e){let t=gy[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dl=new W;function xy(){gt.getLuminanceCoefficients(Dl);let n=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function yy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function by(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=n.getActiveAttrib(e,r),o=a.name,s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function oo(n){return n!==""}function sf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var My=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(My,wy)}var Cy=new Map;function wy(n,e){let t=st[e];if(t===void 0){let i=Cy.get(e);if(i!==void 0)t=st[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}var Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(Sy,Ty)}function Ty(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function df(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ey={[Ja]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function Ay(n){return Ey[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Py={[Hi]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function Iy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Py[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ry={[dr]:"ENVMAP_MODE_REFRACTION"};function ky(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Oy={[Hs]:"ENVMAP_BLENDING_MULTIPLY",[Pp]:"ENVMAP_BLENDING_MIX",[Ip]:"ENVMAP_BLENDING_ADD"};function Dy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Oy[n.combine]||"ENVMAP_BLENDING_NONE"}function Ny(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ly(n,e,t,i){let r=n.getContext(),a=t.defines,o=t.vertexShader,s=t.fragmentShader,l=Ay(t),c=Iy(t),d=ky(t),h=Dy(t),u=Ny(t),f=vy(t),_=yy(a),M=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(oo).join(`
`),p.length>0&&(p+=`
`)):(m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),p=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?st.tonemapping_pars_fragment:"",t.toneMapping!==Xn?_y("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),xy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=au(o),o=sf(o,t),o=lf(o,t),s=au(s),s=sf(s,t),s=lf(s,t),o=cf(o),s=cf(s),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+o,T=S+p+s,R=rf(r,r.VERTEX_SHADER,A),I=rf(r,r.FRAGMENT_SHADER,T);r.attachShader(M,R),r.attachShader(M,I),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function O(k){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(R)||"",Z=r.getShaderInfoLog(I)||"",j=F.trim(),Y=X.trim(),G=Z.trim(),de=!0,oe=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,R,I);else{let ve=of(r,R,"vertex"),Pe=of(r,I,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+j+`
`+ve+`
`+Pe)}else j!==""?$e("WebGLProgram: Program Info Log:",j):(Y===""||G==="")&&(oe=!1);oe&&(k.diagnostics={runnable:de,programLog:j,vertexShader:{log:Y,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(R),r.deleteShader(I),y=new sa(r,M),E=by(r,M)}let y;this.getUniforms=function(){return y===void 0&&O(this),y};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=r.getProgramParameter(M,uy)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=I,this}var Fy=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new su(e),t.set(e,i)),i}},su=class{constructor(e){this.id=Fy++,this.code=e,this.usedTimes=0}};function Uy(n,e,t,i,r,a){let o=new Jr,s=new ou,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,E,Q,k,F){let X=k.fog,Z=F.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||j,Y),de=G&&G.mapping===Za?G.image.height:null,oe=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&$e("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pe=ve!==void 0?ve.length:0,Te=0;Z.morphAttributes.position!==void 0&&(Te=1),Z.morphAttributes.normal!==void 0&&(Te=2),Z.morphAttributes.color!==void 0&&(Te=3);let ot,kt,Rt,ie;if(oe){let Ct=li[oe];ot=Ct.vertexShader,kt=Ct.fragmentShader}else ot=y.vertexShader,kt=y.fragmentShader,s.update(y),Rt=s.getVertexShaderID(y),ie=s.getFragmentShaderID(y);let me=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),it=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,Je=!!y.map,en=!!y.matcap,xt=!!G,Mt=!!y.aoMap,Et=!!y.lightMap,lt=!!y.bumpMap,Wt=!!y.normalMap,D=!!y.displacementMap,jt=!!y.emissiveMap,yt=!!y.metalnessMap,Pt=!!y.roughnessMap,Ne=y.anisotropy>0,P=y.clearcoat>0,x=y.dispersion>0,U=y.iridescence>0,ne=y.sheen>0,ae=y.transmission>0,ee=Ne&&!!y.anisotropyMap,Ie=P&&!!y.clearcoatMap,ge=P&&!!y.clearcoatNormalMap,Ve=P&&!!y.clearcoatRoughnessMap,Xe=U&&!!y.iridescenceMap,ue=U&&!!y.iridescenceThicknessMap,pe=ne&&!!y.sheenColorMap,Re=ne&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,Se=!!y.specularColorMap,ct=!!y.specularIntensityMap,N=ae&&!!y.transmissionMap,_e=ae&&!!y.thicknessMap,fe=!!y.gradientMap,Ae=!!y.alphaMap,he=y.alphaTest>0,K=!!y.alphaHash,ke=!!y.extensions,Ze=Xn;y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=n.toneMapping);let It={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:ot,fragmentShader:kt,defines:y.defines,customVertexShaderID:Rt,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:it,instancingColor:it&&F.instanceColor!==null,instancingMorph:it&&F.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:lr,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:en,envMap:xt,envMapMode:xt&&G.mapping,envMapCubeUVHeight:de,aoMap:Mt,lightMap:Et,bumpMap:lt,normalMap:Wt,displacementMap:D,emissiveMap:jt,normalMapObjectSpace:Wt&&y.normalMapType===Op,normalMapTangentSpace:Wt&&y.normalMapType===Gd,metalnessMap:yt,roughnessMap:Pt,anisotropy:Ne,anisotropyMap:ee,clearcoat:P,clearcoatMap:Ie,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ve,dispersion:x,iridescence:U,iridescenceMap:Xe,iridescenceThicknessMap:ue,sheen:ne,sheenColorMap:pe,sheenRoughnessMap:Re,specularMap:Oe,specularColorMap:Se,specularIntensityMap:ct,transmission:ae,transmissionMap:N,thicknessMap:_e,gradientMap:fe,opaque:y.transparent===!1&&y.blending===or&&y.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:K,combine:y.combine,mapUv:Je&&_(y.map.channel),aoMapUv:Mt&&_(y.aoMap.channel),lightMapUv:Et&&_(y.lightMap.channel),bumpMapUv:lt&&_(y.bumpMap.channel),normalMapUv:Wt&&_(y.normalMap.channel),displacementMapUv:D&&_(y.displacementMap.channel),emissiveMapUv:jt&&_(y.emissiveMap.channel),metalnessMapUv:yt&&_(y.metalnessMap.channel),roughnessMapUv:Pt&&_(y.roughnessMap.channel),anisotropyMapUv:ee&&_(y.anisotropyMap.channel),clearcoatMapUv:Ie&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(y.sheenRoughnessMap.channel),specularMapUv:Oe&&_(y.specularMap.channel),specularColorMapUv:Se&&_(y.specularColorMap.channel),specularIntensityMapUv:ct&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:_e&&_(y.thicknessMap.channel),alphaMapUv:Ae&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Wt||Ne),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Je||Ae),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||Z.attributes.normal===void 0&&Wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===bt,decodeVideoTextureEmissive:jt&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ri,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let Q in y.defines)E.push(Q),E.push(y.defines[Q]);return y.isRawShaderMaterial===!1&&(p(E,y),S(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function A(y){let E=f[y.type],Q;if(E){let k=li[E];Q=Xp.clone(k.uniforms)}else Q=y.uniforms;return Q}function T(y,E){let Q=d.get(E);return Q!==void 0?++Q.usedTimes:(Q=new Ly(n,E,y,r),c.push(Q),d.set(E,Q)),Q}function R(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function I(y){s.remove(y)}function O(){s.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:T,releaseProgram:R,releaseShaderCache:I,programs:c,dispose:O}}function By(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function i(o){n.delete(o)}function r(o,s,l){n.get(o)[s]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function zy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){let n=[],e=0,t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function s(u,f,_,M,m,p){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=_,S.materialVariant=o(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,f,_,M,m,p){let S=s(u,f,_,M,m,p);_.transmission>0?i.push(S):_.transparent===!0?r.push(S):t.push(S)}function c(u,f,_,M,m,p){let S=s(u,f,_,M,m,p);_.transmission>0?i.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function d(u,f){t.length>1&&t.sort(u||zy),i.length>1&&i.sort(f||uf),r.length>1&&r.sort(f||uf)}function h(){for(let u=e,f=n.length;u<f;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:h,sort:d}}function Vy(){let n=new WeakMap;function e(i,r){let a=n.get(i),o;return a===void 0?(o=new hf,n.set(i,[o])):r>=a.length?(o=new hf,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ut};break;case"SpotLight":t={position:new W,direction:new W,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Hy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Wy=0;function Xy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qy(n){let e=new Gy,t=Hy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let r=new W,a=new Ot,o=new Ot;function s(c){let d=0,h=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,S=0,A=0,T=0,R=0,I=0,O=0;c.sort(Xy);for(let E=0,Q=c.length;E<Q;E++){let k=c[E],F=k.color,X=k.intensity,Z=k.distance,j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ur?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=F.r*X,h+=F.g*X,u+=F.b*X;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(k.sh.coefficients[Y],X);O++}else if(k.isDirectionalLight){let Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let G=k.shadow,de=t.get(k);de.shadowIntensity=G.intensity,de.shadowBias=G.bias,de.shadowNormalBias=G.normalBias,de.shadowRadius=G.radius,de.shadowMapSize=G.mapSize,i.directionalShadow[f]=de,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=k.shadow.matrix,S++}i.directional[f]=Y,f++}else if(k.isSpotLight){let Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(F).multiplyScalar(X),Y.distance=Z,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,i.spot[M]=Y;let G=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,G.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[M]=G.matrix,k.castShadow){let de=t.get(k);de.shadowIntensity=G.intensity,de.shadowBias=G.bias,de.shadowNormalBias=G.normalBias,de.shadowRadius=G.radius,de.shadowMapSize=G.mapSize,i.spotShadow[M]=de,i.spotShadowMap[M]=j,T++}M++}else if(k.isRectAreaLight){let Y=e.get(k);Y.color.copy(F).multiplyScalar(X),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),i.rectArea[m]=Y,m++}else if(k.isPointLight){let Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){let G=k.shadow,de=t.get(k);de.shadowIntensity=G.intensity,de.shadowBias=G.bias,de.shadowNormalBias=G.normalBias,de.shadowRadius=G.radius,de.shadowMapSize=G.mapSize,de.shadowCameraNear=G.camera.near,de.shadowCameraFar=G.camera.far,i.pointShadow[_]=de,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=k.shadow.matrix,A++}i.point[_]=Y,_++}else if(k.isHemisphereLight){let Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(X),Y.groundColor.copy(k.groundColor).multiplyScalar(X),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==f||y.pointLength!==_||y.spotLength!==M||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==S||y.numPointShadows!==A||y.numSpotShadows!==T||y.numSpotMaps!==R||y.numLightProbes!==O)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+R-I,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,y.directionalLength=f,y.pointLength=_,y.spotLength=M,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=S,y.numPointShadows=A,y.numSpotShadows=T,y.numSpotMaps=R,y.numLightProbes=O,i.version=Wy++)}function l(c,d){let h=0,u=0,f=0,_=0,M=0,m=d.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let A=c[p];if(A.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(A.isSpotLight){let T=i.spot[f];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(A.isRectAreaLight){let T=i.rectArea[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),o.identity(),a.copy(A.matrixWorld),a.premultiply(m),o.extractRotation(a),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let T=i.point[u];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let T=i.hemi[M];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(m),M++}}}return{setup:s,setupView:l,state:i}}function pf(n){let e=new qy(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function s(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function jy(n){let e=new WeakMap;function t(r,a=0){let o=e.get(r),s;return o===void 0?(s=new pf(n),e.set(r,[s])):a>=o.length?(s=new pf(n),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}var $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jy=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Zy=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ff=new Ot,ao=new W,eu=new W;function Ky(n,e,t){let i=new Qr,r=new _t,a=new _t,o=new Lt,s=new Rs,l=new ks,c={},d=t.maxTextureSize,h={[yi]:_n,[_n]:yi,[ri]:ri},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:$y,fragmentShader:Yy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new bn;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Mn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let p=this.type;this.render=function(I,O,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;this.type===dp&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ja);let E=n.getRenderTarget(),Q=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let X=p!==this.type;X&&O.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(j=>j.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,j=I.length;Z<j;Z++){let Y=I[Z],G=Y.shadow;if(G===void 0){$e("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let de=G.getFrameExtents();r.multiply(de),a.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/de.x),r.x=a.x*de.x,G.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/de.y),r.y=a.y*de.y,G.mapSize.y=a.y));let oe=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=oe,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ia){if(Y.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new In(r.x,r.y,{format:ur,type:oi,minFilter:on,magFilter:on,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new Bi(r.x,r.y,jn),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=ti,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn}else Y.isPointLight?(G.map=new Ll(r.x),G.map.depthTexture=new Ps(r.x,qn)):(G.map=new In(r.x,r.y),G.map.depthTexture=new Bi(r.x,r.y,qn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=ti,this.type===Ja?(G.map.depthTexture.compareFunction=oe?kl:Rl,G.map.depthTexture.minFilter=on,G.map.depthTexture.magFilter=on):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn);G.camera.updateProjectionMatrix()}let ve=G.map.isWebGLCubeRenderTarget?6:1;for(let Pe=0;Pe<ve;Pe++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Pe),n.clear();else{Pe===0&&(n.setRenderTarget(G.map),n.clear());let Te=G.getViewport(Pe);o.set(a.x*Te.x,a.y*Te.y,a.x*Te.z,a.y*Te.w),F.viewport(o)}if(Y.isPointLight){let Te=G.camera,ot=G.matrix,kt=Y.distance||Te.far;kt!==Te.far&&(Te.far=kt,Te.updateProjectionMatrix()),ao.setFromMatrixPosition(Y.matrixWorld),Te.position.copy(ao),eu.copy(Te.position),eu.add(Jy[Pe]),Te.up.copy(Zy[Pe]),Te.lookAt(eu),Te.updateMatrixWorld(),ot.makeTranslation(-ao.x,-ao.y,-ao.z),ff.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ff,Te.coordinateSystem,Te.reversedDepth)}else G.updateMatrices(Y);i=G.getFrustum(),T(O,y,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===ia&&S(G,y),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,Q,k)};function S(I,O){let y=e.update(M);u.defines.VSM_SAMPLES!==I.blurSamples&&(u.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new In(r.x,r.y,{format:ur,type:oi})),u.uniforms.shadow_pass.value=I.map.depthTexture,u.uniforms.resolution.value=I.mapSize,u.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(O,null,y,u,M,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(O,null,y,f,M,null)}function A(I,O,y,E){let Q=null,k=y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)Q=k;else if(Q=y.isPointLight===!0?l:s,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let F=Q.uuid,X=O.uuid,Z=c[F];Z===void 0&&(Z={},c[F]=Z);let j=Z[X];j===void 0&&(j=Q.clone(),Z[X]=j,O.addEventListener("dispose",R)),Q=j}if(Q.visible=O.visible,Q.wireframe=O.wireframe,E===ia?Q.side=O.shadowSide!==null?O.shadowSide:O.side:Q.side=O.shadowSide!==null?O.shadowSide:h[O.side],Q.alphaMap=O.alphaMap,Q.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Q.map=O.map,Q.clipShadows=O.clipShadows,Q.clippingPlanes=O.clippingPlanes,Q.clipIntersection=O.clipIntersection,Q.displacementMap=O.displacementMap,Q.displacementScale=O.displacementScale,Q.displacementBias=O.displacementBias,Q.wireframeLinewidth=O.wireframeLinewidth,Q.linewidth=O.linewidth,y.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){let F=n.properties.get(Q);F.light=y}return Q}function T(I,O,y,E,Q){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Q===ia)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,I.matrixWorld);let X=e.update(I),Z=I.material;if(Array.isArray(Z)){let j=X.groups;for(let Y=0,G=j.length;Y<G;Y++){let de=j[Y],oe=Z[de.materialIndex];if(oe&&oe.visible){let ve=A(I,oe,E,Q);I.onBeforeShadow(n,I,O,y,X,ve,de),n.renderBufferDirect(y,null,X,ve,I,de),I.onAfterShadow(n,I,O,y,X,ve,de)}}}else if(Z.visible){let j=A(I,Z,E,Q);I.onBeforeShadow(n,I,O,y,X,j,null),n.renderBufferDirect(y,null,X,j,I,null),I.onAfterShadow(n,I,O,y,X,j,null)}}let F=I.children;for(let X=0,Z=F.length;X<Z;X++)T(F[X],O,y,E,Q)}function R(I){I.target.removeEventListener("dispose",R);for(let y in c){let E=c[y],Q=I.target.uuid;Q in E&&(E[Q].dispose(),delete E[Q])}}}function Qy(n,e){function t(){let N=!1,_e=new Lt,fe=null,Ae=new Lt(0,0,0,0);return{setMask:function(he){fe!==he&&!N&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){N=he},setClear:function(he,K,ke,Ze,It){It===!0&&(he*=Ze,K*=Ze,ke*=Ze),_e.set(he,K,ke,Ze),Ae.equals(_e)===!1&&(n.clearColor(he,K,ke,Ze),Ae.copy(_e))},reset:function(){N=!1,fe=null,Ae.set(-1,0,0,0)}}}function i(){let N=!1,_e=!1,fe=null,Ae=null,he=null;return{setReversed:function(K){if(_e!==K){let ke=e.get("EXT_clip_control");K?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),_e=K;let Ze=he;he=null,this.setClear(Ze)}},getReversed:function(){return _e},setTest:function(K){K?me(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(K){fe!==K&&!N&&(n.depthMask(K),fe=K)},setFunc:function(K){if(_e&&(K=Hp[K]),Ae!==K){switch(K){case hs:n.depthFunc(n.NEVER);break;case ps:n.depthFunc(n.ALWAYS);break;case fs:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case ms:n.depthFunc(n.EQUAL);break;case gs:n.depthFunc(n.GEQUAL);break;case _s:n.depthFunc(n.GREATER);break;case xs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=K}},setLocked:function(K){N=K},setClear:function(K){he!==K&&(he=K,_e&&(K=1-K),n.clearDepth(K))},reset:function(){N=!1,fe=null,Ae=null,he=null,_e=!1}}}function r(){let N=!1,_e=null,fe=null,Ae=null,he=null,K=null,ke=null,Ze=null,It=null;return{setTest:function(Ct){N||(Ct?me(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Ct){_e!==Ct&&!N&&(n.stencilMask(Ct),_e=Ct)},setFunc:function(Ct,ui,hi){(fe!==Ct||Ae!==ui||he!==hi)&&(n.stencilFunc(Ct,ui,hi),fe=Ct,Ae=ui,he=hi)},setOp:function(Ct,ui,hi){(K!==Ct||ke!==ui||Ze!==hi)&&(n.stencilOp(Ct,ui,hi),K=Ct,ke=ui,Ze=hi)},setLocked:function(Ct){N=Ct},setClear:function(Ct){It!==Ct&&(n.clearStencil(Ct),It=Ct)},reset:function(){N=!1,_e=null,fe=null,Ae=null,he=null,K=null,ke=null,Ze=null,It=null}}}let a=new t,o=new i,s=new r,l=new WeakMap,c=new WeakMap,d={},h={},u=new WeakMap,f=[],_=null,M=!1,m=null,p=null,S=null,A=null,T=null,R=null,I=null,O=new ut(0,0,0),y=0,E=!1,Q=null,k=null,F=null,X=null,Z=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,G=0,de=n.getParameter(n.VERSION);de.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(de)[1]),Y=G>=1):de.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),Y=G>=2);let oe=null,ve={},Pe=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),ot=new Lt().fromArray(Pe),kt=new Lt().fromArray(Te);function Rt(N,_e,fe,Ae){let he=new Uint8Array(4),K=n.createTexture();n.bindTexture(N,K),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<fe;ke++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(_e+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return K}let ie={};ie[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(n.DEPTH_TEST),o.setFunc(sr),lt(!1),Wt(wd),me(n.CULL_FACE),Mt(ai);function me(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function xe(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function it(N,_e){return h[N]!==_e?(n.bindFramebuffer(N,_e),h[N]=_e,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_e),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function He(N,_e){let fe=f,Ae=!1;if(N){fe=u.get(_e),fe===void 0&&(fe=[],u.set(_e,fe));let he=N.textures;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ke=he.length;K<ke;K++)fe[K]=n.COLOR_ATTACHMENT0+K;fe.length=he.length,Ae=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(fe)}function Je(N){return _!==N?(n.useProgram(N),_=N,!0):!1}let en={[Fi]:n.FUNC_ADD,[hp]:n.FUNC_SUBTRACT,[pp]:n.FUNC_REVERSE_SUBTRACT};en[fp]=n.MIN,en[mp]=n.MAX;let xt={[gp]:n.ZERO,[_p]:n.ONE,[xp]:n.SRC_COLOR,[ds]:n.SRC_ALPHA,[wp]:n.SRC_ALPHA_SATURATE,[Mp]:n.DST_COLOR,[yp]:n.DST_ALPHA,[vp]:n.ONE_MINUS_SRC_COLOR,[us]:n.ONE_MINUS_SRC_ALPHA,[Cp]:n.ONE_MINUS_DST_COLOR,[bp]:n.ONE_MINUS_DST_ALPHA,[Sp]:n.CONSTANT_COLOR,[Tp]:n.ONE_MINUS_CONSTANT_COLOR,[Ep]:n.CONSTANT_ALPHA,[Ap]:n.ONE_MINUS_CONSTANT_ALPHA};function Mt(N,_e,fe,Ae,he,K,ke,Ze,It,Ct){if(N===ai){M===!0&&(xe(n.BLEND),M=!1);return}if(M===!1&&(me(n.BLEND),M=!0),N!==up){if(N!==m||Ct!==E){if((p!==Fi||T!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,T=Fi),Ct)switch(N){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sd:n.blendFunc(n.ONE,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Td:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}S=null,A=null,R=null,I=null,O.set(0,0,0),y=0,m=N,E=Ct}return}he=he||_e,K=K||fe,ke=ke||Ae,(_e!==p||he!==T)&&(n.blendEquationSeparate(en[_e],en[he]),p=_e,T=he),(fe!==S||Ae!==A||K!==R||ke!==I)&&(n.blendFuncSeparate(xt[fe],xt[Ae],xt[K],xt[ke]),S=fe,A=Ae,R=K,I=ke),(Ze.equals(O)===!1||It!==y)&&(n.blendColor(Ze.r,Ze.g,Ze.b,It),O.copy(Ze),y=It),m=N,E=!1}function Et(N,_e){N.side===ri?xe(n.CULL_FACE):me(n.CULL_FACE);let fe=N.side===_n;_e&&(fe=!fe),lt(fe),N.blending===or&&N.transparent===!1?Mt(ai):Mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),a.setMask(N.colorWrite);let Ae=N.stencilWrite;s.setTest(Ae),Ae&&(s.setMask(N.stencilWriteMask),s.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),s.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){Q!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),Q=N)}function Wt(N){N!==lp?(me(n.CULL_FACE),N!==k&&(N===wd?n.cullFace(n.BACK):N===cp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),k=N}function D(N){N!==F&&(Y&&n.lineWidth(N),F=N)}function jt(N,_e,fe){N?(me(n.POLYGON_OFFSET_FILL),(X!==_e||Z!==fe)&&(X=_e,Z=fe,o.getReversed()&&(_e=-_e),n.polygonOffset(_e,fe))):xe(n.POLYGON_OFFSET_FILL)}function yt(N){N?me(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Pt(N){N===void 0&&(N=n.TEXTURE0+j-1),oe!==N&&(n.activeTexture(N),oe=N)}function Ne(N,_e,fe){fe===void 0&&(oe===null?fe=n.TEXTURE0+j-1:fe=oe);let Ae=ve[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},ve[fe]=Ae),(Ae.type!==N||Ae.texture!==_e)&&(oe!==fe&&(n.activeTexture(fe),oe=fe),n.bindTexture(N,_e||ie[N]),Ae.type=N,Ae.texture=_e)}function P(){let N=ve[oe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function ne(){try{n.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ae(){try{n.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function ge(){try{n.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Ve(){try{n.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Xe(){try{n.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ue(){try{n.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function pe(N){ot.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ot.copy(N))}function Re(N){kt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),kt.copy(N))}function Oe(N,_e){let fe=c.get(_e);fe===void 0&&(fe=new WeakMap,c.set(_e,fe));let Ae=fe.get(N);Ae===void 0&&(Ae=n.getUniformBlockIndex(_e,N.name),fe.set(N,Ae))}function Se(N,_e){let Ae=c.get(_e).get(N);l.get(_e)!==Ae&&(n.uniformBlockBinding(_e,Ae,N.__bindingPointIndex),l.set(_e,Ae))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,ve={},h={},u=new WeakMap,f=[],_=null,M=!1,m=null,p=null,S=null,A=null,T=null,R=null,I=null,O=new ut(0,0,0),y=0,E=!1,Q=null,k=null,F=null,X=null,Z=null,ot.set(0,0,n.canvas.width,n.canvas.height),kt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:xe,bindFramebuffer:it,drawBuffers:He,useProgram:Je,setBlending:Mt,setMaterial:Et,setFlipSided:lt,setCullFace:Wt,setLineWidth:D,setPolygonOffset:jt,setScissorTest:yt,activeTexture:Pt,bindTexture:Ne,unbindTexture:P,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Xe,texImage3D:ue,updateUBOMapping:Oe,uniformBlockBinding:Se,texStorage2D:ge,texStorage3D:Ve,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ie,scissor:pe,viewport:Re,reset:ct}}function eb(n,e,t,i,r,a,o){let s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,d=new WeakMap,h,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return f?new OffscreenCanvas(P,x):Ra("canvas")}function M(P,x,U){let ne=1,ae=Ne(P);if((ae.width>U||ae.height>U)&&(ne=U/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ee=Math.floor(ne*ae.width),Ie=Math.floor(ne*ae.height);h===void 0&&(h=_(ee,Ie));let ge=x?_(ee,Ie):h;return ge.width=ee,ge.height=Ie,ge.getContext("2d").drawImage(P,0,0,ee,Ie),$e("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+Ie+")."),ge}else return"data"in P&&$e("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(P,x,U,ne,ae=!1){if(P!==null){if(n[P]!==void 0)return n[P];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=x;if(x===n.RED&&(U===n.FLOAT&&(ee=n.R32F),U===n.HALF_FLOAT&&(ee=n.R16F),U===n.UNSIGNED_BYTE&&(ee=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.R8UI),U===n.UNSIGNED_SHORT&&(ee=n.R16UI),U===n.UNSIGNED_INT&&(ee=n.R32UI),U===n.BYTE&&(ee=n.R8I),U===n.SHORT&&(ee=n.R16I),U===n.INT&&(ee=n.R32I)),x===n.RG&&(U===n.FLOAT&&(ee=n.RG32F),U===n.HALF_FLOAT&&(ee=n.RG16F),U===n.UNSIGNED_BYTE&&(ee=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RG8UI),U===n.UNSIGNED_SHORT&&(ee=n.RG16UI),U===n.UNSIGNED_INT&&(ee=n.RG32UI),U===n.BYTE&&(ee=n.RG8I),U===n.SHORT&&(ee=n.RG16I),U===n.INT&&(ee=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),U===n.UNSIGNED_INT&&(ee=n.RGB32UI),U===n.BYTE&&(ee=n.RGB8I),U===n.SHORT&&(ee=n.RGB16I),U===n.INT&&(ee=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),U===n.UNSIGNED_INT&&(ee=n.RGBA32UI),U===n.BYTE&&(ee=n.RGBA8I),U===n.SHORT&&(ee=n.RGBA16I),U===n.INT&&(ee=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),x===n.RGBA){let Ie=ae?Ia:gt.getTransfer(ne);U===n.FLOAT&&(ee=n.RGBA32F),U===n.HALF_FLOAT&&(ee=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ee=Ie===bt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(P,x){let U;return P?x===null||x===qn||x===aa?U=n.DEPTH24_STENCIL8:x===jn?U=n.DEPTH32F_STENCIL8:x===ra&&(U=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qn||x===aa?U=n.DEPTH_COMPONENT24:x===jn?U=n.DEPTH_COMPONENT32F:x===ra&&(U=n.DEPTH_COMPONENT16),U}function R(P,x){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==rn&&P.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function I(P){let x=P.target;x.removeEventListener("dispose",I),y(x),x.isVideoTexture&&d.delete(x)}function O(P){let x=P.target;x.removeEventListener("dispose",O),Q(x)}function y(P){let x=i.get(P);if(x.__webglInit===void 0)return;let U=P.source,ne=u.get(U);if(ne){let ae=ne[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&E(P),Object.keys(ne).length===0&&u.delete(U)}i.remove(P)}function E(P){let x=i.get(P);n.deleteTexture(x.__webglTexture);let U=P.source,ne=u.get(U);delete ne[x.__cacheKey],o.memory.textures--}function Q(P){let x=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let ae=0;ae<x.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(x.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(x.__webglFramebuffer[ne]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[ne]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)x.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let U=P.textures;for(let ne=0,ae=U.length;ne<ae;ne++){let ee=i.get(U[ne]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(U[ne])}i.remove(P)}let k=0;function F(){k=0}function X(){let P=k;return P>=r.maxTextures&&$e("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),k+=1,P}function Z(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function j(P,x){let U=i.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&U.__version!==P.version){let ne=P.image;if(ne===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,P,x);return}}else P.isExternalTexture&&(U.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function Y(P,x){let U=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){ie(U,P,x);return}else P.isExternalTexture&&(U.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function G(P,x){let U=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){ie(U,P,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function de(P,x){let U=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&U.__version!==P.version){me(U,P,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}let oe={[vs]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[ys]:n.MIRRORED_REPEAT},ve={[rn]:n.NEAREST,[Rp]:n.NEAREST_MIPMAP_NEAREST,[Ka]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[qs]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},Pe={[Dp]:n.NEVER,[Bp]:n.ALWAYS,[Np]:n.LESS,[Rl]:n.LEQUAL,[Lp]:n.EQUAL,[kl]:n.GEQUAL,[Fp]:n.GREATER,[Up]:n.NOTEQUAL};function Te(P,x){if(x.type===jn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===qs||x.magFilter===Ka||x.magFilter===Wi||x.minFilter===on||x.minFilter===qs||x.minFilter===Ka||x.minFilter===Wi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,oe[x.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==Ka&&x.minFilter!==Wi||x.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ot(P,x){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",I));let ne=x.source,ae=u.get(ne);ae===void 0&&(ae={},u.set(ne,ae));let ee=Z(x);if(ee!==P.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ae[ee].usedTimes++;let Ie=ae[P.__cacheKey];Ie!==void 0&&(ae[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(x)),P.__cacheKey=ee,P.__webglTexture=ae[ee].texture}return U}function kt(P,x,U){return Math.floor(Math.floor(P/U)/x)}function Rt(P,x,U,ne){let ee=P.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,ne,x.data);else{ee.sort((ue,pe)=>ue.start-pe.start);let Ie=0;for(let ue=1;ue<ee.length;ue++){let pe=ee[Ie],Re=ee[ue],Oe=pe.start+pe.count,Se=kt(Re.start,x.width,4),ct=kt(pe.start,x.width,4);Re.start<=Oe+1&&Se===ct&&kt(Re.start+Re.count-1,x.width,4)===Se?pe.count=Math.max(pe.count,Re.start+Re.count-pe.start):(++Ie,ee[Ie]=Re)}ee.length=Ie+1;let ge=n.getParameter(n.UNPACK_ROW_LENGTH),Ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ue=0,pe=ee.length;ue<pe;ue++){let Re=ee[ue],Oe=Math.floor(Re.start/4),Se=Math.ceil(Re.count/4),ct=Oe%x.width,N=Math.floor(Oe/x.width),_e=Se,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ct,N,_e,fe,U,ne,x.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xe)}}function ie(P,x,U){let ne=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=n.TEXTURE_3D);let ae=ot(P,x),ee=x.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+U);let Ie=i.get(ee);if(ee.version!==Ie.__version||ae===!0){t.activeTexture(n.TEXTURE0+U);let ge=gt.getPrimaries(gt.workingColorSpace),Ve=x.colorSpace===Ci?null:gt.getPrimaries(x.colorSpace),Xe=x.colorSpace===Ci||ge===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ue=M(x.image,!1,r.maxTextureSize);ue=Pt(x,ue);let pe=a.convert(x.format,x.colorSpace),Re=a.convert(x.type),Oe=A(x.internalFormat,pe,Re,x.colorSpace,x.isVideoTexture);Te(ne,x);let Se,ct=x.mipmaps,N=x.isVideoTexture!==!0,_e=Ie.__version===void 0||ae===!0,fe=ee.dataReady,Ae=R(x,ue);if(x.isDepthTexture)Oe=T(x.format===Xi,x.type),_e&&(N?t.texStorage2D(n.TEXTURE_2D,1,Oe,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ue.width,ue.height,0,pe,Re,null));else if(x.isDataTexture)if(ct.length>0){N&&_e&&t.texStorage2D(n.TEXTURE_2D,Ae,Oe,ct[0].width,ct[0].height);for(let he=0,K=ct.length;he<K;he++)Se=ct[he],N?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,pe,Re,Se.data):t.texImage2D(n.TEXTURE_2D,he,Oe,Se.width,Se.height,0,pe,Re,Se.data);x.generateMipmaps=!1}else N?(_e&&t.texStorage2D(n.TEXTURE_2D,Ae,Oe,ue.width,ue.height),fe&&Rt(x,ue,pe,Re)):t.texImage2D(n.TEXTURE_2D,0,Oe,ue.width,ue.height,0,pe,Re,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Oe,ct[0].width,ct[0].height,ue.depth);for(let he=0,K=ct.length;he<K;he++)if(Se=ct[he],x.format!==Fn)if(pe!==null)if(N){if(fe)if(x.layerUpdates.size>0){let ke=$d(Se.width,Se.height,x.format,x.type);for(let Ze of x.layerUpdates){let It=Se.data.subarray(Ze*ke/Se.data.BYTES_PER_ELEMENT,(Ze+1)*ke/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ze,Se.width,Se.height,1,pe,It)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,ue.depth,pe,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Oe,Se.width,Se.height,ue.depth,0,Se.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,ue.depth,pe,Re,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Oe,Se.width,Se.height,ue.depth,0,pe,Re,Se.data)}else{N&&_e&&t.texStorage2D(n.TEXTURE_2D,Ae,Oe,ct[0].width,ct[0].height);for(let he=0,K=ct.length;he<K;he++)Se=ct[he],x.format!==Fn?pe!==null?N?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,pe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Oe,Se.width,Se.height,0,Se.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,pe,Re,Se.data):t.texImage2D(n.TEXTURE_2D,he,Oe,Se.width,Se.height,0,pe,Re,Se.data)}else if(x.isDataArrayTexture)if(N){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Oe,ue.width,ue.height,ue.depth),fe)if(x.layerUpdates.size>0){let he=$d(ue.width,ue.height,x.format,x.type);for(let K of x.layerUpdates){let ke=ue.data.subarray(K*he/ue.data.BYTES_PER_ELEMENT,(K+1)*he/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ue.width,ue.height,1,pe,Re,ke)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,pe,Re,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,pe,Re,ue.data);else if(x.isData3DTexture)N?(_e&&t.texStorage3D(n.TEXTURE_3D,Ae,Oe,ue.width,ue.height,ue.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,pe,Re,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,pe,Re,ue.data);else if(x.isFramebufferTexture){if(_e)if(N)t.texStorage2D(n.TEXTURE_2D,Ae,Oe,ue.width,ue.height);else{let he=ue.width,K=ue.height;for(let ke=0;ke<Ae;ke++)t.texImage2D(n.TEXTURE_2D,ke,Oe,he,K,0,pe,Re,null),he>>=1,K>>=1}}else if(ct.length>0){if(N&&_e){let he=Ne(ct[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Oe,he.width,he.height)}for(let he=0,K=ct.length;he<K;he++)Se=ct[he],N?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,pe,Re,Se):t.texImage2D(n.TEXTURE_2D,he,Oe,pe,Re,Se);x.generateMipmaps=!1}else if(N){if(_e){let he=Ne(ue);t.texStorage2D(n.TEXTURE_2D,Ae,Oe,he.width,he.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Re,ue)}else t.texImage2D(n.TEXTURE_2D,0,Oe,pe,Re,ue);m(x)&&p(ne),Ie.__version=ee.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function me(P,x,U){if(x.image.length!==6)return;let ne=ot(P,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+U);let ee=i.get(ae);if(ae.version!==ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+U);let Ie=gt.getPrimaries(gt.workingColorSpace),ge=x.colorSpace===Ci?null:gt.getPrimaries(x.colorSpace),Ve=x.colorSpace===Ci||Ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!Xe&&!ue?pe[K]=M(x.image[K],!0,r.maxCubemapSize):pe[K]=ue?x.image[K].image:x.image[K],pe[K]=Pt(x,pe[K]);let Re=pe[0],Oe=a.convert(x.format,x.colorSpace),Se=a.convert(x.type),ct=A(x.internalFormat,Oe,Se,x.colorSpace),N=x.isVideoTexture!==!0,_e=ee.__version===void 0||ne===!0,fe=ae.dataReady,Ae=R(x,Re);Te(n.TEXTURE_CUBE_MAP,x);let he;if(Xe){N&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,ct,Re.width,Re.height);for(let K=0;K<6;K++){he=pe[K].mipmaps;for(let ke=0;ke<he.length;ke++){let Ze=he[ke];x.format!==Fn?Oe!==null?N?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke,0,0,Ze.width,Ze.height,Oe,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke,ct,Ze.width,Ze.height,0,Ze.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke,0,0,Ze.width,Ze.height,Oe,Se,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke,ct,Ze.width,Ze.height,0,Oe,Se,Ze.data)}}}else{if(he=x.mipmaps,N&&_e){he.length>0&&Ae++;let K=Ne(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,ct,K.width,K.height)}for(let K=0;K<6;K++)if(ue){N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Oe,Se,pe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ct,pe[K].width,pe[K].height,0,Oe,Se,pe[K].data);for(let ke=0;ke<he.length;ke++){let It=he[ke].image[K].image;N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke+1,0,0,It.width,It.height,Oe,Se,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke+1,ct,It.width,It.height,0,Oe,Se,It.data)}}else{N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Oe,Se,pe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ct,Oe,Se,pe[K]);for(let ke=0;ke<he.length;ke++){let Ze=he[ke];N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke+1,0,0,Oe,Se,Ze.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke+1,ct,Oe,Se,Ze.image[K])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),ee.__version=ae.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function xe(P,x,U,ne,ae,ee){let Ie=a.convert(U.format,U.colorSpace),ge=a.convert(U.type),Ve=A(U.internalFormat,Ie,ge,U.colorSpace),Xe=i.get(x),ue=i.get(U);if(ue.__renderTarget=x,!Xe.__hasExternalTextures){let pe=Math.max(1,x.width>>ee),Re=Math.max(1,x.height>>ee);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,Ve,pe,Re,x.depth,0,Ie,ge,null):t.texImage2D(ae,ee,Ve,pe,Re,0,Ie,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),jt(x)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,ue.__webglTexture,0,D(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,ue.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(P,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,P),x.depthBuffer){let ne=x.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ee=T(x.stencilBuffer,ae),Ie=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(x)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(x),ee,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(x),ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,P)}else{let ne=x.textures;for(let ae=0;ae<ne.length;ae++){let ee=ne[ae],Ie=a.convert(ee.format,ee.colorSpace),ge=a.convert(ee.type),Ve=A(ee.internalFormat,Ie,ge,ee.colorSpace);jt(x)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(x),Ve,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(x),Ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(P,x,U){let ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ae=i.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Te(n.TEXTURE_CUBE_MAP,x.depthTexture);let Xe=a.convert(x.depthTexture.format),ue=a.convert(x.depthTexture.type),pe;x.depthTexture.format===ti?pe=n.DEPTH_COMPONENT24:x.depthTexture.format===Xi&&(pe=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,pe,x.width,x.height,0,Xe,ue,null)}}else j(x.depthTexture,0);let ee=ae.__webglTexture,Ie=D(x),ge=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Ve=x.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ti)jt(x)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,ge,ee,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,ge,ee,0);else if(x.depthTexture.format===Xi)jt(x)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,ge,ee,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,ge,ee,0);else throw new Error("Unknown depthTexture format")}function Je(P){let x=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let ne=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){let ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=ne}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let ne=0;ne<6;ne++)He(x.__webglFramebuffer[ne],P,ne);else{let ne=P.texture.mipmaps;ne&&ne.length>0?He(x.__webglFramebuffer[0],P,0):He(x.__webglFramebuffer,P,0)}else if(U){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=n.createRenderbuffer(),it(x.__webglDepthbuffer[ne],P,!1);else{let ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}else{let ne=P.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),it(x.__webglDepthbuffer,P,!1);else{let ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function en(P,x,U){let ne=i.get(P);x!==void 0&&xe(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Je(P)}function xt(P){let x=P.texture,U=i.get(P),ne=i.get(x);P.addEventListener("dispose",O);let ae=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=x.version,o.memory.textures++),ee){U.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ge]=[];for(let Ve=0;Ve<x.mipmaps.length;Ve++)U.__webglFramebuffer[ge][Ve]=n.createFramebuffer()}else U.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)U.__webglFramebuffer[ge]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ge=0,Ve=ae.length;ge<Ve;ge++){let Xe=i.get(ae[ge]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&jt(P)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ge=0;ge<ae.length;ge++){let Ve=ae[ge];U.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ge]);let Xe=a.convert(Ve.format,Ve.colorSpace),ue=a.convert(Ve.type),pe=A(Ve.internalFormat,Xe,ue,Ve.colorSpace,P.isXRRenderTarget===!0),Re=D(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,U.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),it(U.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(n.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ve=0;Ve<x.mipmaps.length;Ve++)xe(U.__webglFramebuffer[ge][Ve],P,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ve);else xe(U.__webglFramebuffer[ge],P,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,Ve=ae.length;ge<Ve;ge++){let Xe=ae[ge],ue=i.get(Xe),pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ue.__webglTexture),Te(pe,Xe),xe(U.__webglFramebuffer,P,Xe,n.COLOR_ATTACHMENT0+ge,pe,0),m(Xe)&&p(pe)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),Te(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let Ve=0;Ve<x.mipmaps.length;Ve++)xe(U.__webglFramebuffer[Ve],P,x,n.COLOR_ATTACHMENT0,ge,Ve);else xe(U.__webglFramebuffer,P,x,n.COLOR_ATTACHMENT0,ge,0);m(x)&&p(ge),t.unbindTexture()}P.depthBuffer&&Je(P)}function Mt(P){let x=P.textures;for(let U=0,ne=x.length;U<ne;U++){let ae=x[U];if(m(ae)){let ee=S(P),Ie=i.get(ae).__webglTexture;t.bindTexture(ee,Ie),p(ee),t.unbindTexture()}}}let Et=[],lt=[];function Wt(P){if(P.samples>0){if(jt(P)===!1){let x=P.textures,U=P.width,ne=P.height,ae=n.COLOR_BUFFER_BIT,ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(P),ge=x.length>1;if(ge)for(let Xe=0;Xe<x.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ve=P.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Xe=0;Xe<x.length;Xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Xe]);let ue=i.get(x[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,U,ne,0,0,U,ne,ae,n.NEAREST),l===!0&&(Et.length=0,lt.length=0,Et.push(n.COLOR_ATTACHMENT0+Xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Et.push(ee),lt.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Xe=0;Xe<x.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Xe]);let ue=i.get(x[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let x=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function D(P){return Math.min(r.maxSamples,P.samples)}function jt(P){let x=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(P){let x=o.render.frame;d.get(P)!==x&&(d.set(P,x),P.update())}function Pt(P,x){let U=P.colorSpace,ne=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==lr&&U!==Ci&&(gt.getTransfer(U)===bt?(ne!==Fn||ae!==Cn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",U)),x}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=de,this.rebindTextures=en,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tb(n,e){function t(i,r=Ci){let a,o=gt.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===$s)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ys)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nd)return n.BYTE;if(i===Ld)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===js)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===oi)return n.HALF_FLOAT;if(i===Bd)return n.ALPHA;if(i===zd)return n.RGB;if(i===Fn)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Vd)return n.RED;if(i===Js)return n.RED_INTEGER;if(i===ur)return n.RG;if(i===Zs)return n.RG_INTEGER;if(i===Ks)return n.RGBA_INTEGER;if(i===Qa||i===eo||i===to||i===no)if(o===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qs||i===el||i===tl||i===nl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Qs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===rl||i===al||i===ol||i===sl||i===ll||i===cl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===il||i===rl)return o===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===al)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===ol)return a.COMPRESSED_R11_EAC;if(i===sl)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ll)return a.COMPRESSED_RG11_EAC;if(i===cl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dl||i===ul||i===hl||i===pl||i===fl||i===ml||i===gl||i===_l||i===xl||i===vl||i===yl||i===bl||i===Ml||i===Cl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===dl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return o===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===Sl||i===Tl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===wl)return o===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===Al||i===Pl||i===Il)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===El)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ib=`
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

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rn({vertexShader:nb,fragmentShader:ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends bi{constructor(e,t){super();let i=this,r=null,a=1,o=null,s="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,_=null,M=typeof XRWebGLBinding<"u",m=new lu,p={},S=t.getContextAttributes(),A=null,T=null,R=[],I=[],O=new _t,y=null,E=new pn;E.viewport=new Lt;let Q=new pn;Q.viewport=new Lt;let k=[E,Q],F=new Gs,X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=R[ie];return me===void 0&&(me=new Zr,R[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=R[ie];return me===void 0&&(me=new Zr,R[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=R[ie];return me===void 0&&(me=new Zr,R[ie]=me),me.getHandSpace()};function j(ie){let me=I.indexOf(ie.inputSource);if(me===-1)return;let xe=R[me];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||o),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Y(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",G);for(let ie=0;ie<R.length;ie++){let me=I[ie];me!==null&&(I[ie]=null,R[ie].disconnect(me))}X=null,Z=null,m.reset();for(let ie in p)delete p[ie];e.setRenderTarget(A),f=null,u=null,h=null,r=null,T=null,Rt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){s=ie,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=function(ie){return Tr(this,null,function*(){if(r=ie,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&(yield t.makeXRCompatible()),y=e.getPixelRatio(),e.getSize(O),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,it=null,He=null;S.depth&&(He=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?Xi:ti,it=S.stencil?aa:qn);let Je={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(Je),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new In(u.textureWidth,u.textureHeight,{format:Fn,type:Cn,depthTexture:new Bi(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new In(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(s),Rt.setContext(r),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(ie){for(let me=0;me<ie.removed.length;me++){let xe=ie.removed[me],it=I.indexOf(xe);it>=0&&(I[it]=null,R[it].disconnect(xe))}for(let me=0;me<ie.added.length;me++){let xe=ie.added[me],it=I.indexOf(xe);if(it===-1){for(let Je=0;Je<R.length;Je++)if(Je>=I.length){I.push(xe),it=Je;break}else if(I[Je]===null){I[Je]=xe,it=Je;break}if(it===-1)break}let He=R[it];He&&He.connect(xe)}}let de=new W,oe=new W;function ve(ie,me,xe){de.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);let it=de.distanceTo(oe),He=me.projectionMatrix.elements,Je=xe.projectionMatrix.elements,en=He[14]/(He[10]-1),xt=He[14]/(He[10]+1),Mt=(He[9]+1)/He[5],Et=(He[9]-1)/He[5],lt=(He[8]-1)/He[0],Wt=(Je[8]+1)/Je[0],D=en*lt,jt=en*Wt,yt=it/(-lt+Wt),Pt=yt*-lt;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Pt),ie.translateZ(yt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),He[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let Ne=en+yt,P=xt+yt,x=D-Pt,U=jt+(it-Pt),ne=Mt*xt/P*Ne,ae=Et*xt/P*Ne;ie.projectionMatrix.makePerspective(x,U,ne,ae,Ne,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Pe(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,xe=ie.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),F.near=Q.near=E.near=me,F.far=Q.far=E.far=xe,(X!==F.near||Z!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,Z=F.far),F.layers.mask=ie.layers.mask|6,E.layers.mask=F.layers.mask&-5,Q.layers.mask=F.layers.mask&-3;let it=ie.parent,He=F.cameras;Pe(F,it);for(let Je=0;Je<He.length;Je++)Pe(He[Je],it);He.length===2?ve(F,E,Q):F.projectionMatrix.copy(E.projectionMatrix),Te(ie,F,it)};function Te(ie,me,xe){xe===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ms*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ie){l=ie,u!==null&&(u.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ie){return p[ie]};let ot=null;function kt(ie,me){if(d=me.getViewerPose(c||o),_=me,d!==null){let xe=d.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let it=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,it=!0);for(let xt=0;xt<xe.length;xt++){let Mt=xe[xt],Et=null;if(f!==null)Et=f.getViewport(Mt);else{let Wt=h.getViewSubImage(u,Mt);Et=Wt.viewport,xt===0&&(e.setRenderTargetTextures(T,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(T))}let lt=k[xt];lt===void 0&&(lt=new pn,lt.layers.enable(xt),lt.viewport=new Lt,k[xt]=lt),lt.matrix.fromArray(Mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Et.x,Et.y,Et.width,Et.height),xt===0&&(F.matrix.copy(lt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),it===!0&&F.cameras.push(lt)}let He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();let xt=h.getDepthInformation(xe[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,r.renderState)}if(He&&He.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let xt=0;xt<xe.length;xt++){let Mt=xe[xt].camera;if(Mt){let Et=p[Mt];Et||(Et=new za,p[Mt]=Et);let lt=h.getCameraImage(Mt);Et.sourceTexture=lt}}}}for(let xe=0;xe<R.length;xe++){let it=I[xe],He=R[xe];it!==null&&He!==void 0&&He.update(it,me,c||o)}ot&&ot(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}let Rt=new mf;Rt.setAnimationLoop(kt),this.setAnimationLoop=function(ie){ot=ie},this.dispose=function(){}}},fr=new Ui,rb=new Ot;function ab(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,A,T){p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(a(m,p),_(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),M(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),A=S.envMap,T=S.envMapRotation;A&&(m.envMap.value=A,fr.copy(T),fr.x*=-1,fr.y*=-1,fr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(fr)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ob(n,e,t,i){let r={},a={},o=[],s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){let T=A.program;i.uniformBlockBinding(S,T)}function c(S,A){let T=r[S.id];T===void 0&&(_(S),T=d(S),r[S.id]=T,S.addEventListener("dispose",m));let R=A.program;i.updateUBOMapping(S,R);let I=e.render.frame;a[S.id]!==I&&(u(S),a[S.id]=I)}function d(S){let A=h();S.__bindingPointIndex=A;let T=n.createBuffer(),R=S.__size,I=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,T),T}function h(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let A=r[S.id],T=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let I=0,O=T.length;I<O;I++){let y=Array.isArray(T[I])?T[I]:[T[I]];for(let E=0,Q=y.length;E<Q;E++){let k=y[E];if(f(k,I,E,R)===!0){let F=k.__offset,X=Array.isArray(k.value)?k.value:[k.value],Z=0;for(let j=0;j<X.length;j++){let Y=X[j],G=M(Y);typeof Y=="number"||typeof Y=="boolean"?(k.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,F+Z,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=0,k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=0,k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=0):(Y.toArray(k.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,A,T,R){let I=S.value,O=A+"_"+T;if(R[O]===void 0)return typeof I=="number"||typeof I=="boolean"?R[O]=I:R[O]=I.clone(),!0;{let y=R[O];if(typeof I=="number"||typeof I=="boolean"){if(y!==I)return R[O]=I,!0}else if(y.equals(I)===!1)return y.copy(I),!0}return!1}function _(S){let A=S.uniforms,T=0,R=16;for(let O=0,y=A.length;O<y;O++){let E=Array.isArray(A[O])?A[O]:[A[O]];for(let Q=0,k=E.length;Q<k;Q++){let F=E[Q],X=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,j=X.length;Z<j;Z++){let Y=X[Z],G=M(Y),de=T%R,oe=de%G.boundary,ve=de+oe;T+=oe,ve!==0&&R-ve<G.storage&&(T+=R-ve),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=G.storage}}}let I=T%R;return I>0&&(T+=R-I),S.__size=T,S.__cache={},this}function M(S){let A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",S),A}function m(S){let A=S.target;A.removeEventListener("dispose",m);let T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function p(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},a={}}return{bind:l,update:c,dispose:p}}var sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function lb(){return si===null&&(si=new Ts(sb,16,16,ur,oi),si.name="DFG_LUT",si.minFilter=on,si.magFilter=on,si.wrapS=ei,si.wrapT=ei,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Fl=class{constructor(e={}){let{canvas:t=zp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=f,m=new Set([Ks,Zs,Js]),p=new Set([Cn,qn,ra,aa,$s,Ys]),S=new Uint32Array(4),A=new Int32Array(4),T=null,R=null,I=[],O=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,Q=!1;this._outputColorSpace=An;let k=0,F=0,X=null,Z=-1,j=null,Y=new Lt,G=new Lt,de=null,oe=new ut(0),ve=0,Pe=t.width,Te=t.height,ot=1,kt=null,Rt=null,ie=new Lt(0,0,Pe,Te),me=new Lt(0,0,Pe,Te),xe=!1,it=new Qr,He=!1,Je=!1,en=new Ot,xt=new W,Mt=new Lt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Wt(){return X===null?ot:1}let D=i;function jt(C,z){return t.getContext(C,z)}try{let C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",It,!1),D===null){let z="webgl2";if(D=jt(z,C),D===null)throw jt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw We("WebGLRenderer: "+C.message),C}let yt,Pt,Ne,P,x,U,ne,ae,ee,Ie,ge,Ve,Xe,ue,pe,Re,Oe,Se,ct,N,_e,fe,Ae;function he(){yt=new gv(D),yt.init(),_e=new tb(D,yt),Pt=new lv(D,yt,e,_e),Ne=new Qy(D,yt),Pt.reversedDepthBuffer&&u&&Ne.buffers.depth.setReversed(!0),P=new vv(D),x=new By,U=new eb(D,yt,Ne,x,Pt,_e,P),ne=new mv(E),ae=new w0(D),fe=new ov(D,ae),ee=new _v(D,ae,P,fe),Ie=new bv(D,ee,ae,fe,P),Se=new yv(D,Pt,U),pe=new cv(x),ge=new Uy(E,ne,yt,Pt,fe,pe),Ve=new ab(E,x),Xe=new Vy,ue=new jy(yt),Oe=new av(E,ne,Ne,Ie,_,l),Re=new Ky(E,Ie,Pt),Ae=new ob(D,P,Pt,Ne),ct=new sv(D,yt,P),N=new xv(D,yt,P),P.programs=ge.programs,E.capabilities=Pt,E.extensions=yt,E.properties=x,E.renderLists=Xe,E.shadowMap=Re,E.state=Ne,E.info=P}he(),M!==Cn&&(y=new Cv(M,t.width,t.height,r,a));let K=new cu(E,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let C=yt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=yt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(C){C!==void 0&&(ot=C,this.setSize(Pe,Te,!1))},this.getSize=function(C){return C.set(Pe,Te)},this.setSize=function(C,z,J=!0){if(K.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=C,Te=z,t.width=Math.floor(C*ot),t.height=Math.floor(z*ot),J===!0&&(t.style.width=C+"px",t.style.height=z+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(Pe*ot,Te*ot).floor()},this.setDrawingBufferSize=function(C,z,J){Pe=C,Te=z,ot=J,t.width=Math.floor(C*J),t.height=Math.floor(z*J),this.setViewport(0,0,C,z)},this.setEffects=function(C){if(M===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let z=0;z<C.length;z++)if(C[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Y)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,z,J,$){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,z,J,$),Ne.viewport(Y.copy(ie).multiplyScalar(ot).round())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,z,J,$){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,z,J,$),Ne.scissor(G.copy(me).multiplyScalar(ot).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){Ne.setScissorTest(xe=C)},this.setOpaqueSort=function(C){kt=C},this.setTransparentSort=function(C){Rt=C},this.getClearColor=function(C){return C.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,J=!0){let $=0;if(C){let q=!1;if(X!==null){let Ce=X.texture.format;q=m.has(Ce)}if(q){let Ce=X.texture.type,Ee=p.has(Ce),we=Oe.getClearColor(),De=Oe.getClearAlpha(),Fe=we.r,Qe=we.g,dt=we.b;Ee?(S[0]=Fe,S[1]=Qe,S[2]=dt,S[3]=De,D.clearBufferuiv(D.COLOR,0,S)):(A[0]=Fe,A[1]=Qe,A[2]=dt,A[3]=De,D.clearBufferiv(D.COLOR,0,A))}else $|=D.COLOR_BUFFER_BIT}z&&($|=D.DEPTH_BUFFER_BIT),J&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",It,!1),Oe.dispose(),Xe.dispose(),ue.dispose(),x.dispose(),ne.dispose(),Ie.dispose(),fe.dispose(),Ae.dispose(),ge.dispose(),K.dispose(),K.removeEventListener("sessionstart",ju),K.removeEventListener("sessionend",$u),Zi.stop()};function ke(C){C.preventDefault(),Wd("WebGLRenderer: Context Lost."),Q=!0}function Ze(){Wd("WebGLRenderer: Context Restored."),Q=!1;let C=P.autoReset,z=Re.enabled,J=Re.autoUpdate,$=Re.needsUpdate,q=Re.type;he(),P.autoReset=C,Re.enabled=z,Re.autoUpdate=J,Re.needsUpdate=$,Re.type=q}function It(C){We("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ct(C){let z=C.target;z.removeEventListener("dispose",Ct),ui(z)}function ui(C){hi(C),x.remove(C)}function hi(C){let z=x.get(C).programs;z!==void 0&&(z.forEach(function(J){ge.releaseProgram(J)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,J,$,q,Ce){z===null&&(z=Et);let Ee=q.isMesh&&q.matrixWorld.determinant()<0,we=Rg(C,z,J,$,q);Ne.setMaterial($,Ee);let De=J.index,Fe=1;if($.wireframe===!0){if(De=ee.getWireframeAttribute(J),De===void 0)return;Fe=2}let Qe=J.drawRange,dt=J.attributes.position,Ue=Qe.start*Fe,wt=(Qe.start+Qe.count)*Fe;Ce!==null&&(Ue=Math.max(Ue,Ce.start*Fe),wt=Math.min(wt,(Ce.start+Ce.count)*Fe)),De!==null?(Ue=Math.max(Ue,0),wt=Math.min(wt,De.count)):dt!=null&&(Ue=Math.max(Ue,0),wt=Math.min(wt,dt.count));let Xt=wt-Ue;if(Xt<0||Xt===1/0)return;fe.setup(q,$,we,J,De);let Ft,St=ct;if(De!==null&&(Ft=ae.get(De),St=N,St.setIndex(Ft)),q.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*Wt()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(q.isLine){let cn=$.linewidth;cn===void 0&&(cn=1),Ne.setLineWidth(cn*Wt()),q.isLineSegments?St.setMode(D.LINES):q.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else q.isPoints?St.setMode(D.POINTS):q.isSprite&&St.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let cn=q._multiDrawStarts,Le=q._multiDrawCounts,Sn=q._multiDrawCount,vt=De?ae.get(De).bytesPerElement:1,Un=x.get($).currentProgram.getUniforms();for(let Jn=0;Jn<Sn;Jn++)Un.setValue(D,"_gl_DrawID",Jn),St.render(cn[Jn]/vt,Le[Jn])}else if(q.isInstancedMesh)St.renderInstances(Ue,Xt,q.count);else if(J.isInstancedBufferGeometry){let cn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Le=Math.min(J.instanceCount,cn);St.renderInstances(Ue,Xt,Le)}else St.render(Ue,Xt)};function qu(C,z,J){C.transparent===!0&&C.side===ri&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,Ao(C,z,J),C.side=yi,C.needsUpdate=!0,Ao(C,z,J),C.side=ri):Ao(C,z,J)}this.compile=function(C,z,J=null){J===null&&(J=C),R=ue.get(J),R.init(z),O.push(R),J.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),C!==J&&C.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights();let $=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ce=q.material;if(Ce)if(Array.isArray(Ce))for(let Ee=0;Ee<Ce.length;Ee++){let we=Ce[Ee];qu(we,J,q),$.add(we)}else qu(Ce,J,q),$.add(Ce)}),R=O.pop(),$},this.compileAsync=function(C,z,J=null){let $=this.compile(C,z,J);return new Promise(q=>{function Ce(){if($.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){q(C);return}setTimeout(Ce,10)}yt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Fc=null;function Ig(C){Fc&&Fc(C)}function ju(){Zi.stop()}function $u(){Zi.start()}let Zi=new mf;Zi.setAnimationLoop(Ig),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(C){Fc=C,K.setAnimationLoop(C),C===null?Zi.stop():Zi.start()},K.addEventListener("sessionstart",ju),K.addEventListener("sessionend",$u),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;let J=K.enabled===!0&&K.isPresenting===!0,$=y!==null&&(X===null||J)&&y.begin(E,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,z,X),R=ue.get(C,O.length),R.init(z),O.push(R),en.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),it.setFromProjectionMatrix(en,Hn,z.reversedDepth),Je=this.localClippingEnabled,He=pe.init(this.clippingPlanes,Je),T=Xe.get(C,I.length),T.init(),I.push(T),K.enabled===!0&&K.isPresenting===!0){let Ee=E.xr.getDepthSensingMesh();Ee!==null&&Uc(Ee,z,-1/0,E.sortObjects)}Uc(C,z,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(kt,Rt),lt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,lt&&Oe.addToRenderList(T,C),this.info.render.frame++,He===!0&&pe.beginShadows();let q=R.state.shadowsArray;if(Re.render(q,C,z),He===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&y.hasRenderPass())===!1){let Ee=T.opaque,we=T.transmissive;if(R.setupLights(),z.isArrayCamera){let De=z.cameras;if(we.length>0)for(let Fe=0,Qe=De.length;Fe<Qe;Fe++){let dt=De[Fe];Ju(Ee,we,C,dt)}lt&&Oe.render(C);for(let Fe=0,Qe=De.length;Fe<Qe;Fe++){let dt=De[Fe];Yu(T,C,dt,dt.viewport)}}else we.length>0&&Ju(Ee,we,C,z),lt&&Oe.render(C),Yu(T,C,z)}X!==null&&F===0&&(U.updateMultisampleRenderTarget(X),U.updateRenderTargetMipmap(X)),$&&y.end(E),C.isScene===!0&&C.onAfterRender(E,C,z),fe.resetDefaultState(),Z=-1,j=null,O.pop(),O.length>0?(R=O[O.length-1],He===!0&&pe.setGlobalState(E.clippingPlanes,R.state.camera)):R=null,I.pop(),I.length>0?T=I[I.length-1]:T=null};function Uc(C,z,J,$){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)R.pushLight(C),C.castShadow&&R.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||it.intersectsSprite(C)){$&&Mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(en);let Ee=Ie.update(C),we=C.material;we.visible&&T.push(C,Ee,we,J,Mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||it.intersectsObject(C))){let Ee=Ie.update(C),we=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Mt.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Mt.copy(Ee.boundingSphere.center)),Mt.applyMatrix4(C.matrixWorld).applyMatrix4(en)),Array.isArray(we)){let De=Ee.groups;for(let Fe=0,Qe=De.length;Fe<Qe;Fe++){let dt=De[Fe],Ue=we[dt.materialIndex];Ue&&Ue.visible&&T.push(C,Ee,Ue,J,Mt.z,dt)}}else we.visible&&T.push(C,Ee,we,J,Mt.z,null)}}let Ce=C.children;for(let Ee=0,we=Ce.length;Ee<we;Ee++)Uc(Ce[Ee],z,J,$)}function Yu(C,z,J,$){let{opaque:q,transmissive:Ce,transparent:Ee}=C;R.setupLightsView(J),He===!0&&pe.setGlobalState(E.clippingPlanes,J),$&&Ne.viewport(Y.copy($)),q.length>0&&Eo(q,z,J),Ce.length>0&&Eo(Ce,z,J),Ee.length>0&&Eo(Ee,z,J),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ju(C,z,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[$.id]===void 0){let Ue=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[$.id]=new In(1,1,{generateMipmaps:!0,type:Ue?oi:Cn,minFilter:Wi,samples:Math.max(4,Pt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ce=R.state.transmissionRenderTarget[$.id],Ee=$.viewport||Y;Ce.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);let we=E.getRenderTarget(),De=E.getActiveCubeFace(),Fe=E.getActiveMipmapLevel();E.setRenderTarget(Ce),E.getClearColor(oe),ve=E.getClearAlpha(),ve<1&&E.setClearColor(16777215,.5),E.clear(),lt&&Oe.render(J);let Qe=E.toneMapping;E.toneMapping=Xn;let dt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),R.setupLightsView($),He===!0&&pe.setGlobalState(E.clippingPlanes,$),Eo(C,J,$),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let wt=0,Xt=z.length;wt<Xt;wt++){let Ft=z[wt],{object:St,geometry:cn,material:Le,group:Sn}=Ft;if(Le.side===ri&&St.layers.test($.layers)){let vt=Le.side;Le.side=_n,Le.needsUpdate=!0,Zu(St,J,$,cn,Le,Sn),Le.side=vt,Le.needsUpdate=!0,Ue=!0}}Ue===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}E.setRenderTarget(we,De,Fe),E.setClearColor(oe,ve),dt!==void 0&&($.viewport=dt),E.toneMapping=Qe}function Eo(C,z,J){let $=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Ce=C.length;q<Ce;q++){let Ee=C[q],{object:we,geometry:De,group:Fe}=Ee,Qe=Ee.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),we.layers.test(J.layers)&&Zu(we,z,J,De,Qe,Fe)}}function Zu(C,z,J,$,q,Ce){C.onBeforeRender(E,z,J,$,q,Ce),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(E,z,J,$,C,Ce),q.transparent===!0&&q.side===ri&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,E.renderBufferDirect(J,z,$,q,C,Ce),q.side=yi,q.needsUpdate=!0,E.renderBufferDirect(J,z,$,q,C,Ce),q.side=ri):E.renderBufferDirect(J,z,$,q,C,Ce),C.onAfterRender(E,z,J,$,q,Ce)}function Ao(C,z,J){z.isScene!==!0&&(z=Et);let $=x.get(C),q=R.state.lights,Ce=R.state.shadowsArray,Ee=q.state.version,we=ge.getParameters(C,q.state,Ce,z,J),De=ge.getProgramCacheKey(we),Fe=$.programs;$.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;let Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;$.envMap=ne.get(C.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",Ct),Fe=new Map,$.programs=Fe);let dt=Fe.get(De);if(dt!==void 0){if($.currentProgram===dt&&$.lightsStateVersion===Ee)return Qu(C,we),dt}else we.uniforms=ge.getUniforms(C),C.onBeforeCompile(we,E),dt=ge.acquireProgram(we,De),Fe.set(De,dt),$.uniforms=we.uniforms;let Ue=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=pe.uniform),Qu(C,we),$.needsLights=Og(C),$.lightsStateVersion=Ee,$.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=dt,$.uniformsList=null,dt}function Ku(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=sa.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function Qu(C,z){let J=x.get(C);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Rg(C,z,J,$,q){z.isScene!==!0&&(z=Et),U.resetTextureUnits();let Ce=z.fog,Ee=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,we=X===null?E.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:lr,De=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Fe=ne.get($.envMap||Ee,De),Qe=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,dt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!J.morphAttributes.position,wt=!!J.morphAttributes.normal,Xt=!!J.morphAttributes.color,Ft=Xn;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ft=E.toneMapping);let St=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,cn=St!==void 0?St.length:0,Le=x.get($),Sn=R.state.lights;if(He===!0&&(Je===!0||C!==j)){let tn=C===j&&$.id===Z;pe.setState($,C,tn)}let vt=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Sn.state.version||Le.outputColorSpace!==we||q.isBatchedMesh&&Le.batching===!1||!q.isBatchedMesh&&Le.batching===!0||q.isBatchedMesh&&Le.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Le.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Le.instancing===!1||!q.isInstancedMesh&&Le.instancing===!0||q.isSkinnedMesh&&Le.skinning===!1||!q.isSkinnedMesh&&Le.skinning===!0||q.isInstancedMesh&&Le.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Le.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Le.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Le.instancingMorph===!1&&q.morphTexture!==null||Le.envMap!==Fe||$.fog===!0&&Le.fog!==Ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==pe.numPlanes||Le.numIntersection!==pe.numIntersection)||Le.vertexAlphas!==Qe||Le.vertexTangents!==dt||Le.morphTargets!==Ue||Le.morphNormals!==wt||Le.morphColors!==Xt||Le.toneMapping!==Ft||Le.morphTargetsCount!==cn)&&(vt=!0):(vt=!0,Le.__version=$.version);let Un=Le.currentProgram;vt===!0&&(Un=Ao($,z,q));let Jn=!1,Ki=!1,wr=!1,At=Un.getUniforms(),an=Le.uniforms;if(Ne.useProgram(Un.program)&&(Jn=!0,Ki=!0,wr=!0),$.id!==Z&&(Z=$.id,Ki=!0),Jn||j!==C){Ne.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(D,"projectionMatrix",C.projectionMatrix),At.setValue(D,"viewMatrix",C.matrixWorldInverse);let Pi=At.map.cameraPosition;Pi!==void 0&&Pi.setValue(D,xt.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,Ki=!0,wr=!0)}if(Le.needsLights&&(Sn.state.directionalShadowMap.length>0&&At.setValue(D,"directionalShadowMap",Sn.state.directionalShadowMap,U),Sn.state.spotShadowMap.length>0&&At.setValue(D,"spotShadowMap",Sn.state.spotShadowMap,U),Sn.state.pointShadowMap.length>0&&At.setValue(D,"pointShadowMap",Sn.state.pointShadowMap,U)),q.isSkinnedMesh){At.setOptional(D,q,"bindMatrix"),At.setOptional(D,q,"bindMatrixInverse");let tn=q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),At.setValue(D,"boneTexture",tn.boneTexture,U))}q.isBatchedMesh&&(At.setOptional(D,q,"batchingTexture"),At.setValue(D,"batchingTexture",q._matricesTexture,U),At.setOptional(D,q,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",q._indirectTexture,U),At.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",q._colorsTexture,U));let Ai=J.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Se.update(q,J,Un),(Ki||Le.receiveShadow!==q.receiveShadow)&&(Le.receiveShadow=q.receiveShadow,At.setValue(D,"receiveShadow",q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(an.envMapIntensity.value=z.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=lb()),Ki&&(At.setValue(D,"toneMappingExposure",E.toneMappingExposure),Le.needsLights&&kg(an,wr),Ce&&$.fog===!0&&Ve.refreshFogUniforms(an,Ce),Ve.refreshMaterialUniforms(an,$,ot,Te,R.state.transmissionRenderTarget[C.id]),sa.upload(D,Ku(Le),an,U)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(sa.upload(D,Ku(Le),an,U),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(D,"center",q.center),At.setValue(D,"modelViewMatrix",q.modelViewMatrix),At.setValue(D,"normalMatrix",q.normalMatrix),At.setValue(D,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let tn=$.uniformsGroups;for(let Pi=0,Sr=tn.length;Pi<Sr;Pi++){let eh=tn[Pi];Ae.update(eh,Un),Ae.bind(eh,Un)}}return Un}function kg(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Og(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,z,J){let $=x.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),x.get(C.texture).__webglTexture=z,x.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){let J=x.get(C);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};let Dg=D.createFramebuffer();this.setRenderTarget=function(C,z=0,J=0){X=C,k=z,F=J;let $=null,q=!1,Ce=!1;if(C){let we=x.get(C);if(we.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(D.FRAMEBUFFER,we.__webglFramebuffer),Y.copy(C.viewport),G.copy(C.scissor),de=C.scissorTest,Ne.viewport(Y),Ne.scissor(G),Ne.setScissorTest(de),Z=-1;return}else if(we.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(we.__hasExternalTextures)U.rebindTextures(C,x.get(C.texture).__webglTexture,x.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Qe=C.depthTexture;if(we.__boundDepthTexture!==Qe){if(Qe!==null&&x.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}let De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);let Fe=x.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?$=Fe[z][J]:$=Fe[z],q=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?$=x.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?$=Fe[J]:$=Fe,Y.copy(C.viewport),G.copy(C.scissor),de=C.scissorTest}else Y.copy(ie).multiplyScalar(ot).floor(),G.copy(me).multiplyScalar(ot).floor(),de=xe;if(J!==0&&($=Dg),Ne.bindFramebuffer(D.FRAMEBUFFER,$)&&Ne.drawBuffers(C,$),Ne.viewport(Y),Ne.scissor(G),Ne.setScissorTest(de),q){let we=x.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,J)}else if(Ce){let we=z;for(let De=0;De<C.textures.length;De++){let Fe=x.get(C.textures[De]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+De,Fe.__webglTexture,J,we)}}else if(C!==null&&J!==0){let we=x.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,J)}Z=-1},this.readRenderTargetPixels=function(C,z,J,$,q,Ce,Ee,we=0){if(!(C&&C.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=x.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){Ne.bindFramebuffer(D.FRAMEBUFFER,De);try{let Fe=C.textures[we],Qe=Fe.format,dt=Fe.type;if(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),!Pt.textureFormatReadable(Qe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(dt)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-$&&J>=0&&J<=C.height-q&&D.readPixels(z,J,$,q,_e.convert(Qe),_e.convert(dt),Ce)}finally{let Fe=X!==null?x.get(X).__webglFramebuffer:null;Ne.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=function(C,z,J,$,q,Ce,Ee,we=0){return Tr(this,null,function*(){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=x.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De)if(z>=0&&z<=C.width-$&&J>=0&&J<=C.height-q){Ne.bindFramebuffer(D.FRAMEBUFFER,De);let Fe=C.textures[we],Qe=Fe.format,dt=Fe.type;if(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),!Pt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.bufferData(D.PIXEL_PACK_BUFFER,Ce.byteLength,D.STREAM_READ),D.readPixels(z,J,$,q,_e.convert(Qe),_e.convert(dt),0);let wt=X!==null?x.get(X).__webglFramebuffer:null;Ne.bindFramebuffer(D.FRAMEBUFFER,wt);let Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield Gp(D,Xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ce),D.deleteBuffer(Ue),D.deleteSync(Xt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(C,z=null,J=0){let $=Math.pow(2,-J),q=Math.floor(C.image.width*$),Ce=Math.floor(C.image.height*$),Ee=z!==null?z.x:0,we=z!==null?z.y:0;U.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Ee,we,q,Ce),Ne.unbindTexture()};let Ng=D.createFramebuffer(),Lg=D.createFramebuffer();this.copyTextureToTexture=function(C,z,J=null,$=null,q=0,Ce=0){let Ee,we,De,Fe,Qe,dt,Ue,wt,Xt,Ft=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(J!==null)Ee=J.max.x-J.min.x,we=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,Qe=J.min.y,dt=J.isBox3?J.min.z:0;else{let an=Math.pow(2,-q);Ee=Math.floor(Ft.width*an),we=Math.floor(Ft.height*an),C.isDataArrayTexture?De=Ft.depth:C.isData3DTexture?De=Math.floor(Ft.depth*an):De=1,Fe=0,Qe=0,dt=0}$!==null?(Ue=$.x,wt=$.y,Xt=$.z):(Ue=0,wt=0,Xt=0);let St=_e.convert(z.format),cn=_e.convert(z.type),Le;z.isData3DTexture?(U.setTexture3D(z,0),Le=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(U.setTexture2DArray(z,0),Le=D.TEXTURE_2D_ARRAY):(U.setTexture2D(z,0),Le=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Sn=D.getParameter(D.UNPACK_ROW_LENGTH),vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),Jn=D.getParameter(D.UNPACK_SKIP_ROWS),Ki=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dt);let wr=C.isDataArrayTexture||C.isData3DTexture,At=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){let an=x.get(C),Ai=x.get(z),tn=x.get(an.__renderTarget),Pi=x.get(Ai.__renderTarget);Ne.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Sr=0;Sr<De;Sr++)wr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(C).__webglTexture,q,dt+Sr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(z).__webglTexture,Ce,Xt+Sr)),D.blitFramebuffer(Fe,Qe,Ee,we,Ue,wt,Ee,we,D.DEPTH_BUFFER_BIT,D.NEAREST);Ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||x.has(C)){let an=x.get(C),Ai=x.get(z);Ne.bindFramebuffer(D.READ_FRAMEBUFFER,Ng),Ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,Lg);for(let tn=0;tn<De;tn++)wr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,q,dt+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,q),At?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ai.__webglTexture,Ce,Xt+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ai.__webglTexture,Ce),q!==0?D.blitFramebuffer(Fe,Qe,Ee,we,Ue,wt,Ee,we,D.COLOR_BUFFER_BIT,D.NEAREST):At?D.copyTexSubImage3D(Le,Ce,Ue,wt,Xt+tn,Fe,Qe,Ee,we):D.copyTexSubImage2D(Le,Ce,Ue,wt,Fe,Qe,Ee,we);Ne.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Le,Ce,Ue,wt,Xt,Ee,we,De,St,cn,Ft.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,Ce,Ue,wt,Xt,Ee,we,De,St,Ft.data):D.texSubImage3D(Le,Ce,Ue,wt,Xt,Ee,we,De,St,cn,Ft):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ce,Ue,wt,Ee,we,St,cn,Ft.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ce,Ue,wt,Ft.width,Ft.height,St,Ft.data):D.texSubImage2D(D.TEXTURE_2D,Ce,Ue,wt,Ee,we,St,cn,Ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ki),Ce===0&&z.generateMipmaps&&D.generateMipmap(Le),Ne.unbindTexture()},this.initRenderTarget=function(C){x.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){k=0,F=0,X=null,Ne.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var db=["canvas"],zl=class n{constructor(e){this.elementRef=e;mh(()=>{this.render()})}networkData={nodes:[],edges:[]};canvasRef;scene;camera;renderer;nodes=[];edges=[];animationId;raycaster=new Ya;mouse=new _t;selectedNode;isDragging=!1;dragPlane=new Ln(new W(0,0,1),0);dragPoint=new W;ngOnInit(){this.initThreeScene()}ngOnDestroy(){this.dispose()}initThreeScene(){if(!this.canvasRef?.nativeElement)return;let e=this.canvasRef.nativeElement,t=e.clientWidth,i=e.clientHeight;this.scene=new Da,this.scene.background=new ut(16777215),this.camera=new pn(75,t/i,.1,1e3),this.camera.position.z=50,this.renderer=new Fl({antialias:!0,alpha:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement);let r=new ja(16777215,.8);r.position.set(5,5,5),this.scene.add(r);let a=new $a(16777215,.4);this.scene.add(a),this.buildNetwork(),window.addEventListener("resize",()=>this.onWindowResize()),e.addEventListener("mousedown",o=>this.onMouseDown(o)),e.addEventListener("mousemove",o=>this.onMouseMove(o)),e.addEventListener("mouseup",()=>this.onMouseUp()),e.addEventListener("dblclick",()=>this.resetView()),e.addEventListener("wheel",o=>this.onMouseWheel(o),{passive:!1}),this.animate()}buildNetwork(){if(!this.scene||this.networkData.nodes.length===0)return;let e=new Map,t=new Map,i=Math.max(20,this.networkData.nodes.length*2);this.networkData.nodes.forEach((r,a)=>{let o=Math.acos(-1+2*a/this.networkData.nodes.length),s=Math.sqrt(this.networkData.nodes.length*Math.PI)*o,l=i*Math.cos(s)*Math.sin(o),c=i*Math.sin(s)*Math.sin(o),d=i*Math.cos(o),h=new W(l,c,d);t.set(r.id,h);let u=r.size??2,f=new Ga(u,32,32),_=new ut(r.color??4734347),M=new Ha({color:_}),m=new Mn(f,M);m.position.copy(h),m.userData={nodeData:r},this.scene.add(m),this.nodes.push(m),e.set(r.id,m)}),this.networkData.edges.forEach(r=>{let a=t.get(r.source),o=t.get(r.target);if(a&&o){let s=new bn;s.setFromPoints([a,o]);let l=new ea({color:13421772,transparent:!0,opacity:.6}),c=new Ua(s,l);this.scene.add(c),this.edges.push(c)}}),this.fitCameraToScene()}animate=()=>{this.animationId=requestAnimationFrame(this.animate),this.renderer&&this.scene&&this.camera&&(this.isDragging||(this.scene.rotation.y+=5e-4),this.renderer.render(this.scene,this.camera))};onMouseDown(e){if(!this.renderer)return;let t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let i=this.raycaster.intersectObjects(this.nodes);i.length>0&&(this.selectedNode=i[0].object,this.isDragging=!0,this.selectedNode.material.emissive.setHex(16776960))}onMouseMove(e){if(!this.isDragging||!this.selectedNode||!this.renderer)return;let t=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.ray.intersectPlane(this.dragPlane,this.dragPoint),this.selectedNode.position.copy(this.dragPoint)}onMouseUp(){this.selectedNode&&this.selectedNode.material.emissive.setHex(0),this.isDragging=!1,this.selectedNode=void 0}onMouseWheel(e){e.preventDefault();let t=e.deltaY>0?1.1:.9;this.camera.position.multiplyScalar(t)}resetView(){this.fitCameraToScene(),this.scene.rotation.set(0,0,0)}fitCameraToScene(){if(!this.camera||this.nodes.length===0)return;let e=new ii;this.nodes.forEach(s=>e.expandByObject(s));let t=e.getSize(new W),i=Math.max(t.x,t.y,t.z),r=this.camera.fov*(Math.PI/180),a=Math.abs(i/2/Math.tan(r/2));a*=1.5;let o=e.getCenter(new W);this.camera.position.set(o.x,o.y,a),this.camera.lookAt(o)}onWindowResize(){if(!this.canvasRef?.nativeElement||!this.renderer)return;let e=this.canvasRef.nativeElement,t=e.clientWidth,i=e.clientHeight;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i)}render(){this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.nodes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.edges.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.renderer&&(this.renderer.dispose(),this.canvasRef?.nativeElement.removeChild(this.renderer.domElement)),window.removeEventListener("resize",()=>this.onWindowResize())}static \u0275fac=function(t){return new(t||n)(Kn(sh))};static \u0275cmp=je({type:n,selectors:[["app-network-graph-3d"]],viewQuery:function(t,i){if(t&1&&Pr(db,5),t&2){let r;Ir(r=Rr())&&(i.canvasRef=r.first)}},inputs:{networkData:"networkData"},decls:6,vars:0,consts:[["canvas",""],[1,"network-3d-container"],[1,"network-3d-canvas"],[1,"network-3d-controls"],[1,"text-muted"]],template:function(t,i){t&1&&(ce(0,"div",1),pt(1,"div",2,0),ce(3,"div",3)(4,"small",4),b(5," \u{1F5B1}\uFE0F Arraste para rotacionar | \u{1F50D} Scroll para zoom | \u2699\uFE0F Duplo clique para resetar "),ye()()())},dependencies:[Ye],styles:["[_nghost-%COMP%]{display:block}.network-3d-container[_ngcontent-%COMP%]{width:100%;height:500px;position:relative;border:1px solid var(--theme-line, #dee2e6);border-radius:4px;background:var(--theme-card-bg, #ffffff);overflow:hidden}.network-3d-canvas[_ngcontent-%COMP%]{width:100%;height:100%}.network-3d-controls[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:10px;background:#ffffffe6;padding:.5rem;border-radius:4px;font-size:.85rem;pointer-events:none}"]})};var ub=(n,e)=>e.id,hb=(n,e)=>e.key,pb=(n,e)=>e.label+e.year+e.value,fb=(n,e)=>e.label+e.x+e.y,mb=(n,e)=>e.label;function gb(n,e){if(n&1&&(w(0,"span",11),b(1),v()),n&2){let t=B(2);g(),H(t.totalWorks())}}function _b(n,e){if(n&1&&(w(0,"span",11),b(1),v()),n&2){let t=B(2);g(),H(t.coauthors.length)}}function xb(n,e){if(n&1&&(w(0,"span",11),b(1),v()),n&2){let t=B(2);g(),H(t.networkData.nodes.length)}}function vb(n,e){if(n&1&&(w(0,"span",11),b(1),v()),n&2){let t=B(2);g(),H(t.citationsGrantedItems().length)}}function yb(n,e){if(n&1){let t=ht();w(0,"button",10),Be("click",function(){let r=et(t).$implicit,a=B();return tt(a.setTab(r.id))}),b(1),L(2,"translate"),se(3,gb,2,1,"span",11)(4,_b,2,1,"span",11)(5,xb,2,1,"span",11)(6,vb,2,1,"span",11),v()}if(n&2){let t=e.$implicit,i=B();Ke("active",i.selectedTab()===t.id),ze("aria-selected",i.selectedTab()===t.id),g(),re(" ",V(2,5,t.label)," "),g(2),le(t.type==="works"?3:t.type==="coauthors"?4:t.type==="network"?5:t.type==="citationsGranted"?6:-1)}}function bb(n,e){if(n&1){let t=ht();w(0,"button",10),Be("click",function(){let r=et(t).$implicit,a=B(2);return tt(a.setWorkTab(r.key))}),b(1),L(2,"translate"),w(3,"span",11),b(4),v()()}if(n&2){let t=e.$implicit,i=B(2);Ke("active",i.selectedWorkTab()===t.key),ze("aria-selected",i.selectedWorkTab()===t.key),g(),re(" ",V(2,5,t.label)," "),g(3),H(t.items.length)}}function Mb(n,e){if(n&1&&(dn(),w(0,"rect",29)(1,"title"),b(2),L(3,"translate"),L(4,"translate"),L(5,"translate"),v()(),w(6,"text",30),b(7),v()),n&2){let t=e.$implicit;ze("x",t.barX)("y",t.barY)("width",t.barWidth)("height",t.barHeight)("fill",t.color),g(2),fh("",V(3,14,"author.summary.journal"),": ",t.label," | ",V(4,16,"author.summary.yearAxis"),": ",t.year," | ",V(5,18,"author.summary.volumeAxis"),": ",t.value),g(4),ze("x",t.barX+t.barWidth/2)("transform","rotate(-45 "+(t.barX+t.barWidth/2)+" 196)"),g(),re(" ",t.shortLabel," ")}}function Cb(n,e){if(n&1&&(w(0,"tr")(1,"td"),Ge(2,"span",31),b(3),v(),w(4,"td"),b(5),v(),w(6,"td"),b(7),v()()),n&2){let t=e.$implicit;g(2),ba("background",t.color),g(),re(" ",t.label," "),g(2),H(t.x),g(2),H(t.y)}}function wb(n,e){if(n&1&&(dn(),w(0,"path")(1,"title"),b(2),L(3,"translate"),L(4,"translate"),v()(),w(5,"text",32),b(6),v()),n&2){let t=e.$implicit;ze("d",t.d)("fill",t.color),g(2),ph(" ",t.label.startsWith("author.")?V(3,9,t.label):t.label," | ",V(4,11,"author.summary.frequency"),": ",t.value," | %: ",(t.percentage*100).toFixed(1)," "),g(3),ze("x",t.labelX)("y",t.labelY),g(),re(" ",t.percentText," ")}}function Sb(n,e){if(n&1&&(w(0,"div",17),L(1,"translate"),dn(),w(2,"svg",18),Ge(3,"line",19)(4,"line",20),rt(5,Mb,8,20,null,null,pb),v(),Zn(),w(7,"div",21)(8,"span"),b(9),L(10,"translate"),v(),w(11,"span"),b(12),L(13,"translate"),v()()(),w(14,"div",22)(15,"h4",23),b(16),L(17,"translate"),v(),w(18,"div",24)(19,"table",25)(20,"thead")(21,"tr")(22,"th"),b(23),L(24,"translate"),v(),w(25,"th"),b(26),L(27,"translate"),v(),w(28,"th"),b(29),L(30,"translate"),v()()(),w(31,"tbody"),rt(32,Cb,8,5,"tr",null,fb),v()()()(),w(34,"div",26)(35,"h4",23),b(36),L(37,"translate"),v(),w(38,"div",27),dn(),w(39,"svg",28),L(40,"translate"),rt(41,wb,7,13,null,null,mb),v()()()),n&2){let t=B(3);ze("aria-label",V(1,12,"author.summary.dispersionTitle")),g(5),at(t.chartBars()),g(4),Bn("",V(10,14,"author.summary.journals"),": ",t.chartBars().length),g(3),hh("",V(13,16,"author.summary.volumeAxis"),": ",t.dispersionYRange().min," - ",t.dispersionYRange().max),g(4),H(V(17,18,"author.summary.tableTitle")),g(7),H(V(24,20,"author.summary.journal")),g(3),H(V(27,22,"author.summary.yearAxis")),g(3),H(V(30,24,"author.summary.volumeAxis")),g(3),at(t.summaryRows()),g(4),H(V(37,26,"author.summary.pieTitle")),g(3),ze("aria-label",V(40,28,"author.summary.pieTitle")),g(2),at(t.pieArcs())}}function Tb(n,e){n&1&&(w(0,"p",16),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"author.summary.noData")))}function Eb(n,e){if(n&1&&(w(0,"section",13)(1,"div",14)(2,"div",15)(3,"small"),b(4),L(5,"translate"),v(),w(6,"strong"),b(7),v()(),w(8,"div",15)(9,"small"),b(10),L(11,"translate"),v(),w(12,"strong"),b(13),v()(),w(14,"div",15)(15,"small"),b(16),L(17,"translate"),v(),w(18,"strong"),b(19),v()()(),se(20,Sb,43,30)(21,Tb,3,3,"p",16),v()),n&2){let t=B(2);g(4),H(V(5,7,"author.summary.journals")),g(3),H(t.summaryTotals().journals),g(3),H(V(11,9,"author.summary.points")),g(3),H(t.summaryTotals().points),g(3),H(V(17,11,"author.summary.volume")),g(3),H(t.summaryTotals().volume),g(),le(t.chartBars().length>0?20:21)}}function Ab(n,e){n&1&&(w(0,"p",16),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"author.noRecords")))}function Pb(n,e){if(n&1&&Ge(0,"li",34),n&2){let t=e.$implicit;Me("innerHTML",t,Qi)}}function Ib(n,e){if(n&1&&(w(0,"ol",33),rt(1,Pb,1,1,"li",34,ya),v()),n&2){let t=B();g(),at(t.items)}}function Rb(n,e){n&1&&se(0,Ab,3,3,"p",16)(1,Ib,3,0,"ol",33),n&2&&le(e.items.length===0?0:1)}function kb(n,e){if(n&1){let t=ht();w(0,"div",6)(1,"div",12)(2,"button",10),Be("click",function(){et(t);let r=B();return tt(r.setWorkTab("summary"))}),b(3),L(4,"translate"),w(5,"span",11),b(6),v()(),rt(7,bb,5,7,"button",4,hb),v(),w(9,"div",5),se(10,Eb,22,13,"section",13)(11,Rb,2,1),v()()}if(n&2){let t,i=B();g(2),Ke("active",i.selectedWorkTab()==="summary"),ze("aria-selected",i.selectedWorkTab()==="summary"),g(),re(" ",V(4,6,"author.summary.label")," "),g(3),H(i.summaryTotals().points),g(),at(i.worksGroups()),g(3),le(i.selectedWorkTab()==="summary"?10:(t=i.activeWorkGroup())?11:-1,t)}}function Ob(n,e){if(n&1&&(w(0,"div",7),Ge(1,"app-coauthors-list",35),v()),n&2){let t=B();g(),Me("coauthors",t.coauthors)}}function Db(n,e){if(n&1&&(w(0,"div",8),Ge(1,"app-network-graph-3d",36),v()),n&2){let t=B();g(),Me("networkData",t.networkData)}}function Nb(n,e){n&1&&(w(0,"p",16),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"author.noRecords")))}function Lb(n,e){if(n&1&&Ge(0,"li",34),n&2){let t=e.$implicit;Me("innerHTML",t,Qi)}}function Fb(n,e){if(n&1&&(w(0,"ol",33),rt(1,Lb,1,1,"li",34,ya),v()),n&2){let t=B(2);g(),at(t.citationsGrantedItems())}}function Ub(n,e){if(n&1&&(w(0,"div",9),se(1,Nb,3,3,"p",16)(2,Fb,3,0,"ol",33),v()),n&2){let t=B();g(),le(t.citationsGrantedItems().length===0?1:2)}}var Vl=class n{groups=[];dataJour=null;coauthors=[];networkData={nodes:[],edges:[]};citationsGranted=[];selectedTab=qe("works");contentTabs=te(()=>[{id:"works",label:"author.bibliographic",type:"works",data:this.groups},{id:"coauthors",label:"author.coauthors.label",type:"coauthors",data:this.coauthors},{id:"network",label:"author.network.label",type:"network",data:this.networkData},{id:"citationsGranted",label:"author.citationsGranted.label",type:"citationsGranted",data:this.citationsGranted}]);totalWorks=te(()=>this.groups.reduce((e,t)=>e+t.items.length,0));activeTab=te(()=>this.contentTabs().find(e=>e.id===this.selectedTab()));worksTab=te(()=>this.contentTabs().find(e=>e.type==="works"));citationsGrantedTab=te(()=>this.contentTabs().find(e=>e.type==="citationsGranted"));worksGroups=te(()=>this.worksTab()?.data??[]);citationsGrantedItems=te(()=>this.citationsGrantedTab()?.data??[]);selectedWorkTab=qe("summary");activeWorkGroup=te(()=>{let e=this.selectedWorkTab();return e==="summary"?null:this.worksGroups().find(t=>t.key===e)??null});dispersionPoints=te(()=>this.parseDataJour(this.dataJour));dispersionXRange=te(()=>{let e=this.dispersionPoints();if(e.length===0)return{min:0,max:1};let t=e.map(a=>a.x),i=Math.min(...t),r=Math.max(...t);return i===r?{min:i-1,max:r+1}:{min:i,max:r}});dispersionYRange=te(()=>{let e=this.dispersionPoints();if(e.length===0)return{min:0,max:1};let t=e.map(a=>a.y),i=Math.min(...t),r=Math.max(...t);return i===r?{min:0,max:r+1}:{min:i,max:r}});summaryTotals=te(()=>{let e=this.dispersionPoints(),t=e.reduce((r,a)=>r+a.y,0);return{journals:new Set(e.map(r=>r.label)).size,points:e.length,volume:t}});chartBars=te(()=>{let s=[...this.dispersionPoints()].sort((f,_)=>_.y-f.y||f.x-_.x);if(s.length===0)return[];let l=Math.max(...s.map(f=>f.y),1),c=580,d=166,h=c/s.length,u=Math.max(6,Math.min(34,h*.72));return s.map((f,_)=>{let M=f.y/l*d,m=42+_*h+(h-u)/2,p=188-M;return{barX:m,barY:p,barWidth:u,barHeight:M,label:f.label,shortLabel:f.label.length>22?`${f.label.slice(0,20)}...`:f.label,year:f.x,value:f.y,color:this.colorForLabel(f.label)}})});summaryRows=te(()=>[...this.dispersionPoints()].sort((e,t)=>t.y-e.y||e.x-t.x).map(e=>vn(gn({},e),{color:this.colorForLabel(e.label)})));pieSlices=te(()=>{let e=new Map;for(let l of this.dispersionPoints())e.set(l.label,(e.get(l.label)??0)+l.y);let t=[...e.values()].reduce((l,c)=>l+c,0);if(t<=0)return[];let i=[],r=0;for(let[l,c]of e.entries()){let d=c/t;if(d<.02){r+=c;continue}i.push({label:l,value:c,percentage:d,color:this.colorForLabel(l)})}let a=[...i].sort((l,c)=>c.value-l.value),o=a.slice(0,10),s=a.slice(10).reduce((l,c)=>l+c.value,0);return r+=s,r>0&&o.push({label:"author.summary.others",value:r,percentage:r/t,color:"#9aa3ad"}),o});pieArcs=te(()=>{let e=this.pieSlices();if(e.length===0)return[];let t=100,i=100,r=84,a=52,o=-90;return e.map(s=>{let l=s.percentage*360,c=o,d=o+l;o=d;let h=this.polarToCartesian(t,i,r,d),u=this.polarToCartesian(t,i,r,c),f=l>180?1:0,_=c+l/2,M=this.polarToCartesian(t,i,a,_);return vn(gn({},s),{d:`M ${t} ${i} L ${h.x} ${h.y} A ${r} ${r} 0 ${f} 0 ${u.x} ${u.y} Z`,labelX:M.x,labelY:M.y,percentText:`${(s.percentage*100).toFixed(1)}%`})})});setTab(e){(e==="works"||e==="coauthors"||e==="network"||e==="citationsGranted")&&this.selectedTab.set(e)}setWorkTab(e){this.selectedWorkTab.set(e)}parseDataJour(e){let t=this.extractRawDataJourPoints(e).map(r=>vn(gn({},r),{x:Number(r.x),y:Number(r.y)})).filter(r=>Number.isFinite(r.x)&&Number.isFinite(r.y)&&r.y>0);if(t.length===0)return[];let i=Math.max(...t.map(r=>r.y));return t.map(r=>vn(gn({},r),{radius:3+(i>0?r.y/i*5:0)}))}extractRawDataJourPoints(e){if(!e)return[];if(Array.isArray(e))return e.map((t,i)=>{if(!t||typeof t!="object")return null;let r=t,a=r.x??r.year??r.ano??r.Year??r.Ano,o=r.y??r.count??r.total??r.qtd??r.value??r.freq,s=r.label??r.journal??r.periodico??r.source??`item ${i+1}`;return{x:Number(a),y:Number(o),label:String(s)}}).filter(t=>t!==null);if(typeof e=="object"){let t=e,i=Array.isArray(t.labels)?t.labels:[],r=Array.isArray(t.data)?t.data:[];if(i.length>0&&r.length>0)return r.map((o,s)=>{let l=String(i[s]??`item ${s+1}`),c=Number(l);return{x:Number.isFinite(c)?c:s+1,y:Number(o),label:l}});let a=[];for(let[o,s]of Object.entries(t)){let l=Number(o),c=Number(s);Number.isFinite(l)&&Number.isFinite(c)&&a.push({x:l,y:c,label:o})}return a}return[]}colorForLabel(e){let t=["#c24d00","#d66a1a","#e9872f","#f2a648","#f9bf6b","#ffcf86","#ffdeab"],i=[...e].reduce((r,a)=>r+a.charCodeAt(0),0);return t[i%t.length]}polarToCartesian(e,t,i,r){let a=r*Math.PI/180;return{x:e+i*Math.cos(a),y:t+i*Math.sin(a)}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-author-works"]],inputs:{groups:"groups",dataJour:"dataJour",coauthors:"coauthors",networkData:"networkData",citationsGranted:"citationsGranted"},decls:13,vars:7,consts:[["aria-label","Producoes bibliograficas e colaboracoes",1,"author-works","mt-4"],[1,"author-works-header","mb-3"],[1,"h6","mb-0"],["role","tablist",1,"nav","nav-tabs"],["type","button","role","tab",1,"nav-link",3,"active"],[1,"tab-content","mt-2"],[1,"works-tab-content"],[1,"coauthors-tab-content","mt-2"],[1,"network-tab-content","mt-2"],[1,"citations-granted-tab-content","mt-2"],["type","button","role","tab",1,"nav-link",3,"click"],[1,"badge","badge-menu-outline","ms-1"],["role","tablist",1,"nav","nav-tabs","nav-secondary"],["aria-label","Resumo da producao",1,"summary-panel"],[1,"summary-metrics","mb-2"],[1,"summary-metric-item"],[1,"works-empty","mb-0"],["role","img",1,"dispersion-chart-wrap"],["viewBox","0 0 640 260","preserveAspectRatio","none",1,"dispersion-chart"],["x1","42","y1","188","x2","622","y2","188",1,"axis-line"],["x1","42","y1","22","x2","42","y2","188",1,"axis-line"],[1,"dispersion-axis-labels"],[1,"summary-table-wrap"],[1,"h6","mb-2"],[1,"summary-table-scroll"],[1,"summary-table"],[1,"summary-pie-wrap"],[1,"summary-pie-layout"],["viewBox","0 0 200 200","role","img",1,"summary-pie"],[1,"dispersion-bar"],["y","196","text-anchor","end",1,"dispersion-bar-label"],[1,"summary-table-swatch"],["text-anchor","middle","dominant-baseline","middle",1,"summary-pie-percent"],[1,"works-list","mb-0"],[3,"innerHTML"],[3,"coauthors"],[3,"networkData"]],template:function(t,i){t&1&&(w(0,"section",0)(1,"div",1)(2,"h3",2),b(3),L(4,"translate"),v()(),w(5,"div",3),rt(6,yb,7,7,"button",4,ub),v(),w(8,"div",5),se(9,kb,12,8,"div",6),se(10,Ob,2,1,"div",7),se(11,Db,2,1,"div",8),se(12,Ub,3,1,"div",9),v()()),t&2&&(g(3),H(V(4,5,"author.bibliographic")),g(3),at(i.contentTabs()),g(3),le(i.selectedTab()==="works"?9:-1),g(),le(i.selectedTab()==="coauthors"?10:-1),g(),le(i.selectedTab()==="network"?11:-1),g(),le(i.selectedTab()==="citationsGranted"?12:-1))},dependencies:[Ye,Vt,zo,zl,$t],styles:[".author-works[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.7rem;padding:.9rem}.author-works-header[_ngcontent-%COMP%]{align-items:center;display:flex;gap:.6rem;justify-content:space-between}.nav-tabs[_ngcontent-%COMP%]{border-bottom:2px solid var(--theme-line);display:flex;gap:.3rem}.nav-tabs.nav-secondary[_ngcontent-%COMP%]{border-bottom:1px solid var(--theme-line);margin-left:1rem;padding-left:.5rem}.nav-tabs.nav-secondary[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:.85rem}.nav-tabs.nav-secondary[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{border-bottom:2px solid var(--theme-link);color:var(--theme-link);font-weight:600;margin-bottom:-1px;padding-bottom:.35rem}.nav-link[_ngcontent-%COMP%]{background:transparent;border:none;color:var(--theme-ink);cursor:pointer;font-size:.9rem;padding:.5rem .8rem;text-decoration:none;transition:all .2s ease}.nav-link[_ngcontent-%COMP%]:hover{color:var(--theme-link);background:var(--theme-sand);border-radius:.3rem .3rem 0 0}.nav-link.active[_ngcontent-%COMP%]{background:var(--theme-sand);border-bottom:2px solid var(--theme-link);color:var(--theme-link);font-weight:600;margin-bottom:-2px;padding-bottom:.5rem}.tab-content[_ngcontent-%COMP%]{padding:.6rem 0}.works-tab-content[_ngcontent-%COMP%], .coauthors-tab-content[_ngcontent-%COMP%], .network-tab-content[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}.works-list[_ngcontent-%COMP%]{display:grid;gap:.45rem;padding-left:1.15rem}.works-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.45}.works-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{word-break:break-word}.works-empty[_ngcontent-%COMP%]{color:var(--theme-hint);padding:.5rem 0}.summary-panel[_ngcontent-%COMP%]{display:grid;gap:.7rem}.summary-metrics[_ngcontent-%COMP%]{display:grid;gap:.55rem;grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.summary-metric-item[_ngcontent-%COMP%]{background:#ffffff59;border:1px solid var(--theme-line);border-radius:.45rem;display:grid;gap:.1rem;padding:.5rem .6rem}.summary-metric-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--theme-hint)}.dispersion-chart-wrap[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:.45rem;padding:.55rem}.dispersion-chart[_ngcontent-%COMP%]{display:block;height:250px;width:100%}.axis-line[_ngcontent-%COMP%]{stroke:var(--theme-line);stroke-width:1}.dispersion-bar[_ngcontent-%COMP%]{opacity:.85;transition:opacity .2s ease}.dispersion-bar[_ngcontent-%COMP%]:hover{opacity:1}.dispersion-bar-label[_ngcontent-%COMP%]{fill:var(--theme-hint);font-size:.42rem;letter-spacing:-.01em}.dispersion-axis-labels[_ngcontent-%COMP%]{color:var(--theme-hint);display:flex;font-size:.8rem;justify-content:space-between;margin-top:.35rem}.summary-table-wrap[_ngcontent-%COMP%], .summary-pie-wrap[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:.45rem;padding:.55rem}.summary-table-scroll[_ngcontent-%COMP%]{overflow-x:auto}.summary-table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:.88rem;width:100%}.summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid var(--theme-line);padding:.35rem .4rem;text-align:left}.summary-table-swatch[_ngcontent-%COMP%]{border-radius:50%;display:inline-block;height:.65rem;margin-right:.35rem;width:.65rem}.summary-pie-layout[_ngcontent-%COMP%]{align-items:start;display:grid;gap:.8rem;grid-template-columns:1fr;justify-items:start}.summary-pie[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:50%;height:240px;width:240px}.summary-pie[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke:#ffffff8c;stroke-width:1;transition:opacity .2s ease}.summary-pie[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:hover{opacity:.85}.summary-pie-percent[_ngcontent-%COMP%]{fill:#fff;font-size:.6rem;font-weight:700;pointer-events:none}@media (max-width: 700px){.dispersion-bar-label[_ngcontent-%COMP%]{font-size:.38rem}.dispersion-axis-labels[_ngcontent-%COMP%]{flex-direction:column;gap:.25rem}.summary-pie-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:start}}.badge-menu-outline[_ngcontent-%COMP%]{background-color:transparent;border:1px solid var(--theme-sand);border-radius:999px;color:#7f7f7f}"]})};function gr(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function du(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Gl(n){let e,t,i;n.length!==2?(e=gr,t=(s,l)=>gr(n(s),l),i=(s,l)=>n(s)-l):(e=n===gr||n===du?n:Bb,t=n,i=n);function r(s,l,c=0,d=s.length){if(c<d){if(e(l,l)!==0)return d;do{let h=c+d>>>1;t(s[h],l)<0?c=h+1:d=h}while(c<d)}return c}function a(s,l,c=0,d=s.length){if(c<d){if(e(l,l)!==0)return d;do{let h=c+d>>>1;t(s[h],l)<=0?c=h+1:d=h}while(c<d)}return c}function o(s,l,c=0,d=s.length){let h=r(s,l,c,d-1);return h>c&&i(s[h-1],l)>-i(s[h],l)?h-1:h}return{left:r,center:o,right:a}}function Bb(){return 0}function uu(n){return n===null?NaN:+n}var yf=Gl(gr),bf=yf.right,zb=yf.left,Vb=Gl(uu).center,hu=bf;var Gb=Math.sqrt(50),Hb=Math.sqrt(10),Wb=Math.sqrt(2);function Hl(n,e,t){let i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),a=i/Math.pow(10,r),o=a>=Gb?10:a>=Hb?5:a>=Wb?2:1,s,l,c;return r<0?(c=Math.pow(10,-r)/o,s=Math.round(n*c),l=Math.round(e*c),s/c<n&&++s,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*o,s=Math.round(n/c),l=Math.round(e/c),s*c<n&&++s,l*c>e&&--l),l<s&&.5<=t&&t<2?Hl(n,e,t*2):[s,l,c]}function Wl(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];let i=e<n,[r,a,o]=i?Hl(e,n,t):Hl(n,e,t);if(!(a>=r))return[];let s=a-r+1,l=new Array(s);if(i)if(o<0)for(let c=0;c<s;++c)l[c]=(a-c)/-o;else for(let c=0;c<s;++c)l[c]=(a-c)*o;else if(o<0)for(let c=0;c<s;++c)l[c]=(r+c)/-o;else for(let c=0;c<s;++c)l[c]=(r+c)*o;return l}function so(n,e,t){return e=+e,n=+n,t=+t,Hl(n,e,t)[2]}function pu(n,e,t){e=+e,n=+n,t=+t;let i=e<n,r=i?so(e,n,t):so(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function Xl(n,e){let t;if(e===void 0)for(let i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function ql(n,e){let t;if(e===void 0)for(let i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}var Xb={value:()=>{}};function Cf(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new jl(t)}function jl(n){this._=n}function qb(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}jl.prototype=Cf.prototype={constructor:jl,on:function(n,e){var t=this._,i=qb(n+"",t),r,a=-1,o=i.length;if(arguments.length<2){for(;++a<o;)if((r=(n=i[a]).type)&&(r=jb(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<o;)if(r=(n=i[a]).type)t[r]=Mf(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Mf(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new jl(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,a;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],i=0,r=a.length;i<r;++i)a[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,a=i.length;r<a;++r)i[r].value.apply(e,t)}};function jb(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Mf(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=Xb,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var fu=Cf;var $l="http://www.w3.org/1999/xhtml",mu={svg:"http://www.w3.org/2000/svg",xhtml:$l,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Si(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),mu.hasOwnProperty(e)?{space:mu[e],local:n}:n}function $b(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===$l&&e.documentElement.namespaceURI===$l?e.createElement(n):e.createElementNS(t,n)}}function Yb(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Yl(n){var e=Si(n);return(e.local?Yb:$b)(e)}function Jb(){}function _r(n){return n==null?Jb:function(){return this.querySelector(n)}}function wf(n){typeof n!="function"&&(n=_r(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var a=e[r],o=a.length,s=i[r]=new Array(o),l,c,d=0;d<o;++d)(l=a[d])&&(c=n.call(l,l.__data__,d,a))&&("__data__"in l&&(c.__data__=l.__data__),s[d]=c);return new Ht(i,this._parents)}function gu(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Zb(){return[]}function lo(n){return n==null?Zb:function(){return this.querySelectorAll(n)}}function Kb(n){return function(){return gu(n.apply(this,arguments))}}function Sf(n){typeof n=="function"?n=Kb(n):n=lo(n);for(var e=this._groups,t=e.length,i=[],r=[],a=0;a<t;++a)for(var o=e[a],s=o.length,l,c=0;c<s;++c)(l=o[c])&&(i.push(n.call(l,l.__data__,c,o)),r.push(l));return new Ht(i,r)}function co(n){return function(){return this.matches(n)}}function Jl(n){return function(e){return e.matches(n)}}var Qb=Array.prototype.find;function e1(n){return function(){return Qb.call(this.children,n)}}function t1(){return this.firstElementChild}function Tf(n){return this.select(n==null?t1:e1(typeof n=="function"?n:Jl(n)))}var n1=Array.prototype.filter;function i1(){return Array.from(this.children)}function r1(n){return function(){return n1.call(this.children,n)}}function Ef(n){return this.selectAll(n==null?i1:r1(typeof n=="function"?n:Jl(n)))}function Af(n){typeof n!="function"&&(n=co(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var a=e[r],o=a.length,s=i[r]=[],l,c=0;c<o;++c)(l=a[c])&&n.call(l,l.__data__,c,a)&&s.push(l);return new Ht(i,this._parents)}function Zl(n){return new Array(n.length)}function Pf(){return new Ht(this._enter||this._groups.map(Zl),this._parents)}function uo(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}uo.prototype={constructor:uo,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function If(n){return function(){return n}}function a1(n,e,t,i,r,a){for(var o=0,s,l=e.length,c=a.length;o<c;++o)(s=e[o])?(s.__data__=a[o],i[o]=s):t[o]=new uo(n,a[o]);for(;o<l;++o)(s=e[o])&&(r[o]=s)}function o1(n,e,t,i,r,a,o){var s,l,c=new Map,d=e.length,h=a.length,u=new Array(d),f;for(s=0;s<d;++s)(l=e[s])&&(u[s]=f=o.call(l,l.__data__,s,e)+"",c.has(f)?r[s]=l:c.set(f,l));for(s=0;s<h;++s)f=o.call(n,a[s],s,a)+"",(l=c.get(f))?(i[s]=l,l.__data__=a[s],c.delete(f)):t[s]=new uo(n,a[s]);for(s=0;s<d;++s)(l=e[s])&&c.get(u[s])===l&&(r[s]=l)}function s1(n){return n.__data__}function Rf(n,e){if(!arguments.length)return Array.from(this,s1);var t=e?o1:a1,i=this._parents,r=this._groups;typeof n!="function"&&(n=If(n));for(var a=r.length,o=new Array(a),s=new Array(a),l=new Array(a),c=0;c<a;++c){var d=i[c],h=r[c],u=h.length,f=l1(n.call(d,d&&d.__data__,c,i)),_=f.length,M=s[c]=new Array(_),m=o[c]=new Array(_),p=l[c]=new Array(u);t(d,h,M,m,p,f,e);for(var S=0,A=0,T,R;S<_;++S)if(T=M[S]){for(S>=A&&(A=S+1);!(R=m[A])&&++A<_;);T._next=R||null}}return o=new Ht(o,i),o._enter=s,o._exit=l,o}function l1(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function kf(){return new Ht(this._exit||this._groups.map(Zl),this._parents)}function Of(n,e,t){var i=this.enter(),r=this,a=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?a.remove():t(a),i&&r?i.merge(r).order():r}function Df(n){for(var e=n.selection?n.selection():n,t=this._groups,i=e._groups,r=t.length,a=i.length,o=Math.min(r,a),s=new Array(r),l=0;l<o;++l)for(var c=t[l],d=i[l],h=c.length,u=s[l]=new Array(h),f,_=0;_<h;++_)(f=c[_]||d[_])&&(u[_]=f);for(;l<r;++l)s[l]=t[l];return new Ht(s,this._parents)}function Nf(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var i=n[e],r=i.length-1,a=i[r],o;--r>=0;)(o=i[r])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Lf(n){n||(n=c1);function e(h,u){return h&&u?n(h.__data__,u.__data__):!h-!u}for(var t=this._groups,i=t.length,r=new Array(i),a=0;a<i;++a){for(var o=t[a],s=o.length,l=r[a]=new Array(s),c,d=0;d<s;++d)(c=o[d])&&(l[d]=c);l.sort(e)}return new Ht(r,this._parents).order()}function c1(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function Ff(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Uf(){return Array.from(this)}function Bf(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,a=i.length;r<a;++r){var o=i[r];if(o)return o}return null}function zf(){let n=0;for(let e of this)++n;return n}function Vf(){return!this.node()}function Gf(n){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],a=0,o=r.length,s;a<o;++a)(s=r[a])&&n.call(s,s.__data__,a,r);return this}function d1(n){return function(){this.removeAttribute(n)}}function u1(n){return function(){this.removeAttributeNS(n.space,n.local)}}function h1(n,e){return function(){this.setAttribute(n,e)}}function p1(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function f1(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function m1(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function Hf(n,e){var t=Si(n);if(arguments.length<2){var i=this.node();return t.local?i.getAttributeNS(t.space,t.local):i.getAttribute(t)}return this.each((e==null?t.local?u1:d1:typeof e=="function"?t.local?m1:f1:t.local?p1:h1)(t,e))}function Kl(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function g1(n){return function(){this.style.removeProperty(n)}}function _1(n,e,t){return function(){this.style.setProperty(n,e,t)}}function x1(n,e,t){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,t)}}function Wf(n,e,t){return arguments.length>1?this.each((e==null?g1:typeof e=="function"?x1:_1)(n,e,t??"")):ji(this.node(),n)}function ji(n,e){return n.style.getPropertyValue(e)||Kl(n).getComputedStyle(n,null).getPropertyValue(e)}function v1(n){return function(){delete this[n]}}function y1(n,e){return function(){this[n]=e}}function b1(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function Xf(n,e){return arguments.length>1?this.each((e==null?v1:typeof e=="function"?b1:y1)(n,e)):this.node()[n]}function qf(n){return n.trim().split(/^|\s+/)}function _u(n){return n.classList||new jf(n)}function jf(n){this._node=n,this._names=qf(n.getAttribute("class")||"")}jf.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function $f(n,e){for(var t=_u(n),i=-1,r=e.length;++i<r;)t.add(e[i])}function Yf(n,e){for(var t=_u(n),i=-1,r=e.length;++i<r;)t.remove(e[i])}function M1(n){return function(){$f(this,n)}}function C1(n){return function(){Yf(this,n)}}function w1(n,e){return function(){(e.apply(this,arguments)?$f:Yf)(this,n)}}function Jf(n,e){var t=qf(n+"");if(arguments.length<2){for(var i=_u(this.node()),r=-1,a=t.length;++r<a;)if(!i.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?w1:e?M1:C1)(t,e))}function S1(){this.textContent=""}function T1(n){return function(){this.textContent=n}}function E1(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function Zf(n){return arguments.length?this.each(n==null?S1:(typeof n=="function"?E1:T1)(n)):this.node().textContent}function A1(){this.innerHTML=""}function P1(n){return function(){this.innerHTML=n}}function I1(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function Kf(n){return arguments.length?this.each(n==null?A1:(typeof n=="function"?I1:P1)(n)):this.node().innerHTML}function R1(){this.nextSibling&&this.parentNode.appendChild(this)}function Qf(){return this.each(R1)}function k1(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function em(){return this.each(k1)}function tm(n){var e=typeof n=="function"?n:Yl(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function O1(){return null}function nm(n,e){var t=typeof n=="function"?n:Yl(n),i=e==null?O1:typeof e=="function"?e:_r(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),i.apply(this,arguments)||null)})}function D1(){var n=this.parentNode;n&&n.removeChild(this)}function im(){return this.each(D1)}function N1(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function L1(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function rm(n){return this.select(n?L1:N1)}function am(n){return arguments.length?this.property("__data__",n):this.node().__data__}function F1(n){return function(e){n.call(this,e,this.__data__)}}function U1(n){return n.trim().split(/^|\s+/).map(function(e){var t="",i=e.indexOf(".");return i>=0&&(t=e.slice(i+1),e=e.slice(0,i)),{type:e,name:t}})}function B1(n){return function(){var e=this.__on;if(e){for(var t=0,i=-1,r=e.length,a;t<r;++t)a=e[t],(!n.type||a.type===n.type)&&a.name===n.name?this.removeEventListener(a.type,a.listener,a.options):e[++i]=a;++i?e.length=i:delete this.__on}}}function z1(n,e,t){return function(){var i=this.__on,r,a=F1(e);if(i){for(var o=0,s=i.length;o<s;++o)if((r=i[o]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=a,r.options=t),r.value=e;return}}this.addEventListener(n.type,a,t),r={type:n.type,name:n.name,value:e,listener:a,options:t},i?i.push(r):this.__on=[r]}}function om(n,e,t){var i=U1(n+""),r,a=i.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,c=s.length,d;l<c;++l)for(r=0,d=s[l];r<a;++r)if((o=i[r]).type===d.type&&o.name===d.name)return d.value}return}for(s=e?z1:B1,r=0;r<a;++r)this.each(s(i[r],e,t));return this}function sm(n,e,t){var i=Kl(n),r=i.CustomEvent;typeof r=="function"?r=new r(e,t):(r=i.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),n.dispatchEvent(r)}function V1(n,e){return function(){return sm(this,n,e)}}function G1(n,e){return function(){return sm(this,n,e.apply(this,arguments))}}function lm(n,e){return this.each((typeof e=="function"?G1:V1)(n,e))}function*cm(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,a=i.length,o;r<a;++r)(o=i[r])&&(yield o)}var xu=[null];function Ht(n,e){this._groups=n,this._parents=e}function dm(){return new Ht([[document.documentElement]],xu)}function H1(){return this}Ht.prototype=dm.prototype={constructor:Ht,select:wf,selectAll:Sf,selectChild:Tf,selectChildren:Ef,filter:Af,data:Rf,enter:Pf,exit:kf,join:Of,merge:Df,selection:H1,order:Nf,sort:Lf,call:Ff,nodes:Uf,node:Bf,size:zf,empty:Vf,each:Gf,attr:Hf,style:Wf,property:Xf,classed:Jf,text:Zf,html:Kf,raise:Qf,lower:em,append:tm,insert:nm,remove:im,clone:rm,datum:am,on:om,dispatch:lm,[Symbol.iterator]:cm};var Ti=dm;function vu(n){return typeof n=="string"?new Ht([[document.querySelector(n)]],[document.documentElement]):new Ht([[n]],xu)}function Ql(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function yu(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function fo(){}var ho=.7,nc=1/ho,ca="\\s*([+-]?\\d+)\\s*",po="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ci="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",W1=/^#([0-9a-f]{3,8})$/,X1=new RegExp(`^rgb\\(${ca},${ca},${ca}\\)$`),q1=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),j1=new RegExp(`^rgba\\(${ca},${ca},${ca},${po}\\)$`),$1=new RegExp(`^rgba\\(${ci},${ci},${ci},${po}\\)$`),Y1=new RegExp(`^hsl\\(${po},${ci},${ci}\\)$`),J1=new RegExp(`^hsla\\(${po},${ci},${ci},${po}\\)$`),um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ql(fo,Yn,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:hm,formatHex:hm,formatHex8:Z1,formatHsl:K1,formatRgb:pm,toString:pm});function hm(){return this.rgb().formatHex()}function Z1(){return this.rgb().formatHex8()}function K1(){return vm(this).formatHsl()}function pm(){return this.rgb().formatRgb()}function Yn(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=W1.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?fm(e):t===3?new wn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?ec(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?ec(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=X1.exec(n))?new wn(e[1],e[2],e[3],1):(e=q1.exec(n))?new wn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=j1.exec(n))?ec(e[1],e[2],e[3],e[4]):(e=$1.exec(n))?ec(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Y1.exec(n))?_m(e[1],e[2]/100,e[3]/100,1):(e=J1.exec(n))?_m(e[1],e[2]/100,e[3]/100,e[4]):um.hasOwnProperty(n)?fm(um[n]):n==="transparent"?new wn(NaN,NaN,NaN,0):null}function fm(n){return new wn(n>>16&255,n>>8&255,n&255,1)}function ec(n,e,t,i){return i<=0&&(n=e=t=NaN),new wn(n,e,t,i)}function Q1(n){return n instanceof fo||(n=Yn(n)),n?(n=n.rgb(),new wn(n.r,n.g,n.b,n.opacity)):new wn}function da(n,e,t,i){return arguments.length===1?Q1(n):new wn(n,e,t,i??1)}function wn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Ql(wn,da,yu(fo,{brighter(n){return n=n==null?nc:Math.pow(nc,n),new wn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?ho:Math.pow(ho,n),new wn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new wn(vr(this.r),vr(this.g),vr(this.b),ic(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mm,formatHex:mm,formatHex8:eM,formatRgb:gm,toString:gm}));function mm(){return`#${xr(this.r)}${xr(this.g)}${xr(this.b)}`}function eM(){return`#${xr(this.r)}${xr(this.g)}${xr(this.b)}${xr((isNaN(this.opacity)?1:this.opacity)*255)}`}function gm(){let n=ic(this.opacity);return`${n===1?"rgb(":"rgba("}${vr(this.r)}, ${vr(this.g)}, ${vr(this.b)}${n===1?")":`, ${n})`}`}function ic(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function vr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function xr(n){return n=vr(n),(n<16?"0":"")+n.toString(16)}function _m(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new $n(n,e,t,i)}function vm(n){if(n instanceof $n)return new $n(n.h,n.s,n.l,n.opacity);if(n instanceof fo||(n=Yn(n)),!n)return new $n;if(n instanceof $n)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),a=Math.max(e,t,i),o=NaN,s=a-r,l=(a+r)/2;return s?(e===a?o=(t-i)/s+(t<i)*6:t===a?o=(i-e)/s+2:o=(e-t)/s+4,s/=l<.5?a+r:2-a-r,o*=60):s=l>0&&l<1?0:o,new $n(o,s,l,n.opacity)}function ym(n,e,t,i){return arguments.length===1?vm(n):new $n(n,e,t,i??1)}function $n(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Ql($n,ym,yu(fo,{brighter(n){return n=n==null?nc:Math.pow(nc,n),new $n(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?ho:Math.pow(ho,n),new $n(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new wn(bu(n>=240?n-240:n+120,r,i),bu(n,r,i),bu(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new $n(xm(this.h),tc(this.s),tc(this.l),ic(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let n=ic(this.opacity);return`${n===1?"hsl(":"hsla("}${xm(this.h)}, ${tc(this.s)*100}%, ${tc(this.l)*100}%${n===1?")":`, ${n})`}`}}));function xm(n){return n=(n||0)%360,n<0?n+360:n}function tc(n){return Math.max(0,Math.min(1,n||0))}function bu(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}function Mu(n,e,t,i,r){var a=n*n,o=a*n;return((1-3*n+3*a-o)*e+(4-6*a+3*o)*t+(1+3*n+3*a-3*o)*i+o*r)/6}function bm(n){var e=n.length-1;return function(t){var i=t<=0?t=0:t>=1?(t=1,e-1):Math.floor(t*e),r=n[i],a=n[i+1],o=i>0?n[i-1]:2*r-a,s=i<e-1?n[i+2]:2*a-r;return Mu((t-i/e)*e,o,r,a,s)}}function Mm(n){var e=n.length;return function(t){var i=Math.floor(((t%=1)<0?++t:t)*e),r=n[(i+e-1)%e],a=n[i%e],o=n[(i+1)%e],s=n[(i+2)%e];return Mu((t-i/e)*e,r,a,o,s)}}var mo=n=>()=>n;function tM(n,e){return function(t){return n+t*e}}function nM(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function Cm(n){return(n=+n)==1?rc:function(e,t){return t-e?nM(e,t,n):mo(isNaN(e)?t:e)}}function rc(n,e){var t=e-n;return t?tM(n,t):mo(isNaN(n)?e:n)}var yr=(function n(e){var t=Cm(e);function i(r,a){var o=t((r=da(r)).r,(a=da(a)).r),s=t(r.g,a.g),l=t(r.b,a.b),c=rc(r.opacity,a.opacity);return function(d){return r.r=o(d),r.g=s(d),r.b=l(d),r.opacity=c(d),r+""}}return i.gamma=n,i})(1);function wm(n){return function(e){var t=e.length,i=new Array(t),r=new Array(t),a=new Array(t),o,s;for(o=0;o<t;++o)s=da(e[o]),i[o]=s.r||0,r[o]=s.g||0,a[o]=s.b||0;return i=n(i),r=n(r),a=n(a),s.opacity=1,function(l){return s.r=i(l),s.g=r(l),s.b=a(l),s+""}}}var iM=wm(bm),rM=wm(Mm);function Sm(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(a){for(r=0;r<t;++r)i[r]=n[r]*(1-a)+e[r]*a;return i}}function Tm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Em(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),a=new Array(t),o;for(o=0;o<i;++o)r[o]=br(n[o],e[o]);for(;o<t;++o)a[o]=e[o];return function(s){for(o=0;o<i;++o)a[o]=r[o](s);return a}}function Am(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function sn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function Pm(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=br(n[r],e[r]):i[r]=e[r];return function(a){for(r in t)i[r]=t[r](a);return i}}var wu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cu=new RegExp(wu.source,"g");function aM(n){return function(){return n}}function oM(n){return function(e){return n(e)+""}}function go(n,e){var t=wu.lastIndex=Cu.lastIndex=0,i,r,a,o=-1,s=[],l=[];for(n=n+"",e=e+"";(i=wu.exec(n))&&(r=Cu.exec(e));)(a=r.index)>t&&(a=e.slice(t,a),s[o]?s[o]+=a:s[++o]=a),(i=i[0])===(r=r[0])?s[o]?s[o]+=r:s[++o]=r:(s[++o]=null,l.push({i:o,x:sn(i,r)})),t=Cu.lastIndex;return t<e.length&&(a=e.slice(t),s[o]?s[o]+=a:s[++o]=a),s.length<2?l[0]?oM(l[0].x):aM(e):(e=l.length,function(c){for(var d=0,h;d<e;++d)s[(h=l[d]).i]=h.x(c);return s.join("")})}function br(n,e){var t=typeof e,i;return e==null||t==="boolean"?mo(e):(t==="number"?sn:t==="string"?(i=Yn(e))?(e=i,yr):go:e instanceof Yn?yr:e instanceof Date?Am:Tm(e)?Sm:Array.isArray(e)?Em:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Pm:sn)(n,e)}function Su(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var Im=180/Math.PI,ac={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Tu(n,e,t,i,r,a){var o,s,l;return(o=Math.sqrt(n*n+e*e))&&(n/=o,e/=o),(l=n*t+e*i)&&(t-=n*l,i-=e*l),(s=Math.sqrt(t*t+i*i))&&(t/=s,i/=s,l/=s),n*i<e*t&&(n=-n,e=-e,l=-l,o=-o),{translateX:r,translateY:a,rotate:Math.atan2(e,n)*Im,skewX:Math.atan(l)*Im,scaleX:o,scaleY:s}}var oc;function Rm(n){let e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?ac:Tu(e.a,e.b,e.c,e.d,e.e,e.f)}function km(n){return n==null?ac:(oc||(oc=document.createElementNS("http://www.w3.org/2000/svg","g")),oc.setAttribute("transform",n),(n=oc.transform.baseVal.consolidate())?(n=n.matrix,Tu(n.a,n.b,n.c,n.d,n.e,n.f)):ac)}function Om(n,e,t,i){function r(c){return c.length?c.pop()+" ":""}function a(c,d,h,u,f,_){if(c!==h||d!==u){var M=f.push("translate(",null,e,null,t);_.push({i:M-4,x:sn(c,h)},{i:M-2,x:sn(d,u)})}else(h||u)&&f.push("translate("+h+e+u+t)}function o(c,d,h,u){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),u.push({i:h.push(r(h)+"rotate(",null,i)-2,x:sn(c,d)})):d&&h.push(r(h)+"rotate("+d+i)}function s(c,d,h,u){c!==d?u.push({i:h.push(r(h)+"skewX(",null,i)-2,x:sn(c,d)}):d&&h.push(r(h)+"skewX("+d+i)}function l(c,d,h,u,f,_){if(c!==h||d!==u){var M=f.push(r(f)+"scale(",null,",",null,")");_.push({i:M-4,x:sn(c,h)},{i:M-2,x:sn(d,u)})}else(h!==1||u!==1)&&f.push(r(f)+"scale("+h+","+u+")")}return function(c,d){var h=[],u=[];return c=n(c),d=n(d),a(c.translateX,c.translateY,d.translateX,d.translateY,h,u),o(c.rotate,d.rotate,h,u),s(c.skewX,d.skewX,h,u),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,h,u),c=d=null,function(f){for(var _=-1,M=u.length,m;++_<M;)h[(m=u[_]).i]=m.x(f);return h.join("")}}}var Eu=Om(Rm,"px, ","px)","deg)"),Au=Om(km,", ",")",")");var ua=0,xo=0,_o=0,Nm=1e3,sc,vo,lc=0,Mr=0,cc=0,yo=typeof performance=="object"&&performance.now?performance:Date,Lm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Mo(){return Mr||(Lm(sM),Mr=yo.now()+cc)}function sM(){Mr=0}function bo(){this._call=this._time=this._next=null}bo.prototype=dc.prototype={constructor:bo,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Mo():+t)+(e==null?0:+e),!this._next&&vo!==this&&(vo?vo._next=this:sc=this,vo=this),this._call=n,this._time=t,Pu()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pu())}};function dc(n,e,t){var i=new bo;return i.restart(n,e,t),i}function Fm(){Mo(),++ua;for(var n=sc,e;n;)(e=Mr-n._time)>=0&&n._call.call(void 0,e),n=n._next;--ua}function Dm(){Mr=(lc=yo.now())+cc,ua=xo=0;try{Fm()}finally{ua=0,cM(),Mr=0}}function lM(){var n=yo.now(),e=n-lc;e>Nm&&(cc-=e,lc=n)}function cM(){for(var n,e=sc,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:sc=t);vo=n,Pu(i)}function Pu(n){if(!ua){xo&&(xo=clearTimeout(xo));var e=n-Mr;e>24?(n<1/0&&(xo=setTimeout(Dm,n-yo.now()-cc)),_o&&(_o=clearInterval(_o))):(_o||(lc=yo.now(),_o=setInterval(lM,Nm)),ua=1,Lm(Dm))}}function uc(n,e,t){var i=new bo;return e=e==null?0:+e,i.restart(r=>{i.stop(),n(r+e)},e,t),i}var dM=fu("start","end","cancel","interrupt"),uM=[],zm=0,Um=1,pc=2,hc=3,Bm=4,fc=5,Co=6;function $i(n,e,t,i,r,a){var o=n.__transition;if(!o)n.__transition={};else if(t in o)return;hM(n,t,{name:e,index:i,group:r,on:dM,tween:uM,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:zm})}function wo(n,e){var t=Qt(n,e);if(t.state>zm)throw new Error("too late; already scheduled");return t}function ln(n,e){var t=Qt(n,e);if(t.state>hc)throw new Error("too late; already running");return t}function Qt(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function hM(n,e,t){var i=n.__transition,r;i[e]=t,t.timer=dc(a,0,t.time);function a(c){t.state=Um,t.timer.restart(o,t.delay,t.time),t.delay<=c&&o(c-t.delay)}function o(c){var d,h,u,f;if(t.state!==Um)return l();for(d in i)if(f=i[d],f.name===t.name){if(f.state===hc)return uc(o);f.state===Bm?(f.state=Co,f.timer.stop(),f.on.call("interrupt",n,n.__data__,f.index,f.group),delete i[d]):+d<e&&(f.state=Co,f.timer.stop(),f.on.call("cancel",n,n.__data__,f.index,f.group),delete i[d])}if(uc(function(){t.state===hc&&(t.state=Bm,t.timer.restart(s,t.delay,t.time),s(c))}),t.state=pc,t.on.call("start",n,n.__data__,t.index,t.group),t.state===pc){for(t.state=hc,r=new Array(u=t.tween.length),d=0,h=-1;d<u;++d)(f=t.tween[d].value.call(n,n.__data__,t.index,t.group))&&(r[++h]=f);r.length=h+1}}function s(c){for(var d=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=fc,1),h=-1,u=r.length;++h<u;)r[h].call(n,d);t.state===fc&&(t.on.call("end",n,n.__data__,t.index,t.group),l())}function l(){t.state=Co,t.timer.stop(),delete i[e];for(var c in i)return;delete n.__transition}}function mc(n,e){var t=n.__transition,i,r,a=!0,o;if(t){e=e==null?null:e+"";for(o in t){if((i=t[o]).name!==e){a=!1;continue}r=i.state>pc&&i.state<fc,i.state=Co,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete t[o]}a&&delete n.__transition}}function Vm(n){return this.each(function(){mc(this,n)})}function pM(n,e){var t,i;return function(){var r=ln(this,n),a=r.tween;if(a!==t){i=t=a;for(var o=0,s=i.length;o<s;++o)if(i[o].name===e){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function fM(n,e,t){var i,r;if(typeof t!="function")throw new Error;return function(){var a=ln(this,n),o=a.tween;if(o!==i){r=(i=o).slice();for(var s={name:e,value:t},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=s;break}l===c&&r.push(s)}a.tween=r}}function Gm(n,e){var t=this._id;if(n+="",arguments.length<2){for(var i=Qt(this.node(),t).tween,r=0,a=i.length,o;r<a;++r)if((o=i[r]).name===n)return o.value;return null}return this.each((e==null?pM:fM)(t,n,e))}function ha(n,e,t){var i=n._id;return n.each(function(){var r=ln(this,i);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return Qt(r,i).value[e]}}function gc(n,e){var t;return(typeof e=="number"?sn:e instanceof Yn?yr:(t=Yn(e))?(e=t,yr):go)(n,e)}function mM(n){return function(){this.removeAttribute(n)}}function gM(n){return function(){this.removeAttributeNS(n.space,n.local)}}function _M(n,e,t){var i,r=t+"",a;return function(){var o=this.getAttribute(n);return o===r?null:o===i?a:a=e(i=o,t)}}function xM(n,e,t){var i,r=t+"",a;return function(){var o=this.getAttributeNS(n.space,n.local);return o===r?null:o===i?a:a=e(i=o,t)}}function vM(n,e,t){var i,r,a;return function(){var o,s=t(this),l;return s==null?void this.removeAttribute(n):(o=this.getAttribute(n),l=s+"",o===l?null:o===i&&l===r?a:(r=l,a=e(i=o,s)))}}function yM(n,e,t){var i,r,a;return function(){var o,s=t(this),l;return s==null?void this.removeAttributeNS(n.space,n.local):(o=this.getAttributeNS(n.space,n.local),l=s+"",o===l?null:o===i&&l===r?a:(r=l,a=e(i=o,s)))}}function Hm(n,e){var t=Si(n),i=t==="transform"?Au:gc;return this.attrTween(n,typeof e=="function"?(t.local?yM:vM)(t,i,ha(this,"attr."+n,e)):e==null?(t.local?gM:mM)(t):(t.local?xM:_M)(t,i,e))}function bM(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function MM(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function CM(n,e){var t,i;function r(){var a=e.apply(this,arguments);return a!==i&&(t=(i=a)&&MM(n,a)),t}return r._value=e,r}function wM(n,e){var t,i;function r(){var a=e.apply(this,arguments);return a!==i&&(t=(i=a)&&bM(n,a)),t}return r._value=e,r}function Wm(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var i=Si(n);return this.tween(t,(i.local?CM:wM)(i,e))}function SM(n,e){return function(){wo(this,n).delay=+e.apply(this,arguments)}}function TM(n,e){return e=+e,function(){wo(this,n).delay=e}}function Xm(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?SM:TM)(e,n)):Qt(this.node(),e).delay}function EM(n,e){return function(){ln(this,n).duration=+e.apply(this,arguments)}}function AM(n,e){return e=+e,function(){ln(this,n).duration=e}}function qm(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?EM:AM)(e,n)):Qt(this.node(),e).duration}function PM(n,e){if(typeof e!="function")throw new Error;return function(){ln(this,n).ease=e}}function jm(n){var e=this._id;return arguments.length?this.each(PM(e,n)):Qt(this.node(),e).ease}function IM(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;ln(this,n).ease=t}}function $m(n){if(typeof n!="function")throw new Error;return this.each(IM(this._id,n))}function Ym(n){typeof n!="function"&&(n=co(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var a=e[r],o=a.length,s=i[r]=[],l,c=0;c<o;++c)(l=a[c])&&n.call(l,l.__data__,c,a)&&s.push(l);return new xn(i,this._parents,this._name,this._id)}function Jm(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,i=e.length,r=t.length,a=Math.min(i,r),o=new Array(i),s=0;s<a;++s)for(var l=e[s],c=t[s],d=l.length,h=o[s]=new Array(d),u,f=0;f<d;++f)(u=l[f]||c[f])&&(h[f]=u);for(;s<i;++s)o[s]=e[s];return new xn(o,this._parents,this._name,this._id)}function RM(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function kM(n,e,t){var i,r,a=RM(e)?wo:ln;return function(){var o=a(this,n),s=o.on;s!==i&&(r=(i=s).copy()).on(e,t),o.on=r}}function Zm(n,e){var t=this._id;return arguments.length<2?Qt(this.node(),t).on.on(n):this.each(kM(t,n,e))}function OM(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function Km(){return this.on("end.remove",OM(this._id))}function Qm(n){var e=this._name,t=this._id;typeof n!="function"&&(n=_r(n));for(var i=this._groups,r=i.length,a=new Array(r),o=0;o<r;++o)for(var s=i[o],l=s.length,c=a[o]=new Array(l),d,h,u=0;u<l;++u)(d=s[u])&&(h=n.call(d,d.__data__,u,s))&&("__data__"in d&&(h.__data__=d.__data__),c[u]=h,$i(c[u],e,t,u,c,Qt(d,t)));return new xn(a,this._parents,e,t)}function eg(n){var e=this._name,t=this._id;typeof n!="function"&&(n=lo(n));for(var i=this._groups,r=i.length,a=[],o=[],s=0;s<r;++s)for(var l=i[s],c=l.length,d,h=0;h<c;++h)if(d=l[h]){for(var u=n.call(d,d.__data__,h,l),f,_=Qt(d,t),M=0,m=u.length;M<m;++M)(f=u[M])&&$i(f,e,t,M,u,_);a.push(u),o.push(d)}return new xn(a,o,e,t)}var DM=Ti.prototype.constructor;function tg(){return new DM(this._groups,this._parents)}function NM(n,e){var t,i,r;return function(){var a=ji(this,n),o=(this.style.removeProperty(n),ji(this,n));return a===o?null:a===t&&o===i?r:r=e(t=a,i=o)}}function ng(n){return function(){this.style.removeProperty(n)}}function LM(n,e,t){var i,r=t+"",a;return function(){var o=ji(this,n);return o===r?null:o===i?a:a=e(i=o,t)}}function FM(n,e,t){var i,r,a;return function(){var o=ji(this,n),s=t(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(n),ji(this,n))),o===l?null:o===i&&l===r?a:(r=l,a=e(i=o,s))}}function UM(n,e){var t,i,r,a="style."+e,o="end."+a,s;return function(){var l=ln(this,n),c=l.on,d=l.value[a]==null?s||(s=ng(e)):void 0;(c!==t||r!==d)&&(i=(t=c).copy()).on(o,r=d),l.on=i}}function ig(n,e,t){var i=(n+="")=="transform"?Eu:gc;return e==null?this.styleTween(n,NM(n,i)).on("end.style."+n,ng(n)):typeof e=="function"?this.styleTween(n,FM(n,i,ha(this,"style."+n,e))).each(UM(this._id,n)):this.styleTween(n,LM(n,i,e),t).on("end.style."+n,null)}function BM(n,e,t){return function(i){this.style.setProperty(n,e.call(this,i),t)}}function zM(n,e,t){var i,r;function a(){var o=e.apply(this,arguments);return o!==r&&(i=(r=o)&&BM(n,o,t)),i}return a._value=e,a}function rg(n,e,t){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,zM(n,e,t??""))}function VM(n){return function(){this.textContent=n}}function GM(n){return function(){var e=n(this);this.textContent=e??""}}function ag(n){return this.tween("text",typeof n=="function"?GM(ha(this,"text",n)):VM(n==null?"":n+""))}function HM(n){return function(e){this.textContent=n.call(this,e)}}function WM(n){var e,t;function i(){var r=n.apply(this,arguments);return r!==t&&(e=(t=r)&&HM(r)),e}return i._value=n,i}function og(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,WM(n))}function sg(){for(var n=this._name,e=this._id,t=_c(),i=this._groups,r=i.length,a=0;a<r;++a)for(var o=i[a],s=o.length,l,c=0;c<s;++c)if(l=o[c]){var d=Qt(l,e);$i(l,n,t,c,o,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new xn(i,this._parents,n,t)}function lg(){var n,e,t=this,i=t._id,r=t.size();return new Promise(function(a,o){var s={value:o},l={value:function(){--r===0&&a()}};t.each(function(){var c=ln(this,i),d=c.on;d!==n&&(e=(n=d).copy(),e._.cancel.push(s),e._.interrupt.push(s),e._.end.push(l)),c.on=e}),r===0&&a()})}var XM=0;function xn(n,e,t,i){this._groups=n,this._parents=e,this._name=t,this._id=i}function cg(n){return Ti().transition(n)}function _c(){return++XM}var Ei=Ti.prototype;xn.prototype=cg.prototype={constructor:xn,select:Qm,selectAll:eg,selectChild:Ei.selectChild,selectChildren:Ei.selectChildren,filter:Ym,merge:Jm,selection:tg,transition:sg,call:Ei.call,nodes:Ei.nodes,node:Ei.node,size:Ei.size,empty:Ei.empty,each:Ei.each,on:Zm,attr:Hm,attrTween:Wm,style:ig,styleTween:rg,text:ag,textTween:og,remove:Km,tween:Gm,delay:Xm,duration:qm,ease:jm,easeVarying:$m,end:lg,[Symbol.iterator]:Ei[Symbol.iterator]};function xc(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var qM={time:null,delay:0,duration:250,ease:xc};function jM(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function dg(n){var e,t;n instanceof xn?(e=n._id,n=n._name):(e=_c(),(t=qM).time=Mo(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,a=0;a<r;++a)for(var o=i[a],s=o.length,l,c=0;c<s;++c)(l=o[c])&&$i(l,n,e,c,o,t||jM(l,e));return new xn(i,this._parents,n,e)}Ti.prototype.interrupt=Vm;Ti.prototype.transition=dg;var{abs:JO,max:ZO,min:KO}=Math;function ug(n){return[+n[0],+n[1]]}function $M(n){return[ug(n[0]),ug(n[1])]}var QO={name:"x",handles:["w","e"].map(Iu),input:function(n,e){return n==null?null:[[+n[0],e[0][1]],[+n[1],e[1][1]]]},output:function(n){return n&&[n[0][0],n[1][0]]}},eD={name:"y",handles:["n","s"].map(Iu),input:function(n,e){return n==null?null:[[e[0][0],+n[0]],[e[1][0],+n[1]]]},output:function(n){return n&&[n[0][1],n[1][1]]}},tD={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Iu),input:function(n){return n==null?null:$M(n)},output:function(n){return n}};function Iu(n){return{type:n}}function hg(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Cr(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function di(n){return n=Cr(Math.abs(n)),n?n[1]:NaN}function pg(n,e){return function(t,i){for(var r=t.length,a=[],o=0,s=n[0],l=0;r>0&&s>0&&(l+s+1>i&&(s=Math.max(1,i-l)),a.push(t.substring(r-=s,r+s)),!((l+=s+1)>i));)s=n[o=(o+1)%n.length];return a.reverse().join(e)}}function fg(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var YM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yi(n){if(!(e=YM.exec(n)))throw new Error("invalid format: "+n);var e;return new vc({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Yi.prototype=vc.prototype;function vc(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}vc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function mg(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var So;function gg(n,e){var t=Cr(n,e);if(!t)return So=void 0,n.toPrecision(e);var i=t[0],r=t[1],a=r-(So=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return a===o?i:a>o?i+new Array(a-o+1).join("0"):a>0?i.slice(0,a)+"."+i.slice(a):"0."+new Array(1-a).join("0")+Cr(n,Math.max(0,e+a-1))[0]}function Ru(n,e){var t=Cr(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}var ku={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:hg,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Ru(n*100,e),r:Ru,s:gg,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Ou(n){return n}var _g=Array.prototype.map,xg=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function vg(n){var e=n.grouping===void 0||n.thousands===void 0?Ou:pg(_g.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",a=n.numerals===void 0?Ou:fg(_g.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",s=n.minus===void 0?"\u2212":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(h,u){h=Yi(h);var f=h.fill,_=h.align,M=h.sign,m=h.symbol,p=h.zero,S=h.width,A=h.comma,T=h.precision,R=h.trim,I=h.type;I==="n"?(A=!0,I="g"):ku[I]||(T===void 0&&(T=12),R=!0,I="g"),(p||f==="0"&&_==="=")&&(p=!0,f="0",_="=");var O=(u&&u.prefix!==void 0?u.prefix:"")+(m==="$"?t:m==="#"&&/[boxX]/.test(I)?"0"+I.toLowerCase():""),y=(m==="$"?i:/[%p]/.test(I)?o:"")+(u&&u.suffix!==void 0?u.suffix:""),E=ku[I],Q=/[defgprs%]/.test(I);T=T===void 0?6:/[gprs]/.test(I)?Math.max(1,Math.min(21,T)):Math.max(0,Math.min(20,T));function k(F){var X=O,Z=y,j,Y,G;if(I==="c")Z=E(F)+Z,F="";else{F=+F;var de=F<0||1/F<0;if(F=isNaN(F)?l:E(Math.abs(F),T),R&&(F=mg(F)),de&&+F==0&&M!=="+"&&(de=!1),X=(de?M==="("?M:s:M==="-"||M==="("?"":M)+X,Z=(I==="s"&&!isNaN(F)&&So!==void 0?xg[8+So/3]:"")+Z+(de&&M==="("?")":""),Q){for(j=-1,Y=F.length;++j<Y;)if(G=F.charCodeAt(j),48>G||G>57){Z=(G===46?r+F.slice(j+1):F.slice(j))+Z,F=F.slice(0,j);break}}}A&&!p&&(F=e(F,1/0));var oe=X.length+F.length+Z.length,ve=oe<S?new Array(S-oe+1).join(f):"";switch(A&&p&&(F=e(ve+F,ve.length?S-Z.length:1/0),ve=""),_){case"<":F=X+F+Z+ve;break;case"=":F=X+ve+F+Z;break;case"^":F=ve.slice(0,oe=ve.length>>1)+X+F+Z+ve.slice(oe);break;default:F=ve+X+F+Z;break}return a(F)}return k.toString=function(){return h+""},k}function d(h,u){var f=Math.max(-8,Math.min(8,Math.floor(di(u)/3)))*3,_=Math.pow(10,-f),M=c((h=Yi(h),h.type="f",h),{suffix:xg[8+f/3]});return function(m){return M(_*m)}}return{format:c,formatPrefix:d}}var yc,bc,Mc;Du({thousands:",",grouping:[3],currency:["$",""]});function Du(n){return yc=vg(n),bc=yc.format,Mc=yc.formatPrefix,yc}function Nu(n){return Math.max(0,-di(Math.abs(n)))}function Lu(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(di(e)/3)))*3-di(Math.abs(n)))}function Fu(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,di(e)-di(n))+1}function yg(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Uu(n){return function(){return n}}function Bu(n){return+n}var bg=[0,1];function pa(n){return n}function zu(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:Uu(isNaN(e)?NaN:.5)}function JM(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function ZM(n,e,t){var i=n[0],r=n[1],a=e[0],o=e[1];return r<i?(i=zu(r,i),a=t(o,a)):(i=zu(i,r),a=t(a,o)),function(s){return a(i(s))}}function KM(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),a=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=zu(n[o],n[o+1]),a[o]=t(e[o],e[o+1]);return function(s){var l=hu(n,s,1,i)-1;return a[l](r[l](s))}}function Mg(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function QM(){var n=bg,e=bg,t=br,i,r,a,o=pa,s,l,c;function d(){var u=Math.min(n.length,e.length);return o!==pa&&(o=JM(n[0],n[u-1])),s=u>2?KM:ZM,l=c=null,h}function h(u){return u==null||isNaN(u=+u)?a:(l||(l=s(n.map(i),e,t)))(i(o(u)))}return h.invert=function(u){return o(r((c||(c=s(e,n.map(i),sn)))(u)))},h.domain=function(u){return arguments.length?(n=Array.from(u,Bu),d()):n.slice()},h.range=function(u){return arguments.length?(e=Array.from(u),d()):e.slice()},h.rangeRound=function(u){return e=Array.from(u),t=Su,d()},h.clamp=function(u){return arguments.length?(o=u?!0:pa,d()):o!==pa},h.interpolate=function(u){return arguments.length?(t=u,d()):t},h.unknown=function(u){return arguments.length?(a=u,h):a},function(u,f){return i=u,r=f,d()}}function Vu(){return QM()(pa,pa)}function Gu(n,e,t,i){var r=pu(n,e,t),a;switch(i=Yi(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(a=Lu(r,o))&&(i.precision=a),Mc(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(a=Fu(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=a-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(a=Nu(r))&&(i.precision=a-(i.type==="%")*2);break}}return bc(i)}function eC(n){var e=n.domain;return n.ticks=function(t){var i=e();return Wl(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return Gu(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,a=i.length-1,o=i[r],s=i[a],l,c,d=10;for(s<o&&(c=o,o=s,s=c,c=r,r=a,a=c);d-- >0;){if(c=so(o,s,t),c===l)return i[r]=o,i[a]=s,e(i);if(c>0)o=Math.floor(o/c)*c,s=Math.ceil(s/c)*c;else if(c<0)o=Math.ceil(o*c)/c,s=Math.floor(s*c)/c;else break;l=c}return n},n}function To(){var n=Vu();return n.copy=function(){return Mg(n,To())},yg.apply(n,arguments),eC(n)}function Ji(n,e,t){this.k=n,this.x=e,this.y=t}Ji.prototype={constructor:Ji,scale:function(n){return n===1?this:new Ji(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Ji(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Hu=new Ji(1,0,0);Wu.prototype=Ji.prototype;function Wu(n){for(;!n.__zoom;)if(!(n=n.parentNode))return Hu;return n.__zoom}var nC=["chartHost"];function iC(n,e){if(n&1&&(ce(0,"div",3),pt(1,"div",5,0),L(3,"translate"),ye()),n&2){let t=B();g(),ze("aria-label",V(3,1,t.titleKey))}}function rC(n,e){if(n&1&&(ce(0,"p",4),b(1),L(2,"translate"),ye()),n&2){let t=B();g(),H(V(2,1,t.noDataKey))}}var fa=class n{chartHost;titleKey="author.tags.title";noDataKey="author.tags.noData";set dataTag(e){this._dataTag.set(e),this.renderCloud()}platformId=Jt(lh);browser=_h(this.platformId);_dataTag=qe(null);svg;viewReady=!1;tags=te(()=>{let e=this.parseDataTag(this._dataTag()).map(r=>vn(gn({},r),{displayLabel:r.label.length>30?`${r.label.slice(0,30)}...`:r.label}));return e.length===0?[]:(e.filter(r=>r.value>1).length>20?e.filter(r=>r.value>=2):e).sort((r,a)=>a.value-r.value)});hasData=te(()=>this.tags().length>0);ngAfterViewInit(){this.viewReady=!0,this.renderCloud()}ngOnDestroy(){this.svg?.remove()}renderCloud(){if(!this.browser||!this.viewReady||!this.chartHost?.nativeElement)return;let e=this.tags(),t=this.chartHost.nativeElement;if(e.length===0){t.innerHTML="",this.svg=void 0;return}let i=Math.max(t.clientWidth,220),r=300,a=["#e76f51","#f4a261","#2a9d8f","#e9c46a","#264653","#9b5de5","#f15bb5","#00bbf9","#00f5d4","#ff006e"],o=Xl(e,p=>p.value)??1,s=ql(e,p=>p.value)??1,l=To().domain([s,o]).range([8,60]),c=e.map((p,S)=>{let A=l(p.value),T=S%4===0?90:0,R=p.displayLabel.length*A*.56,I=A*1.05,O=T===90?I:R,y=T===90?R:I;return vn(gn({},p),{fontSize:A,rotate:T,boxWidth:O,boxHeight:y,hidden:!1,color:a[S%a.length],x:i/2,y:r/2})}),d=[],h=6,u=(p,S,A,T)=>{let R=p-A/2,I=p+A/2,O=S-T/2,y=S+T/2;return R<h||I>i-h||O<h||y>r-h?!0:d.some(E=>{let Q=E.x-E.boxWidth/2,k=E.x+E.boxWidth/2,F=E.y-E.boxHeight/2,X=E.y+E.boxHeight/2;return!(I<Q||R>k||y<F||O>X)})},f=p=>{let S=.61803398875,A=p*S%1,T=p*S*S%1;return{x:h+A*(i-h*2),y:h+T*(r-h*2)}},_=(p,S,A)=>{let T=p.length*S*.56,R=S*1.05;return A===90?{boxWidth:R,boxHeight:T}:{boxWidth:T,boxHeight:R}},M=(p,S)=>{for(let A=0;A<420;A+=1){let T=A*.42,R=.7*Math.sqrt(A)*3.2,I=S.x+Math.cos(T)*R,O=S.y+Math.sin(T)*R;if(!u(I,O,p.boxWidth,p.boxHeight))return p.x=I,p.y=O,d.push({x:I,y:O,boxWidth:p.boxWidth,boxHeight:p.boxHeight}),!0}for(let A=h+p.boxHeight/2;A<=r-h-p.boxHeight/2;A+=8)for(let T=h+p.boxWidth/2;T<=i-h-p.boxWidth/2;T+=8)if(!u(T,A,p.boxWidth,p.boxHeight))return p.x=T,p.y=A,d.push({x:T,y:A,boxWidth:p.boxWidth,boxHeight:p.boxHeight}),!0;return!1};c.forEach((p,S)=>{let A=f(S+1),T=!1,R=p.rotate===90?[90,0]:[0,90],I=p.fontSize;for(let O=1;O>=.7&&!T;O-=.1)for(let y of R){let E=Math.max(8,I*O),Q=_(p.displayLabel,E,y);if(p.fontSize=E,p.rotate=y,p.boxWidth=Q.boxWidth,p.boxHeight=Q.boxHeight,M(p,A)){T=!0;break}}T||(p.hidden=!0)}),t.innerHTML="",this.svg=vu(t).append("svg").attr("width",i).attr("height",r).attr("viewBox",`0 0 ${i} ${r}`).attr("role","img").attr("aria-label","Nuvem de tags"),this.svg.append("g").selectAll("text").data(c.filter(p=>!p.hidden)).enter().append("text").attr("x",p=>p.x).attr("y",p=>p.y).attr("text-anchor","middle").attr("dominant-baseline","middle").attr("font-family","'Raleway', 'Trebuchet MS', sans-serif").attr("font-size",p=>p.fontSize).attr("font-weight",600).attr("fill",p=>p.color).attr("transform",p=>`rotate(${p.rotate} ${p.x} ${p.y})`).text(p=>p.displayLabel).append("title").text(p=>`${p.label}: ${p.value}`)}parseDataTag(e){if(!e)return[];if(Array.isArray(e))return e.map((t,i)=>{if(typeof t=="string"){let c=t.trim();return c?{label:c,value:1}:null}if(!t||typeof t!="object")return null;let r=t,a=r.text??r.tag??r.label??r.name??r.term??r.keyword??`tag ${i+1}`,o=r.value??r.count??r.freq??r.total??r.weight??1,s=String(a).trim(),l=Number(o);return!s||!Number.isFinite(l)||l<=0?null:{label:s,value:l}}).filter(t=>t!==null);if(typeof e=="object"){let t=e,i=t.text,r=t.value;if(typeof i=="string"&&i.trim()){let o=Number(r);if(Number.isFinite(o)&&o>0)return[{label:i.trim(),value:o}]}let a=[];for(let[o,s]of Object.entries(e)){let l=Number(s);o.trim()&&Number.isFinite(l)&&l>0&&a.push({label:o.trim(),value:l})}return a}return[]}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-tag-cloud"]],viewQuery:function(t,i){if(t&1&&Pr(nC,5),t&2){let r;Ir(r=Rr())&&(i.chartHost=r.first)}},inputs:{titleKey:"titleKey",noDataKey:"noDataKey",dataTag:"dataTag"},decls:7,vars:7,consts:[["chartHost",""],[1,"tag-cloud","mt-3"],[1,"h6","mb-2"],[1,"tag-cloud__chart-wrap"],[1,"mb-0","text-muted"],["role","img",1,"tag-cloud__chart"]],template:function(t,i){t&1&&(ce(0,"section",1),L(1,"translate"),ce(2,"h3",2),b(3),L(4,"translate"),ye(),se(5,iC,4,3,"div",3)(6,rC,3,3,"p",4),ye()),t&2&&(ze("aria-label",V(1,3,i.titleKey)),g(3),H(V(4,5,i.titleKey)),g(2),le(i.hasData()?5:6))},dependencies:[Ye,Vt,$t],styles:["[_nghost-%COMP%]{display:block;width:100%}.tag-cloud[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.7rem;box-sizing:border-box;width:100%;padding:.75rem}.tag-cloud__chart-wrap[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--theme-line);border-radius:.7rem;height:300px;overflow:hidden;padding:.2rem;width:100%}.tag-cloud__chart[_ngcontent-%COMP%]{height:100%;width:100%}"]})};var aC=(n,e)=>e.type,oC=(n,e)=>e.label;function sC(n,e){if(n&1&&(w(0,"a",6),b(1),v()),n&2){let t=e.$implicit;Me("href",t.url,Ut)("title",t.label),g(),re(" ",t.icon," ")}}function lC(n,e){if(n&1&&Ge(0,"img",7),n&2){let t=B();Me("src",t.photoUrl,Ut)}}function cC(n,e){if(n&1&&(w(0,"div",9)(1,"small"),b(2),v(),w(3,"strong"),b(4),v()()),n&2){let t=e.$implicit;g(2),H(t.label),g(2),H(t.value)}}function dC(n,e){if(n&1){let t=ht();w(0,"button",11),Be("click",function(){let r=et(t).$implicit,a=B();return tt(a.setRange(r))}),b(1),L(2,"translate"),v()}if(n&2){let t=e.$implicit,i=B();Ke("btn-primary",i.selectedRange()===t)("btn-outline-primary",i.selectedRange()!==t),g(),Bn(" ",t," ",V(2,6,"author.yearsProduction")," ")}}var Cc=class n{rangeOptions=[5,10,15,20];selectedRange=qe("all");name="-";nameAbnt="-";authorId="-";metrics=[];chartPoints=[];worksGroups=[];dataJour=null;dataTag=null;photoUrl="";authorLinks=[];coauthors=[];networkData={nodes:[],edges:[]};citationsGranted=[];filteredChartPoints=te(()=>{let e=this.selectedRange(),t=[...this.chartPoints].sort((i,r)=>this.parseYear(i.label)-this.parseYear(r.label));return e==="all"?t:t.slice(-e)});chartTitle=te(()=>{let e=this.selectedRange();return e==="all"?"Producao total por ano":`Producao dos ultimos ${e} anos`});setRange(e){this.selectedRange.set(e)}parseYear(e){let t=Number.parseInt(e,10);return Number.isFinite(t)?t:0}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-author-gadget"]],inputs:{name:"name",nameAbnt:"nameAbnt",authorId:"authorId",metrics:"metrics",chartPoints:"chartPoints",worksGroups:"worksGroups",dataJour:"dataJour",dataTag:"dataTag",photoUrl:"photoUrl",authorLinks:"authorLinks",coauthors:"coauthors",networkData:"networkData",citationsGranted:"citationsGranted"},decls:37,vars:31,consts:[["aria-label","Dados do autor",1,"author-gadget"],[1,"author-header","d-flex","align-items-start","gap-2"],[1,"author-info","flex-grow-1"],[1,"h5","mb-3"],[1,"mb-1"],[1,"author-links","flex-shrink-0"],["target","_blank","rel","noopener noreferrer",1,"author-link",3,"href","title"],["alt","Foto do autor","width","80","height","80","loading","lazy","decoding","async",1,"author-photo","flex-shrink-0",3,"src"],[1,"author-metrics","mt-3"],[1,"author-metric-item"],["aria-label","Periodo da producao",1,"author-range","mt-3","mb-2"],["type","button",1,"btn","btn-sm",3,"click"],["type","button",1,"btn","btn-sm",3,"btn-primary","btn-outline-primary"],[3,"title","points"],[3,"dataTag"],[3,"groups","dataJour","coauthors","citationsGranted","networkData"]],template:function(t,i){t&1&&(w(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),b(4),L(5,"translate"),v(),w(6,"p",4)(7,"strong"),b(8),L(9,"translate"),v(),b(10),v(),w(11,"p",4)(12,"strong"),b(13),L(14,"translate"),v(),b(15),v(),w(16,"p",4)(17,"strong"),b(18),L(19,"translate"),v(),b(20),v()(),w(21,"div",5),rt(22,sC,2,3,"a",6,aC),v(),se(24,lC,1,1,"img",7),v(),w(25,"div",8),rt(26,cC,5,2,"div",9,oC),v(),w(28,"div",10)(29,"button",11),Be("click",function(){return i.setRange("all")}),b(30),L(31,"translate"),v(),rt(32,dC,3,8,"button",12,Io),v(),Ge(34,"app-bar-chart",13)(35,"app-tag-cloud",14)(36,"app-author-works",15),v()),t&2&&(g(4),H(V(5,21,"author.gadget")),g(4),re("",V(9,23,"author.name"),":"),g(2),re(" ",i.name),g(3),re("",V(14,25,"author.nameAbnt"),":"),g(2),re(" ",i.nameAbnt),g(3),re("",V(19,27,"author.id"),":"),g(2),re(" ",i.authorId),g(2),at(i.authorLinks),g(2),le(i.photoUrl?24:-1),g(2),at(i.metrics),g(3),Ke("btn-primary",i.selectedRange()==="all")("btn-outline-primary",i.selectedRange()!=="all"),g(),re(" ",V(31,29,"author.allProduction")," "),g(2),at(i.rangeOptions),g(2),Me("title",i.chartTitle())("points",i.filteredChartPoints()),g(),Me("dataTag",i.dataTag),g(),Me("groups",i.worksGroups)("dataJour",i.dataJour)("coauthors",i.coauthors)("citationsGranted",i.citationsGranted)("networkData",i.networkData))},dependencies:[Ye,Vt,Fh,fa,Vl,$t],styles:[".author-gadget[_ngcontent-%COMP%]{background:var(--theme-sand);border:1px solid var(--theme-line);border-radius:.7rem;padding:1rem}.author-header[_ngcontent-%COMP%]{align-items:flex-start;display:flex;gap:.8rem}.author-info[_ngcontent-%COMP%]{flex:1}.author-links[_ngcontent-%COMP%]{align-items:center;display:flex;gap:.5rem}.author-link[_ngcontent-%COMP%]{color:var(--theme-ink);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-size:.91rem;text-decoration:none;transition:all .2s ease;padding:0}.author-link[_ngcontent-%COMP%]:hover{color:#483d8b;transform:scale(1.15)}.author-link[_ngcontent-%COMP%]:focus{outline:2px solid #483d8b;outline-offset:2px;border-radius:.2rem}.author-photo[_ngcontent-%COMP%]{border:3px solid #483d8b;border-radius:50%;flex-shrink:0;height:100px;object-fit:cover;width:100px}.author-metrics[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.author-metric-item[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.55rem;display:grid;gap:.1rem;padding:.55rem .6rem}.author-metric-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--theme-hint)}.author-range[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.45rem}"]})};var Cg=(n,e)=>e.id;function uC(n,e){if(n&1){let t=ht();ce(0,"button",5),Bt("click",function(){let r=et(t).$implicit,a=B();return tt(a.selectTab(r.id))}),b(1),L(2,"translate"),ye()}if(n&2){let t=e.$implicit,i=B();Ke("citation-tabs__button--active",i.selectedTab()===t.id),ze("aria-selected",i.selectedTab()===t.id)("aria-controls","citation-"+t.id),g(),re(" ",V(2,5,"citation.styles."+t.id)," ")}}function hC(n,e){if(n&1&&pt(0,"p",8),n&2){let t=B(2).$implicit,i=B();ft("innerHTML",i.getTabContent(t.id),Qi)}}function pC(n,e){if(n&1&&(ce(0,"p"),b(1),ye()),n&2){let t=B(2).$implicit,i=B();g(),H(i.getTabContent(t.id))}}function fC(n,e){if(n&1){let t=ht();ce(0,"div",6)(1,"div",7),se(2,hC,1,1,"p",8)(3,pC,2,1,"p"),ye(),ce(4,"button",9),Bt("click",function(){et(t);let r=B().$implicit,a=B();return tt(a.copyToClipboard(r.id))}),b(5),L(6,"translate"),ye()()}if(n&2){let t=B().$implicit,i=B();ft("id","citation-"+t.id),ze("aria-labelledby","citation-tab-"+t.id),g(2),le(i.isAbntTab(t.id)?2:3),g(3),re(" ",V(6,4,"citation.actions.copy")," ")}}function mC(n,e){if(n&1&&se(0,fC,7,6,"div",6),n&2){let t=e.$implicit,i=B();le(i.selectedTab()===t.id?0:-1)}}var ma=class n{citations={};tabs=[{id:"abnt",label:"ABNT",i18nKey:"citation.styles.abnt"},{id:"apa",label:"APA",i18nKey:"citation.styles.apa"},{id:"vancouver",label:"Vancouver",i18nKey:"citation.styles.vancouver"}];selectedTab=qe("abnt");selectTab(e){this.selectedTab.set(e)}getTabContent(e){return this.citations[e]??""}hasContent(e){return!!this.citations[e]?.trim()}getVisibleTabs(){return this.tabs.filter(e=>this.hasContent(e.id))}isAbntTab(e){return e==="abnt"}copyToClipboard(e){let t=this.getTabContent(e);t&&navigator.clipboard.writeText(t).catch(i=>{console.error("Failed to copy citation:",i)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-citation-tabs"]],inputs:{citations:"citations"},decls:8,vars:0,consts:[["aria-label","Estilos de citacao",1,"citation-tabs"],[1,"citation-tabs__header"],["role","tablist",1,"citation-tabs__nav"],["role","tab",1,"citation-tabs__button",3,"citation-tabs__button--active"],[1,"citation-tabs__content"],["role","tab",1,"citation-tabs__button",3,"click"],["role","tabpanel",1,"citation-tabs__panel",3,"id"],[1,"citation-text"],[3,"innerHTML"],["aria-label","Copiar citacao",1,"citation-copy-btn",3,"click"]],template:function(t,i){t&1&&(ce(0,"section",0)(1,"div",1)(2,"nav",2),rt(3,uC,3,7,"button",3,Cg),ye()(),ce(5,"div",4),rt(6,mC,1,1,null,null,Cg),ye()()),t&2&&(g(3),at(i.getVisibleTabs()),g(3),at(i.getVisibleTabs()))},dependencies:[Ye,Vt,$t],styles:['@charset "UTF-8";.citation-tabs[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:8px;overflow:hidden;background:var(--theme-card-bg);transition:border-color .2s ease}.citation-tabs__header[_ngcontent-%COMP%]{background:var(--theme-sand);border-bottom:2px solid var(--theme-line);overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.citation-tabs__header[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px}.citation-tabs__header[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.citation-tabs__header[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--theme-line);border-radius:2px}.citation-tabs__header[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--theme-hint)}.citation-tabs__nav[_ngcontent-%COMP%]{display:flex;gap:0;list-style:none;margin:0;padding:0;min-width:min-content}.citation-tabs__button[_ngcontent-%COMP%]{flex:0 0 auto;padding:12px 20px;border:none;background:transparent;color:var(--theme-muted);font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;transition:all .2s ease;border-bottom:3px solid transparent;white-space:nowrap}.citation-tabs__button[_ngcontent-%COMP%]:hover{background:var(--theme-card-bg);color:var(--theme-ink)}.citation-tabs__button--active[_ngcontent-%COMP%]{color:var(--theme-link);border-bottom-color:var(--theme-link);background:var(--theme-card-bg)}.citation-tabs__button[_ngcontent-%COMP%]:focus{outline:2px solid var(--theme-link);outline-offset:-2px}.citation-tabs__content[_ngcontent-%COMP%]{min-height:200px;position:relative}.citation-tabs__panel[_ngcontent-%COMP%]{padding:24px;animation:_ngcontent-%COMP%_fadeIn .2s ease-in-out}@media (max-width: 768px){.citation-tabs__panel[_ngcontent-%COMP%]{padding:16px;min-height:auto}}@media (max-width: 480px){.citation-tabs__panel[_ngcontent-%COMP%]{padding:12px}}.citation-text[_ngcontent-%COMP%]{line-height:1.6;color:var(--theme-ink);margin-bottom:16px;font-size:14px;word-break:break-word}.citation-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.citation-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:600;color:var(--theme-ink)}.citation-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic;color:var(--theme-muted)}.citation-copy-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border:1px solid var(--theme-line);border-radius:4px;background:var(--theme-card-bg);color:var(--theme-ink);font-size:13px;font-weight:500;cursor:pointer;transition:all .2s ease}.citation-copy-btn[_ngcontent-%COMP%]:hover{background:var(--theme-sand);border-color:var(--theme-hint);color:var(--theme-link)}.citation-copy-btn[_ngcontent-%COMP%]:active{background:var(--theme-link);color:var(--theme-paper);border-color:var(--theme-link)}.citation-copy-btn[_ngcontent-%COMP%]:focus{outline:2px solid var(--theme-link);outline-offset:2px}.citation-copy-btn[_ngcontent-%COMP%]:after{content:"\\1f4cb";font-size:14px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 768px){.citation-tabs[_ngcontent-%COMP%]{border-radius:6px}.citation-tabs__button[_ngcontent-%COMP%]{padding:10px 16px;font-size:13px}.citation-tabs__panel[_ngcontent-%COMP%]{min-height:auto}.citation-text[_ngcontent-%COMP%]{font-size:13px}.citation-copy-btn[_ngcontent-%COMP%]{padding:6px 12px;font-size:12px}}@media (max-width: 480px){.citation-tabs[_ngcontent-%COMP%]{border-radius:4px}.citation-tabs__button[_ngcontent-%COMP%]{padding:8px 12px;font-size:12px}.citation-text[_ngcontent-%COMP%]{font-size:12px;line-height:1.5}.citation-copy-btn[_ngcontent-%COMP%]{padding:6px 10px;font-size:11px;width:100%;justify-content:center}}']})};var gC=(n,e)=>e.name;function _C(n,e){if(n&1&&(ce(0,"a",2),b(1),ye()),n&2){let t=B().$implicit,i=B(2);ft("href",i.getAuthorLink(t),Ut),g(),H(t.name)}}function xC(n,e){if(n&1&&(ce(0,"span",3),b(1),ye()),n&2){let t=B().$implicit;g(),H(t.name)}}function vC(n,e){n&1&&(ce(0,"span",4),b(1,", "),ye())}function yC(n,e){if(n&1&&(se(0,_C,2,2,"a",2)(1,xC,2,1,"span",3),se(2,vC,2,0,"span",4)),n&2){let t=e.$implicit,i=e.$index,r=e.$count;le(t.id?0:1),g(2),le(i!==r-1?2:-1)}}function bC(n,e){if(n&1&&(ce(0,"span",0),rt(1,yC,3,2,null,null,gC),ce(3,"span",1),b(4,"."),ye()()),n&2){let t=B();g(),at(t.authors)}}var ga=class n{authors=[];getAuthorLink(e){return e.id?`/v/${e.id}`:null}hasAnyAuthorWithLink(){return this.authors.some(e=>e.id)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-article-authors"]],inputs:{authors:"authors"},decls:1,vars:1,consts:[[1,"article-authors"],[1,"article-authors__period"],[1,"article-authors__link",3,"href"],[1,"article-authors__text"],[1,"article-authors__separator"]],template:function(t,i){t&1&&se(0,bC,5,0,"span",0),t&2&&le(i.authors.length>0?0:-1)},dependencies:[Ye],styles:[".article-authors[_ngcontent-%COMP%]{display:inline;font-size:.95rem;line-height:1.6;color:var(--theme-ink)}@media (max-width: 768px){.article-authors[_ngcontent-%COMP%]{font-size:.9rem}}@media (max-width: 480px){.article-authors[_ngcontent-%COMP%]{font-size:.85rem}}.article-authors__link[_ngcontent-%COMP%]{text-decoration:none;color:var(--theme-link);font-weight:500;transition:all .2s ease}.article-authors__link[_ngcontent-%COMP%]:hover{text-decoration:underline;color:var(--theme-hint)}.article-authors__link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--theme-link);outline-offset:2px;border-radius:2px}.article-authors__text[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:500}.article-authors__separator[_ngcontent-%COMP%]{margin:0 .15em;color:var(--theme-muted)}.article-authors__period[_ngcontent-%COMP%]{color:var(--theme-ink)}"]})};function MC(n,e){if(n&1&&(ce(0,"a",4),b(1),ye()),n&2){let t=B().$implicit;ft("href",t.link,Ut),g(),H(t.term)}}function CC(n,e){if(n&1&&(ce(0,"span",5),b(1),ye()),n&2){let t=B().$implicit;g(),H(t.term)}}function wC(n,e){if(n&1&&se(0,MC,2,2,"a",4)(1,CC,2,1,"span",5),n&2){let t=e.$implicit;le(t.link?0:1)}}function SC(n,e){if(n&1&&(ce(0,"div",0)(1,"div",1)(2,"span",2),b(3),ye(),ce(4,"div",3),rt(5,wC,2,1,null,null,dh().trackByKeyword,!0),ye()()()),n&2){let t=B();g(3),re("",t.keywordsIntro(t.visibleKeywords.language),":"),g(2),at(t.visibleKeywords.keywords)}}var wc=class n{subject=null;abstractLanguage=null;get visibleKeywords(){let e=this.normalizeLanguage(this.abstractLanguage);if(!e)return null;let t=this.asRecord(this.subject);if(!t)return null;let i=t[e],r=this.normalizeSubjects(i);return r.length===0?null:{language:e,languageLabel:this.languageLabel(e),keywords:r}}keywordsIntro(e){return e==="pt"?"Palavras-chave":e==="en"?"Keywords":e==="es"?"Palabras clave":"Mots cl\xE9s"}trackByKeyword(e,t){return`${t.id??""}-${t.term}`}normalizeSubjects(e){if(!Array.isArray(e))return[];let t=[],i=new Set;for(let r of e){if(!r||typeof r!="object")continue;let a=this.asRecord(r),o=this.toText(a?.name??a?.term??a?.label),s=this.toText(a?.ID??a?.id);if(!o)continue;let l=`${s}|${o}`.toLowerCase();i.has(l)||(i.add(l),t.push({term:o,id:s||void 0,link:s?`/v/${s}`:void 0}))}return t}normalizeLanguage(e){return e}languageLabel(e){return e==="pt"?"Portugu\xEAs":e==="es"?"Espa\xF1ol":e==="en"?"English":"Fran\xE7ais"}trackByLanguage(e,t){return t.language}asRecord(e){return e&&typeof e=="object"?e:null}toText(e){return typeof e=="string"&&e.trim()?e.trim():typeof e=="number"&&Number.isFinite(e)?String(e):""}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-article-keywords"]],inputs:{subject:"subject",abstractLanguage:"abstractLanguage"},decls:1,vars:1,consts:[[1,"article-keywords"],[1,"keywords-group","keywords-group--inline"],[1,"keywords-language"],[1,"keywords-list"],[1,"keyword-badge","keyword-badge--link",3,"href"],[1,"keyword-badge"]],template:function(t,i){t&1&&se(0,SC,7,1,"div",0),t&2&&le(i.visibleKeywords?0:-1)},dependencies:[Ye,Vt],styles:[".article-keywords[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}@media (max-width: 768px){.article-keywords[_ngcontent-%COMP%]{gap:.75rem}}@media (max-width: 480px){.article-keywords[_ngcontent-%COMP%]{gap:.6rem}}.keywords-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.45rem}@media (max-width: 480px){.keywords-group[_ngcontent-%COMP%]:not(:last-child){padding-bottom:.6rem;border-bottom:1px solid var(--theme-line)}}.keywords-language[_ngcontent-%COMP%]{margin:0;font-size:.86rem;text-transform:uppercase;letter-spacing:.04em;color:var(--theme-muted);font-weight:600;white-space:nowrap}@media (max-width: 768px){.keywords-language[_ngcontent-%COMP%]{font-size:.82rem}}@media (max-width: 480px){.keywords-language[_ngcontent-%COMP%]{font-size:.78rem}}.keywords-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.6rem}@media (max-width: 768px){.keywords-list[_ngcontent-%COMP%]{gap:.5rem}}@media (max-width: 480px){.keywords-list[_ngcontent-%COMP%]{gap:.4rem}}.keyword-badge[_ngcontent-%COMP%]{display:inline-block;background:var(--theme-sand);color:var(--theme-ink);border:1px solid var(--theme-line);border-radius:.3rem;padding:.35rem .6rem;font-size:.82rem;line-height:1.2;white-space:nowrap;transition:all .2s ease}@media (max-width: 768px){.keyword-badge[_ngcontent-%COMP%]{font-size:.8rem;padding:.3rem .5rem}}@media (max-width: 480px){.keyword-badge[_ngcontent-%COMP%]{font-size:.75rem;padding:.25rem .45rem}}.keyword-badge[_ngcontent-%COMP%]:hover{background:var(--theme-line);color:var(--theme-link);border-color:var(--theme-link)}.keyword-badge--link[_ngcontent-%COMP%]{text-decoration:none}.keyword-badge--link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--theme-link);outline-offset:1px}"]})};function TC(n,e){if(n&1&&(ce(0,"div"),pt(1,"iframe",11),ye()),n&2){let t=B(2);g(),ft("src",t.iframeSafeUrl(),Po)}}function EC(n,e){n&1&&(ce(0,"p",10),b(1,"ID do artigo indispon\xEDvel para processar."),ye())}function AC(n,e){if(n&1){let t=ht();ce(0,"section",4)(1,"div",7)(2,"header",8)(3,"strong"),b(4,"Processar texto completo (NLM)"),ye(),ce(5,"button",9),Bt("click",function(){et(t);let r=B();return tt(r.closePanel())}),ce(6,"span",3),b(7,"\u2715"),ye()()(),se(8,TC,2,1,"div")(9,EC,2,0,"p",10),ye()()}if(n&2){let t=B();g(8),le(t.iframeUrl()?8:9)}}function PC(n,e){n&1&&(ce(0,"p",5),b(1,"Sem conte\xFAdo markdown dispon\xEDvel."),ye())}function IC(n,e){if(n&1&&pt(0,"article",6),n&2){let t=B();ft("innerHTML",t.renderedHtml(),Qi)}}var Sc=class n{sanitizer=Jt(No);set markdown(e){this.markdownText.set(typeof e=="string"?e:"")}articleId=null;processFullText=new ch;markdownText=qe("");panelOpen=qe(!1);iframeUrl=te(()=>{let e=this.articleId,t=e==null?"":String(e).trim();return t?`https://cip.brapci.inf.br/tools/nlp/fulltext/${t}`:""});iframeSafeUrl=te(()=>{let e=this.iframeUrl();return e?this.sanitizer.bypassSecurityTrustResourceUrl(e):null});renderedHtml=te(()=>this.renderMarkdown(this.markdownText()));onProcessFullText(){this.panelOpen.set(!0),this.processFullText.emit()}closePanel(){this.panelOpen.set(!1)}renderMarkdown(e){let t=e.replace(/\r\n/g,`
`).trim();if(!t)return"";let i=[],a=t.replace(/```([\s\S]*?)```/g,(d,h)=>{let u=this.escapeHtml(h.trim()),f=`__CODE_BLOCK_${i.length}__`;return i.push(`<pre><code>${u}</code></pre>`),f}).split(`
`),o=[],s=null,l=()=>{s&&(o.push(`</${s}>`),s=null)};for(let d of a){let h=d.trim();if(!h){l();continue}let u=h.match(/^(#{1,6})\s+(.+)$/);if(u){l();let M=u[1].length;o.push(`<h${M}>${this.renderInline(u[2])}</h${M}>`);continue}let f=h.match(/^\d+\.\s+(.+)$/);if(f){s!=="ol"&&(l(),o.push("<ol>"),s="ol"),o.push(`<li>${this.renderInline(f[1])}</li>`);continue}let _=h.match(/^[-*]\s+(.+)$/);if(_){s!=="ul"&&(l(),o.push("<ul>"),s="ul"),o.push(`<li>${this.renderInline(_[1])}</li>`);continue}l(),o.push(`<p>${this.renderInline(h)}</p>`)}l();let c=o.join(`
`);return i.forEach((d,h)=>{c=c.replace(`__CODE_BLOCK_${h}__`,d)}),c}renderInline(e){let t=this.escapeHtml(e);return t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-article-markdown-viewer"]],inputs:{markdown:"markdown",articleId:"articleId"},outputs:{processFullText:"processFullText"},decls:8,vars:2,consts:[[1,"markdown-wrapper"],[1,"markdown-toolbar"],["type","button","aria-label","Processar texto completo","title","Processar texto completo",1,"markdown-process-btn",3,"click"],["aria-hidden","true"],["role","dialog","aria-label","Painel de processamento","aria-modal","true",1,"markdown-panel-overlay"],[1,"markdown-empty"],[1,"markdown-body",3,"innerHTML"],[1,"markdown-panel-card"],[1,"markdown-panel-header"],["type","button","aria-label","Fechar painel","title","Fechar painel",1,"markdown-panel-close",3,"click"],[1,"markdown-panel-empty","mb-0"],["title","Ferramenta NLP de texto completo","loading","lazy","referrerpolicy","no-referrer",1,"markdown-panel-iframe",2,"border","0px solid #000","width","100%","height","100%",3,"src"]],template:function(t,i){t&1&&(ce(0,"div",0)(1,"div",1)(2,"button",2),Bt("click",function(){return i.onProcessFullText()}),ce(3,"span",3),b(4,"\u2699"),ye()()(),se(5,AC,10,1,"section",4),se(6,PC,2,0,"p",5)(7,IC,1,1,"article",6),ye()),t&2&&(g(5),le(i.panelOpen()?5:-1),g(),le(i.markdownText().trim()?7:6))},dependencies:[Ye],styles:["[_nghost-%COMP%]{display:block}.markdown-wrapper[_ngcontent-%COMP%]{color:var(--theme-ink)}.markdown-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:.45rem}.markdown-process-btn[_ngcontent-%COMP%]{align-items:center;background:var(--theme-sand);border:1px solid var(--theme-line);border-radius:.4rem;color:var(--theme-ink);cursor:pointer;display:inline-flex;font-size:.95rem;height:2rem;justify-content:center;transition:background-color .2s ease,color .2s ease;width:2rem}.markdown-process-btn[_ngcontent-%COMP%]:hover{background:var(--theme-link);color:#fff}.markdown-panel-overlay[_ngcontent-%COMP%]{align-items:center;background:#00000073;display:flex;inset:0;justify-content:center;padding:1rem;position:fixed;z-index:1200}.markdown-panel-card[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--theme-line);border-radius:.5rem;box-shadow:0 18px 36px #0000003d;display:grid;grid-template-rows:auto 1fr;height:min(88vh,700px);max-width:1200px;width:min(95vw,1200px)}.markdown-panel-header[_ngcontent-%COMP%]{align-items:center;border-bottom:1px solid var(--theme-line);display:flex;justify-content:space-between;padding:.65rem .8rem}.markdown-panel-close[_ngcontent-%COMP%]{align-items:center;background:transparent;border:1px solid var(--theme-line);border-radius:.35rem;color:var(--theme-ink);cursor:pointer;display:inline-flex;font-size:.9rem;height:1.9rem;justify-content:center;width:1.9rem}.markdown-panel-close[_ngcontent-%COMP%]:hover{background:var(--theme-sand)}.markdown-panel-iframe[_ngcontent-%COMP%]{border:none;height:100%;width:100%}.markdown-panel-empty[_ngcontent-%COMP%]{align-self:center;color:var(--theme-muted);justify-self:center}.markdown-empty[_ngcontent-%COMP%]{margin:0;padding:1rem;color:var(--theme-muted);text-align:center;font-style:italic}.markdown-body[_ngcontent-%COMP%]{line-height:1.65;font-size:.96rem;word-break:break-word}.markdown-body[_ngcontent-%COMP%]   :is(h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]){margin:1rem 0 .55rem;color:var(--theme-ink);line-height:1.35}.markdown-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.4rem}.markdown-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem}.markdown-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem}.markdown-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0}.markdown-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .markdown-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:.45rem 0 .75rem;padding-left:1.35rem}.markdown-body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.25rem 0}.markdown-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-link)}.markdown-body[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Courier New,Courier,monospace;background:var(--theme-sand);border:1px solid var(--theme-line);border-radius:4px;padding:.1rem .35rem}.markdown-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:.75rem 0;padding:.8rem;background:var(--theme-sand);border:1px solid var(--theme-line);border-radius:6px;overflow:auto}.markdown-body[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:transparent;border:none;padding:0}@media (max-width: 900px){.markdown-panel-card[_ngcontent-%COMP%]{height:92vh;width:96vw}}"]})};var kC=(n,e)=>e.index;function OC(n,e){n&1&&(ce(0,"p",5),b(1,"Nenhuma refer\xEAncia dispon\xEDvel."),ye())}function DC(n,e){if(n&1&&(ce(0,"p",13),b(1),ye()),n&2){let t=B().$implicit;g(),H(t.authors)}}function NC(n,e){if(n&1&&(ce(0,"li",8)(1,"div",9)(2,"span",10),b(3),ye(),ce(4,"div",11)(5,"p",12),b(6),ye(),se(7,DC,2,1,"p",13),ye()()()),n&2){let t=e.$implicit;g(3),H(t.index),g(3),H(t.citation),g(),le(t.authors?7:-1)}}function LC(n,e){if(n&1&&(ce(0,"ol",6),rt(1,NC,8,3,"li",8,kC),ye()),n&2){let t=B();g(),at(t.normalizedReferences())}}function FC(n,e){n&1&&pt(0,"iframe",18),n&2&&ft("src",e,Po)}function UC(n,e){n&1&&(ce(0,"p",19),b(1,"ID do artigo n\xE3o informado para importa\xE7\xE3o."),ye())}function BC(n,e){if(n&1){let t=ht();ce(0,"div",14),Bt("click",function(){et(t);let r=B();return tt(r.closeImportPanel())}),ce(1,"aside",15),Bt("click",function(r){return et(t),tt(r.stopPropagation())}),ce(2,"button",16),Bt("click",function(){et(t);let r=B();return tt(r.closeImportPanel())}),dn(),ce(3,"svg",3),pt(4,"path",17),ye()(),se(5,FC,1,1,"iframe",18)(6,UC,2,0,"p",19),ye()()}if(n&2){let t,i=B();g(5),le((t=i.importFrameUrl())?5:6,t)}}var Tc=class n{constructor(e){this.sanitizer=e}set article(e){this.rawArticle.set(e);let t=this.extractIdFromPayload(e);t.length>0&&this.referenceId.set(t)}set references(e){this.rawReferences.set(e)}set externalId(e){let t=this.toText(e);if(t.length>0){this.referenceId.set(t);return}let i=this.extractIdFromPayload(this.rawArticle());i.length>0&&this.referenceId.set(i)}set articleId(e){let t=this.toText(e);if(t.length>0){this.referenceId.set(t);return}let i=this.extractIdFromPayload(this.rawArticle());i.length>0&&this.referenceId.set(i)}rawArticle=qe(null);rawReferences=qe([]);referenceId=qe("");isImportPanelOpen=qe(!1);extractedId=te(()=>this.referenceId());normalizedReferences=te(()=>this.normalizeReferences(this.rawReferences()));importFrameUrl=te(()=>{let e=this.referenceId();return e?this.sanitizer.bypassSecurityTrustResourceUrl(`https://cip.brapci.inf.br/tools/nlp/cited/${encodeURIComponent(e)}`):null});openImportPanel(){this.isImportPanelOpen.set(!0)}closeImportPanel(){this.isImportPanelOpen.set(!1)}normalizeReferences(e){if(Array.isArray(e))return e.map((t,i)=>this.toReferenceEntry(t,i+1)).filter(t=>t.citation.length>0||t.meta.length>0);if(typeof e=="string"){let t=this.tryParseJson(e);return t!==void 0?this.normalizeReferences(t):this.parseTextReferences(e)}if(e&&typeof e=="object"){let t=this.toReferenceEntry(e,1);return t.citation.length>0||t.meta.length>0?[t]:[]}return[]}parseTextReferences(e){return e.split(/\r?\n+/).map(i=>this.stripLeadingNumber(i.trim())).filter(i=>i.length>0).map((i,r)=>({index:r+1,citation:i,authors:"",meta:[]}))}toReferenceEntry(e,t){if(typeof e=="string")return{index:t,citation:this.stripLeadingNumber(e.trim()),authors:"",meta:[]};if(!e||typeof e!="object")return{index:t,citation:"",authors:"",meta:[]};let i=e,r=this.pickText(i,["ca_text","text","title","name","reference","citation"])||this.buildFallbackCitation(i),a=this.pickText(i,["AUTHORS","authors","author","creator"]),o=[];return this.pushMeta(o,"ID",this.pickText(i,["id_ca","ca_id"])),this.pushMeta(o,"RDF",this.pickText(i,["ca_rdf"])),this.pushMeta(o,"DOI",this.pickText(i,["ca_doi","doi","DOI"])),this.pushMeta(o,"Ano",this.pickText(i,["ca_year","year","ano"])),this.pushMeta(o,"Peri\xF3dico",this.pickText(i,["ca_journal","journal","source","jnl_name"])),this.pushMeta(o,"Origem",this.pickText(i,["ca_journal_origem"])),this.pushMeta(o,"Volume",this.pickText(i,["ca_vol","volume"])),this.pushMeta(o,"N\xFAmero",this.pickText(i,["ca_nr","number","issue"])),this.pushMeta(o,"P\xE1ginas",this.pickText(i,["ca_pag","pages","page"])),this.pushMeta(o,"Tipo",this.pickText(i,["ca_tipo","type"])),this.pushMeta(o,"Status",this.pickText(i,["ca_status","status"])),this.pushMeta(o,"Ordem",this.pickText(i,["ca_ordem","order"])),this.pushMeta(o,"Criado em",this.pickText(i,["ca_created_at"])),this.pushMeta(o,"Atualizado em",this.pickText(i,["ca_update_at"])),this.pushMeta(o,"AI",this.pickText(i,["ca_ai"])),{index:t,citation:r,authors:a,meta:o}}buildFallbackCitation(e){let t=this.pickText(e,["AUTHORS","authors","author","creator"]),i=this.pickText(e,["title","titulo","ca_title"]),r=this.pickText(e,["ca_journal","journal","source","jnl_name"]),a=this.pickText(e,["ca_year","year","ano"]);return[t,i,r,a].filter(o=>o.length>0).join(" \u2022 ")}pushMeta(e,t,i){i.length>0&&e.push({label:t,value:i})}pickText(e,t){for(let i of t){let r=this.toText(e[i]);if(r.length>0)return r}return""}toText(e){if(typeof e=="string"){let t=e.trim();if(!t)return"";let i=t.toLowerCase();return t==="0"||i==="null"||i==="undefined"||t==="-"?"":t}return typeof e=="number"&&Number.isFinite(e)&&e!==0?String(e):""}stripLeadingNumber(e){return e.replace(/^\s*\d+\s*[\).:-]?\s*/,"").trim()}tryParseJson(e){let t=e.trim();if(!(!t.startsWith("{")&&!t.startsWith("[")))try{return JSON.parse(t)}catch{return}}extractIdFromPayload(e){if(!e)return"";if(typeof e=="string"){let i=this.tryParseJson(e);return i!==void 0?this.extractIdFromPayload(i):""}if(Array.isArray(e)){for(let i of e){let r=this.extractIdFromPayload(i);if(r.length>0)return r}return""}if(typeof e!="object")return"";let t=e;return this.pickText(t,["ID","id","Id","id_ca","ca_id"])}static \u0275fac=function(t){return new(t||n)(Kn(No))};static \u0275cmp=je({type:n,selectors:[["app-article-references-list"]],inputs:{article:"article",references:"references",externalId:[0,"id","externalId"],articleId:"articleId"},decls:8,vars:2,consts:[[1,"references-wrapper"],[1,"references-actions"],["type","button","aria-label","Importar refer\xEAncias","title","Importar refer\xEAncias",1,"references-import-btn",3,"click"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false"],["d","M5 20h14a1 1 0 0 0 1-1v-5h-2v4H6v-4H4v5a1 1 0 0 0 1 1Zm6-3h2v-7h3l-4-5-4 5h3v7Z","fill","currentColor"],[1,"references-empty"],["aria-label","Lista de refer\xEAncias",1,"references-list"],[1,"references-import-overlay"],[1,"reference-card","small"],[1,"reference-top"],[1,"reference-index"],[1,"reference-content"],[1,"reference-citation"],[1,"reference-authors"],[1,"references-import-overlay",3,"click"],["role","dialog","aria-modal","true","aria-label","Importar refer\xEAncias",1,"references-import-panel",3,"click"],["type","button","aria-label","Fechar painel","title","Fechar",1,"references-import-close",3,"click"],["d","m18.3 5.71-1.41-1.42L12 9.17 7.11 4.29 5.7 5.71 10.59 10.6 5.7 15.49l1.41 1.42L12 12.01l4.89 4.9 1.41-1.42-4.89-4.89 4.89-4.89Z","fill","currentColor"],["title","Importar refer\xEAncias","loading","lazy",3,"src"],[1,"references-import-empty"]],template:function(t,i){t&1&&(ce(0,"div",0)(1,"div",1)(2,"button",2),Bt("click",function(){return i.openImportPanel()}),dn(),ce(3,"svg",3),pt(4,"path",4),ye()()(),se(5,OC,2,0,"p",5)(6,LC,3,0,"ol",6),ye(),se(7,BC,7,1,"div",7)),t&2&&(g(5),le(i.normalizedReferences().length===0?5:6),g(2),le(i.isImportPanelOpen()?7:-1))},dependencies:[Ye],styles:["[_nghost-%COMP%]{display:block;font-family:inherit}.references-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.references-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.references-import-btn[_ngcontent-%COMP%], .references-import-close[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border:1px solid var(--theme-line);border-radius:999px;background:var(--theme-paper);color:var(--theme-ink);cursor:pointer;transition:background-color .18s ease,color .18s ease,border-color .18s ease}.references-import-btn[_ngcontent-%COMP%]:hover, .references-import-close[_ngcontent-%COMP%]:hover{background:var(--theme-link);border-color:var(--theme-link);color:var(--theme-paper)}.references-import-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .references-import-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.1rem;height:1.1rem}.references-import-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1200;display:flex;justify-content:flex-end;background:#00000059}.references-import-panel[_ngcontent-%COMP%]{width:min(980px,96vw);height:100%;background:var(--theme-paper);box-shadow:-8px 0 30px #00000040;display:grid;grid-template-rows:auto 1fr;gap:.75rem;padding:.75rem}.references-import-panel[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:1px solid var(--theme-line);border-radius:10px;background:#fff}.references-import-close[_ngcontent-%COMP%]{justify-self:end}.references-import-empty[_ngcontent-%COMP%]{margin:0;color:var(--theme-muted);font-size:.92rem}@media (max-width: 768px){.references-import-panel[_ngcontent-%COMP%]{width:100vw;padding:.6rem}}.references-empty[_ngcontent-%COMP%]{margin:0;padding:1rem;text-align:center;color:var(--theme-muted);font-style:italic}.references-list[_ngcontent-%COMP%]{display:grid;gap:.85rem;margin:0;padding:0;list-style:none}.reference-card[_ngcontent-%COMP%]{padding:1rem 1rem .9rem;border:1px solid var(--theme-line);border-radius:12px;background:var(--theme-paper);box-shadow:0 1px 2px #0000000a}.reference-top[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr);gap:.75rem;align-items:start}.reference-index[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:999px;background:var(--theme-link);color:var(--theme-paper);font-size:.85rem;font-weight:700;line-height:1}.reference-content[_ngcontent-%COMP%]{min-width:0}.reference-citation[_ngcontent-%COMP%]{margin:0;color:var(--theme-ink);font-size:.95rem;line-height:1.55;white-space:pre-wrap}.reference-authors[_ngcontent-%COMP%]{margin:.4rem 0 0;color:var(--theme-muted);font-size:.86rem;line-height:1.45;white-space:pre-wrap}.reference-meta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.85rem}.reference-chip[_ngcontent-%COMP%]{display:inline-flex;gap:.25rem;align-items:center;padding:.35rem .6rem;border:1px solid var(--theme-line);border-radius:999px;background:var(--theme-sand);color:var(--theme-ink);font-size:.8rem;line-height:1.2}.reference-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}"]})};var qt=n=>({format:n});function zC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getMarkdownData()))}),b(7),L(8,"translate"),v()(),w(9,"div",6),Ge(10,"app-article-markdown-viewer",7),v()()}if(n&2){let t=B();g(2),ze("title",zt(4,7,"article.data.aria.copyData",Tt(17,qt,V(3,5,"article.data.tabs.fulltext"))))("aria-label",zt(6,12,"article.data.aria.copyData",Tt(19,qt,V(5,10,"article.data.tabs.fulltext")))),g(5),re(" ",V(8,15,"article.data.copy")," "),g(3),Me("markdown",t.getMarkdownData())("articleId",t.getArticleId())}}function VC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getJsonData()))}),b(7),L(8,"translate"),v()(),w(9,"pre",8)(10,"code"),b(11),v()()()}if(n&2){let t=B();g(2),ze("title",zt(4,6,"article.data.aria.copyData",Tt(16,qt,V(3,4,"article.data.tabs.json"))))("aria-label",zt(6,11,"article.data.aria.copyData",Tt(18,qt,V(5,9,"article.data.tabs.json")))),g(5),re(" ",V(8,14,"article.data.copy")," "),g(4),H(t.getJsonData())}}function GC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getRdfData()))}),b(7),L(8,"translate"),v()(),w(9,"pre",8)(10,"code"),b(11),v()()()}if(n&2){let t=B();g(2),ze("title",zt(4,6,"article.data.aria.copyData",Tt(16,qt,V(3,4,"article.data.tabs.rdf"))))("aria-label",zt(6,11,"article.data.aria.copyData",Tt(18,qt,V(5,9,"article.data.tabs.rdf")))),g(5),re(" ",V(8,14,"article.data.copy")," "),g(4),H(t.getRdfData())}}function HC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getRisData()))}),b(7),L(8,"translate"),v()(),w(9,"pre",8)(10,"code"),b(11),v()()()}if(n&2){let t=B();g(2),ze("title",zt(4,6,"article.data.aria.copyData",Tt(16,qt,V(3,4,"article.data.tabs.ris"))))("aria-label",zt(6,11,"article.data.aria.copyData",Tt(18,qt,V(5,9,"article.data.tabs.ris")))),g(5),re(" ",V(8,14,"article.data.copy")," "),g(4),H(t.getRisData())}}function WC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getMarc21Data()))}),b(7),L(8,"translate"),v()(),w(9,"pre",8)(10,"code"),b(11),v()()()}if(n&2){let t=B();g(2),ze("title",zt(4,6,"article.data.aria.copyData",Tt(16,qt,V(3,4,"article.data.tabs.marc21"))))("aria-label",zt(6,11,"article.data.aria.copyData",Tt(18,qt,V(5,9,"article.data.tabs.marc21")))),g(5),re(" ",V(8,14,"article.data.copy")," "),g(4),H(t.getMarc21Data())}}function XC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getReferencesData()))}),b(7),L(8,"translate"),v()(),w(9,"div",9),Ge(10,"app-article-references-list",10),v()()}if(n&2){let t=B();g(2),ze("title",zt(4,7,"article.data.aria.copyData",Tt(17,qt,V(3,5,"article.data.tabs.references"))))("aria-label",zt(6,12,"article.data.aria.copyData",Tt(19,qt,V(5,10,"article.data.tabs.references")))),g(5),re(" ",V(8,15,"article.data.copy")," "),g(3),Me("references",t.getReferencesValue())("article",t.data)}}function qC(n,e){if(n&1){let t=ht();w(0,"div",3)(1,"div",4)(2,"button",5),L(3,"translate"),L(4,"translate"),L(5,"translate"),L(6,"translate"),Be("click",function(){et(t);let r=B();return tt(r.copyToClipboard(r.getCitationsData()))}),b(7),L(8,"translate"),v()(),w(9,"pre",8)(10,"code"),b(11),v()()()}if(n&2){let t=B();g(2),ze("title",zt(4,6,"article.data.aria.copyData",Tt(16,qt,V(3,4,"article.data.tabs.citations"))))("aria-label",zt(6,11,"article.data.aria.copyData",Tt(18,qt,V(5,9,"article.data.tabs.citations")))),g(5),re(" ",V(8,14,"article.data.copy")," "),g(4),H(t.getCitationsData())}}var _a=class n{data=null;selectedTab=qe("fulltext");selectTab(e){this.selectedTab.set(e)}getFullTextData(){let e=this.asRecord(this.data);return e?this.extractListOrText(e,["fulltext","full_text","texto_completo","textoCompleto","text","body","content","description","abstract","resumo","resumen"]):""}getMarkdownData(){let e=this.asRecord(this.data);if(!e)return"";let t=this.pickText(e,["markdown","md","fulltext_markdown"]);if(t)return t;let i=this.asRecord(e.data);return i?this.pickText(i,["markdown","md","fulltext_markdown"]):""}getArticleId(){let e=this.asRecord(this.data);if(!e)return"";let t=a=>{let o=a.ID??a.id;return typeof o=="number"&&Number.isFinite(o)?String(o):this.toText(o)},i=t(e);if(i)return i;let r=this.asRecord(e.data);return r?t(r):""}getJsonData(){if(!this.data)return"{}";try{return JSON.stringify(this.data,null,2)}catch{return"{}"}}getRdfData(){if(!this.data||typeof this.data!="object")return"";let e=this.data,t=`@prefix dc: <http://purl.org/dc/elements/1.1/> .
`;t+=`@prefix dcat: <http://www.w3.org/ns/dcat#> .
`,t+=`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

`;let i=e.ID?`<http://example.com/article/${e.ID}>`:"<http://example.com/article/unknown>";if(e.title||e.titulo){let r=e.title||e.titulo;t+=`${i} dc:title "${this.escapeQuotes(String(r))}" .
`}if(e.creator_author&&(Array.isArray(e.creator_author)?e.creator_author:[e.creator_author]).forEach(a=>{if(a&&typeof a=="object"){let s=a.name;s&&(t+=`${i} dc:creator "${this.escapeQuotes(String(s))}" .
`)}}),e.publisher&&(t+=`${i} dc:publisher "${this.escapeQuotes(String(e.publisher))}" .
`),e.year||e.ano){let r=e.year||e.ano;t+=`${i} dc:date "${this.escapeQuotes(String(r))}" .
`}if(e.language||e.idioma){let r=e.language||e.idioma;t+=`${i} dc:language "${this.escapeQuotes(String(r))}" .
`}return t}getRisData(){let e=this.asRecord(this.data);if(!e)return"";let t=[];t.push("TY  - JOUR");let i=this.pickText(e,["title","titulo"]);i&&t.push(`TI  - ${i}`);for(let c of this.getAuthors(e))t.push(`AU  - ${c}`);let r=this.pickText(e,["year","ano"]);r&&t.push(`PY  - ${r}`);let a=this.pickText(e,["publisher","jnl_name","journal","source"]);a&&t.push(`JO  - ${a}`);let o=this.pickText(e,["doi","DOI"]);o&&t.push(`DO  - ${o}`);let s=this.pickText(e,["resource_pdf"]);s&&t.push(`UR  - ${s}`);for(let c of this.getKeywords(e))t.push(`KW  - ${c}`);let l=this.pickText(e,["description","abstract"]);return l&&t.push(`AB  - ${l}`),t.push("ER  -"),t.join(`
`)}getMarc21Data(){let e=this.asRecord(this.data);if(!e)return"";let t=[],i=this.pickText(e,["ID"])||"000000",r=this.pickText(e,["title","titulo"]),a=this.pickText(e,["year","ano"]),o=this.pickText(e,["publisher","jnl_name","journal","source"]),s=this.pickText(e,["language","idioma"]),l=this.pickText(e,["description","abstract"]),c=this.pickText(e,["doi","DOI"]),d=this.pickText(e,["resource_pdf"]);t.push("=LDR  00000naa a2200000 i 4500"),t.push(`=001  ${i}`),c&&t.push(`=024  7\\$a${c}$2doi`),s&&t.push(`=041  0\\$a${s}`),r&&t.push(`=245  10$a${r}`),(o||a)&&t.push(`=260  \\\\$b${o}$c${a}`),l&&t.push(`=520  \\\\$a${l}`);for(let h of this.getKeywords(e))t.push(`=650  \\0$a${h}`);for(let h of this.getAuthors(e))t.push(`=700  1\\$a${h}`);return d&&t.push(`=856  40$u${d}`),t.join(`
`)}getReferencesData(){let e=this.asRecord(this.data);return e?this.extractListOrText(e,["references","referencias","refer\xEAncias","refs","bibliography","bibliografia"]):""}getReferencesValue(){let e=this.asRecord(this.data);return e?this.extractValue(e,["references","referencias","refer\xEAncias","refs","bibliography","bibliografia"]):[]}getCitationsData(){let e=this.asRecord(this.data);return e?this.extractListOrText(e,["citations","citacoes","cita\xE7\xF5es","cited_by","citedBy","citation_list","citationList"]):""}asRecord(e){return e&&typeof e=="object"?e:null}toText(e){return typeof e=="string"&&e.trim()?e.trim():""}pickText(e,t){for(let i of t){let r=this.toText(e[i]);if(r)return r}return""}getAuthors(e){let t=e.creator_author;return Array.isArray(t)?t.map(i=>!i||typeof i!="object"?"":this.toText(i.name)).filter(i=>i.length>0):[]}getKeywords(e){let t=new Set,i=a=>{if(Array.isArray(a)){for(let s of a){let l=this.toText(s);l&&t.add(l)}return}let o=this.toText(a);if(o)for(let s of o.split(/[,;]/).map(l=>l.trim()).filter(l=>l.length>0))t.add(s)};i(e.keywords),i(e.keyword);let r=this.asRecord(e.subject)??this.asRecord(e.subjects);if(r)for(let a of Object.values(r))i(a);return[...t]}extractListOrText(e,t){for(let r of t){let a=e[r],o=this.normalizeListOrText(a);if(o)return o}let i=this.asRecord(e.data);if(i)for(let r of t){let a=i[r],o=this.normalizeListOrText(a);if(o)return o}return""}extractValue(e,t){for(let r of t){let a=e[r];if(a!=null)return a}let i=this.asRecord(e.data);if(i)for(let r of t){let a=i[r];if(a!=null)return a}return[]}normalizeListOrText(e){if(Array.isArray(e)){let t=e.map(i=>{if(typeof i=="string")return i.trim();if(i&&typeof i=="object"){let r=i;return this.toText(r.text)||this.toText(r.title)||this.toText(r.name)||this.toText(r.reference)||this.toText(r.citation)}return""}).filter(i=>i.length>0);return t.length>0?t.map((i,r)=>`${r+1}. ${i}`).join(`
`):""}if(typeof e=="string")return e.trim();if(e&&typeof e=="object")try{return JSON.stringify(e,null,2)}catch{return""}return""}escapeQuotes(e){return e.replace(/"/g,'\\"')}copyToClipboard(e){navigator.clipboard.writeText(e).catch(()=>{console.error("Erro ao copiar para \xE1rea de transfer\xEAncia")})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-article-data"]],inputs:{data:"data"},decls:44,vars:92,consts:[[1,"article-data"],[1,"data-tabs"],[1,"data-tab",3,"click"],[1,"data-content"],[1,"data-toolbar"],[1,"copy-btn",3,"click"],[1,"markdown-panel"],[3,"markdown","articleId"],[1,"data-code"],[1,"references-panel"],[3,"references","article"]],template:function(t,i){t&1&&(w(0,"div",0)(1,"div",1)(2,"button",2),L(3,"translate"),L(4,"translate"),Be("click",function(){return i.selectTab("fulltext")}),b(5),L(6,"translate"),v(),w(7,"button",2),L(8,"translate"),L(9,"translate"),Be("click",function(){return i.selectTab("json")}),b(10),L(11,"translate"),v(),w(12,"button",2),L(13,"translate"),L(14,"translate"),Be("click",function(){return i.selectTab("rdf")}),b(15),L(16,"translate"),v(),w(17,"button",2),L(18,"translate"),L(19,"translate"),Be("click",function(){return i.selectTab("ris")}),b(20),L(21,"translate"),v(),w(22,"button",2),L(23,"translate"),L(24,"translate"),Be("click",function(){return i.selectTab("marc21")}),b(25),L(26,"translate"),v(),w(27,"button",2),L(28,"translate"),L(29,"translate"),Be("click",function(){return i.selectTab("references")}),b(30),L(31,"translate"),v(),w(32,"button",2),L(33,"translate"),L(34,"translate"),Be("click",function(){return i.selectTab("citations")}),b(35),L(36,"translate"),v()(),se(37,zC,11,21,"div",3)(38,VC,12,20,"div",3)(39,GC,12,20,"div",3)(40,HC,12,20,"div",3)(41,WC,12,20,"div",3)(42,XC,11,21,"div",3)(43,qC,12,20,"div",3),v()),t&2&&(g(2),Ke("active",i.selectedTab()==="fulltext"),ze("aria-label",zt(4,31,"article.data.aria.viewData",Tt(78,qt,V(3,29,"article.data.tabs.fulltext")))),g(3),re(" ",V(6,34,"article.data.tabs.fulltext")," "),g(2),Ke("active",i.selectedTab()==="json"),ze("aria-label",zt(9,38,"article.data.aria.viewData",Tt(80,qt,V(8,36,"article.data.tabs.json")))),g(3),re(" ",V(11,41,"article.data.tabs.json")," "),g(2),Ke("active",i.selectedTab()==="rdf"),ze("aria-label",zt(14,45,"article.data.aria.viewData",Tt(82,qt,V(13,43,"article.data.tabs.rdf")))),g(3),re(" ",V(16,48,"article.data.tabs.rdf")," "),g(2),Ke("active",i.selectedTab()==="ris"),ze("aria-label",zt(19,52,"article.data.aria.viewData",Tt(84,qt,V(18,50,"article.data.tabs.ris")))),g(3),re(" ",V(21,55,"article.data.tabs.ris")," "),g(2),Ke("active",i.selectedTab()==="marc21"),ze("aria-label",zt(24,59,"article.data.aria.viewData",Tt(86,qt,V(23,57,"article.data.tabs.marc21")))),g(3),re(" ",V(26,62,"article.data.tabs.marc21")," "),g(2),Ke("active",i.selectedTab()==="references"),ze("aria-label",zt(29,66,"article.data.aria.viewData",Tt(88,qt,V(28,64,"article.data.tabs.references")))),g(3),re(" ",V(31,69,"article.data.tabs.references")," "),g(2),Ke("active",i.selectedTab()==="citations"),ze("aria-label",zt(34,73,"article.data.aria.viewData",Tt(90,qt,V(33,71,"article.data.tabs.citations")))),g(3),re(" ",V(36,76,"article.data.tabs.citations")," "),g(2),le(i.selectedTab()==="fulltext"?37:i.selectedTab()==="json"?38:i.selectedTab()==="rdf"?39:i.selectedTab()==="ris"?40:i.selectedTab()==="marc21"?41:i.selectedTab()==="references"?42:i.selectedTab()==="citations"?43:-1))},dependencies:[Ye,Vt,Sc,Tc,$t],styles:[".article-data[_ngcontent-%COMP%]{width:100%}.article-data[_ngcontent-%COMP%]   .data-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;border-bottom:2px solid var(--theme-line);margin-bottom:1.5rem}.article-data[_ngcontent-%COMP%]   .data-tab[_ngcontent-%COMP%]{padding:.75rem 1.5rem;background:transparent;border:none;cursor:pointer;font-size:.95rem;font-weight:500;color:var(--theme-muted);border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .2s ease-in-out}.article-data[_ngcontent-%COMP%]   .data-tab[_ngcontent-%COMP%]:hover{color:var(--theme-ink);border-bottom-color:var(--theme-link)}.article-data[_ngcontent-%COMP%]   .data-tab.active[_ngcontent-%COMP%]{color:var(--theme-link);border-bottom-color:var(--theme-link)}.article-data[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%]{margin-top:1rem}.article-data[_ngcontent-%COMP%]   .references-panel[_ngcontent-%COMP%]{background-color:var(--theme-sand);border:1px solid var(--theme-line);border-radius:4px;padding:1rem;max-height:500px;overflow-y:auto}.article-data[_ngcontent-%COMP%]   .markdown-panel[_ngcontent-%COMP%]{background-color:var(--theme-paper);border:1px solid var(--theme-line);border-radius:4px;padding:1rem;max-height:500px;overflow-y:auto}.article-data[_ngcontent-%COMP%]   .data-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:1rem}.article-data[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]{padding:.5rem 1rem;background-color:var(--theme-link);color:var(--theme-paper);border:none;border-radius:4px;cursor:pointer;font-size:.85rem;font-weight:500;transition:all .2s ease-in-out}.article-data[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover{background-color:var(--theme-hint);transform:translateY(-1px);box-shadow:0 2px 8px #00000026}.article-data[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:active{transform:translateY(0)}.article-data[_ngcontent-%COMP%]   .data-code[_ngcontent-%COMP%]{background-color:var(--theme-sand);border:1px solid var(--theme-line);border-radius:4px;padding:1.5rem;font-family:Courier New,Courier,monospace;font-size:.85rem;line-height:1.6;overflow-x:auto;color:var(--theme-ink);max-height:500px;overflow-y:auto}.article-data[_ngcontent-%COMP%]   .data-code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:var(--theme-ink);word-wrap:break-word;white-space:pre-wrap}@media (max-width: 768px){.article-data[_ngcontent-%COMP%]   .data-tabs[_ngcontent-%COMP%]{gap:.25rem}.article-data[_ngcontent-%COMP%]   .data-tab[_ngcontent-%COMP%]{padding:.6rem 1rem;font-size:.9rem}.article-data[_ngcontent-%COMP%]   .data-code[_ngcontent-%COMP%]{padding:1rem;font-size:.8rem;max-height:400px}}@media (max-width: 480px){.article-data[_ngcontent-%COMP%]   .data-tabs[_ngcontent-%COMP%]{gap:0;overflow-x:auto}.article-data[_ngcontent-%COMP%]   .data-tab[_ngcontent-%COMP%]{padding:.5rem .75rem;font-size:.8rem;min-width:fit-content}.article-data[_ngcontent-%COMP%]   .data-code[_ngcontent-%COMP%]{padding:.75rem;font-size:.75rem;max-height:350px}}"]})};var Ec=class n{pdfUrl="";articleId=null;articleTitle="";articleAuthors="";articleKeywords="";copyLinkSuccess=!1;linkedInImageUrl="https://cip.brapci.inf.br/img/linkedin.png";linkedInFallbackImageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='3' fill='%230A66C2'/%3E%3Cpath fill='white' d='M7.15 8.3A1.35 1.35 0 1 1 7.15 5.6a1.35 1.35 0 0 1 0 2.7ZM5.95 18.4h2.4V9.6h-2.4v8.8Zm4.1 0h2.3v-4.7c0-1.2.25-2.35 1.74-2.35 1.47 0 1.49 1.38 1.49 2.44v4.6h2.4v-5.1c0-2.5-.53-4.43-3.46-4.43-1.4 0-2.34.77-2.73 1.5h-.04v-1.28h-2.2c.03.83 0 8.8 0 8.8Z'/%3E%3C/svg%3E";articleViewUrl=te(()=>this.articleId?`https://brapci.inf.br/v/${this.articleId}`:"");copyToClipboard(){let e=this.articleViewUrl()||this.pdfUrl;e&&navigator.clipboard.writeText(e).then(()=>{this.copyLinkSuccess=!0,setTimeout(()=>{this.copyLinkSuccess=!1},2e3)}).catch(t=>{console.error("Failed to copy URL:",t)})}shareOnWhatsApp(){let e=this.articleViewUrl()||this.pdfUrl;if(!e)return;let i=`https://wa.me/?text=${encodeURIComponent(`Check this article: ${e}`)}`;window.open(i,"_blank","noopener,noreferrer")}shareOnInstagram(){window.open("https://www.instagram.com/","_blank","noopener,noreferrer")}shareOnLinkedIn(){let e=this.articleViewUrl()||this.pdfUrl;if(!e)return;let t=this.articleTitle?.trim(),i=this.articleAuthors?.trim(),r=this.articleKeywords?.trim(),a=[];i&&a.push(`Autores: ${i}`),r&&a.push(`Palavras-chave: ${r}`);let o=new URLSearchParams({mini:"true",url:e,source:"Brapci",image:this.linkedInImageUrl});t&&o.set("title",t),a.length>0&&o.set("summary",a.join(" | "));let s=`https://www.linkedin.com/shareArticle?${o.toString()}`;window.open(s,"_blank","noopener,noreferrer")}onLinkedInImageError(e){let t=e.target;t&&t.src!==this.linkedInFallbackImageUrl&&(t.src=this.linkedInFallbackImageUrl)}downloadPdf(){if(!this.pdfUrl)return;let e=document.createElement("a");e.href=this.pdfUrl,e.target="_blank",e.rel="noopener noreferrer",document.body.appendChild(e),e.click(),document.body.removeChild(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-article-pdf-link"]],inputs:{pdfUrl:"pdfUrl",articleId:"articleId",articleTitle:"articleTitle",articleAuthors:"articleAuthors",articleKeywords:"articleKeywords"},decls:34,vars:36,consts:[[1,"article-pdf-link"],[1,"pdf-action-btn","pdf-download-btn",3,"click","title"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2",1,"icon"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","y1","15","x2","12","y2","3"],[1,"btn-text"],[1,"pdf-action-row"],[1,"pdf-action-btn","pdf-copy-btn","pdf-icon-btn",3,"click","title"],["d","M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"],["x","8","y","2","width","8","height","4","rx","1","ry","1"],[1,"pdf-action-btn","pdf-whatsapp-btn","pdf-icon-btn",3,"click","title"],["viewBox","0 0 24 24","fill","currentColor",1,"icon","whatsapp-icon"],["d","M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.391-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.946 6.96c0 1.836.577 3.603 1.659 5.089l-1.744 6.368 6.565-1.722c1.482.822 3.157 1.255 4.819 1.255 3.846 0 6.979-3.133 6.979-6.979 0-1.862-.72-3.612-2.04-4.932-1.32-1.32-3.07-2.047-4.939-2.047m11.226-1.16c1.934 1.933 3.032 4.507 3.032 7.25 0 5.653-4.596 10.25-10.25 10.25-2.408 0-4.663-.84-6.476-2.392l-7.368 1.931 1.968-7.181C2.75 15.848 2 14.289 2 12.572 2 6.918 6.597 2.322 12.25 2.322c2.757 0 5.331 1.099 7.268 3.036"],[1,"pdf-action-btn","pdf-instagram-btn","pdf-icon-btn",3,"click","title"],["viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2",1,"icon","instagram-icon"],["x","3","y","3","width","18","height","18","rx","5","ry","5"],["cx","12","cy","12","r","4"],["cx","17.5","cy","6.5","r","1"],[1,"pdf-action-btn","pdf-linkedin-btn","pdf-icon-btn",3,"click","title"],["width","24","height","24","loading","lazy","decoding","async","alt","","aria-hidden","true",1,"icon","linkedin-image",3,"error","src"]],template:function(t,i){t&1&&(ce(0,"div",0)(1,"button",1),L(2,"translate"),L(3,"translate"),Bt("click",function(){return i.downloadPdf()}),dn(),ce(4,"svg",2),pt(5,"path",3)(6,"polyline",4)(7,"line",5),ye(),Zn(),ce(8,"span",6),b(9),L(10,"translate"),ye()(),ce(11,"div",7)(12,"button",8),L(13,"translate"),L(14,"translate"),Bt("click",function(){return i.copyToClipboard()}),dn(),ce(15,"svg",2),pt(16,"path",9)(17,"rect",10),ye()(),Zn(),ce(18,"button",11),L(19,"translate"),L(20,"translate"),Bt("click",function(){return i.shareOnWhatsApp()}),dn(),ce(21,"svg",12),pt(22,"path",13),ye()(),Zn(),ce(23,"button",14),L(24,"translate"),L(25,"translate"),Bt("click",function(){return i.shareOnInstagram()}),dn(),ce(26,"svg",15),pt(27,"rect",16)(28,"circle",17)(29,"circle",18),ye()(),Zn(),ce(30,"button",19),L(31,"translate"),L(32,"translate"),Bt("click",function(){return i.shareOnLinkedIn()}),ce(33,"img",20),Bt("error",function(a){return i.onLinkedInImageError(a)}),ye()()()()),t&2&&(g(),ft("title",V(2,14,"article.actions.downloadPdf")),ze("aria-label",V(3,16,"article.actions.downloadPdf")),g(8),H(V(10,18,"article.actions.downloadPdf")),g(3),Ke("success",i.copyLinkSuccess),ft("title",i.copyLinkSuccess?"Copiado!":V(13,20,"article.actions.copyLink")),ze("aria-label",i.copyLinkSuccess?"Copiado!":V(14,22,"article.actions.copyLink")),g(6),ft("title",V(19,24,"article.actions.shareWhatsApp")),ze("aria-label",V(20,26,"article.actions.shareWhatsApp")),g(5),ft("title",V(24,28,"article.actions.shareInstagram")),ze("aria-label",V(25,30,"article.actions.shareInstagram")),g(7),ft("title",V(31,32,"article.actions.shareLinkedIn")),ze("aria-label",V(32,34,"article.actions.shareLinkedIn")),g(3),ft("src",i.linkedInImageUrl,Ut))},dependencies:[Ye,Vt,$t],styles:['@charset "UTF-8";.article-pdf-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;width:100%}.pdf-action-row[_ngcontent-%COMP%]{display:flex;gap:.4rem;align-items:center}.pdf-icon-btn[_ngcontent-%COMP%]{padding:.5rem!important;gap:0!important;width:auto!important}.pdf-icon-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem}.pdf-icon-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{display:none}.pdf-action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.6rem 1rem;border:none;border-radius:.4rem;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .2s ease;text-decoration:none;color:var(--theme-paper, #fff);white-space:nowrap}.pdf-action-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #0003}.pdf-action-btn[_ngcontent-%COMP%]:active{transform:translateY(0)}.pdf-action-btn[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--theme-link);outline-offset:2px}.pdf-download-btn[_ngcontent-%COMP%]{background:#d91e18;color:var(--theme-paper, #fff)}.pdf-download-btn[_ngcontent-%COMP%]:hover{background:#c41810}.pdf-download-btn[_ngcontent-%COMP%]:active{background:#a91410}.pdf-copy-btn[_ngcontent-%COMP%]{background:#5b77b5;color:var(--theme-paper, #fff)}.pdf-copy-btn[_ngcontent-%COMP%]:hover{background:#4a5f99}.pdf-copy-btn[_ngcontent-%COMP%]:active{background:#3a4f89}.pdf-copy-btn.success[_ngcontent-%COMP%]{background:#28a745}.pdf-copy-btn.success[_ngcontent-%COMP%]   .copy-text[_ngcontent-%COMP%]:after{content:" \\2713"}.pdf-whatsapp-btn[_ngcontent-%COMP%]{background:#25d366;color:#fff}.pdf-whatsapp-btn[_ngcontent-%COMP%]:hover{background:#1fa85d}.pdf-whatsapp-btn[_ngcontent-%COMP%]:active{background:#1a8d53}.pdf-instagram-btn[_ngcontent-%COMP%]{background:#e1306c;color:#fff}.pdf-instagram-btn[_ngcontent-%COMP%]:hover{background:#c62a5c}.pdf-instagram-btn[_ngcontent-%COMP%]:active{background:#aa244f}.pdf-linkedin-btn[_ngcontent-%COMP%]{background:#0a66c2;color:#fff}.pdf-linkedin-btn[_ngcontent-%COMP%]:hover{background:#0957a5}.pdf-linkedin-btn[_ngcontent-%COMP%]:active{background:#084a8c}.icon[_ngcontent-%COMP%]{width:1rem;height:1rem;flex-shrink:0;stroke:currentColor}.icon.whatsapp-icon[_ngcontent-%COMP%]{fill:currentColor}.icon.linkedin-icon[_ngcontent-%COMP%]{fill:currentColor;stroke:none}.icon.linkedin-image[_ngcontent-%COMP%]{object-fit:contain;border-radius:2px;stroke:none}@media (max-width: 768px){.btn-text[_ngcontent-%COMP%]{font-size:.8rem}}@media (max-width: 480px){.btn-text[_ngcontent-%COMP%]{font-size:.75rem}}.copy-text[_ngcontent-%COMP%]{transition:all .3s ease}@media (max-width: 480px){.whatsapp-text[_ngcontent-%COMP%]{display:none}}@media (max-width: 768px){.article-pdf-link[_ngcontent-%COMP%]{gap:.4rem}.pdf-action-btn[_ngcontent-%COMP%]{padding:.5rem .8rem;font-size:.85rem}}@media (max-width: 480px){.article-pdf-link[_ngcontent-%COMP%]{gap:.3rem}.pdf-action-btn[_ngcontent-%COMP%]{padding:.45rem .6rem;font-size:.75rem;flex:1}.pdf-action-btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px)}}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-copy-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-copy-btn[_ngcontent-%COMP%]{background:#4a7ab5}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-copy-btn[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-copy-btn[_ngcontent-%COMP%]:hover{background:#3a6aa5}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-copy-btn[_ngcontent-%COMP%]:active, body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-copy-btn[_ngcontent-%COMP%]:active{background:#2a5a95}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-copy-btn.success[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-copy-btn.success[_ngcontent-%COMP%]{background:#2da849}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-instagram-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-instagram-btn[_ngcontent-%COMP%]{background:#c02a5a}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-instagram-btn[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-instagram-btn[_ngcontent-%COMP%]:hover{background:#a9244f}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-instagram-btn[_ngcontent-%COMP%]:active, body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-instagram-btn[_ngcontent-%COMP%]:active{background:#922045}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-linkedin-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-linkedin-btn[_ngcontent-%COMP%]{background:#0857a3}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-linkedin-btn[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-linkedin-btn[_ngcontent-%COMP%]:hover{background:#074b8d}body.theme-master.theme-dark[_nghost-%COMP%]   .pdf-linkedin-btn[_ngcontent-%COMP%]:active, body.theme-master.theme-dark   [_nghost-%COMP%]   .pdf-linkedin-btn[_ngcontent-%COMP%]:active{background:#063f77}']})};var wg=()=>["datePublished","year","ano"],Sg=()=>["language","idioma"],Tg=()=>["doi","DOI"],jC=()=>["journal","jnl_name","publisher","source"],$C=(n,e)=>e.label,Eg=(n,e)=>e.language;function YC(n,e){if(n&1&&(w(0,"p",10),b(1),v()),n&2){let t=B();g(),H(t.legend())}}function JC(n,e){if(n&1&&(w(0,"li")(1,"strong"),b(2),v(),b(3),v()),n&2){let t=e.$implicit;g(2),re("",t.languageLabel,":"),g(),re(" ",t.title," ")}}function ZC(n,e){if(n&1&&(w(0,"ul",14),rt(1,JC,4,2,"li",null,Eg),v()),n&2){let t=B();g(),at(t.titleVariants())}}function KC(n,e){if(n&1&&(w(0,"div",15)(1,"span",26),b(2),L(3,"translate"),v(),Ge(4,"app-article-authors",27),v()),n&2){let t=B();g(2),re("",V(3,2,"article.authors.label"),": "),g(2),Me("authors",t.creatorAuthors())}}function QC(n,e){if(n&1&&(w(0,"div")(1,"strong"),b(2),L(3,"translate"),v(),b(4),v()),n&2){let t=B();g(2),re("",V(3,2,"article.sections.label"),":"),g(2),re(" ",t.sectionNames().join(", ")," ")}}function ew(n,e){if(n&1){let t=ht();w(0,"img",28),Be("error",function(r){et(t);let a=B();return tt(a.hasImageError(r))}),v()}if(n&2){let t=B();Me("src",t.journalCoverUrl(),Ut)("alt","Capa da revista "+t.journalName())}}function tw(n,e){n&1&&(w(0,"div",19),b(1),L(2,"translate"),v()),n&2&&(g(),re(" ",V(2,1,"article.noCover")," "))}function nw(n,e){if(n&1&&Ge(0,"app-article-pdf-link",20),n&2){let t=B();Me("pdfUrl",t.pdfUrl())("articleId",t.articleId())("articleTitle",t.primaryTitle())("articleAuthors",t.articleAuthorsForShare())("articleKeywords",t.articleKeywordsForShare())}}function iw(n,e){if(n&1&&(w(0,"article",30)(1,"h4"),b(2),v(),w(3,"p"),b(4),v(),Ge(5,"app-article-keywords",31),v()),n&2){let t=e.$implicit,i=B(2);g(2),H(i.getAbstractLabel(t.language)),g(2),H(t.text),g(),Me("subject",i.subjectData())("abstractLanguage",t.language)}}function rw(n,e){if(n&1&&(w(0,"section",21)(1,"h3",22),b(2),L(3,"translate"),v(),w(4,"div",29),rt(5,iw,6,4,"article",30,Eg),v()()),n&2){let t=B();g(2),H(V(3,1,"article.abstract.title")),g(3),at(t.abstractVariants())}}function aw(n,e){if(n&1&&(w(0,"section",21)(1,"h3",22),b(2),L(3,"translate"),v(),Ge(4,"app-citation-tabs",32),v()),n&2){let t=B();g(2),H(V(3,2,"article.citation.title")),g(2),Me("citations",t.getCitations())}}function ow(n,e){if(n&1&&(w(0,"div",24)(1,"small"),b(2),v(),w(3,"strong"),b(4),v()()),n&2){let t=e.$implicit;g(2),H(t.label),g(2),H(t.value)}}var xa=class n{metaService=Jt(Oo);titleService=Jt(Do);data=null;metrics=[];dataTag=null;preferredLanguageOrder=["pt","es","en","fr"];field(e){let t=this.asRecord(this.data);if(!t)return"-";for(let i of e){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return"-"}listField(e){let t=this.asRecord(this.data);if(!t)return[];for(let i of e){let r=t[i];if(Array.isArray(r)){let a=r.map(o=>String(o).trim()).filter(o=>o.length>0);if(a.length>0)return a}if(typeof r=="string"&&r.trim())return r.split(";").map(a=>a.trim()).filter(a=>a.length>0)}return[]}titleVariants(){let e=this.asRecord(this.data);if(!e)return[];let t=new Map,i=(o,s)=>{let l=this.toText(s);if(!l)return;let c=this.normalizeLanguage(o);t.get(c)||t.set(c,{language:c,languageLabel:this.languageLabel(c),title:l})};this.addVariantsFromArray(e.variants,i),i("pt",e.title_pt??e.titulo_pt),i("es",e.title_es??e.titulo_es),i("en",e.title_en??e.titulo_en),i("fr",e.title_fr??e.titulo_fr);let r=this.asRecord(e.data),a=this.asRecord(r?.hasTitle);return a&&this.addLocalizedFromGroupedObject(a,(o,s)=>i(o,s)),i(e.language??e.idioma,e.title??e.titulo??e.Title),[...t.values()].sort((o,s)=>this.preferredLanguageOrder.indexOf(o.language)-this.preferredLanguageOrder.indexOf(s.language))}primaryTitle(){let e=this.titleVariants();return e.length>0?e[0].title:this.field(["title","titulo","Title"])}getAbstractLabel(e){return e==="pt"?"Resumo":e==="es"?"Resumen":e==="en"?"Abstract":e==="fr"?"R\xE9sum\xE9":"Resumo"}abstractLanguage(e){return e.language}subjectData(){let e=this.asRecord(this.data);return e?e.subject??e.subjects??this.asRecord(e.data)?.hasSubject??this.asRecord(e.data)?.subjects??null:null}metaRecord(){let e=this.asRecord(this.data);return e?this.asRecord(e.meta)??this.asRecord(e.Meta)??this.asRecord(this.asRecord(e.data)?.meta)??this.asRecord(this.asRecord(e.data)?.Meta):null}metaField(e){let t=this.metaRecord();if(!t)return this.field(e);for(let i of e){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return this.field(e)}abstractSummary(){return this.abstractVariants().map(t=>t.text).join(" ").trim()}articleJsonLd(){let e=this.creatorAuthors().map(i=>({"@type":"Person",name:i.name,url:i.id?`/v/${i.id}`:void 0})),t={"@context":"https://schema.org","@type":"ScholarlyArticle",name:this.primaryTitle(),headline:this.primaryTitle(),description:this.abstractSummary()||void 0,author:e.length>0?e:void 0,datePublished:this.metaField(["datePublished","year","ano"])||void 0,inLanguage:this.metaField(["language","idioma"])||void 0,isPartOf:this.journalName()||void 0,identifier:this.metaField(["doi","DOI"])||void 0,url:this.pdfUrl()||void 0};return JSON.stringify(t)}journalCoverUrl(){return this.field(["cover"])}journalName(){let e=this.asRecord(this.asRecord(this.data)?.Issue);return(e?this.toText(e.publisher):"")||this.metaField(["journal","jnl_name","publisher","source"])}legend(){return this.field(["legend"])}pdfUrl(){return this.field(["resource_pdf"])}articleId(){return this.field(["ID","id"])}articleAuthorsForShare(){return this.creatorAuthors().map(e=>e.name).filter(e=>e.trim().length>0).join("; ")}articleKeywordsForShare(){return this.getKeywordsForMeta()}creatorAuthors(){let e=this.asRecord(this.data);if(!e)return[];let t=e.creator_author,i=Array.isArray(t)?t.map(l=>{if(!l||typeof l!="object")return null;let c=l,d=this.toText(c.name),h=this.toText(c.ID);return d?h?{name:d,id:h}:{name:d}:null}).filter(l=>l!==null):[];if(i.length>0)return i;let r=this.asRecord(e.data),a=this.asRecord(r?.hasAuthor),o=a?a.nn:null;if(!Array.isArray(o))return[];let s=[];for(let l of o){if(!l||typeof l!="object")continue;let c=l;for(let[d,h]of Object.entries(c)){let u=this.toText(d),f=this.toText(h);u&&s.push({name:u,id:f||void 0})}}return s}authorLink(e){return e.id?`/v/${e.id}`:null}abstractVariants(){let e=this.asRecord(this.data);if(!e)return[];let t=new Map,i=(o,s)=>{let l=this.toText(s);if(!l)return;let c=this.normalizeLanguage(o);t.has(c)||t.set(c,{language:c,languageLabel:this.languageLabel(c),text:l})};i(e.language??e.idioma,e.description??e.abstract);let r=this.asRecord(e.data),a=this.asRecord(r?.hasAbstract);return a&&this.addLocalizedFromGroupedObject(a,(o,s)=>i(o,s)),[...t.values()].sort((o,s)=>this.preferredLanguageOrder.indexOf(o.language)-this.preferredLanguageOrder.indexOf(s.language))}citation(e){let t=this.asRecord(this.data);if(!t)return"";let i=this.asRecord(t.cited);return i?this.toText(i[e]):""}hasCitationData(){return!!(this.citation("abnt")||this.citation("apa")||this.citation("vancouver"))}getCitations(){return{abnt:this.citation("abnt"),apa:this.citation("apa"),vancouver:this.citation("vancouver")}}sectionNames(){let e=this.asRecord(this.data);if(!e)return[];let t=e.section;return Array.isArray(t)?t.map(i=>!i||typeof i!="object"?"":this.toText(i.name)).filter(i=>i.length>0):[]}hasImageError(e){let t=e.target;t&&(t.style.display="none")}toText(e){return typeof e=="string"&&e.trim()?e.trim():typeof e=="number"&&Number.isFinite(e)?String(e):""}normalizeLanguage(e){let t=String(e??"").trim().toLowerCase();return t==="pt"||t==="pt-br"||t.includes("portug")?"pt":t==="es"||t==="es-es"||t.includes("espan")?"es":t==="en"||t==="en-us"||t.includes("english")||t.includes("ingles")?"en":t==="fr"||t==="fr-fr"||t.includes("fran")?"fr":"pt"}addVariantsFromArray(e,t){if(Array.isArray(e))for(let i of e){if(!i||typeof i!="object")continue;let r=i;t(r.language??r.lang??r.idioma,r.title??r.titulo??r.name)}}addLocalizedFromGroupedObject(e,t){for(let[i,r]of Object.entries(e))if(Array.isArray(r)){for(let a of r)if(!(!a||typeof a!="object"))for(let[o,s]of Object.entries(a))t(i,o||s)}}languageLabel(e){return e==="pt"?"Portugues":e==="es"?"Espanhol":e==="en"?"Ingles":e==="fr"?"Frances":"Outro idioma"}asRecord(e){return e&&typeof e=="object"?e:null}ngOnInit(){this.updateDocumentHead()}ngOnChanges(e){e.data&&this.updateDocumentHead()}updateDocumentHead(){let e=this.primaryTitle(),t=this.abstractSummary()||this.field(["description","descricao"]),i=this.creatorAuthors().map(c=>c.name).join("; "),r=this.getKeywordsForMeta(),a=this.journalName(),o=this.field(["year","ano"]),s=this.field(["doi","DOI"]),l=this.field(["language","idioma"])||"pt";if(e&&e!=="-"&&this.titleService.setTitle(e+" - Brapci"),this.metaService.removeTag("name='description'"),this.metaService.removeTag("name='keywords'"),this.metaService.removeTag("property='og:title'"),this.metaService.removeTag("property='og:description'"),this.metaService.removeTag("property='og:type'"),this.metaService.removeTag("property='og:url'"),this.metaService.removeTag("name='citation_title'"),this.metaService.removeTag("name='citation_authors'"),this.metaService.removeTag("name='citation_publication_date'"),this.metaService.removeTag("name='citation_journal_title'"),this.metaService.removeTag("name='citation_doi'"),this.metaService.removeTag("name='citation_language'"),t&&t!=="-"&&this.metaService.addTag({name:"description",content:t.substring(0,160)}),r&&this.metaService.addTag({name:"keywords",content:r}),e&&e!=="-"&&this.metaService.addTag({property:"og:title",content:e}),t&&t!=="-"&&this.metaService.addTag({property:"og:description",content:t.substring(0,160)}),this.metaService.addTag({property:"og:type",content:"article"}),e&&e!=="-"&&this.metaService.addTag({name:"citation_title",content:e}),i){let c=i.split("; ");for(let d of c)this.metaService.addTag({name:"citation_author",content:d.trim()})}o&&o!=="-"&&this.metaService.addTag({name:"citation_publication_date",content:o}),a&&a!=="-"&&this.metaService.addTag({name:"citation_journal_title",content:a}),s&&s!=="-"&&this.metaService.addTag({name:"citation_doi",content:s}),l&&l!=="-"&&this.metaService.addTag({name:"citation_language",content:l.substring(0,2)})}getKeywordsForMeta(){let e=this.asRecord(this.data);if(!e)return"";let t=[],i=e.subject;if(i&&typeof i=="object"){for(let[o,s]of Object.entries(i))if(Array.isArray(s)){for(let l of s)if(typeof l=="string")t.push(l);else if(l&&typeof l=="object"){let c=this.toText(l.name||l.term||l.label);c&&t.push(c)}}}let r=this.asRecord(e.data),a=this.asRecord(r?.hasSubject);if(a){for(let[o,s]of Object.entries(a))if(Array.isArray(s)){for(let l of s)if(typeof l=="string")t.push(l);else if(l&&typeof l=="object"){let c=this.toText(l.name||l.term||l.label);c&&t.push(c)}}}return[...new Set(t)].slice(0,10).join(", ")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-article-gadget"]],inputs:{data:"data",metrics:"metrics",dataTag:"dataTag"},features:[Er],decls:59,vars:49,consts:[["aria-label","Pagina de artigo","itemscope","","itemtype","https://schema.org/ScholarlyArticle",1,"article-gadget"],[1,"article-hero"],["aria-hidden","true",1,"article-seo-meta"],["itemprop","name"],["itemprop","headline"],["itemprop","description"],["itemprop","datePublished"],["itemprop","inLanguage"],["itemprop","identifier"],["itemprop","publisher"],[1,"article-legend","mb-3"],[1,"article-hero-content"],[1,"article-kicker"],[1,"article-main-title"],[1,"article-title-variants"],[1,"article-authors-line"],[1,"article-meta-grid"],[1,"article-cover-wrap"],["width","250","height","350","loading","lazy","decoding","async",1,"article-cover",3,"src","alt"],["aria-hidden","true",1,"article-cover","article-cover--placeholder"],[3,"pdfUrl","articleId","articleTitle","articleAuthors","articleKeywords"],[1,"article-section"],[1,"section-title"],[1,"article-metrics"],[1,"article-metric-item"],[3,"data"],[1,"article-authors-label"],[3,"authors"],["width","250","height","350","loading","lazy","decoding","async",1,"article-cover",3,"error","src","alt"],[1,"abstract-list"],[1,"abstract-card"],[3,"subject","abstractLanguage"],[3,"citations"]],template:function(t,i){t&1&&(w(0,"article",0)(1,"header",1)(2,"div",2),Ge(3,"meta",3)(4,"meta",4)(5,"meta",5)(6,"meta",6)(7,"meta",7)(8,"meta",8)(9,"meta",9),v(),se(10,YC,2,1,"p",10),w(11,"div",11)(12,"div",12),b(13),L(14,"translate"),v(),w(15,"h2",13),b(16),v(),se(17,ZC,3,0,"ul",14),se(18,KC,5,4,"div",15),w(19,"div",16)(20,"div")(21,"strong"),b(22),L(23,"translate"),v(),b(24),v(),w(25,"div")(26,"strong"),b(27),L(28,"translate"),v(),b(29),v(),w(30,"div")(31,"strong"),b(32),L(33,"translate"),v(),b(34),v(),w(35,"div")(36,"strong"),b(37),L(38,"translate"),v(),b(39),v(),se(40,QC,5,4,"div"),v()(),w(41,"div",17),se(42,ew,1,2,"img",18)(43,tw,3,3,"div",19),se(44,nw,1,5,"app-article-pdf-link",20),v()(),se(45,rw,7,3,"section",21),se(46,aw,5,4,"section",21),w(47,"section",21)(48,"h3",22),b(49),L(50,"translate"),v(),w(51,"div",23),rt(52,ow,5,2,"div",24,$C),v()(),w(54,"section",21)(55,"h3",22),b(56),L(57,"translate"),v(),Ge(58,"app-article-data",25),v()()),t&2&&(g(3),ze("content",i.primaryTitle()),g(),ze("content",i.primaryTitle()),g(),ze("content",i.abstractSummary()),g(),ze("content",i.metaField(Dn(42,wg))),g(),ze("content",i.metaField(Dn(43,Sg))),g(),ze("content",i.metaField(Dn(44,Tg))),g(),ze("content",i.journalName()),g(),le(i.legend()&&i.legend()!=="-"?10:-1),g(3),H(V(14,28,"article.kicker")),g(3),H(i.primaryTitle()),g(),le(i.titleVariants().length>1?17:-1),g(),le(i.creatorAuthors().length>0?18:-1),g(4),re("",V(23,30,"article.meta.journal"),":"),g(2),re(" ",i.metaField(Dn(45,jC))),g(3),re("",V(28,32,"article.meta.year"),":"),g(2),re(" ",i.metaField(Dn(46,wg))),g(3),re("",V(33,34,"article.meta.doi"),":"),g(2),re(" ",i.metaField(Dn(47,Tg))),g(3),re("",V(38,36,"article.meta.language"),":"),g(2),re(" ",i.metaField(Dn(48,Sg))," "),g(),le(i.sectionNames().length>0?40:-1),g(2),le(i.journalCoverUrl()&&i.journalCoverUrl()!=="-"?42:43),g(2),le(i.pdfUrl()&&i.pdfUrl()!=="-"?44:-1),g(),le(i.abstractVariants().length>0?45:-1),g(),le(i.hasCitationData()?46:-1),g(3),H(V(50,38,"article.indicators.title")),g(3),at(i.metrics),g(4),H(V(57,40,"article.data.title")),g(2),Me("data",i.data))},dependencies:[Ye,Vt,ma,ga,wc,_a,Ec,$t],styles:[".article-gadget[_ngcontent-%COMP%]{background:var(--theme-bg);border:1px solid var(--theme-line);border-radius:.7rem;padding:1rem}@media (max-width: 768px){.article-gadget[_ngcontent-%COMP%]{padding:.75rem}}@media (max-width: 480px){.article-gadget[_ngcontent-%COMP%]{padding:.5rem}}.article-hero[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-columns:1fr 180px;background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.7rem;padding:.9rem;width:100%}.article-seo-meta[_ngcontent-%COMP%]{display:none}.article-hero-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.55rem}@media (max-width: 900px){.article-hero-content[_ngcontent-%COMP%]{gap:.75rem;padding:.75rem}}@media (max-width: 768px){.article-hero-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:.6rem;padding:.65rem}}@media (max-width: 480px){.article-hero-content[_ngcontent-%COMP%]{padding:.5rem;gap:.5rem}}.article-legend[_ngcontent-%COMP%]{grid-column:1/-1}.article-cover-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;gap:.65rem;align-items:center}@media (max-width: 768px){.article-cover-wrap[_ngcontent-%COMP%]{flex-direction:row;order:-1;margin-bottom:.5rem}}@media (max-width: 480px){.article-cover-wrap[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:.4rem}}.article-cover[_ngcontent-%COMP%]{width:160px;max-width:100%;max-height:200px;aspect-ratio:2/3;object-fit:cover;border-radius:5px;border:1px solid var(--theme-line);box-shadow:0 4px 12px #00000024}@media (max-width: 768px){.article-cover[_ngcontent-%COMP%]{width:140px;max-height:180px}}@media (max-width: 480px){.article-cover[_ngcontent-%COMP%]{width:120px;max-height:160px}}.article-cover--placeholder[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:var(--theme-sand);color:var(--theme-muted);font-size:.86rem}@media (max-width: 480px){.article-cover--placeholder[_ngcontent-%COMP%]{font-size:.75rem}}.article-kicker[_ngcontent-%COMP%]{display:inline-block;background:var(--theme-hint);color:var(--theme-paper);border-radius:999px;padding:.2rem .6rem;font-size:.75rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase}.article-main-title[_ngcontent-%COMP%]{margin:.55rem 0 .6rem;font-size:clamp(1.15rem,1.8vw,1.5rem);line-height:1.3}@media (max-width: 768px){.article-main-title[_ngcontent-%COMP%]{font-size:clamp(1rem,2.5vw,1.3rem);margin:.4rem 0 .5rem}}@media (max-width: 480px){.article-main-title[_ngcontent-%COMP%]{font-size:1rem;margin:.35rem 0 .4rem}}.article-title-variants[_ngcontent-%COMP%]{margin:0 0 .7rem;padding-left:1rem;color:var(--theme-muted);font-size:.92rem}@media (max-width: 768px){.article-title-variants[_ngcontent-%COMP%]{margin:0 0 .5rem;padding-left:.8rem;font-size:.88rem}}@media (max-width: 480px){.article-title-variants[_ngcontent-%COMP%]{font-size:.82rem;margin:0 0 .4rem;padding-left:.6rem}}.article-authors-line[_ngcontent-%COMP%]{margin:.65rem 0 .85rem;font-size:.95rem;display:flex;flex-wrap:wrap;gap:.4rem;align-items:baseline}@media (max-width: 768px){.article-authors-line[_ngcontent-%COMP%]{margin:.5rem 0 .65rem;font-size:.9rem}}@media (max-width: 480px){.article-authors-line[_ngcontent-%COMP%]{margin:.4rem 0 .55rem;font-size:.85rem}}.article-authors-label[_ngcontent-%COMP%]{font-weight:600;color:var(--theme-ink);white-space:nowrap}.article-metrics[_ngcontent-%COMP%]{display:grid;gap:.65rem;grid-template-columns:repeat(auto-fit,minmax(120px,1fr))}.authors-area[_ngcontent-%COMP%]{margin-bottom:.85rem;background:var(--theme-sand);border:1px solid var(--theme-line);border-radius:.6rem;padding:.65rem}@media (max-width: 768px){.authors-area[_ngcontent-%COMP%]{margin-bottom:.65rem;padding:.55rem}}@media (max-width: 480px){.authors-area[_ngcontent-%COMP%]{margin-bottom:.5rem;padding:.45rem}}.authors-title[_ngcontent-%COMP%]{margin:0 0 .45rem;font-size:.92rem;text-transform:uppercase;letter-spacing:.03em;color:var(--theme-ink)}@media (max-width: 768px){.authors-title[_ngcontent-%COMP%]{font-size:.86rem;margin:0 0 .35rem}}@media (max-width: 480px){.authors-title[_ngcontent-%COMP%]{font-size:.8rem;margin:0 0 .3rem}}.authors-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}@media (max-width: 480px){.authors-list[_ngcontent-%COMP%]{gap:.3rem}}.authors-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.6rem;border:1px solid var(--theme-line);border-radius:.5rem;background:var(--theme-card-bg);padding:.45rem .55rem}@media (max-width: 768px){.authors-item[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:.4rem;gap:.3rem}}@media (max-width: 480px){.authors-item[_ngcontent-%COMP%]{padding:.35rem}}.authors-name[_ngcontent-%COMP%]{font-size:.9rem;color:var(--theme-ink)}@media (max-width: 768px){.authors-name[_ngcontent-%COMP%]{font-size:.85rem}}@media (max-width: 480px){.authors-name[_ngcontent-%COMP%]{font-size:.8rem}}.authors-link[_ngcontent-%COMP%]{font-size:.82rem;text-decoration:none;color:var(--theme-link);font-weight:600;white-space:nowrap}@media (max-width: 768px){.authors-link[_ngcontent-%COMP%]{font-size:.78rem;white-space:normal}}@media (max-width: 480px){.authors-link[_ngcontent-%COMP%]{font-size:.75rem}}.authors-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.authors-link-disabled[_ngcontent-%COMP%]{font-size:.82rem;color:var(--theme-muted);white-space:nowrap}.article-meta-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.25rem .8rem;font-size:.93rem}@media (max-width: 900px){.article-meta-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.2rem .6rem;font-size:.88rem}}@media (max-width: 768px){.article-meta-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.15rem .4rem;font-size:.85rem}}@media (max-width: 480px){.article-meta-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:.2rem;font-size:.8rem}}.article-legend[_ngcontent-%COMP%]{margin:.65rem 0 0;font-size:.88rem;color:var(--theme-muted)}@media (max-width: 768px){.article-legend[_ngcontent-%COMP%]{margin:.5rem 0 0;font-size:.82rem}}@media (max-width: 480px){.article-legend[_ngcontent-%COMP%]{font-size:.78rem;margin:.4rem 0 0}}.article-actions[_ngcontent-%COMP%]{margin-top:.75rem}@media (max-width: 768px){.article-actions[_ngcontent-%COMP%]{margin-top:.6rem}}@media (max-width: 480px){.article-actions[_ngcontent-%COMP%]{margin-top:.45rem}}.article-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background:#d91e18;color:var(--theme-paper);text-decoration:none;font-weight:700;border-radius:.4rem;padding:.4rem .8rem;font-size:.9rem;transition:background .2s ease;width:100%}@media (max-width: 480px){.article-btn[_ngcontent-%COMP%]{padding:.4rem .6rem;font-size:.8rem}}.article-btn[_ngcontent-%COMP%]:hover{background:#c41810}.article-btn[_ngcontent-%COMP%]:active{background:#a91410}.article-section[_ngcontent-%COMP%]{margin-top:1rem;background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.7rem;padding:.85rem}@media (max-width: 768px){.article-section[_ngcontent-%COMP%]{margin-top:.75rem;padding:.65rem}}@media (max-width: 480px){.article-section[_ngcontent-%COMP%]{margin-top:.55rem;padding:.5rem}}.section-title[_ngcontent-%COMP%]{margin:0 0 .65rem;font-size:1rem}@media (max-width: 768px){.section-title[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.95rem}}@media (max-width: 480px){.section-title[_ngcontent-%COMP%]{font-size:.88rem;margin:0 0 .4rem}}.abstract-list[_ngcontent-%COMP%]{display:grid;gap:.6rem}@media (max-width: 768px){.abstract-list[_ngcontent-%COMP%]{gap:.5rem}}@media (max-width: 480px){.abstract-list[_ngcontent-%COMP%]{gap:.4rem}}.abstract-card[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.55rem;padding:.65rem}@media (max-width: 768px){.abstract-card[_ngcontent-%COMP%]{padding:.55rem}}@media (max-width: 480px){.abstract-card[_ngcontent-%COMP%]{padding:.45rem}}.abstract-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 .35rem;font-size:.86rem;text-transform:uppercase;letter-spacing:.04em;color:var(--theme-muted)}@media (max-width: 768px){.abstract-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.82rem;margin:0 0 .3rem}}@media (max-width: 480px){.abstract-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.78rem;margin:0 0 .25rem}}.abstract-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.94rem;line-height:1.45;color:var(--theme-ink)}@media (max-width: 768px){.abstract-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.88rem;line-height:1.4}}@media (max-width: 480px){.abstract-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.82rem;line-height:1.35}}.abstract-keywords[_ngcontent-%COMP%]{margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.35rem}.abstract-keyword-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.12rem .5rem;border-radius:999px;border:1px solid var(--theme-line);background:var(--theme-sand);color:var(--theme-muted);font-size:.76rem;line-height:1.3}.citation-list[_ngcontent-%COMP%]{display:grid;gap:.6rem}@media (max-width: 768px){.citation-list[_ngcontent-%COMP%]{gap:.5rem}}@media (max-width: 480px){.citation-list[_ngcontent-%COMP%]{gap:.4rem}}.citation-item[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.5rem;padding:.6rem}@media (max-width: 768px){.citation-item[_ngcontent-%COMP%]{padding:.5rem}}@media (max-width: 480px){.citation-item[_ngcontent-%COMP%]{padding:.45rem}}.citation-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;white-space:pre-line;font-size:.88rem}@media (max-width: 768px){.citation-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.82rem;margin:.3rem 0 0}}@media (max-width: 480px){.citation-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.78rem;margin:.25rem 0 0}}.article-metric-item[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.55rem;display:grid;gap:.1rem;padding:.55rem .6rem}.article-metric-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--theme-hint)}@media (max-width: 860px){.article-hero[_ngcontent-%COMP%]{grid-template-columns:1fr}.article-cover-wrap[_ngcontent-%COMP%]{justify-content:flex-start}}body.theme-master.theme-dark[_nghost-%COMP%]   .article-gadget[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-gadget[_ngcontent-%COMP%]{background:linear-gradient(180deg,#1a1a1f,#131316 35% 100%)}body.theme-master.theme-dark[_nghost-%COMP%]   .article-hero[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-hero[_ngcontent-%COMP%]{background:#1f1f26;border-color:var(--theme-line)}body.theme-master.theme-dark[_nghost-%COMP%]   .article-cover[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-cover[_ngcontent-%COMP%]{border-color:var(--theme-line);box-shadow:0 4px 12px #0006}body.theme-master.theme-dark[_nghost-%COMP%]   .article-cover--placeholder[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-cover--placeholder[_ngcontent-%COMP%]{background:#2a2a32;color:#8a8a96}body.theme-master.theme-dark[_nghost-%COMP%]   .article-kicker[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-kicker[_ngcontent-%COMP%]{background:#0a3a66}body.theme-master.theme-dark[_nghost-%COMP%]   .article-title-variants[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-title-variants[_ngcontent-%COMP%]{color:#a8b8c8}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-area[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-area[_ngcontent-%COMP%]{background:#1f2a3a;border-color:#2a3a4a}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-title[_ngcontent-%COMP%]{color:#7a9ac8}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-item[_ngcontent-%COMP%]{background:#1f1f26;border-color:#2a3a4a}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-name[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-name[_ngcontent-%COMP%]{color:#d0d4dc}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-link[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-link[_ngcontent-%COMP%]{color:#5ba3ff}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-link[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-link[_ngcontent-%COMP%]:hover{text-decoration:underline}body.theme-master.theme-dark[_nghost-%COMP%]   .authors-link-disabled[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-link-disabled[_ngcontent-%COMP%]{color:#6a7a8a}body.theme-master.theme-dark[_nghost-%COMP%]   .article-legend[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-legend[_ngcontent-%COMP%]{color:#9aa6b8}body.theme-master.theme-dark[_nghost-%COMP%]   .article-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-btn[_ngcontent-%COMP%]{background:#d91e18}body.theme-master.theme-dark[_nghost-%COMP%]   .article-btn[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .article-btn[_ngcontent-%COMP%]:hover{background:#ff2e24}body.theme-master.theme-dark[_nghost-%COMP%]   .article-section[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-section[_ngcontent-%COMP%]{background:var(--theme-card-bg);border-color:var(--theme-line)}body.theme-master.theme-dark[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%]{color:#d0d4dc}body.theme-master.theme-dark[_nghost-%COMP%]   .abstract-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .abstract-card[_ngcontent-%COMP%]{background:#1f1f26;border-color:#2a3a4a}body.theme-master.theme-dark[_nghost-%COMP%]   .abstract-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .abstract-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#8a9aaa}body.theme-master.theme-dark[_nghost-%COMP%]   .abstract-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .abstract-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d0d4dc}body.theme-master.theme-dark[_nghost-%COMP%]   .citation-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .citation-item[_ngcontent-%COMP%]{background:#1f1f26;border-color:#2a3a4a}body.theme-master.theme-dark[_nghost-%COMP%]   .article-metric-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .article-metric-item[_ngcontent-%COMP%]{background:var(--theme-card-bg);border-color:var(--theme-line)}"]})};var Ac=class n{data=null;metrics=[];dataTag=null;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-proceeding-gadget"]],inputs:{data:"data",metrics:"metrics",dataTag:"dataTag"},decls:1,vars:3,consts:[[3,"data","metrics","dataTag"]],template:function(t,i){t&1&&Ge(0,"app-article-gadget",0),t&2&&Me("data",i.data)("metrics",i.metrics)("dataTag",i.dataTag)},dependencies:[Ye,xa],styles:["[_nghost-%COMP%]{display:block}"]})};var sw=(n,e)=>e.label;function lw(n,e){if(n&1){let t=ht();w(0,"img",19),L(1,"translate"),Be("error",function(r){et(t);let a=B();return tt(a.hasImageError(r))}),v()}if(n&2){let t=B();Me("src",t.bookCoverUrl(),Ut)("alt",V(1,2,"bookChapter.cover.alt")+" "+t.chapterBookTitle())}}function cw(n,e){n&1&&(w(0,"div",5),b(1),L(2,"translate"),v()),n&2&&(g(),re(" ",V(2,1,"bookChapter.cover.unavailable")," "))}function dw(n,e){if(n&1&&(w(0,"a",6),b(1),L(2,"translate"),v()),n&2){let t=B();Me("href","/v/"+t.chapterBookId(),Ut),g(),H(V(2,2,"bookChapter.actions.openBook"))}}function uw(n,e){if(n&1&&(w(0,"p",8),b(1),v()),n&2){let t=B();g(),H(t.legend())}}function hw(n,e){if(n&1&&(w(0,"div",11)(1,"span",20),b(2),L(3,"translate"),v(),Ge(4,"app-article-authors",21),v()),n&2){let t=B();g(2),re("",V(3,2,"bookChapter.meta.authors"),":"),g(2),Me("authors",t.creatorAuthors())}}function pw(n,e){if(n&1&&(w(0,"a",13),b(1),L(2,"translate"),v()),n&2){let t=B();Me("href",t.pdfUrl(),Ut),g(),re(" ",V(2,2,"bookChapter.actions.openPdf")," ")}}function fw(n,e){if(n&1&&(w(0,"section",14)(1,"h3",15),b(2),L(3,"translate"),v(),w(4,"p",22),b(5),v()()),n&2){let t=B();g(2),H(V(3,2,"bookChapter.sections.abstract")),g(3),H(t.abstractText())}}function mw(n,e){if(n&1&&(w(0,"section",14)(1,"h3",15),b(2),L(3,"translate"),v(),Ge(4,"app-citation-tabs",23),v()),n&2){let t=B();g(2),H(V(3,2,"bookChapter.sections.citation")),g(2),Me("citations",t.getCitations())}}function gw(n,e){if(n&1&&(w(0,"div",17)(1,"small"),b(2),v(),w(3,"strong"),b(4),v()()),n&2){let t=e.$implicit;g(2),H(t.label),g(2),H(t.value)}}var Pc=class n{data=null;metrics=[];dataTag=null;field(e){let t=this.asRecord(this.data);if(!t)return"-";for(let i of e){let r=t[i],a=this.toText(r);if(a)return a}return"-"}primaryTitle(){return this.field(["title","titulo","Title","hasTitle","bookchapter_title"])}legend(){return this.field(["legend","LEGEND"])}creatorAuthors(){let e=this.asRecord(this.data);if(!e)return[];let t=e.creator_author,i=Array.isArray(t)?t.map(a=>{let o=this.asRecord(a);if(!o)return null;let s=this.toText(o.name),l=this.toText(o.ID??o.id);return s?l?{name:s,id:l}:{name:s}:null}).filter(a=>a!==null):[];if(i.length>0)return i;let r=e.hasAuthor;return Array.isArray(r)?r.map(a=>this.toText(a)).filter(a=>a.length>0).map(a=>({name:a})):[]}chapterBookTitle(){let e=this.asRecord(this.data);if(!e)return"-";let t=this.field(["book_title","bookTitle","title_book","source","publisher","jnl_name"]);if(t!=="-")return t;let i=this.asRecord(e.Book??e.book);return i&&this.pickText(i,["title","hasTitle","name"])||"-"}chapterBookId(){let e=this.asRecord(this.data);if(!e)return"";let t=this.pickText(e,["bookID","bookId","id_book","ID_book","ID_BOOK","book_id"]);if(t)return t;let i=this.asRecord(e.Book??e.book);return i?this.pickText(i,["ID","id"]):""}bookCoverUrl(){let e=this.asRecord(this.data);if(!e)return"";let t=this.pickText(e,["book_cover","bookCover","cover_book","cover","hasCover"]);if(t)return t;let i=this.asRecord(e.Book??e.book);return i?this.pickText(i,["hasCover","cover","Cover","image"]):""}pages(){return this.field(["pages","page","pagination","hasPages"])}year(){return this.field(["year","ano","hasYear","datePublished","hasDate"])}doi(){return this.field(["doi","DOI"])}language(){return this.field(["language","idioma","lang"])}isbn(){return this.field(["hasISBN","isbn","ISBN"])}pdfUrl(){let e=this.field(["resource_pdf","pdf","url_pdf"]);return e==="-"?"":e}chapterId(){return this.field(["ID","id"])}abstractText(){return this.field(["description","abstract","resumo","resumen","hasAbstract"])}citation(e){let t=this.asRecord(this.data);if(!t)return"";let i=this.asRecord(t.cited);return i?this.toText(i[e]):""}hasCitationData(){return!!(this.citation("abnt")||this.citation("apa")||this.citation("vancouver"))}hasImageError(e){let t=e.target;t&&(t.style.display="none")}getCitations(){return{abnt:this.citation("abnt"),apa:this.citation("apa"),vancouver:this.citation("vancouver")}}asRecord(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}toText(e){return typeof e=="string"&&e.trim()?e.trim():typeof e=="number"&&Number.isFinite(e)?String(e):""}pickText(e,t){for(let i of t){let r=this.toText(e[i]);if(r)return r}return""}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-book-chapter-view"]],inputs:{data:"data",metrics:"metrics",dataTag:"dataTag"},decls:60,vars:39,consts:[["itemscope","","itemtype","https://schema.org/Chapter",1,"chapter-view"],[1,"chapter-view__hero"],[1,"chapter-view__hero-layout"],[1,"chapter-view__cover-col"],["width","220","height","310","loading","lazy","decoding","async",1,"chapter-view__cover",3,"src","alt"],["aria-hidden","true",1,"chapter-view__cover","chapter-view__cover--placeholder"],[1,"chapter-view__book-link",3,"href"],[1,"chapter-view__content-col"],[1,"chapter-view__legend"],[1,"chapter-view__kicker"],[1,"chapter-view__title"],[1,"chapter-view__authors"],[1,"chapter-view__meta-grid"],["target","_blank","rel","noopener noreferrer",1,"chapter-view__pdf-link",3,"href"],[1,"chapter-view__section"],[1,"chapter-view__section-title"],[1,"chapter-view__metrics"],[1,"chapter-view__metric-item"],[3,"data"],["width","220","height","310","loading","lazy","decoding","async",1,"chapter-view__cover",3,"error","src","alt"],[1,"chapter-view__authors-label"],[3,"authors"],[1,"chapter-view__abstract"],[3,"citations"]],template:function(t,i){t&1&&(w(0,"article",0),L(1,"translate"),w(2,"header",1)(3,"div",2)(4,"aside",3),se(5,lw,2,4,"img",4)(6,cw,3,3,"div",5),se(7,dw,3,4,"a",6),v(),w(8,"div",7),se(9,uw,2,1,"p",8),w(10,"p",9),b(11),L(12,"translate"),v(),w(13,"h2",10),b(14),v(),se(15,hw,5,4,"div",11),w(16,"div",12)(17,"div")(18,"strong"),b(19),L(20,"translate"),v(),b(21),v(),w(22,"div")(23,"strong"),b(24),L(25,"translate"),v(),b(26),v(),w(27,"div")(28,"strong"),b(29),L(30,"translate"),v(),b(31),v(),w(32,"div")(33,"strong"),b(34),L(35,"translate"),v(),b(36),v(),w(37,"div")(38,"strong"),b(39,"DOI:"),v(),b(40),v(),w(41,"div")(42,"strong"),b(43,"ISBN:"),v(),b(44),v()(),se(45,pw,3,4,"a",13),v()()(),se(46,fw,6,4,"section",14),se(47,mw,5,4,"section",14),w(48,"section",14)(49,"h3",15),b(50),L(51,"translate"),v(),w(52,"div",16),rt(53,gw,5,2,"div",17,sw),v()(),w(55,"section",14)(56,"h3",15),b(57),L(58,"translate"),v(),Ge(59,"app-article-data",18),v()()),t&2&&(ze("aria-label",V(1,23,"bookChapter.aria.page")),g(5),le(i.bookCoverUrl()?5:6),g(2),le(i.chapterBookId()?7:-1),g(2),le(i.legend()!=="-"?9:-1),g(2),H(V(12,25,"bookChapter.kicker")),g(3),H(i.primaryTitle()),g(),le(i.creatorAuthors().length>0?15:-1),g(4),re("",V(20,27,"bookChapter.meta.book"),":"),g(2),re(" ",i.chapterBookTitle()),g(3),re("",V(25,29,"bookChapter.meta.year"),":"),g(2),re(" ",i.year()),g(3),re("",V(30,31,"bookChapter.meta.pages"),":"),g(2),re(" ",i.pages()),g(3),re("",V(35,33,"bookChapter.meta.language"),":"),g(2),re(" ",i.language()),g(4),re(" ",i.doi()),g(4),re(" ",i.isbn()),g(),le(i.pdfUrl()?45:-1),g(),le(i.abstractText()!=="-"?46:-1),g(),le(i.hasCitationData()?47:-1),g(3),H(V(51,35,"bookChapter.sections.indicators")),g(3),at(i.metrics),g(4),H(V(58,37,"bookChapter.sections.data")),g(2),Me("data",i.data))},dependencies:[Ye,Vt,ga,ma,_a,$t],styles:["[_nghost-%COMP%]{display:block}.chapter-view[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:16px;background:var(--theme-bg);padding:1.5rem;color:var(--theme-ink)}.chapter-view__hero[_ngcontent-%COMP%]{display:grid;gap:.9rem}.chapter-view__hero-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:220px 1fr;gap:1rem;align-items:start}.chapter-view__cover-col[_ngcontent-%COMP%]{display:grid;gap:.75rem}.chapter-view__content-col[_ngcontent-%COMP%]{display:grid;gap:.9rem}.chapter-view__cover[_ngcontent-%COMP%]{width:100%;max-width:220px;aspect-ratio:220/310;object-fit:cover;border-radius:12px;border:1px solid var(--theme-line);background:var(--theme-card-bg)}.chapter-view__cover--placeholder[_ngcontent-%COMP%]{display:grid;place-items:center;color:var(--theme-muted);font-weight:600;background:repeating-linear-gradient(45deg,color-mix(in srgb,var(--theme-sand) 88%,transparent),color-mix(in srgb,var(--theme-sand) 88%,transparent) 10px,color-mix(in srgb,var(--theme-line) 82%,transparent) 10px 20px)}.chapter-view__legend[_ngcontent-%COMP%]{margin:0;color:var(--theme-muted);font-size:.9rem}.chapter-view__kicker[_ngcontent-%COMP%]{margin:0;width:fit-content;border-radius:999px;background:var(--theme-hint);color:var(--theme-paper);padding:.3rem .75rem;font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em}.chapter-view__title[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.4rem,2.3vw,2rem);line-height:1.2}.chapter-view__authors[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;align-items:baseline}.chapter-view__authors-label[_ngcontent-%COMP%]{font-weight:700;color:var(--theme-ink)}.chapter-view__meta-grid[_ngcontent-%COMP%]{display:grid;gap:.6rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));padding:.9rem;border:1px solid var(--theme-line);border-radius:12px;background:var(--theme-card-bg)}.chapter-view__book-link[_ngcontent-%COMP%], .chapter-view__pdf-link[_ngcontent-%COMP%]{width:fit-content;text-decoration:none;font-weight:700;color:var(--theme-link)}.chapter-view__book-link[_ngcontent-%COMP%]:hover, .chapter-view__pdf-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.chapter-view__section[_ngcontent-%COMP%]{margin-top:1.4rem}.chapter-view__section-title[_ngcontent-%COMP%]{margin:0 0 .75rem;font-size:1.05rem;color:var(--theme-ink)}.chapter-view__abstract[_ngcontent-%COMP%]{margin:0;line-height:1.65}.chapter-view__metrics[_ngcontent-%COMP%]{display:grid;gap:.75rem;grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}.chapter-view__metric-item[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:10px;background:var(--theme-card-bg);padding:.7rem;display:grid;gap:.25rem}.chapter-view__metric-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--theme-muted)}.chapter-view__metric-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.1rem}@media (max-width: 768px){.chapter-view[_ngcontent-%COMP%]{padding:1rem;border-radius:12px}.chapter-view__hero-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.chapter-view__cover-col[_ngcontent-%COMP%]{justify-items:center}}"]})};var Ic=class n{constructor(e,t,i){this.meta=e;this.titleService=t;this.document=i}data=null;recordId="";recordClass="";ngOnChanges(){this.applyMetadata()}applyMetadata(){let e=this.asRecord(this.data),t=this.pickText(e,["title","hasTitle","name","Title"])||"BRAPCI",i=this.pickText(e,["description","hasAbstract","abstract","Resumo"])||"Registro bibliografico da BRAPCI.",r=this.collectKeywords(e),a=this.collectCreators(e),o=this.pickText(e,["publisher","hasPublisher","source"]),s=this.pickText(e,["year","date","hasDate"]),l=this.pickLanguage(e)||"pt-BR",c=this.recordClass||this.pickText(e,["Class","class","Classe"])||"CreativeWork",d=this.buildCanonicalUrl();this.titleService.setTitle(t),this.meta.updateTag({name:"description",content:i}),this.meta.updateTag({name:"keywords",content:r||"BRAPCI, Ciencia da Informacao, Biblioteconomia"}),this.meta.updateTag({name:"robots",content:"index,follow,max-image-preview:large"}),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:title",content:t}),this.meta.updateTag({property:"og:description",content:i}),this.meta.updateTag({property:"og:url",content:d}),this.meta.updateTag({property:"og:site_name",content:"BRAPCI"}),this.meta.updateTag({name:"twitter:card",content:"summary_large_image"}),this.meta.updateTag({name:"twitter:title",content:t}),this.meta.updateTag({name:"twitter:description",content:i}),this.meta.updateTag({name:"DC.Title",content:t}),this.meta.updateTag({name:"DC.Description",content:i}),this.meta.updateTag({name:"DC.Creator",content:a}),this.meta.updateTag({name:"DC.Subject",content:r}),this.meta.updateTag({name:"DC.Publisher",content:o}),this.meta.updateTag({name:"DC.Date",content:s}),this.meta.updateTag({name:"DC.Identifier",content:d}),this.meta.updateTag({name:"DC.Language",content:l}),this.meta.updateTag({name:"DC.Type",content:c}),this.updateCanonical(d),this.updateJsonLd({title:t,description:i,creators:a,publisher:o,date:s,language:l,canonicalUrl:d,typeName:c}),this.applyIncomingMetaItems(e)}applyIncomingMetaItems(e){if(!e)return;let t=e.meta;if(Array.isArray(t))for(let i of t){let r=this.asRecord(i);if(!r)continue;let a=typeof r.name=="string"?r.name.trim():"",o=typeof r.content=="string"?r.content.trim():"";!a||!o||(a.toLowerCase().startsWith("og:")?this.meta.updateTag({property:a,content:o}):this.meta.updateTag({name:a,content:o}))}}updateCanonical(e){let t=this.document.head.querySelector("link[rel='canonical']");t||(t=this.document.createElement("link"),t.setAttribute("rel","canonical"),this.document.head.appendChild(t)),t.setAttribute("href",e)}updateJsonLd(e){let t=this.document.getElementById("v-id-jsonld");t&&t.remove();let i=this.document.createElement("script");i.setAttribute("type","application/ld+json"),i.setAttribute("id","v-id-jsonld");let r=e.creators.split(";").map(o=>o.trim()).filter(o=>o.length>0).map(o=>({"@type":"Person",name:o})),a={"@context":"https://schema.org","@type":this.toSchemaType(e.typeName),name:e.title,headline:e.title,description:e.description,author:r.length?r:void 0,publisher:e.publisher?{"@type":"Organization",name:e.publisher}:void 0,datePublished:e.date||void 0,inLanguage:e.language,url:e.canonicalUrl};i.text=JSON.stringify(a),this.document.head.appendChild(i)}toSchemaType(e){let t=e.trim().toLowerCase();return t==="article"?"ScholarlyArticle":t==="book"?"Book":t==="bookchapter"?"Chapter":t==="proceeding"?"ScholarlyArticle":t==="person"?"Person":"CreativeWork"}collectKeywords(e){if(!e)return"";let t=this.collectSubjectNames(e);if(t.length>0)return t.join("; ");let i=e.hasKeyword;if(Array.isArray(i))return i.map(a=>String(a).trim()).filter(a=>a.length>0).join("; ");let r=this.pickText(e,["keywords","keyword","KEYWORDS"]);return r?r.split(";").map(a=>a.trim()).filter(a=>a.length>0).join("; "):""}collectSubjectNames(e){let t=this.asRecord(e.subject);if(!t)return[];let i=[];for(let r of Object.values(t))if(Array.isArray(r))for(let a of r){let o=this.asRecord(a);if(!o)continue;let s=typeof o.name=="string"?o.name.trim():"";s&&i.push(s)}return[...new Set(i)]}collectCreators(e){if(!e)return"";let t=e.creator_author;if(Array.isArray(t)){let r=t.map(a=>{let o=this.asRecord(a);return o&&typeof o.name=="string"?o.name.trim():""}).filter(a=>a.length>0);if(r.length>0)return r.join("; ")}let i=e.hasAuthor;if(Array.isArray(i)){let r=i.map(a=>String(a).trim()).filter(a=>a.length>0);if(r.length>0)return r.join("; ")}return this.pickText(e,["author","Authors","creator"])}pickLanguage(e){if(!e)return"";let t=this.pickText(e,["language","lang"]);if(t)return t;let i=this.asRecord(e.data),r=this.asRecord(i?.hasLanguageExpression);return r&&Object.keys(r)[0]||""}buildCanonicalUrl(){let e=this.document.location?.origin??"",t=this.recordId.trim();return!e||!t?"":`${e}/v/${t}`}pickText(e,t){if(!e)return"";for(let i of t){let r=e[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return""}asRecord(e){return!e||typeof e!="object"||Array.isArray(e)?null:e}static \u0275fac=function(t){return new(t||n)(Kn(Oo),Kn(Do),Kn(ah))};static \u0275cmp=je({type:n,selectors:[["app-seo-metadata"]],inputs:{data:"data",recordId:"recordId",recordClass:"recordClass"},features:[Er],decls:0,vars:0,template:function(t,i){},styles:["[_nghost-%COMP%]{display:none}"]})};function _w(n,e){n&1&&(ce(0,"div",1),pt(1,"span",4),b(2," Carregando trabalhos... "),ye())}function xw(n,e){if(n&1&&(ce(0,"div",2),b(1),ye()),n&2){let t=B();g(),H(t.error())}}function vw(n,e){if(n&1&&(ce(0,"span",8),b(1),ye()),n&2){let t=B(2);g(),H(t.totalCount())}}function yw(n,e){if(n&1){let t=ht();ce(0,"button",13),Bt("click",function(){et(t);let r=B(2);return tt(r.clearSelection())}),pt(1,"i",14),b(2," Limpar sele\xE7\xE3o "),ye()}}function bw(n,e){if(n&1&&(ce(0,"span",12),b(1),ye()),n&2){let t=B(2);g(),H(t.markedCount())}}function Mw(n,e){if(n&1){let t=ht();ce(0,"div",3)(1,"span",5),b(2),ye(),ce(3,"button",6),Bt("click",function(){et(t);let r=B();return tt(r.selectAll())}),pt(4,"i",7),b(5," Selecionar todos "),se(6,vw,2,1,"span",8),ye(),se(7,yw,3,0,"button",9),ce(8,"button",10),Bt("click",function(){et(t);let r=B();return tt(r.viewSelection())}),pt(9,"i",11),b(10," Ver sele\xE7\xE3o "),se(11,bw,2,1,"span",12),ye()()}if(n&2){let t=B();g(2),re(" ",t.totalCount()," trabalhos encontrados "),g(),ft("disabled",!t.totalCount()||t.allSelected()),g(3),le(t.totalCount()?6:-1),g(),le(t.markedCount()?7:-1),g(),ft("disabled",!t.markedCount()),g(3),le(t.markedCount()?11:-1)}}var Rc=class n{idJnl="";http=Jt(xh);basket=Jt(Bo);router=Jt(kr);loading=qe(!1);error=qe(null);allWorkIds=qe([]);markedCount=qe(0);totalCount=te(()=>this.allWorkIds().length);allSelected=te(()=>{let e=this.allWorkIds();return e.length?(this.markedCount(),e.every(t=>this.basket.isMarked(t))):!1});constructor(){this.markedCount.set(this.basket.count()),this.basket.changed.pipe(Or()).subscribe(()=>{this.markedCount.set(this.basket.count())})}ngOnChanges(e){e.idJnl&&this.idJnl?.trim()&&this.loadWorkIds(this.idJnl.trim())}loadWorkIds(e){this.loading.set(!0),this.error.set(null),this.allWorkIds.set([]);let t=`https://cip.brapci.inf.br/api/brapci/source/${encodeURIComponent(e)}`;this.http.get(t).subscribe({next:i=>{this.allWorkIds.set(this.extractIds(i)),this.loading.set(!1)},error:()=>{this.error.set("Erro ao carregar os trabalhos da fonte."),this.loading.set(!1)}})}extractIds(e){return this.extractWorksIdField(e)}extractWorksIdField(e){let t=[],i=new Set,r=o=>Array.isArray(o)?o.flatMap(s=>r(s)):typeof o=="number"&&Number.isFinite(o)&&o>0?[o]:typeof o=="string"&&o.trim()?o.split(/[\s,;|]+/).map(s=>Number(s)).filter(s=>Number.isFinite(s)&&s>0):[],a=o=>{if(!o||typeof o!="object"||i.has(o))return;if(i.add(o),Array.isArray(o)){o.forEach(l=>a(l));return}let s=o;for(let[l,c]of Object.entries(s)){let d=l.toLowerCase();(d==="worksid"||d==="works_id")&&t.push(...r(c)),a(c)}};return a(e),Array.from(new Set(t))}pickId(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Number(e);return Number.isFinite(t)&&t>0?t:null}if(e&&typeof e=="object"){let t=e,i=t.id??t.ID??t.doc_id??t.work_id??t.wk_id;return this.pickId(i)}return null}selectAll(){this.allWorkIds().forEach(e=>this.basket.add(e))}clearSelection(){this.basket.clear()}viewSelection(){this.router.navigateByUrl("/basket/selected")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-source-basket-actions"]],inputs:{idJnl:"idJnl"},features:[Er],decls:4,vars:1,consts:[[1,"source-basket-actions"],[1,"sba-loading"],[1,"alert","alert-warning","sba-error","py-2","px-3","mb-0"],[1,"sba-toolbar","d-flex","flex-wrap","align-items-center","gap-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","me-2"],[1,"sba-info","text-muted","small"],["title","Adicionar todos ao carrinho",1,"btn","btn-sm","btn-outline-primary",3,"click","disabled"],[1,"bi","bi-check2-all","me-1"],[1,"badge","text-bg-primary","ms-1"],["title","Remover todos do carrinho",1,"btn","btn-sm","btn-outline-danger"],["title","Ver itens selecionados",1,"btn","btn-sm","btn-success",3,"click","disabled"],[1,"bi","bi-basket","me-1"],[1,"badge","text-bg-light","text-success","ms-1"],["title","Remover todos do carrinho",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"bi","bi-x-circle","me-1"]],template:function(t,i){t&1&&(ce(0,"div",0),se(1,_w,3,0,"div",1)(2,xw,2,1,"div",2)(3,Mw,12,6,"div",3),ye()),t&2&&(g(),le(i.loading()?1:i.error()?2:3))},dependencies:[Ye],styles:[".source-basket-actions[_ngcontent-%COMP%]   .sba-loading[_ngcontent-%COMP%]{color:#6c757d;font-size:.875rem}.source-basket-actions[_ngcontent-%COMP%]   .sba-toolbar[_ngcontent-%COMP%]   .sba-info[_ngcontent-%COMP%]{flex-shrink:0}"]})};function ww(n,e){if(n&1&&Ge(0,"app-source-basket-actions",3),n&2){let t=B(2);Me("idJnl",t.journalId())}}function Sw(n,e){if(n&1){let t=ht();w(0,"div",4)(1,"div",5),Be("click",function(){let r=et(t).$implicit,a=B(2);return tt(a.onClickItem(r))}),w(2,"div",6),b(3),v(),w(4,"div",7),b(5),v(),w(6,"div",8),b(7),v(),w(8,"div",9),b(9),v(),w(10,"div",10),b(11),v()()()}if(n&2){let t=e.$implicit,i=B(2);g(3),H(i.acronym()),g(2),Bn("",t.vol," ",t.nr," "),g(2),H(t.place),g(2),H(t.year),g(2),re("",t.totalWorks," W")}}function Tw(n,e){if(n&1&&(w(0,"div",0)(1,"div",1)(2,"div",2),se(3,ww,1,1,"app-source-basket-actions",3),v(),rt(4,Sw,12,6,"div",4,ya),v()()),n&2){let t=B();g(3),le(t.journalId()?3:-1),g(),at(t.viewItems())}}function Ew(n,e){n&1&&(w(0,"div",0)(1,"div",11)(2,"div",1)(3,"p",12),b(4,"Sem edicoes disponiveis na variavel issues."),v()()()())}var va=class n{constructor(e){this.router=e}issuesSignal=qe([]);acronym=qe("");journalId=qe("");set issues(e){if(console.log("Received issues input:",e),Array.isArray(e)){this.issuesSignal.set(e);return}if(e&&typeof e=="object"){this.issuesSignal.set([e]);return}this.issuesSignal.set([])}set acronymInput(e){if(typeof e=="string"){this.acronym.set(e.trim());return}this.acronym.set("")}set journalIdInput(e){if(typeof e=="string"&&e.trim()){this.journalId.set(e.trim());return}if(typeof e=="number"&&Number.isFinite(e)){this.journalId.set(String(e));return}this.journalId.set("")}viewItems=te(()=>this.issuesSignal().map(e=>this.normalizeItem(e)).filter(e=>e!==null).sort((e,t)=>{let i=this.toSortableNumber(t.year)-this.toSortableNumber(e.year);if(i!==0)return i;let r=this.toSortableNumber(t.vol)-this.toSortableNumber(e.vol);return r!==0?r:this.toSortableNumber(t.nr)-this.toSortableNumber(e.nr)}));onClickItem(e){e?.id&&this.router.navigateByUrl(`/v/${e.id}`)}normalizeItem(e){if(!e||typeof e!="object")return null;let t=e,i=this.pick(t,["ID","id","issue_id","id_issue","id_edition"]),r=this.pick(t,["YEAR","year","ano","issue_year","edition_year"]),a=this.pick(t,["JOURNAL","journal","jnl_name","journal_name","issue_journal","source"]),o=this.pick(t,["VOL","vol","volume","issue_vol","issue_volume"]),s=this.pick(t,["NR","nr","number","num","issue_nr","issue_number"]),l=this.pick(t,["place","city","cidade","location","local"]),c=this.pick(t,["totalWorks","total_works","totalworks","TOTAL_WORKS","works_total","qt_works","QTD","qtd"]);return!i&&!r&&!a&&!o&&!s&&!l&&!c?null:{id:i,year:r,journal:a,vol:o,nr:s,place:l,totalWorks:c}}pick(e,t){for(let i of t){let r=e[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return""}toSortableNumber(e){if(!e)return Number.NEGATIVE_INFINITY;let t=e.match(/-?\d+(?:[\.,]\d+)?/);if(!t)return Number.NEGATIVE_INFINITY;let i=t[0].replace(",","."),r=Number.parseFloat(i);return Number.isFinite(r)?r:Number.NEGATIVE_INFINITY}static \u0275fac=function(t){return new(t||n)(Kn(kr))};static \u0275cmp=je({type:n,selectors:[["app-issue-view-type"]],inputs:{issues:"issues",acronymInput:[0,"acronym","acronymInput"],journalIdInput:[0,"journalId","journalIdInput"]},decls:2,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-12","col-lg-12"],[3,"idJnl"],[1,"col-12","col-lg-4","mt-3","mb-2"],[1,"issue","w-100",2,"cursor","pointer",3,"click"],[1,"issue-name"],[1,"issue-nr"],[1,"issue-place"],[1,"issue-year"],[1,"issue-works"],[1,"col-12","col-lg-4","issue-col"],[1,"mb-0","issue-empty-message"]],template:function(t,i){t&1&&se(0,Tw,6,1,"div",0)(1,Ew,5,0,"div",0),t&2&&le(i.viewItems().length?0:1)},dependencies:[Ye,Rc],styles:["[_nghost-%COMP%]{--issue-col-bg: var(--theme-sand, #eef2f7);--issue-col-border: var(--theme-line, #d9e1ec);--issue-col-text: var(--theme-ink, #2e3b4d);--issue-card-bg: var(--theme-card-bg, #f7f8fa);--issue-card-border: var(--theme-line, #d6dbe3);--issue-card-shadow: rgba(27, 44, 70, .18);--issue-name-color: var(--theme-muted, #6f7f91);--issue-nr-color: var(--theme-ink, #0f1f36);--issue-place-color: var(--theme-ink, #223247);--issue-year-color: var(--theme-muted, #3d4d62)}body.theme-master.theme-dark[_nghost-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]{--issue-card-shadow: rgba(0, 0, 0, .45)}.issue-col[_ngcontent-%COMP%]{border-radius:12px;border:1px solid var(--issue-col-border);background-color:var(--issue-col-bg);color:var(--issue-col-text);padding:8px}.issue-empty-message[_ngcontent-%COMP%]{color:var(--issue-col-text)}.issue[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:140px;background-color:var(--issue-card-bg);border:1px solid var(--issue-card-border);border-radius:10px;margin-bottom:10px;padding:10px;box-shadow:0 8px 20px var(--issue-card-shadow);opacity:.7;transition:opacity .3s ease,transform .2s ease}.issue[_ngcontent-%COMP%]:hover{opacity:1;cursor:pointer;transform:translateY(-5px)}.issue-nr[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;position:absolute;top:0;left:20px;text-align:left;color:var(--issue-nr-color)}.issue-place[_ngcontent-%COMP%]{color:var(--issue-place-color);font-size:1rem;font-weight:700;position:absolute;top:110px;text-align:center}.issue-year[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;position:absolute;top:0;right:10px;text-align:left;color:var(--issue-year-color)}.issue-name[_ngcontent-%COMP%]{color:var(--issue-name-color);font-size:1.5rem;font-weight:700;position:relative;top:50px;text-align:center}.issue-works[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:8px;font-size:.95rem;font-weight:700;color:var(--issue-year-color);text-align:right}"]})};function Aw(n,e){if(n&1&&pt(0,"img",2),n&2){let t=B();ft("src",t.coverUrl,Ut)("alt",t.title)}}function Pw(n,e){if(n&1&&(ce(0,"div",3)(1,"a",33),b(2,"ISSN Portal"),ye()()),n&2){let t=B();g(),ft("href",t.issnPortalUrl,Ut)}}var kc=class n{coverUrl="-";issnPortalUrl="-";title="-";acronym="-";issn="-";eissn="-";period="-";publisher="-";collection="-";journalId="-";url="-";oaiUrl="-";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-journal-meta-grid"]],inputs:{coverUrl:"coverUrl",issnPortalUrl:"issnPortalUrl",title:"title",acronym:"acronym",issn:"issn",eissn:"eissn",period:"period",publisher:"publisher",collection:"collection",journalId:"journalId",url:"url",oaiUrl:"oaiUrl"},decls:57,vars:12,consts:[[1,"row","mt-5","journal-meta-grid"],[1,"col-12","col-lg-3","journal-meta-grid__side"],["loading","lazy",1,"img-fluid","mb-2","journal-meta-grid__cover",3,"src","alt"],["id","jnl_issn",1,"mb-3","portal"],[1,"col-12","col-lg-9"],[1,"container","px-0"],[1,"row","g-3"],[1,"col-12"],[1,"journal-field"],["type","text","placeholder"," ","readonly","","id","journal-title","name","journal-title",3,"value"],["for","journal-title"],[1,"col-12","col-lg-6"],["type","text","placeholder"," ","readonly","","id","journal-acronym","name","journal-acronym",3,"value"],["for","journal-acronym"],[1,"col-6","col-lg-3"],["type","text","placeholder"," ","readonly","","id","journal-issn","name","journal-issn",3,"value"],["for","journal-issn"],["type","text","placeholder"," ","readonly","","id","journal-eissn","name","journal-eissn",3,"value"],["for","journal-eissn"],[1,"col-12","col-lg-3"],["type","text","placeholder"," ","readonly","","id","journal-period","name","journal-period",3,"value"],["for","journal-period"],["type","text","placeholder"," ","readonly","","id","journal-publisher","name","journal-publisher",3,"value"],["for","journal-publisher"],["type","text","placeholder"," ","readonly","","id","journal-collection","name","journal-collection",3,"value"],["for","journal-collection"],["type","text","placeholder"," ","readonly","","id","journal-id","name","journal-id",3,"value"],["for","journal-id"],["type","text","placeholder"," ","readonly","","id","journal-url","name","journal-url",3,"value"],["for","journal-url"],[1,"col-12","col-lg-12"],["type","text","placeholder"," ","readonly","","id","journal-oai","name","journal-oai",3,"value"],["for","journal-oai"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(t,i){t&1&&(ce(0,"div",0)(1,"div",1),se(2,Aw,1,2,"img",2),se(3,Pw,3,1,"div",3),ye(),ce(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8),pt(9,"input",9),ce(10,"label",10),b(11,"Nome da publica\xE7\xE3o:"),ye()()(),ce(12,"div",11)(13,"div",8),pt(14,"input",12),ce(15,"label",13),b(16,"Abreviatura:"),ye()()(),ce(17,"div",14)(18,"div",8),pt(19,"input",15),ce(20,"label",16),b(21,"ISSN:"),ye()()(),ce(22,"div",14)(23,"div",8),pt(24,"input",17),ce(25,"label",18),b(26,"eISSN:"),ye()()(),ce(27,"div",19)(28,"div",8),pt(29,"input",20),ce(30,"label",21),b(31,"Vig\xEAncias:"),ye()()(),ce(32,"div",19)(33,"div",8),pt(34,"input",22),ce(35,"label",23),b(36,"Editor:"),ye()()(),ce(37,"div",19)(38,"div",8),pt(39,"input",24),ce(40,"label",25),b(41,"Cole\xE7\xE3o:"),ye()()(),ce(42,"div",19)(43,"div",8),pt(44,"input",26),ce(45,"label",27),b(46,"Identificador:"),ye()()(),ce(47,"div",7)(48,"div",8),pt(49,"input",28),ce(50,"label",29),b(51,"Link da Revista:"),ye()()(),ce(52,"div",30)(53,"div",8),pt(54,"input",31),ce(55,"label",32),b(56,"OAI:"),ye()()()()()()()),t&2&&(g(2),le(i.coverUrl!=="-"?2:-1),g(),le(i.issnPortalUrl!=="-"?3:-1),g(6),ft("value",i.title),g(5),ft("value",i.acronym),g(5),ft("value",i.issn),g(5),ft("value",i.eissn),g(5),ft("value",i.period),g(5),ft("value",i.publisher),g(5),ft("value",i.collection),g(5),ft("value",i.journalId),g(5),ft("value",i.url),g(5),ft("value",i.oaiUrl))},dependencies:[Ye],styles:[".journal-meta-grid[_ngcontent-%COMP%]{align-items:start}.journal-meta-grid__side[_ngcontent-%COMP%]{display:grid;gap:.75rem}.journal-meta-grid__cover[_ngcontent-%COMP%]{border-radius:.75rem;display:block;width:100%}.portal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1f5aa6;font-size:.95rem;text-decoration:underline;text-underline-offset:2px}.portal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#174784}.journal-field[_ngcontent-%COMP%]{position:relative}.journal-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--theme-line);border-radius:.85rem;color:var(--theme-ink);font-size:.95rem;min-height:3rem;padding:1.05rem .9rem .65rem;width:100%}.journal-field[_ngcontent-%COMP%]   input[readonly][_ngcontent-%COMP%]{cursor:default}.journal-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background:var(--theme-card-bg);color:var(--theme-ink);font-size:.76rem;font-weight:700;left:.75rem;letter-spacing:.02rem;line-height:1;margin:0;padding:0 .35rem;position:absolute;top:-.5rem;z-index:1}body.theme-master.theme-dark[_nghost-%COMP%]   .portal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .portal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#9cc6ff}body.theme-master.theme-dark[_nghost-%COMP%]   .portal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .portal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#d0e4ff}body.theme-master.theme-dark[_nghost-%COMP%]   .journal-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#0d1727e0;border-color:var(--theme-line);color:var(--theme-ink)}body.theme-master.theme-dark[_nghost-%COMP%]   .journal-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background:var(--theme-paper);color:var(--theme-ink)}body.theme-master.theme-dark[_nghost-%COMP%]   .journal-meta-grid__cover[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-meta-grid__cover[_ngcontent-%COMP%]{box-shadow:0 0 0 1px #ffffff14}body.theme-master.theme-dark[_nghost-%COMP%]   .journal-meta-grid__side[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-meta-grid__side[_ngcontent-%COMP%]{color:var(--theme-ink)}@media (max-width: 991.98px){.journal-meta-grid__side[_ngcontent-%COMP%]{margin-bottom:.75rem}}"]})};var Iw=["locationMap"];function Rw(n,e){if(n&1&&Ge(0,"app-journal-meta-grid",6),n&2){let t=B();Me("coverUrl",t.coverUrl())("issnPortalUrl",t.issnPortalUrl())("title",t.title())("acronym",t.acronym())("issn",t.issn())("eissn",t.eissn())("period",t.period())("publisher",t.publisher())("collection",t.collection())("journalId",t.journalId())("url",t.url())("oaiUrl",t.oaiUrl())}}function kw(n,e){if(n&1&&Ge(0,"app-issue-view-type",8),n&2){let t=B(2);Me("issues",t.issueItems())("acronym",t.acronym())("journalId",t.journalId())}}function Ow(n,e){n&1&&(w(0,"p",9),b(1,"Sem fasciculos disponiveis."),v())}function Dw(n,e){if(n&1&&se(0,kw,1,3,"app-issue-view-type",8)(1,Ow,2,0,"p",9),n&2){let t=B();le(t.issueItems().length?0:1)}}function Nw(n,e){if(n&1&&(w(0,"div",10)(1,"div",11),Ge(2,"div",12,0),v(),w(4,"div",13)(5,"div",14)(6,"div",15)(7,"h3",16),b(8,"Pa\xEDs"),v(),w(9,"p",17)(10,"strong"),b(11,"Nome:"),v(),b(12),v(),w(13,"p",17)(14,"strong"),b(15,"Latitude:"),v(),b(16),v(),w(17,"p",17)(18,"strong"),b(19,"Longitude:"),v(),b(20),v(),w(21,"p",17)(22,"strong"),b(23,"Altitude:"),v(),b(24),v(),w(25,"p",9)(26,"strong"),b(27,"ID:"),v(),b(28),v()()(),w(29,"div",14)(30,"div",15)(31,"h3",16),b(32,"Cidade"),v(),w(33,"p",17)(34,"strong"),b(35,"Nome:"),v(),b(36),v(),w(37,"p",17)(38,"strong"),b(39,"Latitude:"),v(),b(40),v(),w(41,"p",17)(42,"strong"),b(43,"Longitude:"),v(),b(44),v(),w(45,"p",17)(46,"strong"),b(47,"Altitude:"),v(),b(48),v(),w(49,"p",9)(50,"strong"),b(51,"ID:"),v(),b(52),v()()()()()),n&2){let t,i,r,a,o,s,l,c,d,h,u=B(2);g(5),Ke("d-none",!u.location().country),g(7),re(" ",(t=u.location().country)==null?null:t.name),g(4),re(" ",(i=u.location().country)==null?null:i.lat),g(4),re(" ",(r=u.location().country)==null?null:r.long),g(4),re(" ",(a=u.location().country)==null?null:a.altitude),g(4),re(" ",(o=u.location().country)==null?null:o.id),g(),Ke("d-none",!u.location().city),g(7),re(" ",(s=u.location().city)==null?null:s.name),g(4),re(" ",(l=u.location().city)==null?null:l.lat),g(4),re(" ",(c=u.location().city)==null?null:c.long),g(4),re(" ",(d=u.location().city)==null?null:d.altitude),g(4),re(" ",(h=u.location().city)==null?null:h.id)}}function Lw(n,e){n&1&&(w(0,"p",9),b(1,"Sem localiza\xE7\xE3o dispon\xEDvel."),v())}function Fw(n,e){if(n&1&&se(0,Nw,53,14,"div",10)(1,Lw,2,0,"p",9),n&2){let t=B();le(t.location().country||t.location().city?0:1)}}function Uw(n,e){if(n&1&&(w(0,"pre",7),b(1),v()),n&2){let t=B();g(),H(t.jsonContent())}}var Oc=class n{data=null;locationMap;activeTab=qe("summary");mapInstance=null;locationMapAttempt=0;title=te(()=>this.field(["jnl_name","title","name"]));acronym=te(()=>this.field(["jnl_name_abrev","acronym","sigla"]));journalId=te(()=>this.field(["id_jnl","ID","id"]));publisher=te(()=>this.field(["publisher","jnl_editor","editor"]));issn=te(()=>this.field(["jnl_issn","issn"]));eissn=te(()=>this.field(["jnl_eissn","eissn"]));collection=te(()=>this.field(["jnl_collection","collection"]));period=te(()=>{let e=this.field(["jnl_ano_inicio","start_year"]),t=this.field(["jnl_ano_final","end_year"]);return e==="-"&&t==="-"?"-":e!=="-"&&t!=="-"?`${e} - ${t}`:e!=="-"?`${e} -`:`- ${t}`});url=te(()=>this.field(["jnl_url","url"]));oaiUrl=te(()=>this.field(["jnl_url_oai","oai_url"]));coverUrl=te(()=>this.field(["cover","image","cover_url"]));location=te(()=>this.extractLocation());mapPoints=te(()=>this.locationPoints());issnPortalUrl=te(()=>{let e=this.issn();return e==="-"?"-":`https://portal.issn.org/resource/ISSN/${e}`});issueItems=te(()=>{let e=this.asRecord(this.data);if(!e)return[];let t=[...this.arrayFromKeys(e,["issues"]),...this.arrayFromKeys(e,["issue"])];if(t.length===0)return[];let i=new Set,r=[];for(let a of t){let o=this.issueKey(a);i.has(o)||(i.add(o),r.push(a))}return r});jsonContent=te(()=>JSON.stringify(this.data,null,2));setTab(e){if(this.activeTab.set(e),e==="location"){this.scheduleLocationMapRender();return}this.destroyMap()}field(e){let t=this.asRecord(this.data);if(!t)return"-";for(let i of e){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return"-"}arrayFromKeys(e,t){let i=[];for(let r of t){let a=e[r];Array.isArray(a)?i.push(...a):a&&typeof a=="object"&&i.push(a)}return i}issueKey(e){if(typeof e=="string"||typeof e=="number")return String(e);if(!e||typeof e!="object")return"";let t=e,i=["ID","id","issue_id","id_issue","id_edition","YEAR","year","VOL","vol","NR","nr"];for(let r of i){let a=t[r];if(typeof a=="string"&&a.trim())return`${r}:${a.trim()}`;if(typeof a=="number"&&Number.isFinite(a))return`${r}:${a}`}return JSON.stringify(t)}asRecord(e){return e&&typeof e=="object"?e:null}ngAfterViewInit(){this.activeTab()==="location"&&this.scheduleLocationMapRender()}ngOnDestroy(){this.destroyMap()}extractLocation(){let e=this.asRecord(this.data),t=this.asRecord(e?.geo);return{country:this.asGeoPlace(t?.country),city:this.asGeoPlace(t?.city)}}asGeoPlace(e){let t=this.asRecord(e);if(!t)return null;let i=this.stringFromRecord(t,["name"]),r=this.stringFromRecord(t,["lat"]),a=this.stringFromRecord(t,["long"]),o=this.stringFromRecord(t,["altitude"]),s=this.stringFromRecord(t,["id"]);return i==="-"&&r==="-"&&a==="-"&&o==="-"&&s==="-"?null:{name:i,lat:r,long:a,altitude:o,id:s}}stringFromRecord(e,t){for(let i of t){let r=e[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return"-"}locationPoints(){let e=this.location(),t=[];if(e.country){let i=this.toGeoPoint(e.country);i&&t.push(i)}if(e.city){let i=this.toGeoPoint(e.city);i&&t.push(i)}return t}toGeoPoint(e){let t=Number.parseFloat(e.lat),i=Number.parseFloat(e.long);return!Number.isFinite(t)||!Number.isFinite(i)?null:{name:e.name,lat:t,long:i,altitude:e.altitude,id:e.id}}renderLocationMap(){return Tr(this,null,function*(){if(typeof window>"u"||typeof document>"u")return;let e=this.locationMap?.nativeElement,t=this.mapPoints();if(!e||t.length===0)return;if(e.getBoundingClientRect().width===0||e.getBoundingClientRect().height===0){this.scheduleLocationMapRender();return}let i=yield import("./chunk-M3GYE6BJ.js");this.destroyMap();let r=i.map(e,{zoomControl:!0,scrollWheelZoom:!0});i.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors",maxZoom:19}).addTo(r);let a=i.latLngBounds([]);for(let o of t){let s=o===t[0]?"#385a7c":"#157347";i.circleMarker([o.lat,o.long],{color:s,fillColor:s,fillOpacity:.9,radius:8,weight:2}).addTo(r).bindPopup(`<strong>${o.name}</strong><br>Lat: ${o.lat}<br>Long: ${o.long}<br>Altitude: ${o.altitude}`),a.extend([o.lat,o.long])}a.isValid()?r.fitBounds(a.pad(.35)):r.setView([t[0].lat,t[0].long],4),this.mapInstance=r,this.locationMapAttempt=0,requestAnimationFrame(()=>{r.invalidateSize(),setTimeout(()=>r.invalidateSize(),120)})})}scheduleLocationMapRender(){this.locationMapAttempt>=8||(this.locationMapAttempt+=1,setTimeout(()=>requestAnimationFrame(()=>this.renderLocationMap()),50))}destroyMap(){this.mapInstance&&(this.mapInstance.remove(),this.mapInstance=null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-view-journal"]],viewQuery:function(t,i){if(t&1&&Pr(Iw,5),t&2){let r;Ir(r=Rr())&&(i.locationMap=r.first)}},inputs:{data:"data"},decls:17,vars:9,consts:[["locationMap",""],[1,"view-card","p-3","p-md-4"],[1,"h5","mb-3"],["role","tablist","aria-label","Abas de conteudo da revista",1,"tab-nav","mb-3"],["type","button",1,"tab-btn",3,"click"],[1,"tab-panel"],[3,"coverUrl","issnPortalUrl","title","acronym","issn","eissn","period","publisher","collection","journalId","url","oaiUrl"],[1,"json-block","mb-0"],[3,"issues","acronym","journalId"],[1,"mb-0"],[1,"location-layout"],[1,"location-map-wrap"],[1,"journal-location-map"],[1,"row","g-3"],[1,"col-12","col-md-6"],[1,"border","rounded-3","p-3","h-100"],[1,"h6","mb-3"],[1,"mb-1"]],template:function(t,i){if(t&1&&(w(0,"article",1)(1,"h2",2),b(2,"Revista"),v(),w(3,"div",3)(4,"button",4),Be("click",function(){return i.setTab("summary")}),b(5," Resumo "),v(),w(6,"button",4),Be("click",function(){return i.setTab("issues")}),b(7," Fasciculos "),v(),w(8,"button",4),Be("click",function(){return i.setTab("location")}),b(9," Localiza\xE7\xE3o "),v(),w(10,"button",4),Be("click",function(){return i.setTab("json")}),b(11," JSON "),v()(),w(12,"div",5),se(13,Rw,1,12,"app-journal-meta-grid",6)(14,Dw,2,1)(15,Fw,2,1)(16,Uw,2,1,"pre",7),v()()),t&2){let r;g(4),Ke("active",i.activeTab()==="summary"),g(2),Ke("active",i.activeTab()==="issues"),g(2),Ke("active",i.activeTab()==="location"),g(2),Ke("active",i.activeTab()==="json"),g(3),le((r=i.activeTab())==="summary"?13:r==="issues"?14:r==="location"?15:r==="json"?16:-1)}},dependencies:[Ye,va,kc],styles:[".view-card[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.9rem}.tab-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.tab-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--theme-line);border-radius:999px;color:var(--theme-ink);cursor:pointer;font-size:.9rem;padding:.35rem .7rem}.tab-btn.active[_ngcontent-%COMP%]{background:var(--theme-sand);border-color:var(--theme-hint);font-weight:600}.tab-panel[_ngcontent-%COMP%]{background:#ffffff47;border:1px solid var(--theme-line);border-radius:.6rem;padding:.85rem}body.theme-master.theme-dark[_nghost-%COMP%]   .view-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .view-card[_ngcontent-%COMP%]{background:radial-gradient(circle at top left,rgba(255,255,255,.06),transparent 36%),linear-gradient(180deg,#101727eb,#0d131fe0);border-color:#30445fe0;box-shadow:0 18px 38px #00000047}body.theme-master.theme-dark[_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .tab-panel[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-panel[_ngcontent-%COMP%]{background:#122033f0;border-color:#30445fe0;box-shadow:0 10px 22px #0000002e}body.theme-master.theme-dark[_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%]{background:#122033cc}body.theme-master.theme-dark[_nghost-%COMP%]   .tab-btn.active[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(180deg,#212f46f5,#182334f0);border-color:#6484ad99}body.theme-master.theme-dark[_nghost-%COMP%]   .json-block[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .json-block[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .location-map-wrap[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .location-map-wrap[_ngcontent-%COMP%]{background:#122033f0;border-color:#30445fe0;box-shadow:0 10px 22px #0000002e}.journal-summary[_ngcontent-%COMP%]{display:grid;gap:1rem}.journal-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:.7rem;display:block;max-width:180px;width:100%}.json-block[_ngcontent-%COMP%]{background:var(--theme-sand);border-radius:.45rem;max-height:420px;overflow:auto;padding:.7rem}.location-layout[_ngcontent-%COMP%]{display:grid;gap:1rem}.location-map-wrap[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:.8rem;overflow:hidden}.journal-location-map[_ngcontent-%COMP%]{min-height:360px;width:100%}.journal-site-link[_ngcontent-%COMP%]{color:#1f5aa6;text-decoration:underline;text-underline-offset:2px}.journal-site-link[_ngcontent-%COMP%]:hover{color:#174784}.journal-site-link[_ngcontent-%COMP%]:focus-visible{outline:2px solid #5c9dff;outline-offset:2px;border-radius:2px}body.theme-master.theme-dark[_nghost-%COMP%]   .journal-site-link[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-site-link[_ngcontent-%COMP%]{color:#8ec2ff}body.theme-master.theme-dark[_nghost-%COMP%]   .journal-site-link[_ngcontent-%COMP%]:hover, body.theme-master.theme-dark   [_nghost-%COMP%]   .journal-site-link[_ngcontent-%COMP%]:hover{color:#bfdcff}@media (min-width: 768px){.journal-summary[_ngcontent-%COMP%]{grid-template-columns:180px minmax(0,1fr);align-items:start}.journal-location-map[_ngcontent-%COMP%]{min-height:440px}}"]})};var Bw=n=>["/v",n],zw=(n,e)=>e.id+e.title;function Vw(n,e){n&1&&(w(0,"p",15),b(1,"Carregando resultados..."),v())}function Gw(n,e){if(n&1&&(w(0,"p",16),b(1),v()),n&2){let t=B(2);g(),H(t.error())}}function Hw(n,e){if(n&1&&(w(0,"a",33),b(1," Ver "),v()),n&2){let t=B().$implicit;Me("routerLink",Tt(1,Bw,t.id))}}function Ww(n,e){if(n&1){let t=ht();w(0,"article",28)(1,"div",29)(2,"input",30,0),Be("change",function(){let r=et(t).$implicit,a=uh(3),o=B(3);return tt(o.toggleMarked(r.id,a.checked))}),v(),w(4,"div")(5,"h4",31),b(6),v(),w(7,"p",32),b(8),v()()(),se(9,Hw,2,3,"a",33),v()}if(n&2){let t=e.$implicit,i=B(3);g(2),Me("checked",i.isMarked(t.id))("disabled",!t.id),g(4),H(t.title),g(2),H(t.subtitle),g(),le(t.id?9:-1)}}function Xw(n,e){if(n&1){let t=ht();w(0,"p",22),b(1),v(),w(2,"div",23)(3,"button",24),Be("click",function(){et(t);let r=B(2);return tt(r.allResultsMarked()?r.showSelection():r.selectAllResults())}),b(4),w(5,"span",25),b(6),v()(),w(7,"button",26),Be("click",function(){et(t);let r=B(2);return tt(r.clearAllResults())}),b(8," Limpar todos "),v()(),w(9,"div",27),rt(10,Ww,10,5,"article",28,zw),v()}if(n&2){let t=B(2);g(),re("",t.results().length," resultado(s) localizado(s)"),g(3),re(" ",t.allResultsMarked()?"Mostrar sele\xE7\xE3o":"Selecionar todos"," "),g(2),H(t.basketCount()),g(),Me("disabled",!t.canClearAll()),g(3),at(t.results())}}function qw(n,e){n&1&&(w(0,"p",15),b(1,"Nenhum resultado encontrado."),v())}function jw(n,e){if(n&1&&(w(0,"pre",37),b(1),v()),n&2){let t=B(3);g(),H(t.searchResponseJson())}}function $w(n,e){n&1&&(w(0,"p",38),b(1,"Nenhuma resposta disponivel."),v())}function Yw(n,e){if(n&1&&(w(0,"div",20)(1,"div",34)(2,"h4",35),b(3,"Resposta da consulta"),v(),w(4,"p",36),b(5,"Visualizacao bruta do retorno da API."),v()(),se(6,jw,2,1,"pre",37)(7,$w,2,0,"p",38),v()),n&2){let t=B(2);g(6),le(t.searchResponseJson()?6:7)}}function Jw(n,e){n&1&&(w(0,"div",21)(1,"h4",35),b(2,"Menu lateral"),v(),w(3,"p",36),b(4,"Clique em JSON para ver a resposta completa da consulta."),v()())}function Zw(n,e){if(n&1){let t=ht();w(0,"div",12)(1,"div",14),se(2,Vw,2,0,"p",15)(3,Gw,2,1,"p",16)(4,Xw,12,4)(5,qw,2,0,"p",15),v(),w(6,"aside",17)(7,"div",18)(8,"button",19),Be("click",function(){et(t);let r=B();return tt(r.showResultsPanel())}),b(9," Resultados "),v(),w(10,"button",19),Be("click",function(){et(t);let r=B();return tt(r.showJsonResponsePanel())}),b(11," JSON "),v()(),se(12,Yw,8,1,"div",20)(13,Jw,5,0,"div",21),v()()}if(n&2){let t=B();g(2),le(t.loading()?2:t.error()?3:t.hasResults()?4:5),g(6),Ke("active",!t.showJsonPanel()),g(2),Ke("active",t.showJsonPanel()),g(2),le(t.showJsonPanel()?12:13)}}function Kw(n,e){if(n&1&&(w(0,"option",50),b(1),v()),n&2){let t=e.$implicit;Me("value",t),g(),H(t)}}function Qw(n,e){if(n&1&&(w(0,"option",50),b(1),v()),n&2){let t=e.$implicit;Me("value",t),g(),H(t)}}function eS(n,e){if(n&1&&(w(0,"div"),Ge(1,"input",51),w(2,"label",52),b(3),v()()),n&2){let t=e.$implicit;g(),Me("id",Vc("event-field-",t.value))("value",t.value),g(),Me("for",Vc("event-field-",t.value)),g(),H(t.label)}}function tS(n,e){if(n&1&&(w(0,"div",39)(1,"form",40)(2,"div",41)(3,"label",42),b(4,"Ano inicial"),v(),w(5,"select",43),On(6,Kw,2,2,"option",44),v()(),w(7,"div",41)(8,"label",45),b(9,"Ano final"),v(),w(10,"select",46),On(11,Qw,2,2,"option",44),v()(),w(12,"div",47)(13,"label",48),b(14,"Campo de pesquisa"),v(),On(15,eS,4,6,"div",49),v()()()),n&2){let t=B();g(),Me("formGroup",t.filtersForm),g(5),Me("ngForOf",t.yearsStart),g(5),Me("ngForOf",t.yearsEnd),g(4),Me("ngForOf",t.searchFields)}}var Dc=class n{brapciApiService=Jt(Uo);basketService=Jt(Bo);router=Jt(kr);journalId="";query=qe("");loading=qe(!1);searched=qe(!1);error=qe("");results=qe([]);rawSearchResponse=qe(null);showJsonPanel=qe(!1);basketRefresh=qe(0);showFilters=!1;yearsStart=[];yearsEnd=[];searchFields=[{label:"Titulo",value:"TI"},{label:"Resumo",value:"AB"},{label:"Palavras-chave",value:"KW"},{label:"Autor",value:"AU"},{label:"Todos os campos",value:"FL"}];filtersForm=new wh({year_start:new Fo(1962,{nonNullable:!0}),year_end:new Fo(new Date().getFullYear()+1,{nonNullable:!0}),fields:new Fo("FL",{nonNullable:!0})});hasResults=te(()=>this.results().length>0);canSearch=te(()=>this.query().trim().length>0&&this.normalizedJournalId().length>0);markedResultsCount=te(()=>(this.basketRefresh(),this.results().filter(e=>this.isMarked(e.id)).length));allResultsMarked=te(()=>{let e=this.results().length;return this.basketRefresh(),e>0&&this.markedResultsCount()===e});basketCount=te(()=>(this.basketRefresh(),this.basketService.count()));canClearAll=te(()=>(this.basketRefresh(),this.basketService.count()>0));searchResponseJson=te(()=>{let e=this.rawSearchResponse();if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return"[Nao foi possivel serializar a resposta da consulta]"}});constructor(){this.initYears(),this.filtersForm.patchValue({year_start:this.yearsStart[0],year_end:this.yearsEnd[0]}),this.basketService.changed.pipe(Or()).subscribe(()=>{this.basketRefresh.update(e=>e+1)})}isMarked(e){return this.basketService.isMarked(Number(e))}toggleMarked(e,t){let i=Number(e);if(Number.isFinite(i)){if(t){this.basketService.add(i);return}this.basketService.remove(i)}}selectAllResults(){this.results().forEach(e=>{let t=Number(e.id);Number.isFinite(t)&&this.basketService.add(t)})}clearAllResults(){this.basketService.clear()}showSelection(){this.router.navigateByUrl("/basket/selected")}showResultsPanel(){this.showJsonPanel.set(!1)}showJsonResponsePanel(){this.showJsonPanel.set(!0)}searchWorks(){let e=this.query().trim(),t=this.normalizedJournalId(),{year_start:i,year_end:r,fields:a}=this.filtersForm.getRawValue();if(!e||!t){this.searched.set(!1),this.results.set([]),this.rawSearchResponse.set(null),this.error.set("Informe um termo para pesquisar trabalhos deste evento.");return}this.loading.set(!0),this.searched.set(!0),this.error.set(""),this.brapciApiService.search(e,[{name:"journal",value:t},{name:"year_start",value:i},{name:"year_end",value:r},{name:"fields",value:a}]).subscribe({next:o=>{console.log("API response:",o);let s=this.normalizeWorks(o).map(l=>this.mapWork(l)).filter(l=>l!==null);this.results.set(s),this.rawSearchResponse.set(o),this.loading.set(!1),s.length||this.error.set("Nenhum trabalho encontrado para este evento com o termo informado.")},error:()=>{this.results.set([]),this.rawSearchResponse.set({error:"Erro ao consultar a API"}),this.loading.set(!1),this.error.set("Nao foi possivel realizar a busca no momento.")}})}initYears(){let e=new Date().getFullYear()+1;for(let t=1962;t<=e;t+=1)this.yearsStart.push(t);for(let t=e;t>=1962;t-=1)this.yearsEnd.push(t)}normalizedJournalId(){return String(this.journalId??"").trim()}normalizeWorks(e){if(Array.isArray(e))return e;if(!e||typeof e!="object")return[];let t=e;return Array.isArray(t.works)?t.works:Array.isArray(t.results)?t.results:Array.isArray(t.items)?t.items:Array.isArray(t.data)?t.data:[]}mapWork(e){if(!e||typeof e!="object")return null;let t=e,i=t.data&&typeof t.data=="object"?t.data:null,r=String(t.id??t.ID??i?.ID??t.rdf??"").trim(),a=String(t.title??t.TI??t.name??i?.TITLE??i?.title??"").trim();if(!a)return null;let o=String(t.year??t.PY??i?.year??i?.YEAR??"").trim(),l=[this.readAuthors(t),o].filter(Boolean).join(" - ")||"Sem metadados adicionais";return{id:r,title:a,subtitle:l}}readAuthors(e){let t=e.data&&typeof e.data=="object"?e.data:null,i=e.authors??e.AU??e.author??t?.AUTHORS??t?.authors;return Array.isArray(i)?i.map(r=>String(r).trim()).filter(r=>r.length>0).slice(0,3).join(", "):typeof i=="string"?i.split(";").map(r=>r.trim()).filter(r=>r.length>0).slice(0,3).join(", "):String(i??"").trim()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-event-works-search"]],inputs:{journalId:"journalId"},decls:17,vars:4,consts:[["markCheckbox",""],["aria-labelledby","event-works-search-title",1,"event-works-search"],[1,"cardx","h-100x","shadow-sm","border-0"],[1,"card-body"],["id","event-works-search-title",1,"search-title"],["novalidate","",1,"search-form","mb-0",3,"ngSubmit"],["for","event-query",1,"form-label","mb-0"],[1,"input-group","mt-0"],["id","event-query","name","eventQuery","rows","3","placeholder","Digite titulo, autor, resumo ou palavra-chave",1,"form-control","border","border-secondary",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"search-actions"],["type","button",1,"link","search-action-link",3,"click"],[1,"search-results-grid","mt-3"],["class","search-filters",4,"ngIf"],[1,"search-results-main"],[1,"hint","mb-0"],[1,"hint","mb-0","text-danger"],["aria-label","Menu lateral da consulta",1,"search-json-sidebar"],[1,"search-json-toolbar"],["type","button",1,"search-json-tab",3,"click"],[1,"search-json-card"],[1,"search-json-card","search-json-card-help"],[1,"event-works-search__count","mb-2"],[1,"event-works-search__bulk-actions","mb-3"],["type","button",1,"btn","btn-sm","btn-outline-primary",3,"click"],[1,"badge","text-bg-primary","ms-1"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click","disabled"],[1,"list-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-start","gap-3"],[1,"d-flex","align-items-start","gap-2","flex-grow-1"],["type","checkbox","title","Marcar trabalho no Basket","aria-label","Marcar trabalho no Basket",1,"form-check-input","mt-1",3,"change","checked","disabled"],[1,"event-works-search__title","mb-1"],[1,"event-works-search__meta","mb-0"],["target","_blank","rel","noopener noreferrer",1,"btn","btn-sm","btn-outline-primary",3,"routerLink"],[1,"search-json-header"],[1,"search-json-title"],[1,"search-json-subtitle"],[1,"search-json-pre"],[1,"search-json-empty"],[1,"search-filters"],[1,"search-filters-form",3,"formGroup"],[1,"search-filter-col-year"],["for","year_start"],["id","year_start","formControlName","year_start",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","year_end"],["id","year_end","formControlName","year_end",1,"form-control"],[1,"search-filter-col-wide"],[1,"search-filter-title"],[4,"ngFor","ngForOf"],[3,"value"],["type","radio","name","event-fields","formControlName","fields",3,"value","id"],[1,"ms-1",3,"for"]],template:function(t,i){t&1&&(w(0,"article",1)(1,"div",2)(2,"div",3)(3,"h3",4),b(4,"Buscar trabalhos deste evento"),v(),w(5,"form",5),Be("ngSubmit",function(){return i.searchWorks()}),w(6,"label",6),b(7,"Termo de busca"),v(),w(8,"div",7)(9,"textarea",8),Be("ngModelChange",function(a){return i.query.set(a)}),v(),w(10,"button",9),b(11," Buscar "),v()()(),w(12,"div",10)(13,"span",11),Be("click",function(){return i.showFilters=!i.showFilters}),b(14,"Filtros"),v()(),se(15,Zw,14,6,"div",12),v()(),On(16,tS,16,4,"div",13),v()),t&2&&(g(9),Me("ngModel",i.query()),g(),Me("disabled",i.loading()||!i.canSearch()),g(5),le(i.searched()?15:-1),g(),Me("ngIf",i.showFilters))},dependencies:[Ye,gh,ko,Dh,Eh,kh,Oh,bh,Rh,Ah,Mh,Ch,Th,Sh,Nh,Ph,Ih,yh,Lo],styles:[".search-form[_ngcontent-%COMP%]{display:grid;gap:.6rem}.search-title[_ngcontent-%COMP%]{color:var(--theme-title);text-align:left}.hint[_ngcontent-%COMP%]{color:var(--theme-hint)}.search-actions[_ngcontent-%COMP%]{margin-top:.5rem;display:flex;align-items:center;gap:.5rem;font-size:.75rem}.search-action-link[_ngcontent-%COMP%]{font-weight:400;font-size:.75rem;display:inline-flex;align-items:center;gap:.5rem}.search-filters[_ngcontent-%COMP%]{border:1px solid var(--theme-line);padding:1rem;border-radius:8px;margin-top:.8rem;background:var(--theme-card-bg);color:var(--theme-ink)}.search-filters-form[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-wrap:wrap}.search-filter-col-year[_ngcontent-%COMP%]{min-width:100px}.search-filter-col-wide[_ngcontent-%COMP%]{min-width:220px}.search-filter-title[_ngcontent-%COMP%]{font-weight:600}.search-results-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:1rem;align-items:start}.search-results-main[_ngcontent-%COMP%]{min-width:0}.search-json-sidebar[_ngcontent-%COMP%]{position:sticky;top:1rem;align-self:start}.search-json-toolbar[_ngcontent-%COMP%]{display:flex;gap:.35rem;margin-bottom:.5rem}.search-json-tab[_ngcontent-%COMP%]{border:1px solid var(--theme-line);background:var(--theme-card-bg);color:var(--theme-ink);border-radius:999px;padding:.45rem .75rem;font-size:.78rem;cursor:pointer}.search-json-tab.active[_ngcontent-%COMP%]{background:var(--bs-primary);border-color:var(--bs-primary);color:#fff}.search-json-card[_ngcontent-%COMP%]{border:1px solid var(--theme-line);border-radius:12px;background:var(--theme-card-bg);padding:1rem}.search-json-card-help[_ngcontent-%COMP%]{color:var(--theme-muted)}.search-json-header[_ngcontent-%COMP%]{margin-bottom:.75rem}.search-json-title[_ngcontent-%COMP%]{margin:0;font-size:.98rem;color:var(--theme-title)}.search-json-subtitle[_ngcontent-%COMP%]{margin:.2rem 0 0;font-size:.8rem;color:var(--theme-muted)}.search-json-pre[_ngcontent-%COMP%]{margin:0;max-height:60vh;overflow:auto;padding:.75rem;border-radius:10px;background:color-mix(in srgb,var(--theme-card-bg) 70%,var(--theme-line));color:var(--theme-ink);font-size:.74rem;line-height:1.4;white-space:pre-wrap;word-break:break-word}.search-json-empty[_ngcontent-%COMP%]{margin:0;font-size:.85rem;color:var(--theme-muted)}.event-works-search__count[_ngcontent-%COMP%]{font-size:.85rem;color:var(--theme-hint)}.event-works-search__bulk-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.event-works-search__title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600}.event-works-search__meta[_ngcontent-%COMP%]{color:#495057;font-size:.875rem}@media (max-width: 991.98px){.search-results-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.search-json-sidebar[_ngcontent-%COMP%]{position:static}}"]})};var nS=()=>["jnl_collection"],iS=()=>["id_jnl","ID"],rS=()=>["jnl_frbr"],aS=(n,e,t)=>({issues:n,acronym:e,journalId:t});function oS(n,e){if(n&1&&Ge(0,"app-event-works-search",7),n&2){let t=B();Me("journalId",t.eventJournalId())}}function sS(n,e){if(n&1&&(w(0,"p",8)(1,"strong"),b(2,"Titulo:"),v(),b(3),v(),w(4,"p",8)(5,"strong"),b(6,"Colecao:"),v(),b(7),v(),w(8,"p",8)(9,"strong"),b(10,"Identificador:"),v(),b(11),v(),w(12,"p",8)(13,"strong"),b(14,"FRBR:"),v(),b(15),v(),w(16,"p",8)(17,"strong"),b(18,"Qtd. de edicoes:"),v(),b(19),v(),w(20,"p",9)(21,"strong"),b(22,"Qtd. de autores:"),v(),b(23),v()),n&2){let t=B();g(3),re(" ",t.title()),g(4),re(" ",t.field(Dn(6,nS))),g(4),re(" ",t.field(Dn(7,iS))),g(4),re(" ",t.field(Dn(8,rS))),g(4),re(" ",t.editions().length),g(4),re(" ",t.authors().length)}}function lS(n,e){if(n&1&&(w(0,"li",8),b(1),v()),n&2){let t=e.$implicit;g(),H(t)}}function cS(n,e){if(n&1&&(w(0,"ul",10),rt(1,lS,2,1,"li",8,Io),v()),n&2){let t=B(2);g(),at(t.authors())}}function dS(n,e){n&1&&(w(0,"p",9),b(1,"Sem autores disponiveis."),v())}function uS(n,e){if(n&1&&se(0,cS,3,0,"ul",10)(1,dS,2,0,"p",9),n&2){let t=B();le(t.authors().length?0:1)}}function hS(n,e){if(n&1&&(w(0,"pre",6),b(1),v()),n&2){let t=B();g(),H(t.jsonContent())}}function pS(n,e){n&1&&Ar(0)}function fS(n,e){if(n&1&&On(0,pS,1,0,"ng-container",11),n&2){let t=B();Me("ngComponentOutlet",t.issueViewComponent)("ngComponentOutletInputs",Ma(2,aS,t.issueItems(),t.acronym(),t.eventJournalId()))}}var Nc=class n{data=null;activeTab=qe("summary");issueViewComponent=va;eventJournalId=te(()=>this.field(["id_jnl","ID"]));acronym=te(()=>this.field(["jnl_name_abrev","acronym","sigla"]));title=te(()=>this.field(["jnl_name","title","name"]));editions=te(()=>{let e=this.asRecord(this.data);if(!e)return[];let i=this.arrayFromKeys(e,["editions","edition","edition_list","events","eventos","lista_edicoes","items"]).map(o=>this.itemToText(o)).filter(o=>o.length>0);if(i.length>0)return i;let r=this.field(["jnl_ano_inicio","start_year"]),a=this.field(["jnl_ano_final","end_year"]);return r!=="-"||a!=="-"?[`Periodo do evento: ${r} - ${a}`]:[]});authors=te(()=>{let e=this.asRecord(this.data);return e?this.arrayFromKeys(e,["authors","author","autores","coauthors","participants","organizadores"]).map(i=>this.itemToText(i)).filter(i=>i.length>0).filter((i,r,a)=>a.indexOf(i)===r).sort((i,r)=>i.localeCompare(r,"pt-BR",{sensitivity:"base"})):[]});issueItems=te(()=>{let e=this.asRecord(this.data);if(!e)return[];let t=e.issues??e.issue;return Array.isArray(t)?t:t&&typeof t=="object"?[t]:[]});jsonContent=te(()=>JSON.stringify(this.data,null,2));setTab(e){this.activeTab.set(e)}field(e){let t=this.asRecord(this.data);if(!t)return"-";for(let i of e){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return"-"}asRecord(e){return e&&typeof e=="object"?e:null}arrayFromKeys(e,t){for(let i of t){let r=e[i];if(Array.isArray(r))return r}return[]}itemToText(e){if(typeof e=="string"&&e.trim())return e.trim();if(typeof e=="number"&&Number.isFinite(e))return String(e);if(!e||typeof e!="object")return"";let t=e;for(let i of["title","name","event","edition","label","autor","author","nome"]){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim()}return""}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-view-event"]],inputs:{data:"data"},decls:20,vars:13,consts:[[1,"view-card","p-3","p-md-4"],[1,"h5","mb-3"],["role","tablist","aria-label","Abas de conteudo do evento",1,"tab-nav","mb-3"],["type","button",1,"tab-btn",3,"click"],[1,"tab-panel"],[3,"journalId",4,"ngIf"],[1,"json-block","mb-0"],[3,"journalId"],[1,"mb-1"],[1,"mb-0"],[1,"mb-0","ps-3"],[4,"ngComponentOutlet","ngComponentOutletInputs"]],template:function(t,i){if(t&1&&(w(0,"article",0)(1,"h2",1),b(2,"ENANCIB"),v(),w(3,"div",2)(4,"button",3),Be("click",function(){return i.setTab("editions")}),b(5," Busca de trabalhos "),v(),w(6,"button",3),Be("click",function(){return i.setTab("issue")}),b(7," Issues "),v(),w(8,"button",3),Be("click",function(){return i.setTab("summary")}),b(9," Resumo "),v(),w(10,"button",3),Be("click",function(){return i.setTab("authors")}),b(11," Autores "),v(),w(12,"button",3),Be("click",function(){return i.setTab("json")}),b(13," JSON "),v()(),w(14,"div",4),On(15,oS,1,1,"app-event-works-search",5),se(16,sS,24,9)(17,uS,2,1)(18,hS,2,1,"pre",6),se(19,fS,1,6,"ng-container"),v()()),t&2){let r;g(4),Ke("active",i.activeTab()==="editions"),g(2),Ke("active",i.activeTab()==="issue"),g(2),Ke("active",i.activeTab()==="summary"),g(2),Ke("active",i.activeTab()==="authors"),g(2),Ke("active",i.activeTab()==="json"),g(3),Me("ngIf",i.activeTab()==="editions"),g(),le((r=i.activeTab())==="summary"?16:r==="authors"?17:r==="json"?18:-1),g(3),le(i.activeTab()==="issue"?19:-1)}},dependencies:[Ye,Ro,ko,Dc],styles:[".view-card[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.9rem}.tab-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.tab-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--theme-line);border-radius:999px;color:var(--theme-ink);cursor:pointer;font-size:.9rem;padding:.35rem .7rem}.tab-btn.active[_ngcontent-%COMP%]{background:var(--theme-sand);border-color:var(--theme-hint);font-weight:600}.tab-panel[_ngcontent-%COMP%]{background:#ffffff47;border:1px solid var(--theme-line);border-radius:.6rem;padding:.85rem}.json-block[_ngcontent-%COMP%]{background:var(--theme-sand);border-radius:.45rem;max-height:420px;overflow:auto;padding:.7rem}"]})};var Xu=(n,e)=>e.name,mS=(n,e)=>e.id,gS=(n,e)=>e.authorsCount;function _S(n,e){if(n&1&&(w(0,"a",11),b(1),v()),n&2){let t=B();Me("href","/v/"+t.sourceRdf(),Ut),g(),re(" ",t.acronym()," ")}}function xS(n,e){if(n&1&&(w(0,"strong",12),b(1),v()),n&2){let t=B();g(),H(t.acronym())}}function vS(n,e){if(n&1&&(w(0,"div",16)(1,"section",18)(2,"h3",19),b(3),L(4,"translate"),v(),w(5,"dl",20)(6,"div")(7,"dt"),b(8),L(9,"translate"),v(),w(10,"dd"),b(11),v()(),w(12,"div")(13,"dt"),b(14),L(15,"translate"),v(),w(16,"dd"),b(17),v()(),w(18,"div")(19,"dt"),b(20),L(21,"translate"),v(),w(22,"dd"),b(23),v()(),w(24,"div")(25,"dt"),b(26),L(27,"translate"),v(),w(28,"dd"),b(29),v()(),w(30,"div")(31,"dt"),b(32),L(33,"translate"),v(),w(34,"dd"),b(35),v()(),w(36,"div")(37,"dt"),b(38),L(39,"translate"),v(),w(40,"dd"),b(41),v()()()(),w(42,"section",18)(43,"h3",19),b(44),L(45,"translate"),v(),w(46,"div",21)(47,"div",22)(48,"span"),b(49),L(50,"translate"),v(),w(51,"strong"),b(52),v()(),w(53,"ul",23)(54,"li")(55,"strong"),b(56),L(57,"translate"),v(),b(58),v(),w(59,"li")(60,"strong"),b(61),L(62,"translate"),v(),b(63),v()()()()()),n&2){let t=B();g(3),H(V(4,20,"issue.summary.main.title")),g(5),H(V(9,22,"issue.summary.main.acronym")),g(3),H(t.acronym()),g(3),H(V(15,24,"issue.summary.main.source")),g(3),H(t.sourceName()),g(3),H(V(21,26,"issue.summary.main.journalId")),g(3),H(t.journalId()),g(3),H(V(27,28,"issue.summary.main.year")),g(3),H(t.year()),g(3),H(V(33,30,"issue.summary.main.issue")),g(3),H(t.issueNumber()),g(3),H(V(39,32,"issue.summary.main.location")),g(3),H(t.place()),g(3),H(V(45,34,"issue.summary.production.title")),g(5),H(V(50,36,"issue.summary.production.works")),g(3),H(t.worksTotal()),g(4),re("",V(57,38,"issue.summary.production.authors"),":"),g(2),re(" ",t.totalAuthors()),g(3),re("",V(62,40,"issue.summary.production.coauthorAverage"),":"),g(2),re(" ",t.coAuthorsMedia())}}function yS(n,e){if(n&1&&(w(0,"a",35),b(1),v()),n&2){let t=B().$implicit;Me("href",t.link,Ut),g(),H(t.text)}}function bS(n,e){if(n&1&&(w(0,"h4",36),b(1),v()),n&2){let t=B().$implicit;g(),H(t.text)}}function MS(n,e){n&1&&(w(0,"span",39),b(1,"PDF"),v())}function CS(n,e){if(n&1&&(w(0,"span",40),b(1),v()),n&2){let t=B(2).$implicit;g(),H(t.session)}}function wS(n,e){if(n&1&&(w(0,"div",37),L(1,"translate"),se(2,MS,2,0,"span",39),se(3,CS,2,1,"span",40),v()),n&2){let t=B().$implicit;ze("aria-label",V(1,3,"issue.works.flagsLabel")),g(2),le(t.pdf==="1"?2:-1),g(),le(t.session?3:-1)}}function SS(n,e){if(n&1&&(w(0,"p",38)(1,"strong"),b(2),L(3,"translate"),v(),b(4),v()),n&2){let t=B().$implicit;g(2),re("",V(3,2,"issue.works.authorsLabel"),":"),g(2),re(" ",t.authors.join("; ")," ")}}function TS(n,e){if(n&1&&(w(0,"li",31)(1,"div",32),b(2),v(),w(3,"div",33)(4,"div",34),se(5,yS,2,2,"a",35)(6,bS,2,1,"h4",36),se(7,wS,4,5,"div",37),v(),se(8,SS,5,4,"p",38),v()()),n&2){let t=e.$implicit,i=e.$index;g(2),H(i+1),g(3),le(t.link?5:6),g(2),le(t.session||t.pdf==="1"?7:-1),g(),le(t.authors.length?8:-1)}}function ES(n,e){if(n&1&&(w(0,"section",26)(1,"div",27)(2,"h3",28),b(3),v(),w(4,"span",29),b(5),v()(),w(6,"ol",30),rt(7,TS,9,4,"li",31,mS),v()()),n&2){let t=e.$implicit;g(3),H(t.name),g(2),H(t.items.length),g(2),at(t.items)}}function AS(n,e){if(n&1&&(w(0,"div",24),rt(1,ES,9,2,"section",26,Xu),v()),n&2){let t=B(2);g(),at(t.workGroups())}}function PS(n,e){n&1&&(w(0,"p",25),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"issue.works.empty")))}function IS(n,e){if(n&1&&se(0,AS,3,0,"div",24)(1,PS,3,3,"p",25),n&2){let t=B();le(t.workGroups().length?0:1)}}function RS(n,e){if(n&1&&(w(0,"a",53),b(1),v()),n&2){let t=B().$implicit;Me("href","/v/"+t.id,Ut),g(),re(" ",t.name," ")}}function kS(n,e){if(n&1&&(w(0,"span",54),b(1),v()),n&2){let t=B().$implicit;g(),H(t.name)}}function OS(n,e){if(n&1&&(w(0,"li",51)(1,"div",52),se(2,RS,2,2,"a",53)(3,kS,2,1,"span",54),w(4,"strong",55),b(5),v()(),w(6,"div",56),Ge(7,"span",57),v()()),n&2){let t,i=e.$implicit,r=B(4);g(2),le(i.id?2:3),g(3),H(i.totalWorks),g(2),ba("width",i.totalWorks/(((t=r.authorWorkStats()[0])==null?null:t.totalWorks)||1)*100,"%")}}function DS(n,e){if(n&1&&(w(0,"ul",49),rt(1,OS,8,4,"li",51,Xu),v()),n&2){let t=B(3);g(),at(t.authorWorkStats())}}function NS(n,e){n&1&&(w(0,"p",25),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"issue.authors.empty")))}function LS(n,e){if(n&1&&(w(0,"div",58)(1,"div",59)(2,"strong"),b(3),v(),w(4,"span"),b(5),L(6,"translate"),v()(),w(7,"div",60)(8,"div",61),Ge(9,"span",62),v(),w(10,"div",63),b(11),v()()()),n&2){let t=e.$implicit,i=B(4);g(3),H(t.authorsCount),g(2),H(V(6,5,"issue.authors.distribution.unit")),g(4),ba("width",t.totalWorks/(i.worksTotal()||1)*100,"%"),g(2),H(t.totalWorks)}}function FS(n,e){if(n&1&&(w(0,"div",50),L(1,"translate"),rt(2,LS,12,7,"div",58,gS),v()),n&2){let t=B(3);ze("aria-label",V(1,1,"issue.authors.distribution.title")),g(2),at(t.authorDistribution())}}function US(n,e){n&1&&(w(0,"p",25),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"issue.authors.distribution.empty")))}function BS(n,e){if(n&1){let t=ht();w(0,"div",41)(1,"section",42)(2,"div",43)(3,"div")(4,"h3",44),b(5),L(6,"translate"),v(),w(7,"p",45),b(8),L(9,"translate"),v()(),w(10,"button",46),L(11,"translate"),Be("click",function(){et(t);let r=B(2);return tt(r.exportAuthorsCsv())}),dn(),w(12,"svg",47),Ge(13,"path",48),v(),b(14),L(15,"translate"),v(),Zn(),w(16,"span",29),b(17),v()(),se(18,DS,3,0,"ul",49)(19,NS,3,3,"p",25),v(),w(20,"section",42)(21,"div",43)(22,"div")(23,"h3",44),b(24),L(25,"translate"),v(),w(26,"p",45),b(27),L(28,"translate"),v()(),w(29,"span",29),b(30),v()(),se(31,FS,4,3,"div",50)(32,US,3,3,"p",25),v()()}if(n&2){let t=B(2);g(5),H(V(6,10,"issue.authors.title")),g(3),H(V(9,12,"issue.authors.subtitle")),g(2),ze("aria-label",V(11,14,"issue.authors.exportCsv")),g(4),re(" ",V(15,16,"issue.common.csv")," "),g(3),H(t.authorWorkStats().length),g(),le(t.authorWorkStats().length?18:19),g(6),H(V(25,18,"issue.authors.distribution.title")),g(3),H(V(28,20,"issue.authors.distribution.subtitle")),g(3),H(t.authorDistribution().length),g(),le(t.authorDistribution().length?31:32)}}function zS(n,e){n&1&&(w(0,"p",25),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"issue.authors.empty")))}function VS(n,e){if(n&1&&se(0,BS,33,22,"div",41)(1,zS,3,3,"p",25),n&2){let t=B();le(t.authorWorkStats().length||t.authorDistribution().length?0:1)}}function GS(n,e){if(n&1&&(w(0,"tr")(1,"td")(2,"span",74),b(3),v()(),w(4,"td",75)(5,"strong"),b(6),v()()()),n&2){let t=e.$implicit;g(3),H(t.name),g(3),H(t.total)}}function HS(n,e){if(n&1){let t=ht();w(0,"div",64)(1,"section",65)(2,"div",66)(3,"div")(4,"h3",44),b(5),L(6,"translate"),v(),w(7,"p",67),b(8),L(9,"translate"),v()(),w(10,"button",46),L(11,"translate"),Be("click",function(){et(t);let r=B(2);return tt(r.exportKeywordsCsv())}),dn(),w(12,"svg",47),Ge(13,"path",68),v(),b(14),L(15,"translate"),v()(),Zn(),Ge(16,"app-tag-cloud",69),v(),w(17,"section",65)(18,"div",66)(19,"div")(20,"h3",44),b(21),L(22,"translate"),v(),w(23,"p",67),b(24),L(25,"translate"),v()(),w(26,"span",29),b(27),v()(),w(28,"div",70)(29,"table",71)(30,"thead")(31,"tr")(32,"th",72),b(33),L(34,"translate"),v(),w(35,"th",73),b(36),L(37,"translate"),v()()(),w(38,"tbody"),rt(39,GS,7,2,"tr",null,Xu),v()()()()()}if(n&2){let t=B(2);g(5),H(V(6,10,"issue.keywords.title")),g(3),H(V(9,12,"issue.keywords.subtitle")),g(2),ze("aria-label",V(11,14,"issue.keywords.exportCsv")),g(4),re(" ",V(15,16,"issue.common.csv")," "),g(2),Me("dataTag",t.keywordsForCloud()),g(5),H(V(22,18,"issue.keywords.frequencyTitle")),g(3),H(V(25,20,"issue.keywords.frequencySubtitle")),g(3),H(t.keywords().length),g(6),H(V(34,22,"issue.keywords.table.keyword")),g(3),H(V(37,24,"issue.keywords.table.freq")),g(3),at(t.keywords())}}function WS(n,e){n&1&&(w(0,"p",25),b(1),L(2,"translate"),v()),n&2&&(g(),H(V(2,1,"issue.keywords.empty")))}function XS(n,e){if(n&1&&se(0,HS,41,26,"div",64)(1,WS,3,3,"p",25),n&2){let t=B();le(t.keywords().length?0:1)}}function qS(n,e){if(n&1&&(w(0,"pre",17),b(1),v()),n&2){let t=B();g(),H(t.jsonContent())}}var Lc=class n{data=null;activeTab=qe("summary");title=te(()=>this.field(["title","titulo","name","jnl_name","journal"]));issueId=te(()=>this.field(["ID","id","issue_id"]));year=te(()=>this.field(["year","YEAR","ano"]));sourceName=te(()=>this.pickText(this.asRecord(this.data),["source","name"])??"-");sourceRdf=te(()=>this.pickText(this.pickRecord(this.asRecord(this.data),["source"]),["rdf"])??"");journalId=te(()=>this.pickText(this.pickRecord(this.asRecord(this.data),["source"]),["id_jnl","ID","id"])??"-");acronym=te(()=>this.field(["acron","acronym","sigla"]));place=te(()=>this.field(["place","city","cidade","location","local"]));issueNumber=te(()=>this.field(["nr","NR","number","num"]));worksTotal=te(()=>this.toNumber(this.field(["worksTotal","works_total"]))??this.workGroups().reduce((e,t)=>e+t.items.length,0));workGroups=te(()=>this.buildWorkGroups());works=te(()=>this.workGroups().flatMap(e=>e.items));authors=te(()=>{let e=this.asRecord(this.data);if(!e)return[];let t=this.pickArraySource(e,["authors","autores","coauthors","co_autores"]);return!t||!Array.isArray(t)?[]:t.map(i=>this.normalizeCreatorAuthor(i)).filter(i=>i!==null).filter((i,r,a)=>a.findIndex(o=>this.normalizeKey(o.name)===this.normalizeKey(i.name))===r).sort((i,r)=>i.name.localeCompare(r.name,"pt-BR",{sensitivity:"base"}))});authorWorkStats=te(()=>{let e=new Map,t=new Map;for(let i of this.authors())t.set(this.normalizeKey(i.name),i.id);for(let i of this.works()){let r=[...new Set(i.authors.map(a=>a.trim()).filter(a=>a.length>0))];for(let a of r){let o=this.normalizeKey(a);e.set(o,(e.get(o)??0)+1)}}return[...e.entries()].map(([i,r])=>({name:this.authors().find(o=>this.normalizeKey(o.name)===i)?.name??i,id:t.get(i),totalWorks:r})).sort((i,r)=>r.totalWorks-i.totalWorks||i.name.localeCompare(r.name,"pt-BR",{sensitivity:"base"}))});authorDistribution=te(()=>{let e=new Map;for(let t of this.works()){let r=[...new Set(t.authors.map(a=>a.trim()).filter(a=>a.length>0))].length;e.set(r,(e.get(r)??0)+1)}return[...e.entries()].map(([t,i])=>({authorsCount:t,totalWorks:i})).sort((t,i)=>t.authorsCount-i.authorsCount)});coAuthors=te(()=>{let e=this.asRecord(this.data);if(!e)return[];let t=this.pickArraySource(e,["coAuthors","coauthors"]);return!t||!Array.isArray(t)?[]:t.map(i=>this.normalizeNamedStat(i)).filter(i=>i!==null).sort((i,r)=>i.name.localeCompare(r.name,"pt-BR",{sensitivity:"base"}))});totalAuthors=te(()=>this.toNumber(this.field(["totalAuthors","authorsTotal"]))??this.authors().length);coAuthorsMedia=te(()=>this.field(["coAuthorsMedia","coauthorsMedia"]));keywords=te(()=>this.buildKeywords());keywordsForCloud=te(()=>this.keywords().map(e=>({label:e.name,value:e.total})));jsonContent=te(()=>JSON.stringify(this.data,null,2));setTab(e){this.activeTab.set(e)}exportKeywordsCsv(){let e=this.keywords();if(!e.length||typeof window>"u")return;let t=l=>`"${l.replaceAll('"','""')}"`,r=[["Palavra-chave","Frequencia"],...e.map(l=>[l.name,String(l.total)])].map(l=>l.map(c=>t(c)).join(",")).join(`\r
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(a),s=document.createElement("a");s.href=o,s.download=`${this.slugify(this.title())||"palavras-chave"}.csv`,s.click(),URL.revokeObjectURL(o)}exportAuthorsCsv(){let e=this.authorWorkStats();if(!e.length||typeof window>"u")return;let t=l=>`"${l.replaceAll('"','""')}"`,r=[["Autor","Total de trabalhos","ID"],...e.map(l=>[l.name,String(l.totalWorks),l.id??""])].map(l=>l.map(c=>t(c)).join(",")).join(`\r
`),a=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(a),s=document.createElement("a");s.href=o,s.download=`${this.slugify(this.title())||"autores"}.csv`,s.click(),URL.revokeObjectURL(o)}buildWorkGroups(){let e=this.asRecord(this.data);if(!e)return[];let t=this.pickArraySource(e,["works","trabalhos","items","articles","docs"]);return t?Array.isArray(t)?t.map(i=>this.normalizeWorkGroup(i)).filter(i=>i!==null):Object.entries(t).map(([i,r])=>{let o=(Array.isArray(r)?r:r&&typeof r=="object"?[r]:[]).map(s=>this.normalizeWorkItem(s)).filter(s=>s!==null);return o.length>0?{name:i,items:o}:null}).filter(i=>i!==null):[]}normalizeWorkGroup(e){if(!e||typeof e!="object")return null;let t=e,i=this.pickText(t,["name","title","label","SESSION","session"])??"Trabalhos",r=this.pickArraySource(t,["data","items","works","articles"]),o=(Array.isArray(r)?r:r&&typeof r=="object"?Object.values(r):[]).map(s=>this.normalizeWorkItem(s)).filter(s=>s!==null);return o.length>0?{name:i,items:o}:null}normalizeWorkItem(e){if(typeof e=="string"&&e.trim())return{id:e.trim(),text:e.trim(),authors:[],session:"",pdf:""};if(typeof e=="number"&&Number.isFinite(e)){let d=String(e);return{id:d,text:d,authors:[],session:"",pdf:""}}if(!e||typeof e!="object")return null;let t=e,i=this.pickText(t,["LEGEND","title","titulo","name","nome","label","work","article"])??"";if(!i)return null;let r=t.ID??t.id??t.doc_id??t.work_id,a=this.idToLink(r),o=this.splitNames(this.pickText(t,["AUTHORS","authors","autores","author"])??""),s=this.pickText(t,["SESSION","session"])??"",l=this.pickText(t,["PDF","pdf"])??"";return{id:typeof r=="string"&&r.trim()?r.trim():typeof r=="number"&&Number.isFinite(r)?String(r):i,text:i,link:a,authors:o,session:s,pdf:l}}idToLink(e){if(typeof e=="number"&&Number.isFinite(e))return`/v/${String(e)}`;if(typeof e=="string"&&e.trim())return`/v/${e.trim()}`}itemToText(e){if(typeof e=="string"&&e.trim())return e.trim();if(typeof e=="number"&&Number.isFinite(e))return String(e);if(!e||typeof e!="object")return"";let t=e;for(let i of["title","titulo","name","nome","label","work","article"]){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim()}return""}normalizeNamedStat(e){if(!e||typeof e!="object")return null;let t=e,i=this.pickText(t,["name","nome","label"])??"";if(!i)return null;let r=t.total??t.count??t.qtd,a=this.toNumber(r)??1;return{name:i,total:a}}normalizeCreatorAuthor(e){if(typeof e=="string"&&e.trim())return{name:e.trim()};if(typeof e=="number"&&Number.isFinite(e))return{name:String(e)};if(!e||typeof e!="object")return null;let t=e,i=this.pickText(t,["name","nome","label","author"])??"";if(!i)return null;let r=this.pickText(t,["id","ID","author_id","id_author","id_autor"])??void 0;return{name:i,id:r}}buildKeywords(){let e=this.asRecord(this.data);if(!e)return[];let t=e.keywords,i=[];if(Array.isArray(t))for(let c of t){let d=this.normalizeNamedStat(c);d&&i.push(d)}else if(t&&typeof t=="object")for(let c of Object.values(t)){let d=this.normalizeNamedStat(c);d&&i.push(d)}let r=new Map;for(let c of i){let d=c.name.trim().toLowerCase();r.set(d,Math.max(r.get(d)??0,c.total))}let a=[...r.entries()].map(([c,d])=>({name:i.find(h=>h.name.trim().toLowerCase()===c)?.name??c,total:d})).sort((c,d)=>d.total-c.total||c.name.localeCompare(d.name,"pt-BR",{sensitivity:"base"}));if(!a.length)return[];let o=a[a.length-1].total,s=a[0].total,l=Math.max(s-o,1);return a.map(c=>vn(gn({},c),{size:.8+(c.total-o)/l*1.2}))}pickText(e,t){if(!e)return null;for(let i of t){let r=e[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return null}pickRecord(e,t){if(!e)return null;for(let i of t){let r=e[i];if(r&&typeof r=="object"&&!Array.isArray(r))return r}return null}splitNames(e){return e.split(/\s*[;|]\s*/).map(t=>t.trim()).filter(t=>t.length>0)}toNumber(e){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"&&e.trim()){let t=Number(e.replace(",","."));return Number.isFinite(t)?t:null}return null}field(e){let t=this.asRecord(this.data);if(!t)return"-";for(let i of e){let r=t[i];if(typeof r=="string"&&r.trim())return r.trim();if(typeof r=="number"&&Number.isFinite(r))return String(r)}return"-"}asRecord(e){return e&&typeof e=="object"?e:null}pickArraySource(e,t){for(let i of t){let r=e[i];if(Array.isArray(r)||r&&typeof r=="object")return r}return null}slugify(e){return e.normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}normalizeKey(e){return e.trim().toLowerCase()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-view-issue"]],inputs:{data:"data"},decls:70,vars:69,consts:[[1,"view-card","p-3","p-md-4"],[1,"issue-hero","mb-3"],[1,"issue-hero-copy"],[1,"issue-kicker","mb-2"],[1,"issue-title","mb-2"],[1,"issue-subtitle","mb-0"],[1,"issue-badges"],[1,"issue-badge"],[1,"issue-metrics"],[1,"issue-metric"],[1,"issue-metric-label"],["target","_blank","rel","noopener noreferrer",1,"issue-metric-value","issue-metric-link",3,"href"],[1,"issue-metric-value"],["role","tablist",1,"tab-nav","mb-3"],["type","button",1,"tab-btn",3,"click"],[1,"tab-panel"],[1,"issue-summary"],[1,"json-block","mb-0"],[1,"summary-card"],[1,"h6","mb-3"],[1,"summary-grid","mb-0"],[1,"stats-stack"],[1,"stats-highlight"],[1,"summary-list","mb-0"],[1,"work-groups"],[1,"mb-0"],[1,"work-group-card"],[1,"work-group-head"],[1,"h6","mb-0"],[1,"work-group-count"],[1,"work-list","work-sumary-list"],[1,"work-item"],[1,"work-number"],[1,"work-entry"],[1,"work-item-head"],[1,"work-title",3,"href"],[1,"work-title","mb-0"],[1,"work-flags"],[1,"work-authors","mb-0"],[1,"work-flag"],[1,"work-flag","work-flag-muted"],[1,"authors-grid"],[1,"summary-card","authors-card"],[1,"authors-card-head"],[1,"h6","mb-1"],[1,"authors-card-subtitle","mb-0"],["type","button",1,"csv-btn",3,"click"],["viewBox","0 0 24 24","aria-hidden","true","focusable","false"],["d","M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4.01 4a1 1 0 0 1-1.39 0l-4-4a1 1 0 1 1 1.4-1.42L11 12.59V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"],[1,"author-work-list","mb-0"],["role","list",1,"distribution-chart"],[1,"author-work-item"],[1,"author-work-meta"],["target","_blank","rel","noopener noreferrer",1,"author-work-name","author-work-link",3,"href"],[1,"author-work-name"],[1,"author-work-total"],["aria-hidden","true",1,"author-work-bar"],[1,"author-work-bar-fill"],["role","listitem",1,"distribution-row"],[1,"distribution-label"],[1,"distribution-bar-wrap"],[1,"distribution-bar-track"],[1,"distribution-bar-fill"],[1,"distribution-value"],[1,"keywords-panel-full"],[1,"summary-card","keywords-card"],[1,"keywords-card-head"],[1,"keywords-card-subtitle","mb-0"],["d","M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4.01 4a1 1 0 0 1-1.39 0l-4-4a1 1 0 0 1 1.4-1.42L11 12.59V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"],["titleKey","","noDataKey","issue.tags.noData",3,"dataTag"],[1,"keywords-table-wrap"],[1,"keywords-table"],["scope","col"],["scope","col",1,"text-end"],[1,"keywords-name"],[1,"text-end"]],template:function(t,i){if(t&1&&(w(0,"article",0)(1,"header",1)(2,"div",2)(3,"p",3),b(4),L(5,"translate"),v(),w(6,"h2",4),b(7),v(),w(8,"p",5),b(9),v()(),w(10,"div",6),L(11,"translate"),w(12,"span",7),b(13),L(14,"translate"),v(),w(15,"span",7),b(16),L(17,"translate"),v(),w(18,"span",7),b(19),L(20,"translate"),v()(),w(21,"div",8),L(22,"translate"),w(23,"div",9)(24,"span",10),b(25),L(26,"translate"),v(),se(27,_S,2,2,"a",11)(28,xS,2,1,"strong",12),v(),w(29,"div",9)(30,"span",10),b(31),L(32,"translate"),v(),w(33,"strong",12),b(34),v()(),w(35,"div",9)(36,"span",10),b(37),L(38,"translate"),v(),w(39,"strong",12),b(40),v()(),w(41,"div",9)(42,"span",10),b(43),L(44,"translate"),v(),w(45,"strong",12),b(46),v()()()(),w(47,"div",13),L(48,"translate"),w(49,"button",14),Be("click",function(){return i.setTab("summary")}),b(50),L(51,"translate"),v(),w(52,"button",14),Be("click",function(){return i.setTab("works")}),b(53),L(54,"translate"),v(),w(55,"button",14),Be("click",function(){return i.setTab("authors")}),b(56),L(57,"translate"),v(),w(58,"button",14),Be("click",function(){return i.setTab("keywords")}),b(59),L(60,"translate"),v(),w(61,"button",14),Be("click",function(){return i.setTab("json")}),b(62),L(63,"translate"),v()(),w(64,"div",15),se(65,vS,64,42,"div",16)(66,IS,2,1)(67,VS,2,1)(68,XS,2,1)(69,qS,2,1,"pre",17),v()()),t&2){let r;g(4),H(V(5,37,"issue.hero.kicker")),g(3),H(i.title()),g(2),Bn(" ",i.sourceName()," \xB7 ",i.year()," "),g(),ze("aria-label",V(11,39,"issue.hero.badgesLabel")),g(3),Bn("",V(14,41,"issue.badges.id")," ",i.issueId()),g(3),Bn("",V(17,43,"issue.badges.volume")," ",i.year()),g(3),Bn("",V(20,45,"issue.badges.articles")," ",i.worksTotal()),g(2),ze("aria-label",V(22,47,"issue.hero.metricsLabel")),g(4),H(V(26,49,"issue.summary.main.acronym")),g(2),le(i.sourceRdf()?27:28),g(4),H(V(32,51,"issue.summary.main.location")),g(3),H(i.place()),g(3),H(V(38,53,"issue.summary.main.issue")),g(3),H(i.issueNumber()),g(3),H(V(44,55,"issue.summary.main.year")),g(3),H(i.year()),g(),ze("aria-label",V(48,57,"issue.tabs.ariaLabel")),g(2),Ke("active",i.activeTab()==="summary"),g(),re(" ",V(51,59,"issue.tabs.summary")," "),g(2),Ke("active",i.activeTab()==="works"),g(),re(" ",V(54,61,"issue.tabs.works")," "),g(2),Ke("active",i.activeTab()==="authors"),g(),re(" ",V(57,63,"issue.tabs.authors")," "),g(2),Ke("active",i.activeTab()==="keywords"),g(),re(" ",V(60,65,"issue.tabs.keywords")," "),g(2),Ke("active",i.activeTab()==="json"),g(),re(" ",V(63,67,"issue.tabs.json")," "),g(3),le((r=i.activeTab())==="summary"?65:r==="works"?66:r==="authors"?67:r==="keywords"?68:r==="json"?69:-1)}},dependencies:[Ye,fa,Vt,$t],styles:[".view-card[_ngcontent-%COMP%]{background:radial-gradient(circle at top left,rgba(255,255,255,.72),transparent 36%),linear-gradient(180deg,#ffffffc7,#ffffff94);border:1px solid rgba(255,255,255,.52);border-radius:1.15rem;box-shadow:0 18px 38px #1a28361a}.issue-hero[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ffffffc7,#f3ebdcb8);border:1px solid rgba(255,255,255,.56);border-radius:1rem;display:grid;gap:1rem;padding:1rem}.issue-hero-copy[_ngcontent-%COMP%]{max-width:52rem}.issue-title[_ngcontent-%COMP%]{color:var(--theme-ink);font-size:clamp(1.45rem,2.2vw,2.2rem);font-weight:800;line-height:1.12;margin:0}.issue-subtitle[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.98rem}.issue-hero[_ngcontent-%COMP%], .issue-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;align-items:flex-start}.issue-kicker[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.issue-badges[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.issue-badge[_ngcontent-%COMP%]{background:#ffffffe0;border:1px solid var(--theme-line);border-radius:999px;font-size:.84rem;font-weight:600;padding:.3rem .65rem}.issue-metrics[_ngcontent-%COMP%]{display:grid;gap:.75rem;grid-template-columns:repeat(4,minmax(0,1fr));width:100%}.issue-metric[_ngcontent-%COMP%]{background:#ffffffc7;border:1px solid var(--theme-line);border-radius:.75rem;padding:.55rem .7rem}.issue-metric-label[_ngcontent-%COMP%]{color:var(--theme-hint);display:block;font-size:.78rem;font-weight:700;letter-spacing:.06em;margin-bottom:.2rem;text-transform:uppercase}.issue-metric-value[_ngcontent-%COMP%]{color:var(--theme-ink);display:block;font-size:.95rem;font-weight:700}.issue-metric-link[_ngcontent-%COMP%]{color:var(--theme-link);text-decoration:none}.issue-metric-link[_ngcontent-%COMP%]:hover, .issue-metric-link[_ngcontent-%COMP%]:focus-visible{color:var(--theme-hint);text-decoration:underline}@media (max-width: 992px){.issue-metrics[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width: 576px){.issue-metrics[_ngcontent-%COMP%]{grid-template-columns:1fr}}.tab-nav[_ngcontent-%COMP%]{background:#ffffff6b;border:1px solid rgba(255,255,255,.44);border-radius:999px;display:flex;flex-wrap:wrap;gap:.5rem;padding:.45rem}.tab-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--theme-line);border-radius:999px;color:var(--theme-ink);cursor:pointer;font-size:.9rem;font-weight:600;padding:.48rem .9rem;transition:background-color .2s ease,border-color .2s ease,transform .2s ease}.tab-btn[_ngcontent-%COMP%]:hover, .tab-btn[_ngcontent-%COMP%]:focus-visible{transform:translateY(-1px)}.tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(180deg,#fffffff5,#f5ecdaf0);border-color:#987b4e73;font-weight:600}.tab-panel[_ngcontent-%COMP%]{background:#ffffff61;border:1px solid rgba(255,255,255,.48);border-radius:1rem;padding:1rem}.issue-summary[_ngcontent-%COMP%]{display:grid;gap:1rem}.summary-card[_ngcontent-%COMP%], .work-group-card[_ngcontent-%COMP%], .work-item[_ngcontent-%COMP%]{background:#ffffffc7;border:1px solid rgba(255,255,255,.6);border-radius:.95rem;box-shadow:0 10px 22px #1a28360f}.summary-card[_ngcontent-%COMP%], .work-group-card[_ngcontent-%COMP%]{padding:1rem}.summary-grid[_ngcontent-%COMP%]{display:grid;gap:.85rem;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))}.summary-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.8rem;font-weight:700;letter-spacing:.06em;margin-bottom:.2rem;text-transform:uppercase}.summary-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0}.summary-list[_ngcontent-%COMP%], .chip-list[_ngcontent-%COMP%], .stats-list[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:0}.summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%], .stats-item[_ngcontent-%COMP%] + .stats-item[_ngcontent-%COMP%]{margin-top:.5rem}.stats-stack[_ngcontent-%COMP%]{display:grid;gap:.9rem}.stats-highlight[_ngcontent-%COMP%]{background:linear-gradient(135deg,#b88c4d24,#ffffffd6);border:1px solid rgba(184,140,77,.18);border-radius:.85rem;display:flex;align-items:baseline;justify-content:space-between;gap:1rem;padding:.8rem .95rem}.stats-highlight[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.8rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.stats-highlight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.65rem;line-height:1}.work-groups[_ngcontent-%COMP%]{display:grid;gap:1rem}.work-group-head[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;gap:.75rem;margin-bottom:.85rem}.work-group-count[_ngcontent-%COMP%]{background:#ffffffd1;border:1px solid var(--theme-line);border-radius:999px;font-size:.8rem;font-weight:700;padding:.22rem .55rem}.work-list[_ngcontent-%COMP%]{display:grid;gap:0;margin:0;padding-left:0}.work-item[_ngcontent-%COMP%]{border-top:1px solid rgba(26,40,54,.1);display:grid;gap:.75rem;grid-template-columns:auto minmax(0,1fr);padding:.9rem 0}.work-item[_ngcontent-%COMP%]:first-child{border-top:0;padding-top:0}.work-number[_ngcontent-%COMP%]{align-items:center;background:linear-gradient(180deg,#ffffffeb,#f2e9dae0);border:1px solid rgba(152,123,78,.24);border-radius:999px;color:var(--theme-ink);display:inline-flex;font-size:.78rem;font-weight:700;height:1.8rem;justify-content:center;line-height:1;width:1.8rem}.work-entry[_ngcontent-%COMP%]{display:grid;gap:.45rem}.work-item-head[_ngcontent-%COMP%]{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:space-between;gap:.6rem}.work-title[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:600;text-decoration:none}.work-title[_ngcontent-%COMP%]:hover, .work-title[_ngcontent-%COMP%]:focus-visible{text-decoration:underline}.work-flags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem}.work-flag[_ngcontent-%COMP%]{background:transparent;border:1px solid rgba(26,40,54,.14);border-radius:999px;font-size:.78rem;font-weight:600;padding:.18rem .5rem}.work-flag-muted[_ngcontent-%COMP%]{color:var(--theme-hint)}.work-authors[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.92rem;margin-top:.15rem}.work-authors[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:600}.chip-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.chip[_ngcontent-%COMP%]{background:#ffffffe6;border:1px solid var(--theme-line);border-radius:999px;font-weight:600;padding:.35rem .65rem}.stats-list[_ngcontent-%COMP%]{display:grid;gap:.5rem}.stats-item[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;gap:1rem;padding:.5rem .75rem;border:1px solid var(--theme-line);border-radius:.6rem}.stats-name[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:600}.authors-grid[_ngcontent-%COMP%]{display:grid;gap:1rem}.keywords-panel[_ngcontent-%COMP%]{display:grid;gap:1rem;width:100%}.keywords-panel[_ngcontent-%COMP%] > .summary-card[_ngcontent-%COMP%]{width:100%}.keywords-card[_ngcontent-%COMP%]{display:grid;gap:.95rem;width:100%}.keywords-card[_ngcontent-%COMP%]   app-tag-cloud[_ngcontent-%COMP%]{display:block;width:100%}.keywords-card-head[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;gap:1rem}.keywords-card-subtitle[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.88rem}.csv-btn[_ngcontent-%COMP%]{align-items:center;background:linear-gradient(180deg,#fffffff0,#f5ecdaeb);border:1px solid rgba(152,123,78,.28);border-radius:999px;color:var(--theme-ink);cursor:pointer;display:inline-flex;gap:.45rem;font-size:.8rem;font-weight:700;padding:.45rem .7rem}.csv-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:currentColor;flex:none;height:1rem;width:1rem}.keywords-table-wrap[_ngcontent-%COMP%]{overflow:auto}.keywords-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;color:var(--theme-ink)}.keywords-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .keywords-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid rgba(26,40,54,.1);padding:.65rem 0;text-align:left;vertical-align:top}.keywords-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .keywords-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{text-align:right}.keywords-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.keywords-name[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:600}.authors-card[_ngcontent-%COMP%]{display:grid;gap:.95rem}.authors-card-head[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;gap:1rem}.authors-card-subtitle[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.88rem}.author-work-list[_ngcontent-%COMP%]{display:grid;gap:.8rem;list-style:none;margin:0;padding:0;color:var(--theme-ink)}.author-work-item[_ngcontent-%COMP%]{display:grid;gap:.45rem}.author-work-meta[_ngcontent-%COMP%]{align-items:baseline;display:flex;justify-content:space-between;gap:1rem}.author-work-name[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:600}.author-work-link[_ngcontent-%COMP%]{color:var(--theme-link);text-decoration:none}.author-work-link[_ngcontent-%COMP%]:hover, .author-work-link[_ngcontent-%COMP%]:focus-visible{color:var(--theme-hint);text-decoration:underline}.author-work-total[_ngcontent-%COMP%]{color:var(--theme-hint);font-weight:700}.author-work-bar[_ngcontent-%COMP%]{background:#1a283614;border-radius:999px;height:.48rem;overflow:hidden}.author-work-bar-fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#a07a49eb,#c9a36ceb);border-radius:inherit;display:block;height:100%}.distribution-chart[_ngcontent-%COMP%]{display:grid;gap:.8rem}.distribution-row[_ngcontent-%COMP%]{display:grid;gap:.55rem}.distribution-label[_ngcontent-%COMP%]{align-items:baseline;display:flex;gap:.4rem}.distribution-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--theme-ink);font-size:1rem}.distribution-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--theme-hint);font-size:.85rem}.distribution-bar-wrap[_ngcontent-%COMP%]{align-items:center;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:.75rem}.distribution-bar-track[_ngcontent-%COMP%]{background:#1a283614;border-radius:999px;height:.62rem;overflow:hidden}.distribution-bar-fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#6c8a74eb,#96b69deb);border-radius:inherit;display:block;height:100%}.distribution-value[_ngcontent-%COMP%]{color:var(--theme-ink);font-weight:700;min-width:2rem;text-align:right}.json-block[_ngcontent-%COMP%]{background:#ffffffc7;border:1px solid var(--theme-line);border-radius:.75rem;max-height:420px;overflow:auto;padding:.9rem}body.theme-master.theme-dark[_nghost-%COMP%]   .view-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .view-card[_ngcontent-%COMP%]{background:radial-gradient(circle at top left,rgba(255,255,255,.06),transparent 36%),linear-gradient(180deg,#101727eb,#0d131fe0);border-color:#30445fe0;box-shadow:0 18px 38px #00000047}body.theme-master.theme-dark[_nghost-%COMP%]   .issue-hero[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-hero[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .tab-panel[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-panel[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-group-card[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-group-card[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-item[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .issue-metric[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-metric[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .issue-badge[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-badge[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-group-count[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-group-count[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .chip[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .chip[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .stats-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .stats-item[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .csv-btn[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .csv-btn[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .json-block[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .json-block[_ngcontent-%COMP%]{background:#122033f0;border-color:#30445fe0;box-shadow:0 10px 22px #0000002e}body.theme-master.theme-dark[_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%]{background:#122033cc}body.theme-master.theme-dark[_nghost-%COMP%]   .tab-btn.active[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(180deg,#212f46f5,#182334f0);border-color:#6484ad99}body.theme-master.theme-dark[_nghost-%COMP%]   .stats-highlight[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .stats-highlight[_ngcontent-%COMP%]{background:linear-gradient(135deg,#3a485e94,#122033f0);border-color:#52698757}body.theme-master.theme-dark[_nghost-%COMP%]   .work-number[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-number[_ngcontent-%COMP%]{background:linear-gradient(180deg,#212f46f5,#182334eb);border-color:#6484ad73}body.theme-master.theme-dark[_nghost-%COMP%]   .work-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-item[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-color:#6484ad2e}body.theme-master.theme-dark[_nghost-%COMP%]   .work-flag[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-flag[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-card-subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-card-subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .authors-card-subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-card-subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .issue-subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-subtitle[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .issue-kicker[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-kicker[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .issue-metric-label[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-metric-label[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .stats-highlight[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .stats-highlight[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .summary-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .summary-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .distribution-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .distribution-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-flag-muted[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-flag-muted[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-total[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-total[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-group-count[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-group-count[_ngcontent-%COMP%]{color:var(--theme-muted)}body.theme-master.theme-dark[_nghost-%COMP%]   .work-title[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-title[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-name[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-name[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-name[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-name[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-list[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-list[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .distribution-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .distribution-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .distribution-value[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .distribution-value[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .issue-metric-value[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-metric-value[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .stats-highlight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .stats-highlight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-authors[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-authors[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .summary-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .summary-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .work-group-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .work-group-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .authors-card-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .authors-card-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-card-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-card-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--theme-ink)}body.theme-master.theme-dark[_nghost-%COMP%]   .issue-metric-link[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .issue-metric-link[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-link[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-link[_ngcontent-%COMP%]{color:var(--theme-link)}body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .keywords-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-list[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-list[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-item[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-item[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-meta[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-meta[_ngcontent-%COMP%]{color:var(--theme-ink)}body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-bar[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-bar[_ngcontent-%COMP%], body.theme-master.theme-dark[_nghost-%COMP%]   .distribution-bar-track[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .distribution-bar-track[_ngcontent-%COMP%]{background:#e6eef71a}body.theme-master.theme-dark[_nghost-%COMP%]   .author-work-bar-fill[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .author-work-bar-fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#769dc8f0,#577aa8f0)}body.theme-master.theme-dark[_nghost-%COMP%]   .distribution-bar-fill[_ngcontent-%COMP%], body.theme-master.theme-dark   [_nghost-%COMP%]   .distribution-bar-fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#60a281f0,#4c8368f0)}@media (min-width: 768px){.issue-summary[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.authors-grid[_ngcontent-%COMP%], .keywords-panel[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}.issue-hero[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1.6fr) minmax(260px,1fr);align-items:start}.issue-metrics[_ngcontent-%COMP%]{grid-column:1/-1}}"]})};var jS=(n,e,t)=>({data:n,recordId:e,recordClass:t}),$S=(n,e,t)=>({data:n,metrics:e,dataTag:t}),YS=n=>({data:n});function JS(n,e){n&1&&Ar(0)}function ZS(n,e){n&1&&(w(0,"p",3),b(1,"Carregando dados..."),v())}function KS(n,e){if(n&1&&(w(0,"p",4),b(1),v()),n&2){let t=B();g(),H(t.error())}}function QS(n,e){if(n&1&&Ge(0,"app-article-gadget",7),n&2){let t=B(2);Me("data",t.response())("metrics",t.articleMetrics())("dataTag",t.dataTag())}}function eT(n,e){if(n&1&&Ge(0,"app-proceeding-gadget",7),n&2){let t=B(2);Me("data",t.response())("metrics",t.articleMetrics())("dataTag",t.dataTag())}}function tT(n,e){if(n&1&&Ge(0,"app-view-journal",8),n&2){let t=B(2);Me("data",t.response())}}function nT(n,e){n&1&&Ar(0)}function iT(n,e){if(n&1&&On(0,nT,1,0,"ng-container",0),n&2){let t=B(2);Me("ngComponentOutlet",t.bookChapterViewComponent)("ngComponentOutletInputs",Ma(2,$S,t.response(),t.articleMetrics(),t.dataTag()))}}function rT(n,e){if(n&1&&Ge(0,"app-author-gadget",9),n&2){let t=B(2);Me("name",t.authorName())("nameAbnt",t.authorNameAbnt())("authorId",t.authorId())("metrics",t.authorMetrics())("chartPoints",t.chartYearsBars())("worksGroups",t.worksByType())("dataJour",t.dataJour())("dataTag",t.dataTag())("photoUrl",t.photoUrl())("authorLinks",t.authorLinks())("coauthors",t.coauthorsList())("citationsGranted",t.citationsGrantedList())("networkData",t.collaborationNetwork())}}function aT(n,e){n&1&&Ar(0)}function oT(n,e){if(n&1&&On(0,aT,1,0,"ng-container",0),n&2){let t=B(2);Me("ngComponentOutlet",t.issueViewComponent)("ngComponentOutletInputs",Tt(2,YS,t.response()))}}function sT(n,e){if(n&1&&Ge(0,"app-view-event",8),n&2){let t=B(3);Me("data",t.response())}}function lT(n,e){if(n&1&&Ge(0,"app-view-event",8),n&2){let t=B(3);Me("data",t.response())}}function cT(n,e){if(n&1&&Ge(0,"app-book-panel",10),n&2){let t=B(3);Me("bookId",t.id())("data",t.responseRecord())("embedded",!0)}}function dT(n,e){if(n&1&&Ge(0,"app-view-journal",8),n&2){let t=B(3);Me("data",t.response())}}function uT(n,e){if(n&1&&se(0,sT,1,1,"app-view-event",8)(1,lT,1,1,"app-view-event",8)(2,cT,1,3,"app-book-panel",10)(3,dT,1,1,"app-view-journal",8),n&2){let t,i=B(2);le((t=i.publicationView())==="enancib"?0:t==="event"?1:t==="book"?2:3)}}function hT(n,e){if(n&1&&(Ge(0,"app-breadcrumbs",5),w(1,"p",6)(2,"strong"),b(3,"Classe:"),v(),b(4),v(),se(5,QS,1,3,"app-article-gadget",7)(6,eT,1,3,"app-proceeding-gadget",7)(7,tT,1,1,"app-view-journal",8)(8,iT,1,6,"ng-container")(9,rT,1,13,"app-author-gadget",9)(10,oT,1,4,"ng-container")(11,uT,4,1)),n&2){let t=B();Me("labels",t.breadcrumbLabels()),g(4),re(" ",t.classe()),g(),le(t.isArticle()?5:t.isProceeding()?6:t.isJournal()?7:t.isBookChapter()?8:t.isPerson()?9:t.isIssue()?10:11)}}var Pg=class n{route=Jt(vh);destroyRef=Jt(oh);brapciApiService=Jt(Uo);worksKeys=["Article","Proceeding","BookChapter","Book"];issueViewComponent=Lc;bookChapterViewComponent=Pc;seoMetadataComponent=Ic;id=qe("");loading=qe(!0);error=qe("");response=qe(null);responseRecord=te(()=>{let e=this.response();return!e||typeof e!="object"||Array.isArray(e)?null:e});classe=te(()=>{let e=this.response();if(!e||typeof e!="object")return"-";let t=e,i=t.Classe??t.classe??t.Class??t.class;return typeof i=="string"&&i.trim()?i:"-"});isPerson=te(()=>this.classe().toLowerCase()==="person");isIssue=te(()=>this.classe().toLowerCase()==="issue");isArticle=te(()=>this.classe().toLowerCase()==="article");isBook=te(()=>this.classe().toLowerCase()==="book");isProceeding=te(()=>this.classe().toLowerCase()==="proceeding");isJournal=te(()=>this.classe().toLowerCase()==="journal");isBookChapter=te(()=>this.classe().toLowerCase()==="bookchapter");breadcrumbLabels=te(()=>{let e=this.classe();return!e||e==="-"?{v:"Registro"}:{v:e}});publicationView=te(()=>{if(this.isBook())return"book";let e=this.response();if(!e||typeof e!="object")return"journal";let t=e,i=t.id_jnl??t.ID_jnl??t.ID_JNL;if(String(i??"").trim()==="75")return"enancib";let a=t.jnl_collection??t.JNL_COLLECTION??t.collection;return String(a??"").trim().toUpperCase()==="EV"?"event":"journal"});authorName=te(()=>{let e=this.response();if(!e||typeof e!="object")return"-";let i=e.name;return typeof i=="string"&&i.trim()?i:"-"});authorNameAbnt=te(()=>{let e=this.response();if(!e||typeof e!="object")return"-";let i=e.name_abnt;return typeof i=="string"&&i.trim()?i:"-"});authorId=te(()=>{let e=this.response();if(!e||typeof e!="object")return this.id();let i=e.ID;return typeof i=="string"&&i.trim()?i:this.id()});photoUrl=te(()=>{let e=this.response();if(!e||typeof e!="object")return"";let i=e.Photo;return typeof i=="string"&&i.trim()?i:""});authorLinks=te(()=>{let e=this.response();if(!e||typeof e!="object")return[];let i=e.IDs;if(!Array.isArray(i))return[];let r=[];for(let a of i){if(!a||typeof a!="object")continue;let o=a;o.lattes&&r.push({type:"lattes",icon:"\u{1F393}",label:"Lattes",url:`https://lattes.cnpq.br/${o.lattes}`}),o.orcid&&r.push({type:"orcid",icon:"\u{1F517}",label:"ORCID",url:`https://orcid.org/${o.orcid}`}),o.OpenAlex&&r.push({type:"openalex",icon:"\u{1F310}",label:"OpenAlex",url:`https://openalex.org/${o.OpenAlex}`}),o.GoogleScholar&&r.push({type:"googlescholar",icon:"\u{1F4CA}",label:"Google Scholar",url:`https://scholar.google.com/citations?user=${o.GoogleScholar}`})}return r});variantsCount=te(()=>{let e=this.response();if(!e||typeof e!="object")return 0;let t=e.variants;return Array.isArray(t)?t.length:0});worksByType=te(()=>{let e=this.response(),t=this.worksKeys.map(a=>({key:a,label:`author.workTypes.${a}`,items:[]}));if(!e||typeof e!="object")return t;let i=e.works;if(!i||typeof i!="object")return t;let r=i;return t.map(a=>{let o=r[a.key],s=Array.isArray(o)?o.map(l=>String(l)).filter(l=>l.trim().length>0):[];return vn(gn({},a),{items:s})})});worksCount=te(()=>this.worksByType().reduce((e,t)=>e+t.items.length,0));coauthorsList=te(()=>{let e=this.response();if(!e||typeof e!="object")return[];let t=e,i=t.coauthors??t.coAuthors??t.Coauthors??t.CoAuthors,a=(Array.isArray(i)?i:typeof i=="string"?(()=>{try{let l=JSON.parse(i);return Array.isArray(l)?l:[]}catch{return[]}})():[]).map((l,c)=>{if(typeof l=="string"&&l.trim())return{id:`coauthor_${c+1}`,name:l.trim(),totalPublications:1};if(!l||typeof l!="object")return null;let d=l,h=d.nome??d.Nome??d.name??d.Name??d.author??d.Author,u=typeof h=="string"?h.trim():"";if(!u)return null;let f=d.colaborations??d.collaborations??d.totalPublications??d.publications??d.count,_=typeof f=="number"?f:Number.parseInt(String(f??"1"),10)||1,M=d.ID??d.id,m=typeof M=="string"&&M.trim()?M.trim():typeof M=="number"&&Number.isFinite(M)?String(M):`coauthor_${c+1}`,p=m&&!m.startsWith("coauthor_")?`/v/${m}`:void 0;return{id:m,name:u,totalPublications:_,link:p}}).filter(l=>l!==null).sort((l,c)=>l.name.localeCompare(c.name,"pt-BR",{sensitivity:"base"}));if(a.length>0)return a;let o=[this.authorName(),this.authorNameAbnt()].map(l=>this.normalizeAuthorName(l)).filter(l=>l.length>0),s=new Map;for(let l of this.worksByType())for(let c of l.items){let d=this.extractCoauthorCandidatesFromWorkItem(c);for(let h of d){let u=this.normalizeAuthorName(h.name);if(!u||o.some(_=>_===u))continue;let f=s.get(u);f?(f.totalPublications+=1,!f.link&&h.link&&(f.link=h.link)):s.set(u,{displayName:h.name,totalPublications:1,link:h.link})}}return[...s.entries()].map(([l,c],d)=>({id:`coauthor_${d+1}_${l.slice(0,16)}`,name:c.displayName,totalPublications:c.totalPublications,link:c.link})).sort((l,c)=>l.name.localeCompare(c.name,"pt-BR",{sensitivity:"base"})).slice(0,30)});collaborationNetwork=te(()=>{let e=this.coauthorsList();if(e.length===0)return{nodes:[],edges:[]};let t=this.authorId()||this.id()||"main",i=this.authorName()||"Autor",r=[{id:t,label:i,size:3,color:"#483d8b",type:"author"}],a=[];e.forEach((o,s)=>{let l=o.id||`coauthor_${s+1}`;r.push({id:l,label:o.name,size:1.5+Math.min(o.totalPublications/10,2.5),color:"#5EA9FF",type:"author"}),a.push({source:t,target:l,weight:Math.max(1,o.totalPublications),label:`${o.totalPublications}`})});for(let o=0;o<e.length;o+=1){let s=e[o].id||`coauthor_${o+1}`,l=e[o+1];l&&a.push({source:s,target:l.id||`coauthor_${o+2}`,weight:1,label:"co"});let c=e[o+2];c&&o%2===0&&a.push({source:s,target:c.id||`coauthor_${o+3}`,weight:1,label:"co"})}return{nodes:r,edges:a}});extractCoauthorCandidatesFromWorkItem(e){let t=[],i=/<a[^>]*href=["']([^"']*\/v\/[^"']+)["'][^>]*>([^<]+)<\/a>/gi,r=i.exec(e);for(;r;){let h=r[1]?.trim(),u=r[2]?.replace(/\s+/g," ").trim();u&&t.push({name:u,link:h}),r=i.exec(e)}if(t.length>0)return t;let a=e.replace(/<[^>]*>/g," ").replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();if(!a)return[];let s=a.slice(0,260).split(";").map(h=>h.trim()),l=[];for(let h of s){let u=h.match(/[A-ZÀ-Ý][A-ZÀ-Ý'`\-\s]+,\s*[A-ZÀ-Ý][^.;:0-9]{1,80}/g);if(u)for(let f of u){let _=f.replace(/\s+/g," ").trim();_.length>=5&&l.push({name:_})}}let c=new Set,d=[];for(let h of l){let u=this.normalizeAuthorName(h.name);!u||c.has(u)||(c.add(u),d.push(h))}return d}normalizeAuthorName(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z,\s]/g,"").replace(/\s+/g," ").trim().toLowerCase()}authorMetrics=te(()=>{let e=this.response();if(!e||typeof e!="object")return[];let t=e,i=r=>{let a=t[r];return typeof a=="number"?a.toLocaleString("pt-BR"):typeof a=="string"&&a.trim()?a:"-"};return[{label:"Visualizacoes",value:i("Views")},{label:"Downloads",value:i("Download")},{label:"Curtidas",value:i("Likes")},{label:"Citacoes",value:i("cited")},{label:"Variantes",value:this.variantsCount().toString()},{label:"Trabalhos",value:this.worksCount().toString()}]});articleMetrics=te(()=>{let e=this.response();if(!e||typeof e!="object")return[];let t=e,i=r=>{let a=t[r];return typeof a=="number"?a.toLocaleString("pt-BR"):typeof a=="string"&&a.trim()?a:"-"};return[{label:"Visualizacoes",value:i("Views")},{label:"Downloads",value:i("Download")},{label:"Curtidas",value:i("Likes")},{label:"Citacoes",value:i("cited")},{label:"Ano",value:i("year")},{label:"Idioma",value:i("language")}]});chartYearsBars=te(()=>{let e=this.response();if(!e||typeof e!="object")return[];let t=e.chart_years;if(!t||typeof t!="object")return[];let i=t,r=i.labels,a=i.data;if(!Array.isArray(r)||!a||typeof a!="object")return[];let o=r.map(d=>String(d)),s=a,l={Article:"#0f0fbd",Proceeding:"#3f3fdd",Book:"#927b00",BookChapter:"#e2cb46"};return o.map((d,h)=>{let u=Object.entries(l).map(([f,_])=>{let M=s[f],p=(Array.isArray(M)?M:[])[h],S=typeof p=="number"?p:0;return{key:f,label:`author.workTypes.${f}`,value:S,color:_}});return{label:d,segments:u}}).filter(d=>d.segments.reduce((h,u)=>h+u.value,0)>0)});jsonContent=te(()=>JSON.stringify(this.response(),null,2));dataJour=te(()=>{let e=this.response();if(!e||typeof e!="object")return null;let t=e;return t.dataJOUR??t.dataJour??t.data_jour??null});dataTag=te(()=>{let e=this.response();if(!e||typeof e!="object")return null;let t=e;return t.dataTAG??t.dataTag??t.data_tag??null});citationsGrantedList=te(()=>{let e=this.response();if(!e||typeof e!="object")return[];let t=e,r=[t.citations_granted,t.citationsGranted,t.CitationsGranted,t.citacoes_concedidas,t.citacoesConcedidas,t.CITACOES_CONCEDIDAS,t.references,t.referencias,t.dataREF,t.dataRef,t.data_ref].flatMap(a=>this.toHtmlList(a)).map(a=>a.trim()).filter(a=>a.length>0);return[...new Set(r)]});toHtmlList(e){if(Array.isArray(e))return e.map(t=>{if(typeof t=="string")return t;if(!t||typeof t!="object")return"";let i=t,r=i.value??i.text??i.title??i.reference??i.referencia??i.html;return typeof r=="string"?r:""}).map(t=>t.trim()).filter(t=>t.length>0);if(typeof e=="string"){let t=e.trim();return t?t.includes("|")?t.split("|").map(i=>i.trim()).filter(i=>i.length>0):t.includes(`
`)?t.split(`
`).map(i=>i.trim()).filter(i=>i.length>0):[t]:[]}return e&&typeof e=="object"?Object.values(e).flatMap(i=>this.toHtmlList(i)).map(i=>i.trim()).filter(i=>i.length>0):[]}constructor(){this.route.paramMap.pipe(zc(e=>e.get("id")?.trim()||""),nh(),rh(e=>{this.id.set(e),this.loading.set(!0),this.error.set(""),this.response.set(null)}),ih(e=>e?this.brapciApiService.getById(e).pipe(zc(t=>({ok:!0,data:t})),th(()=>Bc({ok:!1,data:null}))):Bc({ok:!1,data:null})),Or(this.destroyRef)).subscribe(e=>{if(!e.ok){this.error.set("Nao foi possivel carregar os dados para este ID."),this.loading.set(!1);return}this.response.set(e.data),this.loading.set(!1)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=je({type:n,selectors:[["app-v-id-page"]],decls:6,vars:7,consts:[[4,"ngComponentOutlet","ngComponentOutletInputs"],["aria-labelledby","v-title",1,"v-wrap","py-0"],[1,"container"],[1,"mb-0"],[1,"v-error","mb-0"],[3,"labels"],[1,"mb-3"],[1,"mb-4","d-block",3,"data","metrics","dataTag"],[1,"mb-4","d-block",3,"data"],[1,"mb-4","d-block",3,"name","nameAbnt","authorId","metrics","chartPoints","worksGroups","dataJour","dataTag","photoUrl","authorLinks","coauthors","citationsGranted","networkData"],[1,"mb-4","d-block",3,"bookId","data","embedded"]],template:function(t,i){t&1&&(On(0,JS,1,0,"ng-container",0),w(1,"section",1)(2,"div",2),se(3,ZS,2,0,"p",3)(4,KS,2,1,"p",4)(5,hT,12,3),v()()),t&2&&(Me("ngComponentOutlet",i.seoMetadataComponent)("ngComponentOutletInputs",Ma(3,jS,i.response(),i.id(),i.classe())),g(3),le(i.loading()?3:i.error()?4:5))},dependencies:[Ye,Ro,Cc,xa,Ac,Lh,Oc,Nc,Uh],styles:[".v-wrap[_ngcontent-%COMP%]{color:var(--theme-ink)}.v-card[_ngcontent-%COMP%]{background:var(--theme-card-bg);border:1px solid var(--theme-line);border-radius:.9rem}.v-header[_ngcontent-%COMP%]{margin-bottom:1rem}.v-error[_ngcontent-%COMP%]{color:var(--theme-error)}pre[_ngcontent-%COMP%]{background:var(--theme-sand);border-radius:.45rem;max-height:480px;overflow:auto;padding:.8rem}.full[_ngcontent-%COMP%]{width:100%}"]})};export{Pg as VIdPage};
