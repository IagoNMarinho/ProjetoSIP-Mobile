import { Text, View } from "react-native";
import { Nivel } from "../types/Sobre";
import { styles } from "../styles/styles";

type Props = {
  nivel: Nivel;
};

export function NivelCard({ nivel }: Props) {
  return (
    <View style={styles.nivelCard}>
      <View
        style={[
          styles.nivelBolinha,
          nivel.tipo === "critico" && styles.nivelCritico,
          nivel.tipo === "atencao" && styles.nivelAtencao,
          nivel.tipo === "ideal" && styles.nivelIdeal,
          nivel.tipo === "boa" && styles.nivelBoa,
        ]}
      />

      <View style={styles.nivelConteudo}>
        <Text style={styles.nivelTitulo}>
          {nivel.titulo}
        </Text>

        <Text style={styles.nivelDescricao}>
          {nivel.descricao}
        </Text>
      </View>
    </View>
  );
}