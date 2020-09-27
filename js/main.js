/************    burger  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

/*************    ibg    ********************/
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();

/*************       feedback  slick       ************/
$('.feedback-slider').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 1000
});
