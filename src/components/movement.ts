import { Component } from '../entity';
import { Graphics } from '../aliases';
import { Vector } from '../utilites';

export default class Movement extends Component {

    private graphics: PIXI.Graphics = new Graphics();

    Start(): void {

        this.graphics.beginFill(0x888888)
        .lineStyle(10, 0x666666, 1, 0)
        .drawCircle(0, 0, 100)
        .endFill();
        this.entity.addChild(this.graphics);

        this.entity.position = new Vector(0, 0)
    }

}