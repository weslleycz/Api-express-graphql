import { prismaClient } from "../../../utils/prismaClient";

type ProjectInput = {
    name: string;
    description: string;
    userId:string;
  };

export const createProject = async ({ description,userId,name }:ProjectInput) => {
    try {
        const data = await prismaClient.project.create({
            data:{
                name,
                description,
                userId
            }
        })
        return { status: "created", has_error: false };
    } catch (error) {
        return { status: "error", has_error: true };
    }
}