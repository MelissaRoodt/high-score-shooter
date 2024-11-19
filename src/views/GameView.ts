export class GameView {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d")!;
    }

    public getContext(): CanvasRenderingContext2D{
        return this.context;
    }

    public getCanvas(): HTMLCanvasElement{
        return this.canvas;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
