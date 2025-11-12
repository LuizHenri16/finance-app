import { CardReceitaList } from "@/src/components/cardReceita";
import { FormReceita } from "@/src/components/formReceita";
import { MenuBar } from "@/src/components/menu";
import { ModalFormReceita } from "@/src/components/modalFormReceita";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Receita = {
    id: number,
    valor?: number,
    descricao?: string,
}

export default function Receita() {

    const [modalOpen, setModalOpen] = useState(false);


    const [receitas, setReceitas] = useState<Receita[]>([
        { id: 1, descricao: "Salário", valor: 3200 },
        { id: 2, descricao: "Freelancer", valor: 450 },
    ]);

    const [totalReceitas, setTotalReceitas] = useState(0);

    useEffect(() => {
        const total = receitas.reduce((sum, receita) => sum + (receita.valor || 0), 0);
        setTotalReceitas(total);
    })

    return (
        <SafeAreaView style={styles.display}>
            <View style={styles.main}>
                <Text style={styles.title}>Receita</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalValorTitle}>Total:  </Text>
                    <Text style={styles.totalValor}>R$ {totalReceitas}</Text>
                </View>

                <View style={styles.cardList}>
                    <CardReceitaList receitas={receitas} />
                </View>
            </View>
            <View style={styles.menu}>
                <MenuBar page="receita" setModalOpen={setModalOpen}/>
            </View>
            <ModalFormReceita isOpen={modalOpen}>
                <FormReceita onClose={() => setModalOpen(false)}/>
            </ModalFormReceita>
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

        main: {
            flex: 1,
        },

        menu: {
            width: "100%",
            alignItems: "center",
            marginBottom: 0
        },

        cardList: {
            flex: 1,
            marginTop: 32,
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
            color: "#4AA67C",
            fontWeight: "bold",
        }
    }
)
