import { Pressable, Text, View } from "react-native";
import { statusCores } from "../constants/statusCores";
import { styles } from "../styles/styles";
import { Analise } from "../types/Analise";

type Props = {
  analise: Analise;
  numero: number;
  onDetalhes: () => void;
};

export default function CardAnalise({
  analise,
  numero,
  onDetalhes,
}: Props) {
  const cores = statusCores[analise.status];

  return (
    <View style={styles.cardAnalise}>
      <View style={styles.cardAnaliseTopo}>
        <View style={styles.cardAnaliseInfo}>
          <Text style={styles.numeroAnalise}>
            Análise #{numero}
          </Text>

          <Text style={styles.localAnalise}>
            Local: {analise.local}
          </Text>
        </View>

        <View style={styles.dataAnalise}>
          <Text>{analise.data}</Text>
          <Text>{analise.horario}</Text>
        </View>
      </View>

      <View style={styles.cardAnaliseBaixo}>
        <View
          style={[
            styles.status,
            { backgroundColor: cores.fundo },
          ]}
        >
          <View
            style={[
              styles.statusBolinha,
              { backgroundColor: cores.icone },
            ]}
          />

          <Text
            style={[
              styles.statusTexto,
              { color: cores.texto },
            ]}
          >
            {analise.status}
          </Text>
        </View>

        <Pressable
          style={styles.detalhesBotao}
          onPress={onDetalhes}
        >
          <Text style={styles.detalhesTexto}>
            Ver detalhes
          </Text>
        </Pressable>
      </View>
    </View>
  );
}