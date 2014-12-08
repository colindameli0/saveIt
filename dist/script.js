$(document).ready(function(){

	//MOBILE MENU DISPLAY
	$('.mobile').click(function(e){
		e.preventDefault();
		$('nav ul').slideToggle('fast');
	});


	$('.responsive').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 680,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


});


