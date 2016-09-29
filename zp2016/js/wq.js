/**
 * Created by Administrator on 2016/4/21.
 */
$(function (){
    pageSet();




})
function pageSet(){
    touch.on('.btn1', 'touchstart', function(ev){
        $.fn.fullpage.moveTo(3);
        ev.preventDefault();
    });

    touch.on('.btn2', 'touchstart', function(ev){
        $.fn.fullpage.moveTo(4);
        ev.preventDefault();
    });

    touch.on('.btn3', 'touchstart', function(ev){
        $.fn.fullpage.moveTo(11);
        ev.preventDefault();
    });


    //$('.lastImg').css({height:parseInt($('.lastImg').height())});
}


