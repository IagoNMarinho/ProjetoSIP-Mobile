import { useState } from "react";

import { DadosGole } from "../types/Gole";
import { calcularMetaAgua } from "../utils/calculoMetaAgua";

export function useGole() {
  const [dados, setDados] = useState<DadosGole>({
    metaDiaria: 2000,
    consumoAtual: 0,
  });

  function configurarGole(
    respostas: Omit<DadosGole, "metaDiaria" | "consumoAtual">
  ) {
    const meta = calcularMetaAgua({
      peso: respostas.peso,
      atividade: respostas.atividade,
    });

    setDados({
      ...respostas,
      metaDiaria: meta,
      consumoAtual: 0,
    });
  }

  function adicionarAgua(quantidade: number) {
    setDados((atual) => ({
      ...atual,
      consumoAtual: atual.consumoAtual + quantidade,
    }));
  }

  function removerAgua(quantidade: number) {
    setDados((atual) => ({
      ...atual,
      consumoAtual: Math.max(
        0,
        atual.consumoAtual - quantidade
      ),
    }));
  }

  return {
    dados,
    configurarGole,
    adicionarAgua,
    removerAgua,
  };
}