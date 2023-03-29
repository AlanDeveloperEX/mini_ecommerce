import { useState } from "react";
import WarningInformation from "../../components/Mols/WarningInformation";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";
import SuccessImg from "../../assets/success_purchase.svg";
import EmptyImg from "../../assets/empty_cart.svg";
import TableCheckout from "./components/TableCheckout";

const Checkout: React.FC = () => {
  const [showWarning, setShowWarning] = useState<string>("");

  switch (showWarning) {
    case "vazio":
      return (
        <DefaultLayout>
          <WarningInformation
            TextInformation="Parece que não há nada por aqui :("
            imgToShow={SuccessImg}
            imgAlt="Empty"
            btnTo="/"
            btnText="Voltar"
          />
        </DefaultLayout>
      );
    case "success":
      return (
        <DefaultLayout>
          <WarningInformation
            TextInformation="Compra realizada com sucesso!"
            imgToShow={EmptyImg}
            imgAlt="Success"
            btnTo="/"
            btnText="Voltar"
          />
        </DefaultLayout>
      );
    default:
      return (
        <DefaultLayout>
          <S.MainContainer>
            <TableCheckout />
          </S.MainContainer>
        </DefaultLayout>
      );
  }
};

export default Checkout;
