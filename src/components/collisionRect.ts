import { Component, Entity } from '../entity';
import { Vector } from '../utilites';
import Collider from './collider';

export default class CollisionRect extends Collider {

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

    HitTestRectangle(c: CollisionRect): void {
        let distance: Vector = Vector.To(this.entity.position).DistanceTo(Vector.To(c.entity.position));
        let combinedHalfSize = this.halfSize.Add(c.halfSize);

        // Check for a collision on the x axis
        if (Math.abs(distance.x) < combinedHalfSize.x) {
            // A collision might be occurring. Check for a collision on the y axis
            if (Math.abs(distance.y) < combinedHalfSize.y) {
                // There's definitely a collision happening
                console.log("hit");
            }
        }
    }

    // hitTest(r1: Rectangle, r2: Rectangle): boolean {

    //     // Define the variables we'll need to calculate*
    //     let hit, vx, vy;

    //     // hit will determine whether there's a collision
    //     hit = false;

    //     // // Find the center points of each sprite
    //     // r1.centerX = r1.x + r1.width / 2;
    //     // r1.centerY = r1.y + r1.height / 2;
    //     // r2.centerX = r2.x + r2.width / 2;
    //     // r2.centerY = r2.y + r2.height / 2;

    //     // // Find the half-widths and half-heights of each sprite
    //     // r1.halfWidth = r1.width / 2
    //     // r1.halfHeight = r1.height / 2
    //     // r2.halfWidth = r2.width / 2
    //     // r2.halfHeight = r2.height / 2

    //     // Calculate the distance vector between the sprites
    //     // vx = r1.centerX - r2.centerX;
    //     // vy = r1.centerY - r2.centerY;
    //     let distance = (r1.entity.position as Vector).Add(r1.offset).Subtract((r2.entity.position as Vector).Subtract(r2.offset))

    //     // Figure out the combined half-widths and half-heights
    //     let combinedHalfSize = r1.size.Add(r2.size);

    //     // Check for a collision on the x axis
    //     if (Math.abs(distance.x) < combinedHalfSize.x) {
    //         // A collision might be occurring. Check for a collision on the y axis
    //         if (Math.abs(distance.y) < combinedHalfSize.y) {
    //             // There's definitely a collision happening
    //             hit = true;
    //         } else {
    //             // There's no collision on the y axis
    //             hit = false;
    //         }
    //     } else {
    //         // There's no collision on the x axis
    //         hit = false;
    //     }
    //     // `hit` will be either `true` or `false`
    //     return hit;
    // };
}