import "./App.css";
import { MainNav } from "./components/nav";
import { Search } from "./components/search";
import { BarMusic } from "./components/bar";
import { PlaylistItem } from "./components/PlaylistItem";
import { FilterMusic } from "./components/filter";
import { PlaylistTitle } from "./components/topPlyalistTitle";
import { Sidebar } from "./components/sidebar";
import { useEffect, useState } from "react";
import * as S from './style.components/app.style';


function App() {
  const [sceleton, setSceleton] = useState(true);

  const toggleSceleton = () => setSceleton(!sceleton);

  useEffect(() => {
    const timerId = setTimeout(() => toggleSceleton(), 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <MainNav />
          <S.MainCenterblock>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <FilterMusic />
            <S.CenterblockContent>
              <PlaylistTitle />

              <S.ContentPlaylist>
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
                <PlaylistItem
                  name="Guilt"
                  singer="Nero"
                  albom="Welcome Reality"
                  bef={sceleton}
                />
              </S.ContentPlaylist>
            </S.CenterblockContent>
          </S.MainCenterblock>
          <Sidebar bef={sceleton} />
        </S.Main>
        <BarMusic bef={sceleton} />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
