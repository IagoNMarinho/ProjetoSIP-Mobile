import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scroll: {
    paddingTop: 20,
    paddingBottom: 110,
  },

  menuTopo: {
    marginHorizontal: 16,
    marginBottom: 22,
    padding: 6,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.78)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 8,
    shadowColor: "#174B91",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  menuItem: {
    flex: 1,
    minHeight: 46,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },

  menuItemAtivo: {
    backgroundColor: "#4268D9",
  },

  menuTexto: {
    color: "#164B91",
    fontSize: 11,
    fontWeight: "800",
  },

  menuTextoAtivo: {
    color: "#FFFFFF",
  },

  heroProjeto: {
    marginHorizontal: 16,
    marginBottom: 30,
    padding: 22,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    flexDirection: "row",
    alignItems: "center",
  },

  heroTexto: {
    flex: 1,
    paddingRight: 12,
  },

  tag: {
    color: "#E9FFFF",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 7,
  },

  tituloGrande: {
    color: "#FFFFFF",
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "900",
    marginBottom: 12,
  },

  textoHero: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },

  logoContainer: {
    width: 92,
    alignItems: "center",
    justifyContent: "center",
  },

  logoCirculo: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "rgba(255,255,255,0.22)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },

  logoTexto: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 5,
  },

  tituloSecao: {
    marginHorizontal: 20,
    marginBottom: 15,
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 1,
  },

  servicoCard: {
    marginHorizontal: 16,
    marginBottom: 15,
    padding: 21,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.19)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.34)",
    elevation: 5,
  },

  iconeCard: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(42,105,210,0.85)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
  },

  cardTitulo: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginBottom: 8,
  },

  cardTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },

  equipeContainer: {
    marginTop: 18,
    paddingTop: 25,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },

  tituloSecaoEscuro: {
    color: "#164B91",
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
  },

  subtituloEquipe: {
    color: "#164B91",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 18,
    fontWeight: "600",
  },

  equipeCard: {
    backgroundColor: "rgba(255,255,255,0.88)",
    borderRadius: 27,
    padding: 22,
    marginBottom: 15,
    alignItems: "center",
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#5B82E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  nomePessoa: {
    color: "#164B91",
    fontSize: 20,
    fontWeight: "900",
  },

  funcaoPessoa: {
    color: "#4380B5",
    fontSize: 12,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 13,
  },

  bioPessoa: {
    color: "#355D7E",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
  },

  metodologiaHeader: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  tituloMetodologia: {
    color: "#073A8B",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
  },

  subtituloMetodologia: {
    color: "#073A8B",
    fontSize: 17,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 5,
  },

  metodologiaCard: {
    marginHorizontal: 14,
    marginBottom: 18,
    padding: 18,
    borderRadius: 25,
    backgroundColor: "rgba(220,248,250,0.88)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
  },

  metodologiaTituloLinha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 14,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#174B91",
  },

  metodologiaTitulo: {
    color: "#073A8B",
    fontSize: 25,
    fontWeight: "900",
  },

  metodologiaSubtitulo: {
    color: "#164B91",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 1,
  },

  metodologiaTexto: {
    color: "#143C64",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 13,
    fontWeight: "500",
  },

  nivelCard: {
    minHeight: 72,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.62)",
    marginTop: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  nivelBolinha: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 11,
  },

  nivelCritico: {
    backgroundColor: "#E54817",
  },

  nivelAtencao: {
    backgroundColor: "#F2A300",
  },

  nivelIdeal: {
    backgroundColor: "#39A900",
  },

  nivelBoa: {
    backgroundColor: "#E2C500",
  },

  nivelConteudo: {
    flex: 1,
  },

  nivelTitulo: {
    color: "#073A8B",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 3,
  },

  nivelDescricao: {
    color: "#163B5C",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
  },

  influenciaCard: {
    backgroundColor: "#3879D5",
    borderRadius: 20,
    padding: 16,
    marginTop: 10,
  },

  influenciaTitulo: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 8,
    marginBottom: 5,
  },

  influenciaTexto: {
    color: "#FFFFFF",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "600",
  },

  contatoHeader: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 22,
  },

  tituloContato: {
    color: "#06418E",
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
  },

  subtituloContato: {
    color: "#06418E",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 5,
  },

  formCard: {
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.84)",
    marginBottom: 16,
  },

  labelInput: {
    color: "#164B91",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 7,
    marginTop: 4,
  },

  input: {
    height: 48,
    backgroundColor: "#B8ECF4",
    borderRadius: 14,
    paddingHorizontal: 14,
    color: "#164B91",
    fontSize: 14,
    marginBottom: 13,
  },

  textarea: {
    minHeight: 145,
    backgroundColor: "#B8ECF4",
    borderRadius: 14,
    padding: 14,
    color: "#164B91",
    fontSize: 14,
    marginBottom: 13,
  },

  botaoEnviar: {
    minHeight: 48,
    borderRadius: 18,
    backgroundColor: "#147EB9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  textoBotaoEnviar: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },

  mascoteCard: {
    marginHorizontal: 15,
    marginBottom: 16,
    minHeight: 245,
    borderRadius: 25,
    backgroundColor: "rgba(49,119,222,0.85)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  mascoteCirculo: {
    width: 125,
    height: 125,
    borderRadius: 63,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  mascoteTitulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
  },

  mascoteTexto: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 4,
  },

  contatoCard: {
    marginHorizontal: 15,
    marginBottom: 14,
    padding: 22,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.88)",
    alignItems: "center",
  },

  contatoTitulo: {
    color: "#164B91",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 9,
  },

  contatoValor: {
    color: "#0866A4",
    fontSize: 17,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 5,
  },

  contatoDescricao: {
    color: "#557B9C",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 7,
  },

  voltarSite: {
    alignSelf: "center",
    marginTop: 8,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "#315FCF",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  voltarSiteTexto: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 13,
  },
});