import React from "react";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "Recoil";
import { countAtoms, evenSelector } from "./store/atoms/count";
function App() {
  return (
    <>
      <RecoilRoot>
        <Appbar />
      </RecoilRoot>
    </>
  );
}

function Appbar() {
  console.log("re rendering");
  return (
    <div>
      <ShowCounter />
      <IsEven />

      <IncrementCounter />
    </div>
  );
}
function IsEven() {
  const value = useRecoilValue(evenSelector);
  return (
    <div>
      <div>{value == 0 ? " its even" : "its odd"}</div>
    </div>
  );
}
function IncrementCounter() {
  const setCount = useSetRecoilState(countAtoms);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

function ShowCounter() {
  const counter = useRecoilValue(countAtoms);

  return (
    <div>
      <div>{counter}</div>
    </div>
  );
}
export default App;
