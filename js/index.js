$('#banner_section').slick({
  dots: true,
  arrows:false,
  infinite: true,
  autoplay:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
$('.swiper-wrapper').slick({
  arrows:false,
  centerMode: true,
  centerPadding: '0px',
  autoplay:true,
  dots: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 299,
      settings: {

        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    }

  ]
});


$('.image_slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.img_slider',
  responsive: [
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 300,
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
$('.img_slider').slick({
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.image_slider',
  responsive: [
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

  window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky_height", window.scrollY > 100)
  });