import { setupGame } from "./breakout-game";
let page;
let canvas;

export function loaded(args) {
    page = args.object;
}
export function canvasLoaded(args) {
    canvas = args.object;
    setupGame(args.object);
}
export function indicatorLoaded(args) {}
