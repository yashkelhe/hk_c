import { useRecoilStateLoadable, useRecoilValue, RecoilRoot } from "Recoil";
import { networkAtoms, sumAtom, familyFindTheTodo } from "./store/Atoms/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <TheVButton />
        <TheTodo id={2} />
      </RecoilRoot>
    </>
  );
}

function TheVButton() {
  const Notifiction = useRecoilValue(networkAtoms);

  const sum = useRecoilValue(sumAtom);

  return (
    <>
      <button>Home</button>
      <button>
        My network {Notifiction.network <= 99 ? Notifiction.network : 99 + "+"}
      </button>
      <button>
        Jobs {Notifiction.jobs <= 99 ? Notifiction.jobs : 99 + "+"}
      </button>
      <button>
        Message {Notifiction.messaging <= 99 ? Notifiction.messaging : 99 + "+"}
      </button>
      <button>
        {" "}
        Notification{" "}
        {Notifiction.notifications <= 99 ? Notifiction.notifications : 99 + "+"}
      </button>

      <button> Me {sum}</button>
    </>
  );
}
function TheTodo({ id }) {
  // const theValue = useRecoilValue(familyFindTheTodo(id));
  const [theValue, setTheValue] = useRecoilStateLoadable(familyFindTheTodo(id));
  // theValue now give u a object which has a contents and state
  if (theValue.state === "loading") {
    return <div>loading...</div>;
  } else if (theValue.state === "hasValue") {
    return (
      <div>
        the todo is {(theValue.contents.title, theValue.contents.description)}
      </div>
    );
  } else if (todo.state === "hasError") {
    return <div>backend has some error please check</div>;
  }
}
export default App;
