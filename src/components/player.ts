import { Component } from '../entity';
import { Vector, Calc } from '../utilites';
import { resolution } from '../app';
import { left, right } from '../input';
import Cube from './cube';

export default class Player extends Component {

    public cube: Cube | undefined
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

        if (this.cube) {
            this.entity.position.x = Calc.Clamp(this.entity.position.x, this.cube.width / 2, resolution.x - this.cube.width / 2);
        }
    }
}