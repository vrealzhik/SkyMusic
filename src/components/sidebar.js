import * as S from '../style.components/sidebar.style';

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
            <S.SidebarLink href="#">
              {props.bef ? (
                <S.SidebarSceleton></S.SidebarSceleton>
              ) : (
                <S.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {props.bef ? (
                <S.SidebarSceleton></S.SidebarSceleton>
              ) : (
                <S.SidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {props.bef ? (
                <S.SidebarSceleton></S.SidebarSceleton>
              ) : (
                <S.SidebarImg
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
