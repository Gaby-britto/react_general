import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card_pergunta from "../Components/Card_pergunta";
import axios from "axios";

export default function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);

  const listPerguntas = () => {
    axios
      .get("https://10.0.2.2:3000/faq")
      .then((response) => {
        setPerguntas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar perguntas", error);
      });
  }

  useEffect(() => {
    listPerguntas();
  }, []);

  return (
    <View>
      <Text>Perguntas Frequentes</Text>
      {perguntas.length > 0 ? (
        perguntas.map((pergunta, index) => (
          <View>
            <Card_pergunta
             pergunta={pergunta.pergunta}
            resposta={pergunta.resposta} 
            />
          </View>
        ))
      ) : (
        <Text style={styles.noPerguntas}>Nenhuma pergunta disponível</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noPerguntas: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
});
