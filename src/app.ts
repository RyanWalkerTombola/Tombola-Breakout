import { Application, Loader } from './aliases';
import { Entity, Component } from './entity';
import Camera from './components/camera';
import { mouse } from './input';
import { Vector } from './utilites';

// Create a Pixi Application
export const resolution: Vector = new Vector(375, 667);
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

    const entities: Entity[] = [];

    const camera = new Entity("Camera");
    camera.components.push(new Camera(camera));
    entities.push(camera);

    // Call the start method on all entites when loaded
    entities.forEach((entity: Entity) => {
        entity.Start();
    });

    let time: number = 0;
    // Call the update method on all entities each frame and pass the delta time
    app.ticker.add((delta: number) => {
        time += delta;

        entities.forEach((entity: Entity) => {
            entity.Update(delta, time);
        });
        mouse.wheel = 0;
    });
}