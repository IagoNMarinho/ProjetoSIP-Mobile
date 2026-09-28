import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useAutenticacao } from "@/hooks/useAutenticacao";

type Respostas = {
  genero?: "masculino" | "feminino" | "outro";
  idade?: number;
  peso?: number;
  altura?: number;
  atividade?: "baixo" | "moderado" | "alto";
  exercicio?: boolean;
};

const TOTAL_PERGUNTAS = 5;

export default function Perguntas() {
  const [etapa, setEtapa] = useState(0);

  const [respostas, setRespostas] =
    useState<Respostas>({});

  const [valorTexto, setValorTexto] =
    useState("");

  const { salvarPerfilOnboarding } = useAutenticacao();

  const pergunta = [
    {
      titulo: "Qual é o seu gênero?",
      tipo: "genero",
    },
    {
      titulo: "Qual é a sua idade?",
      tipo: "idade",
    },
    {
      titulo: "Qual é o seu peso?",
      tipo: "peso",
    },
    {
      titulo: "Qual é a sua altura?",
      tipo: "altura",
    },
    {
      titulo: "Qual é o seu nível de atividade?",
      tipo: "atividade",
    },
  ][etapa];

  function atualizarTexto(valor: string) {
    setValorTexto(valor);
  }

  function selecionarGenero(
    genero: "masculino" | "feminino" | "outro"
  ) {
    setRespostas((atual) => ({
      ...atual,
      genero,
    }));
  }

  function selecionarAtividade(
    atividade: "baixo" | "moderado" | "alto"
  ) {
    setRespostas((atual) => ({
      ...atual,
      atividade,
    }));
  }

  function temResposta() {
    switch (pergunta.tipo) {
      case "genero":
        return !!respostas.genero;

      case "idade":
      case "peso":
      case "altura":
        return valorTexto.trim().length > 0;

      case "atividade":
        return !!respostas.atividade;

      default:
        return false;
    }
  }

  function salvarResposta() {
    // Aceita vírgula como separador decimal (ex: 70,5)
    const valor = Number(valorTexto.replace(",", "."));

    if (pergunta.tipo === "idade") {
      setRespostas((atual) => ({
        ...atual,
        idade: valor,
      }));
    }

    if (pergunta.tipo === "peso") {
      setRespostas((atual) => ({
        ...atual,
        peso: valor,
      }));
    }

    if (pergunta.tipo === "altura") {
      setRespostas((atual) => ({
        ...atual,
        altura: valor,
      }));
    }
  }

  async function finalizar() {
    // Só grava se a pessoa respondeu pelo menos uma pergunta
    if (Object.keys(respostas).length > 0) {
      const retorno = await salvarPerfilOnboarding(respostas);

      if (retorno !== "sucesso") {
        console.error("Não foi possível salvar as respostas:", retorno);
      }
    }

    router.replace("/(gole)/home");
  }

  function continuar() {
    salvarResposta();

    if (etapa === TOTAL_PERGUNTAS - 1) {
      finalizar();
      return;
    }

    setValorTexto("");
    setEtapa((atual) => atual + 1);
  }

  function pular() {
    if (etapa === TOTAL_PERGUNTAS - 1) {
      finalizar();
      return;
    }

    setValorTexto("");
    setEtapa((atual) => atual + 1);
  }

  return (
    <LinearGradient
      colors={["#F8FCFF", "#EAF7FF", "#EEE9FF"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              if (etapa === 0) {
                router.back();
              } else {
                setEtapa((atual) => atual - 1);
              }
            }}
          >
            <MaterialIcons
              name="arrow-back"
              size={28}
              color="#343252"
            />
          </Pressable>

          <Text style={styles.logo}>Gole+</Text>

          <View style={{ width: 28 }} />
        </View>

        <View style={styles.progressContainer}>
          {Array.from({
            length: TOTAL_PERGUNTAS,
          }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index <= etapa &&
                  styles.progressDotActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.content}>
          <View style={styles.waterIcon}>
            <MaterialIcons
              name="water-drop"
              size={52}
              color="#6375EF"
            />
          </View>

          <Text style={styles.step}>
            PERGUNTA {etapa + 1} DE {TOTAL_PERGUNTAS}
          </Text>

          <Text style={styles.title}>
            {pergunta.titulo}
          </Text>

          <View style={styles.answerArea}>
            {pergunta.tipo === "genero" && (
              <>
                <Option
                  texto="Masculino"
                  selecionado={
                    respostas.genero === "masculino"
                  }
                  onPress={() =>
                    selecionarGenero("masculino")
                  }
                />

                <Option
                  texto="Feminino"
                  selecionado={
                    respostas.genero === "feminino"
                  }
                  onPress={() =>
                    selecionarGenero("feminino")
                  }
                />

                <Option
                  texto="Prefiro não informar"
                  selecionado={
                    respostas.genero === "outro"
                  }
                  onPress={() =>
                    selecionarGenero("outro")
                  }
                />
              </>
            )}

            {pergunta.tipo === "idade" && (
              <Input
                value={valorTexto}
                onChangeText={atualizarTexto}
                placeholder="Ex: 18"
                keyboardType="numeric"
                unidade="anos"
              />
            )}

            {pergunta.tipo === "peso" && (
              <Input
                value={valorTexto}
                onChangeText={atualizarTexto}
                placeholder="Ex: 70"
                keyboardType="numeric"
                unidade="kg"
              />
            )}

            {pergunta.tipo === "altura" && (
              <Input
                value={valorTexto}
                onChangeText={atualizarTexto}
                placeholder="Ex: 170"
                keyboardType="numeric"
                unidade="cm"
              />
            )}

            {pergunta.tipo === "atividade" && (
              <>
                <Option
                  texto="Pouco ativo"
                  selecionado={
                    respostas.atividade === "baixo"
                  }
                  onPress={() =>
                    selecionarAtividade("baixo")
                  }
                />

                <Option
                  texto="Moderadamente ativo"
                  selecionado={
                    respostas.atividade === "moderado"
                  }
                  onPress={() =>
                    selecionarAtividade("moderado")
                  }
                />

                <Option
                  texto="Muito ativo"
                  selecionado={
                    respostas.atividade === "alto"
                  }
                  onPress={() =>
                    selecionarAtividade("alto")
                  }
                />
              </>
            )}
          </View>
        </View>

        <View style={styles.footer}>
          <Pressable
            disabled={!temResposta()}
            onPress={continuar}
            style={[
              styles.continueButton,
              !temResposta() &&
                styles.continueDisabled,
            ]}
          >
            <Text style={styles.continueText}>
              {etapa === TOTAL_PERGUNTAS - 1
                ? "Finalizar"
                : "Continuar"}
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
              Pular pergunta
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function Option({
  texto,
  selecionado,
  onPress,
}: {
  texto: string;
  selecionado: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={[
        styles.option,
        selecionado && styles.optionSelected,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.radio,
          selecionado && styles.radioSelected,
        ]}
      >
        {selecionado && (
          <View style={styles.radioInner} />
        )}
      </View>

      <Text
        style={[
          styles.optionText,
          selecionado && styles.optionTextSelected,
        ]}
      >
        {texto}
      </Text>
    </Pressable>
  );
}

function Input({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  unidade,
}: {
  value: string;
  onChangeText: (valor: string) => void;
  placeholder: string;
  keyboardType: "numeric";
  unidade: string;
}) {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A7A6BB"
        keyboardType={keyboardType}
        maxLength={5}
      />

      <Text style={styles.unit}>{unidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },

  logo: {
    fontSize: 23,
    fontWeight: "800",
    color: "#586BE8",
  },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
    marginTop: 10,
  },

  progressDot: {
    width: 24,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#D5D9EA",
  },

  progressDotActive: {
    backgroundColor: "#6575F1",
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 35,
  },

  waterIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    elevation: 3,
  },

  step: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#8584A5",
    marginBottom: 12,
  },

  title: {
    fontSize: 28,
    lineHeight: 34,
    textAlign: "center",
    fontWeight: "800",
    color: "#29264E",
  },

  answerArea: {
    width: "100%",
    marginTop: 35,
    gap: 13,
  },

  option: {
    minHeight: 60,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "transparent",
    elevation: 2,
  },

  optionSelected: {
    borderColor: "#6877EF",
    backgroundColor: "#F1F2FF",
  },

  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#B9BAD0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  radioSelected: {
    borderColor: "#6877EF",
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#6877EF",
  },

  optionText: {
    fontSize: 16,
    color: "#696881",
    fontWeight: "600",
  },

  optionTextSelected: {
    color: "#4546A2",
  },

  inputWrapper: {
    height: 65,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    elevation: 2,
  },

  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: "#302D51",
  },

  unit: {
    fontSize: 16,
    color: "#8584A5",
    fontWeight: "700",
  },

  footer: {
    paddingHorizontal: 25,
    paddingBottom: 15,
  },

  continueButton: {
    height: 57,
    borderRadius: 30,
    backgroundColor: "#6575F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    elevation: 3,
  },

  continueDisabled: {
    backgroundColor: "#C5C7D7",
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  skipButton: {
    alignItems: "center",
    paddingVertical: 13,
  },

  skipText: {
    color: "#9998B2",
    fontSize: 13,
    fontWeight: "600",
  },
});