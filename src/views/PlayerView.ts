import { PlayerModel } from "../models/PlayerModel";

export class PlayerView {
    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    draw(player: PlayerModel) {
        this.context.fillStyle = player.color;
        //this.context.fillRect(player.position.x, player.position.y, player.width, player.height);
    
        const textMetrics = this.context.measureText(player.gfx);
        const textX = player.position.x + (player.width - textMetrics.width) / 2;
        const textY = player.position.y + (player.height + parseInt(this.context.font, 10)) / 2;
    
        this.context.fillText(player.gfx, textX, textY);
    }
    
}