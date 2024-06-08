//``Root Variable--
const root = document.documentElement;

// Scrolling Marquee looping function

// Scrolling Marquee looping function
const elmDisplayed = getComputedStyle(root).getPropertyValue(
	"--marquee-elms-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elms", marqueeContent.children.length);

for (let i = 0; i < elmDisplayed; i += 1) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
