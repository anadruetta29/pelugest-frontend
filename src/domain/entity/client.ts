export class Client {

    public id: string;
    public name: string;
    public lastname: string;
    public mobilePhoneNumber: number;
    public landlinePhoneNumber: number;

    private constructor(
        id: string,
        name: string,
        lastname: string,
        mobilePhoneNumber: number,
        landlinePhoneNumber: number
    ) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.mobilePhoneNumber = mobilePhoneNumber;
        this.landlinePhoneNumber = landlinePhoneNumber;
    }

    static fromObject(object: { [key: string]: any }): Client {
        return new Client(
            object.id,
            object.name,
            object.lastname,
            object.mobilePhoneNumber,
            object.landlinePhoneNumber
        );
    }
}