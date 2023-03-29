import WarningInformation from "../../components/Mols/WarningInformation";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";
import EmptyImg from "../../assets/empty_cart.svg";

const NotFound = () => {
  return (
    <DefaultLayout>
      <WarningInformation
        TextInformation="Ops! Rota não encontrada :("
        imgToShow={EmptyImg}
        imgAlt="Empty"
        btnTo="/"
        btnText="Voltar"
      />
    </DefaultLayout>
  );
};

export default NotFound;
