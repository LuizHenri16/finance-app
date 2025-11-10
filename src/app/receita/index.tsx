import { MenuBar } from "@/src/components/menu";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Receita() {
    return (
        <SafeAreaView style={styles.display}>
            <View style={styles.main}>
                <Text style={styles.title}>Receita</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalValorTitle}>Total: </Text>
                    <Text style={styles.totalValor}>R$ </Text>
                </View>
            </View>
            <View style={styles.menu}>
                <MenuBar page="receita" />
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
            color: "#4AA67C",
            fontWeight: "bold",
        }
    }
)
