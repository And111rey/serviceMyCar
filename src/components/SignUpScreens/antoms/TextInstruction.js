import React from "react"
import { Text, StyleSheet } from "react-native"

export const TextInstruction = () => {
    return (
        <Text style={styles.textInstruction}>
            By clicking “Sign up” you agree with terms and conditions of servicemycar.app
        </Text>
    )
}

const styles = StyleSheet.create({
    textInstruction: {
        marginTop: 10,
        width: 250,
        textAlign: "center",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 10,
        lineHeight: 13,
        color: "#000000",
        opacity: 0.5
    }
})