import type { Appointment } from "../../../entity/appointment";

export interface GetAllAppointmentsRes {
    appointments: Appointment[];
}