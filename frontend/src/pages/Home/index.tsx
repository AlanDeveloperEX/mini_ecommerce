import Button from "../../components/Atoms/Button";
import Loading from "../../components/Atoms/Loading";
import Card from "../../components/Mols/Card";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";

const Home = () => {
  return (
    <DefaultLayout>
      <S.MainContainer>
        <p>Home</p>
        <Loading />
        <Button>Teste</Button>
        <Card />
      </S.MainContainer>
    </DefaultLayout>
  );
};

export default Home;
