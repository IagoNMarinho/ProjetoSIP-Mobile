import MaterialIcons from "@react-native-vector-icons/material-icons";
import { BlurView } from "expo-blur";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type RotaMenu =
  | "/(gole)/home"
  | "/(gole)/deteccao"
  | "/(gole)/analises"
  | "/(gole)/sobre"
  | "/(gole)/perfil";

type ItemMenu = {
  label: string;
  icon: string;
  rota: RotaMenu;
};

const itens: ItemMenu[] = [
  {
    label: "Home",
    icon: "water-drop",
    rota: "/(gole)/home",
  },
  {
    label: "Detecção",
    icon: "photo-camera",
    rota: "/(gole)/deteccao",
  },
  {
    label: "Análises",
    icon: "bar-chart",
    rota: "/(gole)/analises",
  },
  {
    label: "Sobre",
    icon: "info-outline",
    rota: "/(gole)/sobre",
  },
  {
    label: "Perfil",
    icon: "person",
    rota: "/(gole)/perfil",
  },
];

export default function GoleMenu() {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  function navegar(rota: RotaMenu) {
    setAberto(false);
    router.push(rota);
  }

  return (
    <>
      {aberto && (
        <Pressable
          style={styles.overlay}
          onPress={() => setAberto(false)}
        >
          <BlurView
            intensity={18}
            tint="light"
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.overlayColor} />
        </Pressable>
      )}

      <View
        pointerEvents="box-none"
        style={styles.container}
      >
        {aberto &&
          itens
            .slice()
            .reverse()
            .map((item, index) => {
              const nomeRota =
                item.rota.split("/").pop() ?? "";

              const ativo =
                pathname.includes(nomeRota);

              return (
                <Pressable
                  key={item.label}
                  style={[
                    styles.menuItem,
                    {
                      bottom: 82 + index * 64,
                    },
                  ]}
                  onPress={() => navegar(item.rota)}
                >
                  <Text style={styles.label}>
                    {item.label}
                  </Text>

                  <View
                    style={[
                      styles.itemCircle,
                      ativo &&
                        styles.itemCircleActive,
                    ]}
                  >
                    <MaterialIcons
                      name={item.icon as any}
                      size={23}
                      color={
                        ativo
                          ? "#FFFFFF"
                          : "#45436B"
                      }
                    />
                  </View>
                </Pressable>
              );
            })}

        <Pressable
          style={[
            styles.mainButton,
            aberto && styles.mainButtonOpen,
          ]}
          onPress={() =>
            setAberto((atual) => !atual)
          }
        >
          <MaterialIcons
            name={aberto ? "close" : "menu"}
            size={29}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 90,
  },

  overlayColor: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "rgba(245, 248, 255, 0.20)",
  },

  container: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 220,
    height: 410,
    alignItems: "flex-end",
    zIndex: 100,
    elevation: 100,
  },

  menuItem: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  itemCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#4C5FD7",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  itemCircleActive: {
    backgroundColor: "#6878EF",
  },

  label: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
    color: "#45436B",
    fontSize: 12,
    fontWeight: "800",
    elevation: 5,
  },

  mainButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#6175F2",
    alignItems: "center",
    justifyContent: "center",
    elevation: 15,
    shadowColor: "#505BC7",
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },

  mainButtonOpen: {
    backgroundColor: "#4C5FD7",
  },
});