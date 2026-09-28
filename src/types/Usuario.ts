export type TipoUsuario = 'usuario' | 'instituicao';

export type UsuarioTipo = {
  codigo: string;
  nome: string;
  email: string;
  senha: string;
  permissao: TipoUsuario;
};

export type CadastroUsuarioTipo = {
  nome: string;
  dataNascimento: string;
  username: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
};