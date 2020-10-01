$(document).ready(function() {
    $('.slider_img').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        appendArrows: $('#main_page__button'),
        nextArrow: '<button id="back_button" type="button" class="slick-prev slider_section__back_arrow"></button>',
        prevArrow: '<button type="button" class="slick-next slider_section__next_arrow"></button>'
    });

    // $('.tickets_date__sliders').slick({
        
    //     appendArrows: $('#tickets_date__button'),
    //     slidesToShow: 8,
    //     nextArrow: '<button class="tickets_section__back_arrow"></button> ',
    //     prevArrow: '<button class="tickets_section__next_arrow"></button>' 
    // });

    // $('.store_sliders__wrap').slick({
    //     dots: false,
    //     arrows: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     appendArrows: $('#store_slider__button'),
    //     nextArrow: 'first_slider__wrap',
    //     prevArrow: 'second_slider__wrap'
    // })m

    $(".tickets_plus__1").on("click", function(){
        num = parseInt($(".number_of__tickets_1").html())
        num += 1
        $(".number_of__tickets_1").html(num)
    })
    $(".tickets_minus__1").on("click", function(){
        num = parseInt($(".number_of__tickets_1").html())
        if (num  > 0){
            num -= 1
        }
        $(".number_of__tickets_1").html(num)
    })

    $(".tickets_plus__2").on("click", function(){
        num = parseInt($(".number_of__tickets_2").html())
        num += 1
        $(".number_of__tickets_2").html(num)
    })
    $(".tickets_minus__2").on("click", function(){
        num = parseInt($(".number_of__tickets_2").html())
        if (num  > 0){
            num -= 1
        }
        $(".number_of__tickets_2").html(num)
    })

    $(".tickets_plus__3").on("click", function(){
        num = parseInt($(".number_of__tickets_3").html())
        num += 1
        $(".number_of__tickets_3").html(num)
    })
    $(".tickets_minus__3").on("click", function(){
        num = parseInt($(".number_of__tickets_3").html())
        if (num  > 0){
            num -= 1
        }
        $(".number_of__tickets_3").html(num)
    })

    $('.tickets_plus__4').on("click", function(){
        num = parseInt($('.number_of__tickets_4').html())
        num += 1
        $('.number_of__tickets_4').html(num)
    })
    $('.tickets_minus__4').on('click', function(){
        num = parseInt($('.number_of__tickets_4').html())
        if (num > 0) {
            num -= 1
        }
        $('.number_of__tickets_4').html(num)
    })

    $('.tickets_plus__5').on('click', function(){
        num = parseInt($('.number_of__tickets_5').html())
        num += 1
        $('.number_of__tickets_5').html(num)
    })
    $('.tickets_minus__5').on('click', function(){
        num = parseInt($('.number_of__tickets_5').html())
        if (num > 0) {
            num -= 1
        }
        $('.number_of__tickets_5').html(num)
    })

    $('.tickets_buy__cta').on('click', function(){
        alert('Вы забронировали билеты');
        $(".number_of__tickets_1").html(0)
        $(".number_of__tickets_2").html(0)
        $(".number_of__tickets_3").html(0)
        $(".number_of__tickets_4").html(0)
        $(".number_of__tickets_5").html(0)
    })

    $('.burger_wrap').on('click', function(){
        $('.navigation_list').css('display', 'block')
    })
    $('.exit').on('click', function(){
        $('.navigation_list').css('display', 'none')
    })
    
    $('.hours_icon').on('click', function(){
        $('.hours_of__work').css('display', 'block')
    })
    $('.exit_hours').on('click', function(){
        $('.hours_of__work').css('display', 'none')
    })
    
    // modal = document.querySelector('.modal'),
    // close = document.querySelector('.close'),
    // close.addEventListener('click', function() {
    //     modal.style.display = 'none';
    // });
    
    // modal = $('.modal'),
    // close = $('.close'),
    // $(close).on('click', function() {
    //     $(modal).css('display', 'biock')
    // });
}); 




// $(function() {
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//     items: 3,
//     margin: 0,
//     loop: true,
//     nav: true
//     navText: [
//     '<div class="arrow-owl arrow-left first_slider__wrap"><button class="store_section__back_arrow"></button></div>',
//     '<div class="arrow-owl arrow-right second_slider__wrap"><button class="store_section__next_arrow"></button></div>'
//     ]
//   });
//* data-slick='{"slidesToShow": 8, "slidesToScroll": 1}' *//
// });


// $('.single-item').slick();
// dots: false,
// arrows: true,
// nextArrow: '<button class="slider_section__back_arrow"></button>',
// prevArrow: '<button class="slider_section__next_arrow"></button>',
// infinite: false,
// speed: 300,
// slidesToShow: 1,
// slidesToScroll: 1,