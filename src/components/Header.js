import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Meu Aplicativo{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 15,
        backgroundColor: "#aa0846ff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
    },
});