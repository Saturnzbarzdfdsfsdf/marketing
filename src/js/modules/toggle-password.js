// const passwordField = document.getElementById('password')
// const togglePassword = document.querySelector('.toggle-password i')

// togglePassword.addEventListener('click', function () {
// 	const type =
// 		passwordField.getAttribute('type') === 'password' ? 'text' : 'password'
// 	passwordField.setAttribute('type', type)

// 	if (this.classList.contains('fa-eye')) {
// 		this.classList.replace('fa-eye', 'fa-eye-slash')
// 	} else {
// 		this.classList.replace('fa-eye-slash', 'fa-eye')
// 	}
// })



export function initTogglePassword() {
	const passwordField = document.getElementById('password')
	const togglePassword = document.querySelector('.toggle-password i')

	togglePassword.addEventListener('click', function () {
		const type =
			passwordField.getAttribute('type') === 'password' ? 'text' : 'password'
		passwordField.setAttribute('type', type)
		this.classList.toggle('fa-eye')
		this.classList.toggle('fa-eye-slash')
	})
}
