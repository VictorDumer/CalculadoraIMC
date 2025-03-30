import { StyleSheet, View,ScrollView } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';
import Tabela from './src/components/Tabela';
export default function App() {
  return (
    <ScrollView >

      <View style={styles.container}>
        
        <Title />
        <FormIMC />
        <Tabela />
        
  
      </View> 
      
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    height:1300,
    justifyContent: 'center',
  },
});
