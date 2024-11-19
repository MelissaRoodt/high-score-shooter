export interface IKinematic {
    position: {x: number, y:number}
    velocity: {x: number, y:number}
    speed: number;
    width: number;
    height: number;

    update(): void
}