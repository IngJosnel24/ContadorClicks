import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Contador from './Componentes/Contador';
import Botones from './Componentes/Botones';

const App = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const reiniciar = () => setContador(0);
  const decrementar = () => setContador(contador > 0 ? contador - 1 : 0);

  return (
    <View style={styles.contenedorPrincipal}>
      <View style={styles.contenedorLogo}>
        <Image
          source={require('./Imagenes/logofreeCode.png')}
          style={styles.logoImagen}
        />
      </View>
      
      <View style={styles.contenedorContador}>
        <Contador count={contador} />
        <Botones 
          incrementar={incrementar} 
          reiniciar={reiniciar} 
          decrementar={decrementar} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#282C34',
  },
  contenedorLogo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoImagen: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain',
  },
  logoTexto: {
    color: '#fff',
    fontSize: 24,
    marginTop: 10,
  },
  contenedorContador: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  botonesContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default App;
