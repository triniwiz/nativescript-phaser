import TNSPhaser from 'nativescript-phaser';
import { TNSCanvasRenderingContext2D } from 'nativescript-canvas-plugin';
import { ImageSource, fromFile } from '@nativescript/core/image-source/image-source';
declare var Phaser;



let page;
let canvas;

export function loaded(args) {
    page = args.object;
}
export function canvasLoaded(args) {
    canvas = args.object;
    //canvas.nativeView.handleInvalidationManually = true;
    (global as any).__debug_browser_polyfill_image = true;
    var game = new TNSPhaser.game({
        canvas,
       // height: 600,
        type: 2,
        backgroundColor: '#efefef',
        scene: {
            preload: preload,
            create: create
        }
    });

}
export function indicatorLoaded(args) {}


function preload ()
{
    this.load.spritesheet('muybridge', '~/examples/animation/muybridge/assets/muybridge01.png', { frameWidth: 119, frameHeight: 228 });
}

function create ()
{
    var config = {
        key: 'run',
        frames: 'muybridge',
        frameRate: 15,
        repeat: -1
    };

    this.anims.create(config);

    //  Each frame is 119px wide

    const group = this.add.group();

    group.createMultiple({ key: 'muybridge', frame: 0, repeat: 8 });

    Phaser.Actions.GridAlign(group.getChildren(), {
        width: 9,
        height: 1,
        cellWidth: 119,
        y: 170
    });

    this.anims.staggerPlay('run', group.getChildren(), -100);
}




