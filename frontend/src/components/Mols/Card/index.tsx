import Button from "../../Atoms/Button";
import * as S from "./styles";

type CardProps = {};

const Card: React.FC<CardProps> = ({}) => {
  return (
    <S.Container>
      <figure>
        <S.ImgCard
          src="https://wefit-react-web-test.s3.amazonaws.com/eternals.png"
          alt="Viuva Negra"
        />
      </figure>
      <S.TitleCard>Viuva Negra</S.TitleCard>
      <S.PriceCard>R$ 14,50</S.PriceCard>
      <Button>Adicionar ao Carrinho</Button>
    </S.Container>
  );
};

export default Card;
