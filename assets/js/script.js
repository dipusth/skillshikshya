// const marqueeListWrapper = document.querySelectorAll('.list-marquee'); 
// marqueeListWrapper.forEach(parent => {
//     const childToClone = parent.querySelector('.list');
//     if(childToClone){
//         console.log('yes')
//         for (let i = 0; i < 2; i++) {
//             const clonedChild = childToClone.cloneNode(true)
            
//             parent.appendChild(clonedChild)
//         }
//     }
// })

// let marqueeList = marqueeListWrapper.querySelector('.list');

// for (let i = 0; i < 2; i++) {
//   let clonedList = marqueeList.cloneNode(true); // deep clone with true
//   marqueeListWrapper.appendChild(clonedList);   // append as sibling
// }

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
        video:true,
        lazyLoad:true,
        autoplay:true,
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
