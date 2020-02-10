import { Component, Entity } from '../entity';
import { Graphics } from '../aliases';
import { Vector } from '../utilites';
import { resolution } from '../app';

export default class Rectangle extends Component {

    private graphics: PIXI.Graphics = new Graphics();

    private size: Vector = Vector.zero;
    private halfSize: Vector = Vector.zero;

    set Size(value: Vector) {
        this.size = value;
        this.halfSize = value.DivideNum(2);
    }

    get Size() {
        return this.size;
    }

    get HalfSize() {
        return this.halfSize;
    }

    public offset: Vector = Vector.zero;
    public lineWidth: number = 0;

    Start(): void {
        const pos: Vector = this.offset.Subtract(this.halfSize);

        this.graphics.beginFill(0x888888)
        .lineStyle(this.lineWidth, 0x666666, 1, 0)
        .drawRect(pos.x, pos.y, this.size.x, this.size.y)
        .endFill();
        this.entity.addChild(this.graphics);
    }

    // collisionRectangle(r1: any, r2: any) {
    //     if (r2.length === undefined) {
    //         r2 = [r2];
    //     }
    
    //     let futureX = new PIXI.Rectangle(r1.x + r1.vx, r1.y, r1.width, r1.height);
    //     let futureY = new PIXI.Rectangle(r1.x, r1.y + r1.vy, r1.width, r1.height);
    
    //     r2.forEach((r2: any) => {
    //         if (this.hitTestRectangle(futureX, r2)) {
    //             if (r1.vx > 0) {
    //                 r1.vx = -r1.width + r2.x - r1.x;
    //                 onCollision(r2, "Right");
    //             } else if (r1.vx < 0) {
    //                 r1.vx = r2.width + r2.x - r1.x;
    //                 onCollision(r2, "Left");
    //             }
    //         }
    //         if (this.hitTestRectangle(futureY, r2)) {
    //             if (r1.vy > 0) {
    //                 r1.vy = -r1.height + r2.y - r1.y;
    //                 onCollision(r2, "Down");
    //             } else if (r1.vy < 0) {
    //                 r1.vy = r2.height + r2.y - r1.y;
    //                 onCollision(r2, "Up");
    //             }
    //         }
    
    //     });
    // }
}