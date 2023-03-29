import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useShoppingCart } from "../../../../../../context/CartContext";
import { useProducts } from "../../../../../../context/ProductsContext";
import { convertNumberToBRL } from "../../../../../../utils/numberToBRL";
import * as S from "./styles";

const ItemRow: React.FC<any> = ({ id }) => {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const { movieProductItems } = useProducts();

  const item = movieProductItems.find((i: any) => i.id === id);
  if (item === null) return null;

  const qtyItem = getItemQuantity(id);

  return (
    <tr>
      <S.TdProductItem>
        <S.ImgColumn src={item.image} alt="exemple" />
        <div>
          <span>{item.title}</span>
          <span className="price">{convertNumberToBRL(item.price)}</span>
        </div>
      </S.TdProductItem>
      <S.TdProductItem>
        <AiOutlineMinusCircle onClick={() => decreaseCartQuantity(id)} />
        <S.InputColumn type="text" name="qty" value={qtyItem} readOnly />
        <AiOutlinePlusCircle onClick={() => increaseCartQuantity(id)} />
      </S.TdProductItem>
      <S.TdProductItem>
        <div className="subtotal">
          <span>{convertNumberToBRL(item.price * qtyItem)}</span>
          <FaTrash onClick={() => removeFromCart(id)} />
        </div>
      </S.TdProductItem>
    </tr>
  );
};

export default ItemRow;
