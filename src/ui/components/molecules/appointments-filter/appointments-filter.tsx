import type { AppointmentStatus, Client, User } from "../../../../domain";
import InputLabel from "../../atoms/input-label/input-label";
import Selector from "../../atoms/selector/selector";
import style from "./style.module.css";

type Props = {
    clients: Client[];
    hairdressers: User[];
    statuses: AppointmentStatus[];

    selectedDate?: string;
    selectedClientId?: string;
    selectedHairdresserId?: string;
    selectedStatus?: string;

    onDateChange: (value: string) => void;
    onClientChange: (value: string) => void;
    onHairdresserChange: (value: string) => void;
    onStatusChange: (value: string) => void;

    onClearFilters: () => void;
};

export default function AppointmentsFilter({
    clients,
    hairdressers,
    statuses,
    selectedDate,
    selectedClientId,
    selectedHairdresserId,
    selectedStatus,
    onDateChange,
    onClientChange,
    onHairdresserChange,
    onStatusChange,
    onClearFilters
}: Props) {
    return (
        <div className={style.container}>

            <div className={style.field}>
                <InputLabel
                    id="date"
                    name="date"
                    type="datetime-local"
                    placeholder="Fecha"
                    value={selectedDate}
                    onChange={onDateChange}
                />
            </div>

            <div className={style.field}>
                <Selector
                    name="client"
                    id="client"
                    defaultValue={selectedClientId}
                    placeholder="Cliente"
                    options={clients.map(c => ({
                        value: c.id,
                        label: c.name
                    }))}
                    onChange={onClientChange}
                />
            </div>

            <div className={style.field}>
                <Selector
                    name="hairdresser"
                    id="hairdresser"
                    defaultValue={selectedHairdresserId}
                    placeholder="Peluquero"
                    options={hairdressers.map(h => ({
                        value: h.id,
                        label: h.name
                    }))}
                    onChange={onHairdresserChange}
                />
            </div>

            <div className={style.field}>
                <Selector
                    name="status"
                    id="status"
                    defaultValue={selectedStatus}
                    placeholder="Estado"
                    options={statuses.map(s => ({
                        value: s.name,
                        label: s.name
                    }))}
                    onChange={onStatusChange}
                />
            </div>

            <button
                type="button"
                className={style.clearButton}
                onClick={onClearFilters}
            >
                Limpiar filtros
            </button>

        </div>
    );
}