import { LoginWebAdapter } from "../feat-login/LoginWebAdapter";
import { Layout } from "./layouts/Layout";
const Login = () => {
    return (
      <Layout isHeaderAuth={true} >
      <LoginWebAdapter/>
      </Layout>
    );
  }

export default Login;