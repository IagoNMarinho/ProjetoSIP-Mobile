import { StyleSheet, View } from "react-native";
import { styles } from "../styles/styles";

export function Bolhas() {
  const bolhas = [
    { left: "8%", top: 90, size: 26 },
    { left: "24%", top: 150, size: 16 },
    { left: "44%", top: 70, size: 34 },
    { left: "68%", top: 125, size: 22 },
    { left: "86%", top: 55, size: 30 },
    { left: "13%", top: 390, size: 18 },
    { left: "36%", top: 330, size: 28 },
    { left: "61%", top: 410, size: 16 },
    { left: "82%", top: 350, size: 25 },
  ];

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {bolhas.map((bolha, index) => (
        <View
          key={index}
          style={[
            styles.bolha,
            {
              left: bolha.left as any,
              top: bolha.top,
              width: bolha.size,
              height: bolha.size,
              borderRadius: bolha.size / 2,
            },
          ]}
        >
          <View style={styles.brilhoBolha} />
        </View>
      ))}
    </View>
  );
}