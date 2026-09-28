import { useState } from "react";

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import MaterialIcons from "@react-native-vector-icons/material-icons";

import ConfigPerfil from "../../components/Configuracoes/ConfigPerfil";
import ConfigPreferencias from "../../components/Configuracoes/ConfigPreferencias";
import ConfigSistema from "../../components/Configuracoes/ConfigSistema";

import { Cores } from "../../constants/Global";
import { Fontes } from "../../constants/Fontes";
import { Gradientes } from "../../constants/Gradientes";

type Aba =
  | "perfil"
  | "preferencias"
  | "sistema";

export default function Configuracoes() {
  const [aba, setAba] =
    useState<Aba>("perfil");

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={Gradientes.principal}
        style={styles.background}
      >
        <View style={styles.top}>
          <Text style={styles.title}>
            Configurações
          </Text>

          <Text style={styles.subtitle}>
            Personalize sua experiência no SIP.
          </Text>
        </View>

        <View style={styles.menu}>
          <TabButton
            icon="person"
            label="Perfil"
            active={aba === "perfil"}
            onPress={() => setAba("perfil")}
          />

          <TabButton
            icon="palette"
            label="Preferências"
            active={aba === "preferencias"}
            onPress={() =>
              setAba("preferencias")
            }
          />

          <TabButton
            icon="settings"
            label="Sistema"
            active={aba === "sistema"}
            onPress={() => setAba("sistema")}
          />
        </View>

        <View style={styles.content}>
          {aba === "perfil" && (
            <ConfigPerfil />
          )}

          {aba === "preferencias" && (
            <ConfigPreferencias />
          )}

          {aba === "sistema" && (
            <ConfigSistema />
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

function TabButton({
  icon,
  label,
  active,
  onPress,
}: {
  icon: string;
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={[
        styles.tab,
        active && styles.tabActive,
      ]}
      onPress={onPress}
    >
      <MaterialIcons
        name={icon as any}
        size={21}
        color={
          active
            ? Cores.primariaEscura
            : Cores.textoSecundario
        }
      />

      <Text
        style={[
          styles.tabText,
          active && styles.tabTextActive,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  top: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
  },

  title: {
    fontFamily: Fontes.titulo,
    fontSize: 25,
    color: Cores.secundariaEscura,
  },

  subtitle: {
    marginTop: 5,
    fontFamily: Fontes.base,
    fontSize: 13,
    color: Cores.primariaEscura,
  },

  menu: {
    marginHorizontal: 15,
    padding: 5,
    borderRadius: 22,
    backgroundColor:
      Cores.fundoTransparente4,
    flexDirection: "row",

    elevation: 4,
    shadowColor: Cores.primariaEscura,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  tab: {
    flex: 1,
    minHeight: 52,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },

  tabActive: {
    backgroundColor:
      Cores.secundariaClara,
  },

  tabText: {
    fontFamily: Fontes.base,
    fontSize: 11,
    fontWeight: "600",
    color: Cores.textoSecundario,
  },

  tabTextActive: {
    color: Cores.secundariaEscura,
    fontWeight: "800",
  },

  content: {
    flex: 1,
    marginTop: 10,
  },
});