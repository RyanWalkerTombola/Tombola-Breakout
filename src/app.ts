import { Application, Loader } from './aliases';
import { Entity } from './entity';
import { mouse } from './input';
import { Vector } from './utilites';
import Camera from './components/camera';
import Movement from './components/movement';

// Create a Pixi Application
export const resolution: Vector = new Vector(640, 1136);
export const app: PIXI.Application = new Application({
    width: resolution.x,
    height:  resolution.y,
    antialias: true,
    transparent: false,
    resolution: 1,
    forceFXAA: false,
    roundPixels: true
});
export const stage: PIXI.Container = app.stage;

// Add the canvas to the HTML document
document.body.appendChild(app.view);

// Run the Setup function when finshed loading
Loader.load(Setup);

function Setup(): void {

    // Create the entities in the scene
    new Entity("Camera", [Camera]);
    new Entity("Player", [Movement]);

    // Call the start method on all entites when loaded
    Entity.entities.forEach((entity: Entity) => {
        entity.Start();
    });

    let time: number = 0;
    // Call the update method on all entities each frame and pass the delta time
    app.ticker.add((delta: number) => {
        time += delta;

        Entity.entities.forEach((entity: Entity) => {
            entity.Update(delta, time);
        });
        mouse.wheel = 0;
    });
}