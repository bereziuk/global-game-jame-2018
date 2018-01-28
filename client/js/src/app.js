import { registerClickDragComponent } from "./components/click-drag";
import { registerSceneMain } from "./scenes/scene-main";
import { setTimeout } from "timers";

$(document).ready(() => {
  registerClickDragComponent();
  registerSceneMain();
  generateProducts();
});

function generateProducts() {
  const parent = document.getElementById("tape");

  setTimeout(() => {
    createNewProduct(1, parent);
  }, 5000);
}

function createNewProduct(index, parent) {
  const product = document.createElement("a-box");
  const boxHorizontalPosition = "0 1.5 0";

  product.classList.add("product");
  product.setAttribute("position", boxHorizontalPosition);
  product.setAttribute("dynamic-body", { shape: "hull", mass: 1 });
  product.setAttribute("click-drag");
  product.setAttribute("material", { color: "blue" });
  product.setAttribute("scale", "0.2 0.2 0.2");

  product.addEventListener('collide', function (e) {
    const elId = e.detail.body.el.id;
    const tapeId = "tape-box";
    console.log(elId);

    if (elId === tapeId) {
      setTimeout(() => {
        const elPos = product.getAttribute("position");
        product.body.fixedRotation = true;
        product.body.updateMassProperties();
        // product.components["dynamic-body"].pause();
        // product.setAttribute("position", "x", elPos.x - 1);
        // product.setAttribute("position", "y", elPos.y + 0.001);
        console.log(parseFloat(elPos.x - 0.2).toFixed(2));
        console.log(parseFloat(elPos.y + 0.2).toFixed(2));
        console.log(elPos.z);
        product.body.position.set(parseFloat(elPos.x - 0.2).toFixed(2), elPos.y + 1.2, elPos.z);

        // product.components["dynamic-body"].play();
      }, 20);
    }
  });

  parent.appendChild(product);
}
