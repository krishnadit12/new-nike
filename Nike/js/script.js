
// import $ from 'jquery'
$('.toogle').click(function() {
  $('.icon-two').toggleClass('active-two');
});

  $(".toogle").click(function(){
    $(".menu-item").toggleClass("open_menu");
  });
  $(".toogle").click(function(){
    if ($('body, html').scrollTop(0));
    
    $("body").toggleClass("side-bar");
    $(this).toggleClass('open');
  });


window.onscroll = () => {
  const nav = document.querySelector('header');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

$('.popular-row').slick({
infinite: true,
slidesToShow: 4,
slidesToScroll: 2,
nextArrow:0,
prevArrow:0,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 557,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});


$('.about-row').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<img src=".//image/popular/arrow.png" class="Prev-arrow" alt="">',
  nextArrow: '<img src=".//image/popular/arrow-2.png" class="next-arrow" alt="">',
  breakpoint:767,
  settings: {
    dots: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
  }
}
);

  $('.slider-banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:true,
    fade: true,
    cssEase: 'linear',
    nextArrow:0,
    prevArrow:0,
  });
 
  
  $('.slider').slick({
    speed: 200,
    autoplay:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:0,
    prevArrow:0,
    });


  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 1000) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });



    
    $('.view-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
      }
  });
  AOS.init({
      offset: 200,
      duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
  });
  
});