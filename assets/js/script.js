let marqueeListWrapper = document.querySelector('.list-marquee'); 
let marqueeList = marqueeListWrapper.querySelector('ul');
console.log('marqueeListWrapper', marqueeListWrapper)

for (let i = 0; i < 2; i++) {
  let clonedList = marqueeList.cloneNode(true); // deep clone with true
  marqueeListWrapper.appendChild(clonedList);   // append as sibling
}