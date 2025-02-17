document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('reviews__modal')
	const modalContent = modal.querySelector('.reviews__modal-content')

	//костыль
	if (modal.parentNode !== document.body) {
		document.body.appendChild(modal)
	}

	// Функция расчёта ширины скроллбара
	function getScrollbarWidth() {
		return window.innerWidth - document.documentElement.clientWidth
	}

	// Функция закрытия модального окна
	function closeModal() {
		modal.classList.remove('active')
		document.body.classList.remove('no-scroll')
		document.body.style.paddingRight = '' // Убираем добавленный отступ
		modalContent.innerHTML =
			'<button class="reviews__modal-close">&times;</button>'
		attachCloseListener()
	}

	// Назначаем обработчик для кнопки закрытия
	function attachCloseListener() {
		const closeBtn = modalContent.querySelector('.reviews__modal-close')
		if (closeBtn) {
			closeBtn.addEventListener('click', closeModal)
		}
	}

	attachCloseListener()

	// Закрытие окна при клике вне области контента
	modal.addEventListener('click', e => {
		if (!modalContent.contains(e.target)) {
			closeModal()
		}
	})

	document.querySelectorAll('.card__button-more').forEach(button => {
		button.addEventListener('click', () => {
			const card = button.closest('.card')
			if (card) {
				const cardClone = card.cloneNode(true)
				cardClone.className = 'card-modal'

				// Удаляем кнопку "Показать ещё" из клона
				const modalButton = cardClone.querySelector('.card__button-more')
				if (modalButton) {
					modalButton.remove()
				}

				// Добавляем дополнительное описание, если есть такой элемент
				const description = cardClone.querySelector(
					'.card__description--extension'
				)
				if (description) {
					description.textContent +=
						'Я использовал этот софт для фрилансера и был впечатлен его функциональностью и простотой использования. Программа помогла мне организовать свою работу и улучшить эффективность выполнения задач. Особенно мне нравится, что софт предоставляет возмож... Дополнительная информация, подробное описание, отзывы, фото и т.д.'
				}

				modalContent.innerHTML =
					'<button class="reviews__modal-close">&times;</button>'
				modalContent.appendChild(cardClone)
				attachCloseListener()

				// Вычисляем ширину скроллбара и добавляем отступ к body
				const scrollbarWidth = getScrollbarWidth()
				if (scrollbarWidth) {
					document.body.style.paddingRight = `${scrollbarWidth}px`
				}

				// Блокируем прокрутку страницы и показываем модальное окно
				document.body.classList.add('no-scroll')
				modal.classList.add('active')
			}
		})
	})
})
