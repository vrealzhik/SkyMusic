import { BarMusic } from "../../components/bar/bar";
import { MainNav } from "../../components/nav/nav";
import { Search } from "../../components/search/search";
import { Sidebar } from "../../components/sidebar/sidebar";
import { PlaylistTitle } from "../../components/topplaylistttitle/topPlyalistTitle";
import useSceleton from "../../hooks/useSceleton";
import * as S from "../main/main.style";

const MyPlaylist = () => {
  const { sceleton } = useSceleton(true);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Мои треки</S.CenterblockH2>
            <S.CenterblockContent>
              <PlaylistTitle />
              <S.ContentPlaylist></S.ContentPlaylist>
            </S.CenterblockContent>
          </S.MainCenterblock>
          <Sidebar bef={sceleton} />
        </S.Main>
        <BarMusic bef={sceleton} />
      </S.Container>
    </S.Wrapper>
  );
};

export default MyPlaylist;
