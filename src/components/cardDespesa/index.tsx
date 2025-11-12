import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SwipeListView } from 'react-native-swipe-list-view';

type Despesa = {
    id: number;
    valor?: number,
    descricao?: string,
}

interface CardDespesaProps {
    despesa: Despesa;
}

const deleteItem = (id: number, despesas: Despesa[], setDespesas: React.Dispatch<React.SetStateAction<Despesa[]>>) => {
    const newDespesas = despesas.filter(item => item.id !== id);
    setDespesas(newDespesas);
};

interface HiddenItemProps {
    data: { item: Despesa };
    rowMap: any;
    despesas: Despesa[];
    setDespesas: React.Dispatch<React.SetStateAction<Despesa[]>>;
}

const HiddenItemWithActions = ({ data, rowMap, despesas, setDespesas }: HiddenItemProps) => {
    const item = data.item;

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
                style: 'destructive',
                onPress: () => {
                    deleteItem(item.id, despesas, setDespesas);
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

export const CardDespesasList = () => {
    const [despesas, setDespesas] = useState<Despesa[]>([
        { id: 1, descricao: "Aluguel", valor: 1200 },
        { id: 2, descricao: "Supermercado", valor: 450 },
        { id: 3, descricao: "Internet", valor: 100 }
    ]);

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
                        setDespesas={setDespesas}
                    />
                )}

                rightOpenValue={-150}
                disableRightSwipe={true}

                contentContainerStyle={{ paddingHorizontal: 16 }}
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
                    <Icon name="arrow-right" size={12} color={"#7C7C7C"} />
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

        rowFront: {
            height: 75,
            marginBottom: 16,
            backgroundColor: 'white',
            borderRadius: 12,
            elevation: 4
        },
        cardContainer: {
            width: "100%",
            height: "100%",
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        rowBack: {
            height: 75,
            alignItems: 'center',
            backgroundColor: '#ffffffff',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            elevation: 1,
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
            fontSize: 24,
            fontWeight: "bold",
            color: "#B54239",
        },
        valorBox: {
            alignItems: "flex-end"
        }
    }
)