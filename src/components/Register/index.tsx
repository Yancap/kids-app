import { View, Text, SafeAreaView, TextInput, Button, ScrollView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import {Asset, ImagePickerResponse, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ButtonInit from '../ButtonInit';


export default function Register() {
  const [image, setImage] = useState<Asset | undefined>()
  async function handleTakeImage() {
    const image = await launchImageLibrary({
      mediaType: "photo",

    })
    if(image && image.assets && image.assets[0]) setImage(image?.assets[0])
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ButtonInit />
        <Text style={styles.title}>
          Cadastro Kids
        </Text>
        <View style={styles.containerRegister}>
          
          <View style={styles.inputControl}>
            <TextInput style={styles.input} placeholder="Nome da criança"/>
          </View>

          <View style={styles.inputControl}>
            <TextInput style={styles.input} textContentType="password"  placeholder="Senha"/>
          </View>

          <View style={styles.inputControl}>
            <TextInput style={styles.input} placeholder="Data de nascimento" textContentType='telephoneNumber'/>
          </View>
          <View style={styles.inputControl}>
            <TextInput style={styles.input} placeholder="Possui alguma alergia? se sim, qual?"/>
          </View>
          <View style={styles.inputControl}>
            <TextInput style={styles.input} placeholder="Possui alguma necessidade especifica"/>
          </View>

          <View style={styles.formControl}>
            <View style={styles.inputControl}>
              <TextInput style={styles.input} placeholder="Nome do pai"/>
            </View>
            <View style={styles.inputControl}>
              <TextInput style={styles.input} placeholder="Celular" textContentType='telephoneNumber' keyboardType='numeric'/>
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.inputControl}>
              <TextInput style={styles.input} placeholder="Nome da mãe"/>
            </View>
            <View style={styles.inputControl}>
              <TextInput style={styles.input} placeholder="Celular" textContentType='telephoneNumber' keyboardType='numeric'/>
            </View>
          </View>
          <View style={[styles.inputControl, styles.photoInput]}>
            <Pressable style={[styles.input, {justifyContent: "center", alignItems: "center", overflow: "hidden"}]} onPress={handleTakeImage}>
              {
                image ? 
                <Image source={{uri: image.uri as string ?? ""}} style={[styles.photo, {height: image.height, width: image.width}]}/> 
                : "Foto"
              }
            </Pressable>
          </View>
          <Button title='Enviar' color="#846955"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}