import React, { useEffect, useState } from "react";
import { Appbar } from "./subComponent/Appbar";
import { Balance } from "./subComponent/Balance";
import { Users } from "./subComponent/Users";

import axios from "axios";

export function Dashboard() {
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/app/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });
  }, []);
  return (
    <div className="">
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
}
