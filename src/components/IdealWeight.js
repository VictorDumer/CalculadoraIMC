import { Text, StyleSheet } from "react-native";
const IdealWeights = ({ pesoMin, pesoMax }) => {
    return (
        <Text style={Estilo.Ideal}>Seu peso ideal está entre {pesoMin.toFixed(2)}kg e {pesoMax.toFixed(2)}kg</Text>
    );
};
    const Estilo = StyleSheet.create({
        Ideal:{
        fontSize:10,
        marginTop: 5,
        textAlign: 'center',
        color: '#3235',
        letterSpacing:2,
        }
    })
    // exporta o peso ideal
export default IdealWeights;