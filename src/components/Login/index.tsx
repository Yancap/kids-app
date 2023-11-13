import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles'
import ButtonInit from '../ButtonInit'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../context/UserContext'

export default function Login() {
  const link = useNavigation()
  const {user} = useContext(UserContext)
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: "flex-start"}}>
        <ButtonInit  />
      </View>
        <Text style={styles.title}>
          {user.type}
        </Text>
        <View style={styles.inputControl}>
          <Text style={styles.label}>
            Login
          </Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={[styles.inputControl, {marginBottom: 16}]}>
          <Text style={styles.label}>
            Senha
          </Text>
          <TextInput style={styles.input} textContentType="password"/>
        </View>
        <Button title='Enviar' color="#846955" onPress={() => link.navigate("Home" as never)}/>
        {user.type === "criança" && 
        <Text style={styles.register} onPress={() => link.navigate("Cadastro" as never)}>
          Fazer cadastro
        </Text>
        }
    </SafeAreaView>
  )
}