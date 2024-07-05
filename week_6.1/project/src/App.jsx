import { useState, useCallback, memo } from "react";

function App() {
  const [num, setNum] = useState(0);

  // useMemo
  const Count = useCallback(() => {
    console.log("hello there");
  }, []);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>count {num}</button>

      <ButtonComponent innerFunction={Count} />
    </>
  );
}

const ButtonComponent = memo(({ innerFunction }) => {
  return <button onClick={innerFunction}>hello</button>;
});
export default App;
