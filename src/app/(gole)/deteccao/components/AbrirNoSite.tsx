import { Alert, Linking } from "react-native";

const SITE_URL = "http://localhost:5173/detectar";

type Props = {
  titulo: string;
  mensagem: string;
};

export function AbrirNoSite({
  titulo,
  mensagem,
}: Props) {
  Alert.alert(
    titulo,
    mensagem,
    [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sair do app",
        onPress: () => {
          Linking.openURL(SITE_URL);
        },
      },
    ],
  );
}