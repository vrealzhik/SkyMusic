import { useState } from "react";
import * as S from "../style.components/nav.style";

export function MainNav() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
