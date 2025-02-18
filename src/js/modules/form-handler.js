export function initFeetBackForm() {
	const form = document.querySelector('.feedback__form')
	const leftBlock = document.querySelector('.feedback__left')
	const titleElement = document.querySelector('.feedback__title')

	if (!form || !leftBlock || !titleElement) {
		console.error('Один из элементов не найден!')
		return
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault()

		const name = document.getElementById('name').value.trim()
		const phone = document.getElementById('phone').value.trim()
		const email = document.getElementById('email').value.trim()
		const message = document.getElementById('message').value.trim()

		if (!name || !phone || !email || !message) {
			alert('Пожалуйста, заполните все поля!')
			return
		}

		titleElement.textContent = 'Заявка успешно отправлена!'
		leftBlock.classList.add('feedback__left--success')
	})
}
