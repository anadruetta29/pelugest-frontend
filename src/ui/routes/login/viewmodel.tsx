import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRepositories } from "../../../core";
import { Errors, Regex, Session, type LoginUserReq, type LoginUserRes } from "../../../domain";
import type { SaveSessionReq } from "../../../domain/dto/session/request/SaveSessionReq";
import toast from "react-hot-toast";

export function ViewModel() {

    const navigate = useNavigate();
    
    const { authRepository, sessionRepository } = useRepositories();

    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
        try {
            e.preventDefault();
            
            const form = Object.fromEntries(new FormData(e.currentTarget)) as { 
                email?: string; 
                password?: string 
            };

            if(!Regex.EMAIL.test(form.email || "")){
                return setError(Errors.INVALID_EMAIL);
            }
            
            if(!Regex.PASSWORD.test(form.password || "")){
                return setError(Errors.INVALID_PASSWORD);
            }

            const response: LoginUserRes = await authRepository.login({
                email: form.email!!, 
                password: form.password!!,
            } as LoginUserReq);

            const session: SaveSessionReq = {
                session: new Session(response.token),
            }
            
            await sessionRepository.saveSession(session);

            toast.success("Sesión iniciada correctamente");
            navigate("/");
        }
        catch(error) {
            toast.error(error ? error as string : Errors.UNKNOWN_ERROR);
        }
    }
    
    return {
        onSubmit
    };
    
}
