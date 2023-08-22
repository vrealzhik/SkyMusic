import './App.css';

function App() {
  return (
    <div className ="wrapper">
      <div className ="container">
        <main className ="main">
          <nav className ="main__nav nav">
            <div className ="nav__logo logo">
              <img className ="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div className ="nav__burger burger">
              <span className ="burger__line"></span>
              <span className ="burger__line"></span>
              <span className ="burger__line"></span>
            </div>
            <div className ="nav__menu menu">
              <ul className ="menu__list">
                <li className ="menu__item">
                  <a href="#" className ="menu__link">Главное</a>
                </li>
                <li className ="menu__item">
                  <a href="#" className ="menu__link">Мой плейлист</a>
                </li>
                <li className ="menu__item">
                  <a href="../signin.html" className ="menu__link">Войти</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className ="main__centerblock centerblock">
            <div className ="centerblock__search search">
              <svg className ="search__svg">
                <use xlinkHref ="img/icon/sprite.svg#icon-search"></use>
              </svg>
              <input
                className ="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className ="centerblock__h2">Треки</h2>
            <div className ="centerblock__filter filter">
              <div className ="filter__title">Искать по:</div>
              <div className ="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div className ="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className ="filter__button button-genre _btn-text">жанру</div>
            </div>
            <div className ="centerblock__content">
              <div className ="content__title playlist-title">
                <div className ="playlist-title__col col01">Трек</div>
                <div className ="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className ="playlist-title__col col03">АЛЬБОМ</div>
                <div className ="playlist-title__col col04">
                  <svg className ="playlist-title__svg" alt="time">
                    <use xlinkHref ="img/icon/sprite.svg#icon-watch"></use>
                  </svg>
                </div>
              </div>
              <div className ="content__playlist playlist">
                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Guilt <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">Nero</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Welcome Reality</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">4:44</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Elektro <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >Dynoro, Outwork, Mr. Gee</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://">Elektro</a>
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >I’m Fire <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >Ali Bakgor</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://">I’m Fire</a>
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">2:22</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Non Stop
                          <span className ="track__title-span">(Remix)</span></a
                        >
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >Стоункат, Psychopath</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://">Non Stop</a>
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">4:12</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Run Run
                          <span className ="track__title-span"
                            >(feat. AR/CO)</span
                          ></a
                        >
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >Jaded, Will Clarke, AR/CO</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://">Run Run</a>
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">2:54</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Eyes on Fire
                          <span className ="track__title-span"
                            >(Zeds Dead Remix)</span
                          ></a
                        >
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >Blue Foundation, Zeds Dead</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Eyes on Fire</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">5:20</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Mucho Bien
                          <span className ="track__title-span"
                            >(Hi Profile Remix)</span
                          ></a
                        >
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://">Mucho Bien</a>
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">3:41</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>
                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Knives n Cherries
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">minthaze</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Captivating</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">1:48</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >How Deep Is Your Love
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"
                        >Calvin Harris, Disciples</a
                      >
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >How Deep Is Your Love</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">3:32</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://"
                          >Morena <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://">Tom Boxer</a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"
                        >Soundz Made in Romania</a
                      >
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text">3:36</span>
                    </div>
                  </div>
                </div>

                <div className ="playlist__item">
                  <div className ="playlist__track track">
                    <div className ="track__title">
                      <div className ="track__title-image">
                        <svg className ="track__title-svg" alt="music">
                          <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                      </div>
                      <div className ="track__title-text">
                        <a className ="track__title-link" href="http://">
                          <span className ="track__title-span"></span
                        ></a>
                      </div>
                    </div>
                    <div className ="track__author">
                      <a className ="track__author-link" href="http://"></a>
                    </div>
                    <div className ="track__album">
                      <a className ="track__album-link" href="http://"></a>
                    </div>
                    <div className ="track__time">
                      <svg className ="track__time-svg" alt="time">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className ="track__time-text"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className ="main__sidebar sidebar">
            <div className ="sidebar__personal">
              <p className ="sidebar__personal-name">Sergey.Ivanov</p>
              <div className ="sidebar__icon">
                <svg alt="logout">
                  <use xlinkHref ="img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className ="sidebar__block">
              <div className ="sidebar__list">
                <div className ="sidebar__item">
                  <a className ="sidebar__link" href="#">
                    <img
                      className ="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className ="sidebar__item">
                  <a className ="sidebar__link" href="#">
                    <img
                      className ="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
                <div className ="sidebar__item">
                  <a className ="sidebar__link" href="#">
                    <img
                      className ="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className ="bar">
          <div className ="bar__content">
            <div className ="bar__player-progress"></div>
            <div className ="bar__player-block">
              <div className ="bar__player player">
                <div className ="player__controls">
                  <div className ="player__btn-prev">
                    <svg className ="player__btn-prev-svg" alt="prev">
                      <use xlinkHref ="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className ="player__btn-play _btn">
                    <svg className ="player__btn-play-svg" alt="play">
                      <use xlinkHref ="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className ="player__btn-next">
                    <svg className ="player__btn-next-svg" alt="next">
                      <use xlinkHref ="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div className ="player__btn-repeat _btn-icon">
                    <svg className ="player__btn-repeat-svg" alt="repeat">
                      <use xlinkHref ="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div className ="player__btn-shuffle _btn-icon">
                    <svg className ="player__btn-shuffle-svg" alt="shuffle">
                      <use xlinkHref ="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div>

                <div className ="player__track-play track-play">
                  <div className ="track-play__contain">
                    <div className ="track-play__image">
                      <svg className ="track-play__svg" alt="music">
                        <use xlinkHref ="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className ="track-play__author">
                      <a className ="track-play__author-link" href="http://"
                        >Ты та...</a
                      >
                    </div>
                    <div className ="track-play__album">
                      <a className ="track-play__album-link" href="http://">Баста</a>
                    </div>
                  </div>

                  <div className ="track-play__like-dis">
                    <div className ="track-play__like _btn-icon">
                      <svg className ="track-play__like-svg" alt="like">
                        <use xlinkHref ="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div className ="track-play__dislike _btn-icon">
                      <svg className ="track-play__dislike-svg" alt="dislike">
                        <use
                          xlinkHref ="img/icon/sprite.svg#icon-dislike"
                        ></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className ="bar__volume-block volume">
                <div className ="volume__content">
                  <div className ="volume__image">
                    <svg className ="volume__svg" alt="volume">
                      <use xlinkHref ="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                  </div>
                  <div className ="volume__progress _btn">
                    <input
                      className ="volume__progress-line _btn"
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className ="footer"></footer>
      </div>
    </div>
  );
}

export default App;
