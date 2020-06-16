import React, { useState } from "react"
import { View, StyleSheet, StatusBar, Text, ScrollView, Keyboard, KeyboardAvoidingView } from "react-native"
import VirtualKeyboard from 'react-native-virtual-keyboard'


import { TextInput } from "react-native-gesture-handler"
import { PRIMARY_GREY_BACKGROUND } from "../../../assets/styles/styles"



export const ForLittleInpt = (props) => {



    const [inptVal, setInptVal] = useState("")
    // console.log(inptVal)

    const indicator = (x) => {
        console.log(inptVal)
        if (inptVal[x] !== "") {
            return { backgroundColor: "red" }
        } else {
            return { backgroundColor: PRIMARY_GREY_BACKGROUND }
        }
    }
    return (

        <>
            <View style={styles.fourLittleInpt}>
                <TextInput onChangeText={setInptVal} maxLength={4} autoFocus={true} keyboardType="decimal-pad" style={styles.inptForOneNumOpas} />
                <View style={[styles.inptForOneNum, { backgroundColor: inptVal.length == 0 ? "white" : PRIMARY_GREY_BACKGROUND }]}><Text style={styles.numberStyle}>{inptVal[0]}</Text></View>
                <View style={[styles.inptForOneNum, { backgroundColor: inptVal.length == 1 ? "white" : PRIMARY_GREY_BACKGROUND }]}><Text style={styles.numberStyle}>{inptVal[1]}</Text></View>
                <View style={[styles.inptForOneNum, { backgroundColor: inptVal.length == 2 ? "white" : PRIMARY_GREY_BACKGROUND }]}><Text style={styles.numberStyle}>{inptVal[2]}</Text></View>
                <View style={[styles.inptForOneNum, { backgroundColor: inptVal.length == 3 ? "white" : PRIMARY_GREY_BACKGROUND }]}><Text style={styles.numberStyle}>{inptVal[3]}</Text></View>
            </View>
        </>

    )
}


const styles = StyleSheet.create({
    fourLittleInpt: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 30
    },
    inptForOneNumOpas: {
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: 66,
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 8,
        fontSize: 32,
        lineHeight: 42,
        zIndex: 2
    },
    inptForOneNum: {
        width: 66,
        height: 66,
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 8,
        margin: 4,
        fontSize: 32,
        lineHeight: 42,
        alignItems: "center",
        justifyContent: "center"
    },
    numberStyle: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 55,
    }


})