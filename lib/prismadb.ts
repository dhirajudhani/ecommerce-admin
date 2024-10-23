/**
 * By writing this it will ensure that it will not make new Prisma client on each change at client side 
 */

import { PrismaClient } from "@prisma/client";

declare global {
    var prisma : PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV!=="production"){
    globalThis.prisma = prismadb
}