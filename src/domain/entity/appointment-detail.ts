export class AppointmentDetail {
    
    public id: string;
    public price: number;
    public durationMin: number;

    private constructor(
        id: string,
        price: number,
        durationMin: number
    ){
        this.id = id,
        this.price = price,
        this.durationMin = durationMin
    }

    static fromObject(object: { [key: string]: any }): AppointmentDetail {
        return new AppointmentDetail(
            object.id,
            object.price,
            object.durationMin
        );
    }
}
