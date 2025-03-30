import React from "react";
import { imcCalculado} from "./FormIMC";
    const Classification = ({imcCalculado}) =>{
        if(imcCalculado<18.5){
            alert(`Seu imc:${imcCalculado}, é considerado como Abaixo do peso`)
        }else if(imcCalculado>18.5 && imcCalculado<24.9){
            alert(`Seu imc:${imcCalculado}, é considerado um peso normal, parabéns!`)
        }else if(imcCalculado>25 && imcCalculado<29.9){
            alert(`Seu imc:${imcCalculado}, é considerado como Sobrepeso, começe a prestar mais atenção.`)
        }else if(imcCalculado>30 && imcCalculado<34.9){
            alert(`Seu imc:${imcCalculado}, é considerado como Obesidade de grau 1.`)
        }else if(imcCalculado>35 && imcCalculado<39.9){
            alert(`Seu imc:${imcCalculado}, é considerado como Obesidade de grau 2`)
        }else if(imcCalculado>=40){
            alert(`Seu imc:${imcCalculado}, é considerado como Obesidade de grau 3, Obesidade mórbida`)
        }
    }
export default Classification;