import { setupGame } from "./breakout-game";
let page;
let canvas;

export function loaded(args) {
    page = args.object;
}
export function canvasLoaded(args) {
    canvas = args.object;
    const context = args.object.getContext("webgl");
    setTimeout(()=>{
        setupGame(args.object, context);
    },1000)
}
export function indicatorLoaded(args) {}
