import { Component } from '../entity';
import { Vector, Calc } from '../utilites';
import { resolution, halfRes } from '../app';
import Cube from './cube';

export default class Player extends Component {

    public cube: Cube | undefined
    public speed: number = 0;
    public velocity: Vector = Vector.zero;

    Start() {
        this.velocity = new Vector(Math.random() * this.speed * 2 - this.speed, -this.speed);
    }

    Update(delta: number) {
        if (this.cube) {
            if (this.entity.position.x >= resolution.x - this.cube.width / 2) {
                this.velocity.x = -Math.abs(this.velocity.x);
            } else if (this.entity.position.x <= this.cube.width / 2) {
                this.velocity.x = Math.abs(this.velocity.x);
            }
            if (this.entity.position.y >= -this.cube.height / 2) {
                this.velocity.y = -Math.abs(this.velocity.y);
            } else if (this.entity.position.y <= -resolution.y + this.cube.height / 2) {
                this.velocity.y = Math.abs(this.velocity.y);
            }
        }

        this.entity.position = this.velocity.Add(this.entity.position as Vector);
    }
}