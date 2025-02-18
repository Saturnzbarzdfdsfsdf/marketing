// document.addEventListener('DOMContentLoaded', function () {
// 	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// 	const smoother = ScrollSmoother.create({
// 		wrapper: '.wrapper',
// 		content: '.content',
// 		smooth: 1.5,
// 		effects: true,
// 	})

// 	// Функция для обработки кликов по якорным ссылкам
// 	function handleAnchorClick(e) {
// 		e.preventDefault()
// 		const targetID = this.getAttribute('href')
// 		if (targetID && targetID !== '#') {
// 			const targetElem = document.querySelector(targetID)
// 			if (targetElem) {
// 				const headerHeight =
// 					document.querySelector('.header')?.offsetHeight || 0
// 				smoother.scrollTo(targetElem, {
// 					duration: 1.5,
// 					offset: -headerHeight,
// 				})
// 				history.pushState(null, '', targetID)
// 			}
// 		}
// 	}

// 	// Добавляем обработчики кликов по якорным ссылкам
// 	document.querySelectorAll('a[href^="#"]').forEach(link => {
// 		link.addEventListener('click', handleAnchorClick)
// 	})
// })


// import { gsap } from 'gsap'
// import { ScrollTrigger, ScrollSmoother } from 'gsap/ScrollSmoother'

export function initScrollSmoother() {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	const smoother = ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	})

	// Обработка кликов по якорным ссылкам
	document.querySelectorAll('a[href^="#"]').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault()
			const targetID = this.getAttribute('href')
			if (targetID && targetID !== '#') {
				const targetElem = document.querySelector(targetID)
				if (targetElem) {
					const headerHeight =
						document.querySelector('.header')?.offsetHeight || 0
					smoother.scrollTo(targetElem, {
						duration: 1.5,
						offset: -headerHeight,
					})
					history.pushState(null, '', targetID)
				}
			}
		})
	})
}
