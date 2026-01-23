import { Optionable } from "./optionable";

export class RecordStatus extends Optionable {

    static readonly ACTIVE = "ACTIVE";
    static readonly INACTIVE = "INACTIVE";
    static readonly DELETED = "DELETED";

    public override id: string;
    public override name: string;

    constructor(id: string, name: string) {
        super(id, name);
        
        this.id = id;
        this.name = name;
    }

    public static getRecordStatusList(): RecordStatus[] {
        return [
            new RecordStatus(RecordStatus.ACTIVE, "ACTIVE"),
            new RecordStatus(RecordStatus.INACTIVE, "INACTIVE"),
            new RecordStatus(RecordStatus.DELETED, "DELETED")
        ];
    }

    public static fromObject(object: { [key: string]: any }): RecordStatus {
        return new RecordStatus(object.id, object.name);
    }
}