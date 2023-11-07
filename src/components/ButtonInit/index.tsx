import { Pressable, Image} from 'react-native'
import React from 'react'

export default function ButtonInit() {
  return (
    <Pressable>
      <Image source={require("../../assets/images/home.svg")} style={{height: 22, width: 22}}/>
    </Pressable>
  )
}