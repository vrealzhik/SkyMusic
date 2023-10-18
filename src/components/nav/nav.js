import * as S from "./nav.style";
import useToggleVisibility from "../../hooks/useToggleVisibility";
import { Link } from "react-router-dom";

export function MainNav() {
  const { visible, toggle } = useToggleVisibility(true);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggle}>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <Link to="/">
              <S.MenuItem>
                <S.MenuLink>Главное</S.MenuLink>
              </S.MenuItem>
            </Link>
            <Link to="/favorites">
              <S.MenuItem>
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </S.MenuItem>
            </Link>
            <Link to="/login">
              <S.MenuItem>
                <S.MenuLink>Выйти</S.MenuLink>
              </S.MenuItem>
            </Link>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
}
