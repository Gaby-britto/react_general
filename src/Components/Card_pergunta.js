import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card_pergunta(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{props.pergunta}</Text>
      <Text style={styles.content}>{props.resposta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    padding: 15,
    marginTop: 12,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Corrigido para cor preta
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00008B',
  },
  content: {
    fontSize: 11,
    marginBottom: 10,
  },
});
