/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/
!function(t){function e(e,o,r,s,a){function l(){h.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),o&&n(o,r,s,a),a.startOrder=[],a.newOrder=[],a.origSort=[],a.checkSort=[],d.removeStyle(a.prefix+"filter, filter, "+a.prefix+"transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum"),window.atob||d.css({display:"none",opacity:"0"}),h.removeStyle(a.prefix+"transition, transition, "+a.prefix+"perspective, perspective, "+a.prefix+"perspective-origin, perspective-origin, "+(a.resizeContainer?"height":"")),"list"==a.layoutMode?(m.css({display:a.targetDisplayList,opacity:"1"}),a.origDisplay=a.targetDisplayList):(m.css({display:a.targetDisplayGrid,opacity:"1"}),a.origDisplay=a.targetDisplayGrid),a.origLayout=a.layoutMode,setTimeout(function(){if(d.removeStyle(a.prefix+"transition, transition"),a.mixing=!1,"function"==typeof a.onMixEnd){var t=a.onMixEnd.call(this,a);a=t?t:a}})}if(clearInterval(a.failsafe),a.mixing=!0,a.filter=e,"function"==typeof a.onMixStart){var c=a.onMixStart.call(this,a);a=c?c:a}for(var u=a.transitionSpeed,c=0;2>c;c++){var p=0==c?p=a.prefix:"";a.transition[p+"transition"]="all "+u+"ms linear",a.transition[p+"transform"]=p+"translate3d(0,0,0)",a.perspective[p+"perspective"]=a.perspectiveDistance+"px",a.perspective[p+"perspective-origin"]=a.perspectiveOrigin}var f=a.targetSelector,d=s.find(f);d.each(function(){this.data={}});var h=d.parent();h.css(a.perspective),a.easingFallback="ease-in-out","smooth"==a.easing&&(a.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"),"snap"==a.easing&&(a.easing="cubic-bezier(0.77, 0, 0.175, 1)"),"windback"==a.easing&&(a.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",a.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"),"windup"==a.easing&&(a.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",a.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)"),c="list"==a.layoutMode&&null!=a.listEffects?a.listEffects:a.effects,Array.prototype.indexOf&&(a.fade=-1<c.indexOf("fade")?"0":"",a.scale=-1<c.indexOf("scale")?"scale(.01)":"",a.rotateZ=-1<c.indexOf("rotateZ")?"rotate(180deg)":"",a.rotateY=-1<c.indexOf("rotateY")?"rotateY(90deg)":"",a.rotateX=-1<c.indexOf("rotateX")?"rotateX(90deg)":"",a.blur=-1<c.indexOf("blur")?"blur(8px)":"",a.grayscale=-1<c.indexOf("grayscale")?"grayscale(100%)":"");var m=t(),g=t(),v=[],y=!1;"string"==typeof e?v=i(e):(y=!0,t.each(e,function(t){v[t]=i(this)})),"or"==a.filterLogic?(""==v[0]&&v.shift(),1>v.length?g=g.add(s.find(f+":visible")):d.each(function(){var e=t(this);if(y){var n=0;t.each(v,function(){this.length?e.is("."+this.join(", ."))&&n++:n>0&&n++}),n==v.length?m=m.add(e):g=g.add(e)}else e.is("."+v.join(", ."))?m=m.add(e):g=g.add(e)})):(m=m.add(h.find(f+"."+v.join("."))),g=g.add(h.find(f+":not(."+v.join(".")+"):visible"))),e=m.length;var b=t(),x=t(),w=t();if(g.each(function(){var e=t(this);"none"!=e.css("display")&&(b=b.add(e),w=w.add(e))}),m.filter(":visible").length==e&&!b.length&&!o){if(a.origLayout==a.layoutMode)return l(),!1;if(1==m.length)return"list"==a.layoutMode?(s.addClass(a.listClass),s.removeClass(a.gridClass),w.css("display",a.targetDisplayList)):(s.addClass(a.gridClass),s.removeClass(a.listClass),w.css("display",a.targetDisplayGrid)),l(),!1}if(a.origHeight=h.height(),m.length){if(s.removeClass(a.failClass),m.each(function(){var e=t(this);"none"==e.css("display")?x=x.add(e):w=w.add(e)}),a.origLayout!=a.layoutMode&&0==a.animateGridList)return"list"==a.layoutMode?(s.addClass(a.listClass),s.removeClass(a.gridClass),w.css("display",a.targetDisplayList)):(s.addClass(a.gridClass),s.removeClass(a.listClass),w.css("display",a.targetDisplayGrid)),l(),!1;if(!window.atob)return l(),!1;if(d.css(a.clean),w.each(function(){this.data.origPos=t(this).offset()}),"list"==a.layoutMode?(s.addClass(a.listClass),s.removeClass(a.gridClass),x.css("display",a.targetDisplayList)):(s.addClass(a.gridClass),s.removeClass(a.listClass),x.css("display",a.targetDisplayGrid)),x.each(function(){this.data.showInterPos=t(this).offset()}),b.each(function(){this.data.hideInterPos=t(this).offset()}),w.each(function(){this.data.preInterPos=t(this).offset()}),"list"==a.layoutMode?w.css("display",a.targetDisplayList):w.css("display",a.targetDisplayGrid),o&&n(o,r,s,a),e=o)t:if(e=a.origSort,c=a.checkSort,e.length!=c.length)e=!1;else{for(p=0;p<c.length;p++)if(e[p].compare&&!e[p].compare(c[p])||e[p]!==c[p]){e=!1;break t}e=!0}if(e)return l(),!1;for(b.hide(),x.each(function(){this.data.finalPos=t(this).offset()}),w.each(function(){this.data.finalPrePos=t(this).offset()}),a.newHeight=h.height(),o&&n("reset",null,s,a),x.hide(),w.css("display",a.origDisplay),"block"==a.origDisplay?(s.addClass(a.listClass),x.css("display",a.targetDisplayList)):(s.removeClass(a.listClass),x.css("display",a.targetDisplayGrid)),a.resizeContainer&&h.css("height",a.origHeight+"px"),e={},c=0;2>c;c++)p=0==c?p=a.prefix:"",e[p+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,e[p+"filter"]=a.blur+" "+a.grayscale;x.css(e),w.each(function(){var e=this.data,n=t(this);n.hasClass("mix_tohide")?(e.preTX=e.origPos.left-e.hideInterPos.left,e.preTY=e.origPos.top-e.hideInterPos.top):(e.preTX=e.origPos.left-e.preInterPos.left,e.preTY=e.origPos.top-e.preInterPos.top);for(var i={},o=0;2>o;o++){var r=0==o?r=a.prefix:"";i[r+"transform"]="translate("+e.preTX+"px,"+e.preTY+"px)"}n.css(i)}),"list"==a.layoutMode?(s.addClass(a.listClass),s.removeClass(a.gridClass)):(s.addClass(a.gridClass),s.removeClass(a.listClass)),setTimeout(function(){if(a.resizeContainer){for(var e={},n=0;2>n;n++){var i=0==n?i=a.prefix:"";e[i+"transition"]="all "+u+"ms ease-in-out",e.height=a.newHeight+"px"}h.css(e)}for(b.css("opacity",a.fade),x.css("opacity",1),x.each(function(){var e=this.data;e.tX=e.finalPos.left-e.showInterPos.left,e.tY=e.finalPos.top-e.showInterPos.top;for(var n={},i=0;2>i;i++){var o=0==i?o=a.prefix:"";n[o+"transition-property"]=o+"transform, "+o+"filter, opacity",n[o+"transition-timing-function"]=a.easing+", linear, linear",n[o+"transition-duration"]=u+"ms",n[o+"transition-delay"]="0",n[o+"transform"]="translate("+e.tX+"px,"+e.tY+"px)",n[o+"filter"]="none"}t(this).css("-webkit-transition","all "+u+"ms "+a.easingFallback).css(n)}),w.each(function(){var e=this.data;e.tX=0!=e.finalPrePos.left?e.finalPrePos.left-e.preInterPos.left:0,e.tY=0!=e.finalPrePos.left?e.finalPrePos.top-e.preInterPos.top:0;for(var n={},i=0;2>i;i++){var o=0==i?o=a.prefix:"";n[o+"transition"]="all "+u+"ms "+a.easing,n[o+"transform"]="translate("+e.tX+"px,"+e.tY+"px)"}t(this).css("-webkit-transition","all "+u+"ms "+a.easingFallback).css(n)}),e={},n=0;2>n;n++)i=0==n?i=a.prefix:"",e[i+"transition"]="all "+u+"ms "+a.easing+", "+i+"filter "+u+"ms linear, opacity "+u+"ms linear",e[i+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,e[i+"filter"]=a.blur+" "+a.grayscale,e.opacity=a.fade;b.css(e),h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(e){(-1<e.originalEvent.propertyName.indexOf("transform")||-1<e.originalEvent.propertyName.indexOf("opacity"))&&(-1<f.indexOf(".")?t(e.target).hasClass(f.replace(".",""))&&l():t(e.target).is(f)&&l())})},10),a.failsafe=setTimeout(function(){a.mixing&&l()},u+400)}else{if(a.resizeContainer&&h.css("height",a.origHeight+"px"),!window.atob)return l(),!1;b=g,setTimeout(function(){if(h.css(a.perspective),a.resizeContainer){for(var t={},e=0;2>e;e++){var n=0==e?n=a.prefix:"";t[n+"transition"]="height "+u+"ms ease-in-out",t.height=a.minHeight+"px"}h.css(t)}if(d.css(a.transition),g.length){for(t={},e=0;2>e;e++)n=0==e?n=a.prefix:"",t[n+"transform"]=a.scale+" "+a.rotateX+" "+a.rotateY+" "+a.rotateZ,t[n+"filter"]=a.blur+" "+a.grayscale,t.opacity=a.fade;b.css(t),h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(t){(-1<t.originalEvent.propertyName.indexOf("transform")||-1<t.originalEvent.propertyName.indexOf("opacity"))&&(s.addClass(a.failClass),l())})}else a.mixing=!1},10)}}function n(e,n,i,o){function r(t,n){var i=isNaN(1*t.attr(e))?t.attr(e).toLowerCase():1*t.attr(e),o=isNaN(1*n.attr(e))?n.attr(e).toLowerCase():1*n.attr(e);return o>i?-1:i>o?1:0}function s(t){"asc"==n?a.prepend(t).prepend(" "):a.append(t).append(" ")}i.find(o.targetSelector).wrapAll('<div class="mix_sorter"/>');var a=i.find(".mix_sorter");if(o.origSort.length||a.find(o.targetSelector+":visible").each(function(){t(this).wrap("<s/>"),o.origSort.push(t(this).parent().html().replace(/\s+/g,"")),t(this).unwrap()}),a.empty(),"reset"==e)t.each(o.startOrder,function(){a.append(this).append(" ")});else if("default"==e)t.each(o.origOrder,function(){s(this)});else if("random"==e){if(!o.newOrder.length){for(var l=o.startOrder.slice(),c=l.length,u=c;u--;){var p=parseInt(Math.random()*c),f=l[u];l[u]=l[p],l[p]=f}o.newOrder=l}t.each(o.newOrder,function(){a.append(this).append(" ")})}else if("custom"==e)t.each(n,function(){s(this)});else{if("undefined"==typeof o.origOrder[0].attr(e))return console.log("No such attribute found. Terminating"),!1;o.newOrder.length||(t.each(o.origOrder,function(){o.newOrder.push(t(this))}),o.newOrder.sort(r)),t.each(o.newOrder,function(){s(this)})}o.checkSort=[],a.find(o.targetSelector+":visible").each(function(e){var n=t(this);0==e&&n.attr("data-checksum","1"),n.wrap("<s/>"),o.checkSort.push(n.parent().html().replace(/\s+/g,"")),n.unwrap()}),i.find(o.targetSelector).unwrap()}function i(e){e=e.replace(/\s{2,}/g," ");var n=e.split(" ");return t.each(n,function(t){"all"==this&&(n[t]="mix_all")}),""==n[0]&&n.shift(),n}var o={init:function(i){return this.each(function(){var o={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};i&&t.extend(o,i),this.config=o,t.support.touch="ontouchend"in document,t.support.touch&&(o.isTouch=!0,o.resetDelay=350),o.container=t(this);var r,s=o.container;t:{r=s[0];for(var a=["Webkit","Moz","O","ms"],l=0;l<a.length;l++)if(a[l]+"Transition"in r.style){r=a[l];break t}r="transition"in r.style?"":!1}if(o.prefix=r,o.prefix=o.prefix?"-"+o.prefix.toLowerCase()+"-":"",s.find(o.targetSelector).each(function(){o.origOrder.push(t(this))}),o.sortOnLoad){var c;t.isArray(o.sortOnLoad)?(r=o.sortOnLoad[0],c=o.sortOnLoad[1],t(o.sortSelector+"[data-sort="+o.sortOnLoad[0]+"][data-order="+o.sortOnLoad[1]+"]").addClass("active")):(t(o.sortSelector+"[data-sort="+o.sortOnLoad+"]").addClass("active"),r=o.sortOnLoad,o.sortOnLoad="desc"),n(r,c,s,o)}for(c=0;2>c;c++)r=0==c?r=o.prefix:"",o.transition[r+"transition"]="all "+o.transitionSpeed+"ms ease-in-out",o.perspective[r+"perspective"]=o.perspectiveDistance+"px",o.perspective[r+"perspective-origin"]=o.perspectiveOrigin;for(c=0;2>c;c++)r=0==c?r=o.prefix:"",o.clean[r+"transition"]="none";"list"==o.layoutMode?(s.addClass(o.listClass),o.origDisplay=o.targetDisplayList):(s.addClass(o.gridClass),o.origDisplay=o.targetDisplayGrid),o.origLayout=o.layoutMode,c=o.showOnLoad.split(" "),t.each(c,function(){t(o.filterSelector+'[data-filter="'+this+'"]').addClass("active")}),s.find(o.targetSelector).addClass("mix_all"),"all"==c[0]&&(c[0]="mix_all",o.showOnLoad="mix_all");var u=t();t.each(c,function(){u=u.add(t("."+this))}),u.each(function(){var e=t(this);"list"==o.layoutMode?e.css("display",o.targetDisplayList):e.css("display",o.targetDisplayGrid),e.css(o.transition)}),setTimeout(function(){o.mixing=!0,u.css("opacity","1"),setTimeout(function(){if("list"==o.layoutMode?u.removeStyle(o.prefix+"transition, transition").css({display:o.targetDisplayList,opacity:1}):u.removeStyle(o.prefix+"transition, transition").css({display:o.targetDisplayGrid,opacity:1}),o.mixing=!1,"function"==typeof o.onMixLoad){var t=o.onMixLoad.call(this,o);o=t?t:o}},o.transitionSpeed)},10),o.filter=o.showOnLoad,t(o.sortSelector).bind(o.buttonEvent,function(){if(!o.mixing){var n=t(this),i=n.attr("data-sort"),r=n.attr("data-order");if(n.hasClass("active")){if("random"!=i)return!1}else t(o.sortSelector).removeClass("active"),n.addClass("active");s.find(o.targetSelector).each(function(){o.startOrder.push(t(this))}),e(o.filter,i,r,s,o)}}),t(o.filterSelector).bind(o.buttonEvent,function(){if(!o.mixing){var n=t(this);if(0==o.multiFilter)t(o.filterSelector).removeClass("active"),n.addClass("active"),o.filter=n.attr("data-filter"),t(o.filterSelector+'[data-filter="'+o.filter+'"]').addClass("active");else{var i=n.attr("data-filter");n.hasClass("active")?(n.removeClass("active"),o.filter=o.filter.replace(RegExp("(\\s|^)"+i),"")):(n.addClass("active"),o.filter=o.filter+" "+i)}e(o.filter,null,null,s,o)}})})},toGrid:function(){return this.each(function(){var n=this.config;"grid"!=n.layoutMode&&(n.layoutMode="grid",e(n.filter,null,null,t(this),n))})},toList:function(){return this.each(function(){var n=this.config;"list"!=n.layoutMode&&(n.layoutMode="list",e(n.filter,null,null,t(this),n))})},filter:function(n){return this.each(function(){var i=this.config;i.mixing||(t(i.filterSelector).removeClass("active"),t(i.filterSelector+'[data-filter="'+n+'"]').addClass("active"),e(n,null,null,t(this),i))})},sort:function(n){return this.each(function(){var i=this.config,o=t(this);if(!i.mixing){if(t(i.sortSelector).removeClass("active"),t.isArray(n)){var r=n[0],s=n[1];t(i.sortSelector+'[data-sort="'+n[0]+'"][data-order="'+n[1]+'"]').addClass("active")}else t(i.sortSelector+'[data-sort="'+n+'"]').addClass("active"),r=n,s="desc";o.find(i.targetSelector).each(function(){i.startOrder.push(t(this))}),e(i.filter,r,s,o,i)}})},multimix:function(n){return this.each(function(){var i=this.config,o=t(this);multiOut={filter:i.filter,sort:null,order:"desc",layoutMode:i.layoutMode},t.extend(multiOut,n),i.mixing||(t(i.filterSelector).add(i.sortSelector).removeClass("active"),t(i.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!=typeof multiOut.sort&&(t(i.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),o.find(i.targetSelector).each(function(){i.startOrder.push(t(this))})),i.layoutMode=multiOut.layoutMode,e(multiOut.filter,multiOut.sort,multiOut.order,o,i))})},remix:function(n){return this.each(function(){var i=this.config,o=t(this);i.origOrder=[],o.find(i.targetSelector).each(function(){var e=t(this);e.addClass("mix_all"),i.origOrder.push(e)}),!i.mixing&&"undefined"!=typeof n&&(t(i.filterSelector).removeClass("active"),t(i.filterSelector+'[data-filter="'+n+'"]').addClass("active"),e(n,null,null,o,i))})}};t.fn.mixitup=function(t,e){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void 0:o.init.apply(this,arguments)},t.fn.removeStyle=function(e){return this.each(function(){var n=t(this);e=e.replace(/\s+/g,"");var i=e.split(",");t.each(i,function(){var t=RegExp(this.toString()+"[^;]+;?","g");n.attr("style",function(e,n){return n?n.replace(t,""):void 0})})})}}(jQuery);