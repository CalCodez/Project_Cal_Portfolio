const projectLiImages = getByClass('project-li-images');
const projectLiTitles = getByClass('project-li-titleS');
const projectLiLinks = getByClass('project-li-links');

const [
	googleImg,
	saasImg,
	responsiveImg,
	calTubeImg,
	tributeImg,
	loginsImg,
	favzImg,
	pokemonImg,
] = projectLiImages;

const [
	googleTitle,
	saasTitle,
	responsiveTitle,
	calTubeTitle,
	tributeTitle,
	loginsTitle,
	favzTitle,
	pokemonTitle,
] = projectLiTitles;

const [
	googleLink,
	saasLink,
	responsiveLink,
	calTubeLink,
	tributeLink,
	loginsLink,
	favzLink,
	pokemonLink,
] = projectLiLinks;

const listDisplayAssign = (img, src, title, name, link, href) => {
	img.src = src;
	textContent(title, name);
	link.href = href;
};

listDisplayAssign(
	googleImg,
	google.src,
	googleTitle,
	google.title,
	googleLink,
	google.href
);

listDisplayAssign(
	saasImg,
	saas.src,
	saasTitle,
	saas.title,
	saasLink,
	saas.href
);

listDisplayAssign(
	responsiveImg,
	responsive.src,
	responsiveTitle,
	responsive.title,
	responsiveLink,
	responsive.href
);

listDisplayAssign(
	calTubeImg,
	calTube.src,
	calTubeTitle,
	calTube.title,
	calTubeLink,
	calTube.href
);

listDisplayAssign(
	tributeImg,
	tribute.src,
	tributeTitle,
	tribute.title,
	tributeLink,
	tribute.href
);

listDisplayAssign(
	loginsImg,
	logins.src,
	loginsTitle,
	logins.title,
	loginsLink,
	logins.href
);

listDisplayAssign(
	favzImg,
	favz.src,
	favzTitle,
	favz.title,
	favzLink,
	favz.href
);

listDisplayAssign(
	pokemonImg,
	pokemon.src,
	pokemonTitle,
	pokemon.title,
	pokemonLink,
	pokemon.href
);
