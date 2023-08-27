export function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          {props.bef ? (
            <div className="track__img_sceleton"></div>
          ) : (
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
          )}
          <div className="track__title-text">
            {props.bef ? (
              <div className="track__title_sceleton"></div>
            ) : (
              <a className="track__title-link" href="http://">
                {props.name} <span className="track__title-span"></span>
              </a>
            )}
          </div>
        </div>
        <div className="track__author">
          {props.bef ? (
            <div className="track__author_sceleton"></div>
          ) : (
            <a className="track__author-link" href="http://">
              {props.singer}
            </a>
          )}
        </div>
        {props.bef ? (
          <div className="track__album_sceleton"></div>
        ) : (
          <div className="track__album_box">
            <div className="track__album">
              <a className="track__album-link" href="http://">
                {props.albom}
              </a>
            </div>
            <div className="track__time">
              <svg className="track__time-svg" alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className="track__time-text">4:44</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
