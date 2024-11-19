import { PlayerData } from "../data/PlayerData.js";
import { IKinematic } from "./IKinematic.js";
import { ISprite } from "./ISprite.js";

export class PlayerModel implements IKinematic, ISprite {
    position: {x: number, y:number};
    velocity: {x: number, y:number};
    speed: number;
    width: number;
    height: number;
    color: string;
    gfx: string;

    constructor(position: {x: number, y:number}, velocity: {x: number, y:number}, speed: number, width: number, height: number, color: string, gfx: string){
        this.position = position;
        this.velocity = velocity;
        this.speed = speed;
        this.width = width;
        this.height = height;

        this.color = color;
        this.gfx = gfx;
    }

    //------------------------------------
    // IKinematic
    //------------------------------------
    update(){
        this.position.x += this.velocity.x * this.speed;
        this.position.y += this.velocity.y * this.speed;
    }
}