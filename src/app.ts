import { Application, Loader } from './aliases';
import { Vector } from './utilites';
import { mouse } from './input';
import Entity from './ecs/Entity';
import Component from './ecs/Component';
import System from './ecs/System';

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

class Position extends Component {
    static readonly id: number = Component.registerComponent(Position);
    x: number = 0;
    y: number = 0;
}

class Velocity extends Component {
    static readonly id: number = Component.registerComponent(Velocity);
    x: number = 0;
    y: number = 0;
}

Loader.load(Setup);
function Setup(): void {
    const player: Entity = new Entity([Position, Velocity]);
    const cube: Entity = new Entity([Position, Velocity]);
    const enemy: Entity = new Entity([Position]);
    const pixi: Entity = new Entity([Velocity]);

    const movement: System = new System([Position, Velocity], (delta: number, position: Position, velocity: Velocity) => {
        position.x += velocity.x * delta;
        position.y += velocity.y * delta;
    });

    Component.logComponentPools();
}