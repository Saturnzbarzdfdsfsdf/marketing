export function initBurgerMenu() {
	const burger = document.getElementById('burger')
	const mobileNav = document.getElementById('mobile-nav')

		console.log('click burger');
		
	burger.addEventListener('click', () => {
		mobileNav.classList.toggle('active')
		burger.classList.toggle('active')
	})
}
