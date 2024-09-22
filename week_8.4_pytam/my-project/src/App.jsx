// import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./component/Dashboard";
import { Signup } from "./component/Signup";
import { Signin } from "./component/Signin";
import { SendMoney } from "./component/SendMoney";
import Home from "./component/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/SendMoney" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
