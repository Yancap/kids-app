import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';


export default function Initializer() {
  const eduardo = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={() => { eduardo.navigate("Login" as never) }}>
        <Text style={styles.text}>
          Criança
        </Text>
      </Pressable>
      <Text style={styles.text}>
          | 
      </Text>
      <Pressable onPress={() => { eduardo.navigate("Login" as never) }}>
        <Text style={styles.text}>
          Voluntário
        </Text>
      </Pressable>
    </View>
  )
}