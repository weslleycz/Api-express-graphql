import { Request, Response } from "express";
import { prismaClient } from "../../utils/prismaClient";

export const list = async (req: Request, res: Response) => {
  const listProjects = await prismaClient.project.findMany();
  const data = listProjects;
  res.render("home", data);
};
