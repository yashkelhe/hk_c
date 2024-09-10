import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export function GET() {
  return Response.json({
    name: "yash ",
    email: "yashkelhe30@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  // create and database
  // hookName.name.create;
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
