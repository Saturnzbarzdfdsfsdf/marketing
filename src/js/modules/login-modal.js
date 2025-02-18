
import { openModal, closeModal } from './modal.js'

export function initLoginModal() {
	const loginModal = document.getElementById('login-modal')
	const modalClose = document.getElementById('login-modal-close')
	const loginButton = document.querySelector('.header__login-button')

	if (!loginButton || !modalClose || !loginModal) {
		console.error('Один из элементов не найден!')
		return
	}

	// Открытие модального окна
	loginButton.addEventListener('click', () => openModal(loginModal))

	// Закрытие по крестику
	modalClose.addEventListener('click', () => closeModal(loginModal))

	// Закрытие по клику на фон
	loginModal.addEventListener('click', e => {
		if (!e.target.closest('.login__modal-content')) {
			closeModal(loginModal)
		}
	})
}
