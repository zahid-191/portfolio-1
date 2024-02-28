$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:5
      }
  }
})
// end
// mixitup
var confi = document.querySelector('.mixcount');
        var mixer = mixitup(confi);

// animate
        AOS.init({
            useClassNames: true,
            initClassName: false,
            animatedClassName: 'animated',
            duration:2000
          });