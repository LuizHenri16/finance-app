import HomeIcon from "@/assets/icons/home-icon";
import { AddIcon, EntranceIcon, LeaveIcon } from "@/assets/icons/icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuBarProps {
    page?: string,
    setModalOpen?: (open: boolean) => void
}


export const MenuBar = ({ page, setModalOpen }: MenuBarProps) => {
    const routerNavigation = useRouter();

    const addIconName = page === "home" ? "despesa" : "saldo"

    return (
        <View style={styles.container}>
            <MenuButton  icon={"Entrance"} name="despesa" navigation={() => routerNavigation.navigate("/")} />
            <MenuButton  icon={"Add"} name={addIconName} navigation={setModalOpen ? () => setModalOpen(true) : undefined}/>
            <MenuButton  icon={"Leave"} name="receita" navigation={() => routerNavigation.navigate("/receita")} />
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
        alignItems: "center",
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
    name: string
    navigation?: () => void
}

const MenuButton = ({ icon, name, navigation }: MenuButtonProps) => {
    return (
        <TouchableOpacity style={styles.MenuButton} onPress={navigation}>
            <IconRender icon={icon}/>
            <Text style={styles.Text}>{name}</Text>
        </TouchableOpacity>
    )
}

interface IconRenderProps {
    icon: string
}

const IconRender = ({ icon }: IconRenderProps) => {
    switch (icon) {

        case "Add": {
            return (
                <AddIcon />
            )
        };

        case "Entrance": {
            return (
                <EntranceIcon />
            )
        };


        case "Leave": {
            return (
                <LeaveIcon />
            )
        };

        default: {
            return (
                <HomeIcon />
            )
        }
    }
}


