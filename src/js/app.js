document.addEventListener('DOMContentLoaded', function () {
	// Регистрируем плагины GSAP
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	// Создаем ScrollSmoother
	const smoother = ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
		// normalizeScroll: true,
	})

	// Обработка кликов по якорным ссылкам
	document.querySelectorAll('a[href^="#"]').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault() // Отменяем стандартное поведение ссылки

			const targetID = this.getAttribute('href')
			if (targetID && targetID !== '#') {
				const targetElem = document.querySelector(targetID)
				if (targetElem) {
					// Если у вас есть фиксированный header, учитываем его высоту
					const headerHeight =
						document.querySelector('.header')?.offsetHeight || 0
					smoother.scrollTo(targetElem, {
						duration: 1.5,
						offset: -headerHeight,
					})
					// Обновляем URL без перезагрузки страницы
					history.pushState(null, '', targetID)
				}
			}
		})
	})
})

const burger = document.getElementById('burger')
const mobileNav = document.getElementById('mobile-nav')

burger.addEventListener('click', () => {
	mobileNav.classList.toggle('active')
	burger.classList.toggle('active')
})


// Высотка хедера 
function getHeaderOffset() {
  const header = document.querySelector('.header');
  return header ? header.offsetHeight : 0;
}

document.addEventListener('DOMContentLoaded', function () {
	const headerOffset = getHeaderOffset()
	const content = document.querySelector('.content')
	if (content) {
		content.style.paddingTop = `${headerOffset}px`
	}
})

// пароль скрыт
const passwordField = document.getElementById('password')
const togglePassword = document.querySelector('.toggle-password i')

togglePassword.addEventListener('click', function () {

	const type =
		passwordField.getAttribute('type') === 'password' ? 'text' : 'password'
	passwordField.setAttribute('type', type)

	this.classList.toggle('fa-eye')
	this.classList.toggle('fa-eye-slash')
})

// Футер стрелка
document.addEventListener('DOMContentLoaded', function () {
	const navigationTitles = document.querySelectorAll(
		'.footer__navigation-title'
	)

	navigationTitles.forEach(title => {
		title.addEventListener('click', function () {
			const navigationBlock = this.closest('.footer__navigation')
			const list = navigationBlock.querySelector('.footer__list')

			if (list) {
				list.classList.toggle('open')
				this.classList.toggle('open')
			}
		})
	})
})
