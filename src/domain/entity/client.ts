import { RecordStatus } from "./record-status";

export class Client {

    public id: string;
    public name: string;
    public surname: string;
    public mobilePhoneNumber: number;
    public landlinePhoneNumber: number;
    public status: RecordStatus; 

    private constructor(
        id: string,
        name: string,
        surname: string,
        mobilePhoneNumber: number,
        landlinePhoneNumber: number,
        status: RecordStatus
    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.mobilePhoneNumber = mobilePhoneNumber;
        this.landlinePhoneNumber = landlinePhoneNumber;
        this.status = status;
    }

    static fromObject(object: { [key: string]: any }): Client {
        return new Client(
            object.id,
            object.name,
            object.surname,
            object.mobilePhoneNumber,
            object.landlinePhoneNumber,
            RecordStatus.fromObject(object.status)
        );
    }
}