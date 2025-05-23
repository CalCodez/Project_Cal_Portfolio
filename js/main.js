const getByClass = (arg) => document.getElementsByClassName(arg);
const getById = (arg) => document.getElementById(arg);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);
const append = (parent, child) => parent.appendChild(child);
const remove = (parent, child) => parent.removeChild(child);
const toggleClass = (arg1, arg2) => arg1.classList.toggle(arg2);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);
const removeClass = (arg1, arg2) => arg1.classList.remove(arg2);
const textContent = (arg1, arg2) => (arg1.textContent = arg2);
const innerText = (arg1, arg2) => (arg1.innerText = arg2);
const createElement = (arg) => document.createElement(arg);

const click = 'click';

//SnapChat and About Object
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

//Snapchat and about object destructuring
const { snap, about } = snapAndAbout;

//About Container and Contact Icons Toggles Vars
const navTogglers = getByClass('nav-toggle');
const [aboutToggleMobile, contactToggleMobile, aboutToggle, contactToggle] =
	navTogglers;

//Mobile Menu Vars
const menuToggler = getById('menu-toggler');
const mainMobileMenu = getById('main-mobile-menu');
const aboutIcon = getById('about-icon');
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

//Main Mobile Menu Function
menuToggler.addEventListener(click, function () {
	if (!mainMobileMenu.classList.contains('flexActive')) {
		toggleClass(mainMobileMenu, flexActive);
	} else {
		toggleClass(mainMobileMenu, flexActive);
	}

	mainMobileMenu.addEventListener(click, function () {
		if (mainMobileMenu.classList.contains(flexActive)) {
			toggleClass(mainMobileMenu, flexActive);
		}
	});

	document.addEventListener('keyup', function (event) {
		if (
			event.key === 'Escape' &&
			mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(mainMobileMenu, flexActive);
		}
	});
});

//Contact Icons Var
const contactIcons = getByClass('contact-icons');

//Contact Icons Function
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
				mainMobileMenu.classList.contains(flexActive) &&
				!icons.classList.contains(activeIcons) &&
				!aboutContainer.classList.contains(flexActive)
			) {
				toggleClass(icons, activeIcons);
				toggleClass(mainMobileMenu, flexActive);
			} else if (
				icons.classList.contains(activeIcons) &&
				mainMobileMenu.classList.contains(flexActive) &&
				!aboutContainer.classList.contains(flexActive)
			) {
				toggleClass(mainMobileMenu, flexActive);
				toggleClass(icons, activeIcons);
			} else if (
				!icons.classList.contains(activeIcons) &&
				aboutContainer.classList.contains(flexActive) &&
				!mainMobileMenu.classList.contains(flexActive)
			) {
				toggleClass(icons, activeIcons);
				toggleClass(aboutContainer, flexActive);
				toggleClass(introContainer, flexInactive);
				textContent(aboutToggle, 'About Me');
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
				toggleClass(aboutIcon, 'fa-house');
				toggleClass(aboutIcon, 'fa-user');

				aboutToggleMobile.childNodes.forEach((node) => {
					if (node.nodeType === Node.TEXT_NODE) {
						node.textContent = ' About Me';
					}
				});
			} else {
				toggleClass(icons, activeIcons);
			}
	});

	document.addEventListener('keyup', function (event) {
		if (
			event.key === 'Escape' &&
			mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(mainMobileMenu, flexActive);
		}
	});
};

toggleContactIcons(contactToggleMobile);
toggleContactIcons(contactToggle);

//About Container Vars
const profileImage = getById('main-profile-img');
const aboutContainer = getById('about-text-container');
const introContainer = getById('intro-container');
const aboutDescription = getById('about-description');

//About Container Function

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
			textContent(toggler, 'Home');
		} else if (
			aboutContainer.classList.contains(flexActive) &&
			!mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(aboutContainer, flexActive);
			toggleClass(introContainer, flexInactive);
			profileImage.src = about.mainImg;
			textContent(toggler, 'About Me');
		} else if (
			!aboutContainer.classList.contains(flexActive) &&
			mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(aboutContainer, flexActive);
			toggleClass(introContainer, flexInactive);
			toggleClass(mainMobileMenu, flexActive);
			profileImage.src = about.aboutImg;
			textContent(aboutDescription, about.text);
			toggleClass(aboutIcon, 'fa-user');
			toggleClass(aboutIcon, 'fa-house');

			toggler.childNodes.forEach((node) => {
				if (node.nodeType === Node.TEXT_NODE) {
					node.textContent = ' Home';
				}
			});
		} else if (
			aboutContainer.classList.contains(flexActive) &&
			mainMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(aboutContainer, flexActive);
			toggleClass(introContainer, flexInactive);
			toggleClass(mainMobileMenu, flexActive);
			profileImage.src = about.mainImg;
			toggleClass(aboutIcon, 'fa-user');
			toggleClass(aboutIcon, 'fa-house');
			toggler.childNodes.forEach((node) => {
				if (node.nodeType === Node.TEXT_NODE) {
					node.textContent = ' About Me';
				}
			});
		}
	});
};

toggleAboutContainer(aboutToggleMobile);
toggleAboutContainer(aboutToggle);

//??Snapchat and Email Vars and Function
const popupToggles = getByClass('popupToggle');
const [snapChatToggle, emailToggle] = popupToggles;
const snapChatContainer = getById('snapchat-container');
const emailContainer = getById('email-container');
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

snapAndEmailToggle(snapChatToggle, snapChatContainer, snapCode);
snapAndEmailToggle(emailToggle, emailContainer, email);
