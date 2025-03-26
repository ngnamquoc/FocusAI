import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link, router } from 'expo-router';
import { AuthForm } from '../../src/components/auth/AuthForm';
import { useAuth } from '../../src/contexts/AuthContext';

export default function RegisterScreen() {
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (email: string, password?: string) => {
    if (!password) return;
    
    setIsLoading(true);
    setError(undefined);
    
    try {
      await signUp(email, password);
      router.replace('/(main)/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        type="register"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
      
      <View style={styles.footer}>
        <Text variant="bodyMedium">Already have an account? </Text>
        <Link href="/login" asChild>
          <Button mode="text" compact>Sign In</Button>
        </Link>
      </View>
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
}); 