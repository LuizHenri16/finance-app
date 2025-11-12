import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardDespesasList } from "../components/cardDespesa";
import { MenuBar } from "../components/menu";

type Despesa = {
    id: number,
    valor?: number,
    descricao?: string,
}

export default function Home() {

    const [totalDespesas, setTotalDespesas] = useState(0);
    const [despesas, setDespesas] = useState<Despesa[]>([]);

    return (
        <SafeAreaView style={styles.display}>
            <View style={styles.main}>
                <Text style={styles.title}>Despesas</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalValorTitle}>Total: </Text>
                    <Text style={styles.totalValor}>R$ {totalDespesas}</Text>
                </View>
                <View style={styles.cardList}>
                    <CardDespesasList />
                </View>
            </View>
            <View style={styles.menu}>
                <MenuBar page="home" />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create(
    {
        display: {
            width: "100%",
            flex: 1,
            padding: 16,
            backgroundColor: "#FDFDFD",

        },

        cardList: {
            flex: 1,
            marginTop: 32,
        },

        main: {
            flex: 1,
        },

        menu: {
            width: "100%",
            alignItems: "center",
            marginBottom: 16
        },

        title: {
            fontSize: 32,
            fontWeight: "bold",
        },

        totalContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginTop: 24,
        },

        totalValorTitle: {
            fontSize: 22,
            color: "#8E8E8E",
        },

        totalValor: {
            fontSize: 28,
            color: "#B54239",
            fontWeight: "bold",
        }
    }
)

