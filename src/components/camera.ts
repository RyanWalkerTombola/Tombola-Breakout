import { Component } from '../entity';
import { stage, halfRes } from '../app';
import { Vector } from '../utilites';

export default class Camera extends Component {

    Update(delta: number, time: number): void {

        stage.pivot = halfRes.MultiplyNum(-1);
        stage.position = new Vector(-halfRes.x, halfRes.y);
    }
}