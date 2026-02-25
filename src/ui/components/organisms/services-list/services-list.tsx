import type { Service } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";
import { ClientsForm } from "../../molecules/clients-form/clients-form";
import ServicesTable from "../../molecules/services-table/services-table";
import { ServicesForm } from "../../molecules/services-form/services-form";
import InfoModal from "../../molecules/info-modal/info-modal";
import StatusIndicator from "../../atoms/status-indicator/status-indicator";
import SearchBar from "../../molecules/search-bar/search-bar";

type Props = {
    services: Service[];

    isFormOpen: boolean;
    serviceToEdit: Service | null;
    onNewService: () => void;
    onEditService: (service: Service) => void;
    onCloseForm: () => void;
    onSubmitService: (e: React.FormEvent<HTMLFormElement>) => void;

    isInfoOpen: boolean;
    serviceToView: Service | null;
    onViewDescription: (service: Service) => void;
    closeInfo: () => void;

    search: string;
    onSearchChange: (value: string) => void;
    onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};



export default function ServicesList({
    services,
    
    onEditService,
    onNewService,

    isFormOpen,
    serviceToEdit,
    onCloseForm,
    onSubmitService,

    onViewDescription,
    isInfoOpen,
    closeInfo,
    serviceToView,

    onSearch,
    onSearchChange,
    search
}: Props) {
    return(
        <div className={style.container}>
            <div className={style.header}>
                <SearchBar 
                   value={search}
                   onChange={onSearchChange}
                   onSearch={onSearch}
                />
                <MainButton
                    enabled
                    text="Nuevo servicio"
                    type="button"
                    onClick={onNewService}
                    icon={addIcon}
                    iconAlt="Nuevo servicio"
                    iconPosition="left"
                    modifier={style.newServiceButton}
                />
            </div>
            <div>
                <ServicesTable
                    services={services}
                    onEditService={onEditService}
                    onViewDescription={onViewDescription}
                />
                {isFormOpen && (
                    <ServicesForm
                        service={serviceToEdit ?? undefined}
                        onSubmit={onSubmitService}
                        onCancel={onCloseForm}
                    />
                )}
                {isInfoOpen && serviceToView && (
                    <InfoModal
                        title={serviceToView.name}
                        onClose={closeInfo}
                    >
                        <p>
                            <strong>Descripción:</strong>{" "}
                            {serviceToView.description}
                        </p>
                        <p>
                        <strong>Duración:</strong>{" "}
                            {serviceToView.estimatedDurationMin} min
                        </p>
                        <p>
                            <strong>Precio base:</strong>{" "}
                            ${serviceToView.basePrice}
                        </p>
                        <p>
                            <strong>Estado:</strong>{" "}
                            <StatusIndicator status={serviceToView.status} />
                        </p>
                    </InfoModal>
                    )}
            </div>
        </div>
    )
}