import type { RecordStatus } from "./record-status";
import type { Role } from "./role";

export class User {
    
    public id: string;
    public name: string;
    public lastname: string;
    public email: string;
    public password: string;
    public status: RecordStatus;
    public role: Role;

    private constructor(
        id: string,
        name: string, 
        lastname: string,
        email: string,
        password: string,
        status: RecordStatus,
        role: Role
    ){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.status = status;
        this.role = role;
    }

    static fromObject(object: {[key: string]: any}): User {
        return new User(
            object.id,
            object.name,
            object.lastname,
            object.email,
            object.password,
            object.status,
            object.role
        );
    }
}