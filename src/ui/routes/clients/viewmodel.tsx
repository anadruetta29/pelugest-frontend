import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRepositories } from "../../../core";
import { Errors, Regex, Session, type LoginUserReq, type LoginUserRes } from "../../../domain";
import type { SaveSessionReq } from "../../../domain/dto/session/request/SaveSessionReq";
import toast from "react-hot-toast";
import useSession from "../../hooks/useSession";

export function ViewModel() {

   const navigate = useNavigate();

    const { id } = useParams(); 
    const { userId, session } = useSession();

    
    
    return {
        
    };
    
}
