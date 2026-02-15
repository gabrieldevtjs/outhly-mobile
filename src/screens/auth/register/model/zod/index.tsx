
import { z } from "zod";

export const SchemaRegister = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("E-mail inválido").nonempty("E-mail é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type RegisterType = z.infer<typeof SchemaRegister>;