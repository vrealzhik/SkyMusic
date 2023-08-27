import "./App.css";
import { MainNav } from "./components/nav";
import { Search } from "./components/search";
import { BarMusic } from "./components/bar";
import { PlaylistItem } from "./components/PlaylistItem";
import { FilterMusic } from "./components/filter";
import { PlaylistTitle } from "./components/topPlyalistTitle";
import { Sidebar } from "./components/sidebar";

function App() {
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
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
                <PlaylistItem name="Guilt" singer="Nero" albom="Welcome Reality" />
              </div>
            </div>
          </div>
          <Sidebar />
        </main>
        <BarMusic />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
