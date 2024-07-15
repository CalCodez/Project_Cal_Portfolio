function mobileMenu() {
	if (document.getElementById('homeMenu').style.display == 'block') {
		document.getElementById('homeMenu').style.display = 'none'
	} else {
		document.getElementById('homeMenu').style.display = 'block'
	}
}

function mobileMenu() {
	if (document.getElementById('mainMenu').style.display == 'block') {
		document.getElementById('mainMenu').style.display = 'none'
	} else {
		document.getElementById('mainMenu').style.display = 'block'
	}
}

function displayTopButton() {
	if (window.scrollY > 0) {
		document.getElementById('ptb').style.display = 'block'
	} else {
		document.getElementById('ptb').style.display = 'none'
	}
}
window.addEventListener('scroll', displayTopButton)

//!!Modals Controls
const modalOpen = '[data-open]'
const modalClose = '[data-close]'
const isVisible = 'is-visible'

const openModal = document.querySelectorAll(modalOpen)
const closeModal = document.querySelectorAll(modalClose)

// Function to Open Modal
openModal.forEach(elm =>
	elm.addEventListener('click', () => {
		const modalId = elm.dataset.open
		document.getElementById(modalId).classList.add(isVisible)
	})
)

// Function to Close Modal
closeModal.forEach(elm =>
	elm.addEventListener('click', () => {
		elm.parentElement.parentElement.classList.remove(isVisible)
	})
)

// Function to Close Modal on click outside or escape key
document.addEventListener('click', e => {
	if (e.target === document.querySelector('.modal.is-visible')) {
		document.querySelector('.modal.is-visible').classList.remove(isVisible)
	}
})

document.addEventListener('keyup', e => {
	if (e.key === 'Escape') {
		document.querySelector('.modal.is-visible').classList.remove(isVisible)
	}
})

document.getElementById('menu-toggler').addEventListener('click', mobileMenu)

//``Root Variable--
const root = document.documentElement

// Scrolling Marquee looping function
const elmDisplayed = getComputedStyle(root).getPropertyValue(
	'--marquee-elms-displayed'
)
const marqueeContent = document.querySelector('ul.marquee-content')

root.style.setProperty('--marquee-elms', marqueeContent.children.length)

for (let i = 0; i < elmDisplayed; i += 1) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}
marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
