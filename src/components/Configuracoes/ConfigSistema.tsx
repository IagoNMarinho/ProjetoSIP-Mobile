import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import MaterialIcons from "@react-native-vector-icons/material-icons";

const SESSION_KEY = "@gole_sessao";

export default function ConfigSistema() {
  function acao(nome: string) {
    Alert.alert(
      nome,
      "Esta função será conectada ao sistema posteriormente."
    );
  }

  async function sairDaConta() {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja sair da conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            try {
              // Remove a sessão local
              await AsyncStorage.removeItem(SESSION_KEY);

              // Remove também possíveis dados de sessão antigos
              await AsyncStorage.removeItem("@gole_usuario");
              await AsyncStorage.removeItem("@gole_logado");

              // Volta para a tela inicial
              router.replace("/");
            } catch (error) {
              console.error("Erro ao sair da conta:", error);

              Alert.alert(
                "Erro",
                "Não foi possível sair da conta. Tente novamente."
              );
            }
          },
        },
      ]
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Sistema
      </Text>

      <Text style={styles.subtitle}>
        Gerencie as configurações relacionadas ao
        funcionamento da plataforma SIP.
      </Text>

      {/* MONITORAMENTO */}

      <View style={styles.card}>
        <Header
          icon="monitor"
          title="Monitoramento"
          description="Configure o funcionamento do monitoramento."
        />

        <SystemItem
          icon="update"
          title="Frequência de atualização"
          description="Automático"
          onPress={() =>
            acao("Frequência de atualização")
          }
        />

        <SystemItem
          icon="warning"
          title="Alertas de água contaminada"
          description="Configurar alertas de contaminação"
          onPress={() =>
            acao("Alertas de água contaminada")
          }
        />

        <SystemItem
          icon="group"
          title="Responsáveis por receber alertas"
          description="Configurar responsáveis"
          onPress={() =>
            acao("Responsáveis por receber alertas")
          }
        />

        <SystemItem
          icon="tune"
          title="Limites para alertas"
          description="Configurar limites"
          onPress={() =>
            acao("Limites para alertas")
          }
        />
      </View>

      {/* DISPOSITIVOS */}

      <View style={styles.card}>
        <Header
          icon="memory"
          title="Dispositivos"
          description="Gerencie sensores e dispositivos."
        />

        <SystemItem
          icon="settings-input-component"
          title="Gerenciar sensores e dispositivos"
          description="Gerenciar"
          onPress={() =>
            acao("Gerenciar sensores e dispositivos")
          }
        />

        <SystemItem
          icon="sensors"
          title="Status dos dispositivos"
          description="Visualizar"
          onPress={() =>
            acao("Status dos dispositivos")
          }
        />

        <SystemItem
          icon="sync"
          title="Testar comunicação"
          description="Verificar conexão"
          onPress={() =>
            acao("Testar comunicação")
          }
        />
      </View>

      {/* EQUIPE */}

      <View style={styles.card}>
        <Header
          icon="groups"
          title="Equipe"
          description="Gerencie os membros da equipe."
        />

        <SystemItem
          icon="manage-accounts"
          title="Gerenciar equipe"
          description="Administrar membros"
          onPress={() =>
            acao("Gerenciar equipe")
          }
        />
      </View>

      {/* SOBRE */}

      <View style={styles.card}>
        <Header
          icon="info-outline"
          title="Sobre"
          description="Informações da plataforma."
        />

        <InfoRow
          title="Versão"
          value="v1.0.0"
        />

        <InfoRow
          title="Equipe de desenvolvimento"
          value="Equipe SIP"
        />

        <SystemItem
          icon="support-agent"
          title="Contato para suporte"
          description="Fale conosco"
          onPress={() =>
            acao("Contato para suporte")
          }
        />

        <SystemItem
          icon="help-outline"
          title="FAQ"
          description="Perguntas frequentes"
          onPress={() =>
            acao("FAQ")
          }
        />
      </View>

      {/* DADOS */}

      <View style={styles.card}>
        <Header
          icon="storage"
          title="Dados"
          description="Gerencie os dados da plataforma."
        />

        <SystemItem
          icon="history"
          title="Histórico das análises"
          description="Baixar histórico"
          onPress={() =>
            acao("Histórico das análises")
          }
        />

        <SystemItem
          icon="picture-as-pdf"
          title="Exportar PDF"
          description="Exportar dados em PDF"
          onPress={() =>
            acao("Exportar PDF")
          }
        />

        <SystemItem
          icon="table-view"
          title="Exportar CSV"
          description="Exportar dados em CSV"
          onPress={() =>
            acao("Exportar CSV")
          }
        />

        <SystemItem
          icon="delete-sweep"
          title="Limpar cache"
          description="Limpar dados temporários"
          onPress={() =>
            acao("Limpar cache")
          }
          danger
        />
      </View>

      {/* CONTA */}

      <View style={styles.card}>
        <Header
          icon="account-circle"
          title="Conta"
          description="Gerencie sua sessão."
        />

        <SystemItem
          icon="logout"
          title="Sair da conta"
          description="Encerrar sessão neste dispositivo"
          onPress={sairDaConta}
          danger
        />
      </View>
    </ScrollView>
  );
}

function Header({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <MaterialIcons
          name={icon as any}
          size={22}
          color="#6575F1"
        />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.cardTitle}>
          {title}
        </Text>

        <Text style={styles.cardDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

function SystemItem({
  icon,
  title,
  description,
  onPress,
  danger = false,
}: {
  icon: string;
  title: string;
  description: string;
  onPress: () => void;
  danger?: boolean;
}) {
  return (
    <Pressable
      style={[
        styles.systemItem,
        danger && styles.dangerItem,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.itemIcon,
          danger && styles.dangerIcon,
        ]}
      >
        <MaterialIcons
          name={icon as any}
          size={21}
          color={danger ? "#D85F70" : "#6575F1"}
        />
      </View>

      <View style={styles.itemText}>
        <Text
          style={[
            styles.itemTitle,
            danger && styles.dangerTitle,
          ]}
        >
          {title}
        </Text>

        <Text style={styles.itemDescription}>
          {description}
        </Text>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={24}
        color={danger ? "#D85F70" : "#9998AA"}
      />
    </Pressable>
  );
}

function InfoRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
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
    marginBottom: 15,
  },

  headerIcon: {
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

  cardDescription: {
    marginTop: 3,
    fontSize: 11,
    color: "#88879D",
  },

  systemItem: {
    minHeight: 70,
    borderRadius: 17,
    backgroundColor: "#F8F9FC",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  itemIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEF0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  itemText: {
    flex: 1,
    marginLeft: 11,
  },

  itemTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#29264E",
  },

  itemDescription: {
    marginTop: 3,
    fontSize: 11,
    color: "#88879D",
  },

  infoRow: {
    minHeight: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#EFF0F5",
  },

  infoTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#45436B",
  },

  infoValue: {
    fontSize: 13,
    color: "#77768B",
  },

  dangerItem: {
    backgroundColor: "#FFF5F6",
  },

  dangerIcon: {
    backgroundColor: "#FFE7EA",
  },

  dangerTitle: {
    color: "#D85F70",
  },
});