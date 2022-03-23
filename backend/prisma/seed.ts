import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  for (let count = 1; count < 5; count++) {
    await prisma.team.upsert({
      where: { name: String(count) },
      update: {},
      create: {
        name: String(count),
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
