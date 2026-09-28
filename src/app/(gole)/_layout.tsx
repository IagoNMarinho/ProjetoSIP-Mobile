import { Stack } from "expo-router";

import GoleMenu from "../../components/Gole/GoleMenu";

export default function GoleLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />

      <GoleMenu />
    </>
  );
}