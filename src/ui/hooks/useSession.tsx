import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Añadimos esto
import { useRepositories } from "../../core";
import type { Session } from "../../domain";

export default function useSession() {
    const { sessionRepository, authRepository } = useRepositories();
    const navigate = useNavigate();
    const location = useLocation();

    const [logged, setLogged] = useState<boolean | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    const checkIfUserIsLogged = useCallback(async () => {
        try {
            const sessionResponse = await sessionRepository.getSession();
            
            if (!sessionResponse?.session) {
                setLogged(false);
                return;
            }

            const authResponse = await authRepository.auth({ 
                session: sessionResponse.session 
            });

            if (authResponse) {
                setUserId(authResponse.id);
                setSession(sessionResponse.session);
                setLogged(true);
            } 
            else {
                setLogged(false);
            }

        } 
        catch (error) {
            console.error(error);
            setLogged(false);
        }
    }, [sessionRepository, authRepository]);

    useEffect(() => {
        checkIfUserIsLogged();
    }, [checkIfUserIsLogged]);

    useEffect(() => {

        if (logged === null) return;

        const publicRoutes = ["/login", "/register"];
        const isPublicRoute = publicRoutes.includes(location.pathname);

        if (!logged && !isPublicRoute) {
            navigate("/login", { replace: true });
        }
    }, [logged, location.pathname, navigate]);

    return { userId, session, logged };
}