import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, View } from "react-native";
import { Sensor } from "../data/sensores";
import { styles } from "../styles/styles";

type Props = {
  sensor: Sensor;
};

export function SensorCard({ sensor }: Props) {
  return (
    <View style={styles.sensorCard}>
      <MaterialIcons
        name={sensor.icone as any}
        size={22}
        color="#FFFFFF"
      />

      <Text style={styles.sensorNome}>
        {sensor.nome}
      </Text>

      <View style={styles.sensorValorLinha}>
        <Text style={styles.sensorValor}>
          {sensor.valor}
        </Text>

        {sensor.unidade && (
          <Text style={styles.sensorUnidade}>
            {sensor.unidade}
          </Text>
        )}
      </View>
    </View>
  );
}