export interface IUser {
  id: string;
  email: string;
  name: string;
  atualizado_em: string | Date;
  criado_em: string | Date;
  ativo: boolean;
}
