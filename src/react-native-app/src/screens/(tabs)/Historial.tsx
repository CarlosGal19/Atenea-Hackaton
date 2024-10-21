import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Datos ficticios de denuncias
const denuncias = [
  {
    id: '1',
    titulo: 'Robo de bicicleta',
    fecha: '2024-10-01',
    descripcion: 'Se reportó el robo de una bicicleta en el parque central.',
    estatus: 'Pendiente'
  },
  {
    id: '2',
    titulo: 'Vandalismo',
    fecha: '2024-09-15',
    descripcion: 'Pintura en paredes de un edificio público.',
    estatus: 'En Proceso'
  },
  {
    id: '3',
    titulo: 'Maltrato animal',
    fecha: '2024-09-10',
    descripcion: 'Denuncia sobre maltrato a un perro en el vecindario.',
    estatus: 'Resuelto'
  },
];

// Componente para mostrar cada denuncia
const DenunciaItem = ({ titulo, fecha, descripcion, estatus }) => (
  <View style={styles.card}>
    <Text style={styles.titulo}>{titulo}</Text>
    <Text style={styles.fecha}>{fecha}</Text>
    <Text style={styles.descripcion}>{descripcion}</Text>
    <Text style={getEstatusStyle(estatus)}>{estatus}</Text>
  </View>
);

// Function to get the estatus style
const getEstatusStyle = (estatus: string) => ({
  fontSize: 14,
  fontWeight: 'bold',
  color:
    estatus === 'Resuelto' ? '#10b981' : estatus === 'En Proceso' ? '#fbbf24' : '#ef4444',
});

// Componente principal HistorialScreen
export default function HistorialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historial de Denuncias</Text>
      <FlatList
        data={denuncias}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DenunciaItem
            titulo={item.titulo}
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
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  fecha: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  estatus: (estatus: string) => ({
    fontSize: 14,
    fontWeight: 'bold',
    color:
      estatus === 'Resuelto' ? '#10b981' : estatus === 'En Proceso' ? '#fbbf24' : '#ef4444',
  }),
});
