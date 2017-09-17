//= require bootstrap
//= require application

$(function() {
  blinkeffect('#newsFlash');
})

function blinkeffect(selector) {
  $(selector).fadeOut('slow', function() {
    $(this).fadeIn('slow', function() {
      blinkeffect(this);
    });
  });
}
