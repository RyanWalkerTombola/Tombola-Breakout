import { Component, Entity } from '../entity';
import { Vector } from '../utilites';
import Collider from './collider';

export default class ColliderRect extends Collider {

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

    HitTestRectangle(c: ColliderRect): Collider | null {

        const thisCenter: Vector =  Vector.To(this.entity.position).Add(this.offset);
        const targetCenter: Vector = Vector.To(c.entity.position).Add(c.offset);

        const distance: Vector = thisCenter.DistanceTo(targetCenter);
        const combinedHalfSize = this.halfSize.Add(c.halfSize);

        if (Math.abs(distance.x) < combinedHalfSize.x) {
            if (Math.abs(distance.y) < combinedHalfSize.y) {
                return c;
            }
        }
        return null;
    }
}