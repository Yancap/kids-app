import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';


export default function Initializer() {
  const {setUser} = useContext(UserContext)
  const link = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable onPress={() => { 
        setUser({type: 'criança', name: '', password: ''})
        link.navigate("Login" as never)
      }}>
        <Text style={styles.text}>
          Criança
        </Text>
      </Pressable>
      <Text style={styles.text}>
          | 
      </Text>
      <Pressable onPress={() => { 
        setUser({type: 'voluntário', name: '', password: ''})
        link.navigate("Login" as never) 
      }}>
        <Text style={styles.text}>
          Voluntário
        </Text>
      </Pressable>
    </View>
  )
}