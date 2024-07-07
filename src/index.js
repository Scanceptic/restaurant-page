import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

home();

/* Write Tab-switching logic under here */
/* 
    Event listener for each button in the navbar
    wipe out the current content of div#content (while(firstchild) get firstchild remove firstchild)
    Run the tab module (home.js, menu.js, about.js) to populate div#content with the new tab
*/
const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const aboutbtn = document.querySelector("#about");

homebtn.addEventListener("click", () => {
	home();
});
menubtn.addEventListener("click", () => {
	menu();
});
aboutbtn.addEventListener("click", () => {
	about();
});
/* Darkmode button */
const darkmodebtn = document.querySelector("#darkmode");
let lightmode = true;

darkmodebtn.addEventListener("click", () => {
	const root = document.querySelector(":root");
	const darkmodeicon = document.querySelector("#darkmodeicon");
	// if currently lightmode switch to dark
	if (lightmode === true) {
		root.style.setProperty("--bg-color-primary", "#262626");
		root.style.setProperty("--bg-color-secondary", "#0a0a0a");
		root.style.setProperty("--bg-color-highlight", "#525252");
		root.style.setProperty("--text-color-primary", "#ffffff");
		root.style.setProperty("--text-color-secondary", "#ffffff");
		root.style.setProperty("--text-color-highlight", "#ffffff");
		root.style.setProperty("--border-color", "#ffffff");

		// flip button icon color
		darkmodeicon.setAttribute("src", "./images/darkmodeicon.svg");
		// flip state to darkmode
		lightmode = false;
	} else if (lightmode === false) {
		// else if currently darkmode switch to light
		root.style.setProperty("--bg-color-primary", "#10b981");
		root.style.setProperty("--bg-color-secondary", "#047857");
		root.style.setProperty("--bg-color-highlight", "#6ee7b7");
		root.style.setProperty("--text-color-primary", "#000000");
		root.style.setProperty("--text-color-secondary", "#ffffff");
		root.style.setProperty("--text-color-highlight", "#000000");
		root.style.setProperty("--border-color", "#000000");

		// flip button icon color
		darkmodeicon.setAttribute("src", "./images/lightmodeicon.svg");
		// flip state to lightmode
		lightmode = true;
	}
});
