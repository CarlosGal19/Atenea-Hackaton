import React from 'react';
import { View, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native';

export default function Banner() {
  const { width } = useWindowDimensions(); // Obtener el ancho del dispositivo

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <ImageBackground
        source={require('../../../assets/fotoApp.jpeg')}
        style={[styles.image, { width }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150, // Puedes ajustar la altura aquí o hacerlo dinámico
    resizeMode: 'cover', // O 'cover' dependiendo de lo que necesites
  },
});
