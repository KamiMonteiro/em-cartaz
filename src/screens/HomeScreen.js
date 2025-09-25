import React from "react";
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native-safe-area-context";
import Header from "../components/Header";

export default function HomeScreen({navigation}) {
    function handlePress() {
        console.log("Botão pressionado!");
    }

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Header title={"Meu Aplicativo"} />
             <View style={styles.content}>
                <Text style={styles.title}>EM CARTAZ ❤️</Text>
                 <Text style={styles.subtitle}>testando 👍</Text>

                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Clique aqui ▶️ </Text>
                </TouchableOpacity>
             </View>
        </SafeAreaView>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    content: {
        flex: 1,
        justifyContent: "center",  
        alignItems: "center",
        padding: 20,
    },
    title: 
       {color: "#e40e72ff"},
        fontSize: 27,
        fontWeight: "bold", 
        marginBottom: 8,
    subtitle: 
        {color: "#ffffff",
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center"
    },
    button: {
        backgroundColor: "#54a0c4ff",
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 8,//ver isso
    },
    buttonText: {   
        color: "#ffffff",
        fontSize: 16,//ver isso
        fontWeight: "bold", //ver isso
    },
});