/* 
	About module - provides contact details 
	and other info about restaurant
	accessed through about button on navbar
*/

import Image from "./images/bistro.jpg";

export default function about() {
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
	menubtn.style.fontWeight = "300";
	const aboutbtn = document.getElementById("about");
	aboutbtn.style.fontWeight = "700";
	// create headline
	const headline_div = document.createElement("div");
	headline_div.id = "headline";
	const headline = document.createElement("h1");
	headline.textContent = "About Us";
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
		"The Bistro has been serving top-notch grub since 1978! The owner, Larry Larriman, was originally a lobster fisherman based in Maine, but one day while visiting the popular tourist destination of Oldbury, Birmingham, he noticed a distinct lack of lobster dishes at the local pub. This sparked an idea for what would soon become the Bistro you see before you today!";
	col2.appendChild(restaurant_text);
	// append all the elements to content
	const container = document.createElement("div");
	container.classList.add("container");
	// create container heading
	const container_heading = document.createElement("h2");
	container_heading.id = "containerheading";
	container_heading.textContent = "Take a look at our long history!";
	container.appendChild(container_heading);
	container.appendChild(col1);
	container.appendChild(col2);
	content.appendChild(headline_div);
	content.appendChild(container);
}
