import { atom, selector } from "Recoil";

// here the key for to identify each atom uniquely and default value is atom value which we will use for count
export const countAtoms = atom({
  key: "countAtoms",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const value = get(countAtoms);
    return value % 2;
  },
});
