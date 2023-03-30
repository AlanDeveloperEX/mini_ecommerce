import { useEffect, useState } from "react";
import WarningInformation from "../../components/Mols/WarningInformation";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";
import SuccessImg from "../../assets/success_purchase.svg";
import EmptyImg from "../../assets/empty_cart.svg";
import TableCheckout from "./components/TableCheckout";
import Button from "../../components/Atoms/Button";
import { useShoppingCart } from "../../context/CartContext";
import { convertNumberToBRL } from "../../utils/numberToBRL";
import { useProducts } from "../../context/ProductsContext";
import { ProductProps } from "../../models.ts/product";

const Checkout: React.FC = () => {
  const [showWarning, setShowWarning] = useState<string>("");
  const { cartItems, resetCart } = useShoppingCart();
  const { movieProductItems } = useProducts();

  useEffect(() => {
    cartItems.length === 0 && showWarning !== "success"
      ? setShowWarning((state) => (state = "empty"))
      : cartItems.length > 0 && showWarning !== "success"
      ? setShowWarning((state) => (state = "checkout"))
      : null;
  }, [cartItems.length]);

  const HandleCheckout = () => {
    setShowWarning((state) => (state = "success"));
    resetCart();
  };

  switch (showWarning) {
    case "empty":
      return (
        <DefaultLayout>
          <WarningInformation
            TextInformation="Parece que não há nada por aqui :("
            imgToShow={EmptyImg}
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
            imgToShow={SuccessImg}
            imgAlt="Success"
            btnTo="/"
            btnText="Voltar"
          />
        </DefaultLayout>
      );
    case "checkout":
      return (
        <DefaultLayout>
          <S.MainContainer>
            <TableCheckout />
            <S.TotalContainer>
              <Button onClick={HandleCheckout}>FINALZIAR PEDIDO</Button>
              <p>
                <span>TOTAL</span>
                {convertNumberToBRL(
                  cartItems.reduce((total, cartItem) => {
                    const item = movieProductItems.find(
                      (i: ProductProps) => i.id === cartItem.id
                    );
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </p>
            </S.TotalContainer>
          </S.MainContainer>
        </DefaultLayout>
      );
    default:
      return <DefaultLayout>{<></>}</DefaultLayout>;
  }
};

export default Checkout;
