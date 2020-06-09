import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { PRIMARY_GREEN, PRIMARY_FONT_COLOR, PRIMARY_BLACK_BTN } from "../../styles/styles";

import { UnionImg } from "./imageForTutorial/imgForTutorial_3/UnionImg"
import { Ellipse33Img } from "./imageForTutorial/imgForTutorial_3/EllipseImg33"
import { VectorOkImg } from "./imageForTutorial/imgForTutorial_3/VectorOkImg" 

export const Tutorial3 = (props) => {
    return (

        <View style={styles.content}>

            <View style={styles.topBlock}>
                <View style={styles.whiteRound}>
                    <View style={styles.unionImg}>< UnionImg /></View>
                    <View style={styles.ellipseImg}>< Ellipse33Img /></View>
                    <View style={styles.ellipseImg}>< VectorOkImg /></View>                      
                </View>
            </View>

            <View style={styles.bottomBlock}>
                <View style={styles.text2}>
                    <Text style={[styles.nameAppText, { textAlign: "center" }]}>Trusted Gatages</Text>
                </View>


                <View style={styles.blockWithlittleText}>
                    <Text style={styles.littleText}>
                    Sed non fames enim, diam sed pharetra tincidunt sed.
                    </Text>
                </View>


                <View style={styles.sliderIndc}>
                    <View style={styles.indecElemOff}></View>
                    <View style={styles.indecElemOff}></View>
                    <View style={styles.indecElemOn}></View>
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
    topBlock: {
        height: 220
    },
    bottomBlock: {
        height: 136,
        justifyContent: "space-between",
        position: "relative"
    },



    whiteRound: {
        backgroundColor: "white",
        position: "relative",
        justifyContent: "center",
        paddingTop: 42,
        paddingBottom: 42,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 39,
        width: 142,
        height: 142,
        borderRadius: 142,
    },
    unionImg: {
        position: "absolute"
    },
    ellipseImg: {
        position: "absolute"
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