// Change Nav style when scrolling 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// Contact buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn')

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => 
    `<span style="transform: rotate(${index * 11}deg)">${character}</span>`).join('');
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599 : {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1023 : {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }
});