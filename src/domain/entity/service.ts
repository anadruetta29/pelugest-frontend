import type { RecordStatus } from "./record-status";
import type { ServiceProductRequirement } from "./service-product-requirement";

export class Service {

    public id: string;
    public name: string;
    public description: string;
    public estimatedDurationMin: number;
    public basePrice: number;
    public serviceProductRequirement: ServiceProductRequirement;
    public status: RecordStatus;

    private constructor(
        id: string,
        name: string,
        description: string,
        estimatedDurationMin: number,
        basePrice: number,
        serviceProductRequirement: ServiceProductRequirement,
        status: RecordStatus
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.estimatedDurationMin = estimatedDurationMin;
        this.basePrice = basePrice;
        this.serviceProductRequirement = serviceProductRequirement;
        this.status = status;
    }

    static fromObject(object: { [key: string]: any }): Service {
        return new Service(
            object.id,
            object.name,
            object.description,
            object.estimatedDurationMin,
            object.basePrice,
            object.serviceProductRequirement,
            object.status
        );
    }
}