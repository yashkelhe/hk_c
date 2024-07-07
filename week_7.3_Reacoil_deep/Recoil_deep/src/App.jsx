import { useRecoilValue, RecoilRoot } from "Recoil";
import {
  networkAtoms,
  jobsAtoms,
  notiicationAtoms,
  messageAtoms,
  sumAtom,
} from "./store/Atoms/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <TheVButton />
      </RecoilRoot>
    </>
  );
}

function TheVButton() {
  const netWork = useRecoilValue(networkAtoms);
  const jobs = useRecoilValue(jobsAtoms);
  const Notifiction = useRecoilValue(notiicationAtoms);
  const message = useRecoilValue(messageAtoms);
  const sum = useRecoilValue(sumAtom);
  return (
    <>
      <button>Home</button>
      <button>My network {netWork <= 99 ? netWork : 99 + "+"}</button>
      <button>Jobs {jobs <= 99 ? jobs : 99 + "+"}</button>
      <button>Message {Notifiction <= 99 ? Notifiction : 99 + "+"}</button>
      <button> Notification {message <= 99 ? message : 99 + "+"}</button>

      <button> Me {sum}</button>
    </>
  );
}
export default App;
