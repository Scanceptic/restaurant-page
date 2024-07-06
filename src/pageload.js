import Image from "./bistro.jpg";

export default function pageload() {
	const content = document.querySelector("#content");

	const headline_div = document.createElement("div");
	headline_div.id = "headline";
	const headline = document.createElement("h1");
	headline.textContent = "Larry's Lobster Bistro";
	headline_div.appendChild(headline);

	const col1 = document.createElement("div");
	col1.classList.add("col");
	col1.id = "col1";

	const col2 = document.createElement("div");
	col2.classList.add("col");
	col2.id = "col2";

	try {
		const myIcon = document.createElement("img");
		myIcon.src = Image;
		myIcon.alt = "Mozzarella and Tomato on a baguette slice";
		col1.appendChild(myIcon);
	} catch {
		/* const myImage = document.createElement("img");
			myImage.src =
				"https://images.unsplash.com/photo-1708980108318-4b843e243080";
			myImage.alt = "Mozzarella and Tomato on a baguette slice";
			col1.appendChild(myImage);
        */

		console.log("Image load failed");
	}

	const attribution = document.createElement("p");
	attribution.innerHTML = `Photo by <a href="https://unsplash.com/@vlado095?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vlado Chabal</a> on <a href="https://unsplash.com/photos/a-piece-of-bread-topped-with-cheese-and-vegetables-nsaEvkk7d1g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
	col1.appendChild(attribution);

	const restaurant_text = document.createElement("p");
	restaurant_text.textContent =
		"Larry's Bistro is the best place to go for premium crab, top-quality lobster, and a whole lot more!";
	col2.appendChild(restaurant_text);

	const container = document.createElement("div");
	container.classList.add("container");
	container.appendChild(col1);
	container.appendChild(col2);
	content.appendChild(headline_div);
	content.appendChild(container);
}
