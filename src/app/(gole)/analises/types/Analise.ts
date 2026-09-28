export type StatusAnalise = "Adequada" | "Pendente" | "Crítica";

export type Analise = {
  id: number;
  local: string;
  data: string;
  horario: string;
  status: StatusAnalise;
  ph: number;
  turbidez: number;
  tds: number;
  temperatura: number;
};