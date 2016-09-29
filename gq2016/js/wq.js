/**
 * Created by Administrator on 2016/4/21.
 */
$(function (){
    pageSet();




})
function pageSet(){
    touch.on('.btn1', 'touchstart', function(ev){
        $('.btn1').find('img').attr('src','images/x23_h.png');
        ev.preventDefault();
    });
    touch.on('.btn1', 'touchend', function(ev){
        $('.btn1').find('img').attr('src','images/x23.png');
        $.fn.fullpage.moveTo(3);
        ev.preventDefault();
    });

    touch.on('.btn2', 'touchstart', function(ev){
        $('.btn2').find('img').attr('src','images/x24_h.png');
        ev.preventDefault();
    });
    touch.on('.btn2', 'touchend', function(ev){
        $('.btn2').find('img').attr('src','images/x24.png');
        $.fn.fullpage.moveTo(10);
        ev.preventDefault();
    });

    touch.on('.btn3', 'touchstart', function(ev){
        $('.btn3').find('img').attr('src','images/x25_h.png');
        ev.preventDefault();
    });
    touch.on('.btn3', 'touchend', function(ev){
        $('.btn3').find('img').attr('src','images/x25.png');
        $.fn.fullpage.moveTo(11);
        ev.preventDefault();
    });


    touch.on('.home', 'touchstart', function(ev){
        $.fn.fullpage.moveTo(2);
        ev.preventDefault();
    });

    //$('.lastImg').css({height:parseInt($('.lastImg').height())});
}


