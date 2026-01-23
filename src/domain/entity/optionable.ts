export class Optionable {

    public id: string;
    public name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public static fromObject(object: { [key: string]: any }): Optionable | null {
        if (!object) return null;

        return new Optionable(
            object.id,
            object.name
        );
    }
    
    // --> Methods <-- //

    public static mapToOptionable(selected: string[], catalog: Optionable[]): Optionable[] {
        return selected
            .map(name => catalog.find(item => item.name === name))
            .filter((item): item is Optionable => item !== undefined);
    };

    public static toOptionable(selected: string, catalog: Optionable[]){
        return catalog.find(item => item.name === selected);
    }

    public static mapToNames(selectedOptions: Optionable[]): string[] {
        return selectedOptions.map(option => option.name);
    }

    public static mapToName(selected: string, catalog: Optionable[]): string {
        const found = catalog.find(item => item.id === selected);
        return found ? found.name : ''; 
    }

}
