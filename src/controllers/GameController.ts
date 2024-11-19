import { GameView } from "../views/GameView.js";
import { PlayerController } from "./PlayerController.js";

export class GameController {
    view: GameView;
    player: PlayerController;
    //bullets: Bullet[] = [];
    //enemies: Enemy[] = [];

    constructor() {
        this.view = new GameView();
        this.player = new PlayerController(this.view.getContext(), this.view.getCanvas());

        //this.spawnEnemies();
        this.gameLoop();
        //console.log(PlayerData.playerData.health);
    }

    // spawnEnemies() {
    //     setInterval(() => {
    //         const x = Math.random() * (this.view.canvas.width - 40);
    //         this.enemies.push(new Enemy(x, 0));
    //     }, 1000);
    // }

    update() {
        this.player.update();
        // Player movement
        // if (this.keys["ArrowLeft"]) this.player.moveLeft();
        // if (this.keys["ArrowRight"]) this.player.moveRight();

        // Player shooting
        // if (this.keys[" "] && this.bullets.length < 10) {
        //     this.bullets.push(this.player.shoot());
        // }

        // Update bullets
        // this.bullets.forEach((bullet) => bullet.update());

        // Update enemies
        // this.enemies.forEach((enemy) => enemy.update());

        // Collision detection
        // this.bullets = this.bullets.filter((bullet) =>
        //     bullet.y > 0 &&
        //     !this.enemies.some((enemy, i) => {
        //         if (
        //             bullet.x < enemy.x + enemy.width &&
        //             bullet.x + bullet.width > enemy.x &&
        //             bullet.y < enemy.y + enemy.height &&
        //             bullet.y + bullet.height > enemy.y
        //         ) {
        //             this.enemies.splice(i, 1);
        //             return true;
        //         }
        //         return false;
        //     })
        // );

        // Remove off-screen enemies
        // this.enemies = this.enemies.filter((enemy) => enemy.y < this.view.canvas.height);
    }

    draw() {
        this.view.clear();
        this.player.draw();
        // this.view.drawPlayer(this.player);
        // this.bullets.forEach((bullet) => this.view.drawBullet(bullet));
        // this.enemies.forEach((enemy) => this.view.drawEnemy(enemy));
    }

    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}
