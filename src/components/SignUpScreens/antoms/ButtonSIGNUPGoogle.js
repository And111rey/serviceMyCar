import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native"
import { PRIMARY_BLACK } from "../../../assets/styles/styles"


export const ButtonSIGNUPGoogle = (props) => {
    return (
        <TouchableOpacity  onPress={()=>{Alert.alert("...with Google")}}style={styles.btnSize} >
            <Text style={styles.textBtn}>
            Sign up with Facebook
        </Text>
        </TouchableOpacity>
    )
} 


const styles = StyleSheet.create({
    btnSize: {
        backgroundColor: PRIMARY_BLACK,
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
        height: 50,
        width: 317,
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