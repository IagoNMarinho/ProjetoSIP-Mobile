import { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import MaterialIcons from "@react-native-vector-icons/material-icons";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

type TipoCadastro = "usuario" | "instituicao";

type Cadastro = {
  nome: string;
  dataNascimento: string;
  username: string;
  cpf: string;
  cnpj: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
  codigoAcesso: string;
};

type ErrosCadastro = Partial<
  Record<keyof Cadastro, string>
>;

export default function Cadastro() {
  const [tipoCadastro, setTipoCadastro] =
    useState<TipoCadastro>("usuario");

  const [cadastro, setCadastro] = useState<Cadastro>({
    nome: "",
    dataNascimento: "",
    username: "",
    cpf: "",
    cnpj: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    codigoAcesso: "",
  });

  const [erros, setErros] =
    useState<ErrosCadastro>({});

  const [mostrarSenha, setMostrarSenha] =
    useState(false);

  const [
    mostrarConfirmarSenha,
    setMostrarConfirmarSenha,
  ] = useState(false);

  const [mostrarCodigo, setMostrarCodigo] =
    useState(false);

  function atualizarCampo(
    campo: keyof Cadastro,
    valor: string
  ) {
    setCadastro((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));

    if (erros[campo]) {
      setErros((estadoAnterior) => {
        const novosErros = {
          ...estadoAnterior,
        };

        delete novosErros[campo];

        return novosErros;
      });
    }
  }

  function trocarTipo(tipo: TipoCadastro) {
    setTipoCadastro(tipo);

    setCadastro((estadoAnterior) => ({
      ...estadoAnterior,
      dataNascimento:
        tipo === "instituicao"
          ? ""
          : estadoAnterior.dataNascimento,
      cpf:
        tipo === "instituicao"
          ? ""
          : estadoAnterior.cpf,
      cnpj:
        tipo === "usuario"
          ? ""
          : estadoAnterior.cnpj,
    }));

    setErros({});
  }

  function formatarCPF(valor: string) {
    const numeros = valor.replace(/\D/g, "");

    return numeros
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function formatarCNPJ(valor: string) {
    const numeros = valor.replace(/\D/g, "");

    return numeros
      .slice(0, 14)
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }

  function formatarTelefone(valor: string) {
    const numeros = valor.replace(/\D/g, "");

    if (numeros.length <= 10) {
      return numeros
        .slice(0, 10)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return numeros
      .slice(0, 11)
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  function formatarData(valor: string) {
    const numeros = valor.replace(/\D/g, "");

    return numeros
      .slice(0, 8)
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2");
  }

  function validar() {
    const novosErros: ErrosCadastro = {};

    const nome = cadastro.nome.trim();
    const dataNascimento =
      cadastro.dataNascimento.trim();
    const username = cadastro.username.trim();
    const cpf = cadastro.cpf.replace(/\D/g, "");
    const cnpj = cadastro.cnpj.replace(/\D/g, "");
    const email = cadastro.email.trim();
    const telefone =
      cadastro.telefone.replace(/\D/g, "");
    const senha = cadastro.senha;
    const confirmarSenha = cadastro.confirmarSenha;

    if (!nome) {
      novosErros.nome =
        tipoCadastro === "usuario"
          ? "Digite seu nome completo."
          : "Digite o nome da instituição.";
    }

    if (
      tipoCadastro === "usuario" &&
      !dataNascimento
    ) {
      novosErros.dataNascimento =
        "Digite sua data de nascimento.";
    }

    if (!username) {
      novosErros.username =
        "Digite um username.";
    }

    if (tipoCadastro === "usuario") {
      if (!cpf) {
        novosErros.cpf = "Digite seu CPF.";
      } else if (cpf.length !== 11) {
        novosErros.cpf =
          "Digite um CPF válido.";
      }
    }

    if (tipoCadastro === "instituicao") {
      if (!cnpj) {
        novosErros.cnpj = "Digite o CNPJ.";
      } else if (cnpj.length !== 14) {
        novosErros.cnpj =
          "Digite um CNPJ válido.";
      }
    }

    if (!email) {
      novosErros.email =
        "Digite seu e-mail.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      novosErros.email =
        "Digite um e-mail válido.";
    }

    if (!telefone) {
      novosErros.telefone =
        "Digite seu telefone.";
    } else if (telefone.length < 10) {
      novosErros.telefone =
        "Digite um telefone válido.";
    }

    if (!senha) {
      novosErros.senha =
        "Digite uma senha.";
    } else if (senha.length < 8) {
      novosErros.senha =
        "A senha deve possuir pelo menos 8 caracteres.";
    }

    if (!confirmarSenha) {
      novosErros.confirmarSenha =
        "Confirme sua senha.";
    } else if (senha !== confirmarSenha) {
      novosErros.confirmarSenha =
        "As senhas não coincidem.";
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  function cadastrar() {
    if (!validar()) {
      return;
    }

    router.back();
  }

  function campoComErro(
    campo: keyof Cadastro
  ) {
    return Boolean(erros[campo]);
  }

  return (
    <LinearGradient
      colors={[
        Cores.secundariaEscura,
        Cores.primariaEscura,
        Cores.primariaBase,
      ]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={styles.fundo}
    >
      <SafeAreaView style={styles.areaSegura}>
        <KeyboardAvoidingView
          style={styles.teclado}
          behavior={
            Platform.OS === "ios"
              ? "padding"
              : undefined
          }
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.cabecalho}>
              <Pressable
                onPress={() => router.back()}
                style={({ pressed }) => [
                  styles.botaoVoltar,
                  pressed &&
                    styles.pressionado,
                ]}
              >
                <MaterialIcons
                  name="arrow-back"
                  size={24}
                  color={Cores.branco}
                />
              </Pressable>

              <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>
                  CADASTRO
                </Text>

                <Text style={styles.subtitulo}>
                  Crie sua conta no Gole+
                </Text>
              </View>
            </View>

            <View style={styles.formulario}>
              <Text style={styles.tituloSecao}>
                Você é:
              </Text>

              <View style={styles.tipoContainer}>
                <Pressable
                  onPress={() =>
                    trocarTipo("usuario")
                  }
                  style={({ pressed }) => [
                    styles.tipoBotao,
                    tipoCadastro === "usuario" &&
                      styles.tipoBotaoAtivo,
                    pressed &&
                      styles.pressionado,
                  ]}
                >
                  <MaterialIcons
                    name="person"
                    size={26}
                    color={
                      tipoCadastro === "usuario"
                        ? Cores.branco
                        : Cores.primariaEscura
                    }
                  />

                  <Text
                    style={[
                      styles.tipoTexto,
                      tipoCadastro === "usuario" &&
                        styles.tipoTextoAtivo,
                    ]}
                  >
                    Usuário
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() =>
                    trocarTipo("instituicao")
                  }
                  style={({ pressed }) => [
                    styles.tipoBotao,
                    tipoCadastro ===
                      "instituicao" &&
                      styles.tipoBotaoAtivo,
                    pressed &&
                      styles.pressionado,
                  ]}
                >
                  <MaterialIcons
                    name="business"
                    size={26}
                    color={
                      tipoCadastro ===
                      "instituicao"
                        ? Cores.branco
                        : Cores.primariaEscura
                    }
                  />

                  <Text
                    style={[
                      styles.tipoTexto,
                      tipoCadastro ===
                        "instituicao" &&
                        styles.tipoTextoAtivo,
                    ]}
                  >
                    Instituição
                  </Text>
                </Pressable>
              </View>

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  {tipoCadastro === "usuario"
                    ? "Nome completo"
                    : "Nome da instituição"}
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro("nome") &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name={
                      tipoCadastro === "usuario"
                        ? "person-outline"
                        : "business"
                    }
                    size={21}
                    color={
                      campoComErro("nome")
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  <TextInput
                    style={styles.campoComIcone}
                    placeholder={
                      tipoCadastro === "usuario"
                        ? "Digite seu nome completo"
                        : "Digite o nome da instituição"
                    }
                    placeholderTextColor={
                      Cores.textoSuave
                    }
                    value={cadastro.nome}
                    onChangeText={(valor) =>
                      atualizarCampo(
                        "nome",
                        valor
                      )
                    }
                  />
                </View>

                {erros.nome && (
                  <Text style={styles.erroTexto}>
                    {erros.nome}
                  </Text>
                )}
              </View>

              {tipoCadastro === "usuario" && (
                <View style={styles.campoContainer}>
                  <Text style={styles.label}>
                    Data de nascimento
                  </Text>

                  <View
                    style={[
                      styles.inputContainer,
                      campoComErro(
                        "dataNascimento"
                      ) &&
                        styles.inputContainerErro,
                    ]}
                  >
                    <MaterialIcons
                      name="calendar-today"
                      size={20}
                      color={
                        campoComErro(
                          "dataNascimento"
                        )
                          ? Cores.erro
                          : Cores.primariaBase
                      }
                    />

                    <TextInput
                      style={styles.campoComIcone}
                      placeholder="dd/mm/aaaa"
                      placeholderTextColor={
                        Cores.textoSuave
                      }
                      value={
                        cadastro.dataNascimento
                      }
                      onChangeText={(valor) =>
                        atualizarCampo(
                          "dataNascimento",
                          formatarData(valor)
                        )
                      }
                      keyboardType="numeric"
                      maxLength={10}
                    />
                  </View>

                  {erros.dataNascimento && (
                    <Text style={styles.erroTexto}>
                      {erros.dataNascimento}
                    </Text>
                  )}
                </View>
              )}

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  Username
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro("username") &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name="alternate-email"
                    size={21}
                    color={
                      campoComErro("username")
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  <TextInput
                    style={styles.campoComIcone}
                    placeholder="@usuario"
                    placeholderTextColor={
                      Cores.textoSuave
                    }
                    value={cadastro.username}
                    onChangeText={(valor) =>
                      atualizarCampo(
                        "username",
                        valor
                      )
                    }
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                {erros.username && (
                  <Text style={styles.erroTexto}>
                    {erros.username}
                  </Text>
                )}
              </View>

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  {tipoCadastro === "usuario"
                    ? "CPF"
                    : "CNPJ"}
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro(
                      tipoCadastro === "usuario"
                        ? "cpf"
                        : "cnpj"
                    ) &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name="badge"
                    size={21}
                    color={
                      campoComErro(
                        tipoCadastro === "usuario"
                          ? "cpf"
                          : "cnpj"
                      )
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  {tipoCadastro === "usuario" ? (
                    <TextInput
                      style={styles.campoComIcone}
                      placeholder="000.000.000-00"
                      placeholderTextColor={
                        Cores.textoSuave
                      }
                      value={cadastro.cpf}
                      onChangeText={(valor) =>
                        atualizarCampo(
                          "cpf",
                          formatarCPF(valor)
                        )
                      }
                      keyboardType="numeric"
                      maxLength={14}
                    />
                  ) : (
                    <TextInput
                      style={styles.campoComIcone}
                      placeholder="00.000.000/0000-00"
                      placeholderTextColor={
                        Cores.textoSuave
                      }
                      value={cadastro.cnpj}
                      onChangeText={(valor) =>
                        atualizarCampo(
                          "cnpj",
                          formatarCNPJ(valor)
                        )
                      }
                      keyboardType="numeric"
                      maxLength={18}
                    />
                  )}
                </View>

                {erros[
                  tipoCadastro === "usuario"
                    ? "cpf"
                    : "cnpj"
                ] && (
                  <Text style={styles.erroTexto}>
                    {
                      erros[
                        tipoCadastro === "usuario"
                          ? "cpf"
                          : "cnpj"
                      ]
                    }
                  </Text>
                )}
              </View>

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  E-mail
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro("email") &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name="email"
                    size={21}
                    color={
                      campoComErro("email")
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  <TextInput
                    style={styles.campoComIcone}
                    placeholder="email@email.com"
                    placeholderTextColor={
                      Cores.textoSuave
                    }
                    value={cadastro.email}
                    onChangeText={(valor) =>
                      atualizarCampo(
                        "email",
                        valor
                      )
                    }
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                {erros.email && (
                  <Text style={styles.erroTexto}>
                    {erros.email}
                  </Text>
                )}
              </View>

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  Telefone
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro("telefone") &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name="phone"
                    size={21}
                    color={
                      campoComErro("telefone")
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  <TextInput
                    style={styles.campoComIcone}
                    placeholder="(00) 00000-0000"
                    placeholderTextColor={
                      Cores.textoSuave
                    }
                    value={cadastro.telefone}
                    onChangeText={(valor) =>
                      atualizarCampo(
                        "telefone",
                        formatarTelefone(valor)
                      )
                    }
                    keyboardType="phone-pad"
                    maxLength={15}
                  />
                </View>

                {erros.telefone && (
                  <Text style={styles.erroTexto}>
                    {erros.telefone}
                  </Text>
                )}
              </View>

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  Senha
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro("senha") &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name="lock"
                    size={21}
                    color={
                      campoComErro("senha")
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  <TextInput
                    style={styles.campoSenha}
                    placeholder="Digite sua senha"
                    placeholderTextColor={
                      Cores.textoSuave
                    }
                    value={cadastro.senha}
                    onChangeText={(valor) =>
                      atualizarCampo(
                        "senha",
                        valor
                      )
                    }
                    secureTextEntry={!mostrarSenha}
                    autoCapitalize="none"
                  />

                  <Pressable
                    onPress={() =>
                      setMostrarSenha(
                        !mostrarSenha
                      )
                    }
                    style={styles.iconeSenha}
                  >
                    <MaterialIcons
                      name={
                        mostrarSenha
                          ? "visibility-off"
                          : "visibility"
                      }
                      size={22}
                      color={
                        Cores.textoSecundario
                      }
                    />
                  </Pressable>
                </View>

                {erros.senha && (
                  <Text style={styles.erroTexto}>
                    {erros.senha}
                  </Text>
                )}
              </View>

              <View style={styles.campoContainer}>
                <Text style={styles.label}>
                  Confirmar senha
                </Text>

                <View
                  style={[
                    styles.inputContainer,
                    campoComErro(
                      "confirmarSenha"
                    ) &&
                      styles.inputContainerErro,
                  ]}
                >
                  <MaterialIcons
                    name="lock-outline"
                    size={21}
                    color={
                      campoComErro(
                        "confirmarSenha"
                      )
                        ? Cores.erro
                        : Cores.primariaBase
                    }
                  />

                  <TextInput
                    style={styles.campoSenha}
                    placeholder="Confirme sua senha"
                    placeholderTextColor={
                      Cores.textoSuave
                    }
                    value={
                      cadastro.confirmarSenha
                    }
                    onChangeText={(valor) =>
                      atualizarCampo(
                        "confirmarSenha",
                        valor
                      )
                    }
                    secureTextEntry={
                      !mostrarConfirmarSenha
                    }
                    autoCapitalize="none"
                  />

                  <Pressable
                    onPress={() =>
                      setMostrarConfirmarSenha(
                        !mostrarConfirmarSenha
                      )
                    }
                    style={styles.iconeSenha}
                  >
                    <MaterialIcons
                      name={
                        mostrarConfirmarSenha
                          ? "visibility-off"
                          : "visibility"
                      }
                      size={22}
                      color={
                        Cores.textoSecundario
                      }
                    />
                  </Pressable>
                </View>

                {erros.confirmarSenha && (
                  <Text style={styles.erroTexto}>
                    {erros.confirmarSenha}
                  </Text>
                )}
              </View>

              <Pressable
                onPress={() =>
                  setMostrarCodigo(
                    !mostrarCodigo
                  )
                }
                style={[
                  styles.codigoOpcao,
                  mostrarCodigo &&
                    styles.codigoOpcaoAtiva,
                ]}
              >
                <View
                  style={[
                    styles.checkbox,
                    mostrarCodigo &&
                      styles.checkboxAtivo,
                  ]}
                >
                  {mostrarCodigo && (
                    <MaterialIcons
                      name="check"
                      size={17}
                      color={Cores.branco}
                    />
                  )}
                </View>

                <View
                  style={styles.codigoTextoContainer}
                >
                  <Text style={styles.codigoTitulo}>
                    Tenho um código de acesso
                  </Text>

                  <Text
                    style={styles.codigoDescricao}
                  >
                    Informe o código caso tenha
                    recebido um convite ou acesso
                    especial.
                  </Text>
                </View>
              </Pressable>

              {mostrarCodigo && (
                <View style={styles.campoContainer}>
                  <Text style={styles.label}>
                    Código de acesso
                  </Text>

                  <View
                    style={styles.inputContainer}
                  >
                    <MaterialIcons
                      name="vpn-key"
                      size={21}
                      color={Cores.primariaBase}
                    />

                    <TextInput
                      style={styles.campoComIcone}
                      placeholder="Digite seu código"
                      placeholderTextColor={
                        Cores.textoSuave
                      }
                      value={
                        cadastro.codigoAcesso
                      }
                      onChangeText={(valor) =>
                        atualizarCampo(
                          "codigoAcesso",
                          valor
                        )
                      }
                      autoCapitalize="characters"
                    />
                  </View>
                </View>
              )}

              <Pressable
                onPress={cadastrar}
                style={({ pressed }) => [
                  styles.botaoCadastrar,
                  pressed &&
                    styles.botaoPressionado,
                ]}
              >
                <Text style={styles.botaoTexto}>
                  Criar{" "}
                  {tipoCadastro === "usuario"
                    ? "conta"
                    : "instituição"}
                </Text>

                <MaterialIcons
                  name={
                    tipoCadastro === "usuario"
                      ? "person-add"
                      : "business"
                  }
                  size={23}
                  color={Cores.branco}
                />
              </Pressable>

              <Text style={styles.rodape}>
                Ao criar sua conta, você poderá
                acessar os recursos do Gole+.
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },

  areaSegura: {
    flex: 1,
  },

  teclado: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingVertical: 24,
  },

  cabecalho: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  botaoVoltar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },

  tituloContainer: {
    flex: 1,
    marginLeft: 13,
  },

  titulo: {
    fontFamily: Fontes.titulo,
    fontSize: 25,
    color: Cores.branco,
  },

  subtitulo: {
    marginTop: 4,
    fontFamily: Fontes.base,
    fontSize: 13,
    color: Cores.secundariaClara,
  },

  formulario: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    padding: 21,
    borderRadius: 28,
    backgroundColor: Cores.fundoTransparente4,
    shadowColor: Cores.secundariaEscura,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },

  tituloSecao: {
    fontFamily: Fontes.subtitulo,
    fontSize: 17,
    color: Cores.secundariaEscura,
    marginBottom: 10,
  },

  tipoContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  tipoBotao: {
    flex: 1,
    minHeight: 70,
    borderRadius: 18,
    backgroundColor: "#E8F4FA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#C9E7F3",
  },

  tipoBotaoAtivo: {
    backgroundColor: Cores.primariaEscura,
    borderColor: Cores.secundariaEscura,
  },

  tipoTexto: {
    marginTop: 4,
    fontFamily: Fontes.semibold,
    fontSize: 13,
    color: Cores.primariaEscura,
  },

  tipoTextoAtivo: {
    color: Cores.branco,
  },

  campoContainer: {
    width: "100%",
    marginBottom: 15,
  },

  label: {
    fontFamily: Fontes.semibold,
    fontSize: 13,
    color: Cores.secundariaEscura,
    marginBottom: 6,
    marginLeft: 7,
  },

  inputContainer: {
    width: "100%",
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: "#EEF7FB",
    borderWidth: 1,
    borderColor: "#D4EAF2",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
  },

  inputContainerErro: {
    borderColor: Cores.erro,
    backgroundColor: "#FFF6F7",
  },

  campoComIcone: {
    flex: 1,
    minHeight: 54,
    paddingHorizontal: 11,
    color: Cores.secundariaEscura,
    fontFamily: Fontes.base,
    fontSize: 14,
  },

  campoSenha: {
    flex: 1,
    minHeight: 54,
    paddingHorizontal: 11,
    color: Cores.secundariaEscura,
    fontFamily: Fontes.base,
    fontSize: 14,
  },

  iconeSenha: {
    paddingHorizontal: 13,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },

  erroTexto: {
    color: Cores.erro,
    fontFamily: Fontes.semibold,
    fontSize: 11,
    marginTop: 5,
    marginLeft: 7,
  },

  codigoOpcao: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    marginBottom: 15,
    borderRadius: 17,
    backgroundColor: "#F4FAFC",
    borderWidth: 1,
    borderColor: "#D8EBF2",
  },

  codigoOpcaoAtiva: {
    backgroundColor: "#E8F4FA",
    borderColor: Cores.primariaClara,
  },

  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: Cores.primariaBase,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxAtivo: {
    backgroundColor: Cores.primariaBase,
  },

  codigoTextoContainer: {
    flex: 1,
    marginLeft: 11,
  },

  codigoTitulo: {
    fontFamily: Fontes.semibold,
    fontSize: 13,
    color: Cores.secundariaEscura,
  },

  codigoDescricao: {
    marginTop: 3,
    fontFamily: Fontes.base,
    fontSize: 11,
    lineHeight: 16,
    color: Cores.textoSecundario,
  },

  botaoCadastrar: {
    width: "100%",
    minHeight: 57,
    marginTop: 4,
    borderRadius: 18,
    backgroundColor: Cores.secundariaBase,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    shadowColor: Cores.secundariaEscura,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

  botaoTexto: {
    fontFamily: Fontes.negrito,
    fontSize: 16,
    color: Cores.branco,
  },

  botaoPressionado: {
    opacity: 0.8,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  pressionado: {
    opacity: 0.75,
  },

  rodape: {
    marginTop: 15,
    textAlign: "center",
    fontFamily: Fontes.base,
    fontSize: 11,
    lineHeight: 16,
    color: Cores.textoSecundario,
  },
});