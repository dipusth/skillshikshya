let marqueeListWrapper = document.querySelector('.list-marquee'); 
let marqueeList = marqueeListWrapper.querySelector('ul');
console.log('marqueeListWrapper', marqueeListWrapper)

for (let i = 0; i < 2; i++) {
  let clonedList = marqueeList.cloneNode(true); // deep clone with true
  marqueeListWrapper.appendChild(clonedList);   // append as sibling
}

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
