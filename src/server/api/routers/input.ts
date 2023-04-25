import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";

export const inputRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
    });
  }),
});
