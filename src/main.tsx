import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import RoutesManager from './ui/routes/routes-manager'
import { RepositoriesProvider } from './core'
import "../src/ui/styles/global.css";

createRoot(document.getElementById('root')!).render(
  <RepositoriesProvider>
    <RoutesManager />
    <Toaster
      position="bottom-left"
      toastOptions={{ duration: 7000 }}
    />
  </RepositoriesProvider>
)
