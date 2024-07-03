import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className=" ">
        <li className="uppercase">
          <Link to={"/signup"}>signup</Link>
        </li>
        <li className="uppercase">
          <Link to={"/"}>about section</Link>
        </li>
      </div>
    </>
  );
}

export default App;
