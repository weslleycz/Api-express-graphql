import { crypyPassword } from "../../../utils/crypy";
import { prismaClient } from "../../../utils/prismaClient";

type UserInput = {
  email: string;
  password: string;
  name: string;
};

export const createUser = async ({ name, email, password }: UserInput) => {
  try {
    const data = await prismaClient.user.create({
      data: {
        email,
        password: <string>crypyPassword(password),
        name,
      },
    });
    return { status: "created", has_error: false };
  } catch (error) {
    return { status: "User already has registration", has_error: true };
  }
};
