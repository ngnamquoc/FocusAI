import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

interface AuthFormProps {
  type: 'login' | 'register' | 'forgot-password';
  onSubmit: (email: string, password?: string) => Promise<void>;
  isLoading: boolean;
  error?: string;
}

export function AuthForm({ type, onSubmit, isLoading, error }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleSubmit = async () => {
    if (type === 'register' && password !== confirmPassword) {
      return;
    }
    await onSubmit(email, type !== 'forgot-password' ? password : undefined);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {type === 'login'
          ? 'Welcome Back'
          : type === 'register'
          ? 'Create Account'
          : 'Reset Password'}
      </Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      {type !== 'forgot-password' && (
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          style={styles.input}
        />
      )}

      {type === 'register' && (
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
      )}

      {error && <HelperText type="error">{error}</HelperText>}

      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
        style={styles.button}
      >
        {type === 'login'
          ? 'Sign In'
          : type === 'register'
          ? 'Create Account'
          : 'Send Reset Link'}
      </Button>

      {type === 'forgot-password' && (
        <Button
          mode="text"
          onPress={() => onSubmit(email)}
          style={styles.button}
        >
          Back to Login
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
}); 