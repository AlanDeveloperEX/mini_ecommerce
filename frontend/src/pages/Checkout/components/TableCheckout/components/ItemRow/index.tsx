import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useShoppingCart } from "../../../../../../context/CartContext";
import { useProducts } from "../../../../../../context/ProductsContext";
import { ProductProps } from "../../../../../../models.ts/product";
import { convertNumberToBRL } from "../../../../../../utils/numberToBRL";
import * as S from "./styles";

type ItemRowProps = {
  id: number;
};

const ItemRow: React.FC<ItemRowProps> = ({ id }) => {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const { movieProductItems } = useProducts();

  const item = movieProductItems.find((i: ProductProps) => i.id === id);
  if (item === null) return null;

  const qtyItem = getItemQuantity(id);

  return (
    <S.TrProductItem>
      <S.TdProductItem className="col-product">
        <S.ImgColumn src={item.image} alt="exemple" />
        <div>
          <span>{item.title}</span>
          <span className="price">{convertNumberToBRL(item.price)}</span>
        </div>
      </S.TdProductItem>

      <S.TdProductItem className="col-qty">
        <AiOutlineMinusCircle onClick={() => decreaseCartQuantity(id)} />
        <S.InputColumn type="text" name="qty" value={qtyItem} readOnly />
        <AiOutlinePlusCircle onClick={() => increaseCartQuantity(id)} />
      </S.TdProductItem>

      <S.TdProductItem className="col-subtotal">
        <div className="subtotal">
          <div className="sub-wrap">
            <span className="subtotal-mobile">SUBTOTAL</span>
            <span>{convertNumberToBRL(item.price * qtyItem)}</span>
          </div>
          <FaTrash onClick={() => removeFromCart(id)} />
        </div>
      </S.TdProductItem>
    </S.TrProductItem>
  );
};

export default ItemRow;
