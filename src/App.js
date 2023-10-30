import { useState } from "react";
import { AppRoutes } from "./routes";

function App() {

  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <AppRoutes
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      </header>
    </div>
  );
}

export default App;
