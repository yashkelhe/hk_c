import { atom } from "Recoil";

// here the key for to identify each atom uniquely and default value is atom value which we will use for count
export const countAtoms = atom({
  key: "countAtoms",
  default: 0,
});
