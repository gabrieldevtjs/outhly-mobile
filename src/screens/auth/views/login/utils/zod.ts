import * as z from "zod";

const LoginShema = z.object({
  email: z.string(),
  senha: z.any(),
});

export type LoginShemaType = z.infer<typeof LoginShema>;
