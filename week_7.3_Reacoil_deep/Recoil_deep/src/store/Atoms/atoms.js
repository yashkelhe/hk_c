import { atom, selector } from "Recoil";

export const networkAtoms = atom({
  key: "networkAtoms",
  default: 102,
});
export const jobsAtoms = atom({
  key: "jobsAtoms",
  default: 2,
});
export const notiicationAtoms = atom({
  key: "notiicationAtoms",
  default: 132,
});
export const messageAtoms = atom({
  key: "messageAtoms",
  default: 0,
});
export const sumAtom = selector({
  key: "sumAtom",
  get: ({ get }) => {
    const message = get(messageAtoms);
    const newWork = get(networkAtoms);
    const jobs = get(jobsAtoms);
    const notification = get(notiicationAtoms);
    return message + newWork + jobs + notification;
  },
});
