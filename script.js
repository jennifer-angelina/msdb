$('.slider').slick({
    slidesToShow: 8,
    slidesToScroll: 8,
    infinite: false,
    arrows: true,
    prevArrow:"<img class='slick-prev' src='prevArrow.png'>",
    nextArrow:"<img class='slick-next' src='nextArrow.png'>",
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
  });