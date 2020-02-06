import { Component } from '../entity';
import { stage, resolution } from '../app';
import { Vector } from '../utilites';

export default class Camera extends Component {

    Update(delta: number, time: number): void {

        const halfRes: Vector = resolution.DivideNum(2);
        stage.pivot = halfRes;
        stage.position = new Vector(halfRes.x, resolution.y);
    }
}