import { Session } from '../../../entity/session';

export interface CreateServiceReq {
    name: string;
    description: string;
    estimatedDurationMin: number;
    basePrice: number;
    session: Session;
}
