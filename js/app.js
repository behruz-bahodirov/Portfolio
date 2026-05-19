AOS.init();

const footer__text = document.querySelector('.footer__text')
const current_year = new Date().getFullYear()

footer__text.textContent = `@${current_year} Frontend Developer. All rights reserved.`