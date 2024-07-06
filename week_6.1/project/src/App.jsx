import { useState, useMemo, useRef } from "react";

const words = ["hi", "my", "name", "is", "yash", "i", "from", "jai", "hind"];
const number = 1000;
const arr = [];
for (let i = 0; i < number; i++) {
  let sentenceValue = "";
  for (let j = 0; j < words.length; j++) {
    sentenceValue += words[Math.floor(words.length * Math.random())] + " ";
  }
  arr.push(sentenceValue.trim());
}

function App() {
  const [sentence, setSentence] = useState(arr);
  const [filter, setFilter] = useState("");
  const NumberOfReRender = useRef(-1);

  const filteredValue = useMemo(
    () => sentence.filter((x) => x.includes(filter)),
    [filter, sentence]
  );

  NumberOfReRender.current = NumberOfReRender.current + 1;
  return (
    <>
      <div>
        {" "}
        the number of time the page re render {NumberOfReRender.current}
      </div>
      <input
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          setFilter(value);
        }}
        placeholder="Filter sentences"
      />
      {filteredValue.map((fil, index) => (
        <div key={index}>{fil}</div>
      ))}
    </>
  );
}

export default App;
