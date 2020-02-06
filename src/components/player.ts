import { Component } from '../entity';
import { Vector, Calc } from '../utilites';
import { resolution } from '../app';
import { left, right } from '../input';
import Cube from './cube';

export default class Player extends Component {

    private cube: Cube | undefined

    public speed = 5;

    Start() {
        this.cube = this.entity.GetComponent<Cube>(Cube);
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