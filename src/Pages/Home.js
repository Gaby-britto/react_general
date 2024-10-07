import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.tituloInfo}>Seja Bem-vindo</Text>
        <Text>Aqui você encontrta todas as informações que precisar!</Text>
        <Text>_____________________________________________________</Text>
        <Card
            title="SOBRE"
            content="Saiba mais sobre nós e nossos serviços."
            buttonText="Ir para Sobre"
            onPress={() => navigation.navigate('Sobre')}
        />
        <Text style={styles.tituloContato}>Para mais Informações</Text>
        <Text>Aqui você encontrta todas as informações que precisar!</Text>
        <Text>_____________________________________________________</Text>
           {/* <Button
            title="Ir para Contato"
            onPress={() => navigation.navigate('Contato')}
        /> */}
            <Card
            title="CONTATO"
            content="Para saber mais entre em contato"
            buttonText="Ir para Contato"
            onPress={() => navigation.navigate('Contato')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center"
    },
    tituloInfo: {
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 20
    },
    tituloContato: {
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20
    }
})
