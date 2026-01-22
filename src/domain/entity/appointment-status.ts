import { Optionable } from "./optionable";

export class AppointmentStatus extends Optionable {

    static readonly RESERVED = "RESERVED";
    static readonly ATTENDED = "ATTENDED";
    static readonly MISSED = "MISSED";
    static readonly INPROGRESS = "INPROGRESS";
    static readonly CANCELLED = "CANCELLED";

    public override id: string;
    public override name: string;

    constructor(id: string, name: string) {
        super(id, name);
        this.id = id;
        this.name = name;
    }

    public static getAppointmentStatusList(): AppointmentStatus[] {
        return [
            new AppointmentStatus(AppointmentStatus.RESERVED, "Reservado"),
            new AppointmentStatus(AppointmentStatus.ATTENDED, "Atendido"),
            new AppointmentStatus(AppointmentStatus.MISSED, "No atendido"),
            new AppointmentStatus(AppointmentStatus.INPROGRESS, "En Curso"),
            new AppointmentStatus(AppointmentStatus.CANCELLED, "Cancelado"),
        ];
    }

    public static fromObject(object: { [key: string]: any }): AppointmentStatus {
        return new AppointmentStatus(object.id, object.name);
    }
}