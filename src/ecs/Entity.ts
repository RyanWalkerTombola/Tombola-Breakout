import { Component } from "./Component";
import { ComponentManager } from "./ComponentManager";
import { EntityManager } from "./EntityManager";

export class Entity {
    readonly id = EntityManager.nextEntityId++;
    constructor(components: typeof Component[]) {
        ComponentManager.addCompoents(this.id, components);
    }
}