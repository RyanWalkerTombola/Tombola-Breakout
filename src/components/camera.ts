import { Component } from '../entity';
import { stage, halfRes } from '../app';
import { Vector } from '../utilites';

export default class Camera extends Component {

    Start() {
        
        stage.pivot = halfRes.MultiplyNum(-1);
    }

    Update(delta: number, time: number): void {
        
        stage.position = this.entity.position;
    }
}