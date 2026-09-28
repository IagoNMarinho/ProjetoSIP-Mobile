import { Text, View } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  valor: string;
  texto: string;
};

export function Stat({ valor, texto }: Props) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValor}>{valor}</Text>
      <Text style={styles.statTexto}>{texto}</Text>
    </View>
  );
}