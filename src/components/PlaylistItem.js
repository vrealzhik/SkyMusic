import * as S from '../style.components/PlaylistItem.style'

export function PlaylistItem(props) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          {props.bef ? (
            <S.TrackImgSceleton></S.TrackImgSceleton>
          ) : (
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
          )}
          <div>
            {props.bef ? (
              <S.TrackTitleSceleton></S.TrackTitleSceleton>
            ) : (
              <S.TrackTitleLink href="http://">
                {props.name}
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {props.bef ? (
            <S.TrackAuthorSceleton></S.TrackAuthorSceleton>
          ) : (
            <S.TreckAuthorLink href="http://">
              {props.singer}
            </S.TreckAuthorLink>
          )}
        </S.TrackAuthor>
        {props.bef ? (
          <S.TreckAlbumSceleton></S.TreckAlbumSceleton>
        ) : (
          <S.TrackAlbumBox>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                {props.albom}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <div>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>4:44</S.TrackTimeText>
            </div>
          </S.TrackAlbumBox>
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
