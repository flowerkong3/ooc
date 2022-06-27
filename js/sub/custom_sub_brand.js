$(function(){


  // ! Slcik.js
  // * 반응형
  $('.pocess-content').slick({
    dots: true,
    infinite: true, /* 무한반복 */
    // speed: 300,
    slidesToShow: 1, /* 슬라이드쇼 처음에 1개 보여라 */
    slidesToScroll: 1, /* 스크롤시 1개씩 스크롤 해라 */
    /* autoplay: true, */ /* 자동 플레이 */
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


  // * Efficacy
  $('.efficacy-btn-pre').click(function(){
    // 텍스트
    $('.efficacy-desc02').removeClass('active')
    $('.efficacy-desc01').removeClass('active')
    // btn 컬러
    $('.efficacy-btn-pre').addClass('active')
    $('.efficacy-btn-next').removeClass('on')
    
  });
  $('.efficacy-btn-next').click(function(){
    // 텍스트
    $('.efficacy-desc02').addClass('active')
    $('.efficacy-desc01').addClass('active')
    // btn 컬러
    $('.efficacy-btn-pre').removeClass('active')
    $('.efficacy-btn-next').addClass('on')
  });
  



});