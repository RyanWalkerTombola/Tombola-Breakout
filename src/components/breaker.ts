import { Component } from '../entity';
import { Vector, Calc } from '../utilites';
import { resolution, halfRes } from '../app';
import Rectangle from './rectangle';
import Collider from './collider'

export default class Player extends Component {

    public rectangle: Rectangle | undefined
    public speed: number = 0;
    public velocity: Vector = Vector.zero;

    Start() {
        this.velocity = new Vector(Math.random() * this.speed * 2 - this.speed, -this.speed);
    }

    Update(delta: number) {
        if (this.rectangle) {
            if (this.entity.position.x >= resolution.x - this.rectangle.HalfSize.x) {
                this.velocity.x = -Math.abs(this.velocity.x);
            } else if (this.entity.position.x <= this.rectangle.HalfSize.x) {
                this.velocity.x = Math.abs(this.velocity.x);
            }
            if (this.entity.position.y >= -this.rectangle.HalfSize.y) {
                this.velocity.y = -Math.abs(this.velocity.y);
            } else if (this.entity.position.y <= -resolution.y + this.rectangle.HalfSize.y) {
                this.velocity.y = Math.abs(this.velocity.y);
            }
        }

        // this.entity.position = this.velocity.Add(this.entity.position as Vector);
    }

    OnCollision(collision: Collider) {
        console.log(collision.entity.name);
    }
}