import { convertNumberToBRL } from "../../../utils/numberToBRL";
import Button from "../../Atoms/Button";
import * as S from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../../../context/CartContext";

type CardProps = {
  Title: string;
  imgToShow: string;
  imgAlt: string;
  priceItem: number;
  id: number;
};

const Card: React.FC<CardProps> = ({
  Title,
  imgToShow,
  imgAlt,
  priceItem,
  id,
}) => {
  const { getItemQuantity } = useShoppingCart();
  const qtdy = getItemQuantity(id);
  return (
    <S.Container>
      <figure>
        <S.ImgCard src={imgToShow} alt={imgAlt} />
      </figure>
      <S.TitleCard>{Title}</S.TitleCard>
      <S.PriceCard>{convertNumberToBRL(priceItem)}</S.PriceCard>
      {qtdy === 0 ? (
        <Button>
          <S.CartBtnQty>
            <MdAddShoppingCart /> {qtdy}
          </S.CartBtnQty>
          Adicionar ao Carrinho
        </Button>
      ) : (
        <Button customStyle="green">
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
