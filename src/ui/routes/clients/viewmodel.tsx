import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import { Errors, RecordStatus, type Client, type FindByNameReq, type GetAllByStatusReq } from "../../../domain";
import toast from "react-hot-toast";

export function ViewModel() {
    const { session } = useSession();
    const { clientRepository, recordStatusRepository } = useRepositories();

    const [clients, setClients] = useState<Client[]>([]);

    
    useEffect(() => {
        fetchClients();
    }, [session]);


    const fetchClients = async () => {
        if (!session) return;
        try {
            const statusResponse = await recordStatusRepository.findByName({
                name: "ACTIVE",
                session
            } as FindByNameReq);
            console.log("statusResponse:", statusResponse);
            console.log("recordStatus:", statusResponse.recordStatus);


            const status = RecordStatus.fromObject(statusResponse.recordStatus);

            const response = await clientRepository.getAllByStatus({
                statusId: status.id,
                session
            } as GetAllByStatusReq);

            setClients(response.clients);

        } catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }
    };

    const onDeleteClient = async () => {};
    const onEditClient = async () => {};
    const onNewClient = async () => {};

    return {
        clients,
        onDeleteClient,
        onEditClient,
        onNewClient
    };
}
