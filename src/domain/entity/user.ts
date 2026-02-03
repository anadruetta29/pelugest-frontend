import type { RecordStatus } from "./record-status";
import type { Role } from "./role";

export class User {
    
    public id: string;
    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public status: RecordStatus;
    public role: Role;

    private constructor(
        id: string,
        name: string, 
        surname: string,
        email: string,
        password: string,
        status: RecordStatus,
        role: Role
    ){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.status = status;
        this.role = role;
    }

    static fromObject(object: {[key: string]: any}): User {
        return new User(
            object.id,
            object.name,
            object.surname,
            object.email,
            object.password,
            object.status,
            object.role
        );
    }
}