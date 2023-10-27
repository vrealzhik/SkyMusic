import * as S from "./PlaylistItem.style";

export function PlaylistItem({ track, bef, setCurrentTrack }) {
  let sec = track.duration_in_seconds % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  let min = ~~(track.duration_in_seconds / 60);
  return (
    <S.PlaylistItem onClick={() => setCurrentTrack(track)}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          {bef ? (
            <S.TrackImgSceleton></S.TrackImgSceleton>
          ) : (
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
          )}
          <div>
            {bef ? (
              <S.TrackTitleSceleton></S.TrackTitleSceleton>
            ) : (
              <S.TrackTitleLink>{track.name}</S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {bef ? (
            <S.TrackAuthorSceleton></S.TrackAuthorSceleton>
          ) : (
            <S.TreckAuthorLink>{track.author}</S.TreckAuthorLink>
          )}
        </S.TrackAuthor>
        {bef ? (
          <S.TreckAlbumSceleton></S.TreckAlbumSceleton>
        ) : (
          <S.TrackAlbumBox>
            <S.TrackAlbum>
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <div>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>
                {min}:{sec}
              </S.TrackTimeText>
            </div>
          </S.TrackAlbumBox>
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
