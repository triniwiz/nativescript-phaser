import Phaser from './phaser';
import { isAndroid } from 'tns-core-modules/platform';
function game(options) {
  const title = options.title || 'tns-phaser-game';
  // CANVAS
  const AUTO = 0;
  const CANVAS = 1;
  const WEBGL = 2;
  const type = options.type || CANVAS;
  const customEnvironment = true;
  const domCreateContainer = false;
  const current = options;
  const scene = options.scene || null;
  const antialias = options.antialias || true;
  const transparent = options.transparent || false;
  const physics = options.physics || null;
  const preventLoop = options.preventLoop;
  const onRender = options.onRender;
  const canvas = options.canvas;
  let context;
  let is2D = false;
  switch (type) {
    case 2:
      context = canvas.getContext('webgl');
      is2D = false;
      break;
    default:
      context = canvas.getContext('2d');
      is2D = true;
      // handle raf using gameloop
      if(isAndroid){
        canvas.nativeView.setHandleInvalidationManually(true);
      }else {
        canvas.nativeView.handleInvalidationManually = true;
      }
      break;
  }

  global.__context = context || null;
  global.document.readyState = 'complete';

  let width;
  let height;
  if (isAndroid) {
    width = canvas.nativeView.getWidth();
    height = canvas.nativeView.getHeight();
  } else {
    width = canvas.nativeView.width;
    height = canvas.nativeView.height;
  }
  width = options.width || width;
  height = options.height || height;


  delete current.domCreateContainer;
  delete current.customEnvironment;
  let config = {
    width,
    height,
    canvas,
    context,
    title,
    type,
    scene,
    antialias,
    transparent,
    physics,
    customEnvironment,
  };

  config = Object.assign(config, current);
  const game = new Phaser.Game(config);
  game.width = width;
  game.height = height;
  const render = function () {
    requestAnimationFrame(render);
    onRender && onRender();
    if (isAndroid && !is2D) {
      canvas.nativeView.flush();
    } else if (!is2D) {
      canvas.nativeView.flush();
    }
  };
  if (!preventLoop) {
    render();
  }

  return game;
}
export default game;
