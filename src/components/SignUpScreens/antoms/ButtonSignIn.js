import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native"
import { PRIMARY_BLACK, PRIMARY_GREEN } from "../../../assets/styles/styles"


export const ButtonSignIn = (props) => {
    return (
        <TouchableOpacity  onPress={()=>{Alert.alert("...SignIn")}}style={styles.btnSize} >
            <Text style={styles.textBtn}>
            SIGN IN
        </Text>
        </TouchableOpacity>
    )
} 


const styles = StyleSheet.create({
    btnSize: {
        backgroundColor: PRIMARY_GREEN,
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