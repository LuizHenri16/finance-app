import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack initialRouteName="home/index" screenOptions={{headerShown: false}}>
            <Stack.Screen name="home/index"/>
            <Stack.Screen name="receita/index"/>
        </Stack> 
    )
}