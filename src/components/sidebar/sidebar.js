import { Link } from "react-router-dom";
import * as S from "./sidebar.style";

export function Sidebar(props) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <Link to="/sidepage/1">
              <S.SidebarLink>
                {props.bef ? (
                  <S.SidebarSceleton></S.SidebarSceleton>
                ) : (
                  <S.SidebarImg src={`${process.env.PUBLIC_URL}/img/playlist01.png`} alt="day's playlist" />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/sidepage/2">
              <S.SidebarLink>
                {props.bef ? (
                  <S.SidebarSceleton></S.SidebarSceleton>
                ) : (
                  <S.SidebarImg src={`${process.env.PUBLIC_URL}/img/playlist02.png`} alt="day's playlist" />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
          <S.SidebarItem>
            <Link to="/sidepage/3">
              <S.SidebarLink>
                {props.bef ? (
                  <S.SidebarSceleton></S.SidebarSceleton>
                ) : (
                  <S.SidebarImg src={`${process.env.PUBLIC_URL}/img/playlist03.png`} alt="day's playlist" />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
