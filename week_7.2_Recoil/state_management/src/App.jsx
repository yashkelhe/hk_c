import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "Recoil";
import { countAtoms } from "./store/atoms/count";
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
  return (
    <div>
      <ShowCounter />
      <IncrementCounter />
    </div>
  );
}

function IncrementCounter() {
  const [count, setCount] = useRecoilState(countAtoms);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

function ShowCounter() {
  const counter = useRecoilValue(countAtoms);
  return <div>{counter}</div>;
}
export default App;
