import Component from "./Component";

export default class System {
    private static systems: System[] = [];
    enabled: boolean = true;
    private components: typeof Component[];
    private update: Function;

    constructor(components: typeof Component[], update: Function) {
        System.systems.push(this);
        this.components = components;
        this.update = update;
    }

    static updateSystems(delta: number) {
        System.systems.forEach((system: System) => {
            
        });
    }

}