import { StatusAnalise } from "../types/Analise";

export const statusCores: Record<
  StatusAnalise,
  {
    fundo: string;
    texto: string;
    icone: string;
  }
> = {
  Adequada: {
    fundo: "#DDF4C8",
    texto: "#4D9B20",
    icone: "#4DAA18",
  },
  Pendente: {
    fundo: "#FFF2B8",
    texto: "#C79A00",
    icone: "#E1B400",
  },
  Crítica: {
    fundo: "#FFD7D2",
    texto: "#C6382D",
    icone: "#D63A30",
  },
};