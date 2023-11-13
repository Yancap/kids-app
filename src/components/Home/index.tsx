import { SafeAreaView, ScrollView, Text, View, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { styles } from './styles'
import ButtonMenu from '../ButtonMenu'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../context/UserContext'

export default function Home() {
  const [menu, setMenu] = useState(false)
  const { user } = useContext(UserContext)
  const link = useNavigation()
  return (
    <>
      <ScrollView style={[styles.container, {position: 'relative'}]} >
        <Pressable onPress={() => {setMenu(true)}}>
          <Image source={require("../../assets/images/menu.png")} style={{height: 16, width: 20}}/>
        </Pressable>
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
      { menu && 
        <View style={styles.menu}>
          <Pressable style={{alignSelf: "flex-end"}}
            onPress={() => {setMenu(false)}}
          >
            <Image source={require("../../assets/images/close.png")} style={{height: 16, width: 16}}/>
          </Pressable>
          <View style={{paddingVertical: 10, gap: 10}}>
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink, styles.menuLinkActive]}>
                Inicio
              </Text>
            </Pressable>
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink]}>
                Turma
              </Text>
            </Pressable>
            {user.type === "criança" ? 
            <>
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink]}>
                Blog
              </Text>
            </Pressable>
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink]}>
                Sobre nós
              </Text>
            </Pressable>
            </>
            : 
            <>
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink]}>
                Treinamento
              </Text>
            </Pressable>
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink]}>
                Kids Squad
              </Text>
            </Pressable>
            </>
            }
            
            <Pressable style={styles.menuBtn}>
              <Text style={[styles.menuLink]}>
                Agenda
              </Text>
            </Pressable>
            
            <Pressable style={styles.menuBtn} onPress={() => link.navigate("Inicio" as never)}>
              <Text style={[styles.menuLink, styles.menuLinkActive]}>
                Sair
              </Text>
            </Pressable>
          </View>
        </View>
        }
    </>  
  )
}