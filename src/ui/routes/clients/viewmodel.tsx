import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import { Errors, RecordStatus, type Client, type DeleteClientReq, type FindByNameReq, type GetAllByStatusReq } from "../../../domain";
import toast from "react-hot-toast";

export function ViewModel() {

    const { session, logged } = useSession();

    const { clientRepository, recordStatusRepository } = useRepositories();

    const [clients, setClients] = useState<Client[]>([]);
    const [client, setClient] = useState<Client | null>(null);

    const [clientToDelete, setClientToDelete] = useState<Client | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);

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
            } as FindByNameReq);

            const status = RecordStatus.fromObject(statusResponse.recordStatus);
            console.log(status)

            const response = await clientRepository.getAllByStatus({
                statusId: status.id,
                session
            } as GetAllByStatusReq);
            console.log(response)

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

    /* feature: update client */ 

    const onEditClient = async () => {};

    /* feature: create client */ 

    const onNewClient = async () => {};

    return {
        clients,

        isDeleteOpen,
        clientToDelete,
        onDeleteClient,
        cancelDelete,
        proceedDelete,

        onEditClient,
        
        onNewClient,
    };
}
