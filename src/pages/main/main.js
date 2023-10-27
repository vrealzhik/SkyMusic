import "../../Main.css";
import { MainNav } from "../../components/nav/nav";
import { Search } from "../../components/search/search";
import { BarMusic } from "../../components/bar/bar";
import { PlaylistItem } from "../../components/playlistitem/PlaylistItem";
import { FilterMusic } from "../../components/filter/filter";
import { PlaylistTitle } from "../../components/topplaylistttitle/topPlyalistTitle";
import { Sidebar } from "../../components/sidebar/sidebar";
import * as S from "./main.style";
import useSceleton from "../../hooks/useSceleton";
import { getPlaylist } from "../../api";
import { useEffect, useState } from "react";

function Main({ handleLogout, currentTrack, setCurrentTrack }) {
  const [allTrack, setAllTrack] = useState([]);
  // скелетоны сделать отдельно от рендера треков

  useEffect(() => {
    getPlaylist().then((tracks) => {
      console.log(tracks);
      setAllTrack(tracks);
    });
  }, []);

  const logout = () => {
    handleLogout();
  };

  const { sceleton } = useSceleton(true);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav logout={logout} />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterMusic />
            <S.CenterblockContent>
              <PlaylistTitle />

              <S.ContentPlaylist>
                {allTrack.map((track, index) => {
                  return (
                    <PlaylistItem setCurrentTrack={setCurrentTrack} key={index} track={track} bef={sceleton} />
                  );
                })}
              </S.ContentPlaylist>
            </S.CenterblockContent>
          </S.MainCenterblock>
          <Sidebar bef={sceleton} />
        </S.Main>
        {currentTrack ? <BarMusic currentTrack={currentTrack} bef={sceleton} /> : null}

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Main;
