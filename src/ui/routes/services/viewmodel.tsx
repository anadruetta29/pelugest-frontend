import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import { Errors, RecordStatus, Service, type Client, type CreateClientReq, type DeleteClientReq, type FindRecordStatusByNameReq, type GetAllClientsByStatusReq, type UpdateClientReq } from "../../../domain";
import toast from "react-hot-toast";
import type { GetAllServicesByStatusReq } from "../../../domain/dto/service/request/GetAllServicesByStatusReq";
import type { CreateServiceReq } from "../../../domain/dto/service/request/CreateServiceReq";
import type { UpdateServiceReq } from "../../../domain/dto/service/request/UpdateServiceReq";

export function ViewModel() {

    const { session, logged } = useSession();

    const { serviceRepository, recordStatusRepository } = useRepositories();

    const [services, setServices] = useState<Service[]>([]);
    const [service, setService] = useState<Service | null>(null);

    const [serviceToDelete, setServiceToDelete] = useState<Service | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<"create" | "edit">("create");

    const [serviceToEdit, setServiceToEdit] = useState<Service | null>(null);

    const [serviceToView, setServiceToView] = useState<Service | null>(null);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    useEffect(() => {
        if (logged === true && session) {
            fetchServices();
        }
    }, [logged, session]);

    /*     feature: show services */    

    const fetchServices = async () => {
        if (!session) return;
        try {
            const statusResponse = await recordStatusRepository.findByName({
                name: "ACTIVE",
                session
            } as FindRecordStatusByNameReq);

            const status = RecordStatus.fromObject(statusResponse.recordStatus);

            const response = await serviceRepository.getAllByStatus({
                statusId: status.id,
                session
            } as GetAllServicesByStatusReq);

            setServices(response.services);

        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    /* feature: delete service */ 

    const onDeleteService = (service: Service) => {
        setServiceToDelete(service);
        setIsDeleteOpen(true);
    };

    const cancelDelete = () => {
        setIsDeleteOpen(false);
        setServiceToDelete(null);
    };


    const proceedDelete = async () => {
        if (!serviceToDelete || !session) return;

        await serviceRepository.delete({
            session,
            id: serviceToDelete.id,
        } as DeleteClientReq);

        setIsDeleteOpen(false);
        setServiceToDelete(null);
        fetchServices();
    };

    /* feature: create and update service */ 

    const onEditService = (service: Service) => {
        setFormMode("edit");
        setServiceToEdit(service);
        setIsFormOpen(true);
    };

    const onNewService = () => {
        setFormMode("create");
        setServiceToEdit(null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setServiceToEdit(null);
    };

    const onSubmitService = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (!session) return;

        const formData = new FormData(e.currentTarget);

        try {
            if (formMode === "create") {
                await serviceRepository.create({
                    name: formData.get("name") as string,
                    description: formData.get("description") as string,
                    estimatedDurationMin: Number(formData.get("estimatedDuration")),
                    basePrice: Number(formData.get("basePrice")),
                    session,
                } as CreateServiceReq);

                toast.success("Servicio creado correctamente");
            }

            if (formMode === "edit" && serviceToEdit) {
                const statusName = formData.get("status") as string;

                const statusResponse =
                    await recordStatusRepository.findByName({
                        name: statusName,
                        session,
                    } as FindRecordStatusByNameReq);

                const status = RecordStatus.fromObject(
                    statusResponse.recordStatus
                );

                await serviceRepository.update({
                    id: serviceToEdit.id,
                    name: formData.get("name") as string,
                    description: formData.get("description") as string,
                    estimatedDurationMin: Number(formData.get("estimatedDuration")),
                    basePrice: Number(formData.get("basePrice")),
                    status,
                    session,
                } as UpdateServiceReq);

                toast.success("Servicio actualizado correctamente");
            }

            setIsFormOpen(false);
            setServiceToEdit(null);
            fetchServices();
        } 
        catch (error) {
            toast.error(
                error instanceof Error ? error.message : Errors.UNKNOWN_ERROR
            );
        }
    };

    /* feature: open description */ 

    const onViewDescription = (service: Service) => {
        setServiceToView(service);
        setIsInfoOpen(true);
    };

    const closeInfo = () => {
        setIsInfoOpen(false);
        setServiceToView(null);
    };


    return {
        services,

        isDeleteOpen,
        serviceToDelete,
        onDeleteService,
        cancelDelete,
        proceedDelete,

        isFormOpen,
        serviceToEdit,
        onEditService,
        onNewService,
        closeForm,
        onSubmitService,

        isInfoOpen,
        serviceToView,
        onViewDescription,
        closeInfo
    };
}
