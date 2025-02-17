document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.feedback__form')
	const leftBlock = document.querySelector('.feedback__left')
	const titleElement = document.querySelector('.feedback__title')

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
})
