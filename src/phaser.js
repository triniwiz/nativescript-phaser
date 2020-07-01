require('nativescript-browser-polyfill');

function initPhaser() {
    global.window.Phaser = global.Phaser = global.Phaser || require('phaser');
    return global.Phaser;
  }
export default initPhaser();
