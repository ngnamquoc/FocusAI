import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { AuthForm } from '../../src/components/auth/AuthForm';
import { useAuth } from '../../src/contexts/AuthContext';

export default function ForgotPasswordScreen() {
  const { resetPassword } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (email: string) => {
    setIsLoading(true);
    setError(undefined);
    setSuccess(false);
    
    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        type="forgot-password"
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
      
      {success && (
        <Text style={styles.success}>
          Password reset instructions have been sent to your email.
        </Text>
      )}
      
      <View style={styles.footer}>
        <Text variant="bodyMedium">Remember your password? </Text>
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
  success: {
    marginTop: 16,
    textAlign: 'center',
  },
}); 