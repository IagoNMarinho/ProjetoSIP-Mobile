import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  valor: number;
  texto: string;
  icone: string;
  cor: string;
};

export default function CardEstatistica({
  valor,
  texto,
  icone,
  cor,
}: Props) {
  return (
    <View style={styles.cardEstatistica}>
      <View
        style={[
          styles.iconeEstatistica,
          { backgroundColor: cor },
        ]}
      >
        <MaterialIcons
          name={icone as any}
          size={26}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.valorEstatistica}>{valor}</Text>

      <Text style={styles.textoEstatistica}>{texto}</Text>
    </View>
  );
}