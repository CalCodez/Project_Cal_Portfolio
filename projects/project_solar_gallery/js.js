const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);

const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

const entrySelectContainer = getById('entry-select-container');
const rocksContainer = getById('rocks-parent');
const giantsContainer = getById('giants-parent');
const staplesContainer = getById('staples-parent');
const parentTogglers = getByClass('parent-toggler');
const parentExitBtn = getById('parent-exit-btn');
const groupName = getById('group-name');

const rockGroup = 'The Rocks';
const giantGroup = 'The Giants';
const staplesGroup = 'Staples';
const defaultName = 'Select A Planet Group';
const planetHeaders = selectAll('h2'); //.open-container h2 (planet name headers)
const mainWrapper = getById('main-wrapper');
const exitProjectButton = select('.exit-project-btn');

const [rocks, giants, staples] = parentTogglers;

const groupViewSelect = (toggler, container, name) => {
	toggler.addEventListener(click, () => {
		if (!container.classList.contains(flexActive)) {
			toggleClass(entrySelectContainer, flexInactive);
			toggleClass(container, flexActive);
			mainWrapper.style.background = 'none';
			textContent(groupName, name);
			toggleClass(exitProjectButton, flexInactive);

			setTimeout(() => {
				toggleClass(parentExitBtn, flexActive);
				toggleClass(parentExitBtn, 'pulse');
			}, 400);

			setTimeout(() => {
				toggleClass(parentExitBtn, 'pulse');
			}, 800);
		}
	});

	parentExitBtn.addEventListener(click, () => {
		if (container.classList.contains(flexActive)) {
			toggleClass(entrySelectContainer, flexInactive);
			toggleClass(container, flexActive);
			toggleClass(parentExitBtn, flexActive);
			mainWrapper.style.background = 'var(--black)';
			textContent(groupName, defaultName);
			toggleClass(exitProjectButton, flexInactive);
		}
	});
};

groupViewSelect(rocks, rocksContainer, rockGroup);
groupViewSelect(giants, giantsContainer, giantGroup);
groupViewSelect(staples, staplesContainer, staplesGroup);

const planetData = {
	mercury: {
		id: 'mercury',
		position: '1',
		type: 'Terrestrial',
		circumference: '9,525 miles',
		rotation: '59 Days',
		orbitalPeriod: '88 Days',
		moonCount: '0',
		sunDistance: '36 Million Miles',
		earthDistance: '61.788 million miles',
		namedAfter: 'The Roman Messenger God',
		surfaceTemp: '332F',
		tilt: '~0.01 deg',
		header: planetHeaders[0],
		description: `Mercury is the smallest planet in our solar system and the one closest to the Sun. It has a
				rocky surface covered with craters, resembling Earth’s Moon. Due to its thin atmosphere,
				temperatures vary greatly—scorching hot during the day and freezing cold at night. Mercury
				orbits the Sun in just 88 Earth days, making it the fastest planet. It has no moons or
				rings, and its weak magnetic field and lack of weather make it a fascinating subject of
				study.`,
	},

	venus: {
		id: 'venus',
		position: '2',
		type: 'Terrestrial',
		circumference: '23,628 miles',
		rotation: '243 Days',
		orbitalPeriod: '225 Days',
		moonCount: '0',
		sunDistance: '67.2 million Miles',
		earthDistance: '25,724,767 miles',
		namedAfter: 'The Roman Goddess of Love',
		surfaceTemp: '864F',
		tilt: '23 degrees',
		header: planetHeaders[1],
		description: `Venus is hot and cloudy; Earth supports life with water and air. Mars is dusty and may have once had life. Jupiter, the largest, has a Great Red Spot. Saturn’s rings are stunning. Uranus spins sideways. Neptune is windy and cold. Pluto, a dwarf planet, orbits far out. The Moon orbits Earth and affects tides. The Sun is a massive star at our system’s center. The Milky Way is our galaxy, containing billions of stars, planets, and cosmic mysteries.`,
	},
	earth: {
		id: 'earth',
		position: '3',
		type: 'Terrestrial',
		circumference: '24,901 miles',
		rotation: '24 Hours',
		orbitalPeriod: '365 Days',
		moonCount: '1',
		sunDistance: '93 million miles',
		earthDistance: '0 miles',
		namedAfter: 'Mother Earth',
		surfaceTemp: '59F',
		tilt: '23 degrees',
		header: planetHeaders[2],
		description: `Earth, the third planet from the Sun, teems with life and ecosystems. Oceans cover over 70% of its surface, nurturing diverse marine species. Its atmosphere shields inhabitants and supports weather patterns. Mountains, forests, and deserts shape varied landscapes. Earth's magnetic field protects against solar radiation. Rotating on its axis, it experiences day and night, while orbiting the Sun brings seasons. Home to humanity, Earth fosters culture, innovation, and interconnected societies, making it a dynamic and life-sustaining world.`,
	},

	mars: {
		id: 'mars',
		position: '4',
		type: 'Terrestrial',
		circumference: '13,300 miles',
		rotation: '24 Hours',
		orbitalPeriod: '687 Days',
		moonCount: '2',
		sunDistance: '141.6 million miles',
		earthDistance: '516.7 million miles',
		namedAfter: 'The Roman God of War',
		surfaceTemp: '-80F',
		tilt: '25 degrees',
		header: planetHeaders[3],
		description: `Mars, the fourth planet from the Sun, is a cold, desert-like world known as the Red Planet due to its iron-rich soil. Its thin atmosphere is mostly carbon dioxide, offering little protection from solar radiation. Mars features vast plains, towering volcanoes like Olympus Mons, and the deep Valles Marineris canyon. Dust storms frequently sweep its surface. Polar ice caps made of water and carbon dioxide freeze and melt seasonally. Robotic missions explore its terrain, seeking signs of past or present life.`,
	},

	jupiter: {
		id: 'jupiter',
		position: '5',
		type: 'Gas Giant',
		circumference: '278,985 miles',
		rotation: '10 hours',
		orbitalPeriod: '12 Years',
		moonCount: '95',
		sunDistance: '483.7 million miles',
		earthDistance: '390,674,710 miles',
		namedAfter: 'The Roman God of the Sky and Thunder',
		surfaceTemp: '-234F',
		tilt: '3 degrees',
		header: planetHeaders[4],
		description: `Jupiter, the largest planet in our solar system, is a massive gas giant composed mostly of hydrogen and helium. Known for its Great Red Spot, a giant storm persisting for centuries, Jupiter has a powerful magnetic field and dozens of moons, including Ganymede, the largest. Its atmosphere features colorful bands and intense storms. With no solid surface, its core remains mysterious. Jupiter’s immense gravity influences surrounding celestial bodies and helps shield inner planets from some comets and asteroids in space.`,
	},

	saturn: {
		id: 'saturn',
		position: '6',
		type: 'Gas Giant',
		circumference: '278,985 miles',
		rotation: '10 Hours',
		orbitalPeriod: '29 Years',
		moonCount: '274',
		sunDistance: '889.8 million miles',
		earthDistance: 'avg: 976.92 million miles ',
		namedAfter: 'The Roman God of Agriculture and Wealth',
		surfaceTemp: '-288F',
		tilt: '26 degrees',
		header: planetHeaders[5],
		description: `Saturn, the sixth planet from the Sun, is a stunning gas giant best known for its magnificent ring system made of ice and rock particles. Composed mainly of hydrogen and helium, Saturn has a low density and fast rotation, causing it to flatten at the poles. Its atmosphere displays swirling clouds and storms. Saturn hosts over 80 moons, including Titan, which has a thick atmosphere and liquid lakes. The planet’s magnetic field and mysterious interior continue to intrigue scientists and explorers alike.`,
	},

	uranus: {
		id: 'uranus',
		position: '7',
		type: 'Ice Giant',
		circumference: '132,630 miles ',
		rotation: '17 Hours',
		orbitalPeriod: '84 years',
		moonCount: '28',
		sunDistance: '1.8 billion miles',
		earthDistance: '1.8891 billion miles',
		namedAfter: 'The Greek God of the Sky',
		surfaceTemp: '-357F',
		tilt: '97 degrees',
		header: planetHeaders[6],
		description: `Uranus, the seventh planet from the Sun, is an ice giant with a pale blue-green hue due to methane in its atmosphere. Uniquely tilted on its side, Uranus rotates almost horizontally, resulting in extreme seasonal variations. Its atmosphere contains hydrogen, helium, and icy compounds, with faint cloud bands and occasional storms. Surrounded by faint rings and at least 27 known moons, Uranus remains mysterious and underexplored. Its cold temperatures and unusual orientation make it one of the solar system’s most intriguing worlds.`,
	},

	neptune: {
		id: 'neptune',
		position: '8',
		type: 'Ice Giant',
		circumference: '132,630 miles',
		rotation: '16 Hours',
		orbitalPeriod: '165 Years',
		moonCount: '16',
		sunDistance: '2.7782 billion miles',
		earthDistance: 'avg: 2.8665 billion miles',
		namedAfter: 'The Roman God of the Sea',
		surfaceTemp: '-357F',
		tilt: '28 degrees',
		header: planetHeaders[7],
		description: `Neptune, the eighth and farthest known planet from the Sun, is a cold, deep blue ice giant. Its vivid color comes from methane in the atmosphere, which also hosts dynamic weather systems and the fastest winds in the solar system. Neptune has dark storm spots, similar to Jupiter’s Great Red Spot. It’s encircled by faint rings and has 14 known moons, including Triton, which orbits backward. Discovered in 1846, Neptune remains a distant, mysterious world full of atmospheric and orbital wonders.`,
	},

	pluto: {
		id: 'pluto',
		position: '9',
		type: 'Dwarf Planet',
		circumference: '4,627 miles',
		rotation: '7 Days',
		orbitalPeriod: '248 Years',
		moonCount: '5',
		sunDistance: '3.67 billion Miles',
		earthDistance: '3.299 billion miles',
		namedAfter: 'The Roman god of the Underworld',
		surfaceTemp: '-387F',
		tilt: '23 degrees',
		header: planetHeaders[8],
		description: `Pluto, once considered the ninth planet, is now classified as a dwarf planet in the Kuiper Belt. It has a highly elliptical orbit, sometimes bringing it closer to the Sun than Neptune. Composed mostly of ice and rock, Pluto’s surface features frozen nitrogen, methane, and carbon monoxide. Its atmosphere is thin, expanding and contracting with its orbit. Pluto has five known moons, with Charon being the largest. Its distant, icy nature makes it one of the most mysterious objects in our solar system.`,
	},

	sun: {
		id: 'sun',
		position: `0`,
		type: 'Yellow Dwarf Star',
		circumference: '2,715,396 miles',
		rotation: '27 Days',
		orbitalPeriod: '250 Million Years',
		moonCount: 'Countless',
		sunDistance: '0',
		earthDistance: '93 million miles',
		namedAfter: ' SOL',
		surfaceTemp: '5,800 kelvin',
		tilt: '7 degrees',
		header: planetHeaders[9],
		description: `Sun (the sun) is a star, a massive ball of hot gas primarily composed of hydrogen and helium. It's the center of our solar system and provides the light and heat essential for life on Earth. The Sun is a yellow dwarf star, meaning it's relatively small and average-sized compared to other stars. It's about 93 million miles from Earth and its diameter is roughly 864,938 miles. The Sun's gravity holds the solar system together, and its energy sustains life on Earth through photosynthesis and by warming our planet.`,
	},

	moon: {
		id: 'moon',
		position: 'At Earth',
		type: 'Moon',
		circumference: '7,590 miles',
		rotation: '27 Days',
		orbitalPeriod: '27 Days',
		moonCount: '0',
		sunDistance: '92 million miles',
		earthDistance: '238,900 miles',
		namedAfter: 'Luna',
		surfaceTemp: '42F (extreme variation)',
		tilt: '6 degrees',
		header: planetHeaders[10],
		description: `Luna - The Moon, Earth's only natural satellite, orbits our planet at an average distance of about 384,400 kilometers. Its surface is covered in craters, plains, and mountains, shaped by billions of years of impacts. The Moon has no atmosphere, causing extreme temperature fluctuations. It influences Earth’s tides through gravitational pull and stabilizes its axial tilt. The Moon goes through phases, from new to full, as it orbits Earth. It has been a key target for space exploration and scientific study.`,
	},

	milkyWay: {
		id: 'milkyWay',
		position: 'Host Of',
		type: 'Spiral Galaxy',
		circumference: '314,000 Light Years',
		rotation: '700 Million Years',
		orbitalPeriod: '250 Million Years',
		moonCount: 'Countless',
		sunDistance: '26,000 Light Years From The Center',
		earthDistance: '26,000 Light Years From Center',
		namedAfter: ' The Milky WAy',
		surfaceTemp: '2.725 kelvin',
		tilt: '60 degrees',
		header: planetHeaders[11],
		description: `Milky Way (our home galaxy) The Milky Way is a vast spiral galaxy containing over 100 billion stars, including our Sun. Its structure features a central bulge, surrounded by a flat disk with spiral arms. The galaxy spans about 100,000 light-years in diameter and is home to various star systems, nebulae, and planetary systems. The Milky Way also contains dark matter, influencing its gravitational behavior. Our solar system resides in one of its spiral arms, the Orion Arm, about 27,000 light-years from the galactic center.`,
	},
};

const {
	mercury,
	venus,
	earth,
	mars,
	jupiter,
	saturn,
	uranus,
	neptune,
	pluto,
	sun,
	moon,
	milkyWay,
} = planetData;

const arrOfPlanets = [
	mercury,
	venus,
	earth,
	mars,
	jupiter,
	saturn,
	uranus,
	neptune,
	pluto,
	sun,
	moon,
	milkyWay,
];

const togglers = selectAll('.planet-toggler');
const planetContainer = selectAll('.planet-container');

const [
	toggleMercury,
	toggleVenus,
	toggleEarth,
	toggleMars,
	toggleJupiter,
	toggleSaturn,
	toggleUranus,
	toggleNeptune,
	togglePluto,
	toggleSun,
	toggleMoon,
	toggleMilkyWay,
] = togglers;

const [
	contMercury,
	contVenus,
	contEarth,
	contMars,
	contJupiter,
	contSaturn,
	contUranus,
	contNeptune,
	contPluto,
	contSun,
	contMoon,
	contMilkyWay,
] = planetContainer;

const planetFacts = (arr, obj) => {
	textContent(arr[0], obj.tilt);
	textContent(arr[1], obj.position);
	textContent(arr[2], obj.rotation);
	textContent(arr[3], obj.sunDistance);
	textContent(arr[4], obj.moonCount);
	textContent(arr[5], obj.surfaceTemp);
	textContent(arr[6], obj.orbitalPeriod);
	textContent(arr[7], obj.earthDistance);
	textContent(arr[8], obj.circumference);
};

const ShuffleUpdate = (container, arr, obj, description, named, type) => {
	if (container.id == obj.id) {
		planetFacts(arr, obj);
		textContent(description, obj.description);
		textContent(named, obj.namedAfter);
		textContent(type, obj.type);
	}
};

//Planet container and Shuffle Vars and Function
const open = 'open-container';
const typeSpan = select('.type-span');
const nameSpan = select('.name-span');
const factsSpan = selectAll('.facts-span');
const bounce = 'bounceInRight';
const pulse = 'pulse';
const zoomIn = 'zoomIn';
const planetDescription = select('.planet-description');
const factsWrappers = selectAll('.facts-wrapper');
const [wrapperLeft, wrapperRight] = factsWrappers;
const factsContainerWrapper = select('.facts-container-wrapper');
const shuffleContainer = select('.shuffle-container');
const nextBtn = select('.shuffle-btn');

const viewPlanets = (toggler, container1, container2, container3, container4, obj) => {
	toggler.addEventListener(click, () => {
		if (!container1.classList.contains(open)) {
			toggleClass(container1, open);
			toggleClass(container2, flexInactive);
			toggleClass(container3, flexInactive);
			toggleClass(container4, flexInactive);
			toggleClass(nameSpan, flexActive);
			toggleClass(typeSpan, flexActive);
			toggleClass(obj.header, bounce);
			toggleClass(shuffleContainer, flexActive);
			toggleClass(factsContainerWrapper, flexActive);

			setTimeout(() => {
				toggleClass(wrapperLeft, flexActive);
				toggleClass(wrapperLeft, pulse);
				toggleClass(wrapperRight, flexActive);
				toggleClass(wrapperRight, zoomIn);
			}, 500);
			planetFacts(factsSpan, obj);

			textContent(planetDescription, obj.description);
			textContent(nameSpan, obj.namedAfter);
			textContent(typeSpan, obj.type);
			parentExitBtn.style.visibility = 'hidden';
			textContent(toggler, 'Close Window');

			shuffle(nextBtn, container1, container2, container3, container4);
		} else {
			toggleClass(container1, open);
			toggleClass(container2, flexInactive);
			toggleClass(container3, flexInactive);
			toggleClass(container4, flexInactive);
			toggleClass(factsContainerWrapper, flexActive);
			toggleClass(wrapperLeft, flexActive);
			toggleClass(wrapperLeft, pulse);
			toggleClass(wrapperRight, flexActive);
			toggleClass(wrapperRight, zoomIn);
			toggleClass(shuffleContainer, flexActive);
			toggleClass(nameSpan, flexActive);
			toggleClass(typeSpan, flexActive);

			textContent(toggler, 'View More');

			setTimeout(() => {
				toggleClass(parentExitBtn, pulse);
				parentExitBtn.style.visibility = 'visible';
			}, 400);

			setTimeout(() => {
				toggleClass(parentExitBtn, pulse);
			}, 800);

			toggleClass(obj.header, bounce);
		}
	});
};

//``The Rocks Containers
viewPlanets(toggleMercury, contMercury, contVenus, contEarth, contMars, mercury);
viewPlanets(toggleVenus, contVenus, contEarth, contMars, contMercury, venus);
viewPlanets(toggleEarth, contEarth, contMars, contMercury, contVenus, earth);
viewPlanets(toggleMars, contMars, contMercury, contVenus, contEarth, mars);

//``The Gas Containers
viewPlanets(toggleJupiter, contJupiter, contSaturn, contUranus, contNeptune, jupiter);
viewPlanets(toggleSaturn, contSaturn, contJupiter, contUranus, contNeptune, saturn);
viewPlanets(toggleUranus, contUranus, contJupiter, contSaturn, contNeptune, uranus);
viewPlanets(toggleNeptune, contNeptune, contJupiter, contSaturn, contUranus, neptune);

//``The Staples
viewPlanets(togglePluto, contPluto, contSun, contMoon, contMilkyWay, pluto);
viewPlanets(toggleSun, contSun, contPluto, contMoon, contMilkyWay, sun);
viewPlanets(toggleMoon, contMoon, contPluto, contSun, contMilkyWay, moon);
viewPlanets(toggleMilkyWay, contMilkyWay, contPluto, contSun, contMoon, milkyWay);

const shuffle = (shuffleBtn, container1, container2, container3, container4) => {
	const viewMore = 'View More';
	const closeWindow = 'Close Window';
	shuffleBtn.addEventListener(click, () => {
		if (
			container1.classList.contains(open) &&
			container2.classList.contains(flexInactive) &&
			container3.classList.contains(flexInactive) &&
			container4.classList.contains(flexInactive)
		) {
			toggleClass(container1, open);
			toggleClass(container1, flexInactive);
			toggleClass(container2, flexInactive);
			toggleClass(container2, open);
			toggleClass(wrapperLeft, flexActive);
			toggleClass(wrapperRight, flexActive);
			toggleClass(container1.children[1], bounce);
			toggleClass(container2.children[1], bounce);
			textContent(container1.children[2].children[1], viewMore);
			textContent(container2.children[2].children[1], closeWindow);

			for (let id of arrOfPlanets) {
				ShuffleUpdate(container2, factsSpan, id, planetDescription, nameSpan, typeSpan);
			}

			setTimeout(() => {
				toggleClass(wrapperLeft, flexActive);
				toggleClass(wrapperLeft, pulse);
				toggleClass(wrapperRight, flexActive);
				toggleClass(wrapperRight, zoomIn);
			}, 500);
		} else if (
			container2.classList.contains(open) &&
			container3.classList.contains(flexInactive) &&
			container4.classList.contains(flexInactive) &&
			container1.classList.contains(flexInactive)
		) {
			toggleClass(container2, open);
			toggleClass(container2, flexInactive);
			toggleClass(container3, flexInactive);
			toggleClass(container3, open);
			toggleClass(wrapperLeft, flexActive);
			toggleClass(wrapperRight, flexActive);
			toggleClass(container2.children[1], bounce);
			toggleClass(container3.children[1], bounce);
			textContent(container2.children[2].children[1], viewMore);
			textContent(container3.children[2].children[1], closeWindow);

			for (let id of arrOfPlanets) {
				ShuffleUpdate(container3, factsSpan, id, planetDescription, nameSpan, typeSpan);
			}

			setTimeout(() => {
				toggleClass(wrapperLeft, flexActive);
				toggleClass(wrapperLeft, pulse);
				toggleClass(wrapperRight, flexActive);
				toggleClass(wrapperRight, zoomIn);
			}, 500);
		} else if (
			container3.classList.contains(open) &&
			container4.classList.contains(flexInactive) &&
			container1.classList.contains(flexInactive) &&
			container2.classList.contains(flexInactive)
		) {
			toggleClass(container3, open);
			toggleClass(container3, flexInactive);
			toggleClass(container4, flexInactive);
			toggleClass(container4, open);
			toggleClass(wrapperLeft, flexActive);
			toggleClass(wrapperRight, flexActive);
			toggleClass(container3.children[1], bounce);
			toggleClass(container4.children[1], bounce);
			textContent(container3.children[2].children[1], viewMore);
			textContent(container4.children[2].children[1], closeWindow);

			for (let id of arrOfPlanets) {
				ShuffleUpdate(container4, factsSpan, id, planetDescription, nameSpan, typeSpan);
			}

			setTimeout(() => {
				toggleClass(wrapperLeft, flexActive);
				toggleClass(wrapperLeft, pulse);
				toggleClass(wrapperRight, flexActive);
				toggleClass(wrapperRight, zoomIn);
			}, 500);
		} else if (
			container4.classList.contains(open) &&
			container3.classList.contains(flexInactive) &&
			container2.classList.contains(flexInactive) &&
			container1.classList.contains(flexInactive)
		) {
			toggleClass(container4, open);
			toggleClass(container4, flexInactive);
			toggleClass(container1, flexInactive);
			toggleClass(container1, open);
			toggleClass(wrapperLeft, flexActive);
			toggleClass(wrapperRight, flexActive);
			toggleClass(container4.children[1], bounce);
			toggleClass(container1.children[1], bounce);
			textContent(container4.children[2].children[1], viewMore);
			textContent(container1.children[2].children[1], closeWindow);

			for (let id of arrOfPlanets) {
				ShuffleUpdate(container1, factsSpan, id, planetDescription, nameSpan, typeSpan);
			}

			setTimeout(() => {
				toggleClass(wrapperLeft, flexActive);
				toggleClass(wrapperLeft, pulse);
				toggleClass(wrapperRight, flexActive);
				toggleClass(wrapperRight, zoomIn);
			}, 500);
		}
	});
};

const headerAdjust = (obj) => {
	if (window.innerWidth < 321) {
		obj.header.style.fontSize = '3.5rem';
	}
};

headerAdjust(mercury);
headerAdjust(jupiter);
headerAdjust(saturn);
headerAdjust(uranus);
headerAdjust(neptune);
