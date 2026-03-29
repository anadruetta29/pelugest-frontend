import type { Appointment } from "../../../entity/appointment";

export interface SearchAppointmentRes {
    appointments: Appointment[];
}