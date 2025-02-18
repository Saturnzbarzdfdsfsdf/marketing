import { openModal, closeModal } from './modal.js'

export function initGalleryModal() {
	const galleryModal = document.getElementById('gallery-modal')
	const modalImg = document.getElementById('gallery-modal-img')
	const modalClose = document.getElementById('gallery-modal-close')

	// Костыль: перемещение галереи в body, если необходимо
	if (galleryModal.parentNode !== document.body) {
		document.body.appendChild(galleryModal)
	}

	// Открытие модального окна по клику на изображение галереи
	const galleryImages = document.querySelectorAll('.gallery__inner img')

	galleryImages.forEach(img => {
		img.addEventListener('click', () => {
			modalImg.src = img.src
			openModal(galleryModal)
		})
	})

	// Закрытие модального окна по клику на оверлей или крестик
	galleryModal.addEventListener('click', e => {
		if (e.target === galleryModal || e.target === modalClose) {
			closeModal(galleryModal)
		}
	})

	// Работа кнопки "Показать еще"
	const showMoreButton = document.querySelector('.gallery__button-more')
	const moreGallery = document.querySelector('.gallery__more')

	showMoreButton.addEventListener('click', () => {
		moreGallery.classList.toggle('open')
		showMoreButton.textContent = moreGallery.classList.contains('open')
			? 'Скрыть'
			: 'Показать еще'
	})
}
