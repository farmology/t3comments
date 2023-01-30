import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const commentRouter = createTRPCRouter({
    getComments: publicProcedure
        .query( async ({ ctx }) => {
            const comments = await ctx.prisma.comment.findMany();
            return comments;
    }),
    addComment: publicProcedure
        .input(z.object({
            body: z.string(),
            parentId: z.string().optional(),
            }))
        .mutation( async ({ input, ctx }) => {
            const { body, parentId } = input
            const comment = await ctx.prisma.comment.create({
                data: {
                    body,
                    ...(parentId && {
                      parent: {
                        connect: {
                          id: parentId,
                        },
                      },
                    }),
                  },
                });
            return comment;
        })
    })
  