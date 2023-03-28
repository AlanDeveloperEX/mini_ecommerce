import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";
import * as S from "./styles";

type WarningInformationProps = {
  TextInformation: string;
  imgToShow: string;
  imgAlt: string;
  btnTo?: string;
  btnText?: string;
};

const WarningInformation: React.FC<WarningInformationProps> = ({
  TextInformation,
  imgToShow,
  imgAlt,
  btnTo,
  btnText,
}) => {
  const navigateTo = useNavigate();

  const handleHome = () => navigateTo(`${btnTo}`);

  return (
    <S.MainContainer>
      <p>{`${TextInformation}`}</p>
      <figure>
        <S.ImgCard src={imgToShow} alt={imgAlt} />
      </figure>
      {btnTo && (
        <S.WrapBtnContainer>
          <Button type="button" onClick={handleHome}>
            {btnText}
          </Button>
        </S.WrapBtnContainer>
      )}
    </S.MainContainer>
  );
};

export default WarningInformation;
