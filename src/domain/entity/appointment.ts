import type { AppointmentDetail } from "./appointment-detail";
import type { AppointmentStatus } from "./appointment-status";
import type { Client } from "./client";
import type { User } from "./user";

export class Appointment {
    
    public id: string;
    public startDateTime: Date;
    public estimatedEndDateTime: Date;
    public status: AppointmentStatus;
    public client: Client;
    public hairdresser: User;
    public details: AppointmentDetail[];

    private constructor(
        id: string,
        startDateTime: Date,
        estimatedEndDateTime: Date,
        status: AppointmentStatus,
        client: Client,
        hairdresser: User,
        details: AppointmentDetail[]
    ) {
        this.id = id;
        this.startDateTime = startDateTime;
        this.estimatedEndDateTime = estimatedEndDateTime;
        this.status = status;
        this.client = client;
        this.hairdresser = hairdresser;
        this.details = details
    }

    static fromObject(object: {[key: string]: any}): Appointment {
        return new Appointment(
            object.id,
            object.startDateTime,
            object.estimatedEndDateTime,
            object.status,
            object.client,
            object.hairdresser,
            object.details
        );
    }

}