import { AccueilWebAdapter } from "../feat-accueil/AccueilWebAdapter";
import { LoginWebAdapter } from "../feat-login/LoginWebAdapter";
import { Layout } from "./layouts/Layout";
const Accueil = () => {
  return (
    <Layout isHeaderAuth={true} isAccueil={true}>
      <AccueilWebAdapter />
    </Layout>
  );
};

export default Accueil;
