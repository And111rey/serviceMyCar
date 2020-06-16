import React from "react"
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, Alert } from "react-native"
import { PRIMARY_GREY_BACKGROUND, PRIMARY_WHITE, PRIMARY_GREEN, PRIMARY_BLACK } from "../../assets/styles/styles"
import VirtualKeyboard from 'react-native-virtual-keyboard'

import { Vector } from "./icons/Vector"
import { NumberInputs } from "./antoms/NumberInputs"
import { ButtonSIGNUP } from "./antoms/ButtonSIGNUP"
import { ButtonSignUpBlack } from "./antoms/ButtonSignUpBlack"
import { BtnGreen } from "../../assets/buttons/BtnGreen"
import { ForLittleInpt } from "./antoms/ForLittleInpt"
// import { PRIMARY_GREY_BACKGROUND } from "../../assets/styles/styles"



export const ScreenNumberVerify = (props) => {
    return (
        <View style={styles.content}>

            <StatusBar backgroundColor={PRIMARY_GREY_BACKGROUND} barStyle="dark-content" />

            <View style={styles.topPart}>
                <View style={styles.header}>
                    < Vector />
                </View>

                <Text style={styles.title}>Enter the Code</Text>

                <Text style={styles.littleText}>We sent the code to +(971) 044 333 4 333</Text>
            </View>

            <View style={styles.bottomPart}>

                <ForLittleInpt />

                < BtnGreen title="VERIFY " />
                <TouchableOpacity onPress={() =>Alert.alert('...Resend code')}><Text style={styles.resendText}> Resend code</Text></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    fourLittleInpt: {
        justifyContent: "space-between",
        flexDirection: "row"
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


    },

    content: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        flex: 1
    },

    header: {
        // backgroundColor: "red",
        justifyContent: "space-between",
        flexDirection: "row",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30
    },

    title: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 16,
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 42,

    },
    bottomPart: {
        marginTop: 60,
        backgroundColor: PRIMARY_WHITE,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: "center",
        paddingTop: 39,
        height: "100%"
    },
    littleText: {
        width: 281,
        height: 18,
        // left: 30p
        marginTop: 10,
        alignSelf: "center",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
        color: "#9A9A9A"
    },
    resendText: {
        marginTop: 15,
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 18,
        color: "#252525",
        // justifyContent: "center"
    }

})