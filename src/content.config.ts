import { defineCollection, z } from 'astro:content';
export const collections = {
    cont : defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            data : z.date(),
        })
    }),
    edu : defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            data : z.date(),
        })
    }),
    hop : defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            data : z.date(),
        })
    }),
    main : defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            data : z.date(),
        })
    }),
    occup : defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            data : z.date(),
        })
    }), 
}