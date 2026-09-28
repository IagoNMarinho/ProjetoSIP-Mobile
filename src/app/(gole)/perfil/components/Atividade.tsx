import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  icone: string;
  texto: string;
};

export function Atividade({ icone, texto }: Props) {
  return (
    <View style={styles.atividade}>
      <View style={styles.atividadeIcone}>
        <MaterialIcons
          name={icone as any}
          size={19}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.atividadeTexto}>{texto}</Text>

      <MaterialIcons
        name="chevron-right"
        size={22}
        color="#7892B2"
      />
    </View>
  );
}