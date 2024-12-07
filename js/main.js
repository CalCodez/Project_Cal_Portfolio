const getByClass = (arg) => document.getElementsByClassName(arg);
const getById = (arg) => document.getElementById(arg);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);
const append = (parent, child) => parent.appendChild(child);
const remove = (parent, child) => parent.removeChild(child);
const toggleClass = (arg1, arg2) => arg1.classList.toggle(arg2);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);
const textContent = (arg1, arg2) => (arg1.textContent = arg2);
const createElement = (arg) => document.createElement(arg);

const click = 'click';

const snapAndAbout = {
	snap: {
		src: './assets/snapcode/Snapchat-206999597.jpg',
		alt: 'CooCalmCollect Snap Code',
	},
	about: {
		mainImg: './assets/Calvin/CalvinC_One.jpg',

		aboutImg: './assets/Calvin/CalvinC_five.jpg',

		text: `I specialize in designing user-friendly websites that are visually appealing and optimized for
						performance.
						My approach
						to web design is to blend creativity with technical expertise, ensuring that each site I create is
						unique,
						engaging, and
						effective. Whether you need a brand-new website or a redesign of your existing one, I am dedicated to
						delivering
						high-quality results that align with your vision and goals.Currently, I am studying Web Development at
						DevSlopes Academy, where I am honing my skills to offer
						professional website
						design services. My goal is to help businesses and individuals create stunning, functional websites that
						not
						only meet
						their needs but also captivate their audiences.`,
		email: 'WWW.CALCODEZ@OUTLOOK.COM',
	},
};

const { snap, about } = snapAndAbout;

const navTogglers = getByClass('nav-toggle');
const [aboutToggleMobile, contactToggleMobile, aboutToggle, contactToggle] =
	navTogglers;

const menuToggler = getById('menu-toggler');
const mainMobileMenu = getById('main-mobile-menu');

menuToggler.addEventListener(click, function () {
	if (!mainMobileMenu.classList.contains('flexActive')) {
		toggleClass(mainMobileMenu, flexActive);
	} else {
		toggleClass(mainMobileMenu, flexActive);
	}
	document.addEventListener('keyup', function (event) {
		if (
			event.key === 'Escape' &&
			mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(mainMobileMenu, flexActive);
		}
	});
});

const contactIcons = getByClass('contact-icons');

const toggleContactIcons = (toggler) => {
	const activeIcons = 'contact-icons-active';
	toggler.addEventListener(click, function () {
		for (let icons of contactIcons)
			if (
				!icons.classList.contains(activeIcons) &&
				!aboutContainer.classList.contains(flexActive) &&
				!mainMobileMenu.classList.contains(flexActive)
			) {
				toggleClass(icons, activeIcons);
			} else if (
				!icons.classList.contains(activeIcons) &&
				aboutContainer.classList.contains(flexActive) &&
				!mainMobileMenu.classList.contains(flexActive)
			) {
				toggleClass(icons, activeIcons);
				toggleClass(aboutContainer, flexActive);
				toggleClass(introContainer, flexInactive);
				profileImage.src = about.mainImg;
			} else if (
				!icons.classList.contains(activeIcons) &&
				aboutContainer.classList.contains(flexActive) &&
				mainMobileMenu.classList.contains(flexActive)
			) {
				toggleClass(icons, activeIcons);
				toggleClass(mainMobileMenu, flexActive);
				toggleClass(aboutContainer, flexActive);
				toggleClass(introContainer, flexInactive);
				profileImage.src = about.mainImg;
			} else if (
				!icons.classList.contains(activeIcons) &&
				!aboutContainer.classList.contains(flexActive) &&
				mainMobileMenu.classList.contains('flexActive')
			) {
				toggleClass(icons, activeIcons);
				toggleClass(mainMobileMenu, flexActive);
				console.log(mainMobileMenu);
			} else {
				toggleClass(icons, activeIcons);
			}
	});
};

toggleContactIcons(contactToggleMobile);

toggleContactIcons(contactToggle);

const profileImage = getById('main-profile-img');
const aboutContainer = getById('about-text-container');
const introContainer = getById('intro-container');
const aboutDescription = getById('about-description');
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const toggleAboutContainer = (toggler) => {
	toggler.addEventListener(click, function () {
		if (
			!aboutContainer.classList.contains(flexActive) &&
			!mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(aboutContainer, flexActive);
			toggleClass(introContainer, flexInactive);
			profileImage.src = about.aboutImg;
			textContent(aboutDescription, about.text);
		} else if (
			!aboutContainer.classList.contains(flexActive) &&
			mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(aboutContainer, flexActive);
			toggleClass(introContainer, flexInactive);
			toggleClass(mainMobileMenu, flexActive);
			profileImage.src = about.aboutImg;
			textContent(aboutDescription, about.text);
		} else {
			toggleClass(aboutContainer, flexActive);
			toggleClass(introContainer, flexInactive);
			profileImage.src = about.mainImg;
		}
	});
};

toggleAboutContainer(aboutToggleMobile);
toggleAboutContainer(aboutToggle);

//??Snapchat and Email Vars and Function
const popupToggles = getByClass('popupToggle');

const [snapChatToggle, emailToggle] = popupToggles;

console.log(popupToggles);

const popUpContainer = getById('popup-container');
const popUpContainer2 = getById('popup-container2');
const snapCode = createElement('img');
snapCode.src = snap.src;
snapCode.alt = snap.alt;

const email = createElement('p');
textContent(email, about.email);

const snapAndEmailToggle = (toggler, parent, child) => {
	toggler.addEventListener(click, function () {
		if (!parent.classList.contains(flexActive)) {
			toggleClass(parent, flexActive);
			append(parent, child);
		} else {
			toggleClass(parent, flexActive);
			remove(parent, child);
		}

		parent.addEventListener(click, function () {
			if (parent.classList.contains(flexActive)) {
				toggleClass(parent, flexActive);
				remove(parent, child);
			}
		});

		document.addEventListener('keyup', function (event) {
			if (event.key === 'Escape' && parent.classList.contains(flexActive)) {
				toggleClass(parent, flexActive);
				remove(parent, child);
			}
		});
	});
};

snapAndEmailToggle(snapChatToggle, popUpContainer, snapCode);
snapAndEmailToggle(emailToggle, popUpContainer2, email);
