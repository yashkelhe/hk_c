import { BottomWarning } from "../component/subComponent/BottomWarning";
import { Button } from "../component/subComponent/Button";
import { Heading } from "../component/subComponent/Heading";
import { InputBox } from "../component/subComponent/InputBox";
import { SubHeading } from "../component/subComponent/SubHeading";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// /////////////////////////////////////////
export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="harkirat@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              label={"Sign up"}
              onClick={async () => {
                // first link , body , header
                const respose = await axios.post(
                  "http://localhost:3000/app/v1/user/signup",
                  {
                    username,
                    password,
                    lastName,
                    firstName,
                  }
                );
                localStorage.setItem("token", respose.data.token);
                navigate("/dashboard");
              }}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
