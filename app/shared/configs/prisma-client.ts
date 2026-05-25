import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { DATABASE_URL } from "./env-var"

const connectionString = DATABASE_URL
const adapter = new PrismaPg({ connectionString })
const prismaClient = new PrismaClient({ adapter })

export default prismaClient
