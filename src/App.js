import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing";
import { MouseContext } from "./context/mouse-context";
import { Typography } from "@mui/material";

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Typography
            fontSize="3vh"
            >
            Hover over me
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
