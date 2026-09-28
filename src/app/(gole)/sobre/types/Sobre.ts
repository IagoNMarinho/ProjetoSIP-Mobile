export type Aba = "projeto" | "metodologia" | "contato";

export type TipoNivel =
  | "critico"
  | "atencao"
  | "ideal"
  | "boa";

export type Nivel = {
  titulo: string;
  descricao: string;
  tipo: TipoNivel;
};