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
const keyUp = 'keyup';

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
		description: `"A fully featured website landing page. This was my first project that tested all my skills in HTML and
              CSS. I learned
              to apply elements using advanced HTML, CSS positioning, forms, inputs, and sizing to achieve a
              professional-looking
              website."`,
		href: '/projects/Saas_Project/index.html',
	},
	pokemon: {
		title: 'Pokemon Cards',
		src: '/assets/project_card_images/Pokemon.png',
		alt: 'Pokemon Cards',
		description: `"A Pokémon card collection project. This project allows users to collect and release Pokémon by adding and
              removing
              their favorite cards. The favorites section displays the total number of cards currently in their
              collection. The
              project also tallies common skills among the displayed Pokémon."`,
		href: '/projects/Js_Project3_ApiWebsite/index.html',
	},
	google: {
		title: 'Google',
		src: '/assets/project_card_images/Google.png',
		alt: 'Google Landing Homepage',
		description: `A simple Google homepage clone built by studying an example, with functional links. The project involved
              replicating the
              layout, styling, and search bar, ensuring an accurate visual match. It’s a straightforward demonstration
              of
              understanding basic HTML, CSS, and link functionality.`,
		href: '/projects/Project_Google_Page/index.html',
	},
	favz: {
		title: 'My Favz',
		src: '/assets/project_card_images/My_Favz.png',
		alt: 'My Favz',
		description: `"A beginner project displaying a list of things I favor and don't favor, with each topic providing 3 key
              reasons for its
              inclusion. This project helped me learn HTML tables displayed on the homepage. User-interactive: click the
              topics to
              jump to the pages."`,
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
		name: 'Responsive Website',
		src: '/assets/project_card_images/Responsive_websie.png',
		alt: 'Responsive Website',
		description: `"My first mobile-responsive project. I learned to style website elements to make them automatically
              responsive for all
              device types."`,
		href: '/projects/Project_responsive_website/index.html',
	},
	tribute: {
		title: 'Aaliyah Tribute',
		src: '/assets/project_card_images/Aaliyah_tribute.png',
		alt: 'Aaliyah Tribute Project',
		description: `A tribute project dedicated to the late Aaliyah. This project features a detailed biography, a curated
              collection of her
              music and videos, and a page highlighting the movies she starred in. Each section pays homage to her
              impactful career
              and lasting legacy in entertainment.`,
		href: '/projects/Project_Aaliyah/index.html',
	},
};

const { saas, calTube, pokemon, responsive, favz, logins, tribute, google } =
	projectData;

const snapChatData = {
	image: '',
	class: '',
};

const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const projectMenuToggler = getById('project-menu-toggler');
const projectMobileMenu = getById('project-mobile-menu');

const projectContactToggles = getByClass('project-contact-toggles');
const [projectContactMobile, projectContactToggleMain] = projectContactToggles;
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

toggleProjectContactMenu(projectContactMobile);
toggleProjectContactMenu(projectContactToggleMain);
