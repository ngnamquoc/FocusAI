export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          updated_at: string;
          full_name: string | null;
          avatar_url: string | null;
          preferences: Json;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          preferences?: Json;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          updated_at?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          preferences?: Json;
        };
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          status: string;
          priority: number;
          due_date: string | null;
          created_at: string;
          updated_at: string;
          ai_metadata: Json;
          tags: string[] | null;
          parent_task_id: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          description?: string | null;
          status?: string;
          priority?: number;
          due_date?: string | null;
          created_at?: string;
          updated_at?: string;
          ai_metadata?: Json;
          tags?: string[] | null;
          parent_task_id?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          description?: string | null;
          status?: string;
          priority?: number;
          due_date?: string | null;
          created_at?: string;
          updated_at?: string;
          ai_metadata?: Json;
          tags?: string[] | null;
          parent_task_id?: string | null;
        };
      };
      focus_sessions: {
        Row: {
          id: string;
          user_id: string;
          task_id: string | null;
          start_time: string;
          end_time: string | null;
          duration: number | null;
          status: string;
          notes: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          task_id?: string | null;
          start_time: string;
          end_time?: string | null;
          duration?: number | null;
          status?: string;
          notes?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          task_id?: string | null;
          start_time?: string;
          end_time?: string | null;
          duration?: number | null;
          status?: string;
          notes?: string | null;
        };
      };
      ai_chat_history: {
        Row: {
          id: string;
          user_id: string;
          message: string;
          is_ai_message: boolean;
          created_at: string;
          context: Json;
        };
        Insert: {
          id?: string;
          user_id: string;
          message: string;
          is_ai_message?: boolean;
          created_at?: string;
          context?: Json;
        };
        Update: {
          id?: string;
          user_id?: string;
          message?: string;
          is_ai_message?: boolean;
          created_at?: string;
          context?: Json;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
} 