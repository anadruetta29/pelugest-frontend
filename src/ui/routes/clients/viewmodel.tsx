import { useNavigate } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState, useEffect } from "react";
import {
    Errors,
    RecordStatus,
    type Client,
    type CreateClientReq,
    type FindRecordStatusByNameReq,
    type UpdateClientReq,
} from "../../../domain";
import toast from "react-hot-toast";
import type { GetAllClientsReq } from "../../../domain/dto/client/request/GetAllClientsReq";
import type { SearchClientReq } from "../../../domain/dto/client/request/SearchClientReq";

export function ViewModel() {

    const { session, logged } = useSession();
    const { clientRepository, recordStatusRepository } = useRepositories();

    const [isLoading, setIsLoading] = useState(true);

    const [clients, setClients] = useState<Client[]>([]);

    const [search, setSearch] = useState("");
    const [searchClients, setSearchClients] = useState<Client[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState<"create" | "edit">("create");
    const [clientToEdit, setClientToEdit] = useState<Client | null>(null);

    useEffect(() => {
        if (logged && session) {
            fetchClients();
        }
    }, [logged, session]);

    /* ==============================
       FEATURE: GET ALL CLIENTS
    ============================== */

    const fetchClients = async () => {
        if (!session) return;

        setIsLoading(true);

        try {
            const response = await clientRepository.getAll({
                session,
            } as GetAllClientsReq);

            setClients(response.clients);
        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        } 
        finally {
            setIsLoading(false);
        }
    };

    /* ==============================
       FEATURE: CREATE / UPDATE
    ============================== */

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
                    session,
                } as UpdateClientReq);

                toast.success("Cliente actualizado correctamente");
            }

            setIsFormOpen(false);
            setClientToEdit(null);

            await fetchClients();
        } 
        catch (error) {
            toast.error(
                error instanceof Error ? error.message : Errors.UNKNOWN_ERROR
            );
        }
    };

    /* ==============================
       FEATURE: SEARCH
    ============================== */

    const handleSearchChange = (value: string) => {
        setSearch(value);

        if (value.trim() === "") {
            clearSearch();
        }
    };

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session) return;

        if (!search.trim()) {
            clearSearch();
            return;
        }

        try {
            setIsLoading(true);
            setIsSearching(true);

            const response = await clientRepository.search({
                name: search,
                page: 1,
                limit: 10,
                session,
            } as SearchClientReq);

            setSearchClients(response.clients);
        } 
        catch (error) {
            console.error("Error searching clients:", error);
        } 
        finally {
            setIsLoading(false);
        }
    };

    const clearSearch = () => {
        setSearch("");
        setIsSearching(false);
        setSearchClients([]);
    };

    const displayedClients = isSearching ? searchClients : clients;

    return {
        isLoading,

        displayedClients,

        search,
        isSearching,
        handleSearchChange,
        handleSearch,

        isFormOpen,
        clientToEdit,
        onEditClient,
        onNewClient,
        closeForm,
        onSubmitClient,
    };
}