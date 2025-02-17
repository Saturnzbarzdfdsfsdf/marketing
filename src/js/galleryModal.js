document.addEventListener('DOMContentLoaded', function () {
	const galleryModal = document.getElementById('gallery-modal')
	const modalImg = document.getElementById('gallery-modal-img')
	const modalClose = document.getElementById('gallery-modal-close')

	//костыль
	if (galleryModal.parentNode !== document.body) {
		document.body.appendChild(galleryModal)
	}

	// Функция для расчёта ширины скроллбара
	function getScrollbarWidth() {
		return window.innerWidth - document.documentElement.clientWidth
	}

	function preventScroll(e) {
		e.preventDefault()
	}

	// Открытие модального окна по клику на изображение галереи
	const galleryImages = document.querySelectorAll('.gallery__inner img')
	galleryImages.forEach(function (img) {
		img.addEventListener('click', function () {
			modalImg.src = this.src

	
			const scrollbarWidth = getScrollbarWidth()
			if (scrollbarWidth) {
				document.body.style.paddingRight = `${scrollbarWidth}px`
			}

			document.body.classList.add('no-scroll')
			galleryModal.classList.add('open')
			document.addEventListener('wheel', preventScroll, { passive: false })
		})
	})

	// Закрытие модального окна по клику на оверлей или крестик
	galleryModal.addEventListener('click', function (e) {
		if (e.target === galleryModal || e.target === modalClose) {
			galleryModal.classList.remove('open')
			document.body.classList.remove('no-scroll')
			document.body.style.paddingRight = '' 
			document.removeEventListener('wheel', preventScroll)
		}
	})

	// Работа кнопки "Показать еще" для блока с дополнительной галереей
	const showMoreButton = document.querySelector('.gallery__button-more')
	const moreGallery = document.querySelector('.gallery__more')
	showMoreButton.addEventListener('click', function () {
		moreGallery.classList.toggle('open')
		showMoreButton.textContent = moreGallery.classList.contains('open')
			? 'Скрыть'
			: 'Показать еще'
	})
})
