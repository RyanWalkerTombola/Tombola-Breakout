import { stage } from "./app";

export class Entity extends PIXI.Container {

    static entities: Entity[] = [];

    public name: string;
    public components: Component[] = [];

    constructor(name: string, components?: Array<new(entity: Entity) => Component>) {
        super();
        this.name = name;
        this.components = (components) ? components.map((component) => new component(this)) : [];
        Entity.entities.push(this);
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

    Destroy() {
        this.destroy();
        Entity.entities.splice(Entity.entities.indexOf(this));
    }

    static Find(name: string): Entity {
        return Entity.entities.filter((entity: Entity) => entity.name === name)[0];
    }

    GetComponent<T extends Component>(component: new(entity: Entity) => Component): T {
        return this.components.filter((comp) => comp instanceof component)[0] as T;
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