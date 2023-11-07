import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ButtonInit from '../ButtonInit'

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignSelf: "flex-start"}}>
        <ButtonInit  />
      </View>
        <Text style={styles.title}>
          Criança
        </Text>
        <View style={styles.inputControl}>
          <Text style={styles.label}>
            Login
          </Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.inputControl}>
          <Text style={styles.label}>
            Senha
          </Text>
          <TextInput style={styles.input} textContentType="password"/>
        </View>
        <Text style={styles.register}>
          Fazer cadastro
        </Text>
    </SafeAreaView>
  )
}