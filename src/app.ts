import { Application, Loader } from './aliases';
import { Entity, Component } from './entity';
import { Vector } from './utilites';
import { mouse } from './input';
import Camera from './components/camera';
import Cube from './components/cube';
import Player from './components/player';
import Breaker from './components/breaker';

// Create a Pixi Application
export const resolution: Vector = new Vector(640, 1136);
export const halfRes: Vector = resolution.DivideNum(2);
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
    {
        const camera: Entity = new Entity("Camera", [Camera]);
        camera.position = new Vector(-halfRes.x, halfRes.y);
    }

    {
        const player: Entity = new Entity("Player", [Player, Cube]);
        player.position = new Vector(halfRes.x, -150);
    
        const cube: Cube = player.GetComponent<Cube>(Cube);
        cube.width = 200;
        cube.height = 50;
        cube.lineWidth = 10;
    
        const playerScript: Player = player.GetComponent<Player>(Player);
        playerScript.cube = cube;
        playerScript.speed = 6;
    }

    {
        const breaker: Entity = new Entity("Breaker", [Cube, Breaker]);
        breaker.position = new Vector(halfRes.x, -250);

        const cube: Cube = breaker.GetComponent<Cube>(Cube);
        cube.width = 50;
        cube.height = 50;
        cube.lineWidth = 10;
    }

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