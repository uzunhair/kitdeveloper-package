jQuery.noConflict()(function($) {
	'use strict';

	$(document).ready(function () {

        $('.sidebar').theiaStickySidebar({
	      	additionalMarginTop: 30,
	      	additionalMarginBottom: 30
	    });

        // $('body').scrollspy({ target: '#scrollspy' })

		$('li a[href^="#"]').on('click', function() {

		    var id = $(this).attr('href');
		    scrollToAnchor(id);

		    return false;

		});

		function scrollToAnchor(aid){
		    var aTag = $(aid);
		    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
		}
	});
});