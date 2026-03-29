import type { Appointment } from "../../../entity/appointment";

export interface GetAllAppointmentsByStatusRes {
    appointments: Appointment[];
}