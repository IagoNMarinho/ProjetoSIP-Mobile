import MaterialIcons from "@react-native-vector-icons/material-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { AbrirNoSite } from "./components/AbrirNoSite";
import { Bolhas } from "./components/Bolhas";
import { Peixe } from "./components/Peixe";
import { SensorCard } from "./components/SensorCard";
import { sensores } from "./data/sensores";
import { styles } from "./styles/styles";

export default function Deteccao() {
  const [mostrarDetalhes, setMostrarDetalhes] =
    useState(true);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#07165F",
          "#0638B8",
          "#075FE0",
          "#0834A8",
        ]}
        style={styles.fundo}
      >
        <Bolhas />

        <Peixe
          top={185}
          left="4%"
          scale={0.7}
        />

        <Peixe
          top={275}
          left="78%"
          scale={0.9}
        />

        <Peixe
          top={520}
          left="10%"
          scale={0.55}
        />

        <Peixe
          top={600}
          left="75%"
          scale={0.65}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.conteudo}
        >
          <View style={styles.cabecalho}>
            <View style={styles.iconeCabecalho}>
              <MaterialIcons
                name="water-drop"
                size={27}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.textosCabecalho}>
              <Text style={styles.tituloPagina}>
                Detecção
              </Text>

              <Text style={styles.subtituloPagina}>
                Consulte a qualidade da água
              </Text>
            </View>
          </View>

          <View style={styles.introducao}>
            <Text style={styles.tituloHero}>
              HORA DE{"\n"}
              <Text style={styles.tituloHeroDestaque}>
                DETECTAR!
              </Text>
            </Text>

            <Text style={styles.textoHero}>
              Confira os últimos resultados do
              monitoramento da água.
            </Text>
          </View>

          <View style={styles.statusCard}>
            <View style={styles.statusTituloLinha}>
              <Text style={styles.statusTitulo}>
                STATUS
              </Text>

              <View style={styles.statusIndicador}>
                <View style={styles.statusPonto} />

                <Text style={styles.statusIndicadorTexto}>
                  Atualizado
                </Text>
              </View>
            </View>

            <View style={styles.statusGrade}>
              {sensores.map((sensor) => (
                <SensorCard
                  key={sensor.nome}
                  sensor={sensor}
                />
              ))}
            </View>
          </View>

          <View style={styles.resultadoWrapper}>
            <View style={styles.resultadoTitulo}>
              <Text style={styles.resultadoTituloTexto}>
                RESULTADO DA COLETA
              </Text>
            </View>

            <View style={styles.resultadoCard}>
              <View style={styles.segura}>
                <MaterialIcons
                  name="check-circle"
                  size={25}
                  color="#FFFFFF"
                />

                <Text style={styles.seguraTexto}>
                  SEGURA!
                </Text>
              </View>

              <View style={styles.feedbackLinha}>
                <Text style={styles.rotulo}>
                  Feedback:
                </Text>

                <View style={styles.potavel}>
                  <Text style={styles.potavelTexto}>
                    ÁGUA POTÁVEL
                  </Text>
                </View>
              </View>

              <View style={styles.linhaInfo}>
                <Text style={styles.rotulo}>
                  Local realizado:
                </Text>

                <Text style={styles.valorInfo}>
                  Reservatório 1
                </Text>
              </View>

              <View style={styles.linhaInfo}>
                <Text style={styles.rotulo}>
                  Horário realizado:
                </Text>

                <Text style={styles.valorInfo}>
                  18:07
                </Text>
              </View>

              <View style={styles.linhaInfo}>
                <Text style={styles.rotulo}>
                  Data:
                </Text>

                <Text style={styles.valorInfo}>
                  20/09
                </Text>
              </View>

              <Pressable
                style={styles.botaoDetalhes}
                onPress={() =>
                  setMostrarDetalhes(
                    (atual) => !atual,
                  )
                }
              >
                <Text style={styles.botaoDetalhesTexto}>
                  {mostrarDetalhes
                    ? "Ocultar sensores"
                    : "Ver sensores"}
                </Text>

                <MaterialIcons
                  name={
                    mostrarDetalhes
                      ? "keyboard-arrow-up"
                      : "keyboard-arrow-down"
                  }
                  size={23}
                  color="#263C9B"
                />
              </Pressable>

              {mostrarDetalhes && (
                <View style={styles.sensoresResultado}>
                  <View style={styles.sensorResultado}>
                    <Text style={styles.sensorResultadoNome}>
                      PH
                    </Text>

                    <Text style={styles.sensorResultadoValor}>
                      7.6
                    </Text>
                  </View>

                  <View style={styles.sensorResultado}>
                    <Text style={styles.sensorResultadoNome}>
                      TDS
                    </Text>

                    <Text style={styles.sensorResultadoValor}>
                      120
                      <Text style={styles.unidadePequena}>
                        {" "}ppm
                      </Text>
                    </Text>
                  </View>

                  <View style={styles.sensorResultado}>
                    <Text style={styles.sensorResultadoNome}>
                      TURBIDEZ
                    </Text>

                    <Text style={styles.sensorResultadoValor}>
                      5
                      <Text style={styles.unidadePequena}>
                        {" "}NTU
                      </Text>
                    </Text>
                  </View>

                  <View style={styles.sensorResultado}>
                    <Text style={styles.sensorResultadoNome}>
                      TEMP.
                    </Text>

                    <Text style={styles.sensorResultadoValor}>
                      20
                      <Text style={styles.unidadePequena}>
                        {" "}°C
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          <View style={styles.acoes}>
            <Text style={styles.acoesTitulo}>
              Recursos do monitoramento
            </Text>

            <Text style={styles.acoesTexto}>
              Algumas funções estão disponíveis
              somente no site.
            </Text>

            <Pressable
              style={styles.botaoAcao}
              onPress={() =>
                AbrirNoSite({
                  titulo: "Baixar coleta",
                  mensagem:
                    "Essa função está disponível no site. Deseja sair do app e continuar por lá?",
                })
              }
            >
              <MaterialIcons
                name="download"
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.botaoAcaoTexto}>
                Baixar coleta
              </Text>

              <MaterialIcons
                name="open-in-new"
                size={19}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable
              style={styles.botaoAcao}
              onPress={() =>
                AbrirNoSite({
                  titulo: "Histórico de análises",
                  mensagem:
                    "O histórico completo está disponível no site. Deseja sair do app e continuar por lá?",
                })
              }
            >
              <MaterialIcons
                name="bar-chart"
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.botaoAcaoTexto}>
                Histórico de análises
              </Text>

              <MaterialIcons
                name="open-in-new"
                size={19}
                color="#FFFFFF"
              />
            </Pressable>

            <Pressable
              style={styles.botaoAcao}
              onPress={() =>
                AbrirNoSite({
                  titulo: "Metodologia",
                  mensagem:
                    "A metodologia está disponível no site. Deseja sair do app e continuar por lá?",
                })
              }
            >
              <MaterialIcons
                name="menu-book"
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.botaoAcaoTexto}>
                Metodologia
              </Text>

              <MaterialIcons
                name="open-in-new"
                size={19}
                color="#FFFFFF"
              />
            </Pressable>
          </View>

          <Pressable
            style={styles.monitoramento}
            onPress={() =>
              AbrirNoSite({
                titulo: "Monitoramento",
                mensagem:
                  "O monitoramento e os controles do sensor estão disponíveis no site. Deseja sair do app e continuar por lá?",
              })
            }
          >
            <View style={styles.monitoramentoIcone}>
              <MaterialIcons
                name="sensors"
                size={27}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.monitoramentoTextoArea}>
              <Text style={styles.monitoramentoTitulo}>
                Monitoramento do sensor
              </Text>

              <Text style={styles.monitoramentoTexto}>
                Acesse os controles do SIP pelo site.
              </Text>
            </View>

            <MaterialIcons
              name="chevron-right"
              size={28}
              color="#FFFFFF"
            />
          </Pressable>

          <View style={styles.espacoFinal} />
        </ScrollView>

        <View
          pointerEvents="none"
          style={styles.ondas}
        >
          <View style={styles.onda1} />
          <View style={styles.onda2} />
          <View style={styles.onda3} />
        </View>
      </LinearGradient>
    </View>
  );
}