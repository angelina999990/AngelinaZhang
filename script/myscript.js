// JavaScript Document
$(document).ready(function(){
	$(".dropdown").mouseover(function(){
    	$(".dropdown-menu").stop().slideToggle(200);
  	});
	$(".dropdown").mouseout(function(){
		$(".dropdown-menu").stop().slideToggle(200);
	});
	
/*	$("#click_me").click(function(e){
		e.preventDefault();
		$("#me").ScrollTo({
			duration:1500
		});
	});*/
	$("#click_me").click(function(){
		$("html body").animate({scrollTop:0},500);
		return false;
	});
	$(".nav li a").click(function(e){
		e.preventDefault();
		element=$(this).attr("href")
		switch(element){
			case '#home': offset=0; break;
			case '#me': offset=742; break;
			case '#gallery': offset=1422; break;
			default: offset=2064;
		};
		$("html body").animate({scrollTop:offset},1000)	
	});
	
	/************to make gallery img covered by transparent color when mouseout************/
	$(".accordian li").mouseover(function(){
		$("span.bg_canvas",this).css("display","none");
	});
	$(".accordian").mouseout(function(){
		    $(".accordian span.bg_canvas").css("display","block");
	});
		
/*	$(".nav a").click(function(e){
		e.preventDefault();
		element=$(this).attr("href");
		$(element).ScrollTo({
			duration:1000
		});
	});*/
	
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

});