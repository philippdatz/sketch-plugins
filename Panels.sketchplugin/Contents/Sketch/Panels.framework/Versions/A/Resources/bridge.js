!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(e){var t,r=function(e,t){return function(){return e.apply(t,arguments)}};t=n(2).EventEmitter,window.Bridge=function(){function n(){this._addAnalyticsOnPanelAppear=r(this._addAnalyticsOnPanelAppear,this),this._showChangelog=r(this._showChangelog,this),this._emitter=new t,this.isSketch=!0,this._analyticsAdded=!1,this.settingsDocumentsPath=Panels.settingsDocumentsPath(),window.callback=function(e){return function(t,n){var r,o,i;if(i=!0,n)try{n=JSON.parse(n)}catch(o){r=o,e.logError("Received malformed arguments: "+n,r),e._emitter.emit("_error","Received malformed arguments: "+n),i=!1}return i?e._emitter.emit(t,n):void 0}}(this),window.addEventListener("error",function(e){return function(t){return t?(e.log(t.message),e._emitter.emit("_error",t.message)):void 0}}(this)),this.once("panel-will-appear",this._addAnalyticsOnPanelAppear),this.on("show-changelog",this._showChangelog)}return n.prototype._showChangelog=function(){var e,t;return e=document.createElement("div"),e.className="changelog scrollbars-visible",e.innerHTML=Panels.getChangelog(),t=document.createElement("button"),t.className="close-button",t.innerHTML="×",t.addEventListener("click",this._onCloseChangelogClick),e.appendChild(t),document.body.appendChild(e)},n.prototype._onCloseChangelogClick=function(e){return document.body.removeChild(e.target.parentElement)},n.prototype._addAnalyticsOnPanelAppear=function(){var e;return this._analyticsAdded?void 0:(e=document.createElement("script"),e.type="text/javascript",e.src="./analytics.js",document.body.appendChild(e),this._analyticsAdded=!0)},n.prototype.emit=function(e,t){return Panels.call_(JSON.stringify({command:e,arguments:t}))},n.prototype.emitData=function(e,t){return this._emitter.emit(e,t)},n.prototype.logError=function(e,t){return Panels.log_(e+" - "+t.message+"\n"+t.stack)},n.prototype.log=function(e){return Panels.log_(e)},n.prototype.set=function(e,t){return null!==t&&"object"==typeof t?Panels.setSettingsObject_forKey_(JSON.stringify(t),e):Panels.setSettingsValue_forKey_(t,e)},n.prototype.get=function(e){var t,n;return n=Panels.settingsValueForKey_(e),n?(t=JSON.parse(n),t.value):void 0},n.prototype.remove=function(e){return Panels.setSettingsValue_forKey_(null,e)},n.prototype.getSettings=function(e){var t;return t=null,t=e?Panels.settingsForPanel_(e):Panels.settings(),t?JSON.parse(t):{}},n.prototype.setGlobal=function(e,t){return null!==t&&"object"==typeof t?Panels.setGlobalSettingsObject_forKey_(JSON.stringify(t),e):Panels.setGlobalSettingsValue_forKey_(t,e)},n.prototype.getGlobal=function(e){var t,n;return n=Panels.globalSettingsValueForKey_(e),n?(t=JSON.parse(n),t.value):void 0},n.prototype.setManagerSetting=function(e,t){return Panels.setManagerSettingsValue_forKey_(t,e)},n.prototype.getManagerSetting=function(e){return Panels.managerSettingsValueForKey_(e)},n.prototype.setMetadata=function(e){return Panels.setMetadata_(JSON.stringify(e))},n.prototype.getMetadata=function(t){return e.nextTick(function(){var e;return e=Panels.getMetadata(),t(e?JSON.parse(e):{})})},n.prototype.track=function(e,t,n,r){return null!=window.analytics?analytics.track(e,t,n,r):void 0},n.prototype.trackError=function(e,t){return null!=window.ravenClient?ravenClient.captureMessage(e,t):void 0},n.prototype.getDocumentId=function(e){var t;return t=Panels.getDocumentId(),e?e(t):t},n.prototype.getChangelog=function(){return Panels.getChangelog()},n.prototype.getVersion=function(){return Panels.getVersion()},n.prototype.alert=function(t,n){return alert(t),"function"==typeof n?e.nextTick(function(){return n()}):void 0},n.prototype.confirm=function(t,n){return e.nextTick(function(){return n(confirm(t))})},n.prototype.prompt=function(t,n,r){return e.nextTick(function(){return r(prompt(t,n))})},n.prototype.open=function(e){return Panels.open_(e)},n.prototype.resize=function(e,t){return Panels.setWidth_height_(e,t)},n.prototype.getSize=function(){return JSON.parse(Panels.getSize())},n.prototype.writeFile=function(e,t){return Panels.writeString_toPath_(e,t)},n.prototype.readFile=function(e){return Panels.readStringFromPath_(e)},n.prototype.readFileBase64=function(e){return Panels.base64FromPath_(e)},n.prototype.copy=function(e){return Panels.copyString_(e)},n.prototype.showAction=function(e){return Panels.setHidden_forActionButton_(!1,e)},n.prototype.hideAction=function(e){return Panels.setHidden_forActionButton_(!0,e)},n.prototype.showItemInFolder=function(e){return Panels.showInFinder_(e)},n.prototype.getHostVersion=function(){return"sketch-"+Panels.sketchVersion()},n.prototype.showOnboarding=function(e){return e||(e=null),Panels.showOnboarding_(e)},n.prototype.hideOnboarding=function(){return Panels.hideOnboarding()},n.prototype.showOnboardingVideo=function(){return Panels.showOnboardingVideo()},n.prototype.onboardingVideoUrl=function(){return Panels.onboardingVideoUrl()},n.prototype.togglePanel=function(e){return Panels.togglePanelByIdentifier_(e)},n.prototype.on=function(e,t){return this._emitter.on(e,t)},n.prototype.once=function(e,t){return this._emitter.once(e,t)},n.prototype.removeListener=function(e,t){return this._emitter.removeListener(e,t)},n}()}).call(t,n(1))},function(e,t){function n(){u=!1,s.length?l=s.concat(l):c=-1,l.length&&r()}function r(){if(!u){var e=setTimeout(n);u=!0;for(var t=l.length;t;){for(s=l,l=[];++c<t;)s&&s[c].run();c=-1,t=l.length}s=null,u=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var s,a=e.exports={},l=[],u=!1,c=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new o(e,t)),1!==l.length||u||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,a,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),u=n.slice(),o=u.length,l=0;o>l;l++)u[l].apply(this,a);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,o&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),o||(o=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var o=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(0>o)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}}]);