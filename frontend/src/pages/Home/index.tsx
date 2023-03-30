import Loading from "../../components/Atoms/Loading";
import Card from "../../components/Mols/Card";
import { useProducts } from "../../context/ProductsContext";
import { CardProps } from "../../models.ts/card";
import { ProductProps } from "../../models.ts/product";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";

const Home: React.FC = () => {
  const { isLoading, movieProductItems } = useProducts();

  return (
    <DefaultLayout>
      {isLoading ? (
        <S.ContainerLoading>
          <Loading />
        </S.ContainerLoading>
      ) : (
        <S.MainContainer>
          {movieProductItems !== null &&
            movieProductItems.map((item: CardProps, key: number) => (
              <Card
                key={key}
                title={item.title}
                imgToShow={item.image}
                imgAlt={item.title}
                priceItem={item.price}
                id={item.id}
              />
            ))}
        </S.MainContainer>
      )}
    </DefaultLayout>
  );
};

export default Home;
