import { PlayerModel } from "../models/PlayerModel.js";
import { PlayerView } from "../views/PlayerView.js";

export class PlayerController {
    model: PlayerModel;
    view: PlayerView;
    keys: { [key: string]: boolean } = {};

    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.model = new PlayerModel(
            {x:(canvas.width / 2) - 10, y:(canvas.height / 2 ) + 200},
            {x:0, y:0}, 1.8, 32, 32, "white", "0_|_0");
        this.view = new PlayerView(context);

        this.setupEventListeners();
    }

    update() {
        // Horizontal movment
        if (this.keys["a"]) {
            this.model.velocity.x = -1;
        } else if (this.keys["d"]) {
            this.model.velocity.x = 1;
        } else {
            this.model.velocity.x = 0;
        }

        // Vertical Movement
        if (this.keys["w"]) {
            this.model.velocity.y = -1;
        } else if (this.keys["s"]) {
            this.model.velocity.y = 1;
        } else {
            this.model.velocity.y = 0;
        }

        // Update the player's position based on velocity
        this.model.update();
    }

    draw() {
        // Draw the player on the canvas
        this.view.draw(this.model);
    }

    setupEventListeners() {
        // Listen for keyboard input to update the keys state
        window.addEventListener("keydown", (e) => (this.keys[e.key] = true));
        window.addEventListener("keyup", (e) => (this.keys[e.key] = false));
    }
}
