$(function () {
    // wait for document ready
    var controller = new ScrollMagic.Controller();
		// init scrollbar

		/**************** */
		// Fade Out Text //
		/**************** */
		const splashTitle = new TimelineMax().fromTo('.splashTitle', 1, {opacity: 1}, {opacity: 0});
			
		let animate_splashTitle = new ScrollMagic.Scene({
			duration: 800,
			triggerElement: "#doors",
			triggerHook: 0,
		})
		.setTween(splashTitle)
		.setClassToggle('.splashText','fadeIn')
		.addTo(controller);
		//.addIndicators({name: "FirstText"});


		/**************** */
		// Door Animation //
		/**************** */
		const openSideBySide = new TimelineMax()
		.fromTo(".doorLeft", 1, {x: "0%"}, {x: "-100%", ease: Linear.easeNone}, 0)  // out to left
		.fromTo(".doorRight", 1, {x: "0%"}, {x: "100%", ease: Linear.easeNone}, 0);  // out to right

		let doorScene = new ScrollMagic.Scene({
				triggerElement: "#doors",
				triggerHook: "onLeave",
				duration: "100%"
		})
		.addTo(controller)
		.setPin("#doors",  {pushFollowers: true})
		.setTween(openSideBySide)
		.addIndicators({name: "Door"}) // add indicators (requires plugin)
		;
	

	/**************** */
	// Gong Sound //
	/**************** */
	let gong = $('.audio').get(0);
	let gongSound = new ScrollMagic.Scene({
		triggerElement: "#doors",
		triggerHook: "onLeave",
		duration: "100%",
		reverse: false
	})
	.addTo(controller)
	.addIndicators({name: "Gong Sound"}) // add indicators (requires plugin)
	.on('enter', function() {
		gong.volume = 0.1;
		gong.play();
	});
	
	/**************** */
	// Butterfly //
	/**************** */
	// Build ScrollMagic Scene
	let video = document.getElementsByTagName('video')[0];
	let butterflyScene = new ScrollMagic.Scene({
		triggerElement: "#doors",
		triggerHook: "onLeave",
		reverse: false
		//offset: 800
	})
	.setPin(".animation")
	.addIndicators({name: "video play"}) // Add indicators to the scrollbar							
	.addTo(controller)
	.on('enter', function() {
		$(".animation").css("display","block");
		video.play();
		video.playbackRate = 0.8;
		video.on("pause ended",function(){
			$(".animation").css("display","none");
		});
	})
	.on('leave', function(){
		$(".animation").css("display","none");
	});

	$('video').on('ended',function(){ $(this).hide(); });
	video.addEventListener('ended', function() {
		$(".animation").css("display","none"); 
	});

	/**************** */
	// Second Text //
	/**************** */
	const splashText = new TimelineMax().fromTo('.splashText', 1, {opacity: 0}, {opacity: 1});
		
	let animate_splashText = new ScrollMagic.Scene({
		duration: "75%",
		triggerElement: "#doors_opened",
		triggerHook: 0.5
	})
	.setTween(splashText)
	.setPin(".splashText")
	.addTo(controller)
	.addIndicators({name: "SecondText"});

		// let show_menu = new ScrollMagic.Scene({
		// 	triggerElement: ".feature-row ",
		// 	triggerHook: 0.5,
		// })
		// .setClassToggle('.site-header--homepage','show')
		// .reverse(false)
		// .addTo(controller)
		// .addIndicators({name: "MenuScene"});

	var bounce_obj = $(".bounce");
	var duration = 1;
	var tl = new TimelineMax({repeat:-1, repeatDelay:1});
	tl.set(bounce_obj, {y: 0})
	.to(bounce_obj, duration / 4, {y:+20, ease:Power2.easeOut}, "bounceme")
	.to(bounce_obj, duration / 2, { y:0, ease:Bounce.easeOut, delay:duration / 4 }, "bounceme");
  
/*
	let videoMobile = document.getElementById('myVideoMobile');
	videoMobile.play();
	videoMobile.playbackRate = 0.8;
	videoMobile.on("pause ended",function(){
		$(".animation").css("display","none");
	});
*/
});