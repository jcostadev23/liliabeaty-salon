const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      name: "Lilia Admin",
      email: "admin@lilia.com",
      phoneNumber: "+351910000001",
      password: "admin123",
      role: "ADMIN",
    },
    {
      name: "Carla Silva",
      email: "carla@lilia.com",
      phoneNumber: "+351910000002",
      password: "carla123",
      role: "USER",
    },
    {
      name: "Marta Lopes",
      email: "marta@lilia.com",
      phoneNumber: "+351910000003",
      password: "marta123",
      role: "USER",
    },
  ];

  for (const user of users) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        phoneNumber: user.phoneNumber,
        passwordHash,
        role: user.role,
      },
      create: {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        passwordHash,
        role: user.role,
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
