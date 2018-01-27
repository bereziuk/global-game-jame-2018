import {registerClickDragComponent} from "./components/click-drag";
import {registerSceneMain} from "./scenes/scene-main";
import { setTimeout } from "timers";

$(document).ready(() => {
  alert(1);
  generateTape();
  registerClickDragComponent();
  registerSceneMain();
});

function generateTape() {
    console.log(tape);

    const parent = document.getElementById("tape");

    createNewProduct(1, parent);
    createNewProduct(2, parent);
    createNewProduct(3, parent);
    createNewProduct(4, parent);
    createNewProduct(5, parent);
    createNewProduct(6, parent);
    createNewProduct(7, parent);
    createNewProduct(8, parent);
    createNewProduct(9, parent);
    createNewProduct(10, parent);
    createNewProduct(11, parent);

    setTimeout();
}

function createNewProduct(index, parent) {
    const entity = document.createElement("a-entity");

    const boxHorizontal = document.createElement("a-box");
    const boxHorizontalPosition = (0.2 * index).toString() + " 0 0";
    boxHorizontal.setAttribute("position", boxHorizontalPosition);
    boxHorizontal.setAttribute("dynamic-body", { shape: "box", mass: 0 });
    boxHorizontal.setAttribute("material", { src: "#texture-tape" });
    boxHorizontal.setAttribute("scale", "0.2 0.05");

    const boxVerticalPosition = (((0.2 * index) + 0.08)) + " 0.06 0";
    const boxVertical = document.createElement("a-box");
    boxVertical.setAttribute("position", boxVerticalPosition);
    boxVertical.setAttribute("dynamic-body", { shape: "box", mass: 0 });
    boxVertical.setAttribute("material", { opacity: 0 });
    boxVertical.setAttribute("scale", "0.02 0.1 1");

    entity.appendChild(boxHorizontal);
    entity.appendChild(boxVertical);
    parent.appendChild(entity);
}