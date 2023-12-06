import Home from "./Pages/Home Page/Home";
import { slides } from "./data.json";

import "./App.css";

function App() {
  return (
    <>
      <Home data={slides} />
    </>
  );
}

export default App;
