import React from "react"
import { View, StyleSheet, StatusBar, Text, ScrollView, Keyboard, KeyboardAvoidingView } from "react-native"
import { PRIMARY_GREY_BACKGROUND, PRIMARY_WHITE, PRIMARY_GREEN, PRIMARY_BLACK } from "../../assets/styles/styles"
import VirtualKeyboard from 'react-native-virtual-keyboard'

import { Vector } from "./icons/Vector"
import { NumberInputs } from "./antoms/NumberInputs"
import { ButtonSIGNUP } from "./antoms/ButtonSIGNUP"
import { ButtonSignUpBlack } from "./antoms/ButtonSignUpBlack"



export const ScreenLogInPhoneNumber = (props) => {
    return (
        <View style={styles.content}>

            <StatusBar backgroundColor={PRIMARY_GREY_BACKGROUND} barStyle="dark-content" />

            <View style={styles.topPart}>
                <View style={styles.header}>
                    < Vector />
                </View>
                <View>
                    <Text style={styles.title}>Enter Your Number</Text>
                </View>
            </View>


            <View style={styles.bottomPart}>

                < NumberInputs />
                < ButtonSIGNUP />
                < ButtonSignUpBlack />





            </View>



        </View>
    )
}


const styles = StyleSheet.create({
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
    textLOGIN: {
        fontFamily: " DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 21,
        color: "#009B01"
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
        // backgroundColor: "red",
        // borderBottomLeftRadius: -8
    },
    bottomPart: {
        marginTop: 60,
        backgroundColor: PRIMARY_WHITE,
        // flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: "center",
        paddingTop: 39,
        height: "100%"
        // paddingBottom: 0,
        // marginBottom: 0
    },
    input: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        marginLeft: 30,
        marginRight: 30,
        width: 317,
        height: 44,
        borderRadius: 8,
        padding: 13,
        marginTop: 10
    },


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