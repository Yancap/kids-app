import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import Initializer from './src/components/Initializer';
import Login from './src/components/Login';
import Register from './src/components/Register';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Initializer /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
