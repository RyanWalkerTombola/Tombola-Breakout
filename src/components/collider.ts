import { Component } from '../entity';
import ColliderRect from './colliderRect';

export default abstract class Collider extends Component {

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

        let hit: Collider | null;

        switch (typeof Collider) {
            case typeof ColliderRect:
                hit = this.HitTestRectangle(collider as ColliderRect);
                break;
            default:
                console.log("No collision method");
                hit = null;
        }

        if (hit) {
            this.entity.OnCollision(collider);
        }
    }

    HitTestRectangle(collision: ColliderRect): Collider | null { return null };
}