import { useParams } from "react-router-dom";
import { SidebarArr } from "../../constants";
import { BarMusic } from "../../components/bar/bar";
import { MainNav } from "../../components/nav/nav";
import { Search } from "../../components/search/search";
import { Sidebar } from "../../components/sidebar/sidebar";
import { PlaylistTitle } from "../../components/topplaylistttitle/topPlyalistTitle";
import useSceleton from "../../hooks/useSceleton";
import * as S from "../main/main.style";

const SidebarPages = () => {
  const { sceleton } = useSceleton(true);

  const params = useParams();

  const sideTitle = SidebarArr.find((item) => item.id === +(params.id));

  const name = sideTitle.title 

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>{name}</S.CenterblockH2>
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

export default SidebarPages;
