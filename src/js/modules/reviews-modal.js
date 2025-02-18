// reviews-modal.js
import { openModal, closeModal } from './modal.js'

export function initReviewsModal() {
	const modal = document.getElementById('reviews__modal')

	// Костыль: перемещение слайдера в body, если необходимо
	if (modal.parentNode !== document.body) {
		document.body.appendChild(modal)
	}

	// Функция закрытия модального окна
	function handleClose() {
		closeModal(modal)
		modal.querySelector('.reviews__modal-content').innerHTML =
			'<button class="reviews__modal-close">&times;</button>'
		attachCloseListener()
	}

	function attachCloseListener() {
		const closeBtn = modal.querySelector('.reviews__modal-close')
		if (closeBtn) {
			closeBtn.addEventListener('click', handleClose)
		}
	}

	attachCloseListener()

	// Закрытие окна при клике вне области контента
	modal.addEventListener('click', e => {
		if (!modal.querySelector('.reviews__modal-content').contains(e.target)) {
			handleClose()
		}
	})

	// Обработка кликов по кнопкам "Показать еще"
	document.querySelectorAll('.card__button-more').forEach(button => {
		button.addEventListener('click', () => {
			const card = button.closest('.card')
			if (card) {
				const cardClone = card.cloneNode(true)
				cardClone.className = 'card-modal'
				cardClone.querySelector('.card__button-more')?.remove()

				const description = cardClone.querySelector(
					'.card__description--extension'
				)
				if (description) {
					description.textContent += ' Дополнительная информация...'
				}

				modal.querySelector('.reviews__modal-content').innerHTML =
					'<button class="reviews__modal-close">&times;</button>'
				modal.querySelector('.reviews__modal-content').appendChild(cardClone)
				attachCloseListener()

				openModal(modal)
			}
		})
	})
}
