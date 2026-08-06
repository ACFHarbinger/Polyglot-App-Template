// libraries/other/prisma/client.ts
// Prisma Client usage example in TypeScript.

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Create a new user with profile and posts in a nested write
  console.log("Creating new user with nested records...");
  const newUser = await prisma.user.create({
    data: {
      username: 'polyglot_coder',
      email: 'coder@polyglot.org',
      profile: {
        create: {
          bio: 'Writing code in ten different languages.',
        },
      },
      posts: {
        create: [
          { title: 'Hello Polyglot World', content: 'Scaffolding projects is fun.' },
          { title: 'Prisma Integration', content: 'Database interaction is simplified.' },
        ],
      },
    },
  });
  console.log('User created:', newUser);

  // 2. Query users including relations
  console.log("Fetching users with posts...");
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    console.error("Prisma error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
