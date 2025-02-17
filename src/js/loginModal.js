import { getScrollbarWidth } from './shared/getScrollbarWidth'

document.addEventListener('DOMContentLoaded', function () {

	const loginModal = document.getElementById('login-modal')
	const modalClose = document.getElementById('login-modal-close')
	const loginButton = document.querySelector('.header__login-button')

	if (!loginButton || !modalClose || !loginModal) {
		console.error('Один из элементов не найден!')
		return
	}

	// Открытие модального окна
	loginButton.addEventListener('click', function () {
		const scrollbarWidth = getScrollbarWidth()

		loginModal.classList.add('open')
		document.documentElement.classList.add('no-scroll')

		if (scrollbarWidth > 0) {
			document.body.style.paddingRight = `${scrollbarWidth}px`
		}
	})

	// Закрытие модального окна
	function closeModal() {
		loginModal.classList.remove('open')
		document.documentElement.classList.remove('no-scroll')
		document.body.style.paddingRight = ''
	}

	// Закрытие по крестику
	modalClose.addEventListener('click', closeModal)

	// Закрытие по клику на фон
	loginModal.addEventListener('click', function (e) {
		if (!e.target.closest('.login__modal-content')) {
			closeModal()
		}
	})
})
