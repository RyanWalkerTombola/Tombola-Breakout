import { Component } from '../entity';
import { Graphics } from '../aliases';
import { Vector } from '../utilites';
import { resolution } from '../app';

export default class Cube extends Component {

    private graphics: PIXI.Graphics = new Graphics();

    public width: number = 0;
    public height: number = 0;
    public lineWidth: number = 0;

    Start(): void {

        this.graphics.beginFill(0x888888)
        .lineStyle(this.lineWidth, 0x666666, 1, 0)
        .drawRect(-this.width / 2, -this.height / 2, this.width, this.height)
        .endFill();
        this.entity.addChild(this.graphics);
    }

}