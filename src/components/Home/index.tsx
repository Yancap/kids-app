import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ButtonMenu from '../ButtonMenu'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{display: "flex", gap: 16}}>
          <ButtonMenu />
          <View>
            <Text style={{color: "#846955", fontWeight: "900", fontSize: 24}}>
              FIQUE POR DENTRO DO QUE ROLOU NO KIDS ESSA SEMANA...
            </Text>
          </View>
          <View style={{alignItems: "center"}}>
            <Image source={require("../../assets/images/kids.jpg")} style={{height: 160, width: 320}}/>
          </View>
          <Text style={{color: "#846955", fontSize: 16, marginBottom: 16}}>
            Na ensolarada manhã de domingo, a sala do ministério infantil estava cheia
            de energia e risos. As crianças se reuniram em círculo enquanto a
            professora contava uma emocionante história bíblica sobre Davi e Golias.
            Os pequenos olhavam com admiração, imaginando-se como os heróis da
            história.
          </Text>
          <Text style={{color: "#846955", fontSize: 16, marginBottom: 16}}>
            Após a lição, as crianças participaram de atividades interativas, pintando
            desenhos relacionados à história e cantando músicas animadas. Todos
            estavam entusiasmados para o lanche compartilhado, onde os pais haviam
            preparado deliciosos petiscos.
          </Text>
          <Text style={{color: "#846955", fontSize: 16, marginBottom: 16}}>
            Foi uma manhã especial de aprendizado, diversão e comunhão, onde as
            crianças puderam crescer espiritualmente e fortalecer laços de amizade. O
            ministério infantil era um lugar onde a fé e a alegria floresciam, e as
            crianças saíram com os corações cheios de entusiasmo para a próxima
            semana.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}