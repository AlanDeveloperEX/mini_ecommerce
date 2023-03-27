import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";

const NotFound = () => {
  return (
    <DefaultLayout>
      <S.MainContainer>
        <p>Ops! Por favor, tente novamente.</p>
      </S.MainContainer>
    </DefaultLayout>
  );
};

export default NotFound;
