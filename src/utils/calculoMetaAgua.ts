type DadosMeta = {
  peso?: number;
  atividade?: "baixo" | "moderado" | "alto";
};

export function calcularMetaAgua({
  peso,
  atividade,
}: DadosMeta): number {
  // Valor padrão enquanto não temos informações suficientes.
  const pesoBase = peso ?? 60;

  // Estimativa inicial baseada no peso.
  let meta = pesoBase * 35;

  if (atividade === "moderado") {
    meta += 300;
  }

  if (atividade === "alto") {
    meta += 500;
  }

  // Limites apenas para manter a interface consistente
  // durante o desenvolvimento.
  meta = Math.max(1200, Math.min(meta, 4000));

  // Arredonda para múltiplos de 50 ml.
  return Math.round(meta / 50) * 50;
}