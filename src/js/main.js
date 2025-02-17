gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2,
		effects: true,
	})


}

const burger = document.getElementById('burger')
const mobileNav = document.getElementById('mobile-nav')

burger.addEventListener('click', () => {
	mobileNav.classList.toggle('active')
	burger.classList.toggle('active')
})
