import { atom, selector, atomFamily, selectorFamily } from "Recoil";
import axios from "axios";
// import { TODO } from "../../TODO";
export const networkAtoms = atom({
  key: "networkAtoms",
  default: selector({
    key: "selctorThevalue",
    get: async () => {
      const result = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      const value = result.data;
      return value;
    },
  }),
});

export const sumAtom = selector({
  key: "sumAtom",
  get: ({ get }) => {
    const message = get(networkAtoms);
    return (
      message.network + message.jobs + message.messaging + message.notifications
    );
  },
});

// atom family returns the atoms
// export const findTheTodo = atomFamily({
//   key: "findTheTodo",
//   default: (id) => {
//     return TODO.find((x) => x.id === id);
//   },
// });

// here the selectorFamily return the multiple atoms for that we have two function
export const familyFindTheTodo = atomFamily({
  key: "findTheTodo",
  default: selectorFamily({
    key: "theKey",
    get: function (id) {
      return async function ({ get }) {
        await new Promise((r) => setTimeout(r, 3000));
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      };
    },
  }),
});
