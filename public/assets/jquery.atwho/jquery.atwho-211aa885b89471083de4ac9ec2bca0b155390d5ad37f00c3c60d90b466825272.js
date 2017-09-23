!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(0,function(t){var e,i,r,n,o,s,a,h,l,u,c=[].slice,p=function(t,e){function i(){this.constructor=t}for(var r in e)f.call(e,r)&&(t[r]=e[r]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},f={}.hasOwnProperty;e=t,r=function(){function t(t){this.currentFlag=null,this.controllers={},this.aliasMaps={},this.$inputor=e(t),this.setupRootElement(),this.listen()}return t.prototype.createContainer=function(t){var i;return null!=(i=this.$el)&&i.remove(),e(t.body).append(this.$el=e("<div class='atwho-container'></div>"))},t.prototype.setupRootElement=function(t,i){var r;if(null==i&&(i=!1),t)this.window=t.contentWindow,this.document=t.contentDocument||this.window.document,this.iframe=t;else{this.document=this.$inputor[0].ownerDocument,this.window=this.document.defaultView||this.document.parentWindow;try{this.iframe=this.window.frameElement}catch(t){if(r=t,this.iframe=null,e.fn.atwho.debug)throw new Error("iframe auto-discovery is failed.\nPlease use `setIframe` to set the target iframe manually.\n"+r)}}return this.createContainer((this.iframeAsRoot=i)?this.document:document)},t.prototype.controller=function(t){var e,i,r,n;if(this.aliasMaps[t])i=this.controllers[this.aliasMaps[t]];else{n=this.controllers;for(r in n)if(e=n[r],r===t){i=e;break}}return i||this.controllers[this.currentFlag]},t.prototype.setContextFor=function(t){return this.currentFlag=t,this},t.prototype.reg=function(t,e){var i,r;return r=(i=this.controllers)[t]||(i[t]=this.$inputor.is("[contentEditable]")?new s(this,t):new l(this,t)),e.alias&&(this.aliasMaps[e.alias]=t),r.init(e),this},t.prototype.listen=function(){return this.$inputor.on("compositionstart",function(t){return function(){var e;return null!=(e=t.controller())&&e.view.hide(),t.isComposing=!0}}(this)).on("compositionend",function(t){return function(){return t.isComposing=!1}}(this)).on("keyup.atwhoInner",function(t){return function(e){return t.onKeyup(e)}}(this)).on("keydown.atwhoInner",function(t){return function(e){return t.onKeydown(e)}}(this)).on("blur.atwhoInner",function(t){return function(e){var i;if(i=t.controller())return i.expectedQueryCBId=null,i.view.hide(e,i.getOpt("displayTimeout"))}}(this)).on("click.atwhoInner",function(t){return function(e){return t.dispatch(e)}}(this)).on("scroll.atwhoInner",function(t){return function(){var e;return e=t.$inputor.scrollTop(),function(i){var r,n;return r=i.target.scrollTop,e!==r&&null!=(n=t.controller())&&n.view.hide(i),e=r,!0}}}(this)())},t.prototype.shutdown=function(){var t,e,i;i=this.controllers;for(t in i)e=i[t],e.destroy(),delete this.controllers[t];return this.$inputor.off(".atwhoInner"),this.$el.remove()},t.prototype.dispatch=function(t){var e,i,r,n;r=this.controllers,n=[];for(e in r)i=r[e],n.push(i.lookUp(t));return n},t.prototype.onKeyup=function(t){var i;switch(t.keyCode){case a.ESC:t.preventDefault(),null!=(i=this.controller())&&i.view.hide();break;case a.DOWN:case a.UP:case a.CTRL:e.noop();break;case a.P:case a.N:t.ctrlKey||this.dispatch(t);break;default:this.dispatch(t)}},t.prototype.onKeydown=function(t){var i,r;if((r=null!=(i=this.controller())?i.view:void 0)&&r.visible())switch(t.keyCode){case a.ESC:t.preventDefault(),r.hide(t);break;case a.UP:t.preventDefault(),r.prev();break;case a.DOWN:t.preventDefault(),r.next();break;case a.P:if(!t.ctrlKey)return;t.preventDefault(),r.prev();break;case a.N:if(!t.ctrlKey)return;t.preventDefault(),r.next();break;case a.TAB:case a.ENTER:case a.SPACE:if(!r.visible())return;if(!this.controller().getOpt("spaceSelectsMatch")&&t.keyCode===a.SPACE)return;if(!this.controller().getOpt("tabSelectsMatch")&&t.keyCode===a.TAB)return;r.highlighted()?(t.preventDefault(),r.choose(t)):r.hide(t);break;default:e.noop()}},t}(),n=function(){function t(t,i){this.app=t,this.at=i,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||this.uid(),this.expectedQueryCBId=null,this.setting=null,this.query=null,this.pos=0,this.range=null,0===(this.$el=e("#atwho-ground-"+this.id,this.app.$el)).length&&this.app.$el.append(this.$el=e("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new h(this),this.view=new u(this)}return t.prototype.uid=function(){return(Math.random().toString(16)+"000000000").substr(2,8)+(new Date).getTime()},t.prototype.init=function(t){return this.setting=e.extend({},this.setting||e.fn.atwho["default"],t),this.view.init(),this.model.reload(this.setting.data)},t.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy(),this.$el.remove()},t.prototype.callDefault=function(){var t,i,r;r=arguments[0],t=2<=arguments.length?c.call(arguments,1):[];try{return o[r].apply(this,t)}catch(t){return i=t,e.error(i+" Or maybe At.js doesn't have function "+r)}},t.prototype.trigger=function(t,e){var i,r;return null==e&&(e=[]),e.push(this),i=this.getOpt("alias"),r=i?t+"-"+i+".atwho":t+".atwho",this.$inputor.trigger(r,e)},t.prototype.callbacks=function(t){return this.getOpt("callbacks")[t]||o[t]},t.prototype.getOpt=function(t){try{return this.setting[t]}catch(t){return t,null}},t.prototype.insertContentFor=function(t){var i,r;return r=this.getOpt("insertTpl"),i=e.extend({},t.data("item-data"),{"atwho-at":this.at}),this.callbacks("tplEval").call(this,r,i,"onInsert")},t.prototype.renderView=function(t){var e;return e=this.getOpt("searchKey"),t=this.callbacks("sorter").call(this,this.query.text,t.slice(0,1001),e),this.view.render(t.slice(0,this.getOpt("limit")))},t.arrayToDefaultHash=function(t){var i,r,n,o;if(!e.isArray(t))return t;for(o=[],i=0,n=t.length;i<n;i++)r=t[i],e.isPlainObject(r)?o.push(r):o.push({name:r});return o},t.prototype.lookUp=function(t){var e,i;return(e=this.catchQuery(t))?(this.app.setContextFor(this.at),(i=this.getOpt("delay"))?this._delayLookUp(e,i):this._lookUp(e),e):(this.expectedQueryCBId=null,e)},t.prototype._delayLookUp=function(t,e){var i,r;return i=Date.now?Date.now():(new Date).getTime(),this.previousCallTime||(this.previousCallTime=i),r=e-(i-this.previousCallTime),0<r&&r<e?(this.previousCallTime=i,this._stopDelayedCall(),this.delayedCallTimeout=setTimeout(function(e){return function(){return e.previousCallTime=0,e.delayedCallTimeout=null,e._lookUp(t)}}(this),e)):(this._stopDelayedCall(),this.previousCallTime!==i&&(this.previousCallTime=0),this._lookUp(t))},t.prototype._stopDelayedCall=function(){if(this.delayedCallTimeout)return clearTimeout(this.delayedCallTimeout),this.delayedCallTimeout=null},t.prototype._generateQueryCBId=function(){return{}},t.prototype._lookUp=function(t){var i;return i=function(t,e){if(t===this.expectedQueryCBId)return e&&e.length>0?this.renderView(this.constructor.arrayToDefaultHash(e)):this.view.hide()},this.expectedQueryCBId=this._generateQueryCBId(),this.model.query(t.text,e.proxy(i,this,this.expectedQueryCBId))},t}(),l=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return p(i,t),i.prototype.catchQuery=function(){var t,e,i,r,n,o;return e=this.$inputor.val(),t=this.$inputor.caret("pos",{iframe:this.app.iframe}),o=e.slice(0,t),r=this.callbacks("matcher").call(this,this.at,o,this.getOpt("startWithSpace")),"string"==typeof r&&r.length<=this.getOpt("maxLen",20)?(n=t-r.length,i=n+r.length,this.pos=n,r={text:r,headPos:n,endPos:i},this.trigger("matched",[this.at,r.text])):(r=null,this.view.hide()),this.query=r},i.prototype.rect=function(){var t,i,r;if(t=this.$inputor.caret("offset",this.pos-1,{iframe:this.app.iframe}))return this.app.iframe&&!this.app.iframeAsRoot&&(i=e(this.app.iframe).offset(),t.left+=i.left,t.top+=i.top),r=this.app.document.selection?0:2,{left:t.left,top:t.top,bottom:t.top+t.height+r}},i.prototype.insert=function(t){var e,i,r,n,o;return e=this.$inputor,i=e.val(),r=i.slice(0,Math.max(this.query.headPos-this.at.length,0)),n=""===(n=this.getOpt("suffix"))?n:n||" ",t+=n,o=""+r+t+i.slice(this.query.endPos||0),e.val(o),e.caret("pos",r.length+t.length,{iframe:this.app.iframe}),e.is(":focus")||e.focus(),e.change()},i}(n),s=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return p(i,t),i.prototype._getRange=function(){var t;if(t=this.app.window.getSelection(),t.rangeCount>0)return t.getRangeAt(0)},i.prototype._setRange=function(t,i,r){if(null==r&&(r=this._getRange()),r)return i=e(i)[0],"after"===t?(r.setEndAfter(i),r.setStartAfter(i)):(r.setEndBefore(i),r.setStartBefore(i)),r.collapse(!1),this._clearRange(r)},i.prototype._clearRange=function(t){var e;if(null==t&&(t=this._getRange()),e=this.app.window.getSelection(),null==this.ctrl_a_pressed)return e.removeAllRanges(),e.addRange(t)},i.prototype._movingEvent=function(t){var e;return"click"===t.type||(e=t.which)===a.RIGHT||e===a.LEFT||e===a.UP||e===a.DOWN},i.prototype._unwrap=function(t){var i;return t=e(t).unwrap().get(0),(i=t.nextSibling)&&i.nodeValue&&(t.nodeValue+=i.nodeValue,e(i).remove()),t},i.prototype.catchQuery=function(t){var i,r,n,o,s,h,l,u,c,p;if(!this.app.isComposing&&(p=this._getRange())){if(t.which===a.CTRL?this.ctrl_pressed=!0:t.which===a.A?null==this.ctrl_pressed&&(this.ctrl_a_pressed=!0):(delete this.ctrl_a_pressed,delete this.ctrl_pressed),t.which===a.ENTER)return(r=e(p.startContainer).closest(".atwho-query")).contents().unwrap(),r.is(":empty")&&r.remove(),(r=e(".atwho-query",this.app.document)).text(r.text()).contents().last().unwrap(),void this._clearRange();if(/firefox/i.test(navigator.userAgent)){if(e(p.startContainer).is(this.$inputor))return void this._clearRange();t.which===a.BACKSPACE&&p.startContainer.nodeType===document.ELEMENT_NODE&&(u=p.startOffset-1)>=0?(n=p.cloneRange(),n.setStart(p.startContainer,u),e(n.cloneContents()).contents().last().is(".atwho-inserted")&&(s=e(p.startContainer).contents().get(u),this._setRange("after",e(s).contents().last()))):t.which===a.LEFT&&p.startContainer.nodeType===document.TEXT_NODE&&(i=e(p.startContainer.previousSibling),i.is(".atwho-inserted")&&0===p.startOffset&&this._setRange("after",i.contents().last()))}return e(p.startContainer).closest(".atwho-inserted").addClass("atwho-query").siblings().removeClass("atwho-query"),(r=e(".atwho-query",this.app.document)).length>0&&r.is(":empty")&&0===r.text().length&&r.remove(),this._movingEvent(t)||r.removeClass("atwho-inserted"),n=p.cloneRange(),n.setStart(p.startContainer,0),l=this.callbacks("matcher").call(this,this.at,n.toString(),this.getOpt("startWithSpace")),0===r.length&&"string"==typeof l&&(o=p.startOffset-this.at.length-l.length)>=0&&(p.setStart(p.startContainer,o),r=e("<span/>",this.app.document).attr(this.getOpt("editableAtwhoQueryAttrs")).addClass("atwho-query"),p.surroundContents(r.get(0)),h=r.contents().last().get(0),/firefox/i.test(navigator.userAgent)?(p.setStart(h,h.length),p.setEnd(h,h.length),this._clearRange(p)):this._setRange("after",h,p)),"string"==typeof l&&l.length<=this.getOpt("maxLen",20)?(c={text:l,el:r},this.trigger("matched",[this.at,c.text]),this.query=c):(this.view.hide(),this.query={el:r},r.text().indexOf(this.at)>=0&&(this._movingEvent(t)&&r.hasClass("atwho-inserted")?r.removeClass("atwho-query"):!1!==this.callbacks("afterMatchFailed").call(this,this.at,r)&&this._setRange("after",this._unwrap(r.text(r.text()).contents().first()))),null)}},i.prototype.rect=function(){var t,i;return i=this.query.el.offset(),this.app.iframe&&!this.app.iframeAsRoot&&(t=e(this.app.iframe).offset(),i.left+=t.left-this.$inputor.scrollLeft(),i.top+=t.top-this.$inputor.scrollTop()),i.bottom=i.top+this.query.el.height(),i},i.prototype.insert=function(t){var e,i,r;return i=""===(i=this.getOpt("suffix"))?i:i||"\xa0",this.query.el.removeClass("atwho-query").addClass("atwho-inserted").html(t),(e=this._getRange())&&(e.setEndAfter(this.query.el[0]),e.collapse(!1),e.insertNode(r=this.app.document.createTextNode(i)),this._setRange("after",r,e)),this.$inputor.is(":focus")||this.$inputor.focus(),this.$inputor.change()},i}(n),h=function(){function t(t){this.context=t,this.at=this.context.at,this.storage=this.context.$inputor}return t.prototype.destroy=function(){return this.storage.data(this.at,null)},t.prototype.saved=function(){return this.fetch()>0},t.prototype.query=function(t,e){var i,r,n;return r=this.fetch(),n=this.context.getOpt("searchKey"),r=this.context.callbacks("filter").call(this.context,t,r,n)||[],i=this.context.callbacks("remoteFilter"),r.length>0||!i&&0===r.length?e(r):i.call(this.context,t,e)},t.prototype.fetch=function(){return this.storage.data(this.at)||[]},t.prototype.save=function(t){return this.storage.data(this.at,this.context.callbacks("beforeSave").call(this.context,t||[]))},t.prototype.load=function(t){if(!this.saved()&&t)return this._load(t)},t.prototype.reload=function(t){return this._load(t)},t.prototype._load=function(t){return"string"==typeof t?e.ajax(t,{dataType:"json"}).done(function(t){return function(e){return t.save(e)}}(this)):this.save(t)},t}(),u=function(){function t(t){this.context=t,this.$el=e("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.timeoutID=null,this.context.$el.append(this.$el),this.bindEvent()}return t.prototype.init=function(){var t;return t=this.context.getOpt("alias")||this.context.at.charCodeAt(0),this.$el.attr({id:"at-view-"+t})},t.prototype.destroy=function(){return this.$el.remove()},t.prototype.bindEvent=function(){var t;return t=this.$el.find("ul"),t.on("mouseenter.atwho-view","li",function(i){return t.find(".cur").removeClass("cur"),e(i.currentTarget).addClass("cur")}).on("click.atwho-view","li",function(i){return function(r){return t.find(".cur").removeClass("cur"),e(r.currentTarget).addClass("cur"),i.choose(r),r.preventDefault()}}(this))},t.prototype.visible=function(){return this.$el.is(":visible")},t.prototype.highlighted=function(){return this.$el.find(".cur").length>0},t.prototype.choose=function(t){var e,i;if((e=this.$el.find(".cur")).length&&(i=this.context.insertContentFor(e),this.context.insert(this.context.callbacks("beforeInsert").call(this.context,i,e),e),this.context.trigger("inserted",[e,t]),this.hide(t)),this.context.getOpt("hideWithoutSuffix"))return this.stopShowing=!0},t.prototype.reposition=function(t){var i,r,n,o;return i=this.context.app.iframeAsRoot?this.context.app.window:window,t.bottom+this.$el.height()-e(i).scrollTop()>e(i).height()&&(t.bottom=t.top-this.$el.height()),t.left>(n=e(i).width()-this.$el.width()-5)&&(t.left=n),r={left:t.left,top:t.bottom},null!=(o=this.context.callbacks("beforeReposition"))&&o.call(this.context,r),this.$el.offset(r),this.context.trigger("reposition",[r])},t.prototype.next=function(){var t,e;return t=this.$el.find(".cur").removeClass("cur"),e=t.next(),e.length||(e=this.$el.find("li:first")),e.addClass("cur"),this.scrollTop(Math.max(0,t.innerHeight()*(e.index()+2)-this.$el.height()))},t.prototype.prev=function(){var t,e;return t=this.$el.find(".cur").removeClass("cur"),e=t.prev(),e.length||(e=this.$el.find("li:last")),e.addClass("cur"),this.scrollTop(Math.max(0,t.innerHeight()*(e.index()+2)-this.$el.height()))},t.prototype.scrollTop=function(t){var e;return e=this.context.getOpt("scrollDuration"),e?this.$el.animate({scrollTop:t},e):this.$el.scrollTop(t)},t.prototype.show=function(){var t;return this.stopShowing?void(this.stopShowing=!1):(this.visible()||(this.$el.show(),this.$el.scrollTop(0),this.context.trigger("shown")),(t=this.context.rect())?this.reposition(t):void 0)},t.prototype.hide=function(t,e){var i;if(this.visible())return isNaN(e)?(this.$el.hide(),this.context.trigger("hidden",[t])):(i=function(t){return function(){return t.hide()}}(this),clearTimeout(this.timeoutID),this.timeoutID=setTimeout(i,e))},t.prototype.render=function(t){var i,r,n,o,s,a,h;if(!(e.isArray(t)&&t.length>0))return void this.hide();for(this.$el.find("ul").empty(),r=this.$el.find("ul"),h=this.context.getOpt("displayTpl"),n=0,s=t.length;n<s;n++)o=t[n],o=e.extend({},o,{"atwho-at":this.context.at}),a=this.context.callbacks("tplEval").call(this.context,h,o,"onDisplay"),i=e(this.context.callbacks("highlighter").call(this.context,a,this.context.query.text)),i.data("item-data",o),r.append(i);return this.show(),this.context.getOpt("highlightFirst")?r.find("li:first").addClass("cur"):void 0},t}(),a={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13,CTRL:17,A:65,P:80,N:78,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACKSPACE:8,SPACE:32},o={beforeSave:function(t){return n.arrayToDefaultHash(t)},matcher:function(t,e,i,r){var n,o,s,a,h;return t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),i&&(t="(?:^|\\s)"+t),n=decodeURI("%C3%80"),o=decodeURI("%C3%BF"),h=r?" ":"",a=new RegExp(t+"([A-Za-z"+n+"-"+o+"0-9_"+h+".+-]*)$|"+t+"([^\\x00-\\xff]*)$","gi"),s=a.exec(e),s?s[2]||s[1]:null},filter:function(t,e,i){var r,n,o,s;for(r=[],n=0,s=e.length;n<s;n++)o=e[n],~new String(o[i]).toLowerCase().indexOf(t.toLowerCase())&&r.push(o);return r},remoteFilter:null,sorter:function(t,e,i){var r,n,o,s;if(!t)return e;for(r=[],n=0,s=e.length;n<s;n++)o=e[n],o.atwho_order=new String(o[i]).toLowerCase().indexOf(t.toLowerCase()),o.atwho_order>-1&&r.push(o);return r.sort(function(t,e){return t.atwho_order-e.atwho_order})},tplEval:function(t,e){var i;i=t;try{return"string"!=typeof t&&(i=t(e)),i.replace(/\$\{([^\}]*)\}/g,function(t,i){return e[i]})}catch(t){return t,""}},highlighter:function(t,e){var i;return e?(i=new RegExp(">\\s*(\\w*?)("+e.replace("+","\\+")+")(\\w*)\\s*<","ig"),t.replace(i,function(t,e,i,r){return"> "+e+"<strong>"+i+"</strong>"+r+" <"})):t},beforeInsert:function(t){return t},beforeReposition:function(t){return t},afterMatchFailed:function(){}},i={load:function(t,e){var i;if(i=this.controller(t))return i.model.load(e)},isSelecting:function(){var t;return null!=(t=this.controller())?t.view.visible():void 0},hide:function(){var t;return null!=(t=this.controller())?t.view.hide():void 0},reposition:function(){var t;if(t=this.controller())return t.view.reposition(t.rect())},setIframe:function(t,e){return this.setupRootElement(t,e),null},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},e.fn.atwho=function(t){var n,o;return n=arguments,o=null,this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function(){var s,a;return(a=(s=e(this)).data("atwho"))||s.data("atwho",a=new r(this)),"object"!=typeof t&&t?i[t]&&a?o=i[t].apply(a,Array.prototype.slice.call(n,1)):e.error("Method "+t+" does not exist on jQuery.atwho"):a.reg(t.at,t)}),null!=o?o:this},e.fn.atwho["default"]={at:void 0,alias:void 0,data:null,displayTpl:"<li>${name}</li>",insertTpl:"${atwho-at}${name}",callbacks:o,searchKey:"name",suffix:void 0,hideWithoutSuffix:!1,startWithSpace:!0,highlightFirst:!0,limit:5,maxLen:20,displayTimeout:300,delay:null,spaceSelectsMatch:!1,tabSelectsMatch:!0,editableAtwhoQueryAttrs:{},scrollDuration:150},e.fn.atwho.debug=!1});