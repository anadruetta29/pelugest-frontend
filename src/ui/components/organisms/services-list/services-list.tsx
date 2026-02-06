import type { Service } from "../../../../domain";
import MainButton from "../../atoms/main-button/main-button";
import ClientsTable from "../../molecules/clients-table/clients-table";
import addIcon from "../../../assets/icons/add-new.svg";
import style from "./style.module.css";
import ConfirmModal from "../../molecules/confirm-modal/confirm-modal";
import { ClientsForm } from "../../molecules/clients-form/clients-form";
import ServicesTable from "../../molecules/services-table/services-table";
import { ServicesForm } from "../../molecules/services-form/services-form";

type Props = {
    services: Service[];

    isDeleteOpen: boolean;
    serviceToDelete: Service | null;
    onDeleteService: (service: Service) => void;
    onConfirmDelete: () => void;
    onCancelDelete: () => void;

    isFormOpen: boolean;
    serviceToEdit: Service | null;
    onNewService: () => void;
    onEditService: (service: Service) => void;
    onCloseForm: () => void;
    onSubmitService: (e: React.FormEvent<HTMLFormElement>) => void;
};



export default function ServicesList({
    services,
    
    onDeleteService,
    onEditService,
    onNewService,
    serviceToDelete,
    isDeleteOpen,
    onCancelDelete,
    onConfirmDelete,

    isFormOpen,
    serviceToEdit,
    onCloseForm,
    onSubmitService,
}: Props) {
    return(
        <div className={style.container}>
            <div className={style.newServiceButton}>
                <MainButton
                    enabled
                    text="Nuevo servicio"
                    type="button"
                    onClick={onNewService}
                    icon={addIcon}
                    iconAlt="Nuevo servicio"
                    iconPosition="left"
                />
            </div>
            <div>
                <ServicesTable
                    services={services}
                    onDeleteService={onDeleteService}
                    onEditService={onEditService}
                />
                
                {isDeleteOpen && (
                    <ConfirmModal
                        title="Desactivar servicio"
                        description={
                            serviceToDelete
                                ? `¿Estás seguro que querés desactivar este servicio?`
                                : ""
                        }
                        confirmText="Desactivar"
                        cancelText="Cancelar"
                        onConfirm={onConfirmDelete}
                        onCancel={onCancelDelete}
                    />
                )}

                {isFormOpen && (
                    <ServicesForm
                        service={serviceToEdit ?? undefined}
                        onSubmit={onSubmitService}
                        onCancel={onCloseForm}
                    />
                )}
            </div>
        </div>
    )
}