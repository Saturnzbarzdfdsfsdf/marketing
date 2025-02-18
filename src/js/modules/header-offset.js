// const headerOffset = getHeaderOffset()

// document.addEventListener('DOMContentLoaded', function () {
// 	const content = document.querySelector('.content')
// 	if (content) {
// 		content.style.paddingTop = `${headerOffset}px`
// 	}
// })


export function initHeaderOffset() {
	function getHeaderOffset() {
		const header = document.querySelector('.header')
		return header ? header.offsetHeight : 0
	}

	const headerOffset = getHeaderOffset()
	const content = document.querySelector('.content')

	if (content) {
		content.style.paddingTop = `${headerOffset}px`
	}
}
