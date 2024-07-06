import Image from "./bistro.jpg";

export default function pageload() {
	const content = document.querySelector("#content");

	const headline_div = document.createElement("div");
	headline_div.id = "headline";
	const headline = document.createElement("h1");
	headline.textContent = "Larry's Lobster Bistro";
	headline_div.appendChild(headline);

	const container = document.createElement("div");
	container.classList.add("container");
	const co1l = document.createElement("div");
	col1.classList.add("col1");
	container.appendChild(col1);
	const co12 = document.createElement("div");
	col2.classList.add("col2");
	container.appendChild(col2);

	const myImage = new Image();
	myImage.src = Image;
	myImage.alt = "Mozzarella and Tomato on a baguette slice";
	col1.appendChild(myImage);
	const attribution = document.createElement("p");
	const attribution_link = document.createElement("a");
	attribution_link.textContent = "Vlado Chabal";
	attribution_link.href =
		"https://unsplash.com/@vlado095?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
	const unsplash_link = document.createElement("a");
	unsplash_link.textContent = "Unsplash";
	unsplash_link.href =
		"https://unsplash.com/photos/a-piece-of-bread-topped-with-cheese-and-vegetables-nsaEvkk7d1g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
	attribution.textContent = `Photo by ${attribution_link} on ${unsplash_link}`;
	col1.appendChild(attribution);

	const restaurant_text = document.createElement("p");
	restaurant_text.textContent =
		"Larry's Bistro is the best place to go for premium crab, top-quality lobster, and a whole lot more!";
	col2.appendChild(restaurant_text);

	content.appendChild(container);
}
