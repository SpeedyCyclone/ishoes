const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.Product.createMany({
    data: [
      {
        id: 1,
        title: "SS-Era 1",
        price: 5999,
        description: "lorem",
        category: "experiened skaters",
        image: "",
      },
      {
        id: 2,
        title: "SS-Era 2",
        price: 5999,
        description: "lorem",
        category: "experiened skaters",
        image: "",
      },
      {
        id: 3,
        title: "SS-Era 3",
        price: 5999,
        description: "lorem",
        category: "experiened skaters",
        image: "",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
