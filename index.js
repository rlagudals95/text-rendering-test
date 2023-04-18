import { drawTextBy2dContext } from "./textRenderBy2d";
import { drawTextByWeb } from "./textRenderByWeb";

function handleChangeInput() {
    drawTextBy2dContext();
    drawTextByWeb();
}

handleChangeInput();