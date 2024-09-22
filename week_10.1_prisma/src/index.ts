import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
async function insertData({
  email,
  password,
  firstName,
  lastName,
}: UserParams) {
  const res = await prisma.user.create({
    // the data u have to give its syntax
    data: {
      email,
      lastName,
      password,
      firstName,
    },
    // there are banch of  option lik select
    //selec does that it only return the thing that u will mention and make it true
    // from here
    select: {
      id: true,
      email: true,
      lastName: true,
      password: true,
      firstName: true,
    },
  });
  console.log("the id is ", res);
}

insertData({
  email: "yashkelhe@gmail.com",
  password: "canbeAnything",
  firstName: "yash",
  lastName: "kelhe",
});
