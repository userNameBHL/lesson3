$(function () {
  $(window).resize(function () {
    let wrapWidth = $(window).width(); // 브라우저 화면 너비 실시간
    console.log(wrapWidth);

    if (wrapWidth > 580) {
      // pc 화면에서 실행할 코드 입력

      $('.gnb > li').off();

      $('.gnb > li, .bg').on({
        mouseenter: function () {
          $(this).addClass('on').siblings('li').removeClass('on');
          $('.submenu, .bg').stop().slideDown(500);
        },
        mouseleave: function () {
          $(this).removeClass('on');
          $('.submenu, .bg').stop().slideUp(500);
        },
      });
    } else {
      // 모바일에서 실행될 화면
      $('.gnb > li').off();

      $('.toggle').click(function () {
        $('.gnb').css('right', 0);
      });

      $('.close').click(function () {
        $('.gnb').css('right', '-110%');
      });

      $('.gnb > li').click(function (e) {
        e.preventDefault();
        $(this).children('.submenu').slideToggle(500);
        $(this).siblings('li').children('.submenu').slideUp(500);
      });
    }
  });
  $(window).resize();
});