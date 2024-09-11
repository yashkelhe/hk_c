import axios from "axios";
import { passwordGlobel, userglobelName } from "./api/user/route";

async function getUserDetails() {
  // await new Promise((r) => setTimeout(r, 5000));
  const response = await axios.get(
    // "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    "http://localhost:3000/api/user"
  );
  return response.data;
}
export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userglobelName}</div>

          <div>Password :{passwordGlobel}</div>
        </div>
      </div>
    </div>
  );
}
