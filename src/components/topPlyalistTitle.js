import * as S from "../style.components/topPlaylistTitle.style";

export function PlaylistTitle() {
  return (
    <S.ContentTitle>
      <S.Col01>Трек</S.Col01>
      <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
      <S.PlaylistTitleBox>
        <S.Col03>АЛЬБОМ</S.Col03>
        <S.Col04>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.Col04>
      </S.PlaylistTitleBox>
    </S.ContentTitle>
  );
}
