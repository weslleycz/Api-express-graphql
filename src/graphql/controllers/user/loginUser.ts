import { matchKey } from "../../../utils/crypy";
import { prismaClient } from "../../../utils/prismaClient";

type LoginInput = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: LoginInput) => {
  const data = await prismaClient.user.findFirst({
    where: {
      email,
    },
  });
  if (data!) {
    if (matchKey(password, data.password)) {
      return { status: data.id, has_error: false };
    } else {
      return { status: "Access denied", has_error: true };
    }
  } else {
    return { status: "User not found", has_error: true };
  }
};
