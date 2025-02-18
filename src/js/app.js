
import { initScrollSmoother } from './modules/gsap-scroll-smoother.js'
import { initBurgerMenu } from './modules/burger-menu.js'
import { initTogglePassword } from './modules/toggle-password.js'
import { initHeaderOffset } from './modules/header-offset.js'
import { initFooterNavigation } from './modules/footer-navigation.js'

import { initLoginModal } from './modules/login-modal.js'
import { initGalleryModal } from './modules/gallery-modal.js'
import { initFeetBackForm } from './modules/form-handler.js'
// import { initReviewsModal } from './modules/reviews-modal.js'

document.addEventListener('DOMContentLoaded', () => {
	initLoginModal()
	initGalleryModal()
	initFeetBackForm()
	// initReviewsModal()
	initScrollSmoother()
	initBurgerMenu()
	initTogglePassword()
	initHeaderOffset()
	initFooterNavigation()
})
