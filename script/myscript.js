// JavaScript Document
$(document).ready(function(){
/*	$(".dropdown").mouseover(function(){
    	$(".dropdown-menu").stop().slideToggle(200);
  	});
	$(".dropdown").mouseout(function(){
		$(".dropdown-menu").stop().slideToggle(200);
	});*/
	
	/***********resize <li> & <img> size acoording to different window size****************/

	
	var imgresize = function(){
		/**********get width & height of window and calculate the space for img**********/
		w=$(window).width(); //var w=... declare a local variable while w=... declare a globe variable directly
		h=$(window).height();
		
		/*resize the height of <section> when window size changed to make sure scroll to right place when navbar is clicked*/
		$("section").css("height",h-62+'px');
		
		var img_h=h-62;
		var img_w=img_h/0.666;			
		var img_w_s=(w-img_w)/5;
		var span_w=img_w-30;
		$(".accordian img").css("height",img_h+'px');	//set img height & width to fit window size
		$(".accordian ul li").css("width",w/6+'px');
		$(".title span").css("width",span_w+'px');
		
		/********set img width&height when mouse over it**************/	
		$(".accordian ul li").mouseenter(function(){ 
			$(".accordian ul li").css("width",img_w_s+'px');
			$(this).css("width",img_w+'px');
			
		})
		$(".accordian ul li").mouseleave(function(){
			$(".accordian ul li").css("width",w/6+'px');
		})
	}
	/*initializ the webpage when it's first loaded*/
	imgresize();
	
	$(window).resize(imgresize);
	
	/******when the nav ele is clicked move to related place ********/
/*	h=$(window).height();*/
	$("section").css("height",h-62+'px');	
	$(".nav li a").click(function(e){
//		e.preventDefault();
		e.preventDefault ? e.preventDefault() : e.returnValue = false; //sometimes e.preventDefault() doesn't work for IE
/*		var h=$(window).height();*/ 
		var m=$("#home").css("margin-top");
		element=$(this).attr("href");
		if(element=='#home'){
			offset=0;
		}
		else if(element=='#me'){
			offset=parseInt(h)+parseFloat(m)-62;
		}
		else if(element=='#gallery'){
			offset=2*parseInt(h)+parseFloat(m)-2*62;
		}
		else{
			offset=3*parseInt(h)+parseFloat(m)-2*62;
		}
		
		$("body,html").animate({scrollTop:offset},1000)
			
	});
	
	$("#togallery").click(function(e){
		e.preventDefault();
		var offset=2*parseInt(h)+parseFloat(m)-2*62;alert(offset);
		$("html body").animate({scrollTop:offset},1000);
	})
	
	/************to make gallery img covered by transparent color when mouseout************/
	$(".accordian li").mouseover(function(){
		$("span.bg_canvas",this).css("display","none");
	});
	$(".accordian").mouseout(function(){
		    $(".accordian span.bg_canvas").css("display","block");
	});
	
/*		var path = $.fn.scrollPath("getPath",{
			scrollSpeed:150,
			rotationSpeed:Math.PI/10
		});
		// Move to 'start' element
		path.moveTo(400, 50, {name: "home"});
		// Line to 'description' element
		path.lineTo(400, 630, {name: "me"});
		// Arc down and line to 'syntax'
		path.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true);
		path.lineTo(600, 1600, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "gallery"
		});
		// Continue line to 'scrollbar'
		path.lineTo(1750, 1600, {
			name: "story13"
		});
		// Arc up while rotating
		path.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 });
		// Line to 'rotations'
		path.lineTo(2400, 750, {
			name: "story14"
		});
		// Rotate in place
		path.rotate(3*Math.PI/2, {
			name: "story14"
		});
		// Continue upwards to 'source'
		path.lineTo(2400, -700, {
			name: "story13"
		});
		// Small arc downwards
		path.arc(2250, -700, 150, 0, -Math.PI/2, true);

		//Line to 'follow'
		path.lineTo(1350, -850, {
			name: "gallery"
		});
		// Arc and rotate back to the beginning.
		path.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$("#container").scrollPath({drawPath: false, wrapAround: true});
	
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});*/

	/*********************js for resume pop up**************************/
	var popupStatus = 0;
	function loadup(){
	//loads popup only if it is disabled
		if(popupStatus==0){
			$("#cv img").css({
				"width": w/3,
				"height": h
			});
			$("#cv").css({
				"width": w/3,
				"height": h
			});
			$("#cv").fadeIn("slow");
			popupStatus = 1;
		}
	}
	
	function disable(){
	//disables popup only if it is enabled
		if(popupStatus==1){
			$("#cv").fadeOut("slow");
			popupStatus = 0;
		}
	}
	
	function centering(){
		var margintop = $("#home").css("margin-top");
		var top=0-parseFloat(margintop)-62;
		$("#cv").css({
			"position":"absolute",
			"top":top,
			"left":w/3
		})
		
	}
	
	$("#resume").click(function(e){
		e.preventDefault();
		centering();
		loadup();
	})
	$("#close").click(function(e){
		e.preventDefault();
		disable();
	})
});