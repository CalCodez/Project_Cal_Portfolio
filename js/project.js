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

//Project Data Object
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
		target: '_blank',
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
	dashboard: {
		title: 'Planner Dashborad',
		src: '/assets/project_card_images/Dashborad.png',
		alt: 'project planner',
		description: `A simple Javascript driven planner project. Create reminders, notes, and the program will sort and
                store them in a parent category container.`,
		href: '/projects/project_dashboard/indexPlanner.html',
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

	defaults: {
		title: 'Cal Codez',
		image: './assets/Logo_Images/CalCodez2.png',
		description: 'Select Project From Project Panel',
		gridTitle: 'Click Project Details',
		gridDescription: 'Choose a Project To Get The Details',
	},
};
//Project Data Object Destructuring
const {
	saas,
	calTube,
	pokemon,
	responsive,
	dashboard,
	logins,
	tribute,
	google,
	favz,
	defaults,
} = projectData;

//Project Menu, Contact, Mobile Menu Vars
const projectMenuToggler = getById('project-menu-toggler');
const projectMobileMenu = getById('project-mobile-menu');
const projectContactToggles = getByClass('project-contact-toggles');
const projectContactMenu = getById('project-contact-menu');

//Project Menu Function
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
});

//Project Contact Menu Function
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
};
toggleProjectContactMenu(projectContactToggles[0]);
toggleProjectContactMenu(projectContactToggles[1]);

//Toggle Project Display Containers Var and Function
const panelToggle = getById('panel-toggle');
const cardsToggle = getById('cards-toggle');
const gridToggle = getById('grid-toggle');
const panelContainer = getById('project-panel-container');
const cardsContainer = getById('project-card-container');
const gridContainer = getById('project-grid-container');

const displayButtonContainer = select('.display-button-container');

//NOTE CODE restrict panel and grid selection for responsive
if (window.innerWidth < 1024) {
	displayButtonContainer.style.display = 'none';
	panelContainer.style.display = 'none';
	cardsContainer.style.display = 'flex';
}

//Change Project Display Containers Function
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

//Project Panel Vars and Functions
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
	dashboardBtn,
	loginsBtn,
	responsiveBtn,
	tributeBtn,
	favzBtn,
] = projectButtons;

//Project Panel Display Function
const panelProjectsDisplay = (toggler, obj) => {
	const fontSegoe = 'Segoe UI';
	const alignJustify = 'justify';
	const fontLumanosimo = 'Lumanosimo';
	const alignCenter = 'center';

	toggler.addEventListener(click, function () {
		panelProjectImage.src = obj.src;
		textContent(projectNameDisplay, obj.title);
		textContent(panelProjectDescription, obj.description);
		panelProjectLink.style.display = 'flex';
		panelProjectLink.href = obj.href;
		panelProjectLink.target = '_blank';

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
panelProjectsDisplay(calTubeBtn, calTube);
panelProjectsDisplay(saasBtn, saas);
panelProjectsDisplay(pokemonBtn, pokemon);
panelProjectsDisplay(googleBtn, google);
panelProjectsDisplay(dashboardBtn, dashboard);
panelProjectsDisplay(loginsBtn, logins);
panelProjectsDisplay(responsiveBtn, responsive);
panelProjectsDisplay(tributeBtn, tribute);
panelProjectsDisplay(favzBtn, favz);

const moreProjectsToggler = getById('more-projects-toggle');
const moreProjectsContainer = getById('more-projects-container');
const moreButtons = getByClass('more-buttons');

moreProjectsToggler.addEventListener(click, function () {
	if (!moreProjectsContainer.classList.contains('more-active')) {
		toggleClass(moreProjectsContainer, 'more-active');
		for (let showButtons of moreButtons) {
			toggleClass(showButtons, 'more-buttons-active');
		}
	} else {
		toggleClass(moreProjectsContainer, 'more-active');
		for (let hideButtons of moreButtons) {
			toggleClass(hideButtons, 'more-buttons-active');
		}
	}

	for (let close of moreButtons) {
		close.addEventListener(click, function () {
			if (moreProjectsContainer.classList.contains('more-active')) {
				toggleClass(moreProjectsContainer, 'more-active');
				toggleClass(close, 'more-buttons-active');
			}
		});
	}
});

const gridButtons = getByClass('grid-btns');
let gridTitle = getById('grid-title');
let gridDescription = getById('grid-project-description');
const gridLink = getById('grid-link');

textContent(gridTitle, defaults.gridTitle);
textContent(gridDescription, defaults.description);

//Grid Project Toggle Function
const gridProjectToggle = (toggler, obj) => {
	toggler.addEventListener(click, function () {
		textContent(gridTitle, obj.title);
		textContent(gridDescription, obj.description);
		gridLink.style.display = 'flex';
		gridLink.href = obj.href;
		gridLink.target = '_blank';
	});

	document.addEventListener(keyUp, function (event) {
		if (event.key === 'Escape') {
			textContent(gridTitle, defaults.gridTitle);
			textContent(gridDescription, defaults.gridDescription);
			gridLink.style.display = 'none';
		}
	});
};

gridProjectToggle(gridButtons[0], google);
gridProjectToggle(gridButtons[1], tribute);
gridProjectToggle(gridButtons[2], calTube);
gridProjectToggle(gridButtons[3], saas);
gridProjectToggle(gridButtons[4], responsive);
gridProjectToggle(gridButtons[5], pokemon);
gridProjectToggle(gridButtons[6], favz);
gridProjectToggle(gridButtons[7], logins);

//Static Grid Image Assignments
const grid = getByClass('grid-project-img');
const gridImgAssign = (img, src) => (img.src = src);
gridImgAssign(grid[0], google.src);
gridImgAssign(grid[1], tribute.src);
gridImgAssign(grid[2], calTube.src);
gridImgAssign(grid[3], saas.src);
gridImgAssign(grid[4], responsive.src);
gridImgAssign(grid[5], pokemon.src);
gridImgAssign(grid[6], favz.src);
gridImgAssign(grid[7], logins.src);

//**Snapchat, Email, Resource Containers Vars and Function */

//Snapchat and Email Data Object
const snapEmailData = {
	snap: {
		src: './assets/snapcode/Snapchat-206999597.jpg',
		alt: 'CooCalmCollect Snap Code',
	},

	email: 'WWW.CALCODEZ@OUTLOOK.COM',
};
//Snapchat and Email Data Object Destructuring
const { snap, email } = snapEmailData;

const snapChatContainer = getById('snapchat-container');
const snapImg = createElement('img');
snapImg.src = snap.src;

const emailContainer = getById('email-container');
const emailText = createElement('p');
textContent(emailText, email);

const resourceContainer = getById('resource-container');

const snpChatToggles = [
	getById('project-snapchat-toggle'),
	getById('footer-snapChat-toggle'),
];
const emailToggles = [
	getById('project-email-toggle'),
	getById('footer-email-toggle'),
];

const resourceToggle = [
	getById('resource-toggle-main'),
	getById('resource-toggle-mobile'),
];

//Snapchat and Email Container Toggle Function
const snapAndEmailContainerToggle = (
	array,
	targetContainer,
	checkContainer,
	staticContainer,
	targetArgs,
	checkArgs
) => {
	for (let toggler of array)
		toggler.addEventListener(click, function () {
			if (
				!targetContainer.classList.contains(flexActive) &&
				!checkContainer.classList.contains(flexActive) &&
				!staticContainer.classList.contains(flexActive)
			) {
				toggleClass(targetContainer, flexActive);
				appendChild(targetContainer, targetArgs);
			} else if (
				!targetContainer.classList.contains(flexActive) &&
				checkContainer.classList.contains(flexActive) &&
				!staticContainer.classList.contains(flexActive)
			) {
				toggleClass(checkContainer, flexActive);
				removeChild(checkContainer, checkArgs);
				toggleClass(targetContainer, flexActive);
				appendChild(targetContainer, targetArgs);
			} else if (
				!targetContainer.classList.contains(flexActive) &&
				!checkContainer.classList.contains(flexActive) &&
				staticContainer.classList.contains(flexActive)
			) {
				toggleClass(staticContainer, flexActive);
				toggleClass(targetContainer, flexActive);
				appendChild(targetContainer, targetArgs);
			} else {
				toggleClass(targetContainer, flexActive);
			}
		});

	targetContainer.addEventListener(click, function () {
		if (targetContainer.classList.contains(flexActive)) {
			toggleClass(targetContainer, flexActive);
			removeChild(targetContainer, targetArgs);
		}
	});

	document.addEventListener(keyUp, function (event) {
		if (event.key === 'Escape') {
			removeChild(targetContainer, targetArgs);
			toggleClass(targetContainer, flexActive);
		}
	});
};

snapAndEmailContainerToggle(
	snpChatToggles,
	snapChatContainer,
	emailContainer,
	resourceContainer,
	snapImg,
	emailText
);
snapAndEmailContainerToggle(
	emailToggles,
	emailContainer,
	snapChatContainer,
	resourceContainer,
	emailText,
	snapImg
);

// Resource Container Toggle Function

for (let toggle of resourceToggle)
	toggle.addEventListener(click, function () {
		if (
			!resourceContainer.classList.contains(flexActive) &&
			!snapChatContainer.classList.contains(flexActive) &&
			!emailContainer.classList.contains(flexActive)
		) {
			toggleClass(resourceContainer, flexActive);
		} else if (
			!resourceContainer.classList.contains(flexActive) &&
			snapChatContainer.classList.contains(flexActive) &&
			!emailContainer.classList.contains(flexActive)
		) {
			toggleClass(snapChatContainer, flexActive);
			removeChild(snapChatContainer, snapImg);
			toggleClass(resourceContainer, flexActive);
		} else if (
			!resourceContainer.classList.contains(flexActive) &&
			!snapChatContainer.classList.contains(flexActive) &&
			emailContainer.classList.contains(flexActive)
		) {
			toggleClass(emailContainer, flexActive);
			removeChild(emailContainer, emailText);
			toggleClass(resourceContainer, flexActive);
		} else toggleClass(resourceContainer, flexActive);
	});

// Close Open Menus

const openMenus = [projectMobileMenu, projectContactMenu, resourceContainer];

const closeMenu = (array) => {
	for (let menus of array) {
		menus.addEventListener(click, function () {
			if (menus.classList.contains(flexActive)) {
				toggleClass(menus, flexActive);
			}
		});

		document.addEventListener(keyUp, function (event) {
			if (event.key == 'Escape' && menus.classList.contains(flexActive)) {
				toggleClass(menus, flexActive);
			}
		});
	}
};

closeMenu(openMenus);
