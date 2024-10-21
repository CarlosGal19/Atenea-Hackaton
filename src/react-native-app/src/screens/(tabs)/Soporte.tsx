import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Datos ficticios de solicitudes de soporte
const soporte = [
  {
    id: '1',
    tipo: 'Problema de inicio de sesión',
    fecha: '2024-10-03',
    descripcion: 'Usuario no puede iniciar sesión en la aplicación.',
    estatus: 'Resuelto',
  },
  {
    id: '2',
    tipo: 'Error en la página',
    fecha: '2024-09-30',
    descripcion: 'Se presenta un error 404 en la página de perfil.',
    estatus: 'En Proceso',
  },
  {
    id: '3',
    tipo: 'Consulta sobre la funcionalidad',
    fecha: '2024-09-25',
    descripcion: 'Pregunta sobre cómo usar la función de búsqueda.',
    estatus: 'Resuelto',
  },
];

// Componente para mostrar cada solicitud de soporte
const SoporteItem = ({ tipo, fecha, descripcion, estatus }) => (
  <View style={styles.card}>
    <View style={styles.headerContainer}>
      <Text style={styles.tipo}>{tipo}</Text>
      <Text style={styles.fecha}>{fecha}</Text>
    </View>
    <Text style={styles.descripcion}>{descripcion}</Text>
    <Text style={styles.estatus(estatus)}>{estatus}</Text>
  </View>
);

// Componente principal SoporteScreen
export default function SoporteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Solicitudes de Soporte</Text>
      <FlatList
        data={soporte}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SoporteItem
            tipo={item.tipo}
            fecha={item.fecha}
            descripcion={item.descripcion}
            estatus={item.estatus}
          />
        )}
      />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tipo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  fecha: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  descripcion: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
  },
  estatus: (estatus) => ({
    fontSize: 14,
    fontWeight: '600',
    color:
      estatus === 'Resuelto'
        ? '#27ae60'
        : estatus === 'En Proceso'
        ? '#f39c12'
        : '#c0392b',
  }),
});
