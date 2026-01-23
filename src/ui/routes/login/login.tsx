import LoginForm from "../../components/molecules/login-form/login-form";
import Layout from "../../layout/layout";
import { ViewModel } from "./viewmodel";

export default function LoginRoute() {

    const { onSubmit } = ViewModel();

    return (
        <Layout withSidebar={false}>
            <LoginForm
                onSubmit={onSubmit} 
            />
        </Layout>
    )
}