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

    // page-switch
    $('.pagenation li').click(function(e){
        e.preventDefault();
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })
    
});