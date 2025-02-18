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
