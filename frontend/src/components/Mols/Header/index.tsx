import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { GiBeachBag } from "react-icons/gi";
import { useShoppingCart } from "../../../context/CartContext";

const Header = () => {
  const navigateTo = useNavigate();
  const { cartQuantity } = useShoppingCart();

  const handleCart = () => navigateTo("/checkout");
  const handleHome = () => navigateTo("/");
  return (
    <S.Container>
      <S.Logo onClick={handleHome}>
        {import.meta.env.VITE_APP_PAGE_TITLE}
      </S.Logo>
      <S.CartIconContainer onClick={handleCart}>
        <div>
          <p>Meu Carrinho</p>
          <span>{cartQuantity} Itens</span>
        </div>
        <GiBeachBag />
      </S.CartIconContainer>
    </S.Container>
  );
};

export default Header;
