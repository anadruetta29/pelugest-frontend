import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRepositories } from "../../../core";
import { Regex, Errors, type RegisterUserReq } from "../../../domain";
import toast from "react-hot-toast";

export function ViewModel() {

    const navigate = useNavigate();

    const { authRepository } = useRepositories();

    const [error, setError] = useState<string | null>(null); 

    const onSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
        try {
            e.preventDefault();

            const form = Object.fromEntries(new FormData(e.currentTarget)) as { 
                name?: string;
                lastname?: string; 
                email?: string; 
                password?: string 
            };

            if(!Regex.NAME.test(form.name || "")) {
                return setError(Errors.INVALID_NAME);
            }

            if(!Regex.LASTNAME.test(form.lastname || "")) {
                return setError(Errors.INVALID_LASTNAME);
            }

            if(!Regex.EMAIL.test(form.email || "")) {
                return setError(Errors.INVALID_EMAIL);
            }
            
            if(!Regex.PASSWORD.test(form.password || "")) {
                return setError(Errors.INVALID_PASSWORD);
            } 

            await authRepository.register({
                name: form.name,
                lastname: form.lastname,
                email: form.email,
                password: form.password,
            } as RegisterUserReq);

            toast.success("Cuenta creada correctamente");
            navigate("/login");
        }
        catch (error) {
            toast.error(error ? error as string : Errors.UNAUTHORIZED);
        }
    }

    return {
        onSubmit
    };
    
}