import { Component } from '../entity';
import { stage, resolution } from '../app';
import { mouse } from '../input';

export default class Camera extends Component {

    public zoom: number = 1;

    Update(delta: number): void {

        stage.pivot = this.entity.position;
        stage.position = resolution.DivideNum(2);
        stage.scale.set(1 / this.zoom);
    }
}