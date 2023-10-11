import { Link } from "react-router-dom";
import * as S from "./login.style";
import { useState } from "react";

function Login() {
  const [modalBlock, setModalBlock] = useState(true);

  const toggleModalBlock = () => {
    setModalBlock(!modalBlock);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalFormLogin>
          <S.ModalLogo src="img/logo_modal.png" alt="logo"></S.ModalLogo>
          <S.ModalInput placeholder="Почта"></S.ModalInput>
          <S.ModalInput placeholder="Пароль"></S.ModalInput>
          {!modalBlock && (
            <S.ModalInput placeholder="Повторите пароль"></S.ModalInput>
          )}
          {modalBlock ? (
            <S.ModalLoginSignupBox>
              <Link to="/">
                <S.ModalLoginBtn>Войти</S.ModalLoginBtn>
              </Link>
              <S.ModalSignupBtn onClick={toggleModalBlock}>
                Зарегистрироваться
              </S.ModalSignupBtn>
            </S.ModalLoginSignupBox>
          ) : (
            <S.ModalLoginBtn>Зарегистрироваться</S.ModalLoginBtn>
          )}
        </S.ModalFormLogin>
      </S.Container>
    </S.Wrapper>
  );
}

export default Login;
