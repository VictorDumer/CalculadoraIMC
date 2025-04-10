import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Result from "./Result";
import IdealWeights from "./IdealWeight";
import Tabela from "./Tabela";
import Classification from "./Classification";

// calculo imc
const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [pesoMin, setPesomin] = useState(null);
    const [pesoMax, setPesomax] = useState(null);
    const calcularIMC = () => {
        if (peso && altura && altura!=0 && peso!=0 && altura>0 && peso>0) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            const pesoMin= 18.5 * (alturaMetros*alturaMetros);
            const pesoMax= 24.9 * (alturaMetros*alturaMetros);
            setImc(imcCalculado); 
            setPesomax(pesoMax);
            setPesomin(pesoMin)
            //chama a função classification para fazer o alert
            Classification({ imcCalculado });
            
        } else {
            alert("Por favor, preencha peso e altura corretamente com números válidos!");
        }
        
    };
    
    return (
        <View style={Estilos.viewContainer}>
            <View style={Estilos.viewContido}>
                
                <Text style={Estilos.label}> Altura</Text>
                
                <TextInput
                    style={Estilos.input}
                    placeholder="Centimetros, ex: 160"
                    placeholderTextColor="#888888"
                    keyboardType="numeric"
                    value={altura}
                    onChangeText={setAltura}
                    cursorColor={"#8e48cf"}
                />
                <Text style={Estilos.label}> Peso</Text>
                <TextInput
                    style={Estilos.input}
                    placeholder="Kilos, ex: 50"
                    placeholderTextColor="#888888"
                    keyboardType="numeric"
                    value={peso}
                    onChangeText={setPeso}
                    cursorColor={"#8e48cf"}
                />
            </View>
            //* forma para conseguir costumizar o botão
            <TouchableOpacity style={Estilos.botao} onPress={calcularIMC}>
                <Text style={Estilos.botaoTexto}>Calcular IMC</Text>
            </TouchableOpacity>
            //* atribui e exibe o imc/ peso ideal com essa função própia do react native
            {imc && <Result imc={imc} />}
            {pesoMin && pesoMax && <IdealWeights pesoMin={pesoMin} pesoMax={pesoMax}/>}
        

        </View>
    );
};

const Estilos = StyleSheet.create({
    viewContainer: {
        marginRight:'5%',
        marginLeft:'5%',
        backgroundColor: '#fafafa',
        padding: 40,
        borderRadius: 20,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        height:650,
    },
    viewContido: {
        marginTop: '5%',
        marginBottom: '15%',
        backgroundColor: '#101010',
        padding: 30,
        borderRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    },
    label: {
        color: '#f0f0f0',
        fontSize: 25,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        color:'#fafafa',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: '10%',
        marginTop:10,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    botao:{
        alignItems:'center',
        justifyContent:'center',
        height:'15%',
        width:'100%',
        backgroundColor:'#8e48cf',
        borderRadius:15,
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',   
    },
    botaoTexto:{
        fontSize:30,
        color:'#fafafa',
        fontWeight: '800'
    }
});

export default FormIMC;

