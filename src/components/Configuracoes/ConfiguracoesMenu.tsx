import MaterialIcons from "@react-native-vector-icons/material-icons";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Aba =
  | "perfil"
  | "preferencias"
  | "sistema";

type Props = {
  abaAtual: Aba;
  onMudarAba: (aba: Aba) => void;
};

const abas = [
  {
    id: "perfil" as const,
    titulo: "Perfil",
    icone: "person",
  },
  {
    id: "preferencias" as const,
    titulo: "Preferências",
    icone: "palette",
  },
  {
    id: "sistema" as const,
    titulo: "Sistema",
    icone: "settings",
  },
];

export default function ConfiguracoesMenu({
  abaAtual,
  onMudarAba,
}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        {abas.map((aba) => {
          const ativa = abaAtual === aba.id;

          return (
            <Pressable
              key={aba.id}
              style={[
                styles.item,
                ativa && styles.itemAtivo,
              ]}
              onPress={() => onMudarAba(aba.id)}
            >
              <MaterialIcons
                name={aba.icone}
                size={21}
                color={
                  ativa ? "#5F70ED" : "#777A91"
                }
              />

              <Text
                style={[
                  styles.texto,
                  ativa && styles.textoAtivo,
                ]}
              >
                {aba.titulo}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E8F2",
  },

  conteudo: {
    paddingHorizontal: 18,
    gap: 10,
  },

  item: {
    minHeight: 60,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },

  itemAtivo: {
    borderBottomColor: "#6577EE",
  },

  texto: {
    fontSize: 13,
    fontWeight: "700",
    color: "#777A91",
  },

  textoAtivo: {
    color: "#5F70ED",
  },
});