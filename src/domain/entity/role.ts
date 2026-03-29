import { Optionable } from "./optionable";

export class Role extends Optionable {

    static readonly HAIRDRESSER = "HAIRDRESSER";
    static readonly ADMIN = "ADMIN";

    constructor(id: string, name: string) {
        super(id, name);
    }

    public static getRoleList(): Role[] {
        return [
            new Role(Role.HAIRDRESSER, "Peluquero"),
            new Role(Role.ADMIN, "Administrador"),
        ];
    }

    public static getStaffRoles(): Role[] {
        return Role.getRoleList().filter(r => r.id !== Role.HAIRDRESSER);
    }

    public static fromObject(object: { [key: string]: any }): Role {
        return new Role(object.id, object.name);
    }
}