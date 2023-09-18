import { Link } from "react-router-dom";
import * as S from "./notFount.style";

const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.NotTitle>404</S.NotTitle>
        <S.NotImgBox>
          <S.NotText>Страница не найдена </S.NotText>
          <S.NotImg src={`${process.env.PUBLIC_URL}/img/crying.png`}></S.NotImg>
        </S.NotImgBox>
        <S.NotTextMini>
          Возможно, она была удалена <br /> или перенесена на другой адрес
        </S.NotTextMini>
        <Link to="/">
          <S.NotButton>Вернуться на главную</S.NotButton>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
};

export default NotFound;
