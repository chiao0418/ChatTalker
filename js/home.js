$(function() {

    // back-to-top
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".top").show();
        }else{
            $(".top").hide();
        }
    });

    $('.top').click(function(){
        $('body,html').animate({scrollTop:0}, 200);
    });


    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        slidesPerView: 1,
        breakpoints:{
            768:{
                slidesPerView: 3
            },
            0:{
                slidesPerView: 1
            }
        },
        spaceBetween: 16,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      });
    
});