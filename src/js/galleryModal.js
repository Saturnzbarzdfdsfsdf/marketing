document.addEventListener('DOMContentLoaded', function () {
	// Работа с модальным окном галереи
	const galleryModal = document.getElementById('gallery-modal')
	const modalImg = document.getElementById('gallery-modal-img')
	const modalClose = document.getElementById('gallery-modal-close')

	// Функция для предотвращения прокрутки колесиком
	function preventScroll(e) {
		e.preventDefault()
	}

	// Обработчик клика по каждому изображению галереи
	const galleryImages = document.querySelectorAll('.gallery__inner img')
	galleryImages.forEach(function (img) {
		img.addEventListener('click', function () {
			modalImg.src = this.src // Подставляем источник нажатого изображения
			galleryModal.classList.add('open')
			document.body.classList.add('no-scroll') // Добавляем класс для overflow: hidden
			// Блокируем прокрутку колесиком
			document.addEventListener('wheel', preventScroll, { passive: false })
		})
	})

	// Закрытие модального окна по клику на оверлей или крестик
	galleryModal.addEventListener('click', function (e) {
		if (e.target === galleryModal || e.target === modalClose) {
			galleryModal.classList.remove('open')
			document.body.classList.remove('no-scroll')
			// Снимаем блокировку прокрутки колесиком
			document.removeEventListener('wheel', preventScroll)
		}
	})

	// Работа кнопки "Показать еще"
	const showMoreButton = document.querySelector('.gallery__button-more')
	const moreGallery = document.querySelector('.gallery__more')

	showMoreButton.addEventListener('click', function () {
		// Переключаем класс .open для показа/скрытия блока с доп. изображениями
		moreGallery.classList.toggle('open')

		// Опционально: меняем текст кнопки
		if (moreGallery.classList.contains('open')) {
			showMoreButton.textContent = 'Скрыть'
		} else {
			showMoreButton.textContent = 'Показать еще'
		}
	})
})
