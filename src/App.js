import "./App.css";
import { useState } from "react";
import Start from "./pages/Start";
import Main from "./pages/Main";

function App() {
  const [nextPage, setNextPage] = useState(false);

  return (
    <div className="App">
      {nextPage ? <Main /> : <Start setNextPage={setNextPage} />}
    </div>
  );
}

export default App;
