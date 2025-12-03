
import { FinanceContext } from "@/src/contexts/FinanceContext";
import { DespesaPersisted } from "@/src/types/despesa";
import { useContext } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SwipeListView } from 'react-native-swipe-list-view';


interface CardDespesaProps {
    despesa: DespesaPersisted;
}

interface HiddenItemProps {
    data: { item: DespesaPersisted };
    rowMap: any;
    despesas: DespesaPersisted[];
}

const HiddenItemWithActions = ({ data, rowMap }: HiddenItemProps) => {
    const item = data.item;
    const finance = useContext(FinanceContext);

    const closeRow = (rowKey: number) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const handleEdit = () => {
        Alert.alert('Editar', `Ação de Editar para: ${item.descricao}`);
        closeRow(item.id);
    };

    const handleDelete = () => {
        Alert.alert('Excluir', `Deseja realmente excluir "${item.descricao}"?`, [
            { text: 'Cancelar', style: 'cancel', onPress: () => closeRow(item.id) },
            {
                text: 'Excluir',
                style: "default",
                onPress: () => {
                    finance?.removeDespesa(item.id);
                }
            },
        ]);
    };

    return (
        <View style={styles.rowBack}>
            <TouchableOpacity style={[styles.backButton, styles.editButton]} onPress={handleEdit}>
                <Icon name="edit" type="font-awesome" color="white" />
                <Text style={styles.backText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.backButton, styles.deleteButton]} onPress={handleDelete}>
                <Icon name="trash" type="font-awesome" color="white" />
                <Text style={styles.backText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
};

interface CardDespesasListProps {
    despesas: DespesaPersisted[];
}

export const CardDespesasList = ({despesas} : CardDespesasListProps) => {

    return (
        <GestureHandlerRootView style={styles.swipeListContainer}>
            <SwipeListView
                data={despesas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.rowFront}>
                        <CardDespesa despesa={item} />
                    </View>
                )}

                renderHiddenItem={(data, rowMap) => (
                    <HiddenItemWithActions
                        data={data}
                        rowMap={rowMap}
                        despesas={despesas}  
                    />
                )}
                style={styles.swipeListContainer}
                rightOpenValue={-150}
                disableRightSwipe={true}
            />
        </GestureHandlerRootView>
    )
}


const CardDespesa = ({ despesa }: CardDespesaProps) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.descricaoBox}>
                <View style={styles.iconBox}>
                </View>
                <View>
                    <Text style={styles.descricaoText}>{despesa.descricao}</Text>
                    <Text style={styles.categoriaText}>despesa</Text>
                </View>
            </View>
            <View style={styles.valorBox}>
                <Text style={styles.valorText}>R$ {despesa.valor?.toFixed(2)}</Text>
                <TouchableOpacity>
                    <Icon type="font-awesome" name="arrow-right" size={10} color={"#a9a9a9ff"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {

        swipeListContainer: {
            flex: 1,
        },
        cardContainer: {
            width: "100%",
            height: "100%",
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        rowFront: {
            width: '100%',
            height: 75,
            marginBottom: 16,
            backgroundColor: 'white',
            borderRadius: 0,
        },

        rowBack: {
            height: 75,
            alignItems: 'center',
            backgroundColor: '#ffffffff',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            borderRadius: 12,
            marginBottom: 10,
        },
        backButton: {
            width: 75,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
        },
        backText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12
        },
        editButton: {
            backgroundColor: '#3B89D8',
        },
        deleteButton: {
            backgroundColor: '#B54239',
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
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
            fontWeight: "500",
            color: "#7A7A7A"
        },
        valorText: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#B54239",
        },
        valorBox: {
            alignItems: "flex-end"
        }
    }
)