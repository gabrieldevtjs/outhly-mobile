export interface IUser {
  id: string;
  title: string;
  password: string;
  criado_em: string | Date;
  atualizado_em: string | Date;
  ativo: boolean;
  user_id: string;
}
