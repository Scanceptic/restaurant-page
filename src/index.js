import pageload from "./pageload.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

pageload();

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
	pageload();
});
menubtn.addEventListener("click", () => {
	menu();
});
aboutbtn.addEventListener("click", () => {
	about();
});
