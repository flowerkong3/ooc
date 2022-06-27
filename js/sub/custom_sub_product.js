$(function(){
	
	$('.btn-orange').click(function(){
		$('.tab-orange').addClass('active');
		$('.tab-green').addClass('active');
	});
	$('.btn-green').click(function(){
		$('.tab-orange').removeClass('active');
		$('.tab-green').removeClass('active');
	});
	
	
	// ! Sliding jQuery - 부드럽게 슬라이딩 되면서 찾아감
  // 구문은 외우고 TODO:$('선택자')와 800=속도(0.8초)를 조절하라
  $('.main-anchor a').click(function(e){
    $.scrollTo(this.hash || 0, 800);
    e.preventDefalut();
  });

	
	
	// ! Use - Slcik Slide
  // * 반응형
  $('.use-slickslide').slick({
    dots: true,
    infinite: true, /* 무한반복 */
    // speed: 300,
    slidesToShow: 1, /* 슬라이드쇼 처음에 1개 보여라 */
    slidesToScroll: 1, /* 스크롤시 1개씩 스크롤 해라 */
    autoplay: false, /* 자동 플레이 */
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
    ]
  });
	
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