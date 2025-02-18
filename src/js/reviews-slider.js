import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		modules: [Pagination],

		loop: true,
		slidesPerView: 3,
		spaceBetween: 24,

		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			clickable: false,
		},
		breakpoints: {
			375: {
				slidesPerView: 1,
				// spaceBetween: 20,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			740: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			1080: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	})

	document.querySelector('.btn-next').addEventListener('click', event => {
		event.stopPropagation()
		swiper.slideNext()
		console.log('click');
	})

	document.querySelector('.btn-prev').addEventListener('click', event => {
		event.stopPropagation()
		swiper.slidePrev()
	})
})
