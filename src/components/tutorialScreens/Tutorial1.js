import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { PRIMARY_GREEN, PRIMARY_FONT_COLOR, PRIMARY_BLACK_BTN } from "../../styles/styles";


import { ToyotaImg } from "./imageForTutorial/imgForTutorial_1/ToyotaLC"


export const Tutorial1 = ({navigation}) => {
    return (
        <View style={styles.content}>

            <View style={styles.whiteRound}>
                <View style={styles.carImg}>
                    < ToyotaImg />
                </View>

            </View>
            
            <View style={styles.bottomBlock}>
                <View style={styles.text2}>
                    <Text style={[styles.nameAppText, { textAlign: "center" }]}>Service and Reapir</Text>
                </View>

                <View style={styles.blockWithlittleText}>
                    <Text style={styles.littleText}>
                        Vestibulum, ut bibendum est eget eu non, consequat, at sodales
                    </Text>
                </View>


                <View style={styles.sliderIndc}>
                    <View style={styles.indecElemOn}></View>
                    <View style={styles.indecElemOff}></View>
                    <View style={styles.indecElemOff}></View>
                    <View style={styles.indecElemOff}></View>
                    <View style={styles.indecElemOff}></View>
                    <View style={styles.indecElemOff}></View>

                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    content: {

    },
    whiteRound: {
        marginTop: 0,
        backgroundColor: "white",
        alignSelf: "center",
        width: 220,
        height: 220,
        borderRadius: 120,
    },

    bottomBlock: {
        height: 136,
        // backgroundColor: "grey",
        justifyContent: "space-between",
        position: "relative"
        },

    nameAppText: {
        fontFamily: "DM Sans",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 39,
        alignItems: "flex-end",
        color: PRIMARY_FONT_COLOR
    },
    carImg: {
        width: 260,
        height: 195,
        alignSelf: "center",
    },
    text2: {
        marginTop: 5,
        height: 39,
        marginLeft: 23,
        marginRight: 23,
    },
    blockWithlittleText: {
        marginTop: 7,
        marginRight: 70,
        marginLeft: 70,
        height: 36,
        width: 224,
        // backgroundColor: "grey",
        
    },
    littleText: {
        fontFamily: "DM Sans",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        color: PRIMARY_FONT_COLOR,
    },
    sliderIndc: {
        color: PRIMARY_FONT_COLOR,
        textAlign: "center",
        flexDirection: "row",
        alignSelf: "center",
    },
    indecElemOn: {
        height: 5,
        width: 17,
        backgroundColor: PRIMARY_FONT_COLOR,
        margin: 3,

    },
    indecElemOff: {
        height: 6,
        width: 5,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        margin: 3,

    },
})