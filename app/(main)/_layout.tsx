import { Stack } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function MainLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.onPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
        }}
      />
    </Stack>
  );
} 