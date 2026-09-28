import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  icone: string;
  valor: string;
  titulo: string;
};

export default function CardMedia({
  icone,
  valor,
  titulo,
}: Props) {
  return (
    <View style={styles.cardMedia}>
      <View style={styles.iconeMedia}>
        <MaterialIcons
          name={icone as any}
          size={24}
          color="#FFFFFF"
        />
      </View>

      <Text style={styles.valorMedia}>{valor}</Text>

      <Text style={styles.tituloMedia}>{titulo}</Text>
    </View>
  );
}