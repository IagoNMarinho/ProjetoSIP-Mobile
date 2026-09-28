import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8F4F4",
  },

  background: {
    ...StyleSheet.absoluteFillObject,
  },

  scroll: {
    flex: 1,},

  content: {
    padding: 18,
    paddingBottom: 110,
    gap: 18,},

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 18,
  },

  logo: {
    width: 72,
    alignItems: "center",
    justifyContent: "center",
  },

  boasVindas: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 16,
    padding: 15,
  },

  tituloPrincipal: {
    fontSize: 25,
    fontWeight: "900",
    color: "#4AA9D3",
  },

  subtituloPrincipal: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
    color: "#174B7A",
  },

  estatisticas: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  cardEstatistica: {
    width: "48%",
    minHeight: 135,
    backgroundColor: "rgba(255,255,255,0.74)",
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  iconeEstatistica: {
    width: 45,
    height: 45,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  valorEstatistica: {
    fontSize: 34,
    fontWeight: "900",
    color: "#081B40",
  },

  textoEstatistica: {
    fontSize: 13,
    fontWeight: "700",
    color: "#15243C",
    textAlign: "center",
  },

  secao: {
    backgroundColor: "rgba(255,255,255,0.76)",
    borderRadius: 14,
    padding: 14,
  },

  tituloSecao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#77B8D4",
  },

  tituloSecaoTexto: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0875B7",
  },

  verTodas: {
    color: "#0875B7",
    fontSize: 13,
    fontWeight: "800",
  },

  filtro: {
    color: "#0875B7",
    fontWeight: "700",
  },

  cardAnalise: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 12,
    padding: 13,
    marginBottom: 9,
  },

  cardAnaliseTopo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardAnaliseInfo: {
    flex: 1,
    paddingRight: 8,
  },

  numeroAnalise: {
    fontSize: 18,
    fontWeight: "900",
    color: "#101827",
  },

  localAnalise: {
    marginTop: 4,
    fontSize: 13,
    color: "#172335",
  },

  dataAnalise: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  cardAnaliseBaixo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 13,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 4,
  },

  statusBolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  statusTexto: {
    fontSize: 13,
    fontWeight: "800",
  },

  detalhesBotao: {
    padding: 7,
  },

  detalhesTexto: {
    color: "#21618D",
    fontWeight: "700",
    fontSize: 13,
  },

  vazio: {
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
  },

  vazioTexto: {
    marginTop: 8,
    color: "#536A80",
    fontWeight: "600",
  },

  grafico: {
    marginTop: 5,
    padding: 10,
  },

  graficoLegenda: {
    fontSize: 12,
    color: "#52667B",
    marginBottom: 12,
  },

  graficoArea: {
    height: 190,
    position: "relative",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#9AB0C0",
  },

  linhaGrafico: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#C9D5DD",
  },

  linhaGraficoValor: {
    position: "absolute",
    height: 2,
    backgroundColor: "#2879A8",
    transformOrigin: "left center",
  },

  pontoGrafico: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#2879A8",
    marginLeft: -3,
    marginTop: -3,
  },

  diasGrafico: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },

  secaoMedias: {
    backgroundColor: "rgba(255,255,255,0.55)",
    borderRadius: 14,
    padding: 14,
  },

  mediasGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 15,
  },

  cardMedia: {
    width: "48%",
    minHeight: 155,
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  iconeMedia: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: "#1587C2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },

  valorMedia: {
    fontSize: 23,
    fontWeight: "900",
    color: "#071A3E",
    textAlign: "center",
  },

  tituloMedia: {
    marginTop: 5,
    textAlign: "center",
    color: "#17243A",
    fontSize: 12,
    fontWeight: "700",
  },

  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(13, 47, 85, 0.55)",
    justifyContent: "center",
    padding: 18,
  },

  modal: {
    maxHeight: "88%",
    backgroundColor: "#F5F8FA",
    borderRadius: 20,
    overflow: "hidden",
  },

  modalCabecalho: {
    padding: 20,
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: "900",
    color: "#07326C",
  },

  modalConteudo: {
    padding: 18,
  },

  modalAnalise: {
    fontSize: 21,
    fontWeight: "900",
    color: "#07326C",
    marginBottom: 15,
  },

  detalhesBox: {
    backgroundColor: "#EDF3F7",
    borderRadius: 14,
    padding: 15,
  },

  detalhe: {
    fontSize: 14,
    color: "#12355C",
    marginBottom: 9,
  },

  negrito: {
    fontWeight: "900",
  },

  resultados: {
    marginTop: 10,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#D0DCE4",
  },

  resultadosTitulo: {
    fontSize: 15,
    fontWeight: "900",
    color: "#12355C",
    marginBottom: 10,
  },

  sensorResultado: {
    fontSize: 14,
    color: "#173A60",
    marginBottom: 7,
  },

  botaoFechar: {
    alignSelf: "flex-end",
    margin: 15,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#073C83",
    borderRadius: 10,
  },

  botaoFecharTexto: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  listaTodas: {
    maxHeight: 500,
  },

  listaTodasConteudo: {
    padding: 15,
    gap: 10,
  },

  cardTodas: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#B8EAF1",
    borderRadius: 13,
    padding: 14,
  },

  cardTodasTexto: {
    flex: 1,
    paddingRight: 8,
  },

  cardTodasTitulo: {
    fontSize: 15,
    fontWeight: "900",
    color: "#07326C",
  },

  cardTodasLocal: {
    marginTop: 5,
    fontSize: 13,
    color: "#12355C",
  },

  cardTodasData: {
    marginTop: 3,
    fontSize: 12,
    color: "#234C6D",
  },
});