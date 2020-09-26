$(function() {
  $('[href="https://fukui-channel.com/]').click(function(){return false});
});


$(function(){
  $('.ham').on('click', function(){
    $('.header-ul').toggleClass('is-active');
  });
}());