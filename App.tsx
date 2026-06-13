import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoList from './src/pages/TodoList';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </>
  );
}

function AppContent() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <TodoList />
    </SafeAreaView>
  );
}

export default App;
