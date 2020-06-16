import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { PRIMARY_GREEN, PRIMARY_FONT_COLOR, PRIMARY_BLACK_BTN } from '../../assets/styles/styles';

import { IconTutorial2 } from "./imageForTutorial/imgForTutorial_2/IconTutorial2"




export const TutorialScrolls = ({ icon, firstText, secondText, whiteCircle }) => {
    return (

        <View style={styles.content}>
            <TouchableOpacity  >

                <View style={styles.topBlock}>
                    <View style={whiteCircle}>
                        {icon()}
                    </View>
                </View>

                <View style={styles.bottomBlock}>
                    <View style={styles.text2}>
                        <Text style={[styles.nameAppText, { textAlign: "center" }]}>{firstText}</Text>
                    </View>


                    <View style={styles.blockWithlittleText}>
                        <Text style={styles.littleText}>
                            {secondText}
                        </Text>
                    </View>


                    <View style={styles.sliderIndc}>
                        <View style={styles.indecElemOff}></View>
                        <View style={styles.indecElemOn}></View>
                        <View style={styles.indecElemOff}></View>
                        <View style={styles.indecElemOff}></View>
                        <View style={styles.indecElemOff}></View>
                        <View style={styles.indecElemOff}></View>

                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: PRIMARY_GREEN
    },
    topBlock: {
        // height: 220,
        // backgroundColor: "red"
    },
    bottomBlock: {
        height: 136,
        justifyContent: "space-between",
        position: "relative"
    },



    // whiteRound: {
    //     backgroundColor: "white",
    //     position: "relative",
    //     justifyContent: "center",
    //     justifyContent: "space-around",
    //     paddingTop: 42,
    //     paddingBottom: 42,
    //     alignItems: "center",
    //     alignSelf: "center",
    //     marginTop: 39,
    //     width: 142,
    //     height: 142,
    //     borderRadius: 142,
    // },
    // gteenLine: {
    //     // position: "absolute",
    //     backgroundColor: PRIMARY_GREEN,
    //     width: 27,
    //     height: 3,
    //     marginTop: 55

    // },
    nameAppText: {
        fontFamily: "DM Sans",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 39,
        alignItems: "flex-end",
        color: PRIMARY_FONT_COLOR
    },
    text2: {
        marginTop: 5,
        height: 39,
        marginLeft: 23,
        marginRight: 23,
    },
    blockWithlittleText: {
        marginTop: 7,
        marginRight: 75,
        marginLeft: 75,
        width: 224
    },
    littleText: {
        fontFamily: "DM Sans",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        color: PRIMARY_FONT_COLOR
    },
    sliderIndc: {
        color: PRIMARY_FONT_COLOR,
        textAlign: "center",
        flexDirection: "row",
        alignSelf: "center"
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