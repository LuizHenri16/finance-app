import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

interface MenuBarProps {
    page?: string
}


export const MenuBar = ({page}: MenuBarProps) => {
    const routerNavigation = useRouter();

    const addIconName = page === "home" ? "despesa" : "saldo"

    return (
        <View style={styles.container}>
            <MenuButton type={"material"} icon={"home"} name="despesa" color={"#727272"} navigation={() => routerNavigation.navigate("/")}/>
            <MenuButton type={"material-community"} icon={"plus-circle"} name={addIconName} color={"#3B89D8"} />
            <MenuButton type={"material-community"} icon={"cash"} name="receita" color={"#727272"} navigation={() => routerNavigation.navigate("/receita")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 260,
        height: 70,
        gap: 32,
        backgroundColor: "#ffffffff", 
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        elevation: 4
    },

    MenuButton: {
        flexDirection: "column",
        width: 56,
    },

    Text: {
        fontSize: 14,
        textAlign: "center",
        color: "#727272",
    }


})

interface MenuButtonProps {
    icon: string,
    type?: string,
    name: string
    color?: string
    navigation?: () => void
}

const MenuButton = ({icon, name, type, color, navigation}: MenuButtonProps) => {
    return (
        <TouchableOpacity style = {styles.MenuButton} onPress={navigation}>
            <Icon name={icon} color={color} type={type} size={32} />
            <Text style={styles.Text}>{name}</Text>
        </TouchableOpacity>
    )
}

