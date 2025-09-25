import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native-safe-area-context";
import { StatusBar} from "expo-status-bar";

export default function RootLayout() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Stack name = "index" screenOptions={{ headerShown: false }} />
            </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aa0846ff",
    }
})