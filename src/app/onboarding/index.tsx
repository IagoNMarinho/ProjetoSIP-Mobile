import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";

export default function Onboarding() {
  function iniciar() {
    router.push("/onboarding/perguntas");
  }

  function pular() {
    router.replace("/(gole)/home");
  }

  return (
    <LinearGradient
      colors={["#EEF9FF", "#DFF3FF", "#E9E4FF"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.iconArea}>
            <View style={styles.waterCircle}>
              <MaterialIcons
                name="water-drop"
                size={75}
                color="#5B7CFF"
              />
            </View>

            <View style={styles.bubbleOne} />
            <View style={styles.bubbleTwo} />
            <View style={styles.bubbleThree} />
          </View>

          <Text style={styles.logo}>Gole+</Text>

          <Text style={styles.title}>
            Vamos conhecer{"\n"}um pouco sobre você
          </Text>

          <Text style={styles.description}>
            Responda algumas perguntas para que o
            Gole+ possa estimar uma meta diária de
            hidratação para você.
          </Text>

          <View style={styles.buttons}>
            <Pressable
              style={styles.primaryButton}
              onPress={iniciar}
            >
              <Text style={styles.primaryText}>
                Começar
              </Text>

              <MaterialIcons
                name="arrow-forward"
                size={22}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable
              style={styles.skipButton}
              onPress={pular}
            >
              <Text style={styles.skipText}>
                Pular
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  iconArea: {
    height: 220,
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  waterCircle: {
    height: 170,
    width: 170,
    borderRadius: 85,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#6D7AFF",
    shadowOpacity: 0.18,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },

  bubbleOne: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#A7CFFF",
    top: 10,
    right: 20,
  },

  bubbleTwo: {
    position: "absolute",
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: "#C9B9FF",
    top: 50,
    left: 20,
  },

  bubbleThree: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#78D6E8",
    bottom: 25,
    right: 30,
  },

  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#5369E8",
    marginBottom: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "800",
    color: "#29264E",
    marginBottom: 15,
  },

  description: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 23,
    color: "#777796",
    maxWidth: 330,
  },

  buttons: {
    width: "100%",
    marginTop: 45,
    alignItems: "center",
  },

  primaryButton: {
    width: "100%",
    height: 58,
    borderRadius: 30,
    backgroundColor: "#6575F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    elevation: 4,
  },

  primaryText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  skipButton: {
    paddingVertical: 18,
  },

  skipText: {
    color: "#9A99B7",
    fontSize: 14,
    fontWeight: "600",
  },
});