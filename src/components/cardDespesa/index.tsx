import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

type Despesa = {
    id: number;
    valor?: number,
    descricao?: string,
}

interface CardDespesaProps {
    despesa: Despesa,
}

export const CardDespesa = () => {
    const [despesa, setDespesa] = useState<Despesa>({ id: 1, descricao: "Aluguel", valor: 1200});

    return (
        <View style={styles.container}>
            <View style={styles.descricaoBox}>
                <View style={styles.iconBox}>

                </View>
                <View>
                    <Text style={styles.descricaoText}>{despesa.descricao}</Text>
                    <Text style={styles.categoriaText}>despesa</Text>
                </View>
            </View>
            <View style={styles.valorBox}>
                <Text style={styles.valorText}>R$ {despesa.valor}</Text>
                <TouchableOpacity> 
                    <Icon name="arrow-right" size={12} color={"#7C7C7C"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            height: 80,
            padding: 16,
            backgroundColor: "#ffff",
            elevation: 4,
            borderRadius: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        descricaoBox: {
            flexDirection: "row",
            gap: 12,
        },

        iconBox: {
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: "#EFEFEF"
        },

        descricaoText: {
            fontSize: 16,
            fontWeight: "bold",
        },

        categoriaText: {
            fontSize: 12,
            fontWeight: "medium",
            color: "#7A7A7A"
        },

        valorText: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#B54239",
        },

        valorBox: {
            alignItems: "flex-end"
        }


    }
)