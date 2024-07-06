import pageload from "./pageload.js";
import "./style.css";

const content = document.querySelector("#content");
content.appendChild(pageload());
