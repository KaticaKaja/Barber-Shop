const nav = $('#nav');
$(window).scroll(function() {
  const y = window.scrollY;
  if(!$('#navbarNav').hasClass('show')) {
    (y > 50) ? nav.css('background', '#000') : nav.css('background', 'transparent');
  }
});
$('#bars').click(function() {
  nav.css('background', '#000');
});
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(e.currentTarget).attr('href'); 
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
});

$(document).ready(function() {
  $('.carousel').carousel({interval: 4000});
});