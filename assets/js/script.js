// Video Section
const videos = document.querySelectorAll("video")
videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    console.log('playing video')
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
  })
})

// owl-carousel
    $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:32,
        center:true,
        autoplayHoverPause:true,
        responsive:{
            768:{
                items:2
            },
            992:{
                items:3
            },
            1199:{
                items:4
            },
            1440:{
                items:6
            }
        }
    })


    const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


// button.addEventListener('click', () => {
//   console.log('menu clicked')
//   menu.classList.toggle('hidden');
// });
