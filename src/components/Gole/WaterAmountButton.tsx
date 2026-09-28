import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type Props = {
  quantidade: number;
  onPress: () => void;
};

export default function WaterAmountButton({
  quantidade,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.amount}>
        {quantidade}
      </Text>

      <Text style={styles.ml}>ml</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",

    elevation: 4,

    shadowColor: "#5A6BD8",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  pressed: {
    transform: [{ scale: 0.94 }],
  },

  amount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#29264E",
  },

  ml: {
    fontSize: 16,
    fontWeight: "700",
    color: "#29264E",
  },
});