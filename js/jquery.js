
$(document).ready(function(){
  $('.js-scrollTo').on('click', function(){
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    return false;
  });
});
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop || document.documentElement.scrollTop > 650) {
        $('nav ul').css({
          'background-color': 'rgba(40, 40, 40, 0.9)',
          'border-bottom': '3px solid rgba(48, 201, 25, 0.9)',
        });
    } else {
        $('nav ul').css({
          'background-color': 'rgba(158, 158, 158, 0.3)',
          'border-bottom': '3px solid rgba(48, 201, 25, 0.3)'
         });
    }
}
