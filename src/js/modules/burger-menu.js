export function initBurgerMenu() {

	const burger = document.getElementById('burger')
	const mobileNav = document.getElementById('mobile-nav')
	const menuItems = mobileNav.querySelectorAll('.header__nav-list li') 

	// Обработчик для бургер-меню
	burger.addEventListener('click', () => {
		mobileNav.classList.toggle('active')
		burger.classList.toggle('active')
	})

	// Обработчик для пунктов меню
	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('active') 
			burger.classList.remove('active') 
		})
	})
}
