import { stage } from "./app";
import Camera from "./components/camera";

export const entities: Entity[] = [];

export class Entity extends PIXI.Container {

    public name: string;
    public components: Component[] = [];

    constructor(name: string, components?: Array<new(entity: Entity) => Component>) {
        super();
        this.name = name;
        this.components = (components) ? components.map((component) => new component(this)) : [];
        entities.push(this);
        stage.addChild(this);
    }

    Start(): void {
        this.components.forEach(component => {
            component.Start();
        });
    }

    Update(delta: number, time: number): void {
        this.components.forEach(component => {
            component.Update(delta, time);
        });
    }
}

export abstract class Component {

    public entity: Entity; 

    constructor(entity: Entity) {
        this.entity = entity;
    }

    Start(): void {}
    Update(delta: number, time: number): void {}
}