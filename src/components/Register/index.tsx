import { View, Text, TextInput, Button, ScrollView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import{ImagePickerAsset, launchImageLibraryAsync, MediaTypeOptions} from 'expo-image-picker';
import ButtonInit from '../ButtonInit';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
  const [image, setImage] = useState<ImagePickerAsset>()
  const link = useNavigation()
  async function handleTakeImage() {
    
    try {
      const image = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      if(image && image.assets && image.assets[0]) setImage(image?.assets[0])
    } catch (error) {
      console.warn(error)
    }
    
  }
  return (
    
      <ScrollView style={styles.container}>
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
          <View style={[styles.inputControl]}>
            <Pressable style={[styles.input, {justifyContent: "center", alignItems: "center", overflow: "hidden", height: image?.height ?? 160, marginBottom: 8}]} 
              onPress={handleTakeImage}
            >
              {
                image ? 
                <Image source={{uri: image.uri as string ?? ""}} style={[styles.photo, {height: image.height, width: image.width}]}/> 
                : <Text>Foto</Text>
              }
            </Pressable>
          </View>
          <Button title='Enviar' color="#846955" onPress={() => { link.navigate("Login" as never)}}/>
        </View>
      </ScrollView>
  )
}