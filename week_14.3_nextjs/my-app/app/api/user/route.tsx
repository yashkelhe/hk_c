import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const data = req.json();
  console.log("hey this is data", data);
  return NextResponse.json({
    data: "something",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("the thing u all know is ", data.username, data.password);
  return NextResponse.json({
    msg: "done",
  });
}
