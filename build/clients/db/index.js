"use strict";
// import { PrismaClient } from "@prisma/client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
// export const prismaClient  = new PrismaClient({log :["query"]})
const client_1 = require("@prisma/client");
// export const prismaClient = new PrismaClient({
//   log: ["query"], // Enable query logging
// });
exports.prismaClient = new client_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
