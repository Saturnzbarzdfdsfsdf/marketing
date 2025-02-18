
export function getScrollbarWidth() {
	return window.innerWidth - document.documentElement.clientWidth
}

export function openModal(modal) {
	const scrollbarWidth = getScrollbarWidth()
	modal.classList.add('open')
	document.body.classList.add('no-scroll')

	if (scrollbarWidth > 0) {
		document.body.style.paddingRight = `${scrollbarWidth}px`
	}
}

export function closeModal(modal) {
	modal.classList.remove('open')
	document.body.classList.remove('no-scroll')
	document.body.style.paddingRight = ''
}
