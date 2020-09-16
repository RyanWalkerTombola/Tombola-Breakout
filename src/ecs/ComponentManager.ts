import { Component } from "./component";

interface ComponentHash {
    [entityId: number]: Component;
}

export class ComponentManager {
    private static nextComponentId: number = 0;
    private static components: typeof Component[] = [];
    private static componentPools: ComponentHash[] = [];
    
    static registerComponent(component: typeof Component): number {
        this.components[this.nextComponentId] = component;
        const hash: ComponentHash = {};
        this.componentPools[this.nextComponentId] = hash;
        return this.nextComponentId++;
    }

    static addCompoents(entityId: number, components: typeof Component[]): void {
        components.forEach((component: typeof Component) => {
            this.componentPools[component.id][entityId] = new component();
        });
    }
}