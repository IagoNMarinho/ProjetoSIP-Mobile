import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Easing,
} from "react-native";

import {
  Amigo,
  Historico,
  PaginaHome,
  TipoAviso,
} from "../types/home.types";

import {
  obterDataAtual,
  obterDataAnterior,
} from "../utils/home.utils";

const STORAGE_KEY = "@gole_historico";
const LAST_CLICK_KEY = "@gole_ultimo_clique";

const INTERVALO_MINIMO = 30000;
const LIMITE_QUANTIDADE_PERSONALIZADA = 700;

const SCREEN_WIDTH = Dimensions.get("window").width;

export function useHome() {
  const [historico, setHistorico] =
    useState<Historico>({});

  const [dataSelecionada, setDataSelecionada] =
    useState(obterDataAtual());

  const [carregando, setCarregando] =
    useState(true);

  const [mostrarAviso, setMostrarAviso] =
    useState(false);

  const [tipoAviso, setTipoAviso] =
    useState<TipoAviso>("moderado");

  const [ultimaTentativa, setUltimaTentativa] =
    useState(0);

  const [tentativasRapidas, setTentativasRapidas] =
    useState(0);

  const [pagina, setPagina] =
    useState<PaginaHome>("hoje");

  const [amigos] = useState<Amigo[]>([]);

  const [
    mostrarQuantidadePersonalizada,
    setMostrarQuantidadePersonalizada,
  ] = useState(false);

  const [
    quantidadePersonalizada,
    setQuantidadePersonalizada,
  ] = useState("");

  const progressoAnimado = useRef(
    new Animated.Value(0)
  ).current;

  const slideAnimado = useRef(
    new Animated.Value(0)
  ).current;

  const parabensOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const parabensScale = useRef(
    new Animated.Value(0.7)
  ).current;

  const bubbleAnimacao = useRef(
    new Animated.Value(0)
  ).current;

  const dataAtual = obterDataAtual();
  const registro = historico[dataSelecionada];
  const meta = registro?.meta ?? 2000;
  const consumo = registro?.consumo ?? 0;

  const porcentagem = Math.min(
    100,
    Math.round((consumo / meta) * 100)
  );

  const ehHoje =
    dataSelecionada === dataAtual;

  const metaAtingida =
    consumo >= meta;

  useEffect(() => {
    async function carregar() {
      try {
        const salvo =
          await AsyncStorage.getItem(
            STORAGE_KEY
          );

        if (salvo) {
          setHistorico(JSON.parse(salvo));
        }

        const ultimoClique =
          await AsyncStorage.getItem(
            LAST_CLICK_KEY
          );

        if (ultimoClique) {
          setUltimaTentativa(
            Number(ultimoClique)
          );
        }
      } catch (erro) {
        console.log(
          "Erro ao carregar:",
          erro
        );
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  useEffect(() => {
    if (carregando) {
      return;
    }

    if (!historico[dataAtual]) {
      const novoHistorico = {
        ...historico,
        [dataAtual]: {
          consumo: 0,
          meta: 2000,
        },
      };

      setHistorico(novoHistorico);

      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novoHistorico)
      );
    }
  }, [
    carregando,
    dataAtual,
    historico,
  ]);

  useEffect(() => {
    Animated.timing(
      progressoAnimado,
      {
        toValue: porcentagem,
        duration: 900,
        easing: Easing.out(
          Easing.cubic
        ),
        useNativeDriver: false,
      }
    ).start();
  }, [
    porcentagem,
    progressoAnimado,
  ]);

  useEffect(() => {
    if (!metaAtingida || !ehHoje) {
      return;
    }

    parabensOpacity.setValue(0);
    parabensScale.setValue(0.7);
    bubbleAnimacao.setValue(0);

    Animated.parallel([
      Animated.timing(
        parabensOpacity,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.out(
            Easing.ease
          ),
          useNativeDriver: true,
        }
      ),
      Animated.spring(
        parabensScale,
        {
          toValue: 1,
          friction: 6,
          tension: 70,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        bubbleAnimacao,
        {
          toValue: 1,
          duration: 1400,
          easing: Easing.out(
            Easing.cubic
          ),
          useNativeDriver: true,
        }
      ),
    ]).start();
  }, [
    metaAtingida,
    ehHoje,
    parabensOpacity,
    parabensScale,
    bubbleAnimacao,
  ]);

  function trocarPagina(
    novaPagina: PaginaHome
  ) {
    if (novaPagina === pagina) {
      return;
    }

    const novoValor =
      novaPagina === "hoje"
        ? 0
        : -SCREEN_WIDTH;

    setPagina(novaPagina);

    Animated.timing(
      slideAnimado,
      {
        toValue: novoValor,
        duration: 420,
        easing: Easing.out(
          Easing.cubic
        ),
        useNativeDriver: true,
      }
    ).start();
  }

  function mostrarMensagem(
    tipo: TipoAviso
  ) {
    setTipoAviso(tipo);
    setMostrarAviso(true);

    setTimeout(() => {
      setMostrarAviso(false);
    }, 2400);
  }

  async function adicionarAgua(
    quantidade: number
  ) {
    if (!ehHoje || metaAtingida) {
      return;
    }

    const agora = Date.now();
    const intervalo =
      agora - ultimaTentativa;

    if (
      ultimaTentativa > 0 &&
      intervalo < INTERVALO_MINIMO
    ) {
      const novasTentativas =
        tentativasRapidas + 1;

      setTentativasRapidas(
        novasTentativas
      );

      if (novasTentativas >= 2) {
        mostrarMensagem("rapido");
      } else {
        mostrarMensagem("moderado");
      }

      return;
    }

    setUltimaTentativa(agora);

    await AsyncStorage.setItem(
      LAST_CLICK_KEY,
      String(agora)
    );

    setTentativasRapidas(0);

    const novoConsumo = Math.min(
      consumo + quantidade,
      meta
    );

    const novoHistorico = {
      ...historico,
      [dataAtual]: {
        consumo: novoConsumo,
        meta,
      },
    };

    setHistorico(novoHistorico);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novoHistorico)
      );
    } catch (erro) {
      console.log(
        "Erro ao salvar:",
        erro
      );
    }
  }

  function abrirQuantidadePersonalizada() {
    setQuantidadePersonalizada("");
    setMostrarQuantidadePersonalizada(true);
  }

  async function confirmarQuantidadePersonalizada() {
    const valor = Number(
      quantidadePersonalizada
        .replace(",", ".")
        .trim()
    );

    if (!Number.isFinite(valor)) {
      Alert.alert(
        "Quantidade inválida",
        "Digite uma quantidade válida em ml."
      );
      return;
    }

    if (valor <= 0) {
      Alert.alert(
        "Quantidade inválida",
        "A quantidade deve ser maior que 0 ml."
      );
      return;
    }

    if (
      valor >
      LIMITE_QUANTIDADE_PERSONALIZADA
    ) {
      Alert.alert(
        "Limite excedido",
        "A quantidade personalizada pode ser de no máximo 700 ml."
      );
      return;
    }

    await adicionarAgua(
      Math.round(valor)
    );

    setQuantidadePersonalizada("");
    setMostrarQuantidadePersonalizada(false);
  }

  function irParaDiaAnterior() {
    const dataAnterior =
      obterDataAnterior(
        dataSelecionada
      );

    const registroAnterior =
      historico[dataAnterior];

    if (!registroAnterior) {
      setMostrarAviso(true);
      setTipoAviso("semRegistro");

      setTimeout(() => {
        setMostrarAviso(false);
      }, 3000);

      return;
    }

    setDataSelecionada(
      dataAnterior
    );
  }

  function irParaHoje() {
    setDataSelecionada(dataAtual);
  }

  function adicionarAmigo() {
    Alert.alert(
      "Adicionar amigo",
      "O sistema de amigos será conectado ao seu banco de dados nesta próxima etapa."
    );
  }

  function abrirConfiguracoes() {
    router.push(
      "/(gole)/configuracoes"
    );
  }

  const alturaAgua =
    progressoAnimado.interpolate({
      inputRange: [0, 100],
      outputRange: ["0%", "100%"],
    });

  return {
    historico,
    dataSelecionada,
    carregando,
    mostrarAviso,
    tipoAviso,
    pagina,
    amigos,
    mostrarQuantidadePersonalizada,
    quantidadePersonalizada,
    setQuantidadePersonalizada,
    setMostrarQuantidadePersonalizada,
    progressoAnimado,
    slideAnimado,
    parabensOpacity,
    parabensScale,
    bubbleAnimacao,
    dataAtual,
    registro,
    meta,
    consumo,
    porcentagem,
    ehHoje,
    metaAtingida,
    alturaAgua,
    trocarPagina,
    adicionarAgua,
    abrirQuantidadePersonalizada,
    confirmarQuantidadePersonalizada,
    irParaDiaAnterior,
    irParaHoje,
    adicionarAmigo,
    abrirConfiguracoes,
  };
}