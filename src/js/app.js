$(document).ready(function() {
  $('.js_popup').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
		
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });
});
