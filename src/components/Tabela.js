import React from "react";
import { View, StyleSheet,Text,  } from "react-native";

const Tabela = () =>{
    return(
    <View style={Estilos.t_container}>
        //* Container*/
        <View style={Estilos.table}>
            //*  Cabeçario table
            <View style={Estilos.table_head}>
                //* Linha table
                <View style={Estilos.t_width}> 
                    <Text style={Estilos.texto}>Classificação imc's</Text>
                </View>
            </View>
            
            //*  Table Body   
            <View style={Estilos.tableBody}>
                //* Linhas unicas
                <View style={Estilos.t_width}> 
                    <Text style={Estilos.textoInfo}> * Menor que 18.5: Abaixo do peso </Text>
                </View>
            </View>
            <View style={Estilos.tableBody}>
                <View style={Estilos.t_width}> 
                    <Text style={Estilos.textoInfo}>* Entre 18.5 e 24.9: Peso normal</Text>
                </View>
            </View>
            <View style={Estilos.tableBody}>
                <View style={Estilos.t_width}> 
                    <Text style={Estilos.textoInfo}>* Entre 25 e 29.9: Sobrepeso</Text>
                </View>
            </View>
            <View style={Estilos.tableBody}>

                <View style={Estilos.t_width}> 
                    <Text style={Estilos.textoInfo}>* Entre 30 e 34.9: Obesidade de grau 1</Text>
                </View>
            </View>
            <View style={Estilos.tableBody}>

                <View style={Estilos.t_width}> 
                    <Text style={Estilos.textoInfo}>* Entre 35 e 39.9: Obesidade de grau 2</Text>
                </View>
            </View>
            <View style={Estilos.tableBody}>

                <View style={Estilos.t_width}> 
                    <Text style={Estilos.textoInfo}>* Maior ou igual a 40: Obesidade de grau 3 (mórbida)</Text>
                </View>
            </View>
        </View>
        </View>
    
    );
};

    const Estilos= StyleSheet.create({
        t_container:{
            justifyContent:'center',
            alignItems:'center',
            flex:1,
            
        },
        table:{
            margin:15,
            borderColor:'#101010',
            borderWidth:1,
        },
        table_head:{
            flexDirection:'row',
            backgroundColor:'#101010',
            padding:10,
        },
        t_width:{
            width:'100%',
        },
        texto:{
            marginLeft:10,
            color:'#f0f0f0',
            fontWeight:'bold',
            letterSpacing:2,
        },
        tableBody:{
            backgroundColor:'#f0f0f0',
            padding:10,
            
        },
        textoInfo:{
            marginLeft:10,
            fontSize: 11,
            color:'#8e48cf',
        }
        
    })

    export default Tabela;