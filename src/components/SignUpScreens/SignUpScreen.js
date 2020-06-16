import React from "react"
import { View, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { PRIMARY_GREY_BACKGROUND, PRIMARY_WHITE, PRIMARY_GREEN, PRIMARY_BLACK } from "../../assets/styles/styles"

import { Vector } from "./icons/Vector"
import { NumberInputs } from "./antoms/NumberInputs"
import { TextInstruction } from "./antoms/TextInstruction"
import { ButtonSIGNUP } from "./antoms/ButtonSIGNUP"
import { ButtonSIGNUPFaceBook } from "./antoms/ButtonSIGNUPFaceBook"
import { ButtonSIGNUPGoogle } from "./antoms/ButtonSIGNUPGoogle"

export const SignUpScreen = (props) => {
    return (
        <View style={styles.content}>
            <StatusBar backgroundColor={PRIMARY_GREY_BACKGROUND} barStyle="dark-content" />
            <ScrollView>
                <View style={styles.topPart}>
                    <View style={styles.header}>
                        < Vector />
                        <Text style={styles.textLOGIN}>LOG IN</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>Sign Up</Text>
                    </View>
                </View>


                <View style={styles.bottomPart}>


                    <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#A3ABB8" />
                    < TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A3ABB8" />
                    < NumberInputs />

                    <TextInput style={styles.input} placeholder="Referral code" placeholderTextColor="#A3ABB8" />
                    < TextInstruction />

                    < ButtonSIGNUP />
                    <Text style={[styles.textBtn, { color: "#A3ABB8" }]}> OR</Text>
                    < ButtonSIGNUPFaceBook />
                    < ButtonSIGNUPGoogle />


                </View>

            </ScrollView>

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

    },
    bottomPart: {
        marginTop: 60,
        backgroundColor: PRIMARY_WHITE,
        // flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: "center",
        paddingTop: 10,
        // paddingLeft: 30,
        // paddingRight: 30,
        paddingBottom: 10,
        // justifyContent: "space-between",
        marginBottom: 0
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
})