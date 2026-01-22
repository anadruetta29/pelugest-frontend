import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";

interface RepositoriesProviderProps {
  children: ReactNode;
}

interface RepositoriesContextType {
/*   sessionRepository: SessionRepository;
 */  
}

const RepositoriesContext = createContext<RepositoriesContextType | null>(null);

export const RepositoriesProvider = ({ children }: RepositoriesProviderProps) => {
  const repositories = useMemo(() => ({
/*     sessionRepository: new SessionRepository(),
 */    
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
