import { Appointment } from './../../../entity/appointment';
import type { Product } from "../../../entity/product";

export interface CreateAppointmentRes {
    appointment: Appointment;
}