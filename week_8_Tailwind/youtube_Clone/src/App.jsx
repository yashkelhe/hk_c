import "./App.css";
import AppBar from "./component/AppBar";
import SideBar from "./component/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VideoGrid from "./component/VideoGrid";
import InsideVideo from "./component/InsideVideo";

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <div className="flex pt-1">
          <div className="mr-2">
            <SideBar />
          </div>
          <div className="flex-1">
            <Routes>
              <Route path="/video" element={<InsideVideo />} />
              <Route path="/" element={<VideoGrid />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
