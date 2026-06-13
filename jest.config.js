module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@reduxjs|redux-persist|immer|expo|@expo|expo-.*|nativewind|react-native-uuid|react-redux)/)',
  ],
};
