import "./App.css";
import { MainNav } from "./components/nav";
import { Search } from "./components/search";
import { BarMusic } from "./components/bar";
import { PlaylistItem } from "./components/PlaylistItem";
import { FilterMusic } from "./components/filter";
import { PlaylistTitle } from "./components/topPlyalistTitle";
import { Sidebar } from "./components/sidebar";
import { useEffect, useState } from "react";

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
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <FilterMusic />
            <div className="centerblock__content">
              <PlaylistTitle />

              <div className="content__playlist playlist">
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
              </div>
            </div>
          </div>
          <Sidebar bef={sceleton} />
        </main>
        <BarMusic bef={sceleton} />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
