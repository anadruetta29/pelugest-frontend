import ServicesList from "../../components/organisms/services-list/services-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function ServicesRoute() {
    const {
        services,

        isDeleteOpen,
        serviceToDelete,
        onDeleteService,
        cancelDelete,
        proceedDelete,

        isFormOpen,
        serviceToEdit,
        onEditService,
        onNewService,
        closeForm,
        onSubmitService,

        closeInfo,
        isInfoOpen,
        onViewDescription,
        serviceToView
    } = ViewModel();

    return (
        <Layout withSidebar>
            <ServicesList
                services={services}

                isDeleteOpen={isDeleteOpen}
                serviceToDelete={serviceToDelete}
                onDeleteService={onDeleteService}
                onConfirmDelete={proceedDelete}
                onCancelDelete={cancelDelete}

                isFormOpen={isFormOpen}
                serviceToEdit={serviceToEdit}
                onEditService={onEditService}
                onNewService={onNewService}
                onCloseForm={closeForm}
                onSubmitService={onSubmitService}

                onViewDescription={onViewDescription}
                isInfoOpen={isInfoOpen}
                closeInfo={closeInfo}
                serviceToView={serviceToView}
            />
        </Layout>
    );
}
