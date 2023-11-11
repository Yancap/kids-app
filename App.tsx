import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import Initializer from './src/components/Initializer';
import Login from './src/components/Login';
import Register from './src/components/Register';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Initializer} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
    
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
