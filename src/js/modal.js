document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('modal')
	const modalContent = modal.querySelector('.modal__content')

	// Функция закрытия модального окна
	function closeModal() {
		modal.classList.remove('active')
		// Очищаем содержимое, оставляя кнопку закрытия
		document.body.classList.remove('no-scroll')
		modalContent.innerHTML = '<button class="modal__close">&times;</button>'
		attachCloseListener()
	}

	// Назначаем обработчик клика на кнопку закрытия (внутри модального окна)
	function attachCloseListener() {
		const closeBtn = modalContent.querySelector('.modal__close')
		if (closeBtn) {
			closeBtn.addEventListener('click', closeModal)
		}
	}
	attachCloseListener()

	// Закрываем модальное окно при клике по оверлею
	modal.addEventListener('click', e => {
		if (e.target === modal || e.target.classList.contains('modal__overlay')) {
			closeModal()
		}
	})

	// Обработчик для всех кнопок "Показать ещё"
	document.querySelectorAll('.card__button-more').forEach(button => {
		button.addEventListener('click', () => {
			const card = button.closest('.card')

			if (card) {
				// Клонируем карточку
				const cardClone = card.cloneNode(true)
				cardClone.className = 'card-modal'

				document.body.classList.add('no-scroll')

				// Находим и удаляем кнопку "Показать ещё" внутри клона
				const modalButton = cardClone.querySelector('.card__button-more')
				if (modalButton) {
					modalButton.remove()
				}

				// Изменяем описание, если нужно
				const description = cardClone.querySelector(
					'.card__description--extension'
				)
				if (description) {
					description.textContent =
						description.textContent +
						' Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возмож... Дополнительная информация, подробное описание, отзывы, фото и т.д.'
				}

				// Очищаем содержимое модального окна, вставляем кнопку закрытия и клонированную карточку
				modalContent.innerHTML = '<button class="modal__close"></button>'
				modalContent.appendChild(cardClone)

				attachCloseListener()
				modal.classList.add('active')
			}
		})
	})
})
