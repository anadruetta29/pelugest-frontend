import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { AuthRepository } from "../../infrastructure/repository/auth";
import { SessionRepository } from "../../infrastructure/repository/session";
import { ClientRepository, RecordStatusRepository, StockProductRepository } from "../../infrastructure";
import { ServiceRepository } from "../../infrastructure/repository/service";
import { ProductRepository } from "../../infrastructure/repository/product";

interface RepositoriesProviderProps {
  	children: ReactNode;
}

interface RepositoriesContextType {
    authRepository: AuthRepository;
	sessionRepository: SessionRepository;
	clientRepository: ClientRepository;
	recordStatusRepository: RecordStatusRepository;
	serviceRepository: ServiceRepository;
	productRepository: ProductRepository;
	stockProductRepository: StockProductRepository;
}

const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
	const repositories = useMemo(() => ({
			authRepository: new AuthRepository(),
			sessionRepository: new SessionRepository(),
			clientRepository: new ClientRepository(),
			recordStatusRepository: new RecordStatusRepository(),
			serviceRepository: new ServiceRepository(),
			productRepository: new ProductRepository(),
			stockProductRepository: new StockProductRepository()
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
