const getByClass = (arg) => document.getElementsByClassName(arg);
const getById = (arg) => document.getElementById(arg);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const toggleClass = (arg1, arg2) => arg1.classList.toggle(arg2);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);
const removeClass = (arg1, arg2) => arg1.classList.remove(arg2);
const textContent = (arg1, arg2) => (arg1.textContent = arg2);
const innerText = (arg1, arg2) => (arg1.innerText = arg2);
const createElement = (arg) => document.createElement(arg);

const click = 'click';
const keyUp = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const projectData = {
	calTube: {
		title: 'CalTube',
		src: '/assets/project_card_images/Caltube.png',
		description: `Youtube-inspired clone featuring a selection of my favorite artists and videos. This project showcases
              female, male,
              and group artists, along with artist pages that include a sub collection of videos from similar artists.`,
		href: '/projects/my_tube/Project_My_Tube/main.html',
	},
	saas: {
		title: 'SaaS',
		src: '/assets/project_card_images/SaaS.png',
		alt: 'SaaS landing page',
		description: `A fully featured website landing page. This was my first project that tested all my skills in HTML and
              CSS. I learned
              to apply elements using advanced HTML, CSS positioning, forms, inputs, and sizing to achieve a
              professional-looking
              website.`,
		href: '/projects/Saas_Project/index.html',
	},
	pokemon: {
		title: 'Pokemon Cards',
		src: '/assets/project_card_images/Pokemon.png',
		alt: 'Pokemon Cards',
		description: `A Pokémon card collection project. This project allows users to collect and release Pokémon by adding
                and
                removing
                their favorite cards to the favorites section`,
		href: '/projects/Js_Project3_ApiWebsite/index.html',
	},
	google: {
		title: 'Google',
		src: '/assets/project_card_images/Google.png',
		alt: 'Google Landing Homepage',
		description: `Google homepage clone built eyeing Google's homepage. The project involved
                replicating the
                layout, styling, to achieve accurate visual match. It’s a straightforward demonstration
                of
                understanding basic HTML, CSS, and link functionality.`,
		href: '/projects/Project_Google_Page/index.html',
	},
	favz: {
		title: 'My Favz',
		src: '/assets/project_card_images/My_Favz.png',
		alt: 'My Favz',
		description: `A beginner project displaying a list of things I favor and don't favor, with each topic providing 3 key
              reasons for its
              inclusion. This project helped me learn HTML tables displayed on the homepage. User-interactive: click the
              topics to
              jump to the pages.`,
		href: '/projects/Project-My_Favz/index.html',
	},
	logins: {
		title: 'Logins',
		src: '/assets/project_card_images/Social_Media.png',
		alt: 'Social Media Logins',
		description: `A social media login page clone project. I successfully created login pages for various platforms,
              optimized for
              desktop, tablet, and mobile. The displayed login page adapts based on the device used, showcasing
              responsive design
              skills across different screen sizes.`,
		href: '/projects/Project_social_pages/index.html',
	},
	responsive: {
		title: 'Responsive Website',
		src: '/assets/project_card_images/Responsive_website.png',
		alt: 'Responsive Website',
		description: `My first mobile-responsive project. I learned to style website elements to make them automatically
              responsive for all
              device types.`,
		href: '/projects/Project_responsive_website/index.html',
	},
	tribute: {
		title: 'Aaliyah Tribute',
		src: '/assets/project_card_images/Aaliyah_tribute.png',
		alt: 'Aaliyah Tribute Project',
		description: `A tribute dedicated to the late Aaliyah. This project features a detailed biography, a curated
              collection of her music and videos, and a page highlighting the movies she starred in. Each section pays homage to her
              impactful career and lasting legacy in entertainment.`,
		href: '/projects/Project_Aaliyah/index.html',
	},

	defaults: {
		title: 'Cal Codez',
		image: './assets/Logo_Images/CalCodez2.png',
		description: 'Select Project From Project Panel',
		gridTitle: 'Click Project Details',
		gridDescription: 'Choose a Project To Get The Details',
	},
};

const {
	saas,
	calTube,
	pokemon,
	responsive,
	favz,
	logins,
	tribute,
	google,
	defaults,
} = projectData;

const snapEmailData = {
	snap: {
		src: './assets/snapcode/Snapchat-206999597.jpg',
		alt: 'CooCalmCollect Snap Code',
	},

	email: 'WWW.CALCODEZ@OUTLOOK.COM',
};

const { snap, email } = snapEmailData;

const projectMenuToggler = getById('project-menu-toggler');
const projectMobileMenu = getById('project-mobile-menu');

const projectContactToggles = getByClass('project-contact-toggles');
const projectContactMenu = getById('project-contact-menu');

projectMenuToggler.addEventListener(click, function () {
	if (
		!projectMobileMenu.classList.contains(flexActive) &&
		!projectContactMenu.classList.contains(flexActive)
	) {
		toggleClass(projectMobileMenu, flexActive);
	} else if (
		!projectMobileMenu.classList.contains(flexActive) &&
		projectContactMenu.classList.contains(flexActive)
	) {
		toggleClass(projectContactMenu, flexActive);
	} else {
		toggleClass(projectMobileMenu, flexActive);
	}

	document.addEventListener(keyUp, function (event) {
		if (
			event.key === 'Escape' &&
			projectMobileMenu.classList.contains(flexActive)
		) {
			removeClass(projectMobileMenu, flexActive);
		}
	});
});

const toggleProjectContactMenu = (toggler) => {
	toggler.addEventListener(click, function () {
		if (
			!projectContactMenu.classList.contains(flexActive) &&
			!projectMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(projectContactMenu, flexActive);
		} else if (
			!projectContactMenu.classList.contains(flexActive) &&
			projectMobileMenu.classList.contains(flexActive)
		) {
			toggleClass(projectMobileMenu, flexActive);
			toggleClass(projectContactMenu, flexActive);
		} else {
			toggleClass(projectContactMenu, flexActive);
		}
	});
	document.addEventListener(keyUp, function (event) {
		if (
			event.key === 'Escape' &&
			projectContactMenu.classList.contains(flexActive)
		) {
			toggleClass(projectContactMenu, flexActive);
		}
	});
};
toggleProjectContactMenu(projectContactToggles[0]);
toggleProjectContactMenu(projectContactToggles[1]);

//``Toggle Project Display Containers Var and Function */

const panelToggle = getById('panel-toggle');
const cardsToggle = getById('cards-toggle');
const gridToggle = getById('grid-toggle');
const panelContainer = getById('project-panel-container');
const cardsContainer = getById('project-card-container');
const gridContainer = getById('project-grid-container');

const displayButtonContainer = select('.display-button-container');
//restrict panel and grid selection for responsive
if (window.innerWidth < 1024) {
	displayButtonContainer.style.display = 'none';
	panelContainer.style.display = 'none';
	cardsContainer.style.display = 'flex';
}

const toggleProjectContainers = (
	targetToggler,
	targetContainer,
	currentContainer,
	currentToggler,
	container2,
	toggler2
) => {
	targetToggler.addEventListener(click, function () {
		if (
			!targetContainer.classList.contains(flexActive) &&
			currentContainer.classList.contains(flexActive)
		) {
			toggleClass(targetContainer, flexActive);
			toggleClass(currentContainer, flexActive);
			toggleClass(targetToggler, flexInactive);
			toggleClass(currentToggler, flexInactive);
		} else if (
			!targetContainer.classList.contains(flexActive) &&
			container2.classList.contains(flexActive)
		) {
			toggleClass(targetContainer, flexActive);
			toggleClass(container2, flexActive);
			toggleClass(targetToggler, flexInactive);
			toggleClass(toggler2, flexInactive);
		}
	});
};

toggleProjectContainers(
	cardsToggle,
	cardsContainer,
	panelContainer,
	panelToggle,
	gridContainer,
	gridToggle
);

toggleProjectContainers(
	gridToggle,
	gridContainer,
	panelContainer,
	panelToggle,
	cardsContainer,
	cardsToggle
);

toggleProjectContainers(
	panelToggle,
	panelContainer,
	cardsContainer,
	cardsToggle,
	gridContainer,
	gridToggle
);

//??Project Panel Vars and Functions

//**Update date the text align for the panel-project-description from center to justify in the function */
//**adjust the font size to the panel-project-description (differ from default and project description) */
//** change the font family (differ from default and project description) */

const projectButtons = getByClass('project-btns');
const projectNameDisplay = getById('project-name-display');
const panelProjectImage = getById('panel-project-image');
const panelProjectDescription = getById('panel-project-description');
const panelProjectLink = getById('panel-project-link');

const [
	calTubeBtn,
	saasBtn,
	pokemonBtn,
	googleBtn,
	favzBtn,
	loginsBtn,
	responsiveBtn,
	tributeBtn,
] = projectButtons;

const alignText = (arg, arg2) => (arg.style.textAlign = arg2);
const fontAdjust = (arg1, arg2) => (arg1.style.fontFamily = arg2);
const fontSize = (arg1, arg2) => (arg1.style.fontSize = arg2);

const panelProjectsDisplay = (toggler, src, title, description, href) => {
	const fontSegoe = 'Segoe UI';
	const alignJustify = 'justify';
	const fontLumanosimo = 'Lumanosimo';
	const alignCenter = 'center';

	toggler.addEventListener(click, function () {
		panelProjectImage.src = src;
		textContent(projectNameDisplay, title);
		textContent(panelProjectDescription, description);
		panelProjectLink.style.display = 'flex';
		panelProjectLink.href = href;

		panelProjectDescription.style.fontFamily = fontSegoe;
		panelProjectDescription.style.fontSize = '1rem';
		panelProjectDescription.style.textAlign = alignJustify;
	});

	document.addEventListener(keyUp, function (event) {
		if (event.key === 'Escape') {
			panelProjectImage.src = defaults.image;
			panelProjectLink.style.display = 'none';

			textContent(projectNameDisplay, defaults.title);
			textContent(panelProjectDescription, defaults.description);
			panelProjectDescription.style.fontFamily = fontLumanosimo;
			panelProjectDescription.style.fontSize = '1.5rem';
			panelProjectDescription.style.textAlign = alignCenter;
		}
	});
};

panelProjectsDisplay(
	calTubeBtn,
	calTube.src,
	calTube.title,
	calTube.description,
	calTube.href
);

panelProjectsDisplay(
	saasBtn,
	saas.src,
	saas.title,
	saas.description,
	saas.href
);
panelProjectsDisplay(
	pokemonBtn,
	pokemon.src,
	pokemon.title,
	pokemon.description,
	pokemon.href
);
panelProjectsDisplay(
	googleBtn,
	google.src,
	google.title,
	google.description,
	google.href
);
panelProjectsDisplay(
	favzBtn,
	favz.src,
	favz.title,
	favz.description,
	favz.href
);
panelProjectsDisplay(
	loginsBtn,
	logins.src,
	logins.title,
	logins.description,
	logins.href
);

panelProjectsDisplay(
	responsiveBtn,
	responsive.src,
	responsive.title,
	responsive.description,
	responsive.href
);

panelProjectsDisplay(
	tributeBtn,
	tribute.src,
	tribute.title,
	tribute.description,
	tribute.href
);

const gridButtons = getByClass('grid-btns');
let gridTitle = getById('grid-title');
let gridDescription = getById('grid-project-description');
const gridLink = getById('grid-link');

textContent(gridTitle, defaults.gridTitle);
textContent(gridDescription, defaults.description);

const gridProjectToggle = (toggler, projectTitle, description, href) => {
	toggler.addEventListener(click, function () {
		textContent(gridTitle, projectTitle);
		textContent(gridDescription, description);
		gridLink.style.display = 'flex';
		gridLink.href = href;
	});

	document.addEventListener(keyUp, function (event) {
		if (event.key === 'Escape') {
			textContent(gridTitle, defaults.gridTitle);
			textContent(gridDescription, defaults.gridDescription);
			gridLink.style.display = 'none';
		}
	});
};

gridProjectToggle(
	gridButtons[0],
	google.title,
	google.description,
	google.href
);

gridProjectToggle(
	gridButtons[1],
	tribute.title,
	tribute.description,
	tribute.href
);

gridProjectToggle(
	gridButtons[2],
	calTube.title,
	calTube.description,
	calTube.href
);
gridProjectToggle(gridButtons[3], saas.title, saas.description, saas.href);
gridProjectToggle(
	gridButtons[4],
	responsive.title,
	responsive.description,
	responsive.href
);
gridProjectToggle(
	gridButtons[5],
	pokemon.title,
	pokemon.description,
	pokemon.href
);
gridProjectToggle(gridButtons[6], favz.title, favz.description, favz.href);
gridProjectToggle(
	gridButtons[7],
	logins.title,
	logins.description,
	logins.href
);

const snapChatContainer = getById('popup-container');
const emailContainer = getById('popup-container2');
const snapImg = createElement('img');
const emailText = createElement('p');

const snapAndEmailToggles = {
	main: {
		snapChat: getById('project-snapchat-toggle'),
		email: getById('project-email-toggle'),
	},
	footer: {
		snapChat: getById('footer-snapChat-toggle'),
		email: getById('footer-email-toggle'),
	},
};

const { main, footer } = snapAndEmailToggles;

snapImg.src = snap.src;
textContent(emailText, email);

const snapEmailContainerToggle = (
	toggler,
	targetContainer,
	checkContainer,
	targetArg,
	checkArg
) =>
	toggler.addEventListener(click, function () {
		if (
			!targetContainer.classList.contains(flexActive) &&
			!checkContainer.classList.contains(flexActive) &&
			!projectContactMenu.classList.contains(flexActive)
		) {
			toggleClass(targetContainer, flexActive);
			appendChild(targetContainer, targetArg);
		} else if (
			!targetContainer.classList.contains(flexActive) &&
			!checkContainer.classList.contains(flexActive) &&
			projectContactMenu.classList.contains(flexActive)
		) {
			toggleClass(projectContactMenu, flexActive);
			toggleClass(targetContainer, flexActive);
			appendChild(targetContainer, targetArg);
		} else if (
			!targetContainer.classList.contains(flexActive) &&
			checkContainer.classList.contains(flexActive)
		) {
			toggleClass(projectContactMenu, flexActive);
			removeChild(checkContainer, checkArg);
			toggleClass(checkContainer, flexActive);
			toggleClass(targetContainer, flexActive);
			appendChild(targetContainer, targetArg);
		}

		targetContainer.addEventListener(click, function () {
			if (targetContainer.classList.contains(flexActive)) {
				removeChild(targetContainer, targetArg);
				toggleClass(targetContainer, flexActive);
			}
		});

		document.addEventListener(keyUp, function (event) {
			if (
				event.key === 'Escape' &&
				targetContainer.classList.contains(flexActive)
			) {
				removeChild(targetContainer, targetArg);
				toggleClass(targetContainer, flexActive);
			}
		});
	});

snapEmailContainerToggle(
	main.snapChat,
	snapChatContainer,
	emailContainer,
	snapImg,
	emailText
);

snapEmailContainerToggle(
	footer.snapChat,
	snapChatContainer,
	emailContainer,
	snapImg,
	emailText
);

snapEmailContainerToggle(
	main.email,
	emailContainer,
	snapChatContainer,
	emailText,
	snapImg
);

snapEmailContainerToggle(
	footer.email,
	emailContainer,
	snapChatContainer,
	emailText,
	snapImg
);

const resourceToggle = getById('resource-toggle');
const resourceContainer = getById('popup-container3');

resourceToggle.addEventListener(click, function () {
	if (!resourceContainer.classList.contains(flexActive)) {
		toggleClass(resourceContainer, flexActive);
	} else {
		toggleClass(resourceContainer, flexActive);
	}

	resourceContainer.addEventListener(click, function () {
		if (resourceContainer.classList.contains(flexActive)) {
			toggleClass(resourceContainer, flexActive);
		}
	});

	document.addEventListener(keyUp, function (event) {
		if (
			event.key === 'Escape' &&
			resourceContainer.classList.contains(flexActive)
		) {
			toggleClass(resourceContainer, flexActive);
		}
	});
});
