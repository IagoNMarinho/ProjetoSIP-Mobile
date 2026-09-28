import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function Grafico() {
  const pontos = [35, 55, 75, 40, 65, 42, 88];

  return (
    <View style={styles.grafico}>
      <Text style={styles.graficoLegenda}>
        Análises semanais
      </Text>

      <View style={styles.graficoArea}>
        {[0, 1, 2, 3].map((linha) => (
          <View
            key={linha}
            style={[
              styles.linhaGrafico,
              { top: `${linha * 33}%` },
            ]}
          />
        ))}

        {pontos.map((ponto, index) => {
          if (index === pontos.length - 1) {
            return null;
          }

          const proximo = pontos[index + 1];
          const left = `${(index / 6) * 100}%`;
          const width = `${100 / 6}%`;
          const diferenca = proximo - ponto;

          const angulo =
            -Math.atan2(diferenca, 100) *
            (180 / Math.PI);

          return (
            <View
              key={index}
              style={[
                styles.linhaGraficoValor,
                {
                  left,
                  width,
                  top: `${100 - ponto}%`,
                  transform: [
                    {
                      rotate: `${angulo}deg`,
                    },
                  ],
                },
              ]}
            />
          );
        })}

        {pontos.map((ponto, index) => (
          <View
            key={`ponto-${index}`}
            style={[
              styles.pontoGrafico,
              {
                left: `${(index / 6) * 100}%`,
                top: `${100 - ponto}%`,
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.diasGrafico}>
        <Text>Seg</Text>
        <Text>Ter</Text>
        <Text>Qua</Text>
        <Text>Qui</Text>
        <Text>Sex</Text>
        <Text>Sáb</Text>
        <Text>Dom</Text>
      </View>
    </View>
  );
}