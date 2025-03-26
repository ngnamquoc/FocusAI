import { Stack } from 'expo-router';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { AuthProvider } from '../src/contexts/AuthContext';

export default function RootLayout() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </AuthProvider>
    </PaperProvider>
  );
} 