import * as S from "./styles";
import { GiBeachBag } from "react-icons/gi";

const Header = () => {
  return (
    <S.Container>
      <S.Logo>{import.meta.env.VITE_APP_PAGE_TITLE}</S.Logo>
      <S.CartIconContainer>
        <div>
          <p>Meu Carrinho</p>
          <span>0 Itens</span>
        </div>
        <GiBeachBag />
      </S.CartIconContainer>
    </S.Container>
  );
};

export default Header;
