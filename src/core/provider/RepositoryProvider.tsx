import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { AuthRepository } from "../../infrastructure/repository/auth";
import { SessionRepository } from "../../infrastructure/repository/session";
import { AppointmentRepository, ClientRepository, RecordStatusRepository, StockMovementRepository, StockProductRepository, UserRepository } from "../../infrastructure";
import { ServiceRepository } from "../../infrastructure/repository/service";
import { ProductRepository } from "../../infrastructure/repository/product";
import type { AppointmentDetail } from "../../domain";

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
	stockMovementRepository: StockMovementRepository;
	appointmentRepository: AppointmentRepository;
	userRepository: UserRepository;
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
			stockProductRepository: new StockProductRepository(),
			stockMovementRepository: new StockMovementRepository(),
			appointmentRepository: new AppointmentRepository(),
			userRepository: new UserRepository()
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
