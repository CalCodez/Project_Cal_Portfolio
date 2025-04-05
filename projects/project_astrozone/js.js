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

//Mobile Menu Vars and Function

const mobileMenu = select('.fixed-menu');
const menuToggle = getById('menu-toggler');
menuToggle.addEventListener(click, () => {
	if (!mobileMenu.classList.contains(flexActive)) {
		toggleClass(mobileMenu, flexActive);
	} else {
		toggleClass(mobileMenu, flexActive);
	}
	mobileMenu.addEventListener(click, () => {
		if (mobileMenu.classList.contains(flexActive)) {
			toggleClass(mobileMenu, flexActive);
		}
	});
	window.addEventListener(keyup, (e) => {
		if (e.key === 'Escape' && mobileMenu.classList.contains(flexActive)) {
			toggleClass(mobileMenu, flexActive);
		}
	});
});

const stones = {
	jan: { month: 'January', stone: 'Garnet', src: './assets/birthstones/garnet.jpg' },
	feb: { month: 'February', stone: 'Amethyst', src: './assets/birthstones/amethyst.jpg' },
	mar: { month: 'March', stone: 'Aquamarine', src: './assets/birthstones/aquamarine.jpg' },
	apr: { month: 'April', stone: 'Diamond', src: './assets/birthstones/diamond.jpg' },
	may: { month: 'May', stone: 'Emerald', src: './assets/birthstones/emerald.jpg' },
	jun: { month: 'June', stone: 'Pearl', src: './assets/birthstones/pearl.jpg' },
	jul: { month: 'July', stone: 'Ruby', src: './assets/birthstones/ruby.jpg' },
	aug: { month: 'August', stone: 'Peridot', src: './assets/birthstones/peridot.jpg' },
	sep: { month: 'September', stone: 'Sapphire', src: './assets/birthstones/sapphire.jpg' },
	oct: { month: 'October', stone: 'Opal', src: './assets/birthstones/opal.jpg' },
	nov: { month: 'November', stone: 'Topaz', src: './assets/birthstones/topaz.jpg' },
	dec: { month: 'December', stone: 'Turquoise', src: './assets/birthstones/turquoise.jpg' },
};

const { jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec } = stones;

const astroFacts = {
	aries: {
		name: 'Aries',
		sign: 'Fire',
		symbol: 'The Ram',
		traits: ['Loyal', 'Smart', 'Snappy', 'Kind', 'Moody'],
		date: 'March 21 - April 19',
		birthstone: { month1: mar, month2: apr },
		planet: { name: 'Mars', src: './assets/planets/mars.jpg' },
		color: { name: 'Red', hex: '#ff0000' },
		icon: { zodiac: 'ti-zodiac-aries', sign: 'ti-flame' },
		backSplash: { src: './assets/astro_backsplash/aries_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/aries.png' },
		stageImg: { src: './assets/stage_image/aries.jpg' },
		description:
			'Bold and energetic, Aries is a fiery leader driven by passion and ambition. Confident and competitive, they thrive on challenges and take initiative. Independent and courageous, they act quickly but can be impulsive. Their enthusiasm and determination make them natural pioneers, always ready to blaze new trails.',
		celebs: {
			celeb1: {
				name: 'Halle Bailey',
				birthdate: 'March 27th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/ariesCelebs/halle_bailey.jpg',
			},
			celeb2: {
				name: 'Mariah Carey',
				birthdate: 'March 27th',
				knownFor: 'Singer, Songwriter, Actress',
				src: './assets/celebs/ariesCelebs/mariah_carey.jpg',
			},
			celeb3: {
				name: 'Chance The Rapper',
				birthdate: 'April 16th',
				knownFor: 'Rapper, Actor',
				src: './assets/celebs/ariesCelebs/chance_the_rapper.jpg',
			},
			celeb4: {
				name: 'Martian Lawrence',
				birthdate: 'April 16th',
				knownFor: 'Comedian, Actor',
				src: './assets/celebs/ariesCelebs/martin_lawrence.jpg',
			},
			celeb5: {
				name: 'Lil Nas X',
				birthdate: 'April 9th',
				knownFor: 'Rapper',
				src: './assets/celebs/ariesCelebs/lil_nas_x.jpg',
			},
			celeb6: {
				name: 'Lady GaGA',
				birthdate: 'March 28th',
				knownFor: 'Singer, Dancer, Actress',
				src: './assets/celebs/ariesCelebs/lady_gaga.jpg',
			},
		},
	},

	taurus: {
		name: 'Taurus',
		sign: 'Earth',
		symbol: 'The Bull',
		traits: ['Caring', 'Ambiverted', 'Ambitious', 'Hardworking', 'Self-Centered'],
		date: 'April 20 - May 20',
		birthstone: { month1: apr, month2: may },
		planet: { name: 'Venus', src: './assets/planets/venus.jpg' },
		color: { name: 'Green', hex: '#008000' },
		icon: { zodiac: 'ti-zodiac-taurus', sign: 'ti-world' },
		backSplash: { src: './assets/astro_backsplash/taurus_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/taurus.png' },
		stageImg: { src: './assets/stage_image/taurus.jpg' },
		description:
			'Grounded and reliable, Taurus values stability, comfort, and perseverance. Patient and hardworking, they appreciate beauty, luxury, and sensual pleasures. Stubborn yet deeply loyal, they commit fully to relationships and goals. Practical and determined, they build strong foundations, seeking security in all aspects of life while embracing life’s simple joys.',

		celebs: {
			celeb1: {
				name: 'Adele',
				birthdate: 'May 5th',
				knownFor: 'Singer',
				src: './assets/celebs/taurusCelebs/adele.jpg',
			},
			celeb2: {
				name: 'Kelly Clarkson',
				birthdate: 'April 24th',
				knownFor: 'Singer, Talk Show Host',
				src: './assets/celebs/taurusCelebs/kelly_clarkson.jpg',
			},
			celeb3: {
				name: 'Channing Tatum',
				birthdate: 'April 26th',
				knownFor: 'Actor, Dancer',
				src: './assets/celebs/taurusCelebs/channing_tatum.jpg',
			},
			celeb4: {
				name: 'Janet Jackson',
				birthdate: 'May 16th',
				knownFor: 'Singer, Dancer, Actress',
				src: './assets/celebs/taurusCelebs/janet_jackson.jpg',
			},
			celeb5: {
				name: 'Chris Brown',
				birthdate: 'May 5th',
				knownFor: 'Rapper, Singer',
				src: './assets/celebs/taurusCelebs/chris_brown.jpg',
			},
			celeb6: {
				name: 'Rami Malek',
				birthdate: 'May 12th',
				knownFor: 'Actor',
				src: './assets/celebs/taurusCelebs/rami_malek.jpg',
			},
		},
	},

	gemini: {
		name: 'Gemini',
		sign: 'Air',
		symbol: 'The Twins',
		traits: ['Spontaneous', 'Confusing', 'Funny', 'Sociable', 'Indecisive'],
		date: 'May 21 - June 21',
		birthstone: { month1: may, month2: jun },
		planet: { name: 'Mercury', src: './assets/planets/mercury.jpg' },
		color: { name: 'Yellow', hex: '#ffff00' },
		icon: { zodiac: 'ti-zodiac-gemini', sign: 'ti-wind' },
		backSplash: { src: './assets/astro_backsplash/gemini_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/gemini.png' },
		stageImg: { src: './assets/stage_image/gemini.jpg' },
		description:
			'Curious and adaptable, Gemini thrives on communication and intellectual stimulation. Quick-witted and sociable, they easily connect with others. Playful and versatile, they enjoy variety and change. Ruled by Mercury, they excel in expressing ideas but can be restless. Their dual nature makes them both charming conversationalists and deep thinkers.',

		celebs: {
			celeb1: {
				name: 'Angelina Jolie',
				birthdate: 'June 4th',
				knownFor: 'Actress',
				src: './assets/celebs/geminiCelebs/angelina_jolie.jpg',
			},
			celeb2: {
				name: 'Kanye West',
				birthdate: 'June 8th',
				knownFor: 'Rapper, Producer, Designer',
				src: './assets/celebs/geminiCelebs/kanye_west.jpg',
			},
			celeb3: {
				name: 'Chris Evans',
				birthdate: 'June 13th',
				knownFor: 'Actor',
				src: './assets/celebs/geminiCelebs/chris_evans.jpg',
			},
			celeb4: {
				name: 'Kendrick Lamar',
				birthdate: 'June 17th',
				knownFor: 'Rapper',
				src: './assets/celebs/geminiCelebs/kendrick_lamar.jpg',
			},
			celeb5: {
				name: 'Lauryn Hill',
				birthdate: 'May 26th',
				knownFor: 'Rapper, Singer, Actress',
				src: './assets/celebs/geminiCelebs/lauryn_hill.jpg',
			},
			celeb6: {
				name: 'Naomi Campbell',
				birthdate: 'May 22nd',
				knownFor: 'Model, Actress',
				src: './assets/celebs/geminiCelebs/naomi_campbell.jpg',
			},
		},
	},

	cancer: {
		name: 'Cancer',
		sign: 'Water',
		symbol: 'The Crab',
		traits: ['Sarcastic', 'Loveable', 'Playful', 'Warm-hearted', 'Jealous'],
		date: 'June 22 - July 22',
		birthstone: { month1: jun, month2: jul },
		planet: { name: 'The Moon', src: './assets/planets/moon.jpg' },
		color: { name: 'Sliver', hex: '#c0c0c0' },
		icon: { zodiac: 'ti-zodiac-cancer', sign: 'ti-ripple' },
		backSplash: { src: './assets/astro_backsplash/cancer_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/cancer.png' },
		stageImg: { src: './assets/stage_image/cancer.jpg' },
		description:
			'Deeply emotional and intuitive, Cancer is nurturing and protective. Loyal and sensitive, they value family and close relationships. Their strong intuition helps them connect with others, but they can be guarded. Compassionate and sentimental, they seek emotional security, creating a warm, caring environment wherever they go.',

		celebs: {
			celeb1: {
				name: 'Ariana Grande',
				birthdate: 'June 26th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/cancerCelebs/ariana_grande.jpg',
			},

			celeb2: {
				name: 'Kevin Hart',
				birthdate: 'July 6th',
				knownFor: 'Comedian, Actor',
				src: './assets/celebs/cancerCelebs/kevin_hart.jpg',
			},

			celeb3: {
				name: 'Fantasia Barrino',
				birthdate: 'June 30th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/cancerCelebs/fantasia_barrino.jpg',
			},

			celeb4: {
				name: 'Solange Knowles',
				birthdate: 'June 24th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/cancerCelebs/solange_knowles.jpg',
			},

			celeb5: {
				name: 'Missy Elliot',
				birthdate: 'July 1st',
				knownFor: 'Rapper, Singer, Producer',
				src: './assets/celebs/cancerCelebs/missy_elliot.jpg',
			},
			celeb6: {
				name: 'Vin Diesel',
				birthdate: 'July 18th',
				knownFor: 'Actor',
				src: './assets/celebs/cancerCelebs/vin_diesel.jpg',
			},
		},
	},

	leo: {
		name: 'Leo',
		sign: 'Fire',
		symbol: 'The Lion',
		traits: ['Fun', 'Warm', 'Loving', 'Egocentric', 'Cute'],
		date: 'July 23 - August 22',
		birthstone: { month1: jul, month2: aug },
		planet: { name: 'The Sun', src: './assets/planets/sun.jpg' },
		color: { name: 'Orange', hex: '#ffa500' },
		icon: { zodiac: 'ti-zodiac-leo', sign: 'ti-flame' },
		backSplash: { src: './assets/astro_backsplash/leo_backsplash.webp' },
		statsImg: { src: './assets/astro_stats_imgs/leo.png' },
		stageImg: { src: './assets/stage_image/leo.jpg' },
		description:
			'Charismatic and confident, Leo shines with passion and creativity. Bold and ambitious, they love attention and thrive as leaders. Generous and warm-hearted, they inspire others with enthusiasm. Loyal and courageous, they defend loved ones fiercely. Their vibrant energy and determination make them natural stars, always striving for greatness.',

		celebs: {
			celeb1: {
				name: 'Barack Obama',
				birthdate: 'August 4th',
				knownFor: '44th US President',
				src: './assets/celebs/leoCelebs/barack_obama.jpg',
			},

			celeb2: {
				name: 'Whitney Houston',
				birthdate: 'August 9th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/leoCelebs/whitney_houston.jpg',
			},

			celeb3: {
				name: 'Halle Berry',
				birthdate: 'August 14th',
				knownFor: 'Actress',
				src: './assets/celebs/leoCelebs/halle_berry.jpg',
			},

			celeb4: {
				name: 'Demi Lovato',
				birthdate: 'August 20th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/leoCelebs/demi_lovato.jpg',
			},

			celeb5: {
				name: 'Jennifer Lopez',
				birthdate: 'July 24th',
				knownFor: 'Singer, Actress, Dancer',
				src: './assets/celebs/leoCelebs/jennifer_lopez.jpg',
			},
			celeb6: {
				name: 'Jason Momoa',
				birthdate: 'August 1st',
				knownFor: 'Actor',
				src: './assets/celebs/leoCelebs/jason_momoa.jpg',
			},
		},
	},

	virgo: {
		name: 'Virgo',
		sign: 'Earth',
		symbol: 'The Maiden',
		traits: ['Jealous', 'Indecisive', 'Intelligent', 'Loyal', 'Compromising'],
		date: 'August 23 - September 22',
		birthstone: { month1: aug, month2: sep },
		planet: { name: 'Mercury', src: './assets/planets/mercury.jpg' },
		color: { name: 'Blue', hex: '#0000ff' },
		icon: { zodiac: 'ti-zodiac-virgo', sign: 'ti-world' },
		backSplash: { src: './assets/astro_backsplash/virgo_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/virgo.png' },
		stageImg: { src: './assets/stage_image/virgo.jpg' },
		description:
			'Analytical and detail-oriented, Virgo values precision, logic, and service. Hardworking and practical, they seek efficiency and personal growth. Loyal and reliable, they thrive on structure and organization. Perfectionists by nature, they can be critical but always aim for excellence. Their grounded, methodical approach ensures success in everything they do.',

		celebs: {
			celeb1: {
				name: 'Beyonce',
				birthdate: 'September 4th',
				knownFor: 'Singer, Dancer, Songwriter',
				src: './assets/celebs/virgoCelebs/beyonce.jpg',
			},

			celeb2: {
				name: 'Pink',
				birthdate: 'September 8th',
				knownFor: 'Singer, Songwriter',
				src: './assets/celebs/virgoCelebs/pink.jpg',
			},

			celeb3: {
				name: 'Taraji P. Henson',
				birthdate: 'September 11th',
				knownFor: 'Actress',
				src: './assets/celebs/virgoCelebs/taraji_p_henson.jpg',
			},

			celeb4: {
				name: 'Michael Jackson',
				birthdate: 'August 29th',
				knownFor: 'Singer, Dancer, Songwriter',
				src: './assets/celebs/virgoCelebs/michael_jackson.jpg',
			},

			celeb5: {
				name: 'Keke Palmer',
				birthdate: 'August 26th',
				knownFor: 'Actress, Singer',
				src: './assets/celebs/virgoCelebs/keke_palmer.jpg',
			},
			celeb6: {
				name: 'Paul Walker',
				birthdate: 'September 12th',
				knownFor: 'Actress, Singer',
				src: './assets/celebs/virgoCelebs/paul_walker.jpg',
			},
		},
	},

	libra: {
		name: 'Libra',
		sign: 'Air',
		symbol: 'The Scales',
		traits: ['Friendly', 'Ambivert', 'Childish', 'Spontaneous', 'Flighty'],
		date: 'September 23 - October 22',
		birthstone: { month1: sep, month2: oct },
		planet: { name: 'Venus', src: './assets/planets/venus.jpg' },
		color: { name: 'Pink', hex: '#ffc0cb' },
		icon: { zodiac: 'ti-zodiac-libra', sign: 'ti-wind' },
		backSplash: { src: './assets/astro_backsplash/libra_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/libra.png' },
		stageImg: { src: './assets/stage_image/libra.jpg' },
		description:
			'Charming and diplomatic, Libra seeks balance, harmony, and fairness. Social and artistic, they appreciate beauty and deep connections. Intelligent and persuasive, they navigate relationships with grace. Indecisive at times, they strive to please others. Their natural sense of justice and elegance makes them skilled mediators and peacemakers.',

		celebs: {
			celeb1: {
				name: 'Will Smith',
				birthdate: 'September 25th',
				knownFor: 'Actor, Rapper',
				src: './assets/celebs/libraCelebs/will_smith.jpg',
			},

			celeb2: {
				name: 'Cardi B',
				birthdate: 'October 11th',
				knownFor: 'Rapper, Tv Personality',
				src: './assets/celebs/libraCelebs/cardi_b.jpg',
			},

			celeb3: {
				name: 'Lil Wayne',
				birthdate: 'Sep 27th',
				knownFor: 'Rapper',
				src: './assets/celebs/libraCelebs/lil_wayne.jpg',
			},

			celeb4: {
				name: 'Eminem',
				birthdate: 'October 17th',
				knownFor: 'Rapper',
				src: './assets/celebs/libraCelebs/eminem.jpg',
			},

			celeb5: {
				name: 'Bruno Mars',
				birthdate: 'October 8th',
				knownFor: 'Singer, Songwriter',
				src: './assets/celebs/libraCelebs/bruno_mars.jpg',
			},
			celeb6: {
				name: 'Ashanti',
				birthdate: 'October 13th',
				knownFor: 'Singer, Songwriter, Actress',
				src: './assets/celebs/libraCelebs/ashanti.jpg',
			},
		},
	},

	scorpio: {
		name: 'Scorpio',
		sign: 'Water',
		symbol: 'The Scorpion',
		traits: ['Attractive', 'Envious', 'Loyal', 'Hardworking', 'Creative'],
		date: 'October 23 - November 21',
		birthstone: { month1: oct, month2: nov },
		planet: { name: 'Pluto', src: './assets/planets/pluto.jpg' },
		color: { name: 'Black', hex: '#000000' },
		icon: { zodiac: 'ti-zodiac-scorpio', sign: 'ti-ripple' },
		backSplash: { src: './assets/astro_backsplash/scorpio_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/scorpio.png' },
		stageImg: { src: './assets/stage_image/scorpio.jpg' },
		description:
			'Intense and mysterious, Scorpio is deeply emotional and passionate. Loyal and determined, they value depth and authenticity. Magnetic and intuitive, they read people effortlessly. Protective and sometimes secretive, they guard their emotions fiercely. Their resilience and ambition make them powerful forces, unafraid to transform and rise from challenges.',

		celebs: {
			celeb1: {
				name: 'Drake',
				birthdate: 'October 24th',
				knownFor: 'Rapper, Actor',
				src: './assets/celebs/scorpioCelebs/drake.jpg',
			},

			celeb2: {
				name: 'Ciara',
				birthdate: 'October 25th',
				knownFor: 'Singer, Dancer',
				src: './assets/celebs/scorpioCelebs/ciara.jpg',
			},

			celeb3: {
				name: 'Ryan Reynolds',
				birthdate: 'October 23rd',
				knownFor: 'Actor',
				src: './assets/celebs/scorpioCelebs/ryan_reynolds.jpg',
			},

			celeb4: {
				name: 'Gabrielle Union',
				birthdate: 'October 29th',
				knownFor: 'Actress',
				src: './assets/celebs/scorpioCelebs/gabrielle_union.jpg',
			},

			celeb5: {
				name: 'Leonardo DiCaprio',
				birthdate: 'November 11th',
				knownFor: 'Actor',
				src: './assets/celebs/scorpioCelebs/leonardo_dicaprio.jpg',
			},
			celeb6: {
				name: 'Tyga',
				birthdate: 'November 19th',
				knownFor: 'Rapper',
				src: './assets/celebs/scorpioCelebs/tyga.jpg',
			},
		},
	},

	sagittarius: {
		name: 'Sagittarius',
		sign: 'Fire',
		symbol: 'The Archer',
		traits: ['Loyal', 'Irritable', 'Nervous', 'Generous', 'Hilarious'],
		date: 'November 22 - December 21',
		birthstone: { month1: nov, month2: dec },
		planet: { name: 'Jupiter', src: './assets/planets/jupiter.jpg' },
		color: { name: 'Purple', hex: '#800080' },
		icon: { zodiac: 'ti-zodiac-sagittarius', sign: 'ti-flame' },
		backSplash: { src: './assets/astro_backsplash/sagittarius_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/sagittarius.png' },
		stageImg: { src: './assets/stage_image/sagittarius.jpg' },
		description:
			'Adventurous and optimistic, Sagittarius loves freedom, exploration, and new experiences. Independent and intellectual, they seek knowledge and truth. Honest and humorous, they uplift those around them. Restless and energetic, they resist constraints and embrace spontaneity. Their adventurous spirit and open-mindedness make them natural explorers and lifelong learners.',

		celebs: {
			celeb1: {
				name: 'Jay-Z',
				birthdate: 'December 4th',
				knownFor: 'Rapper, Businessman ',
				src: './assets/celebs/sagittariusCelebs/jay_z.jpg',
			},

			celeb2: {
				name: 'Nicki Minaj',
				birthdate: 'December 8th',
				knownFor: 'Rapper',
				src: './assets/celebs/sagittariusCelebs/nicki_minaj.jpg',
			},

			celeb3: {
				name: 'Jamie Foxx',
				birthdate: 'December 13th',
				knownFor: 'Comedian, Actor, Singer',
				src: './assets/celebs/sagittariusCelebs/jamie_foxx.jpg',
			},

			celeb4: {
				name: 'Trey Songz',
				birthdate: 'November 28th',
				knownFor: 'Singer',
				src: './assets/celebs/sagittariusCelebs/trey_songz.jpg',
			},

			celeb5: {
				name: 'Brittney Spears',
				birthdate: 'December 2nd',
				knownFor: 'Singer, Dancer',
				src: './assets/celebs/sagittariusCelebs/brittney_spears.jpg',
			},
			celeb6: {
				name: 'Tina Turner',
				birthdate: 'November 28th',
				knownFor: 'Singe',
				src: './assets/celebs/sagittariusCelebs/tina_turner.jpg',
			},
		},
	},

	capricorn: {
		name: 'Capricorn',
		sign: 'Earth',
		symbol: 'The Goat',
		traits: ['Loving', 'Funny', 'Kind', 'Suspicious', 'Spontaneous'],
		date: 'December 22 - January 19',
		birthstone: { month1: dec, month2: jan },
		planet: { name: 'Saturn', src: './assets/planets/saturn.jpg' },
		color: { name: 'Brown', hex: '#a52a2a' },
		icon: { zodiac: 'ti-zodiac-capricorn', sign: 'ti-world' },
		backSplash: { src: './assets/astro_backsplash/capricorn_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/capricorn.png' },
		stageImg: { src: './assets/stage_image/capricorn.jpg' },
		description:
			'Ambitious and disciplined, Capricorn is hardworking and goal-oriented. Practical and responsible, they value structure and perseverance. Patient and determined, they steadily climb toward success. Reserved yet deeply loyal, they take commitments seriously. Their strategic mindset and resilience ensure long-term achievements, making them strong, dependable leaders and providers.',

		celebs: {
			celeb1: {
				name: 'Michelle Obama',
				birthdate: 'January 17th',
				knownFor: '44th First Lady',
				src: './assets/celebs/capricornCelebs/michelle_obama.jpg',
			},

			celeb2: {
				name: 'Denzel Washington',
				birthdate: 'December 28th',
				knownFor: 'Actor',
				src: './assets/celebs/capricornCelebs/denzel_washington.jpg',
			},

			celeb3: {
				name: 'Zayn Malik',
				birthdate: 'January 12th',
				knownFor: 'Singer',
				src: './assets/celebs/capricornCelebs/zayn_malik.jpg',
			},

			celeb4: {
				name: 'LeBron James',
				birthdate: 'December 30th',
				knownFor: 'NBA',
				src: './assets/celebs/capricornCelebs/lebron_james.jpg',
			},

			celeb5: {
				name: 'Jim Carey',
				birthdate: 'January 17th',
				knownFor: 'Comedian, Actor',
				src: './assets/celebs/capricornCelebs/jim_carey.jpg',
			},
			celeb6: {
				name: 'John Legend',
				birthdate: 'December 28th',
				knownFor: 'Singer, Songwriter',
				src: './assets/celebs/capricornCelebs/john_legend.jpg',
			},
		},
	},

	aquarius: {
		name: 'Aquarius',
		sign: 'Air',
		symbol: 'The Water-Bearer',
		traits: ['Restless', 'Creative', 'Egotistical', 'Altruistic', 'Positive'],
		date: 'January 20 - February 18',
		birthstone: { month1: jan, month2: feb },
		planet: { name: 'Uranus', src: './assets/planets/uranus.jpg' },
		color: { name: 'Blue', hex: '#0000ff' },
		icon: { zodiac: 'ti-zodiac-aquarius', sign: 'ti-wind' },
		backSplash: { src: './assets/astro_backsplash/aquarius_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/aquarius.png' },
		stageImg: { src: './assets/stage_image/aquarius.jpg' },
		description:
			'Innovative and independent, Aquarius values originality, intellect, and progress. Visionary and unconventional, they challenge norms and seek change. Social yet individualistic, they connect through ideas rather than emotions. Open-minded and humanitarian, they advocate for the greater good. Their unique perspective and futuristic thinking make them ahead of their time.',

		celebs: {
			celeb1: {
				name: 'Kelly Rowland',
				birthdate: 'February 11th',
				knownFor: 'Singer, Actress',
				src: './assets/celebs/aquariusCelebs/kelly_rowland.jpg',
			},

			celeb2: {
				name: 'Justin Timberlake',
				birthdate: 'January 31st',
				knownFor: 'Singer, Actor',
				src: './assets/celebs/aquariusCelebs/justin_timberlake.jpg',
			},

			celeb3: {
				name: 'Alicia Keys',
				birthdate: 'January 2th',
				knownFor: 'Singer',
				src: './assets/celebs/aquariusCelebs/alicia_keys.jpg',
			},

			celeb4: {
				name: 'The Weekend',
				birthdate: 'February 16th',
				knownFor: 'Singer',
				src: './assets/celebs/aquariusCelebs/the_weekend.jpg',
			},

			celeb5: {
				name: 'Oprah Winfrey',
				birthdate: 'January 29th',
				knownFor: 'Talk Show Host, Actress',
				src: './assets/celebs/aquariusCelebs/oprah_winfrey.jpg',
			},
			celeb6: {
				name: 'Michael B. Jordan',
				birthdate: 'February 9th',
				knownFor: 'Talk Show Host, Actress',
				src: './assets/celebs/aquariusCelebs/michael_b_jordan.jpg',
			},
		},
	},

	pisces: {
		name: 'Pisces',
		sign: 'Water',
		symbol: 'The Fish',
		traits: ['Empathetic', 'Funny', 'Secretive', 'Trust Issues', 'Open-minded'],
		date: 'February 19 - March 20',
		birthstone: { month1: feb, month2: mar },
		planet: { name: 'Neptune', src: './assets/planets/neptune.jpg' },
		color: { name: 'Light Green', hex: '#90ee90' },
		icon: { zodiac: 'ti-zodiac-pisces', sign: 'ti-ripple' },
		backSplash: { src: './assets/astro_backsplash/pisces_backsplash.jpg' },
		statsImg: { src: './assets/astro_stats_imgs/pisces.png' },
		stageImg: { src: './assets/stage_image/pisces.jpg' },
		description:
			'Dreamy and intuitive, Pisces is deeply emotional and creative. Compassionate and empathetic, they feel deeply for others. Imaginative and artistic, they escape into fantasy. Sensitive and spiritual, they seek connection beyond the material world. Their gentle, kind nature makes them natural healers, always guided by their emotions.',

		celebs: {
			celeb1: {
				name: 'Rihanna',
				birthdate: 'February 20th',
				knownFor: 'Singer, Designer, Actress',
				src: './assets/celebs/piscesCelebs/rihanna.jpg',
			},

			celeb2: {
				name: 'Justin Bieber',
				birthdate: 'March 1st',
				knownFor: 'Singer',
				src: './assets/celebs/piscesCelebs/justin_bieber.jpg',
			},

			celeb3: {
				name: 'Drew Barrymore',
				birthdate: 'February 22nd',
				knownFor: 'Actress, Talk Show Host',
				src: './assets/celebs/piscesCelebs/drew_barrymore.jpg',
			},

			celeb4: {
				name: 'Steph Curry',
				birthdate: 'March 14th',
				knownFor: 'NBA',
				src: './assets/celebs/piscesCelebs/steph_curry.jpg',
			},

			celeb5: {
				name: 'Will.i.am',
				birthdate: 'March 15th',
				knownFor: 'Rapper, Producer',
				src: './assets/celebs/piscesCelebs/will_i_am.jpg',
			},
			celeb6: {
				name: 'Erykah Badu',
				birthdate: 'February 26th',
				knownFor: 'Singer, Songwriter',
				src: './assets/celebs/piscesCelebs/erykah_badu.jpg',
			},
		},
	},
};

const {
	aries,
	taurus,
	gemini,
	cancer,
	leo,
	virgo,
	libra,
	scorpio,
	sagittarius,
	capricorn,
	aquarius,
	pisces,
} = astroFacts;

const arrOfSigns = [
	aries,
	taurus,
	gemini,
	cancer,
	leo,
	virgo,
	libra,
	scorpio,
	sagittarius,
	capricorn,
	aquarius,
	pisces,
];

//Static Options Container
const curtainOptions = getById('curtain-options');

for (let i = 0; i < 12; i++) {
	const optionContainer = createElement('div');
	addClass(optionContainer, 'option-container');
	appendChild(curtainOptions, optionContainer);

	const iconContainer = createElement('div');
	addClass(iconContainer, 'icon-container');
	appendChild(optionContainer, iconContainer);

	const signName = createElement('div');
	addClass(signName, 'name-container');
	appendChild(optionContainer, signName);
}

const optionContainers = getByClass('option-container');
const iconContainer = getByClass('icon-container');
const nameContainer = getByClass('name-container');

const [
	ariesToggle,
	taurusToggle,
	geminiToggle,
	cancerToggle,
	leoToggle,
	virgoToggle,
	libraToggle,
	scorpioToggle,
	sagittariusToggle,
	capricornToggle,
	aquariusToggle,
	piscesToggle,
] = optionContainers;

const names = (container, container2, obj) => {
	const sign = createElement('i');
	addClass(sign, 'ti');
	addClass(sign, obj.icon.zodiac);
	appendChild(container, sign);

	textContent(container2, obj.name);
};

names(iconContainer[0], nameContainer[0], aries);
names(iconContainer[1], nameContainer[1], taurus);
names(iconContainer[2], nameContainer[2], gemini);
names(iconContainer[3], nameContainer[3], cancer);
names(iconContainer[4], nameContainer[4], leo);
names(iconContainer[5], nameContainer[5], virgo);
names(iconContainer[6], nameContainer[6], libra);
names(iconContainer[7], nameContainer[7], scorpio);
names(iconContainer[8], nameContainer[8], sagittarius);
names(iconContainer[9], nameContainer[9], capricorn);
names(iconContainer[10], nameContainer[10], aquarius);
names(iconContainer[11], nameContainer[11], pisces);

//Generate Astro Facts Vars and Function
const astroCurtain = getById('astro-curtain');
const headerIcon = getById('header-icon');
const curtainHeaderContainer = select('.curtain-header-container');
const curtainHeader = getById('curtain-header');
const signDateContainer = select('.sign-date-container');
const astroDescription = select('.astro-description-container');
const signType = select('.sign-type-container');
const signTypeIcon = getById('sign-type-icon');
const SymbolNameContainer = select('.symbol-name-container');
const singSymbolIcon = getById('sign-symbol-icon');
const month1Name = select('.month-1-name');
const month1Birthstone = select('.month-1-birthstone');
const month1Img = getById('month-1-img');
const month2Name = select('.month-2-name');
const month2Birthstone = select('.month-2-birthstone');
const month2Img = getById('month-2-img');
const colorName = select('.color-name-container');
const colorSpan = select('.color-span');
const planetName = select('.planet-name-container');
const planetImg = getById('planet-img');
const astroTraitsContainer = select('.astro-traits-container');
const astroResetButton = getById('astro-reset-button');
const stageImg = select('.astro-stage-img');

const toggleAstroFacts = (toggler, obj) => {
	toggler.addEventListener(click, () => {
		if (!astroCurtain.classList.contains('curtain-up')) {
			astroResetButton.style.visibility = 'visible';
			toggleClass(curtainOptions, flexInactive);
			toggleClass(astroCurtain, 'curtain-up');
			headerIcon.style.visibility = 'visible';
			addClass(headerIcon, 'ti');
			toggleClass(headerIcon, obj.icon.zodiac);
			textContent(curtainHeader, obj.name);
			textContent(signDateContainer, obj.date);
			textContent(astroDescription, obj.description);
			textContent(signType, obj.sign);

			setTimeout(() => {
				stageImg.src = obj.stageImg.src;
				toggleClass(stageImg, 'card-zoom');
			}, 100);

			addClass(signTypeIcon, 'ti');
			toggleClass(signTypeIcon, obj.icon.sign);
			textContent(SymbolNameContainer, obj.symbol);
			addClass(singSymbolIcon, 'ti');
			toggleClass(singSymbolIcon, obj.icon.zodiac);
			textContent(month1Name, obj.birthstone.month1.month);
			textContent(month1Birthstone, obj.birthstone.month1.stone);
			month1Img.src = obj.birthstone.month1.src;
			textContent(month2Name, obj.birthstone.month2.month);
			textContent(month2Birthstone, obj.birthstone.month2.stone);
			month2Img.src = obj.birthstone.month2.src;
			textContent(colorName, obj.color.name);
			colorSpan.style.backgroundColor = obj.color.hex;
			textContent(planetName, obj.planet.name);
			planetImg.src = obj.planet.src;
			obj.traits.map((trait) => {
				const li = createElement('li');
				textContent(li, trait);
				appendChild(astroTraitsContainer, li);
			});
		}
	});
};

astroResetButton.addEventListener(click, () => {
	if (astroCurtain.classList.contains('curtain-up')) {
		astroResetButton.style.visibility = 'hidden';
		toggleClass(curtainOptions, flexInactive);
		toggleClass(astroCurtain, 'curtain-up');
		toggleClass(stageImg, 'card-zoom');
		stageImg.src = '';

		headerIcon.style.visibility = 'hidden';
		headerIcon.classList.remove(...headerIcon.classList);

		textContent(curtainHeader, 'Astro Facts');

		signTypeIcon.classList.remove(...signTypeIcon.classList);
		textContent(SymbolNameContainer, '');

		singSymbolIcon.classList.remove(...singSymbolIcon.classList);

		const traitItems = astroTraitsContainer.querySelectorAll('li');
		for (let traits of traitItems) {
			traits.remove();
		}
	}
});

toggleAstroFacts(ariesToggle, aries);
toggleAstroFacts(taurusToggle, taurus);
toggleAstroFacts(geminiToggle, gemini);
toggleAstroFacts(cancerToggle, cancer);
toggleAstroFacts(leoToggle, leo);
toggleAstroFacts(virgoToggle, virgo);
toggleAstroFacts(libraToggle, libra);
toggleAstroFacts(scorpioToggle, scorpio);
toggleAstroFacts(sagittariusToggle, sagittarius);
toggleAstroFacts(capricornToggle, capricorn);
toggleAstroFacts(aquariusToggle, aquarius);
toggleAstroFacts(piscesToggle, pisces);

if (window.innerWidth <= 581) {
	textContent(curtainHeader, 'Choose');
}

//Famous Astro Vars and Function
const ariesCelebs = aries.celebs;
const taurusCelebs = taurus.celebs;
const geminiCelebs = gemini.celebs;
const cancerCelebs = cancer.celebs;
const leoCelebs = leo.celebs;
const virgoCelebs = virgo.celebs;
const libraCelebs = libra.celebs;
const scorpioCelebs = scorpio.celebs;
const sagittariusCelebs = sagittarius.celebs;
const capricornCelebs = capricorn.celebs;
const aquariusCelebs = aquarius.celebs;
const piscesCelebs = pisces.celebs;
const famousCurtain = select('.famous-curtain');
const famousSelectContainer = select('.famous-select-container');
const famousCurtainStats = select('.famous-curtain-stats-container');
const famousPeopleWrapper = select('.famous-people-wrapper');
const famousCurtainHeader = select('.famous-curtain-header-container');
const curtainOpen = 'curtain-open';
const closeCurtain = getById('famous-curtain-btn');
const statsContainerImg = getById('stats-container-img');
const astroNameSpan = select('.stats-astro-name-span');
const statsSymbolName = select('.stats-symbol-span');
const famousImgs = selectAll('.famous-img');
const famousName = selectAll('.famous-name');
const famousBirthdate = selectAll('.famous-birthdate');
const famousKnownFor = selectAll('.famous-knownFor');
const famousSelect = selectAll('.famous-select');
const famousHeader = getById('famous-header');

const famousPersonContainer = selectAll('.famous-person-container');
console.log(famousPersonContainer);

const [
	ariesSelect,
	taurusSelect,
	geminiSelect,
	cancerSelect,
	leoSelect,
	virgoSelect,
	libraSelect,
	scorpioSelect,
	sagittariusSelect,
	capricornSelect,
	aquariusSelect,
	piscesSelect,
] = famousSelect;

function famousImg(arr, obj) {
	arr[0].src = obj.celeb1.src;
	arr[1].src = obj.celeb2.src;
	arr[2].src = obj.celeb3.src;
	arr[3].src = obj.celeb4.src;
	arr[4].src = obj.celeb5.src;
	arr[5].src = obj.celeb6.src;
}

function famousNames(arr, obj) {
	textContent(arr[0], obj.celeb1.name);
	textContent(arr[1], obj.celeb2.name);
	textContent(arr[2], obj.celeb3.name);
	textContent(arr[3], obj.celeb4.name);
	textContent(arr[4], obj.celeb5.name);
	textContent(arr[5], obj.celeb6.name);
}

function famousBirthdays(arr, obj) {
	textContent(arr[0], obj.celeb1.birthdate);
	textContent(arr[1], obj.celeb2.birthdate);
	textContent(arr[2], obj.celeb3.birthdate);
	textContent(arr[3], obj.celeb4.birthdate);
	textContent(arr[4], obj.celeb5.birthdate);
	textContent(arr[5], obj.celeb6.birthdate);
}

function famousKnown(arr, obj) {
	textContent(arr[0], obj.celeb1.knownFor);
	textContent(arr[1], obj.celeb2.knownFor);
	textContent(arr[2], obj.celeb3.knownFor);
	textContent(arr[3], obj.celeb4.knownFor);
	textContent(arr[4], obj.celeb5.knownFor);
	textContent(arr[5], obj.celeb6.knownFor);
}

const toggleFamousAstro = (
	toggler,
	obj1,
	obj2,
	arr1 = famousImgs,
	arr2 = famousName,
	arr3 = famousBirthdate,
	arr4 = famousKnownFor
) => {
	toggler.addEventListener(click, () => {
		if (!famousCurtain.classList.contains(curtainOpen)) {
			toggleClass(famousCurtain, curtainOpen);
			toggleClass(famousSelectContainer, flexInactive);
			toggleClass(famousCurtainStats, flexActive);
			famousHeader.style.display = 'none';
			astroNameSpan.style.visibility = 'visible';

			setTimeout(() => {
				toggleClass(astroNameSpan, 'zoomOut');
			}, 300);

			setTimeout(() => {
				toggleClass(famousPeopleWrapper, flexActive);
				statsSymbolName.style.visibility = 'visible';
				toggleClass(statsSymbolName, 'card-zoom');
			}, 500);

			setTimeout(() => {
				for (let card of famousPersonContainer) {
					toggleClass(card, flexActive);
					toggleClass(card, 'card-zoom');
					closeCurtain.style.visibility = 'visible';
				}
			}, 500);

			setTimeout(() => {
				toggleClass(closeCurtain, 'curtain-toggle');
			}, 500);

			statsContainerImg.src = obj1.statsImg.src;
			textContent(astroNameSpan, obj1.name);
			textContent(statsSymbolName, obj1.symbol);
			famousImg(arr1, obj2);
			famousNames(arr2, obj2);
			famousBirthdays(arr3, obj2);
			famousKnown(arr4, obj2);
		}
	});

	closeCurtain.addEventListener(click, () => {
		if (famousCurtain.classList.contains(curtainOpen)) {
			toggleClass(famousCurtain, curtainOpen);
			toggleClass(famousSelectContainer, flexInactive);
			toggleClass(famousCurtainStats, flexActive);
			toggleClass(famousPeopleWrapper, flexActive);

			setTimeout(() => {
				famousHeader.style.display = 'block';
			}, 300);

			closeCurtain.style.visibility = 'hidden';

			for (let card of famousPersonContainer) {
				toggleClass(card, flexActive);
				toggleClass(card, 'card-zoom');
			}

			setTimeout(() => {
				toggleClass(closeCurtain, 'curtain-toggle');
			}, 500);

			astroNameSpan.style.visibility = 'hidden';
			statsSymbolName.style.visibility = 'hidden';
			toggleClass(astroNameSpan, 'zoomOut');
			toggleClass(statsSymbolName, 'card-zoom');
		}
	});
};

toggleFamousAstro(ariesSelect, aries, ariesCelebs);
toggleFamousAstro(taurusSelect, taurus, taurusCelebs);
toggleFamousAstro(geminiSelect, gemini, geminiCelebs);
toggleFamousAstro(cancerSelect, cancer, cancerCelebs);
toggleFamousAstro(leoSelect, leo, leoCelebs);
toggleFamousAstro(virgoSelect, virgo, virgoCelebs);
toggleFamousAstro(libraSelect, libra, libraCelebs);
toggleFamousAstro(scorpioSelect, scorpio, scorpioCelebs);
toggleFamousAstro(sagittariusSelect, sagittarius, sagittariusCelebs);
toggleFamousAstro(capricornSelect, capricorn, capricornCelebs);
toggleFamousAstro(aquariusSelect, aquarius, aquariusCelebs);
toggleFamousAstro(piscesSelect, pisces, piscesCelebs);

console.log(window.innerWidth);
