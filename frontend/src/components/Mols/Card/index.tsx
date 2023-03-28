import { convertNumberToBRL } from "../../../utils/numberToBRL";
import Button from "../../Atoms/Button";
import * as S from "./styles";

type CardProps = {
  Title: string;
  imgToShow: string;
  imgAlt: string;
  priceItem: number;
};

const Card: React.FC<CardProps> = ({ Title, imgToShow, imgAlt, priceItem }) => {
  return (
    <S.Container>
      <figure>
        <S.ImgCard src={imgToShow} alt={imgAlt} />
      </figure>
      <S.TitleCard>{Title}</S.TitleCard>
      <S.PriceCard>{convertNumberToBRL(priceItem)}</S.PriceCard>
      <Button>Adicionar ao Carrinho</Button>
    </S.Container>
  );
};

export default Card;
