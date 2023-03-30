import { convertNumberToBRL } from "../../../utils/numberToBRL";
import Button from "../../Atoms/Button";
import * as S from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../../../context/CartContext";
import { CardProps } from "../../../models.ts/card";

const Card: React.FC<CardProps> = ({
  title,
  imgToShow,
  imgAlt,
  priceItem,
  id,
}) => {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const qtdy = getItemQuantity(id);
  return (
    <S.Container>
      <figure>
        <S.ImgCard src={imgToShow} alt={imgAlt} />
      </figure>
      <S.TitleCard>{title}</S.TitleCard>
      <S.PriceCard>{convertNumberToBRL(priceItem)}</S.PriceCard>
      {qtdy === 0 ? (
        <Button onClick={() => increaseCartQuantity(id)}>
          <S.CartBtnQty>
            <MdAddShoppingCart /> {qtdy}
          </S.CartBtnQty>
          Adicionar ao Carrinho
        </Button>
      ) : (
        <Button onClick={() => increaseCartQuantity(id)} customStyle="green">
          <S.CartBtnQty>
            <MdAddShoppingCart /> {qtdy}
          </S.CartBtnQty>
          Item Adicionado
        </Button>
      )}
    </S.Container>
  );
};

export default Card;
