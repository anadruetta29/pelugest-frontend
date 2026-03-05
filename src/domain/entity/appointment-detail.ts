import type { Service } from "./service";

export class AppointmentDetail {
    
    public id: string;
    public price: number;
    public durationMin: number;
    public service: string;

    private constructor(
        id: string,
        price: number,
        durationMin: number,
        service: string
    ){
        this.id = id,
        this.price = price,
        this.durationMin = durationMin,
        this.service = service
    }

    static fromObject(object: { [key: string]: any }): AppointmentDetail {
        return new AppointmentDetail(
            object.id,
            object.price,
            object.durationMin,
            object.service
        );
    }
}
