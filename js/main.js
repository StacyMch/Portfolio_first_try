$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

(function() {
    'use strict';
    var $message = $('#message');
    
$message.on('mouseenter', function(){
    
    setTimeout(function(){
    $message.find('.outside').html('ДОБРОГО');
    },200);
});

$message.on('mouseleave', function(){
    
    setTimeout(function(){
    $message.find('.outside').html('ДНЯ');
    },250);
});
}());