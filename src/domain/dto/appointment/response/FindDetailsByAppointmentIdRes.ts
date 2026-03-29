import type { AppointmentDetail } from "../../../entity/appointment-detail";

export interface FindDetailsByAppointmentIdRes {
    details: AppointmentDetail[];
}