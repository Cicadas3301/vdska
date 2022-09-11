$(document).ready(function () {
    
    jQuery(".hero_carousel").owlCarousel({
		loop: false,
		autoplay: false,
		autoWidth: false,
		items: 1,
		margin: 0,
		navText: ['<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.43775 11L7.06229 9.28283L4.3749 6.56451L11 6.56451L11 4.08065L4.7256 4.08065L7.06229 1.71719L5.43775 -2.43134e-07L2.40417e-07 5.49991L5.43775 11Z" fill="white"/></svg>', '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56225 11L3.93771 9.28283L6.6251 6.56451L-1.93881e-07 6.56451L-3.02454e-07 4.08065L6.2744 4.08065L3.93771 1.71719L5.56225 -2.43134e-07L11 5.49991L5.56225 11Z" fill="white"/></svg>'],
		responsive: {
			0: {
                nav: false,
                dots: true,
			},
			767: {
                nav: false,
                dots: false,
			},
            1200: {
                nav: true,
                dots: true,
			}
		}	
    });
    
    jQuery(".reviews_items").owlCarousel({
		loop: false,
		autoplay: false,
		autoWidth: false,
		items: 3,
        margin: 28,
        dots: true,
        nav: true,
        navText: ['<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.43775 11L7.06229 9.28283L4.3749 6.56451L11 6.56451L11 4.08065L4.7256 4.08065L7.06229 1.71719L5.43775 -2.43134e-07L2.40417e-07 5.49991L5.43775 11Z" fill="white"/></svg>', '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56225 11L3.93771 9.28283L6.6251 6.56451L-1.93881e-07 6.56451L-3.02454e-07 4.08065L6.2744 4.08065L3.93771 1.71719L5.56225 -2.43134e-07L11 5.49991L5.56225 11Z" fill="white"/></svg>'],
        responsive: {
			0: {
                items: 2,
			},
			767: {
                items: 2,
			},
            991: {
                items: 3, 
			}
		}
	});

    $('.header_lang').on('click', function () {
        $(this).toggleClass('active');
    })

    $('.header_nav-item').on('mouseenter', function () {
        $('.header_toggle').addClass('active');
    })
    $('.header_toggle').on('mouseleave', function () {
        $(this).removeClass('active');
    })

    var btnscroll = $('.js-scroll');
    btnscroll.click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 700
        });
        return false;
    });

    $('.swap_toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.swap_prev, .swap_next').toggleClass('active');
    })

    // $('a[data-fancybox=""').on('click', function () {
	// 	$.fancybox.close();
	// })

    if (window.matchMedia("(max-width: 1199.90px)").matches) {
        $('.services_wrapper, .tarif_items, .news_wrapper').addClass('owl-carousel');
        jQuery(".services_wrapper, .tarif_items").owlCarousel({
            loop: false,
            autoplay: false,
            autoWidth: false,
            items: 3,
            margin: 28,
            dots: true,
            nav: true,
            navText: ['<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.43775 11L7.06229 9.28283L4.3749 6.56451L11 6.56451L11 4.08065L4.7256 4.08065L7.06229 1.71719L5.43775 -2.43134e-07L2.40417e-07 5.49991L5.43775 11Z" fill="white"/></svg>', '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.56225 11L3.93771 9.28283L6.6251 6.56451L-1.93881e-07 6.56451L-3.02454e-07 4.08065L6.2744 4.08065L3.93771 1.71719L5.56225 -2.43134e-07L11 5.49991L5.56225 11Z" fill="white"/></svg>'],
        });
        jQuery(".news_wrapper").owlCarousel({
            loop: false,
            autoplay: false,
            autoWidth: false,
            items: 1.4,
            margin: 30,
            dots: true,
            nav: false,
        });
    }

    if (window.matchMedia("(max-width: 767.90px)").matches) {
        $('.header_nav').appendTo('.header_mob-top');
        $('.header_button').appendTo('.header_mob-bottom');
        $('.header_burger-button, .header_burger-active').on('click', function () {
            $('.header_mob, .header_socials, .header_burger, .header_buttons').toggleClass('active');
            $('body').toggleClass('ov-hidden');
        })
    }

});