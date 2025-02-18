// document.addEventListener('DOMContentLoaded', function () {
// 	const navigationTitles = document.querySelectorAll(
// 		'.footer__navigation-title'
// 	)

// 	function toggleList(title) {
// 		const navigationBlock = title.closest('.footer__navigation')
// 		const list = navigationBlock.querySelector('.footer__list')

// 		if (list) {
// 			list.classList.toggle('open')
// 			title.classList.toggle('open')
// 		}
// 	}

// 	navigationTitles.forEach(title => {
// 		title.addEventListener('click', function () {
// 			toggleList(this)
// 		})
// 	})
// })


export function initFooterNavigation() {
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
}
