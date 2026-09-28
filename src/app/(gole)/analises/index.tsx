import MaterialIcons from "@react-native-vector-icons/material-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import CardAnalise from "./components/CardAnalise";
import CardEstatistica from "./components/CardEstatistica";
import CardMedia from "./components/CardMedia";
import Grafico from "./components/Grafico";
import { analisesIniciais } from "./data/analisesIniciais";
import { styles } from "./styles/styles";
import { Analise } from "./types/Analise";

export default function Analises() {
  const [analises] = useState<Analise[]>(analisesIniciais);
  const [modalDetalhes, setModalDetalhes] =
    useState<Analise | null>(null);
  const [mostrarTodas, setMostrarTodas] = useState(false);

  const estatisticas = useMemo(() => {
    return {
      total: analises.length,
      adequadas: analises.filter(
        (a) => a.status === "Adequada"
      ).length,
      pendentes: analises.filter(
        (a) => a.status === "Pendente"
      ).length,
      criticas: analises.filter(
        (a) => a.status === "Crítica"
      ).length,
    };
  }, [analises]);

  const medias = useMemo(() => {
    if (analises.length === 0) {
      return {
        ph: 0,
        turbidez: 0,
        tds: 0,
        temperatura: 0,
      };
    }

    const media = (valores: number[]) =>
      valores.reduce(
        (soma, valor) => soma + valor,
        0
      ) / valores.length;

    return {
      ph: media(analises.map((a) => a.ph)),
      turbidez: media(
        analises.map((a) => a.turbidez)
      ),
      tds: media(analises.map((a) => a.tds)),
      temperatura: media(
        analises.map((a) => a.temperatura)
      ),
    };
  }, [analises]);

  const analisesExibidas = mostrarTodas
    ? analises
    : analises.slice(0, 5);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7DE1F1", "#B8F4F4", "#DCEEFF"]}
        style={styles.background}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cabecalho}>
          <View style={styles.logo}>
            <MaterialIcons
              name="water-drop"
              size={55}
              color="#087BC1"
            />
          </View>

          <View style={styles.boasVindas}>
            <Text style={styles.tituloPrincipal}>
              BEM-VINDO!
            </Text>

            <Text style={styles.subtituloPrincipal}>
              Aqui você terá acesso a todo o histórico de
              análises realizadas pelo usuário!
            </Text>
          </View>
        </View>

        <View style={styles.estatisticas}>
          <CardEstatistica
            valor={estatisticas.total}
            texto="Análises completas"
            icone="science"
            cor="#1788C8"
          />

          <CardEstatistica
            valor={estatisticas.adequadas}
            texto="Análises adequadas"
            icone="health-and-safety"
            cor="#4DAF20"
          />

          <CardEstatistica
            valor={estatisticas.pendentes}
            texto="Análises pendentes"
            icone="error-outline"
            cor="#E0B800"
          />

          <CardEstatistica
            valor={estatisticas.criticas}
            texto="Análises críticas"
            icone="dangerous"
            cor="#D13B32"
          />
        </View>

        <View style={styles.secao}>
          <View style={styles.tituloSecao}>
            <Text style={styles.tituloSecaoTexto}>
              Histórico de análises
            </Text>

            <Pressable
              onPress={() => setMostrarTodas(true)}
            >
              <Text style={styles.verTodas}>
                Ver todas
              </Text>
            </Pressable>
          </View>

          {analisesExibidas.length === 0 ? (
            <View style={styles.vazio}>
              <MaterialIcons
                name="science"
                size={40}
                color="#6A83A0"
              />

              <Text style={styles.vazioTexto}>
                Nenhuma análise realizada.
              </Text>
            </View>
          ) : (
            analisesExibidas.map((analise, index) => (
              <CardAnalise
                key={analise.id}
                analise={analise}
                numero={analises.length - index}
                onDetalhes={() =>
                  setModalDetalhes(analise)
                }
              />
            ))
          )}
        </View>

        <View style={styles.secao}>
          <View style={styles.tituloSecao}>
            <Text style={styles.tituloSecaoTexto}>
              Gráfico
            </Text>

            <Text style={styles.filtro}>
              semana ^
            </Text>
          </View>

          <Grafico />
        </View>

        <View style={styles.secaoMedias}>
          <Text style={styles.tituloSecaoTexto}>
            Médias por parâmetros
          </Text>

          <View style={styles.mediasGrid}>
            <CardMedia
              icone="water-drop"
              valor={medias.ph.toFixed(1)}
              titulo="PH médio"
            />

            <CardMedia
              icone="opacity"
              valor={`${medias.turbidez.toFixed(1)} NTU`}
              titulo="Turbidez média"
            />

            <CardMedia
              icone="device-thermostat"
              valor={`${medias.temperatura.toFixed(1)} °C`}
              titulo="Temperatura média"
            />

            <CardMedia
              icone="local-drink"
              valor={`${medias.tds.toFixed(1)} mg/L`}
              titulo="Sólidos dissolvidos médios"
            />
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={modalDetalhes !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setModalDetalhes(null)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modal}>
            <LinearGradient
              colors={["#72DCEB", "#AEEEF2"]}
              style={styles.modalCabecalho}
            >
              <Text style={styles.modalTitulo}>
                DETALHES DA ANÁLISE
              </Text>
            </LinearGradient>

            {modalDetalhes && (
              <ScrollView
                contentContainerStyle={styles.modalConteudo}
              >
                <Text style={styles.modalAnalise}>
                  ANÁLISE #{modalDetalhes.id}
                </Text>

                <View style={styles.detalhesBox}>
                  <Text style={styles.detalhe}>
                    <Text style={styles.negrito}>
                      Local:
                    </Text>{" "}
                    {modalDetalhes.local}
                  </Text>

                  <Text style={styles.detalhe}>
                    <Text style={styles.negrito}>
                      Data:
                    </Text>{" "}
                    {modalDetalhes.data}
                  </Text>

                  <Text style={styles.detalhe}>
                    <Text style={styles.negrito}>
                      Horário:
                    </Text>{" "}
                    {modalDetalhes.horario}
                  </Text>

                  <Text style={styles.detalhe}>
                    <Text style={styles.negrito}>
                      Status:
                    </Text>{" "}
                    {modalDetalhes.status}
                  </Text>

                  <View style={styles.resultados}>
                    <Text style={styles.resultadosTitulo}>
                      Resultado dos sensores:
                    </Text>

                    <Text style={styles.sensorResultado}>
                      pH: {modalDetalhes.ph.toFixed(2)}
                    </Text>

                    <Text style={styles.sensorResultado}>
                      Turbidez:{" "}
                      {modalDetalhes.turbidez.toFixed(2)} NTU
                    </Text>

                    <Text style={styles.sensorResultado}>
                      TDS: {modalDetalhes.tds.toFixed(2)} ppm
                    </Text>

                    <Text style={styles.sensorResultado}>
                      Temperatura:{" "}
                      {modalDetalhes.temperatura.toFixed(2)} °C
                    </Text>
                  </View>
                </View>

                <Pressable
                  style={styles.botaoFechar}
                  onPress={() => setModalDetalhes(null)}
                >
                  <Text style={styles.botaoFecharTexto}>
                    Fechar
                  </Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

      <Modal
        visible={mostrarTodas}
        transparent
        animationType="fade"
        onRequestClose={() => setMostrarTodas(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modal}>
            <LinearGradient
              colors={["#72DCEB", "#AEEEF2"]}
              style={styles.modalCabecalho}
            >
              <Text style={styles.modalTitulo}>
                TODAS AS ANÁLISES
              </Text>
            </LinearGradient>

            <ScrollView
              style={styles.listaTodas}
              contentContainerStyle={styles.listaTodasConteudo}
            >
              {analises.map((analise) => (
                <Pressable
                  key={analise.id}
                  style={styles.cardTodas}
                  onPress={() => {
                    setMostrarTodas(false);
                    setModalDetalhes(analise);
                  }}
                >
                  <View style={styles.cardTodasTexto}>
                    <Text style={styles.cardTodasTitulo}>
                      ANÁLISE #{analise.id}
                    </Text>

                    <Text style={styles.cardTodasLocal}>
                      Local: {analise.local}
                    </Text>

                    <Text style={styles.cardTodasData}>
                      {analise.data} - {analise.horario}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.status,
                      {
                        backgroundColor:
                          analise.status === "Adequada"
                            ? "#DDF4C8"
                            : analise.status === "Pendente"
                              ? "#FFF2B8"
                              : "#FFD7D2",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.statusBolinha,
                        {
                          backgroundColor:
                            analise.status === "Adequada"
                              ? "#4DAA18"
                              : analise.status === "Pendente"
                                ? "#E1B400"
                                : "#D63A30",
                        },
                      ]}
                    />

                    <Text
                      style={[
                        styles.statusTexto,
                        {
                          color:
                            analise.status === "Adequada"
                              ? "#4D9B20"
                              : analise.status === "Pendente"
                                ? "#C79A00"
                                : "#C6382D",
                        },
                      ]}
                    >
                      {analise.status}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>

            <Pressable
              style={styles.botaoFechar}
              onPress={() => setMostrarTodas(false)}
            >
              <Text style={styles.botaoFecharTexto}>
                Fechar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}