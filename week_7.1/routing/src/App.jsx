import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { useContext, useState } from "react";
import { ContextApi } from "./Context";

const Login = lazy(() => import("./component/Login"));
const Dashboard = lazy(() => import("./component/Dashboard"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Suspense
          fallback={
            <div>
              Loading... u can add anythiong that we show when the network is
              not good
            </div>
          }
        >
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navGate = useNavigate();
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          navGate("/");
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          navGate("/Dashboard");
        }}
      >
        Dashboard
      </button>
      <div style={{ background: "black", padding: 20, color: "white" }}>
        hello this is routing which is makes the website more pritter
      </div>

      <ContextApi.Provider value={count}>
        <Sum />
      </ContextApi.Provider>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment the count {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        make a count zero
      </button>
    </div>
  );
}

function Sum() {
  const contextValue = useContext(ContextApi);
  return <div>the count is {contextValue}</div>;
}

export default App;
