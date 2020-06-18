import React from "react"
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native"
import { PRIMARY_GREEN, PRIMARY_BLACK } from "../styles/styles"
// import { PRIMARY_GREY_BACKGROUND, PRIMARY_WHITE, PRIMARY_GREEN, PRIMARY_BLACK } from "../../../assets/styles/styles"


export const BtnBlack = (props) => {
    return (
        <TouchableOpacity onPress={() => Alert.alert(props.title)} style={[styles.btnSize, { backgroundColor: PRIMARY_BLACK }]} >
            {props.pointer}
            <Text style={styles.textBtn}>
                {props.title}
        </Text>
        </TouchableOpacity>
    )
} 


const styles = StyleSheet.create({
    btnSize: {
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
        height: 50,
        width: 317,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    textBtn: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
        color: "#FFFFFF"
    }

})