export type DiaRegistro = {
  consumo: number;
  meta: number;
};

export type Historico = {
  [data: string]: DiaRegistro;
};

export type Amigo = {
  id: string;
  nome: string;
  consumo: number;
  meta: number;
};

export type TipoAviso =
  | "moderado"
  | "rapido"
  | "semRegistro";

export type PaginaHome =
  | "hoje"
  | "tendencias";