import { Pressable, Image } from 'react-native'
import React from 'react'

export default function ButtonMenu() {
  return (
    <Pressable>
      <Image source={require("../../assets/images/menu.svg")} style={{height: 22, width: 22}}/>
    </Pressable>
  )
}