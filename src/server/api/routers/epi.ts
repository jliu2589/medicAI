import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";

export const epiRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.epi_Allergic_Reaction.findMany();
  }),
});
