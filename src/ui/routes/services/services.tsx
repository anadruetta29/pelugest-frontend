import ServicesList from "../../components/organisms/services-list/services-list";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";
import Loader from "../../components/atoms/loader/loader";

export default function ServicesRoute() {
    const {
        isLoading,
        services,

        isFormOpen,
        serviceToEdit,
        onEditService,
        onNewService,
        closeForm,
        onSubmitService,

        closeInfo,
        isInfoOpen,
        onViewDescription,
        serviceToView,
    } = ViewModel();

    if (isLoading) {
        return (
            <Layout withSidebar>
                <Loader />
            </Layout>
        );
    }

    return (
        <Layout withSidebar>
            <ServicesList
                services={services}

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
