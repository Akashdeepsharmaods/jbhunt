$(document).ready(function(){
    $('.fright-slider').slick({
      slidesToShow: 2.5,
      slidesToScroll: 2.5,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
  });


  const video = document.getElementById("video");
  const circlePlayButton = document.getElementById("circle-play-b");
  
  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
  
  circlePlayButton.addEventListener("click", togglePlay);
  video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
  });
  video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
  });
  