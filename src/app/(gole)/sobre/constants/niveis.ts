import { Nivel } from "../types/Sobre";

export const niveisPH: Nivel[] = [
  {
    titulo: "0 - 3 de PH",
    descricao:
      "Crítica! Pode causar corrosão e indicar contaminação química.",
    tipo: "critico",
  },
  {
    titulo: "4 - 6 de PH",
    descricao:
      "Atenção! Fora da neutralidade, requer avaliação conforme a aplicação.",
    tipo: "atencao",
  },
  {
    titulo: "7 de PH",
    descricao:
      "Ideal! Faixa considerada neutra para água pura.",
    tipo: "ideal",
  },
  {
    titulo: "8 - 10 de PH",
    descricao:
      "Boa! Comum em algumas águas naturais e processos industriais.",
    tipo: "boa",
  },
  {
    titulo: "11 - 14 de PH",
    descricao:
      "Crítica! Pode indicar elevada concentração de bases químicas.",
    tipo: "critico",
  },
];

export const niveisTurbidez: Nivel[] = [
  {
    titulo: "0 - 5 NTU",
    descricao:
      "Excelente! Água visualmente limpa, com poucas partículas suspensas.",
    tipo: "ideal",
  },
  {
    titulo: "5 - 25 NTU",
    descricao:
      "Boa! Pequena quantidade de partículas em suspensão.",
    tipo: "boa",
  },
  {
    titulo: "25 - 100 NTU",
    descricao:
      "Atenção! Presença significativa de sedimentos ou matéria orgânica.",
    tipo: "atencao",
  },
  {
    titulo: "100 - 1000 NTU",
    descricao:
      "Ruim! Água bastante turva, dificultando a passagem da luz.",
    tipo: "critico",
  },
  {
    titulo: "1000 NTU",
    descricao:
      "Crítica! Elevada concentração de partículas suspensas, indicando necessidade de tratamento.",
    tipo: "critico",
  },
];

export const niveisTDS: Nivel[] = [
  {
    titulo: "0 - 250 ppm",
    descricao:
      "Não próprio para consumo! Faltam alguns minerais benéficos para a saúde.",
    tipo: "critico",
  },
  {
    titulo: "300 - 500 ppm",
    descricao:
      "Boa! Pequena quantidade de partículas em suspensão.",
    tipo: "boa",
  },
  {
    titulo: "600 - 900 ppm",
    descricao:
      "Inaceitável! A água deve ser purificada utilizando purificadores de osmose reversa.",
    tipo: "atencao",
  },
  {
    titulo: "1000 ppm",
    descricao:
      "Inseguro! A água pode ter efeitos adversos para a saúde.",
    tipo: "critico",
  },
];