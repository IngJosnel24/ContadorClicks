import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ onPress, title, color }) => (
  <TouchableOpacity onPress={onPress} style={[styles.boton, { backgroundColor: color }]}>
    <Text style={styles.botonTexto}>{title}</Text>
  </TouchableOpacity>
);

const Botones = ({ incrementar, reiniciar, decrementar }) => (
  <View style={styles.botonesContainer}>
    <Boton onPress={incrementar} title="Incrementar" color="#007BFF" />
    <Boton onPress={decrementar} title="Decrementar" color="#DC3545" />
    <Boton onPress={reiniciar} title="Reiniciar" color="#28A745" />
  </View>
);

const styles = StyleSheet.create({
  botonesContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-around',
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
});

export default Botones;
