import animate from '../../canvas-lib/animate';
import CanvasImage from '../../canvas-lib/displayObjects/image';

export default class extends CanvasImage {
  animate(change = () => {}, endCB = () => {}) {
    const airplane = this;
    const pos = {
      x: airplane.x,
      y: airplane.y,
    };
    const maxX = pos.x + 350;
    const amplitude = 2.5;
    const update = () => {
      time += 0.06;
      pos.x += 5;
      pos.y += Math.sin(time) * amplitude;
      angle = Math.atan2(airplane.y - pos.y, airplane.x - pos.x) * 180 / Math.PI;
      airplane.set(pos);
      airplane.angle = angle - 140;
      change();

      if (pos.x < maxX) {
        requestAnimationFrame(update);
      } else {
        endCB();
      }
    };
    let time = 0.8;
    let angle;

    update();
  }

  stopAnimations() {
    this.isStopAnimation = true;
  }

  show(duration, endCB = () => {}) {
    this.alpha = 0;
    animate(this, {
      duration,
      props: {
        alpha: 1
      },
      onComplete: endCB,
    });
  }
}
