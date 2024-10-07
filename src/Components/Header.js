import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={estillos.topo}>
        <Text style={estillos.tituloHeader}>Infome Aqui</Text>
    </View>
  )
}

const estillos = StyleSheet.create({
    topo: {
      width: "100%",
      height: 120,
      backgroundColor: "#00008B"
    },
    tituloHeader: {
        width: "100%",
        textAlign: "center",
        color: "white",
        paddingTop: 60,
        fontWeight: "bold",
        fontSize: 20
    }
  })
