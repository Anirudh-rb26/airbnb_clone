import { PrismaClient } from "@prisma/client";
import { Return } from "@prisma/client/runtime/library";

const prismaCientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaCientSingleton>;
}

const prisma = globalThis.prisma ?? prismaCientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
