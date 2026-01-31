import { useNavigate, useParams } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { useRepositories } from "../../../core";
import { useState } from "react";
import { Errors, type Client, type FindByIdReq } from "../../../domain";
import toast from "react-hot-toast";

export function ViewModel() {

   const navigate = useNavigate();

    const { id } = useParams(); 
    const { userId, session } = useSession();
    const { clientRepository } = useRepositories();

    const [clients, setClients] = useState<Client[]>([]);

    const fetchClients = async () => {
        try {
            const client = await clientRepository.findById({
                id: id,
                session: session
            } as FindByIdReq);
            
            
            
        } 
        catch (error) {
            toast.error(error instanceof Error ? error.message : Errors.UNKNOWN_ERROR);
        }

    }
    
    return {
        
    };
    
}
