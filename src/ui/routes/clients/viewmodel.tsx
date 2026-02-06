import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import { Errors, RecordStatus, type Client, type CreateClientReq, type DeleteClientReq, type FindRecordStatusByNameReq, type GetAllClientsByStatusReq, type UpdateClientReq } from "../../../domain";
import toast from "react-hot-toast";

export function ViewModel() {

    const { session, logged } = useSession();

    const { clientRepository, recordStatusRepository } = useRepositories();

    const [clients, setClients] = useState<Client[]>([]);
    const [client, setClient] = useState<Client | null>(null);

    const [clientToDelete, setClientToDelete] = useState<Client | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<"create" | "edit">("create");

    const [clientToEdit, setClientToEdit] = useState<Client | null>(null);

    useEffect(() => {
        if (logged === true && session) {
            fetchClients();
        }
    }, [logged, session]);

    /*     feature: show clients */    

    const fetchClients = async () => {
        if (!session) return;
        try {
            const statusResponse = await recordStatusRepository.findByName({
                name: "ACTIVE",
                session
            } as FindRecordStatusByNameReq);

            const status = RecordStatus.fromObject(statusResponse.recordStatus);

            const response = await clientRepository.getAllByStatus({
                statusId: status.id,
                session
            } as GetAllClientsByStatusReq);

            setClients(response.clients);

        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    /* feature: delete client */ 

    const onDeleteClient = (client: Client) => {
        setClientToDelete(client);
        setIsDeleteOpen(true);
    };

    const cancelDelete = () => {
        setIsDeleteOpen(false);
        setClientToDelete(null);
    };


    const proceedDelete = async () => {
        if (!clientToDelete || !session) return;

        await clientRepository.delete({
            session,
            id: clientToDelete.id,
        } as DeleteClientReq);

        setIsDeleteOpen(false);
        setClientToDelete(null);
        fetchClients();
    };

    /* feature: create and update client */ 

    const onEditClient = (client: Client) => {
        setFormMode("edit");
        setClientToEdit(client);
        setIsFormOpen(true);
    };

    const onNewClient = () => {
        setFormMode("create");
        setClientToEdit(null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setClientToEdit(null);
    };

    const onSubmitClient = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (!session) return;

        const formData = new FormData(e.currentTarget);

        try {
            if (formMode === "create") {
                await clientRepository.create({
                    name: formData.get("name") as string,
                    surname: formData.get("surname") as string,
                    mobilePhoneNumber: formData.get("mobilePhoneNumber") as string,
                    landlinePhoneNumber: formData.get("landlinePhoneNumber") as string,
                    session,
                } as CreateClientReq);

                toast.success("Cliente creado correctamente");
            }

            if (formMode === "edit" && clientToEdit) {
                const statusName = formData.get("status") as string;

                const statusResponse =
                    await recordStatusRepository.findByName({
                        name: statusName,
                        session,
                    } as FindRecordStatusByNameReq);

                const status = RecordStatus.fromObject(
                    statusResponse.recordStatus
                );

                await clientRepository.update({
                    id: clientToEdit.id,
                    name: formData.get("name") as string,
                    surname: formData.get("surname") as string,
                    mobilePhoneNumber: formData.get("mobilePhoneNumber") as string,
                    landlinePhoneNumber: formData.get("landlinePhoneNumber") as string,
                    status,
                    session
                } as UpdateClientReq);

                toast.success("Cliente actualizado correctamente");
            }

            setIsFormOpen(false);
            setClientToEdit(null);
            fetchClients();
        } 
        catch (error) {
            toast.error(
                error instanceof Error ? error.message : Errors.UNKNOWN_ERROR
            );
        }
    };


    return {
        clients,

        isDeleteOpen,
        clientToDelete,
        onDeleteClient,
        cancelDelete,
        proceedDelete,

        isFormOpen,
        clientToEdit,
        onEditClient,
        onNewClient,
        closeForm,
        onSubmitClient,
    };
}
