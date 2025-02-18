// const burger = document.getElementById('burger')
// const mobileNav = document.getElementById('mobile-nav')

// burger.addEventListener('click', () => {
// 	mobileNav.classList.toggle('active')
// 	burger.classList.toggle('active')
// })


// // Высотка хедера 
// function getHeaderOffset() {
//   const header = document.querySelector('.header');
//   return header ? header.offsetHeight : 0;
// }

// document.addEventListener('DOMContentLoaded', function () {
// 	const headerOffset = getHeaderOffset()
// 	const content = document.querySelector('.content')
// 	if (content) {
// 		content.style.paddingTop = `${headerOffset}px`
// 	}
// })

// // пароль скрыт
// const passwordField = document.getElementById('password')
// const togglePassword = document.querySelector('.toggle-password i')

// togglePassword.addEventListener('click', function () {

// 	const type =
// 		passwordField.getAttribute('type') === 'password' ? 'text' : 'password'
// 	passwordField.setAttribute('type', type)

// 	this.classList.toggle('fa-eye')
// 	this.classList.toggle('fa-eye-slash')
// })

// // Футер стрелка
// document.addEventListener('DOMContentLoaded', function () {
// 	const navigationTitles = document.querySelectorAll(
// 		'.footer__navigation-title'
// 	)

// 	navigationTitles.forEach(title => {
// 		title.addEventListener('click', function () {
// 			const navigationBlock = this.closest('.footer__navigation')
// 			const list = navigationBlock.querySelector('.footer__list')

// 			if (list) {
// 				list.classList.toggle('open')
// 				this.classList.toggle('open')
// 			}
// 		})
// 	})
// })


import { initScrollSmoother } from './modules/gsap-scroll-smoother.js'
import { initBurgerMenu } from './modules/burger-menu.js'
import { initTogglePassword } from './modules/toggle-password.js'
import { initHeaderOffset } from './modules/header-offset.js'
import { initFooterNavigation } from './modules/footer-navigation.js'

document.addEventListener('DOMContentLoaded', () => {
	initScrollSmoother()
	initBurgerMenu()
	initTogglePassword()
	initHeaderOffset()
	initFooterNavigation()
})
