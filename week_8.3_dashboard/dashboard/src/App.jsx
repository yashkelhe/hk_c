import "./App.css";
import RevenuCart from "./component/RevenuCart";

function App() {
  return (
    <>
      <div className="grid grid-cols-3">
        <RevenuCart
          title={"Amount Pending"}
          orderCount={"13"}
          amount={"92,312.20"}
        />
      </div>
    </>
  );
}

export default App;
