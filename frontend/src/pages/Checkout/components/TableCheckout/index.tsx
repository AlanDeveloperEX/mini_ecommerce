import * as S from "./styles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const TableCheckout = () => {
  return (
    <S.MainContainer>
      <S.TableStyled>
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
        <tr>
          <S.TdProductItem>
            <S.ImgColumn
              src="https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
              alt="exemple"
            />
            <div>
              <span>Viuva Negra</span>
              <span className="price">R$ 29,99</span>
            </div>
          </S.TdProductItem>
          <S.TdProductItem>
            <AiOutlineMinusCircle />
            <S.InputColumn type="text" name="qty" value={1} />
            <AiOutlinePlusCircle />
          </S.TdProductItem>
          <S.TdProductItem>
            <div className="subtotal">
              <span>R$ 29,99</span>
              <FaTrash />
            </div>
          </S.TdProductItem>
        </tr>
      </S.TableStyled>
    </S.MainContainer>
  );
};

export default TableCheckout;
