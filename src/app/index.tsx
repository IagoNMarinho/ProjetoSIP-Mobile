import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import MaterialIcons from "@react-native-vector-icons/material-icons";

import { useAutenticacao } from "@/hooks/useAutenticacao";

export default function Login() {
 const estadoTipo = useState<"usuario" | "instituicao">("usuario");
console.log("useState retornou:", typeof estadoTipo, Array.isArray(estadoTipo));
const [tipo, setTipo] = estadoTipo;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const [carregando, setCarregando] = useState(false);

  const { validarUsuario, logarContexto } = useAutenticacao();

  async function entrar() {
    let valido = true;

    setErroEmail("");
    setErroSenha("");

    if (!email.trim()) {
      setErroEmail("Digite seu e-mail.");
      valido = false;
    }

    if (!senha.trim()) {
      setErroSenha("Digite sua senha.");
      valido = false;
    } else if (senha.length < 8) {
      setErroSenha(
        "A senha deve possuir pelo menos 8 caracteres."
      );
      valido = false;
    }

    if (!valido) {
      return;
    }

    try {
      setCarregando(true);

      // Cria a autenticação do usuário (Authentication)
      const retorno = await validarUsuario(email.trim(), senha, tipo);

      if (retorno === "sucesso") {
        // Salva usuário logado
        await logarContexto({ email: email.trim(), tipo });

        router.replace("/onboarding");
      } else {
        Alert.alert(
          "Falha de autenticação",
          retorno,
          [{ text: "OK" }],
          { cancelable: false } // Impede fechar tocando fora (Apenas Android)
        );
      }
    } catch (error) {
      console.error(
        "Erro ao realizar login:",
        error
      );

      Alert.alert(
        "Erro",
        "Não foi possível realizar o login."
      );
    } finally {
      setCarregando(false);
    }
  }

  function cadastrar() {
    router.push("/cadastro");
  }

  function esqueciSenha() {
    Alert.alert(
      "Recuperar senha",
      "A recuperação de senha será implementada posteriormente."
    );
  }

  function loginGoogle() {
    Alert.alert(
      "Google",
      "O login com Google será conectado posteriormente."
    );
  }

  return (
    <LinearGradient
      colors={[
        "#DDF8F8",
        "#B8EDEF",
        "#8ED8E5",
        "#72C9DF",
      ]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior={
            Platform.OS === "ios"
              ? "padding"
              : undefined
          }
        >
          <ScrollView
            contentContainerStyle={
              styles.scrollContent
            }
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.logoArea}>
              <View style={styles.logoCircle}>
                <MaterialIcons
                  name="water-drop"
                  size={80}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.logoText}>
                Gole+
              </Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.title}>
                LOGIN
              </Text>

              <Text style={styles.subtitle}>
                Entre para continuar
              </Text>

              <View style={styles.tipoContainer}>
                <Pressable
                  style={[
                    styles.tipoButton,
                    tipo === "usuario" &&
                      styles.tipoButtonActive,
                  ]}
                  onPress={() =>
                    setTipo("usuario")
                  }
                >
                  <MaterialIcons
                    name="person"
                    size={22}
                    color={
                      tipo === "usuario"
                        ? "#FFFFFF"
                        : "#526BDB"
                    }
                  />

                  <Text
                    style={[
                      styles.tipoText,
                      tipo === "usuario" &&
                        styles.tipoTextActive,
                    ]}
                  >
                    Usuário
                  </Text>
                </Pressable>

                <Pressable
                  style={[
                    styles.tipoButton,
                    tipo === "instituicao" &&
                      styles.tipoButtonActive,
                  ]}
                  onPress={() =>
                    setTipo("instituicao")
                  }
                >
                  <MaterialIcons
                    name="school"
                    size={22}
                    color={
                      tipo === "instituicao"
                        ? "#FFFFFF"
                        : "#526BDB"
                    }
                  />

                  <Text
                    style={[
                      styles.tipoText,
                      tipo === "instituicao" &&
                        styles.tipoTextActive,
                    ]}
                  >
                    Instituição
                  </Text>
                </Pressable>
              </View>

              <View>
                <View
                  style={[
                    styles.inputContainer,
                    erroEmail &&
                      styles.inputContainerError,
                  ]}
                >
                  <MaterialIcons
                    name="email"
                    size={21}
                    color={
                      erroEmail
                        ? "#D90429"
                        : "#747495"
                    }
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#9292A9"
                    value={email}
                    onChangeText={(texto) => {
                      setEmail(texto);

                      if (erroEmail) {
                        setErroEmail("");
                      }
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                {erroEmail ? (
                  <Text style={styles.errorText}>
                    {erroEmail}
                  </Text>
                ) : null}
              </View>

              <View>
                <View
                  style={[
                    styles.inputContainer,
                    erroSenha &&
                      styles.inputContainerError,
                  ]}
                >
                  <MaterialIcons
                    name="lock"
                    size={21}
                    color={
                      erroSenha
                        ? "#D90429"
                        : "#747495"
                    }
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#9292A9"
                    value={senha}
                    onChangeText={(texto) => {
                      setSenha(texto);

                      if (erroSenha) {
                        setErroSenha("");
                      }
                    }}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                </View>

                {erroSenha ? (
                  <Text style={styles.errorText}>
                    {erroSenha}
                  </Text>
                ) : null}
              </View>

              <Pressable
                style={styles.forgotContainer}
                onPress={esqueciSenha}
              >
                <Text style={styles.forgotText}>
                  Esqueceu a senha?
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.loginButton,
                  carregando &&
                    styles.loginButtonDisabled,
                ]}
                onPress={entrar}
                disabled={carregando}
              >
                <Text style={styles.loginButtonText}>
                  {carregando
                    ? "Entrando..."
                    : "Entrar"}
                </Text>

                {!carregando && (
                  <MaterialIcons
                    name="arrow-forward"
                    size={22}
                    color="#FFFFFF"
                  />
                )}
              </Pressable>

              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                  Não possui login?
                </Text>

                <Pressable onPress={cadastrar}>
                  <Text style={styles.registerLink}>
                    Cadastre-se!
                  </Text>
                </Pressable>
              </View>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />

                <Text style={styles.dividerText}>
                  ou
                </Text>

                <View style={styles.divider} />
              </View>

              <Pressable
                style={styles.googleButton}
                onPress={loginGoogle}
              >
                <Text style={styles.googleG}>
                  G
                </Text>

                <Text style={styles.googleText}>
                  Continuar com Google
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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

  keyboard: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    paddingVertical: 30,
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 25,
  },

  logoCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "rgba(82, 160, 210, 0.75)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#287FA5",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },

  logoText: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  formContainer: {
    width: "100%",
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    paddingHorizontal: 22,
    paddingVertical: 28,
    elevation: 8,
    shadowColor: "#287FA5",
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 7,
    },
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "900",
    color: "#29264E",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#77768B",
    marginTop: 5,
    marginBottom: 22,
  },

  tipoContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },

  tipoButton: {
    flex: 1,
    height: 52,
    borderRadius: 18,
    backgroundColor: "#E9F0FA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  tipoButtonActive: {
    backgroundColor: "#6375E8",
  },

  tipoText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#526BDB",
  },

  tipoTextActive: {
    color: "#FFFFFF",
  },

  inputContainer: {
    height: 57,
    borderRadius: 18,
    backgroundColor: "#F4F6FA",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  inputContainerError: {
    borderWidth: 1,
    borderColor: "#D90429",
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    color: "#29264E",
    fontSize: 15,
  },

  errorText: {
    color: "#D90429",
    fontSize: 12,
    fontWeight: "600",
    marginTop: -6,
    marginBottom: 10,
    marginLeft: 6,
  },

  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  forgotText: {
    color: "#596AD7",
    fontSize: 13,
    fontWeight: "700",
  },

  loginButton: {
    height: 57,
    borderRadius: 29,
    backgroundColor: "#6375E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    elevation: 4,
  },

  loginButtonDisabled: {
    opacity: 0.6,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
    gap: 5,
  },

  registerText: {
    color: "#77768B",
    fontSize: 13,
  },

  registerLink: {
    color: "#596AD7",
    fontSize: 13,
    fontWeight: "800",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    gap: 10,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D8D9E3",
  },

  dividerText: {
    color: "#9292A9",
    fontSize: 13,
  },

  googleButton: {
    height: 54,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E1E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  googleG: {
    fontSize: 21,
    fontWeight: "900",
    color: "#4285F4",
  },

  googleText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4E4D67",
  },
});