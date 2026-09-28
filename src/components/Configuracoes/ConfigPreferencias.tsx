import { useState } from "react";

import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import MaterialIcons from "@react-native-vector-icons/material-icons";

export default function ConfigPreferencias() {
  const [tema, setTema] = useState("Sistema");

  const [alertas, setAlertas] = useState(true);
  const [analises, setAnalises] = useState(true);
  const [lembretes, setLembretes] = useState(true);
  const [emails, setEmails] = useState(false);

  const [daltonismo, setDaltonismo] =
    useState("Sem filtro");

  const [libras, setLibras] =
    useState("Sem auxílio");

  function salvar() {
    Alert.alert(
      "Preferências salvas",
      "Suas preferências foram atualizadas."
    );
  }

  function selecionarTema() {
    const opcoes = [
      "Claro",
      "Escuro",
      "Alto contraste",
      "Sistema",
    ];

    const atual =
      opcoes.indexOf(tema);

    const proximo =
      opcoes[(atual + 1) % opcoes.length];

    setTema(proximo);
  }

  function selecionarDaltonismo() {
    const opcoes = [
      "Sem filtro",
      "Protanopia",
      "Deuteranopia",
      "Tritanopia",
      "Protanomalia",
      "Deuteranomalia",
      "Acromatopsia",
    ];

    const atual =
      opcoes.indexOf(daltonismo);

    const proximo =
      opcoes[(atual + 1) % opcoes.length];

    setDaltonismo(proximo);
  }

  function selecionarLibras() {
    setLibras(
      libras === "Sem auxílio"
        ? "Com auxílio"
        : "Sem auxílio"
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Preferências
      </Text>

      <Text style={styles.subtitle}>
        Altere ou visualize as configurações
        referentes à aparência, notificações
        e acessibilidade da plataforma SIP.
      </Text>

      {/* APARÊNCIA */}

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <MaterialIcons
              name="palette"
              size={22}
              color="#6575F1"
            />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.cardTitle}>
              Aparência
            </Text>

            <Text style={styles.cardSubtitle}>
              Personalize a aparência do aplicativo.
            </Text>
          </View>
        </View>

        <Text style={styles.label}>
          Tema
        </Text>

        <Pressable
          style={styles.select}
          onPress={selecionarTema}
        >
          <Text style={styles.selectText}>
            {tema}
          </Text>

          <MaterialIcons
            name="keyboard-arrow-down"
            size={23}
            color="#77768B"
          />
        </Pressable>

        <Text style={styles.helper}>
          Toque para alternar entre as opções.
        </Text>
      </View>

      {/* NOTIFICAÇÕES */}

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <MaterialIcons
              name="notifications-none"
              size={22}
              color="#6575F1"
            />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.cardTitle}>
              Notificações
            </Text>

            <Text style={styles.cardSubtitle}>
              Escolha quais notificações deseja receber.
            </Text>
          </View>
        </View>

        <PreferenceSwitch
          title="Alertas de contaminação"
          description="Receber alertas sobre água contaminada."
          value={alertas}
          onChange={setAlertas}
        />

        <PreferenceSwitch
          title="Novas análises"
          description="Receber notificações de novas análises."
          value={analises}
          onChange={setAnalises}
        />

        <PreferenceSwitch
          title="Lembretes do GOLE+"
          description="Receber lembretes relacionados ao consumo de água."
          value={lembretes}
          onChange={setLembretes}
        />

        <PreferenceSwitch
          title="E-mails do sistema"
          description="Receber informações e avisos por e-mail."
          value={emails}
          onChange={setEmails}
        />
      </View>

      {/* ACESSIBILIDADE */}

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <MaterialIcons
              name="accessibility"
              size={22}
              color="#6575F1"
            />
          </View>

          <View style={styles.headerText}>
            <Text style={styles.cardTitle}>
              Acessibilidade
            </Text>

            <Text style={styles.cardSubtitle}>
              Configure recursos de acessibilidade.
            </Text>
          </View>
        </View>

        <Text style={styles.label}>
          Filtro de daltonismo
        </Text>

        <Pressable
          style={styles.select}
          onPress={selecionarDaltonismo}
        >
          <Text style={styles.selectText}>
            {daltonismo}
          </Text>

          <MaterialIcons
            name="keyboard-arrow-down"
            size={23}
            color="#77768B"
          />
        </Pressable>

        <Text style={styles.label}>
          Auxílio de libras
        </Text>

        <Pressable
          style={styles.select}
          onPress={selecionarLibras}
        >
          <Text style={styles.selectText}>
            {libras}
          </Text>

          <MaterialIcons
            name="keyboard-arrow-down"
            size={23}
            color="#77768B"
          />
        </Pressable>
      </View>

      {/* SALVAR */}

      <Pressable
        style={styles.saveButton}
        onPress={salvar}
      >
        <MaterialIcons
          name="check"
          size={21}
          color="#FFFFFF"
        />

        <Text style={styles.saveText}>
          Salvar preferências
        </Text>
      </Pressable>
    </ScrollView>
  );
}

function PreferenceSwitch({
  title,
  description,
  value,
  onChange,
}: {
  title: string;
  description: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.preference}>
      <View style={styles.preferenceText}>
        <Text style={styles.preferenceTitle}>
          {title}
        </Text>

        <Text style={styles.preferenceDescription}>
          {description}
        </Text>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: "#D9DCE8",
          true: "#B8C1FF",
        }}
        thumbColor={
          value ? "#6575F1" : "#FFFFFF"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FAFF",
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 27,
    fontWeight: "900",
    color: "#29264E",
  },

  subtitle: {
    marginTop: 7,
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 20,
    color: "#77768B",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 20,
    marginBottom: 18,
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  icon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#EEF0FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  headerText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#29264E",
  },

  cardSubtitle: {
    marginTop: 3,
    fontSize: 11,
    color: "#88879D",
  },

  label: {
    marginBottom: 8,
    marginTop: 4,
    fontSize: 13,
    fontWeight: "800",
    color: "#45436B",
  },

  select: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D9DCE8",
    borderRadius: 15,
    backgroundColor: "#F9FAFC",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  selectText: {
    fontSize: 14,
    color: "#29264E",
    fontWeight: "600",
  },

  helper: {
    fontSize: 11,
    color: "#9998AA",
    marginBottom: 5,
  },

  preference: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EFF0F5",
  },

  preferenceText: {
    flex: 1,
    paddingRight: 10,
  },

  preferenceTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#29264E",
  },

  preferenceDescription: {
    fontSize: 11,
    lineHeight: 16,
    color: "#88879D",
    marginTop: 3,
  },

  saveButton: {
    height: 54,
    borderRadius: 17,
    backgroundColor: "#6575F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});