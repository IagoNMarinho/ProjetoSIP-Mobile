import { AlfaSlabOne_400Regular } from "@expo-google-fonts/alfa-slab-one";
import { Bungee_400Regular } from "@expo-google-fonts/bungee";
import {
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import { Limelight_400Regular } from "@expo-google-fonts/limelight";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { AutenticacaoProvider } from "@/app/context/AutenticacaoContexto";

export default function Layout() {
  const [fontesCarregadas] = useFonts({
    Lexend: Lexend_400Regular,
    Lexend_500: Lexend_500Medium,
    Lexend_600: Lexend_600SemiBold,
    Lexend_700: Lexend_700Bold,
    Limelight: Limelight_400Regular,
    "Alfa Slab One": AlfaSlabOne_400Regular,
    Bungee: Bungee_400Regular,
  });

  if (!fontesCarregadas) {
    return null;
  }

  return (
    <AutenticacaoProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />

        <Stack.Screen name="cadastro/index" />
      </Stack>
    </AutenticacaoProvider>
  );
}