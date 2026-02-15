
import { z } from "zod";

export const SchemaLogin = z.object({
	email: z.string().email("E-mail inválido").nonempty("E-mail é obrigatório"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type LoginType = z.infer<typeof SchemaLogin>;