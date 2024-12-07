const getByClass = (arg) => document.getElementsByClassName(arg);
const getById = (arg) => document.getElementById(arg);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);
const append = (parent, child) => parent.appendChild(child);
const toggleClass = (arg1, arg2) => arg1.classList.toggle(arg2);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);

const click = 'click';

const snapAndAbout = {
	snap: {},
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
	},
};

const navTogglers = getByClass('nav-toggle');
const [aboutToggle, contactToggle] = navTogglers;
const contactIcons = getByClass('contact-icons');
const toggleContactIcons = (toggler) => {
	const activeIcons = 'contact-icons-active';

	toggler.addEventListener(click, function () {
		for (let icons of contactIcons)
			if (!icons.classList.contains(activeIcons)) {
				toggleClass(icons, activeIcons);
			} else {
				toggleClass(icons, activeIcons);
			}
	});
};

toggleContactIcons(contactToggle);
