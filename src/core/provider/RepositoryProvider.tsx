import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { AuthRepository } from "../../infrastructure";
import { SessionRepository } from "../../infrastructure/repository/session";

interface RepositoriesProviderProps {
  	children: ReactNode;
}

interface RepositoriesContextType {
    authRepository: AuthRepository;
	sessionRepository: SessionRepository;
}

const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
	const repositories = useMemo(() => ({
			authRepository: new AuthRepository(),
			sessionRepository: new SessionRepository()
	}), []);

	return (
		<RepositoriesContext.Provider value={repositories}>
		{children}
		</RepositoriesContext.Provider>
	);
};

export const useRepositories = () => {
	const context = useContext(RepositoriesContext);
	if (!context) throw new Error("context error");

	return context;
};
