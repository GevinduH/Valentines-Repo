import { useMediaQuery } from "@material-ui/core";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const mediaLg = useMediaQuery("(max-width: 1280px)");
  return (
    <div className="App" style={{ height: mediaLg ? "100%" : "100vh" }}>
      <Home />
    </div>
  );
}

export default App;
