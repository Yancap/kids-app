import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Initializer from './src/components/Initializer';
import Login from './src/components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Initializer /> */}
      <Login />
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
