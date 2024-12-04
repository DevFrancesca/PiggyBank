import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        }
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="savings" />
    </Stack>
  );
}
