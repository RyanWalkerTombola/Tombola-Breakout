interface ComponentHash {
    [entityId: number]: Component;
}

export default class Component {
    static readonly id: number;
    private static nextComponentId: number = 0;
    private static components: typeof Component[] = [];
    private static componentPools: ComponentHash[] = [];

    static registerComponent(component: typeof Component): number {
        this.components[this.nextComponentId] = component;
        const hash: ComponentHash = {};
        this.componentPools[this.nextComponentId] = hash;
        return this.nextComponentId++;
    }

    static addComponents(entityId: number, components: typeof Component[]): void {
        components.forEach((component: typeof Component) => {
            if(this.componentPools[component.id][entityId]) {
                console.log(`Component of id ${component.id} already exists on this entity.`);
                return;
            }
            this.componentPools[component.id][entityId] = new component();
        });
    }

    static logComponentPools(): void {
        //console.log(this.componentPools);

        this.componentPools.forEach((pool: ComponentHash) => {
            console.log(pool);
        });
    }
}