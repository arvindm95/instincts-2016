$(document).ready(function(){window.menuFun={show:function(i){i||(i=$(".mobile-menu-area .active")),$("body").addClass("active-mobile-menu"),$("#menu-back-btn").addClass("active").siblings().removeClass("active")},hide:function(i){i||(i=$(".mobile-menu-area .active")),$("body").removeClass("active-mobile-menu"),$("#menu-show-btn").addClass("active").siblings().removeClass("active")}},$(".mobile-menu-area > i").on("click",function(i){"menu-show-btn"==$(this).attr("id")?menuFun.show($(this)):menuFun.hide($(this))}),$(".nav-overlay-bg").on("click",function(){menuFun.hide()}),function(){$(".player").each(function(){var i=($(this),{fileSrc:"",imageSrc:"",id:"",width:"100%",height:"100%",aspectratio:""}),t={fileSrc:$(this).data("file-sec")||i.fileSrc,imageSrc:$(this).data("image-src")||i.imageSrc,id:$(this).attr("id"),width:$(this).data("width")||i.width,height:$(this).data("height")||i.height,aspectratio:$(this).data("aspectratio")||i.aspectratio},e=jwplayer(t.id).setup({file:t.fileSrc,image:t.imageSrc,width:t.width,height:t.height,aspectratio:t.aspectratio});e.onPlay(function(i){$(this.container).find(".jwcontrolbar").show(),$(this.container).closest(".post-thumb-wrap").find(".post-meta-info").hide()}).onComplete(function(){$(this.container).find(".jwcontrolbar").hide(),$(this.container).closest(".post-thumb-wrap").find(".post-meta-info").show()})})}(),function(){var i=$(".thumb-slides-container");i.length>0&&(i.each(function(){$(this).owlCarousel({singleItem:!0,autoPlay:!0,stopOnHover:!0,slideSpeed:800,pagination:!0,transitionStyle:"fade"})}),$(".thumb-slides-controller a").click(function(i){i.preventDefault();var t=$(this).closest(".blog-post-thumb-container").children(".thumb-slides-container").data("owlCarousel");$(this).hasClass("left-arrow")?t.prev():t.next()}))}();var i=$(".matx-form-valid");i.length>0&&i.matxSubmitValidate(),$(".sec-full").css("min-height",$(window).height()+"px")}),$(window).load(function(){$("#loader").fadeOut(),new WOW({offset:150,mobile:!1}).init(),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)===!1&&(window.skrolr=skrollr.init({smoothScrolling:!1,forceHeight:!1,easing:{wtf:Math.random,inverted:function(i){return 1-i}}}))});