import * as S from "./styles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useShoppingCart } from "../../../../context/CartContext";
import { useState } from "react";
import ItemRow from "./components/ItemRow";

const TableCheckout = () => {
  const { cartItems } = useShoppingCart();

  return (
    <S.MainContainer>
      <S.TableStyled>
        <thead>
          <tr>
            <th>
              <S.TitleColumn>PRODUTOS</S.TitleColumn>
            </th>
            <th>
              <S.TitleColumn>QTY</S.TitleColumn>
            </th>
            <th>
              <S.TitleColumn>SUBTOTAL</S.TitleColumn>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length !== 0 &&
            cartItems.map((item: any, key: number) => (
              <ItemRow key={key} {...item} />
            ))}
        </tbody>
      </S.TableStyled>
    </S.MainContainer>
  );
};

export default TableCheckout;
