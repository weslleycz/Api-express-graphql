import { prismaClient } from "../../../utils/prismaClient";
export const listUsers = async () => {
  const data = await prismaClient.user.findMany();
  return data;
};
