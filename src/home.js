/* 
	Homepage module - first page that loads on visiting the site
	also accessed through home button on navbar
*/

import Image from "./bistro.jpg";

export default function pageload() {
	// select div#content
	const content = document.querySelector("#content");
	// wipe out current contents
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	// create headline
	const headline_div = document.createElement("div");
	headline_div.id = "headline";
	const headline = document.createElement("h1");
	headline.textContent = "Larry's Lobster Bistro";
	headline_div.appendChild(headline);
	// create image column
	const col1 = document.createElement("div");
	col1.classList.add("col");
	col1.id = "col1";
	// create text column
	const col2 = document.createElement("div");
	col2.classList.add("col");
	col2.id = "col2";
	// attempt image link
	try {
		const myIcon = document.createElement("img");
		myIcon.src = Image;
		myIcon.alt = "Mozzarella and Tomato on a baguette slice";
		col1.appendChild(myIcon);
	} catch {
		console.log("Image load failed");
	}
	// add attribution to image
	const attribution = document.createElement("p");
	attribution.innerHTML = `Photo by <a href="https://unsplash.com/@vlado095?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vlado Chabal</a> on <a href="https://unsplash.com/photos/a-piece-of-bread-topped-with-cheese-and-vegetables-nsaEvkk7d1g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
	col1.appendChild(attribution);
	// add text to text column (col2)
	const restaurant_text = document.createElement("p");
	restaurant_text.textContent =
		"Larry's Bistro is the best place to go for premium crab, top-quality lobster, and a whole lot more!";
	col2.appendChild(restaurant_text);
	// append all the elements to content
	const container = document.createElement("div");
	container.classList.add("container");
	container.appendChild(col1);
	container.appendChild(col2);
	content.appendChild(headline_div);
	content.appendChild(container);
}
