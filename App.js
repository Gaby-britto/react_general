import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './MainNaviator';
import Header from './src/Components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <MainNavigator />
    </>
  );
}


