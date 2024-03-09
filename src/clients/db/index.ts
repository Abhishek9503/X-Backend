// import { PrismaClient } from "@prisma/client";


// export const prismaClient  = new PrismaClient({log :["query"]})


import { PrismaClient } from "@prisma/client";

// export const prismaClient = new PrismaClient({
//   log: ["query"], // Enable query logging
// });


export const prismaClient = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });