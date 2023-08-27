import { useState } from "react";

export function FilterMusic() {
  const [author, setAuthor] = useState(true);
  const [year, setYear] = useState(true);
  const [genre, setGenre] = useState(true);

  const showAuthorFilterMenu = () => {
    setAuthor(!author);
    if (!year) {
      showYearFilterMenu();
    }
    if (!genre) {
      showGenreFilterMenu();
    }
  };

  const showYearFilterMenu = () => {
    setYear(!year);
    if (!author) {
      showAuthorFilterMenu();
    }
    if (!genre) {
      showGenreFilterMenu();
    }
  };

  const showGenreFilterMenu = () => {
    setGenre(!genre);
    if (!author) {
      showAuthorFilterMenu();
    }
    if (!year) {
      showYearFilterMenu();
    }
  };

  // Тестовый вариант отлавливания клика вне компонента
  window.onclick = (event) => {
    if (
      !event.target.matches(".filter__button") &&
      !author &&
      !event.target.matches(".filter__menu") &&
      !event.target.matches(".filter__menu-scroll") &&
      !event.target.matches(".filter__menu_link")
    ) {
      showAuthorFilterMenu();
    }
    if (
      !event.target.matches(".filter__button") &&
      !year &&
      !event.target.matches(".filter__menu") &&
      !event.target.matches(".filter__menu-scroll") &&
      !event.target.matches(".filter__menu_link")
    ) {
      showYearFilterMenu();
    }
    if (
      !event.target.matches(".filter__button") &&
      !genre &&
      !event.target.matches(".filter__menu") &&
      !event.target.matches(".filter__menu-scroll") &&
      !event.target.matches(".filter__menu_link")
    ) {
      showGenreFilterMenu();
    }
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button_box-author">
        <button
          className="filter__button button-author _btn-text"
          onClick={showAuthorFilterMenu}
        >
          исполнителю
        </button>
        {!author && (
          <div className="filter__menu">
            <div className="filter__menu-scroll">
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
              <a className="filter__menu_link" href="#">
                Nero
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="filter__button_box-year">
        <button
          className="filter__button button-year _btn-text"
          onClick={showYearFilterMenu}
        >
          году впуска
        </button>
        {!year && (
          <div className="filter__menu">
            <div className="filter__menu-scroll">
              <a className="filter__menu_link" href="#">
                1990
              </a>
              <a className="filter__menu_link" href="#">
                1991
              </a>
              <a className="filter__menu_link" href="#">
                1992
              </a>
              <a className="filter__menu_link" href="#">
                1993
              </a>
              <a className="filter__menu_link" href="#">
                1994
              </a>
              <a className="filter__menu_link" href="#">
                1995
              </a>
              <a className="filter__menu_link" href="#">
                1996
              </a>
              <a className="filter__menu_link" href="#">
                1997
              </a>
              <a className="filter__menu_link" href="#">
                1998
              </a>
              <a className="filter__menu_link" href="#">
                1999
              </a>
              <a className="filter__menu_link" href="#">
                2000
              </a>
              <a className="filter__menu_link" href="#">
                2001
              </a>
              <a className="filter__menu_link" href="#">
                2002
              </a>
              <a className="filter__menu_link" href="#">
                2003
              </a>
              <a className="filter__menu_link" href="#">
                2004
              </a>
              <a className="filter__menu_link" href="#">
                2005
              </a>
              <a className="filter__menu_link" href="#">
                2006
              </a>
              <a className="filter__menu_link" href="#">
                2007
              </a>
              <a className="filter__menu_link" href="#">
                2008
              </a>
              <a className="filter__menu_link" href="#">
                2009
              </a>
              <a className="filter__menu_link" href="#">
                2010
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="filter__button_box-genre">
        <button
          className="filter__button button-genre _btn-text"
          onClick={showGenreFilterMenu}
        >
          жанру
        </button>
        {!genre && (
          <div className="filter__menu">
            <div className="filter__menu-scroll">
              <a className="filter__menu_link" href="#">
                Поп
              </a>
              <a className="filter__menu_link" href="#">
                Рок
              </a>
              <a className="filter__menu_link" href="#">
                Инди
              </a>
              <a className="filter__menu_link" href="#">
                Классика
              </a>
              <a className="filter__menu_link" href="#">
                Рэп
              </a>
              <a className="filter__menu_link" href="#">
                Джаз
              </a>
              <a className="filter__menu_link" href="#">
                Блюз
              </a>
              <a className="filter__menu_link" href="#">
                Регги
              </a>
              <a className="filter__menu_link" href="#">
                Кантри
              </a>
              <a className="filter__menu_link" href="#">
                Шансон
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
