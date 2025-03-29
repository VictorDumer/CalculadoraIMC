import React from "react";
import { Text, StyleSheet } from "react-native";
const Result = ({ imc }) => {
  return <Text style={Estilos.result}>Seu IMC é: {imc}</Text>;
};

const Estilos = StyleSheet.create({
    result: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: '#333',
    letterSpacing:5,
    },
    });
    export default Result;


