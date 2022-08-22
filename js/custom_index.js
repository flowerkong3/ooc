$(function(){
  // ! 2단 Menu
  $('.lnb>li').mouseenter(function(){
    // $('.lnb>li')
    $('.lnb>li').removeClass('active');
    $(this).addClass('active');
    $('.menu-bg').addClass('active');
  });

  $('.lnb>li').mouseleave(function(){
    // $('.lnb>li')
    $('.lnb>li').removeClass('active');
    $('.menu-bg').removeClass('active');
  });

  // ! Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.lnb').toggleClass('active')
  });

  // ! Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header, .gototop, .trigger>span, .sub-menu').addClass('active');
    }
    else {
      $('header, .gototop, .trigger>span, .sub-menu').removeClass('active');
    };




  });


  // ! Slcik.js
  // * 반응형
  $('.main-banner-slider').slick({
    dots: true,
    infinite: true, /* 무한반복 */
    speed: 300,
    slidesToShow: 1, /* 슬라이드쇼 처음에 1개 보여라 */
    slidesToScroll: 1, /* 스크롤시 1개씩 스크롤 해라 */
    autoplay: true, /* 자동 플레이 */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  
  // ! Sliding jQuery - 클릭시 부드럽게 슬라이딩 되면서 찾아감
  // 구문은 외우고 TODO:$('선택자')와 800=속도(0.8초)를 조절하라
  $('h1, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 800);
    e.preventDefalut();
  });


	// 스크롤 애니메이션
	$(window).scroll(function(){
		fnScrollfade();
	});
	function fnScrollfade(){
		$('.scroll-fade, .items, .delay').each( function(i){
			var bottomObject = $(this).offset().top;
			var bottomWindow = $(window).scrollTop() + $(window).height() / 1;
			
			if( bottomWindow >= bottomObject ){
				$(this).addClass('fade-in-up');
			}else {
				$(this).removeClass('fade-in-up');
			}
		});
	};
	


	/* Use - Video - Modal */
	$('.use-video i').click(function(){
		$('.use-video-modal').fadeIn();
		$('body').addClass('active');
	});
	$('.use-video-modal i').click(function(){
		$('.use-video-modal').fadeOut();
		$('body').removeClass('active');
	});
	

});