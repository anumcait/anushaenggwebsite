(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	sliderAction();
	sliderActionTwo();
    sliderActionThree();
	wowAnimation();
    Splitting();
});



/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}

//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}



/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


/*=============================================
	=          Data Background               =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})


/*=============================================
	=            Header Search            =
=============================================*/
$(".header-search > a").on('click', function () {
	$(".search-popup-wrap").slideToggle();
	$('body').addClass('search-visible');
	return false;
});

$(".search-backdrop").on('click', function () {
	$(".search-popup-wrap").slideUp(500);
	$('body').removeClass('search-visible');
});


/*=============================================
=     Offcanvas Menu      =
=============================================*/
$(".menu-tigger").on("click", function () {
	$(".extra-info,.offcanvas-overly").addClass("active");
	
	return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
	$(".extra-info,.offcanvas-overly").removeClass("active");
});

/*===========================================
	=          Slider Active        =
=============================================*/
function sliderAction() {
    $('.slider-active').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    }).slickAnimation();
};


/*===========================================
	=          Slider Two Active        =
=============================================*/
function sliderActionTwo() {
    $('.slider-active-two').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
	    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        appendArrows: ".slider-nav",
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    }).slickAnimation();
};


/*===========================================
	=          Slider Active        =
=============================================*/
function sliderActionThree() {
    $('.slider-active-three').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    }).slickAnimation();
};


/*=============================================
	=          Active Class               =
=============================================*/
$('.project-item').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.project-item').removeClass('active');
})


/*=============================================
	=          Active Class               =
=============================================*/
$('.team-item, .team-item-two').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.team-item, .team-item-two').removeClass('active');
})


/*=============================================
	=          Active Class               =
=============================================*/
$('.services-item-three').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.services-item-three').removeClass('active');
})


/*=============================================
	=          Active Class               =
=============================================*/
$('.services-item-four').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.services-item-four').removeClass('active');
})
/*=============================================
	=          Active Class               =
=============================================*/
$('.work-item').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.work-item').removeClass('active');
})


/*=============================================
	=    		Brand Active		      =
=============================================*/
$('.brand-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    		project Active		      =
=============================================*/
$('.project-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    		project Active		      =
=============================================*/
$('.project-active-two').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    		project Active		      =
=============================================*/
$('.project-active-three').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
    centerMode: true,
    centerPadding: '0',
	arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    appendArrows: ".project-nav",
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
                centerPadding: '0',
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
                centerPadding: '0',
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
                centerPadding: '0',
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
                centerPadding: '0',
			}
		},
	]
});


/*=============================================
	=    Project Active		    =
=============================================*/
$('.project-active-five').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    testimonial Active		    =
=============================================*/
$('.testimonial-active').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    testimonial Active		    =
=============================================*/
$('.testimonial-active-two').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    		Machinery Active		      =
=============================================*/
$('.Machinery-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    appendArrows: ".Machinery-nav",
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    		Machinery Active		      =
=============================================*/
$('.related-team-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    appendArrows: ".team-nav",
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});

/*=============================================
	=         services Active           =
=============================================*/
if (jQuery(".services-active").length > 0) {
	let courses = new Swiper(".services-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: false,
		breakpoints: {
			500: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1500: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1800: {
				slidesPerView: 4,
				spaceBetween: 60,
			},
		},
		// If we need pagination
		pagination: {
			el: ".project-swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
            draggable: !0,
            dragSize: 24,
		},
	});
}

/*=============================================
	=    		Odometer Active  	       =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.project-active-four').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.project-active-four').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-item',
		}
	});
	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
$('.product-license li').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}
function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(element => {
        const file = element.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                // Initialize mobile menu functionality once the header is loaded
                if (file === 'header.html') {
                    initMobileMenu(); // Call your mobile menu function here
					activeMenu(); //call activeMenu function here

				}	
            })
            .catch(error => console.error('Error loading file:', error));
    });
}

window.addEventListener('DOMContentLoaded', includeHTML);

// Function to initialize mobile menu functionality
function initMobileMenu() {
    // Add dropdown button for menu items with children
    if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }

    // Mobile Nav Hide/Show functionality
    if ($('.mobile-menu').length) {
        // Copy the main menu into the mobile menu
        var mobileMenuContent = $('.menu-area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        // Dropdown Button functionality for submenus in mobile menu
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(300);
        });

        // Open mobile menu on toggler click
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        // Close mobile menu on backdrop or close button click
        $('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
    }
}

function activeMenu(){
	const currentPath = window.location.pathname.split('/').pop();
					if (currentPath==="index.html"){
					$("#nav-home").addClass("active");
					}
					else if  (currentPath==="about.html"){
						$("#nav-about").addClass("active");
					}
					else if  (currentPath==="services.html"){
						$("#nav-services").addClass("active");
					}
					else if  (currentPath==="services-details.html"){
						$("#nav-services").addClass("active");
					}
					else if  (currentPath==="products.html"){
						$("#nav-products").addClass("active");
					}
					else if  (currentPath==="machinery.html"){
						$("#nav-machinery").addClass("active");
					}
					else if  (currentPath==="gallery.html"){
						$("#nav-gallery").addClass("active");
					}
					else if  (currentPath==="faq.html"){
						$("#nav-faq").addClass("active");
					}
					else if  (currentPath==="contact.html"){
						$("#nav-contact").addClass("active");
					}
					else {
						$("#nav-home").addClass("active");
					}
              
}

// document.addEventListener('DOMContentLoaded', function() {
// // Get the current URL path
// var currentPath = window.location.pathname;
// alert(currentPath);

// // Remove the 'active' class from all menu items
// document.querySelectorAll('.navigation li').forEach(function(item) {
//    item.classList.remove('active');
// });

// // Add the 'active' class based on the current page
// if (currentPath.includes('about.html')) {
//    alert('here'+document.getElementById('nav-about'));
//    document.getElementById('nav-about').classList.add('active');
// } else if (currentPath.includes('services.html') || currentPath.includes('services-details.html')) {
//    document.getElementById('nav-services').classList.add('active');
// } else if (currentPath.includes('project.html')) {
//    document.getElementById('nav-products').classList.add('active');
// } else if (currentPath.includes('machinery.html')) {
//    document.getElementById('nav-machinery').classList.add('active');
// } else if (currentPath.includes('gallery.html')) {
//    document.getElementById('nav-gallery').classList.add('active');
// } else if (currentPath.includes('faq.html')) {
//    document.getElementById('nav-faq').classList.add('active');
// } else if (currentPath.includes('contact.html')) {
//    document.getElementById('nav-contact').classList.add('active');
// } else {
//    document.getElementById('nav-home').classList.add('active');
// }

// });

// document.addEventListener('DOMContentLoaded', function() {
// 	var aboutNav = document.getElementById('nav-about');
// 	if (aboutNav) {
// 		alert('here: ' + aboutNav);
// 	} else {
// 		alert('here: null (Element not found)');
// 	}
// });
// document.addEventListener('DOMContentLoaded', function() {
// 	// Dynamically load the header content using fetch
// 	fetch('header.html')
// 		.then(response => response.text())
// 		.then(data => {
// 			// Insert the loaded HTML content into the DOM
// 			document.getElementById('header-container').innerHTML = data;

// 			// After header is loaded, access the navigation element
// 			var aboutNav = document.getElementById('nav-home');
// 			if (aboutNav) {
// 				alert('here test: ' + aboutNav);
// 				document.getElementById('nav-home').classList.add('active');
// 			} else {
// 				alert('here: null (Element not found)');
// 			}
// 		})
// 		.catch(error => console.error('Error loading header:', error));
// });

//  document.addEventListener('DOMContentLoaded', function() {
//     var currentPath = window.location.pathname;

//     // Add the 'active' class based on the current page
//     if (currentPath.includes('about.html')) {
//         alert('here: ' + $('#nav-about').text()); // Example alert to show it's working
//         $('#nav-about').addClass('active');
//     } else if (currentPath.includes('services.html') || currentPath.includes('services-details.html')) {
//         $('#nav-services').addClass('active');
//     } else if (currentPath.includes('project.html')) {
//         $('#nav-products').addClass('active');
//     } else if (currentPath.includes('machinery.html')) {
//         $('#nav-machinery').addClass('active');
//     } else if (currentPath.includes('gallery.html')) {
//         $('#nav-gallery').addClass('active');
//     } else if (currentPath.includes('faq.html')) {
//         $('#nav-faq').addClass('active');
//     } else if (currentPath.includes('contact.html')) {
//         $('#nav-contact').addClass('active');
//     } else {
//         $('#nav-home').addClass('active');
//     }
// });

})(jQuery);