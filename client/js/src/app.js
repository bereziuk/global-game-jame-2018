import {registerClickDragComponent} from "./components/click-drag";
import {registerSceneMain} from "./scenes/scene-main";
import {registerCheckoutArea} from "./components/checkout-area";
import {registerShopProduct} from "./components/shop-product";
import {registerBasketDropArea} from "./components/basket-drop-area";
import {registerVRHeightFix} from "./components/vr-height-fix";
import {Game} from "./game";


export const game = new Game();

registerClickDragComponent();
registerSceneMain();
registerCheckoutArea();
registerShopProduct();
registerBasketDropArea();
registerVRHeightFix();