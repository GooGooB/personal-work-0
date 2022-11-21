$(".show-popup").hover(function(){
    $(".topbar__popup").addClass("show1");
}, 
function(){
    $(".topbar__popup").removeClass("show1");
});

// phone-topbar-js

$("#phone-topbar_icon").on("click", function(){
    $('#first-box').css('right' ,'0px')
});
$("#popup_cancel").on("click", function(){
    $('#first-box').css('right' ,'-100%')
});


$("#phone_libery").on("click", function(){
    $('#phone_libery_box').css('right' ,'-5%')
});
$("#phone_libery_cancel").on("click", function(){
    $('#phone_libery_box').css('right' ,'-105%'),
    $('#first-box').css('right' ,'-100%')
});
$("#phone_libery_back").on("click", function(){
    $('#phone_libery_box').css('right' ,'-105%')
});

$("#phone_store").on("click", function(){
    $('#phone_store_box').css('right' ,'-5%')
});
$("#phone_store_cancel").on("click", function(){
    $('#phone_store_box').css('right' ,'-105%'),
    $('#first-box').css('right' ,'-100%')
});
$("#phone_store_back").on("click", function(){
    $('#phone_store_box').css('right' ,'-105%')
});

$("#phone_about").on("click", function(){
    $('#phone_about_box').css('right' ,'-5%')
});
$("#phone_about_cancel").on("click", function(){
    $('#phone_about_box').css('right' ,'-105%'),
    $('#first-box').css('right' ,'-100%')
});
$("#phone_about_back").on("click", function(){
    $('#phone_about_box').css('right' ,'-105%')
});

$("#phone_login").on("click", function(){
    $('#phone_login_box').css('right' ,'-5%')
});
$("#phone_login_cancel").on("click", function(){
    $('#phone_login_box').css('right' ,'-105%'),
    $('#first-box').css('right' ,'-100%')
});
$("#phone_login_back").on("click", function(){
    $('#phone_login_box').css('right' ,'-105%')
});