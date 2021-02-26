(()=>{"use strict";var t={36:(t,e)=>{e.k=void 0;var i=function(){function t(t,e,i,n){this._x1=t,this._y1=e,this._x2=i,this._y2=n,this.order()}return Object.defineProperty(t.prototype,"height",{get:function(){return this.y2-this.y1},set:function(t){this.y2=this.y1+t,this.orderY()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"h",{get:function(){return this.height},set:function(t){this.height=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.x2-this.x1},set:function(t){this.x2=this.x1+t,this.orderX()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"w",{get:function(){return this.width},set:function(t){this.width=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this.orderX()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this.orderY()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this.orderX()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this.orderY()},enumerable:!1,configurable:!0}),t.fromHW=function(e,i,n,s){return void 0===n&&(n=0),void 0===s&&(s=0),new t(n,s,n+i,s+e)},t.prototype.containsPoint=function(e,i){return t.between(e,this.x1,this.x2)&&t.between(i,this.y1,this.y2)},t.between=function(t,e,i){return t>=e&&t<=i},t.prototype.intersects=function(t){return!(this.x1>t.x2||this.x2<t.x1||this.y1>t.y2||this.y2<t.y1)},t.prototype.union=function(e){return new t(Math.min(this.x1,e.x1),Math.min(this.y1,e.y1),Math.max(this.x2,e.x2),Math.max(this.y2,e.y2))},t.prototype.intersection=function(e){return new t(Math.max(this.x1,e.x1),Math.max(this.y1,e.y1),Math.min(this.x2,e.x2),Math.min(this.y2,e.y2))},Object.defineProperty(t.prototype,"x",{get:function(){return this._x1},set:function(t){var e=this.width;this._x1=t,this._x2=t+e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y1},set:function(t){var e=this.height;this._y1=t,this._y2=t+e},enumerable:!1,configurable:!0}),t.prototype.move=function(t,e){this.x=t,this.y=e},t.prototype.translate=function(t,e){this.x+=t,this.y+=e},t.smallestBoxEnclosing=function(t){return this.sme(t)},t.sme=function(e){var i=new t(0,0,0,0);return e.forEach((function(t){i=i.union(t)})),i},t.prototype.copy=function(){return new t(this.x1,this.y1,this.x2,this.y2)},t.prototype.addMargin=function(t){this._x1-=t,this._x2+=t,this._y1-=t,this._y2+=t,this.order()},t.prototype.addMargins=function(t,e,i,n){this._x1-=t,this._x2+=i,this._y1-=e,this._y2+=n,this.order()},t.prototype.order=function(){this.orderX(),this.orderY()},t.prototype.orderX=function(){var t;this.x1>this.x2&&(t=[this.x2,this.x1],this.x1=t[0],this.x2=t[1])},t.prototype.orderY=function(){var t;this.y1>this.y2&&(t=[this.y2,this.y1],this.y1=t[0],this.y2=t[1])},t}();e.k=i}},e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}(()=>{var t=i(36);class e{constructor(){this.bb=new t.k(0,0,0,0)}paint(t){}move(t){}}class n{static init(){window.addEventListener("mousemove",(t=>{this.mouseX=t.clientX,this.mouseY=t.clientY}))}}n.mouseX=-1,n.mouseY=-1;class s extends e{constructor(){super(...arguments),this.mouthSide=1}set goingLeft(t){this.mouthSide=Number(!t)}paint(t){t.save();const e=.5*this.bb.w,i=Number(!this.mouthSide);t.beginPath(),t.arc(this.bb.x+e,this.bb.y+e,e,(this.mouthSide-s.mouthAngle)*Math.PI,(i-s.mouthAngle)*Math.PI,!1),t.fillStyle="rgb(255, 255, 0)",t.fill(),t.beginPath(),t.arc(this.bb.x+e,this.bb.y+e,e,(i+s.mouthAngle)*Math.PI,(this.mouthSide+s.mouthAngle)*Math.PI,!1),t.fill(),t.beginPath(),t.arc(this.bb.x+e,this.bb.y+.5*e,.1*e,0,2*Math.PI,!1),t.fillStyle="rgb(0, 0, 0)",t.fill(),t.restore()}static updateMouthAngle(){return t=this,e=void 0,n=function*(){s.mouthAngle>=s.maxMouthAngle?s.mouthOpening=!1:s.mouthAngle<=0&&(s.mouthOpening=!0),s.mouthOpening?s.mouthAngle+=s.mouthAngleStep:s.mouthAngle-=s.mouthAngleStep},new((i=void 0)||(i=Promise))((function(s,r){function o(t){try{a(n.next(t))}catch(t){r(t)}}function h(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,h)}a((n=n.apply(t,e||[])).next())}));var t,e,i,n}}s.maxMouthAngle=.2,s.mouthAngle=s.maxMouthAngle,s.mouthOpening=!1,s.mouthAngleStep=.005;class r{static connect(){return t=this,e=void 0,n=function*(){return navigator.bluetooth.requestDevice({filters:[{name:"ENTRALPI"}],optionalServices:["0000fff0-0000-1000-8000-00805f9b34fb"]}).then((t=>{if(!t.gatt)throw new Error("No gatt server");return t.gatt.connect()})).then((t=>t.getPrimaryService("0000fff0-0000-1000-8000-00805f9b34fb"))).then((t=>t.getCharacteristic("0000fff4-0000-1000-8000-00805f9b34fb"))).then((t=>{t.properties.notify?(t.addEventListener("characteristicvaluechanged",(t=>{var e;const i=t.target;(null===(e=null==i?void 0:i.value)||void 0===e?void 0:e.getInt16(0))&&(r.data=i.value.getInt16(0))})),t.startNotifications()):console.error("Cannot be notified by characteristic?... Weird")})).catch((t=>{console.log("Argh! "+t)}))},new((i=void 0)||(i=Promise))((function(s,r){function o(t){try{a(n.next(t))}catch(t){r(t)}}function h(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,h)}a((n=n.apply(t,e||[])).next())}));var t,e,i,n}}r.data=-1;class o extends s{constructor(t){if(super(),!t)throw new Error("This player is not part of a game.");this.bb.width=this.bb.height=.1*t.bb.height,this.bb.y=.5*(t.bb.h-this.bb.h),this.bb.x=.15*(t.bb.w-this.bb.w)}move(t){-1==r.data?this.bb.y=n.mouseY:this.bb.y=(t.bb.h-this.bb.h)*r.data/8e3}}class h extends e{constructor(){super(),this.value=0}paint(t){const e=this.value.toString(),i=t.measureText(e);t.save(),t.font="30px Helvetica",t.fillText(e,.5*(t.canvas.width-i.width),i.actualBoundingBoxAscent+50),t.restore()}}class a extends s{constructor(t){if(super(),this.touched=!1,this.versLeBas=!1,this.goingLeft=!0,!t)throw new Error("This element is not part of a game.");{this.bb.height=this.bb.width=.2*t.bb.height;const e=.1*t.bb.height;this.bb.y=Math.random()*(t.bb.height-this.bb.height-e)+e,this.bb.x=t.bb.w}}move(t){return this.touched?this.versLeBas?this.bb.y+=.005*t.bb.width*t.speed:this.bb.y-=.005*t.bb.width*t.speed:this.bb.x-=.005*t.bb.width*t.speed,this}}var c=function(t,e,i,n){return new(i||(i=Promise))((function(s,r){function o(t){try{a(n.next(t))}catch(t){r(t)}}function h(t){try{a(n.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,h)}a((n=n.apply(t,e||[])).next())}))};class u extends e{constructor(){super(),this.playing=!1,n.init();const t=document.body;t.style.margin="0px",t.style.height=`${window.innerHeight}px`;const e=document.createElement("canvas");e.style.display="block",e.style.position="absolute",e.height=this.bb.height=t.scrollHeight,e.width=this.bb.width=t.scrollWidth,document.body.appendChild(e),this.ctx=e.getContext("2d"),this.score=new h,this.player=new o(this),this.targets=[]}get speed(){return Math.pow(this.score.value+1,1.1)}refresh(){return c(this,void 0,void 0,(function*(){if(this.playing&&this.targets.length){if(!this.ctx)return this.stop(),void console.error("no drawing context");requestAnimationFrame(this.refresh.bind(this)),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.score.paint(this.ctx),this.player.move(this),this.player.paint(this.ctx),this.targets.forEach((t=>{t&&(t.move(this),t.bb.intersects(this.bb)&&this.ctx?(t.paint(this.ctx),!t.touched&&t.bb.intersects(this.player.bb)&&(t.touched=!0,t.versLeBas=!!(this.score.value%2),this.score.value++,this.addTarget())):this.removeTarget(t))})),s.updateMouthAngle()}}))}removeTarget(t){return c(this,void 0,void 0,(function*(){delete this.targets[this.targets.indexOf(t)]}))}addTarget(){for(let t=0;t<this.targets.length;t++)if(!this.targets[t])return void(this.targets[t]=new a(this));this.targets.push(new a(this))}start(){this.playing=!0,this.targets.push(new a(this)),this.refresh()}stop(){this.playing=!1}static getGame(){return u.pGame||(u.pGame=new u),u.pGame}}u.pGame=null,u.creatingSingleton=!1;const b=document.getElementById("bluetoothButton");null==b||b.addEventListener("click",(t=>{r.connect().then((()=>{const t=document.getElementById("htmlExceptGame");null==t||t.style.setProperty("visibility","hidden"),u.getGame().start()})).catch((t=>{console.error("An error ocurred:",t)}))}))})()})();