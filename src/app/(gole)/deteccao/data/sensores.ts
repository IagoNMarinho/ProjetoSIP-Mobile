export type Sensor = {
  nome: string;
  valor: string;
  unidade?: string;
  icone: string;
};

export const sensores: Sensor[] = [
  {
    nome: "pH",
    valor: "7.6",
    icone: "science",
  },
  {
    nome: "TDS",
    valor: "120",
    unidade: "ppm",
    icone: "water-drop",
  },
  {
    nome: "Turbidez",
    valor: "5",
    unidade: "NTU",
    icone: "opacity",
  },
  {
    nome: "Temp.",
    valor: "20",
    unidade: "°C",
    icone: "thermostat",
  },
];