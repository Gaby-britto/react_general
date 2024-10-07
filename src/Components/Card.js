import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={style.card}>
        <Text style={style.cardTitle}>{props.title}</Text>
        <Text style={style.content}>{props.content}</Text>
        <Button 
            style={style.button}
            title={props.buttonText}
            onPress={props.onPress}
        />
    </View>
  )
}
const style = StyleSheet.create({
    card: {
        backgroundColor:'#DCDCDC',
        borderRadius: 10,
        padding: 15,
        marginTop: 12,
        elevation: 3, //Sombra para android
        shadowColor: '#00',
        shadowOpacity: 0.2,
        shadowRadius: 1.41
        },
        cardTitle:{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#00008B'
        },
        content:{
            fontSize: 14,
            marginBottom: 10
        },
        button: {
            backgroundColor: '#00008B'
        }
})