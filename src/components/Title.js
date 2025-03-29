import { Text, StyleSheet } from "react-native";
const Title = () => {
    return (
    <Text style={Estilos.title}> Calculadora de IMC</Text>
    
    );
    };

    const Estilos = StyleSheet.create({
        title: {
        height:50,
        fontSize: 35,
        color:'#8e48cf',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: "15%",
        },
        });
    
export default Title;