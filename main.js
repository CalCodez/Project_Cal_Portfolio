const getByClass = (arg) => document.getElementsByClassName(arg);
const getById = (arg) => document.getElementById(arg);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);
const append = (parent, child) => parent.appendChild(child);
const toggleClass = (arg1, arg2) => arg1.toggleClass(arg2);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);

const projectData = {
	calTube: {
		title: 'CalTube',
		src: '/assets/project_card_images/Caltube.png',
		description: `Youtube-inspired clone featuring a selection of my favorite artists and videos. This project showcases
              female, male,
              and group artists, along with artist pages that include a sub collection of videos from similar artists.`,
		href: '/projects/my_tube/Project_My_Tube/main.html',
	},
	saas: { title: 'SaaS', src: '#', alt: '', description: '#', href: '#' },
	pokemon: {
		title: 'Pokemon Cards',
		src: '#',
		alt: '',
		description: '#',
		href: '#',
	},
	google: { title: 'Google', src: '#', alt: '', description: '#', href: '#' },
	favz: { title: 'My Favz', src: '#', alt: '', description: '#', href: '#' },
	logins: { title: 'Logins', src: '#', alt: '', description: '#', href: '#' },
	responsive: {
		name: 'Responsive Website',
		img: '#',
		alt: '',
		description: '#',
		href: '#',
	},
	tribute: {
		title: 'Aaliyah Tribute',
		src: '#',
		alt: '',
		description: '#',
		href: '#',
	},
};

const { saas, calTube, pokemon, responsive, favz, logins, tribute, google } =
	projectData;

const snapChatData = {
	image: '',
	class: '',
};

function mobileMenu() {
	if (document.getElementById('homeMenu').style.display == 'block') {
		document.getElementById('homeMenu').style.display = 'none';
	} else {
		document.getElementById('homeMenu').style.display = 'block';
	}
}

function mobileMenu() {
	if (document.getElementById('mainMenu').style.display == 'block') {
		document.getElementById('mainMenu').style.display = 'none';
	} else {
		document.getElementById('mainMenu').style.display = 'block';
	}
}

function displayTopButton() {
	if (window.scrollY > 0) {
		document.getElementById('ptb').style.display = 'block';
	} else {
		document.getElementById('ptb').style.display = 'none';
	}
}
window.addEventListener('scroll', displayTopButton);

//!!Modals Controls
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Function to Open Modal
openModal.forEach((elm) =>
	elm.addEventListener('click', () => {
		const modalId = elm.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);
	})
);

// Function to Close Modal
closeModal.forEach((elm) =>
	elm.addEventListener('click', () => {
		elm.parentElement.parentElement.classList.remove(isVisible);
	})
);

// Function to Close Modal on click outside or escape key
document.addEventListener('click', (e) => {
	if (e.target === document.querySelector('.modal.is-visible')) {
		document.querySelector('.modal.is-visible').classList.remove(isVisible);
	}
});

document.addEventListener('keyup', (e) => {
	if (e.key === 'Escape') {
		document.querySelector('.modal.is-visible').classList.remove(isVisible);
	}
});

document.getElementById('menu-toggler').addEventListener('click', mobileMenu);

//``Root Variable--
const root = document.documentElement;

// Scrolling Marquee looping function
const elmDisplayed = getComputedStyle(root).getPropertyValue(
	'--marquee-elms-displayed'
);
const marqueeContent = document.querySelector('ul.marquee-content');

root.style.setProperty('--marquee-elms', marqueeContent.children.length);

for (let i = 0; i < elmDisplayed; i += 1) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
