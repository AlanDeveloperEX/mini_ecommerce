import Header from "../../components/Mols/Header";
import * as S from "./styles";

interface DefaultLayout {
  children: JSX.Element;
}

export const DefaultLayout: React.FC<DefaultLayout> = ({ children }) => {
  return (
    <S.DefaultContainer>
      <Header />
      <main>{children}</main>
    </S.DefaultContainer>
  );
};
