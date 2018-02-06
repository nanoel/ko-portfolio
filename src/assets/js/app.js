//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
// //=require javascripts/bootstrap/transition.js
//=require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){

	var worksSlider = $('.ba-slider');

	worksSlider.slick({
		slide: '.ba-slide',
		prevArrow: '.ba-slider-prev',
		nextArrow: '.ba-slider-next',
		infinite: true,
		// dots: true,
		speed: 300,
		slidesToShow: 1,
		// variableWidth: true,
		// variableHeight: true

	});

	var worksLinks = $('.ba-work');
	    // On before slide change
	    worksSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
	    	console.log(currentSlide);
	    	worksLinks.removeClass('ba-active');
	    	worksLinks.eq(currentSlide).addClass('ba-active');
	    });

	    worksLinks.on('click', function(e){
	    	e.preventDefault();
	    	var indexS = worksLinks.index(this);
	    	console.log(indexS);
	    	worksSlider.slick('slickGoTo',indexS);
	    });

	})(jQuery);






















