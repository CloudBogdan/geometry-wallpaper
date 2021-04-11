import Bubble from "./classes/Bubble";
import { Vector2 } from "./math";

const bubbles: Bubble[] = [];
let time: number = 0;

addEventListener("mousemove", e=> {
    time ++;

    if (time % 10 == 0) {
        bubbles.push(new Bubble(new Vector2(e.clientX, e.clientY)));
    }

});