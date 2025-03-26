# FocusAI - AI-Powered Productivity App

FocusAI is a modern productivity application designed to enhance user focus and task management through AI assistance. The app combines intelligent task prioritization, structured focus sessions, and seamless progress tracking to help users achieve more in less time.

## Features

### 🤖 AI-Powered Task Management
- **Smart Prioritization**: AI automatically analyzes and ranks tasks based on urgency, importance, and deadlines
- **AI Chat Interface**: Natural conversation for task organization and refinement
- **Intelligent Suggestions**: Get personalized task recommendations based on workload and deadlines

### 🎯 Focus Mode
- **Distraction Blocking**: Temporarily block notifications during focus sessions
- **Customizable Timers**: Flexible session lengths (e.g., Pomodoro technique)
- **Progress Tracking**: Monitor time spent and task completion

### 📱 User Experience
- **Clean Interface**: Minimalistic design for reduced cognitive load
- **Quick Actions**: Rapid task addition and management
- **Intuitive Navigation**: Easy access to all features

## Tech Stack

- **Frontend**: React Native with TypeScript, Expo, and Expo Router
- **Backend/Database**: Supabase
- **UI Framework**: React Native Paper
- **AI Processing**: Google Gemini

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Supabase account
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ngnamquoc/FocusAI.git
cd FocusAI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npx expo start --dev-client
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Supabase](https://supabase.com/)
- [Google Gemini](https://ai.google.dev/)
