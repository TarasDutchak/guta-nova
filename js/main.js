$(document).ready(function () {
    // input mask
    $('.telinput').inputmask({
        "mask": "+ 38 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });

    // header
    const $header = $("header.header")
    let prevScroll
    let lastShowPos

    $(window).on("scroll", function () {
        const scrolled = $(window).scrollTop()

        if (scrolled > 50 && scrolled > prevScroll) {
            $header.addClass("header-out")
            lastShowPos = scrolled
        } else if (scrolled <= Math.max(lastShowPos - 50, 0)) {
            $header.removeClass("header-out")
        }
        prevScroll = scrolled
    })


    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // Таби (головна)
    $('.infrtabsbody .tabcontent').hide();
    $('.infrtabsbody .tabcontent:first').show();
    $('.infrtabsheader button:first').addClass('active');

    $('.infrtabsheader button').click(function () {
        $('.infrtabsheader button').removeClass('active');
        $(this).addClass('active');

        $('.infrtabsbody .tabcontent').hide();

        var index = $(this).index();
        $('.infrtabsbody .tabcontent').eq(index).show();
    });

    // Слайдер
    var swiper = new Swiper(".mySwiper", {
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            type: 'custom',
            renderCustom: function (swiper, current) {
                return `<span class="swiper-pagination-current"> 0${current} </span>`;
            }
        },
    });

    // слайдер - хід будівництва
    var swiper = new Swiper(".buildsl", {
        slidesPerView: 1.4,
        spaceBetween: 30,
        speed: 1000,
        // loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            576: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3.4,
              spaceBetween: 40,
            },
           
          },
    });

    // faq
    $('.faqheader').click(function(){
        $(this).next('.faqbody').slideToggle();
        $(this).toggleClass('active');
    });
  
    $('.telicon').click(function(){
        $('.telwrap').toggle();
    })

    $('.menubtn').click(function(){
        $('.mobmenu-col').addClass('show');
        $('body').addClass('hidden');
    })

    $('.close-menu').click(function(){
        $('.mobmenu-col').removeClass('show');
        $('body').removeClass('hidden');
    })


    

});