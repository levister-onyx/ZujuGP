$(function () {
    // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

		// Fade out Text.
		const splashTitle = new TimelineMax().fromTo('.splashTitle', 1, {opacity: 1}, {opacity: 0});
			
		let animate_splashTitle = new ScrollMagic.Scene({
			duration: 800,
			triggerElement: "#doors",
			triggerHook: 0,
		})
		.setTween(splashTitle)
		.setClassToggle('.splashText','fadeIn')
		.addTo(controller)
		.addIndicators({name: "FirstText"});
	
		// Door Animation
		const openSideBySide = new TimelineMax()
		.fromTo(".doorLeft", 1, {x: "0%"}, {x: "-100%", ease: Linear.easeNone}, 0)  // out to left
		.fromTo(".doorRight", 1, {x: "0%"}, {x: "100%", ease: Linear.easeNone}, 0)  // out to right

		let doorScene = new ScrollMagic.Scene({
				triggerElement: "#doors",
				triggerHook: "onLeave",
				duration: "100%"
		})
		.setPin("#doors",  {pushFollowers: true})
		.setTween(openSideBySide)
		.addIndicators({name: "Door"}) // add indicators (requires plugin)
		.addTo(controller);

		// Fade out Text
		const splashText = new TimelineMax()
			.fromTo('.splashText', 1, {opacity: 0}, {opacity: 1})
			
		let animate_splashText = new ScrollMagic.Scene({
			duration: 550,
			triggerElement: "#doors_opened",
			triggerHook: 0.5,
		})
		.setTween(splashText)
		.setPin(".splashText")
		.addTo(controller)
		.addIndicators({name: "SecondText"});
	});

	const mainHeader = new TimelineMax().fromTo(".site-header__wrapper", 1, {x: "0%"}, {x: "-100%", ease: Linear.easeNone}, 0)  // out to left
  