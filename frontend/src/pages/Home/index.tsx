import Button from "../../components/Atoms/Button";
import Loading from "../../components/Atoms/Loading";
import { DefaultLayout } from "../_layout/DefaultLayout";
import * as S from "./styles";

const Home = () => {
  return (
    <DefaultLayout>
      <S.MainContainer>
        <p>Home</p>
        <Loading />
        <Button>Teste</Button>
      </S.MainContainer>
    </DefaultLayout>
  );
};

export default Home;
