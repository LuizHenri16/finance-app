import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardDespesasList } from "../components/cardDespesa";
import { FormDespesa } from "../components/formDespesa";
import { MenuBar } from "../components/menu";
import { ModalFormDespesa } from "../components/modalFormDespesa";

type Despesa = {
    id: number,
    valor?: number,
    descricao?: string,
}

export default function Home() {

    const [modalOpen, setModalOpen] = useState(false);

    const [totalDespesas, setTotalDespesas] = useState(0);
    const [despesas, setDespesas] = useState<Despesa[]>([
        { id: 1, descricao: "Aluguel", valor: 1200 },
        { id: 2, descricao: "Supermercado", valor: 450 },
        { id: 3, descricao: "Internet", valor: 100 }
    ]);

    useEffect(() => {
        const total = despesas.reduce((sum, despesa) => sum + (despesa.valor || 0), 0);
        setTotalDespesas(total);
    }, [despesas])

    return (
        <SafeAreaView style={styles.display}>
            <View style={styles.main}>
                <Text style={styles.title}>Despesas</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalValorTitle}>Total: </Text>
                    <Text style={styles.totalValor}>R$ {totalDespesas}</Text>
                </View>
                <View style={styles.cardList}>
                    <CardDespesasList despesas={despesas} />
                </View>
            </View>
            <View style={styles.menu}>
                <MenuBar page="home" setModalOpen={setModalOpen} />
            </View>
            <ModalFormDespesa isOpen={modalOpen}>
                <FormDespesa onClose={() => setModalOpen(false)}/>
            </ModalFormDespesa>
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
            marginBottom: 0
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

