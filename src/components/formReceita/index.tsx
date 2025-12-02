import { FinanceContext } from "@/src/contexts/FinanceContext";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "../button";

type Receita = {
    descricao: string;
    valor: number;
}

interface FormReceitasProps {
    onClose?: () => void
}

export const FormReceita = ({ onClose }: FormReceitasProps) => {
    const [despesaPayLoad, setDespesaPayload] = useState<Receita>({ descricao: "", valor: 0 });
    const finance = useContext(FinanceContext);

    function HandleSubmit() {
        finance?.addReceita(despesaPayLoad)
        setDespesaPayload({ descricao: "", valor: 0 })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <IconButton icon="chevron-left" type="material" navigation={onClose} />
                <Text style={styles.title}>Adicionar Receita</Text>
                <IconButton navigation={() => { HandleSubmit() }} icon="check" type="material" />

            </View>

            <View>
                <View>
                    <Text style={styles.label}>Valor</Text>
                    <View style={styles.inputText}>
                        <Text style={styles.simbolo}>R$</Text>
                        <TextInput
                            onChangeText={
                                (text) => {
                                    const valorNumerico = parseFloat(text.replace(',', '.'));
                                    setDespesaPayload({ ...despesaPayLoad, valor: isNaN(valorNumerico) ? 0 : valorNumerico })
                                }}
                            style={styles.input} placeholder="0,00"></TextInput>
                    </View>
                </View>

                <View>
                    <Text style={styles.label}>Descrição</Text>
                    <View style={styles.inputText}>
                        <TextInput onChangeText={(text) => { setDespesaPayload({ ...despesaPayLoad, descricao: text }) }}
                            multiline={true} style={styles.input} placeholder="descrição"></TextInput>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { HandleSubmit() }}>
                <Text style={styles.buttonText}>Adicionar Receita</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
    },

    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },

    title: {
        fontSize: 24,
        fontWeight: "500"
    },

    label: {
        fontSize: 16,
        color: "#838383",
        marginTop: 12,
    },

    inputText: {
        marginTop: 5,
        paddingHorizontal: 8,
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        fontSize: 32,

        borderWidth: 2,
        borderColor: "#797979",
        borderRadius: 12,
    },

    input: {
        fontSize: 24,
        marginLeft: 8
    },

    simbolo: {
        fontSize: 24,
    },

    button: {
        position: "absolute",
        alignSelf: "center",
        bottom: 32,
        width: "90%",
        backgroundColor: "#3B89D8",
        borderRadius: 16,
        alignItems: "center",
        padding: 12
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }

})

