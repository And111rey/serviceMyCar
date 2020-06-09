import React from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView, Alert } from "react-native"
import { PRIMARY_GREEN, PRIMARY_FONT_COLOR, PRIMARY_BLACK_BTN } from "../../styles/styles";

// import { ToyotaImg } from "./imageForTutorial1/ToyotaLC"
import { TutorialVector } from "./imageForTutorial/TutorialVector"
import TototialStackNavigation from "../StackNavigation/TutorialStack"

// import { TutorialTabsNavagation } from "../StackNavigation/TutorialStack"

import { Tutorial1 } from "./Tutorial1"
import { Tutorial2 } from "./Tutorial2"
import { Tutorial3 } from "./Tutorial3"
import { Tutorial4 } from "./Tutorial4"
import { Tutorial5 } from "./Tutorial5"
import { Tutorial6 } from "./Tutorial6"


export const TutorialMainScreenComponents = () => {
    return (

        <View style={styles.content}>

            <View style={styles.headerBlock}>
                <StatusBar backgroundColor={PRIMARY_GREEN} barStyle="light-content" />


                <View style={styles.vectorStyle}>
                    <TutorialVector />
                </View>

                <View style={styles.nameApp}>
                    <Text style={styles.nameAppText}>
                        Wellcomw to ServiceMyCar
                    </Text>
                </View>
            </View>



            <View style={styles.mainBlock}>
                {/* <ScrollView horizontal={true}
                // pagingEnabled={true} 
                showsHorizontalScrollIndicator={false}
                alwaysBounceVertical={true}
                > 
                < Tutorial1 /> 
                < Tutorial2 />
                < Tutorial3 />
                < Tutorial4 />
                < Tutorial5 />
                < Tutorial6 />
                </ScrollView>  */}
                
                <TototialStackNavigation/>
                
            </View>


            <View style={styles.blockWithBtn}>
                <TouchableOpacity onPress={() => Alert.alert("LOgin")} style={[styles.btnSize, { backgroundColor: PRIMARY_BLACK_BTN }]}>
                    <Text style={[styles.textBtnLog, { color: PRIMARY_FONT_COLOR }]}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Alert.alert("Sign Up")} style={[styles.btnSize, { backgroundColor: PRIMARY_FONT_COLOR }]}>
                    <Text style={[styles.textBtnLog, { color: PRIMARY_BLACK_BTN }]}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};


const styles = StyleSheet.create({

    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: PRIMARY_GREEN
    },
    headerBlock: {
        // backgroundColor: "red"
    },

    mainBlock: {
        // backgroundColor: "blue"
        width: "100%"
    },
    blockWithBtn: {
        // backgroundColor: "red",
        marginBottom: 10
    },


    vectorStyle: {
        marginTop: 15,
        marginLeft: 26
    },
    nameApp: {
        height: 78,
        marginTop: 15,
        marginLeft: 26,
        marginRight: 26,
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
    btnSize: {
        marginLeft: 30,
        marginRight: 30,
        height: 50,
        borderRadius: 8,
        padding: 15,
        marginTop: 10


    },
    textBtnLog: {
        // color: PRIMARY_FONT_COLOR,
        textAlign: "center",
        flex: 1,
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
    },
    blockWithBtnS: {
        marginBottom: 10
    }

});
