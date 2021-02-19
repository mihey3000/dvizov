
$(document).ready(function() {
    /* Подключаем табы */
    $('.js-tab-trigger').on('click', function() {
        var tabName = $(this).data('tab'),
            tab = $('.js-tab-content[data-tab="'+tabName+'"]');
    
            $('.js-tab-trigger.active').removeClass('active');
            $(this).addClass('active');
    
            $('.js-tab-content.active').removeClass('active');
            tab.addClass('active');
    });
    
    /* Подключаем аккордеон секция вопрос-ответ */
    $('.accordion-heading').click(function() {
        event.preventDefault();
        $(this).toggleClass('in').next().slideToggle();
        $('.accordion-heading').not(this).removeClass('in').next().slideUp();
    });

    /* Подключаем slick slider */ 
    $('#slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '#prev',
        nextArrow: '#next',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        } 
    ]    
    });
    
    /* Подключаем валидацию формы в модальном окне */
    $('.phone').mask('+7 (999) 999-9999');
    $('#callback-form').validate({
        errorClass: "errors",
        rules: {
            tel: "required"
        },
        messages: {
            tel: "Поле обязательно"
        }

    });
    
    /* Подключаем маску для номера телефона */
    $('#phone').mask('+7 (999) 999-9999');

    /* Подключаем валидацию формы с телефоном */
    $('.sidebar-form').validate( {
        errorClass: "errors",
        rules: {
            tel: "required"
        },
        messages: {
            tel: "Поле обязательно"
        }
    });

    /* Подключаем валидацию формы */
    $('#myform').validate({
        errorClass: "errors",
        rules: {
        name: "required",
        tel: "required",
        email: {
            required: true,
            email: true
            }
        },
        messages: {
            name: false,
            tel: false,
            email:  false
        }

    });

    /* открываем меню по клику */
    $('.mobile-menu-button').click(function() {
        $('.mobile-wrap').slideDown();
    });
    /* закрываем меню по клику */
    $('.close').click(function() {
        $('.mobile-wrap').slideToggle();
    });

    /* плавное открытие модального окна по клику на .button-transparent */
    $('.callback').click(function() {
        $('.wrap-callback').fadeIn(300).css({'display':'flex'});
        $('.mobile-wrap').hide();

    });

    /* закрытие модального окна по клику на .close-callback */
    $('.close-callback').click(function() {
      $('.wrap-callback').css({'display':'none'});
    });
  
    /* плавная прокрутка к якорю по клику на ссылку с классом .button */
    $("a.button").click(function() {
        $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
        duration: 1000,
        easing: "swing"
        });
        return false;
    });




});

