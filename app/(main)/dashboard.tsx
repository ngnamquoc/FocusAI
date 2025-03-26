import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useAuth } from '../../src/contexts/AuthContext';

export default function DashboardScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Welcome to FocusAI</Text>
      <Button mode="contained" onPress={signOut} style={styles.button}>
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20,
  },
}); 