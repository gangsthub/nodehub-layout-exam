
// JQuery hamburger Mobile menu
// From scratch

$( document ).ready(function() {
  var hamburger = $('#nav-toggle');
  var menuMobile = $('#main-menu');
  var ulRwd = $('.rwd-toggle');
  hamburger.click(function() {
	hamburger.toggleClass('active');
	var title = 'Show menu';
	if( $(this).hasClass('active')){
	   title = 'Hide menu';
	}
	$(this).attr('title', title);
	menuMobile.toggleClass('hidden-menu');
	ulRwd.toggleClass('rwd-hidden');
	return false;
  });
});
