export class ServiceProductRequirement {

    public id: string;
    public standardAmountMl: number;

    private constructor(
        id: string,
        standardAmountMl: number
    ) {
        this.id = id;
        this.standardAmountMl = standardAmountMl;
    }

    static fromObject(object: { [key: string]: any }): ServiceProductRequirement {
        return new ServiceProductRequirement(
            object.id,
            object.standardAmountMl
        );
    }
}