import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07165F",
  },

  fundo: {
    flex: 1,
    overflow: "hidden",
  },

  conteudo: {
    paddingTop: 24,
    paddingHorizontal: 18,
    paddingBottom: 40,
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },

  iconeCabecalho: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(75, 184, 255, 0.30)",
    borderWidth: 1,
    borderColor: "rgba(160, 226, 255, 0.65)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  textosCabecalho: {
    flex: 1,
  },

  tituloPagina: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  subtituloPagina: {
    color: "#D9F5FF",
    fontSize: 13,
    marginTop: 2,
  },

  introducao: {
    marginBottom: 25,
    paddingHorizontal: 4,
  },

  tituloHero: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
    letterSpacing: 0.5,
  },

  tituloHeroDestaque: {
    color: "#A7F4FF",
    fontSize: 38,
    fontWeight: "900",
    letterSpacing: 1,
  },

  textoHero: {
    color: "#E7F9FF",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 10,
    maxWidth: 330,
  },

  statusCard: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 24,
    padding: 17,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    marginBottom: 20,
  },

  statusTituloLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  statusTitulo: {
    color: "#172D85",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 1,
  },

  statusIndicador: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  statusPonto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#52B927",
  },

  statusIndicadorTexto: {
    color: "#58648B",
    fontSize: 11,
    fontWeight: "700",
  },

  statusGrade: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  sensorCard: {
    width: (SCREEN_WIDTH - 82) / 2,
    minHeight: 112,
    borderRadius: 17,
    backgroundColor: "#1539A2",
    padding: 13,
    alignItems: "flex-start",
  },

  sensorNome: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 7,
    textTransform: "uppercase",
  },

  sensorValorLinha: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 4,
  },

  sensorValor: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
  },

  sensorUnidade: {
    color: "#D8E7FF",
    fontSize: 11,
    fontWeight: "700",
    marginLeft: 4,
  },

  resultadoWrapper: {
    marginBottom: 20,
  },

  resultadoTitulo: {
    alignSelf: "center",
    backgroundColor: "#74D420",
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: -1,
    zIndex: 2,
  },

  resultadoTituloTexto: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.6,
  },

  resultadoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    overflow: "hidden",
    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.22,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    paddingTop: 25,
    paddingBottom: 15,
  },

  segura: {
    marginHorizontal: 15,
    height: 54,
    borderRadius: 17,
    backgroundColor: "#62C91C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },

  seguraTexto: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 1,
  },

  feedbackLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 13,
  },

  rotulo: {
    color: "#68728F",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },

  potavel: {
    backgroundColor: "#62C91C",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 14,
  },

  potavelTexto: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
  },

  linhaInfo: {
    minHeight: 48,
    borderTopWidth: 1,
    borderTopColor: "#E8EBF3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },

  valorInfo: {
    color: "#18275E",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "right",
    maxWidth: "55%",
  },

  botaoDetalhes: {
    borderTopWidth: 1,
    borderTopColor: "#E8EBF3",
    marginTop: 3,
    paddingTop: 13,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  botaoDetalhesTexto: {
    color: "#263C9B",
    fontSize: 13,
    fontWeight: "800",
  },

  sensoresResultado: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 13,
    paddingHorizontal: 10,
  },

  sensorResultado: {
    width: "25%",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#E2E5EE",
  },

  sensorResultadoNome: {
    color: "#5B6685",
    fontSize: 9,
    fontWeight: "800",
    marginBottom: 4,
  },

  sensorResultadoValor: {
    color: "#18275E",
    fontSize: 15,
    fontWeight: "900",
  },

  unidadePequena: {
    fontSize: 8,
    fontWeight: "700",
  },

  acoes: {
    backgroundColor: "rgba(255,255,255,0.10)",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    marginBottom: 16,
  },

  acoesTitulo: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 4,
  },

  acoesTexto: {
    color: "#D9E9FF",
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 13,
  },

  botaoAcao: {
    minHeight: 50,
    borderRadius: 15,
    backgroundColor: "#173DAA",
    marginTop: 9,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  botaoAcaoTexto: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
    marginLeft: 10,
  },

  monitoramento: {
    minHeight: 78,
    borderRadius: 20,
    backgroundColor: "rgba(88, 198, 235, 0.25)",
    borderWidth: 1,
    borderColor: "rgba(160, 231, 255, 0.35)",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  monitoramentoIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1539A2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  monitoramentoTextoArea: {
    flex: 1,
  },

  monitoramentoTitulo: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },

  monitoramentoTexto: {
    color: "#D9EDFF",
    fontSize: 11,
    lineHeight: 15,
    marginTop: 3,
  },

  espacoFinal: {
    height: 100,
  },

  bolha: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(151, 220, 255, 0.30)",
    backgroundColor: "rgba(115, 196, 255, 0.08)",
  },

  brilhoBolha: {
    position: "absolute",
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.75)",
    top: 4,
    left: 5,
  },

peixe: {
  position: "absolute",
  width: 52,
  height: 24,
},

corpoPeixe: {
  position: "absolute",
  left: 7,
  top: 4,
  width: 32,
  height: 17,
  borderRadius: 15,
  backgroundColor: "#E6C52D",
},

caudaPeixe: {
  position: "absolute",
  left: 0,
  top: 3,
  width: 0,
  height: 0,
  borderTopWidth: 9,
  borderBottomWidth: 9,
  borderLeftWidth: 15,
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderLeftColor: "#E6C52D",
},

olhoPeixe: {
  position: "absolute",
  left: 28,
  top: 8,
  width: 3,
  height: 3,
  borderRadius: 2,
  backgroundColor: "#1B2860",
},
  ondas: {
    position: "absolute",
    left: -40,
    right: -40,
    bottom: -35,
    height: 100,
  },

  onda1: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#063AC5",
    transform: [
      {
        rotate: "-3deg",
      },
    ],
  },

  onda2: {
    position: "absolute",
    left: -30,
    right: -30,
    bottom: -10,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#08258C",
    transform: [
      {
        rotate: "2deg",
      },
    ],
  },

  onda3: {
    position: "absolute",
    left: -40,
    right: -40,
    bottom: -50,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#07165F",
  },
});