import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  texto: string;
  icone: string;
};

export function Badge({ texto, icone }: Props) {
  return (
    <View style={styles.badge}>
      <View style={styles.badgeIcone}>
        <MaterialIcons
          name={icone as any}
          size={18}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.badgeTexto}>{texto}</Text>
    </View>
  );
}