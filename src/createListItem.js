export default function createListItem(ul, text) {
	const li = document.createElement("li");
	li.textContent = text;
	ul.appendChild(li);
}
