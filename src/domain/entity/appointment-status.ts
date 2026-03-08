import { Optionable } from "./optionable";

export class AppointmentStatus extends Optionable {

    static readonly RESERVED = "RESERVED";
    static readonly ATTENDED = "ATTENDED";
    static readonly MISSED = "MISSED";
    static readonly IN_PROGRESS = "IN_PROGRESS";
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
            new AppointmentStatus(AppointmentStatus.IN_PROGRESS, "En Progreso"),
            new AppointmentStatus(AppointmentStatus.CANCELLED, "Cancelado"),
        ];
    }

    public static getAppointmentStatusListEnum(): AppointmentStatus[] {
        return [
            new AppointmentStatus(AppointmentStatus.RESERVED, "RESERVED"),
            new AppointmentStatus(AppointmentStatus.ATTENDED, "ATTENDED"),
            new AppointmentStatus(AppointmentStatus.MISSED, "MISSED"),
            new AppointmentStatus(AppointmentStatus.IN_PROGRESS, "IN_PROGRESS"),
            new AppointmentStatus(AppointmentStatus.CANCELLED, "CANCELLED"),
        ];
    }

    public static fromObject(object: { [key: string]: any }): AppointmentStatus {
        return new AppointmentStatus(object.id, object.name);
    }
}