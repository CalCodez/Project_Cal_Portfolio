const reelControls = getByClass('reel-control');
const [prevBtn, nextBtn] = reelControls;
const cardReel = getById('cardReel');
const backSplashContainer = getById('backSplashContainer');
const astroCards = getByClass('astro-card');

let newImg = createElement('img');
newImg.src = aries.backSplash.src;
backSplashContainer.append(newImg);

const splash = (obj) => {
	const right = 'slideInRight';
	const left = 'slideInLeft';

	nextBtn.addEventListener(click, function () {
		const currentCard = cardReel.firstElementChild;
		cardReel.appendChild(currentCard);
		for (let img of obj) {
			if (cardReel.firstElementChild.id == img.name) {
				newImg.src = img.backSplash.src;
				backSplashContainer.append(newImg);
			}
		}
		for (let card of astroCards) {
			if (!card.classList.contains(left) || !card.classList.contains(right)) {
				toggleClass(card, right);
				setTimeout(() => {
					toggleClass(card, right);
				}, 500);
			}
		}
	});

	prevBtn.addEventListener(click, () => {
		const lastCard = cardReel.lastElementChild;
		cardReel.prepend(lastCard);
		for (let img of obj) {
			if (cardReel.firstElementChild.id == img.name) {
				newImg.src = img.backSplash.src;
				backSplashContainer.append(newImg);
			}
		}
		for (let card of astroCards) {
			if (!card.classList.contains(left) || !card.classList.contains(right)) {
				toggleClass(card, left);
				setTimeout(() => {
					toggleClass(card, left);
				}, 500);
			}
		}
	});
};

splash(arrOfSigns);
