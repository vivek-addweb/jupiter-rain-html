jQuery(document).ready(function() {

  // Top Treding and New Collection and Enagment ring
  jQuery('.top-treding-section .top-treding-items, .new-collection-section .new-collection-items, .eng-ring-main .wr-ring-slider').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:3,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });

  // Testimonial
  jQuery('.testimonial-section .testimonial-grid').owlCarousel({
    loop: true,
    margin: 60,
    nav: true,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:3,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:1
      },
      767:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });

  // Wedding ring banner slider and Passage slider js
  jQuery('.wr-banner-slider .wr-banner-grid, .wr-passage-main .wr-passage-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 4000,
    autoWidth: false,
    slideBy: 1,
    items:1
  });

  // Men Women ring slider js
  jQuery('.wr-ring-main .wr-ring-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 4000,
    autoWidth: false,
    slideBy: 1,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:3
      },
      992:{
        items:5
      }
    }
  });

  // Engagement ring slider js
  jQuery('.wr-ring-main .wr-ring-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 4000,
    autoWidth: false,
    slideBy: 1,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:3
      },
      992:{
        items:5
      }
    }
  });

  // list view add class
  jQuery('.change-grid-view-wrap .choose-tabs .list-view').click(function(){
    jQuery('.listing-view-grid').addClass('listing-view-list');
  });
  jQuery('.change-grid-view-wrap .choose-tabs .grid-view').click(function(){
    jQuery(this).parents('.change-grid-view-wrap').children('.listing-view-grid').removeClass('listing-view-list');
  });

});