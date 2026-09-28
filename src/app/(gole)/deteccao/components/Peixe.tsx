import { View } from "react-native";
import { styles } from "../styles/styles";

type Props = {
  top: number;
  left: string;
  scale?: number;
};

export function Peixe({ top, left, scale = 1 }: Props) {
  return (
    <View
      pointerEvents="none"
      style={[
        styles.peixe,
        {
          top,
          left: left as any,
          transform: [{ scale }],
        },
      ]}
    >
      <View style={styles.caudaPeixe} />
      <View style={styles.corpoPeixe} />
      <View style={styles.olhoPeixe} />
    </View>
  );
}