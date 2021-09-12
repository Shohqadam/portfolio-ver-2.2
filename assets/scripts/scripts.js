
$(window).scroll(function (){
    var posY=window.scrollY; //переменная сколько уже прокрутили

    if (posY > 50){
            $('.header').addClass('header--sticky');			
    } else{
       $('.header').removeClass('header--sticky');				
    }
});

