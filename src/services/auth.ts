import { supabase } from '../lib/supabase/client';
import { AuthError } from '@supabase/supabase-js';

export interface AuthResponse {
  success: boolean;
  error?: AuthError | null;
  user?: any;
}

export const authService = {
  async signUp(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      return {
        success: !error,
        error,
        user: data.user,
      };
    } catch (error) {
      return {
        success: false,
        error: error as AuthError,
      };
    }
  },

  async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return {
        success: !error,
        error,
        user: data.user,
      };
    } catch (error) {
      return {
        success: false,
        error: error as AuthError,
      };
    }
  },

  async signOut(): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.signOut();
      return {
        success: !error,
        error,
      };
    } catch (error) {
      return {
        success: false,
        error: error as AuthError,
      };
    }
  },

  async resetPassword(email: string): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      return {
        success: !error,
        error,
      };
    } catch (error) {
      return {
        success: false,
        error: error as AuthError,
      };
    }
  },

  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      return {
        success: !error,
        error,
        user,
      };
    } catch (error) {
      return {
        success: false,
        error: error as AuthError,
      };
    }
  },
}; 