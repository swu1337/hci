$(document).ready(function() {
	//Hack to add required html classes in order for the library to work
	$('main').addClass('mainbag').children().addClass('mainview');
	$('.mainbag').viewScroller({
		animSpeedMainView: 1800, // Animation speed of mainviews: 0 - fastest
		useScrollbar: false, // Use scrollbar to change views
		changeWhenAnim: false, // Change views when they are changing
		loopMainViews: true, // Change horizontal views (mainviews) in loop mode
		loopSubViews: true	// Change vertical views (subviews) in loop mode
	});
});