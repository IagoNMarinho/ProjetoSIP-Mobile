export type Genero = "masculino" | "feminino" | "outro";

export type NivelAtividade =
  | "baixo"
  | "moderado"
  | "alto";

export type DadosGole = {
  genero?: Genero;
  idade?: number;
  peso?: number;
  altura?: number;
  atividade?: NivelAtividade;
  exercicio?: boolean;

  metaDiaria: number;
  consumoAtual: number;
};