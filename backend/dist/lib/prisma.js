"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/lib/prisma.ts
require("dotenv/config");
// import { PrismaClient } from "../../generated/client";
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const prisma_1 = require("../generated/prisma");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not defined in environment variables");
}
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new prisma_1.PrismaClient({ adapter });
exports.default = prisma;
//# sourceMappingURL=prisma.js.map