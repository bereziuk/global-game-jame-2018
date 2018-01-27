import {registerClickDragComponent} from "./components/click-drag";
import {registerSceneMain} from "./scenes/scene-main";
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
    product.setAttribute("dynamic-body", { shape: "box", mass: 0.01 });
    product.setAttribute("material", { color: "blue" });
    product.setAttribute("scale", "0.2 0.2 0.2");

    product.addEventListener('collide', function (e) {
      const elId = e.detail.body.el.id;
      const tapeId = "tape-box";
      console.log(elId);

      if (elId === tapeId) {
        // setTimeout(() => {
          const elPos = product.getAttribute("position");
          console.log(elPos.x);


          product.applyImpulse(
            new CANNON.Vec3(-1, 1, 0),
            new CANNON.Vec3().copy(product.getComputedAttribute('position'))
          );

          // product.pause();
          // product.setAttribute("position", "x", elPos.x - 1.2);
          // product.setAttribute("position", "y", elPos.y + 0.05);
          // product.play();
        // }, 0);
      }
  });

    parent.appendChild(product);
}


