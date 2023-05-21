import { PrismaClient } from "@prisma/client"

declare global {
  type NewType = PrismaClient

  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: NewType
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma