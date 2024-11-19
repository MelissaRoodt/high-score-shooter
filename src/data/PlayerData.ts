type Player = {
    health: number;
    score: number;
    bullets: number;
};

export class PlayerData {
    public static data: Player = {
        health: 3,
        score: 0,
        bullets: 48
    };
}
