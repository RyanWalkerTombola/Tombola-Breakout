import { Component } from '../entity';
import CollisionRect from './collisionRect';

export default class Collider extends Component {

    static colliders: Collider[] = [];

    public layers: string[] = [];
    public masks: string[] = [];

    Start(): void {
        Collider.colliders.push(this);
    }

    Update(): void {
        Collider.colliders.map((collider) => {
            if (collider !== this) {

                this.masks.map((mask: string) => {
                    let canCollide: boolean = false;
                    collider.layers.map((layer: string) => {
                        if (mask === layer) {
                            canCollide = true;
                        }
                    })
                    if (canCollide) {
                        this.HitTest(collider);
                    }
                });
            }
        });
    }

    HitTest(collider: Collider): void {
        switch (typeof Collider) {
            case typeof CollisionRect:
                this.HitTestRectangle(collider as CollisionRect);
                break;
            default:
                console.log("default");
        }
    }

    HitTestRectangle(collider: CollisionRect): void {};
}