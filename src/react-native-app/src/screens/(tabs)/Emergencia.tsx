import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Datos ficticios de llamadas de emergencia
const emergencias = [
  {
    id: '1',
    tipo: 'Incendio',
    fecha: '2024-10-02',
    descripcion: 'Se reportó un incendio en una vivienda.',
    estatus: 'Atendido'
  },
  {
    id: '2',
    tipo: 'Accidente de tránsito',
    fecha: '2024-09-28',
    descripcion: 'Colisión entre dos vehículos en la carretera.',
    estatus: 'En Proceso'
  },
  {
    id: '3',
    tipo: 'Emergencia médica',
    fecha: '2024-09-20',
    descripcion: 'Persona con problemas respiratorios en el parque.',
    estatus: 'Atendido'
  },
];

// Componente para mostrar cada llamada de emergencia
const EmergenciaItem = ({ tipo, fecha, descripcion, estatus }) => (
  <View style={styles.card}>
    <Text style={styles.tipo}>{tipo}</Text>
    <Text style={styles.fecha}>{fecha}</Text>
    <Text style={styles.descripcion}>{descripcion}</Text>
    <Text style={styles.estatus(estatus)}>{estatus}</Text>
  </View>
);

// Componente principal EmergenciasScreen
export default function EmergenciasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historial de Llamadas de Emergencia</Text>
      <FlatList
        data={emergencias}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EmergenciaItem
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
  tipo: {
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
  estatus: (estatus) => ({
    fontSize: 14,
    fontWeight: 'bold',
    color:
      estatus === 'Atendido' ? '#10b981' : estatus === 'En Proceso' ? '#fbbf24' : '#ef4444',
  }),
});
