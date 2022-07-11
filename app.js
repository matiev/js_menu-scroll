let menuLinks = document.querySelectorAll('.menu__link'),
		wrapperItems = document.querySelectorAll('.wrapper__item'),
    vh = '',    
		wrapper = document.querySelector('.wrapper');
    
menuLinks.forEach((item, i) => {
	item.setAttribute('href', `#i${i}`);
})

wrapperItems.forEach((item, i) => {
	item.setAttribute('id', `i${i}`);
})

window.addEventListener('DOMContentLoaded', ch);
window.addEventListener('scroll', ch);

function ch() {
	// console.log(window.scrollY) Сколько прокрутилось
  wrapperItems.forEach((item, i) => {
  vh = item.offsetTop - window.scrollY;
  	if (vh >= -20 && vh < item.offsetHeight / 4) {
      // window.scrollBy(0, vh);
    	menuLinks.forEach(item => item.classList.remove('active'));
      menuLinks[i].classList.add('active')
    }
  })
}