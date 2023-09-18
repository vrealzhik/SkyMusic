import { useState } from "react";
import * as S from "../style.components/filter.style";

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

  window.onclick = () => {
    setAuthor(true);
    setGenre(true);
    setYear(true);
  };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButtonBoxAuthor onClick={e => e.stopPropagation()}>
        <S.FilterButtonAuthor $color={author} onClick={showAuthorFilterMenu}>
          исполнителю
        </S.FilterButtonAuthor>
        {!author && (
          <S.FilterMenu>
            <S.FilterMenuScroll>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Nero</S.FilterMenuLink>
            </S.FilterMenuScroll>
          </S.FilterMenu>
        )}
      </S.FilterButtonBoxAuthor>
      <S.FilterButtonBoxYear onClick={e => e.stopPropagation()}>
        <S.FilterButtonYear $color={year} onClick={showYearFilterMenu}>
          году впуска
        </S.FilterButtonYear>
        {!year && (
          <S.FilterMenu>
            <S.FilterMenuScroll>
              <S.FilterMenuLink href="#">1990</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1991</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1992</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1993</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1994</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1995</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1996</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1997</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1998</S.FilterMenuLink>
              <S.FilterMenuLink href="#">1999</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2000</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2001</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2002</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2003</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2004</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2005</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2006</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2007</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2008</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2009</S.FilterMenuLink>
              <S.FilterMenuLink href="#">2010</S.FilterMenuLink>
            </S.FilterMenuScroll>
          </S.FilterMenu>
        )}
      </S.FilterButtonBoxYear>
      <S.FilterButtonBoxGenre onClick={e => e.stopPropagation()}>
        <S.FilterButtonGenre $color={genre} onClick={showGenreFilterMenu}>
          жанру
        </S.FilterButtonGenre>
        {!genre && (
          <S.FilterMenu>
            <S.FilterMenuScroll>
              <S.FilterMenuLink href="#">Поп</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Рок</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Инди</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Классика</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Рэп</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Джаз</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Блюз</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Регги</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Кантри</S.FilterMenuLink>
              <S.FilterMenuLink href="#">Шансон</S.FilterMenuLink>
            </S.FilterMenuScroll>
          </S.FilterMenu>
        )}
      </S.FilterButtonBoxGenre>
    </S.CenterBlockFilter>
  );
}
