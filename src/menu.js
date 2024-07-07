/* 
	menu module - provides list of items and prices
	available at the restaurant, incl. weekly specials
	accessed through menu button on navbar
*/

import Image from "./images/bistro.jpg";

export default function menu() {
	// select div#content
	const content = document.querySelector("#content");
	// wipe out current contents
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	// bold active tab
	const homebtn = document.getElementById("home");
	homebtn.style.fontWeight = "300";
	const menubtn = document.getElementById("menu");
	menubtn.style.fontWeight = "700";
	const aboutbtn = document.getElementById("about");
	aboutbtn.style.fontWeight = "300";
	// create headline
	const headline_div = document.createElement("div");
	headline_div.id = "headline";
	const headline = document.createElement("h1");
	headline.textContent = "Our Menu";
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
		"Today's special is raw oysters with a side of aggressive crabs! Fight for your food at the dinner table and at home for the next 3-5 days!";
	col2.appendChild(restaurant_text);
	// append all the elements to content
	const container = document.createElement("div");
	container.classList.add("container");
	// create container heading
	const container_heading = document.createElement("h2");
	container_heading.id = "containerheading";
	container_heading.textContent = "Scout out the options before you visit!";
	container.appendChild(container_heading);
	container.appendChild(col1);
	container.appendChild(col2);
	content.appendChild(headline_div);
	content.appendChild(container);
}
