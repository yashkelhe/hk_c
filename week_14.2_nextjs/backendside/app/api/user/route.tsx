import { NextRequest, NextResponse } from "next/server";
import client from "@/db";

export function GET() {
  return Response.json({
    name: "yash ",
    email: "yashkelhe30@gmail.com",
  });
}
export let userglobelName = "";
export let passwordGlobel = "";
export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  // create and database
  // hookName.name.create;
  userglobelName = data.username;
  passwordGlobel = data.password;
  try {
    await client.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return Response.json({
    isSuccessful: "yes",
  });
}
