$(function() {

    // back-to-top
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".top").show();
        }else{
            $(".top").hide();
        }
    });

    //scheme-switch
    $('.scheme-list a').click(function(e){
        e.preventDefault();
        $('.scheme-chioce').removeClass('active');
        $(this).addClass('active');

        var selectText = $(this).find('em').text();
        $('.user-num').text(selectText);

        if(selectText != '>25000'){
            $('.price-basic').text(selectText/10000*600);
            $('.price-standard').text(selectText/10000*1600);
        }else{
            $('.price-basic').text(2000);
            $('.price-standard').text(5000);
        }
    })

    //qa-switch
    $('.qa-list .panel-header').click(function(e){
        e.preventDefault();
        $(this).siblings('.panel-content').slideToggle();
        $(this).parent('.panel').siblings('.panel').removeClass('active');
        $(this).parent('.panel').siblings('.panel').find('.panel-content').slideUp('active');
        $(this).parent('.panel').toggleClass('active');
    })
});