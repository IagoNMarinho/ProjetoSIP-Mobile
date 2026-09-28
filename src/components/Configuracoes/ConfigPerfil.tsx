import { useState } from "react";

import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import MaterialIcons from "@react-native-vector-icons/material-icons";

export default function ConfigPerfil() {
  const [editando, setEditando] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] =
    useState("");

  function salvarDados() {
    if (nome.trim().length === 0) {
      Alert.alert(
        "Atenção",
        "Informe seu nome."
      );
      return;
    }

    Alert.alert(
      "Dados salvos",
      "As informações do perfil foram atualizadas."
    );

    setEditando(false);
  }

  function alterarFoto() {
    Alert.alert(
      "Foto de perfil",
      "A alteração da foto será adicionada posteriormente."
    );
  }

  function sairDaConta() {
    Alert.alert(
      "Sair da conta",
      "Deseja realmente sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
        },
      ]
    );
  }

  function trocarConta() {
    Alert.alert(
      "Trocar conta",
      "A troca de conta será adicionada posteriormente."
    );
  }

  function excluirConta() {
    Alert.alert(
      "Excluir conta",
      "A exclusão da conta será adicionada posteriormente.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          style: "destructive",
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
      {/* TÍTULO */}

      <View style={styles.intro}>
        <Text style={styles.title}>
          Configuração de perfil
        </Text>

        <Text style={styles.subtitle}>
          Altere ou visualize as informações
          de seu perfil na plataforma SIP.
        </Text>
      </View>

      {/* PERFIL */}

      <View style={styles.profileCard}>
        <View style={styles.profileCircle}>
          <MaterialIcons
            name="person"
            size={55}
            color="#6575F1"
          />
        </View>

        <Text style={styles.profileName}>
          Seu perfil
        </Text>

        <Text style={styles.profileDescription}>
          Configure as informações da sua conta.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.photoButton,
            pressed && styles.pressed,
          ]}
          onPress={alterarFoto}
        >
          <MaterialIcons
            name="edit"
            size={18}
            color="#6575F1"
          />

          <Text style={styles.photoButtonText}>
            Alterar foto
          </Text>
        </Pressable>
      </View>

      {/* INFORMAÇÕES */}

      <View style={styles.card}>
        <View style={styles.headerSection}>
          <View style={styles.headerIcon}>
            <MaterialIcons
              name="person-outline"
              size={22}
              color="#6575F1"
            />
          </View>

          <View style={styles.headerTexts}>
            <Text style={styles.sectionTitle}>
              Informações pessoais
            </Text>

            <Text style={styles.sectionDescription}>
              Seus dados cadastrados na plataforma.
            </Text>
          </View>
        </View>

        {/* NOME */}

        <View style={styles.field}>
          <Text style={styles.label}>
            Nome
          </Text>

          <TextInput
            value={nome}
            onChangeText={setNome}
            editable={editando}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#9998AA"
            style={[
              styles.input,
              !editando &&
                styles.inputDisabled,
            ]}
          />
        </View>

        {/* EMAIL */}

        <View style={styles.field}>
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            editable={editando}
            placeholder="Digite seu email"
            placeholderTextColor="#9998AA"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[
              styles.input,
              !editando &&
                styles.inputDisabled,
            ]}
          />
        </View>

        {/* TELEFONE */}

        <View style={styles.field}>
          <Text style={styles.label}>
            Telefone
          </Text>

          <TextInput
            value={telefone}
            onChangeText={setTelefone}
            editable={editando}
            placeholder="Digite seu telefone"
            placeholderTextColor="#9998AA"
            keyboardType="phone-pad"
            style={[
              styles.input,
              !editando &&
                styles.inputDisabled,
            ]}
          />
        </View>

        {/* CPF */}

        <View style={styles.field}>
          <Text style={styles.label}>
            CPF
          </Text>

          <TextInput
            value={cpf}
            onChangeText={setCpf}
            editable={editando}
            placeholder="Digite seu CPF"
            placeholderTextColor="#9998AA"
            keyboardType="numeric"
            style={[
              styles.input,
              !editando &&
                styles.inputDisabled,
            ]}
          />
        </View>

        {/* DATA */}

        <View style={styles.field}>
          <Text style={styles.label}>
            Data de nascimento
          </Text>

          <TextInput
            value={dataNascimento}
            onChangeText={setDataNascimento}
            editable={editando}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#9998AA"
            keyboardType="numeric"
            style={[
              styles.input,
              !editando &&
                styles.inputDisabled,
            ]}
          />
        </View>

        {/* EDITAR */}

        {!editando && (
          <Pressable
            style={({ pressed }) => [
              styles.mainButton,
              pressed && styles.pressed,
            ]}
            onPress={() =>
              setEditando(true)
            }
          >
            <MaterialIcons
              name="edit"
              size={21}
              color="#FFFFFF"
            />

            <Text style={styles.mainButtonText}>
              Fazer alterações
            </Text>
          </Pressable>
        )}

        {/* SALVAR / CANCELAR */}

        {editando && (
          <View style={styles.actions}>
            <Pressable
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && styles.pressed,
              ]}
              onPress={() =>
                setEditando(false)
              }
            >
              <Text
                style={styles.cancelButtonText}
              >
                Cancelar
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.mainButton,
                styles.saveButton,
                pressed && styles.pressed,
              ]}
              onPress={salvarDados}
            >
              <MaterialIcons
                name="check"
                size={21}
                color="#FFFFFF"
              />

              <Text style={styles.mainButtonText}>
                Salvar dados
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* SESSÃO */}

      <View style={styles.card}>
        <View style={styles.headerSection}>
          <View style={styles.headerIcon}>
            <MaterialIcons
              name="security"
              size={22}
              color="#6575F1"
            />
          </View>

          <View style={styles.headerTexts}>
            <Text style={styles.sectionTitle}>
              Sessão
            </Text>

            <Text style={styles.sectionDescription}>
              Gerencie o acesso à sua conta.
            </Text>
          </View>
        </View>

        {/* SAIR */}

        <Pressable
          style={({ pressed }) => [
            styles.sessionItem,
            pressed && styles.pressed,
          ]}
          onPress={sairDaConta}
        >
          <View style={styles.sessionIcon}>
            <MaterialIcons
              name="logout"
              size={21}
              color="#6575F1"
            />
          </View>

          <View style={styles.sessionTexts}>
            <Text style={styles.sessionTitle}>
              Sair da conta
            </Text>

            <Text style={styles.sessionDescription}>
              Encerrar sua sessão atual.
            </Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={25}
            color="#9998AA"
          />
        </Pressable>

        {/* TROCAR CONTA */}

        <Pressable
          style={({ pressed }) => [
            styles.sessionItem,
            pressed && styles.pressed,
          ]}
          onPress={trocarConta}
        >
          <View style={styles.sessionIcon}>
            <MaterialIcons
              name="switch-account"
              size={21}
              color="#6575F1"
            />
          </View>

          <View style={styles.sessionTexts}>
            <Text style={styles.sessionTitle}>
              Trocar conta
            </Text>

            <Text style={styles.sessionDescription}>
              Entrar utilizando outra conta.
            </Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={25}
            color="#9998AA"
          />
        </Pressable>

        {/* EXCLUIR */}

        <Pressable
          style={({ pressed }) => [
            styles.sessionItem,
            styles.deleteItem,
            pressed && styles.pressed,
          ]}
          onPress={excluirConta}
        >
          <View
            style={[
              styles.sessionIcon,
              styles.deleteIcon,
            ]}
          >
            <MaterialIcons
              name="delete-outline"
              size={21}
              color="#D85F70"
            />
          </View>

          <View style={styles.sessionTexts}>
            <Text
              style={[
                styles.sessionTitle,
                styles.deleteTitle,
              ]}
            >
              Excluir conta
            </Text>

            <Text style={styles.sessionDescription}>
              Excluir permanentemente sua conta.
            </Text>
          </View>

          <MaterialIcons
            name="chevron-right"
            size={25}
            color="#D85F70"
          />
        </Pressable>
      </View>
    </ScrollView>
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

  intro: {
    marginBottom: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: "900",
    color: "#29264E",
  },

  subtitle: {
    marginTop: 7,
    fontSize: 14,
    lineHeight: 20,
    color: "#77768B",
  },

  /*
   * PERFIL
   */

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 24,
    alignItems: "center",
    marginBottom: 18,
    elevation: 3,
  },

  profileCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#E9EDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  profileName: {
    fontSize: 19,
    fontWeight: "900",
    color: "#29264E",
    marginTop: 12,
  },

  profileDescription: {
    fontSize: 12,
    color: "#88879D",
    marginTop: 4,
  },

  photoButton: {
    height: 43,
    paddingHorizontal: 18,
    borderRadius: 22,
    backgroundColor: "#EEF0FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 15,
  },

  photoButtonText: {
    color: "#6575F1",
    fontSize: 13,
    fontWeight: "800",
  },

  /*
   * CARD
   */

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 20,
    marginBottom: 18,
    elevation: 3,
  },

  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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

  headerTexts: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#29264E",
  },

  sectionDescription: {
    fontSize: 11,
    color: "#88879D",
    marginTop: 3,
  },

  /*
   * CAMPOS
   */

  field: {
    marginBottom: 15,
  },

  label: {
    fontSize: 13,
    fontWeight: "800",
    color: "#45436B",
    marginBottom: 7,
  },

  input: {
    height: 52,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D9DCE8",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#29264E",
  },

  inputDisabled: {
    backgroundColor: "#F4F5F9",
    color: "#77768B",
  },

  /*
   * BOTÕES
   */

  mainButton: {
    height: 52,
    borderRadius: 17,
    backgroundColor: "#6575F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 5,
    flex: 1,
  },

  mainButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
  },

  cancelButton: {
    height: 52,
    flex: 0.8,
    borderRadius: 17,
    backgroundColor: "#EEF0F7",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButtonText: {
    color: "#5E5D78",
    fontSize: 14,
    fontWeight: "800",
  },

  saveButton: {
    flex: 1.2,
    marginTop: 0,
  },

  pressed: {
    opacity: 0.8,
    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  /*
   * SESSÃO
   */

  sessionItem: {
    minHeight: 70,
    borderRadius: 17,
    backgroundColor: "#F8F9FC",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  sessionIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEF0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  sessionTexts: {
    flex: 1,
    marginLeft: 11,
  },

  sessionTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#29264E",
  },

  sessionDescription: {
    fontSize: 11,
    color: "#88879D",
    marginTop: 3,
  },

  deleteItem: {
    backgroundColor: "#FFF5F6",
  },

  deleteIcon: {
    backgroundColor: "#FFE7EA",
  },

  deleteTitle: {
    color: "#D85F70",
  },
});