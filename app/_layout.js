import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aa0846ff",
    }
});