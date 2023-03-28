import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Atoms/Loading";
import Card from "../../components/Mols/Card";
import api from "../../services/api";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";

const Home: React.FC = () => {
  const [movieProductItems, setMovieProductItems] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = useCallback(() => {
    setIsLoading(true);

    api
      .get("/products")
      .then((response) => {
        console.log(response.data);
        setMovieProductItems(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    let loaded = false;

    !loaded && getMovies();

    return () => {
      loaded = true;
    };
  }, []);

  return (
    <DefaultLayout>
      {isLoading ? (
        <S.ContainerLoading>
          <Loading />
        </S.ContainerLoading>
      ) : (
        <S.MainContainer>
          {movieProductItems !== null &&
            movieProductItems.map((item: any, key: number) => (
              <Card
                key={key}
                Title={item.title}
                imgToShow={item.image}
                imgAlt={item.title}
                priceItem={item.price}
              />
            ))}
        </S.MainContainer>
      )}
    </DefaultLayout>
  );
};

export default Home;
