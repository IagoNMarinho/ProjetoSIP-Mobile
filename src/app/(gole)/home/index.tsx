import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import {
  Animated,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import MaterialIcons from "@react-native-vector-icons/material-icons";

import WaterAmountButton from "../../../components/Gole/WaterAmountButton";

import { useHome } from "./hooks/useHome";
import { formatarDataCompleta } from "./utils/home.utils";
import { styles } from "./styles/home.styles";
export default function Home() {
  const {
    carregando,
    mostrarAviso,
    tipoAviso,
    pagina,
    amigos,
    mostrarQuantidadePersonalizada,
    quantidadePersonalizada,
    setQuantidadePersonalizada,
    setMostrarQuantidadePersonalizada,
    slideAnimado,
    parabensOpacity,
    parabensScale,
    bubbleAnimacao,
    dataAtual,
    dataSelecionada,
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
  } = useHome();

  if (carregando) {
    return (
      <LinearGradient
        colors={[
          "#F1FAFF",
          "#E6F5FF",
          "#DDEEFF",
        ]}
        style={styles.loading}
      >
        <MaterialIcons
          name="water-drop"
          size={55}
          color="#6575F1"
        />

        <Text style={styles.loadingText}>
          Carregando seu Gole+...
        </Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={[
        "#F1FAFF",
        "#E6F5FF",
        "#DDEEFF",
      ]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.waterFill,
            {
              height:
                pagina === "hoje"
                  ? alturaAgua
                  : "0%",
            },
          ]}
        >
          <View style={styles.waveOne} />
          <View style={styles.waveTwo} />
        </Animated.View>

        <View style={styles.header}>
          <Pressable style={styles.headerButton}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={32}
              color="#29264E"
            />
          </Pressable>

          <Text style={styles.title}>
            Gole+
          </Text>

          <Pressable
            style={styles.headerButton}
            onPress={abrirConfiguracoes}
          >
            <MaterialIcons
              name="settings"
              size={26}
              color="#29264E"
            />
          </Pressable>
        </View>

        <View style={styles.tabs}>
          <Pressable
            style={[
              styles.tab,
              pagina === "hoje" &&
                styles.activeTab,
            ]}
            onPress={() =>
              trocarPagina("hoje")
            }
          >
            <Text
              style={[
                styles.tabText,
                pagina === "hoje" &&
                  styles.activeTabText,
              ]}
            >
              Hoje
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.tab,
              pagina === "tendencias" &&
                styles.activeTab,
            ]}
            onPress={() =>
              trocarPagina("tendencias")
            }
          >
            <Text
              style={[
                styles.tabText,
                pagina === "tendencias" &&
                  styles.activeTabText,
              ]}
            >
              Tendências
            </Text>
          </Pressable>
        </View>

        <Animated.View
          style={[
            styles.slider,
            {
              transform: [
                {
                  translateX:
                    slideAnimado,
                },
              ],
            },
          ]}
        >
          <View style={styles.page}>
            <View style={styles.date}>
              <Pressable
                onPress={irParaDiaAnterior}
              >
                <MaterialIcons
                  name="chevron-left"
                  size={32}
                  color="#29264E"
                />
              </Pressable>

              <Pressable
                onPress={irParaHoje}
              >
                <Text style={styles.dateText}>
                  {ehHoje
                    ? `Hoje — ${formatarDataCompleta(
                        dataAtual
                      )}`
                    : formatarDataCompleta(
                        dataSelecionada
                      )}
                </Text>
              </Pressable>

              <Pressable
                onPress={irParaHoje}
                disabled={ehHoje}
              >
                <MaterialIcons
                  name="chevron-right"
                  size={32}
                  color={
                    ehHoje
                      ? "#C8C8D2"
                      : "#29264E"
                  }
                />
              </Pressable>
            </View>

            {!ehHoje && registro && (
              <View
                style={
                  styles.historicoBadge
                }
              >
                <MaterialIcons
                  name="lock"
                  size={16}
                  color="#6575F1"
                />

                <Text
                  style={
                    styles.historicoBadgeText
                  }
                >
                  Registro encerrado
                </Text>
              </View>
            )}

            <View style={styles.main}>
              <Text style={styles.amount}>
                {consumo.toLocaleString(
                  "pt-BR"
                )}

                <Text
                  style={styles.amountUnit}
                >
                  {" "}
                  ml
                </Text>
              </Text>

              <Text
                style={styles.percentage}
              >
                {porcentagem}%
              </Text>

              <View
                style={styles.waterScene}
              >
                <View style={styles.drop}>
                  <MaterialIcons
                    name="water-drop"
                    size={90}
                    color="#8F82E8"
                  />
                </View>

                <View
                  style={[
                    styles.spark,
                    styles.sparkOne,
                  ]}
                />

                <View
                  style={[
                    styles.spark,
                    styles.sparkTwo,
                  ]}
                />

                <View
                  style={[
                    styles.spark,
                    styles.sparkThree,
                  ]}
                />

                <View style={styles.scale}>
                  <Text style={styles.scaleText}>
                    {meta}
                  </Text>

                  <Text style={styles.scaleText}>
                    {Math.round(meta * 0.75)}
                  </Text>

                  <Text style={styles.scaleText}>
                    {Math.round(meta * 0.5)}
                  </Text>

                  <Text style={styles.scaleText}>
                    {Math.round(meta * 0.25)}
                  </Text>

                  <Text style={styles.scaleText}>
                    0
                  </Text>
                </View>
              </View>
            </View>

            {ehHoje && !metaAtingida && (
              <>
                <View
                  style={styles.waterButtons}
                >
                  <WaterAmountButton
                    quantidade={300}
                    onPress={() =>
                      adicionarAgua(300)
                    }
                  />

                  <WaterAmountButton
                    quantidade={500}
                    onPress={() =>
                      adicionarAgua(500)
                    }
                  />

                  <Pressable
                    style={({ pressed }) => [
                      styles.customButton,
                      pressed &&
                        styles.buttonPressed,
                    ]}
                    onPress={
                      abrirQuantidadePersonalizada
                    }
                  >
                    <MaterialIcons
                      name="edit"
                      size={30}
                      color="#438FE8"
                    />

                    <Text
                      style={
                        styles.customButtonText
                      }
                    >
                      Outro
                    </Text>
                  </Pressable>
                </View>

                <View
                  style={styles.bottomButtons}
                >
                  <WaterAmountButton
                    quantidade={200}
                    onPress={() =>
                      adicionarAgua(200)
                    }
                  />

                  <Pressable
                    style={({ pressed }) => [
                      styles.addButton,
                      pressed &&
                        styles.buttonPressed,
                    ]}
                    onPress={() =>
                      adicionarAgua(100)
                    }
                  >
                    <MaterialIcons
                      name="add"
                      size={44}
                      color="#438FE8"
                    />

                    <Text
                      style={styles.addText}
                    >
                      100 ml
                    </Text>
                  </Pressable>
                </View>
              </>
            )}

            {ehHoje && metaAtingida && (
              <Animated.View
                style={[
                  styles.successWrapper,
                  {
                    opacity:
                      parabensOpacity,
                    transform: [
                      {
                        scale:
                          parabensScale,
                      },
                    ],
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.successBubble,
                    styles.bubbleA,
                    {
                      transform: [
                        {
                          translateY:
                            bubbleAnimacao.interpolate(
                              {
                                inputRange: [
                                  0,
                                  1,
                                ],
                                outputRange: [
                                  30,
                                  -5,
                                ],
                              }
                            ),
                        },
                      ],
                    },
                  ]}
                />

                <Animated.View
                  style={[
                    styles.successBubble,
                    styles.bubbleB,
                    {
                      transform: [
                        {
                          translateY:
                            bubbleAnimacao.interpolate(
                              {
                                inputRange: [
                                  0,
                                  1,
                                ],
                                outputRange: [
                                  40,
                                  -15,
                                ],
                              }
                            ),
                        },
                      ],
                    },
                  ]}
                />

                <View
                  style={styles.successCard}
                >
                  <View
                    style={styles.successIcon}
                  >
                    <MaterialIcons
                      name="check"
                      size={43}
                      color="#FFFFFF"
                    />
                  </View>

                  <Text
                    style={styles.successSmall}
                  >
                    META CONCLUÍDA
                  </Text>

                  <Text
                    style={styles.successTitle}
                  >
                    PARABÉNS!
                  </Text>

                  <Text
                    style={styles.successText}
                  >
                    Você cuidou da sua
                    hidratação hoje.
                  </Text>

                  <View
                    style={styles.successLine}
                  />

                  <Text
                    style={
                      styles.successTomorrow
                    }
                  >
                    Nos vemos novamente
                    amanhã
                  </Text>
                </View>
              </Animated.View>
            )}

            {!ehHoje && registro && (
              <View
                style={
                  styles.previousDayCard
                }
              >
                <View
                  style={
                    styles.previousDayIcon
                  }
                >
                  <MaterialIcons
                    name={
                      consumo >= meta
                        ? "check"
                        : "priority-high"
                    }
                    size={32}
                    color="#FFFFFF"
                  />
                </View>

                <Text
                  style={
                    styles.previousDayTitle
                  }
                >
                  {consumo >= meta
                    ? "Meta cumprida"
                    : "Meta não cumprida"}
                </Text>

                <Text
                  style={
                    styles.previousDayText
                  }
                >
                  Você consumiu{" "}
                  <Text
                    style={styles.boldText}
                  >
                    {consumo} ml
                  </Text>{" "}
                  de{" "}
                  <Text
                    style={styles.boldText}
                  >
                    {meta} ml
                  </Text>
                  .
                </Text>

                <Text
                  style={
                    styles.previousDayLocked
                  }
                >
                  Este dia está encerrado.
                </Text>
              </View>
            )}
          </View>

          <View style={styles.page}>
            <View
              style={styles.trendsHeader}
            >
              <Text
                style={styles.trendsTitle}
              >
                Progresso dos amigos
              </Text>

              <Text
                style={styles.trendsSubtitle}
              >
                Veja como seus amigos
                estão cuidando da
                hidratação.
              </Text>
            </View>

            {amigos.length === 0 ? (
              <View
                style={styles.emptyFriends}
              >
                <View
                  style={styles.friendsIcon}
                >
                  <MaterialIcons
                    name="people"
                    size={48}
                    color="#6575F1"
                  />
                </View>

                <Text
                  style={
                    styles.emptyFriendsTitle
                  }
                >
                  Adicione amigos
                </Text>

                <Text
                  style={
                    styles.emptyFriendsText
                  }
                >
                  Adicione amigos e veja
                  o progresso deles!
                </Text>

                <Pressable
                  style={({ pressed }) => [
                    styles.addFriendButton,
                    pressed &&
                      styles.buttonPressed,
                  ]}
                  onPress={
                    adicionarAmigo
                  }
                >
                  <MaterialIcons
                    name="person-add"
                    size={21}
                    color="#FFFFFF"
                  />

                  <Text
                    style={
                      styles.addFriendText
                    }
                  >
                    Adicionar amigo
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View
                style={styles.friendList}
              >
                {amigos.map((amigo) => {
                  const progresso =
                    Math.min(
                      100,
                      Math.round(
                        (amigo.consumo /
                          amigo.meta) *
                          100
                      )
                    );

                  return (
                    <View
                      key={amigo.id}
                      style={
                        styles.friendCard
                      }
                    >
                      <View
                        style={
                          styles.friendAvatar
                        }
                      >
                        <Text
                          style={
                            styles.friendAvatarText
                          }
                        >
                          {amigo.nome
                            .charAt(0)
                            .toUpperCase()}
                        </Text>
                      </View>

                      <View
                        style={
                          styles.friendInfo
                        }
                      >
                        <Text
                          style={
                            styles.friendName
                          }
                        >
                          {amigo.nome}
                        </Text>

                        <Text
                          style={
                            styles.friendAmount
                          }
                        >
                          {amigo.consumo} /{" "}
                          {amigo.meta} ml
                        </Text>

                        <View
                          style={
                            styles.friendBar
                          }
                        >
                          <View
                            style={[
                              styles.friendProgress,
                              {
                                width:
                                  `${progresso}%`,
                              },
                            ]}
                          />
                        </View>
                      </View>

                      <Text
                        style={
                          styles.friendPercent
                        }
                      >
                        {progresso}%
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        </Animated.View>

        {mostrarQuantidadePersonalizada && (
          <View style={styles.customOverlay}>
            <BlurView
              intensity={25}
              tint="light"
              style={
                StyleSheet.absoluteFill
              }
            />

            <View
              style={
                styles.customOverlayColor
              }
            />

            <View style={styles.customCard}>
              <View
                style={styles.customIcon}
              >
                <MaterialIcons
                  name="edit"
                  size={28}
                  color="#438FE8"
                />
              </View>

              <Text
                style={styles.customTitle}
              >
                Quanto você bebeu?
              </Text>

              <Text
                style={
                  styles.customDescription
                }
              >
                Digite a quantidade de água
                que você está bebendo agora.
              </Text>

              <View
                style={
                  styles.customInputWrapper
                }
              >
                <TextInput
                  value={
                    quantidadePersonalizada
                  }
                  onChangeText={
                    setQuantidadePersonalizada
                  }
                  placeholder="Ex.: 350"
                  placeholderTextColor="#9998AA"
                  keyboardType="numeric"
                  maxLength={3}
                  autoFocus
                  style={
                    styles.customInput
                  }
                />

                <Text
                  style={
                    styles.customInputUnit
                  }
                >
                  ml
                </Text>
              </View>

              <Text
                style={styles.customLimit}
              >
                Máximo: 700 ml
              </Text>

              <View
                style={styles.customActions}
              >
                <Pressable
                  style={({ pressed }) => [
                    styles.customCancelButton,
                    pressed &&
                      styles.buttonPressed,
                  ]}
                  onPress={() => {
                    setQuantidadePersonalizada("");
                    setMostrarQuantidadePersonalizada(
                      false
                    );
                  }}
                >
                  <Text
                    style={
                      styles.customCancelText
                    }
                  >
                    Cancelar
                  </Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    styles.customConfirmButton,
                    pressed &&
                      styles.buttonPressed,
                  ]}
                  onPress={
                    confirmarQuantidadePersonalizada
                  }
                >
                  <MaterialIcons
                    name="check"
                    size={21}
                    color="#FFFFFF"
                  />

                  <Text
                    style={
                      styles.customConfirmText
                    }
                  >
                    Adicionar
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}

        {mostrarAviso && (
          <Animated.View
            style={styles.speedWarning}
          >
            <BlurView
              intensity={25}
              tint="light"
              style={
                StyleSheet.absoluteFill
              }
            />

            <View style={styles.warningIcon}>
              <MaterialIcons
                name={
                  tipoAviso === "rapido"
                    ? "speed"
                    : tipoAviso ===
                      "semRegistro"
                    ? "event-note"
                    : "water-drop"
                }
                size={26}
                color="#6575F1"
              />
            </View>

            <View
              style={styles.warningContent}
            >
              <Text
                style={styles.warningTitle}
              >
                {tipoAviso === "rapido"
                  ? "Calma aí"
                  : tipoAviso ===
                    "semRegistro"
                  ? "Sem registro"
                  : "Beba moderadamente!"}
              </Text>

              <Text
                style={styles.warningText}
              >
                {tipoAviso === "rapido"
                  ? "Você está indo rápido demais, estou de olho, viu!"
                  : tipoAviso ===
                    "semRegistro"
                  ? "Atinja metas diárias e veja seu progresso!"
                  : "Espere um pouquinho antes de registrar outro gole."}
              </Text>
            </View>
          </Animated.View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}