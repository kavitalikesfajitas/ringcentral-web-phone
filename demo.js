!function(e){function n(n){for(var t,i,c=n[0],a=n[1],u=n[2],f=0,d=[];f<c.length;f++)i=c[f],r[i]&&d.push(r[i][0]),r[i]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(s&&s(n);d.length;)d.shift()();return l.push.apply(l,u||[]),o()}function o(){for(var e,n=0;n<l.length;n++){for(var o=l[n],t=!0,c=1;c<o.length;c++){var a=o[c];0!==r[a]&&(t=!1)}t&&(l.splice(n--,1),e=i(i.s=o[0]))}return e}var t={},r={1:0},l=[];function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(o,t,function(n){return e[n]}.bind(null,t));return o},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var s=a;l.push([37,0]),o()}({37:function(e,n,o){const t=o(38),r=o(46),l=o(47);window.jQuery=l,window.getStats=r,window.SIP=t,l(function(){o(48);const e=o(30),n=o(79)||window.RingCentral.WebPhone;var t,r,i,c,a,u,s,f,d,p=null,g=null,m=null,h=0,v=null,b=null,w=l("#app"),y=l("#template-login"),k=l("#template-auth-flow"),S=l("#template-call"),P=l("#template-incoming"),A=l("#template-accepted"),I=document.getElementById("remoteVideo"),q=document.getElementById("localVideo");function E(e){return l(e.html())}function N(e,n,o,t,r,l,i){return h=i,v=t,localStorage.setItem("webPhoneServer",e||""),localStorage.setItem("webPhoneAppKey",n||""),localStorage.setItem("webPhoneAppSecret",o||""),localStorage.setItem("webPhoneLogin",t||""),localStorage.setItem("webPhoneExtension",r||""),localStorage.setItem("webPhonePassword",l||""),localStorage.setItem("webPhoneLogLevel",h||0),g.get("/restapi/v1.0/account/~/extension/~").then(function(e){return b=e.json(),console.log("Extension info",b),g.post("/client-info/sip-provision",{sipInfo:[{transport:"WSS"}]})}).then(function(e){return e.json()}).then(R).then(j).catch(function(e){console.error("Error in main promise chain"),console.error(e.stack||e)})}function R(e){return e.sipInfo[0]||e.sipInfo,(m=new n(e,{appKey:localStorage.getItem("webPhoneAppKey"),audioHelper:{enabled:!0},logLevel:parseInt(h,10),appName:"WebPhoneDemo",appVersion:"1.0.0",media:{remote:I,local:q},enableQos:!0,enableMediaReportLogging:!0})).userAgent.audioHelper.loadAudio({incoming:"audio/incoming.ogg",outgoing:"audio/outgoing.ogg"}),m.userAgent.audioHelper.setVolume(.3),m.userAgent.on("invite",T),m.userAgent.on("connecting",function(){console.log("UA connecting")}),m.userAgent.on("connected",function(){console.log("UA Connected")}),m.userAgent.on("disconnected",function(){console.log("UA Disconnected")}),m.userAgent.on("registered",function(){console.log("UA Registered")}),m.userAgent.on("unregistered",function(){console.log("UA Unregistered")}),m.userAgent.on("registrationFailed",function(){console.log("UA RegistrationFailed",arguments)}),m.userAgent.on("message",function(){console.log("UA Message",arguments)}),m.userAgent.transport.on("switchBackProxy",function(){console.log("switching back to primary outbound proxy"),m.userAgent.transport.reconnect(!0)}),m.userAgent.transport.on("closed",function(){console.log("WebSocket closed.")}),m.userAgent.transport.on("transportError",function(){console.log("WebSocket transportError occured")}),m.userAgent.transport.on("wsConnectionError",function(){console.log("WebSocket wsConnectionError occured")}),m}function T(e){if(console.log("EVENT: Invite",e.request),console.log("To",e.request.to.displayName,e.request.to.friendlyName),console.log("From",e.request.from.displayName,e.request.from.friendlyName),e.request.headers["Alert-Info"]&&"Auto Answer"===e.request.headers["Alert-Info"][0].raw)e.accept().then(function(){x(e)}).catch(function(e){console.error("Accept failed",e.stack||e)});else{var n=E(P).modal({backdrop:"static"});n.find(".answer").on("click",function(){n.find(".before-answer").css("display","none"),n.find(".answered").css("display",""),e.accept().then(function(){n.modal("hide"),x(e)}).catch(function(e){console.error("Accept failed",e.stack||e)})}),n.find(".decline").on("click",function(){e.reject()}),n.find(".toVoicemail").on("click",function(){e.toVoicemail()}),n.find(".forward-form").on("submit",function(o){o.preventDefault(),o.stopPropagation(),e.forward(n.find("input[name=forward]").val().trim()).then(function(){console.log("Forwarded"),n.modal("hide")}).catch(function(e){console.error("Forward failed",e.stack||e)})}),n.find(".reply-form").on("submit",function(o){o.preventDefault(),o.stopPropagation(),e.replyWithMessage({replyType:0,replyText:n.find("input[name=reply]").val()}).then(function(){console.log("Replied"),n.modal("hide")}).catch(function(e){console.error("Reply failed",e.stack||e)})}),e.on("rejected",function(){n.modal("hide")})}}function x(e){console.log("EVENT: Accepted",e.request),console.log("To",e.request.to.displayName,e.request.to.friendlyName),console.log("From",e.request.from.displayName,e.request.from.friendlyName);var n=E(A).modal(),o=n.find(".info").eq(0),t=n.find("input[name=dtmf]").eq(0),r=n.find("input[name=transfer]").eq(0),l=n.find("input[name=flip]").eq(0),i=setInterval(function(){var n=e.startTime?Math.round((Date.now()-e.startTime)/1e3)+"s":"Ringing";o.text("time: "+n+"\nstartTime: "+JSON.stringify(e.startTime,null,2)+"\n")},1e3);function c(){clearInterval(i),n.modal("hide")}n.find(".increase-volume").on("click",function(){e.ua.audioHelper.setVolume((null!==e.ua.audioHelper.volume?e.ua.audioHelper.volume:.5)+.1)}),n.find(".decrease-volume").on("click",function(){e.ua.audioHelper.setVolume((null!==e.ua.audioHelper.volume?e.ua.audioHelper.volume:.5)-.1)}),n.find(".mute").on("click",function(){e.mute()}),n.find(".unmute").on("click",function(){e.unmute()}),n.find(".hold").on("click",function(){e.hold().then(function(){console.log("Holding")}).catch(function(e){console.error("Holding failed",e.stack||e)})}),n.find(".unhold").on("click",function(){e.unhold().then(function(){console.log("UnHolding")}).catch(function(e){console.error("UnHolding failed",e.stack||e)})}),n.find(".startRecord").on("click",function(){e.startRecord().then(function(){console.log("Recording Started")}).catch(function(e){console.error("Recording Start failed",e.stack||e)})}),n.find(".stopRecord").on("click",function(){e.stopRecord().then(function(){console.log("Recording Stopped")}).catch(function(e){console.error("Recording Stop failed",e.stack||e)})}),n.find(".park").on("click",function(){e.park().then(function(){console.log("Parked")}).catch(function(e){console.error("Park failed",e.stack||e)})}),n.find(".transfer-form").on("submit",function(n){n.preventDefault(),n.stopPropagation(),e.transfer(r.val().trim()).then(function(){console.log("Transferred")}).catch(function(e){console.error("Transfer failed",e.stack||e)})}),n.find(".transfer-form button.warm").on("click",function(o){o.preventDefault(),o.stopPropagation(),e.hold().then(function(){console.log("Placing the call on hold, initiating attended transfer");var o=e.ua.invite(r.val().trim());o.once("accepted",function(){console.log("New call initated. Click Complete to complete the transfer"),n.find(".transfer-form button.complete").on("click",function(n){e.warmTransfer(o).then(function(){console.log("Warm transfer completed")}).catch(function(e){console.error("Transfer failed",e.stack||e)})})})})}),n.find(".flip-form").on("submit",function(n){n.preventDefault(),n.stopPropagation(),e.flip(l.val().trim()).then(function(){console.log("Flipped")}).catch(function(e){console.error("Flip failed",e.stack||e)}),l.val("")}),n.find(".dtmf-form").on("submit",function(n){n.preventDefault(),n.stopPropagation(),e.dtmf(t.val().trim()),t.val("")}),n.find(".hangup").on("click",function(){e.terminate()}),e.on("accepted",function(){console.log("Event: Accepted")}),e.on("progress",function(){console.log("Event: Progress")}),e.on("rejected",function(){console.log("Event: Rejected"),c()}),e.on("failed",function(){console.log("Event: Failed",arguments),c()}),e.on("terminated",function(){console.log("Event: Terminated"),c()}),e.on("cancel",function(){console.log("Event: Cancel"),c()}),e.on("refer",function(){console.log("Event: Refer"),c()}),e.on("replaced",function(n){console.log("Event: Replaced: old session",e,"has been replaced with",n),c(),x(n)}),e.on("dtmf",function(){console.log("Event: DTMF")}),e.on("muted",function(){console.log("Event: Muted")}),e.on("unmuted",function(){console.log("Event: Unmuted")}),e.on("connecting",function(){console.log("Event: Connecting")}),e.on("bye",function(){console.log("Event: Bye"),c()})}function j(){var e=E(S),n=e.find("input[name=number]").eq(0),o=e.find("input[name=homeCountry]").eq(0),t=e.find(".username").eq(0),r=e.find(".logout").eq(0);t.html("<dl><dt>Contact</dt><dd>"+b.contact.firstName+" "+b.contact.lastName+"</dd><dt>Company</dt><dd>"+(b.contact.company||"?")+"</dd><dt>Phone Number</dt><dd>"+v+"</dd></dl>"),r.on("click",function(e){m.userAgent.unregister(),e.preventDefault(),location.reload()}),n.val(localStorage.getItem("webPhoneLastNumber")||""),e.on("submit",function(e){var t,r;e.preventDefault(),e.stopPropagation(),localStorage.setItem("webPhoneLastNumber",n.val()||""),t=n.val(),r=(r=o.val())||b&&b.regionalSettings&&b.regionalSettings.homeCountry&&b.regionalSettings.homeCountry.id||null,x(m.userAgent.invite(t,{fromNumber:v,homeCountryId:r}))}),w.empty().append(e)}t=E(y),r=E(k),i=r.find("input[name=server]").eq(0),c=r.find("input[name=appKey]").eq(0),a=r.find("input[name=appSecret]").eq(0),u=t.find("input[name=login]").eq(0),s=t.find("input[name=extension]").eq(0),f=t.find("input[name=password]").eq(0),d=r.find("select[name=logLevel]").eq(0),i.val(localStorage.getItem("webPhoneServer")||e.server.sandbox),c.val(localStorage.getItem("webPhoneAppKey")||""),a.val(localStorage.getItem("webPhoneAppSecret")||""),u.val(localStorage.getItem("webPhoneLogin")||""),s.val(localStorage.getItem("webPhoneExtension")||""),f.val(localStorage.getItem("webPhonePassword")||""),d.val(localStorage.getItem("webPhoneLogLevel")||h),t.on("submit",function(n){console.log("Normal Flow"),n.preventDefault(),n.stopPropagation(),function(n,o,t,r,l,i,c){p=new e({appKey:o,appSecret:t,server:n}),g=p.platform(),r&&(r=(r=r.match(/^[+1]/)?r:"1"+r).replace(/\W/g,"")),g.login({username:r,extension:l||null,password:i}).then(function(){return N(n,o,t,r,l,i,c)}).catch(function(e){console.error(e.stack||e)})}(i.val(),c.val(),a.val(),u.val(),s.val(),f.val(),d.val())}),r.on("submit",function(n){console.log("Authorized Flow"),n.preventDefault(),n.stopPropagation(),function(n,o,t,r){var l=decodeURIComponent(window.location.href.split("login",1)+"callback.html");console.log("The redirect uri value :",l),p=new e({appKey:o,appSecret:t,server:n,redirectUri:l});var i=(g=p.platform()).loginUrl();g.loginWindow({url:i}).then(g.login.bind(g)).then(function(){return N(n,o,t,"","","",r)}).catch(function(e){console.error(e.stack||e)})}(i.val(),c.val(),a.val(),d.val())}),w.empty().append(r).append(t)})},79:function(e,n){e.exports=void 0}});
//# sourceMappingURL=demo.js.map