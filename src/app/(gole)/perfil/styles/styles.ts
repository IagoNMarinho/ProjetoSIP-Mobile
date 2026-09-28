import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scroll: {
    padding: 16,
    paddingTop: 20,
    paddingBottom: 110,
  },

  carregando: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  carregandoTexto: {
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  perfilCard: {
    backgroundColor: "#F8FDFF",
    borderRadius: 28,
    overflow: "hidden",
    elevation: 12,
    shadowColor: "#244C7E",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },

  banner: {
    height: 185,
    overflow: "hidden",
    backgroundColor: "#426DDC",
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 24,
  },

  bannerTexto: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 2,
  },

  bolha1: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(112,225,243,0.35)",
    right: -55,
    top: -70,
  },

  bolha2: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255,255,255,0.10)",
    left: -65,
    bottom: -70,
  },

  bolha3: {
    position: "absolute",
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: "rgba(112,225,243,0.28)",
    right: 35,
    bottom: 25,
  },

  avatarContainer: {
    position: "absolute",
    top: 103,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },

  avatar: {
    width: 145,
    height: 145,
    borderRadius: 73,
    borderWidth: 7,
    borderColor: "#F8FDFF",
    backgroundColor: "#7194E9",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    elevation: 12,
    shadowColor: "#244C7E",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },

  avatarImagem: {
    width: "100%",
    height: "100%",
  },

  botaoFoto: {
    position: "absolute",
    right: "28%",
    bottom: 3,
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#5275E5",
    borderWidth: 3,
    borderColor: "#F8FDFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },

  infoPerfil: {
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 82,
    paddingBottom: 27,
  },

  nome: {
    color: "#274A92",
    fontSize: 29,
    fontWeight: "900",
    textAlign: "center",
  },

  username: {
    color: "#4E82C4",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 4,
  },

  email: {
    color: "#7190AA",
    fontSize: 12,
    marginTop: 3,
  },

  level: {
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 22,
    backgroundColor: "#CDEFF5",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  levelTexto: {
    color: "#315DBD",
    fontSize: 12,
    fontWeight: "900",
  },

  bio: {
    color: "#42617E",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 15,
    maxWidth: 330,
  },

  stats: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
    marginTop: 25,
  },

  stat: {
    width: "48%",
    minHeight: 82,
    borderRadius: 18,
    backgroundColor: "rgba(102,181,222,0.10)",
    borderWidth: 1,
    borderColor: "rgba(90,150,205,0.20)",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  statValor: {
    color: "#4675D8",
    fontSize: 23,
    fontWeight: "900",
  },

  statTexto: {
    color: "#48657F",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 4,
  },

  botaoEditar: {
    width: "100%",
    height: 52,
    marginTop: 22,
    borderRadius: 17,
    backgroundColor: "#5073E3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    elevation: 5,
  },

  botaoEditarTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },

  card: {
    marginTop: 16,
    padding: 20,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.86)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.75)",
    elevation: 7,
    shadowColor: "#244C7E",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  tituloCardLinha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },

  iconeTitulo: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#5275E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  tituloCard: {
    color: "#274A92",
    fontSize: 20,
    fontWeight: "900",
  },

  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },

  badge: {
    minHeight: 43,
    paddingLeft: 8,
    paddingRight: 13,
    borderRadius: 16,
    backgroundColor: "#D5F1F5",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
  },

  badgeIcone: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#5C81E3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },

  badgeTexto: {
    color: "#315A99",
    fontSize: 11,
    fontWeight: "800",
  },

  atividade: {
    minHeight: 57,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E3EDF4",
  },

  atividadeIcone: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#6688E3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  atividadeTexto: {
    flex: 1,
    color: "#42617E",
    fontSize: 13,
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(20,45,80,0.45)",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
  },

  modal: {
    width: "100%",
    maxWidth: 430,
    maxHeight: "90%",
    backgroundColor: "#F8FDFF",
    borderRadius: 27,
    padding: 22,
    elevation: 20,
  },

  modalTituloLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  modalIcone: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#5275E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  modalTitulo: {
    color: "#274A92",
    fontSize: 22,
    fontWeight: "900",
  },

  label: {
    color: "#315A89",
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 7,
    marginTop: 5,
  },

  input: {
    height: 48,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#C8E2EC",
    backgroundColor: "#F1FAFC",
    paddingHorizontal: 14,
    color: "#274A92",
    fontSize: 14,
    marginBottom: 9,
  },

  inputBio: {
    height: 115,
    paddingTop: 13,
    marginBottom: 5,
  },

  bioLabelLinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contador: {
    color: "#7892B2",
    fontSize: 11,
    marginBottom: 7,
  },

  botoesModal: {
    flexDirection: "row",
    gap: 10,
    marginTop: 17,
  },

  botaoSalvar: {
    flex: 1,
    height: 49,
    borderRadius: 15,
    backgroundColor: "#5275E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  botaoSalvarTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },

  botaoCancelar: {
    flex: 1,
    height: 49,
    borderRadius: 15,
    backgroundColor: "#E6F1F5",
    alignItems: "center",
    justifyContent: "center",
  },

  botaoCancelarTexto: {
    color: "#47719A",
    fontSize: 14,
    fontWeight: "900",
  },
});