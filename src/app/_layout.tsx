import { Stack } from "expo-router";
import { FinanceProvider } from "../contexts/FinanceContext";

export default function Layout() {
    return (
        <FinanceProvider>
            <Stack initialRouteName="home/index" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home/index" />
                <Stack.Screen name="receita/index" />
            </Stack>
        </FinanceProvider>
    )
}