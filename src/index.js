import "./style.css";
import pageload from "./pageload.js";

const content = document.querySelector("#content");
content.appendChild(pageload());
