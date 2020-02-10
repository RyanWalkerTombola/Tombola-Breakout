import { Component } from '../entity';
import { Vector, Calc } from '../utilites';
import { resolution } from '../app';
import { left, right, down, up } from '../input';
import Rectangle from './rectangle';
import Breaker from './breaker';

export default class Player extends Component {

    public rectangle: Rectangle | undefined;

    public speed: number = 0;

    Start() {
        
    }

    Update(delta: number) {

        const step = this.speed * delta;
        if (right.isDown && left.isUp) {
            this.entity.position.x += step;
        } else if (left.isDown && right.isUp) {
            this.entity.position.x -= step;
        }

        if (up.isDown && down.isUp) {
            this.entity.position.y -= step;
        } else if (down.isDown && up.isUp) {
            this.entity.position.y += step;
        }

        if (this.rectangle) {
            this.entity.position.x = Calc.Clamp(this.entity.position.x, this.rectangle.HalfSize.x, resolution.x - this.rectangle.HalfSize.x);
        }
    }
}