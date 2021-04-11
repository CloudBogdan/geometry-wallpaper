import anime from "animejs";
import { Vector2 } from "../math";

class Bubble {
    size: number
    type: number
    element: HTMLElement
    position: Vector2
    
    constructor(position: Vector2) {
        
        this.position = position;
        this.size = anime.random(80, 200);
        this.type = Math.floor(anime.random(0, 3));
        
        this.element = document.createElement("div");
        this.element.classList.add("bubble");
        this.element.classList.add(`colored-${ this.type }`);
        
        document.body.className = `colored-${ this.type }`;
        
        anime.set(this.element, {
            width: this.size + "px",
            height: this.size + "px",
            borderRadius: Math.floor(anime.random(0, 2)) === 1 ? "50%" : 0,
            opacity: 1,
            
            left: this.position.x + "px",
            top: this.position.y + "px",
            translateX: "-50%",
            translateY: "-50%",
            rotate: anime.random(-180, 180),
        });
        anime({
            targets: this.element,

            left: this.position.x + "px",
            top: [this.position.y + "px", this.position.y + 200 + "px"],
            translateX: "-50%",
            translateY: "-50%",
            rotate: anime.random(-180, 180),

            opacity: [1, 1, 0],
            
            easing: "easeOutExpo",
            duration: 1000,
            delay: 300,
            complete: ()=> {
                this.element.remove();
            }
        });
        
        document.body.appendChild(this.element);
        
    }
}
export default Bubble;