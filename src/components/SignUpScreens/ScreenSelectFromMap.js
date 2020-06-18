import React, { useState } from "react"
import { View, StyleSheet, StatusBar, Text, Picker, ScrollView, TouchableOpacity, Alert } from "react-native"
import { PRIMARY_GREY_BACKGROUND, PRIMARY_WHITE, PRIMARY_GREEN, PRIMARY_BLACK } from "../../assets/styles/styles"

import { Vector } from "./icons/Vector"
import { NumberInputs } from "./antoms/NumberInputs"
import { ButtonSIGNUP } from "./antoms/ButtonSIGNUP"
import { ButtonSignUpBlack } from "./antoms/ButtonSignUpBlack"
import { BtnGreen } from "../../assets/buttons/BtnGreen"
import { BtnBlack } from "../../assets/buttons/BtnBlack"
import { ForLittleInpt } from "./antoms/ForLittleInpt"
import { TextInput } from "react-native-gesture-handler"
import { Pointer } from "./icons/Pointer"


import MapView, {Marker} from "react-native-maps"


export const ScreenSelectFromMap = (props) => {


    return (
            <View style={styles.content}>

                <StatusBar backgroundColor={PRIMARY_GREY_BACKGROUND} barStyle="dark-content" />
           
            {/* <View style={styles.map}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                
                </MapView>
            </View> */}



                {/* <View style={styles.bottomPart}> */}
                {/* </View> */}
            </View>


        
    )
}


const styles = StyleSheet.create({


    content: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        flex: 1
    },
    map: {
        height: 400,
    },

    header: {
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
        height: "100%",
        paddingHorizontal: 30
    },
    selCountry: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        height: 50,
        width: 300,
        borderRadius: 8,
    },
    selState: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        height: 50,
        width: 300,
        borderRadius: 8,
        marginTop: 15
    },
        searchObjectStyles:{
            backgroundColor: PRIMARY_GREY_BACKGROUND,
            height: 50,
            width: 300,
            borderRadius: 8,
            marginTop: 10
    },
    littleText: {
        marginTop: 5,
        textAlign: "center",
        lineHeight: 13,
        fontSize: 10,
        opacity: 0.5
    }

    


})