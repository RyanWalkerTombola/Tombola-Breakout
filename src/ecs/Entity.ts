import Component from "./Component";

export default class Entity {
    static nextEntityId: number = 0;
    readonly id = Entity.nextEntityId++;

    constructor(components: typeof Component[]) {
        Component.addComponents(this.id, components);
    }

    addComponents(components: typeof Component[]) {
        Component.addComponents(this.id, components);
    }
}