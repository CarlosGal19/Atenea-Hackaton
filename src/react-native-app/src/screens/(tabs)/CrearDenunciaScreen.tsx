import { useAuth, useCandidActor } from "@bundly/ares-react";
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { CandidActors } from "../../canisters";
import { useState } from "react";
import { useRouter } from "expo-router";

type Denuncia = {
    id: any;
    denunciante: Denunciante;
    denunciado: Denunciado;
    entidad: string;
    municipio: string;
    bienJuridicoAfectado: string;
    tipoDelito: string;
    subtipo: string;
    hora: string;
    descripcion: string;
    status: string;
};

type Denunciante = {
    id: any;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    calle: string;
    numero: string;
    colonia: string;
    municipio: string;
    estado: string;
    telefono: string;
    email: string;
};

type Denunciado = {
    id: any;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    calle: string;
    numero: string;
    colonia: string;
    municipio: string;
    estado: string;
    telefono: string;
};
function CrearDenunciaScreen() {

    const router = useRouter();

    const [denunciaData, setDenunciaData] = useState({} as Denuncia);
    const [denuncianteData, setDenuncianteData] = useState({} as Denunciante);
    const [denunciadoData, setDenunciadoData] = useState({} as Denunciado);

    const { currentIdentity } = useAuth();

    const backend = useCandidActor<CandidActors>("backend", currentIdentity) as CandidActors["backend"];

    const handleChangeText = (field, value, setState) => {
        setState(prevState => ({ ...prevState, [field]: value }));
    };

    async function handlePress() {
        try {
            const newDenunciante = { ...denuncianteData, id: Date.now() + 1 };
            const newDenunciado = { ...denunciadoData, id: Date.now() + 2 };
            const newDenuncia: Denuncia = {
                ...denunciaData,
                id: Date.now(),
                denunciante: newDenunciante,
                denunciado: newDenunciado,
                status: 'Pendiente',
                hora: "09:15"
            };

            setDenuncianteData(newDenunciante);
            setDenunciadoData(newDenunciado);
            setDenunciaData(newDenuncia);


            const result = await backend.addDenuncia(newDenuncia);
            Alert.alert('Reporte enviada correctamente','Generando qr...');
            router.push('qrcode');
            console.log(result);

        } catch (error) {
            Alert.alert('Error al enviar la reporte', error.message);
        }
    }

    return (
        <SafeAreaView style={styles.view}>
            <ScrollView style={styles.content}>
                <Text style={styles.title}>Crear Reporte</Text>

                {/* Datos de la Denuncia */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Datos del Reporte</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Entidad del Suceso</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Entidad"
                            value={denunciaData.entidad || ''}
                            onChangeText={(text) => handleChangeText('entidad', text, setDenunciaData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Municipio del Suceso</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Municipio"
                            value={denunciaData.municipio || ''}
                            onChangeText={(text) => handleChangeText('municipio', text, setDenunciaData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Bien Jurídico Afectado</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Bien Jurídico Afectado"
                            value={denunciaData.bienJuridicoAfectado || ''}
                            onChangeText={(text) => handleChangeText('bienJuridicoAfectado', text, setDenunciaData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Tipo de Delito</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Tipo de Delito"
                            value={denunciaData.tipoDelito || ''}
                            onChangeText={(text) => handleChangeText('tipoDelito', text, setDenunciaData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Subtipo de Delito</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Subtipo de Delito"
                            value={denunciaData.subtipo || ''}
                            onChangeText={(text) => handleChangeText('subtipo', text, setDenunciaData)}
                        />
                    </View>
                </View>

                {/* Datos del Denunciante */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Datos del Reportante</Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nombre del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre del Reportante"
                            value={denuncianteData.nombre || ''}
                            onChangeText={(text) => handleChangeText('nombre', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Apellido Paterno del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Apellido Paterno del Reportante"
                            value={denuncianteData.apellidoPaterno || ''}
                            onChangeText={(text) => handleChangeText('apellidoPaterno', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Apellido Materno del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Apellido Materno del Reportante"
                            value={denuncianteData.apellidoMaterno || ''}
                            onChangeText={(text) => handleChangeText('apellidoMaterno', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Calle del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Calle del Reportante"
                            value={denuncianteData.calle || ''}
                            onChangeText={(text) => handleChangeText('calle', text, setDenuncianteData)}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Número de casa del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Número del Reportante"
                            value={denuncianteData.numero || ''}
                            onChangeText={(text) => handleChangeText('numero', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Colonia del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Colonia del Reportante"
                            value={denuncianteData.colonia || ''}
                            onChangeText={(text) => handleChangeText('colonia', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Municipio del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Municipio del Reportante"
                            value={denuncianteData.municipio || ''}
                            onChangeText={(text) => handleChangeText('municipio', text, setDenuncianteData)}
                        />

                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Estado del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Estado del Reportante"
                            value={denuncianteData.estado || ''}
                            onChangeText={(text) => handleChangeText('estado', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Número telefónico del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Teléfono del Reportante"
                            value={denuncianteData.telefono || ''}
                            onChangeText={(text) => handleChangeText('telefono', text, setDenuncianteData)}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email del Reportante</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Correo electrónico del Reportante"
                            value={denuncianteData.email || ''}
                            onChangeText={(text) => handleChangeText('email', text, setDenuncianteData)}
                        />

                        {/* Datos del Denunciado */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Datos del Reportado</Text>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Nombre del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nombre del Reportado"
                                    value={denunciadoData.nombre || ''}
                                    onChangeText={(text) => handleChangeText('nombre', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Apellido Paterno del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Apellido Paterno del Reportado"
                                    value={denunciadoData.apellidoPaterno || ''}
                                    onChangeText={(text) => handleChangeText('apellidoPaterno', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Apellido Materno del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Apellido Materno del Reportado"
                                    value={denunciadoData.apellidoMaterno || ''}
                                    onChangeText={(text) => handleChangeText('apellidoMaterno', text, setDenunciadoData)}
                                />
                            </View>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Calle del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Calle del Reportado"
                                    value={denunciadoData.calle || ''}
                                    onChangeText={(text) => handleChangeText('calle', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Número de casa del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Número del Reportado"
                                    value={denunciadoData.numero || ''}
                                    onChangeText={(text) => handleChangeText('numero', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Colonia del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Colonia del Reportado"
                                    value={denunciadoData.colonia || ''}
                                    onChangeText={(text) => handleChangeText('colonia', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Municipio  del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Municipio del Reportado"
                                    value={denunciadoData.municipio || ''}
                                    onChangeText={(text) => handleChangeText('municipio', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Estado del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Estado del Reportado"
                                    value={denunciadoData.estado || ''}
                                    onChangeText={(text) => handleChangeText('estado', text, setDenunciadoData)}
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Teléfono del Reportado</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Teléfono del Reportado"
                                    value={denunciadoData.telefono || ''}
                                    onChangeText={(text) => handleChangeText('telefono', text, setDenunciadoData)}
                                />
                            </View>
                            {/* Descripción del Suceso */}
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Descripción del Suceso</Text>
                                <TextInput
                                    style={[styles.input, styles.textArea]}
                                    placeholder="Descripción del suceso"
                                    value={denunciaData.descripcion || ''}
                                    onChangeText={(text) => handleChangeText('descripcion', text, setDenunciaData)}
                                    multiline
                                />
                            </View>


                        </View>
                    </View>
                </View>
                {/* Botón */}
                <Pressable style={styles.button} onPress={() => handlePress()}>
                    <Text style={styles.buttonText}>Enviar Reporte</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    content: {
        paddingBottom: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CrearDenunciaScreen;
