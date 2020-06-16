import React from "react"
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Alert, Dimensions } from "react-native"
import { PRIMARY_GREEN, PRIMARY_FONT_COLOR, PRIMARY_BLACK_BTN } from '../../assets/styles/styles';

// import { ToyotaImg } from "./imageForTutorial1/ToyotaLC"
import { TutorialVector } from "./imageForTutorial/TutorialVector"
// import TototialStackNavigation from "../StackNavigation/TutorialStack"

import { TutorialScrolls } from "./TutorialScrolls"

import { ImgCar } from './imageForTutorial/imgForTutorial_1/ImgCar'
import { IconTutorial2 } from "./imageForTutorial/imgForTutorial_2/IconTutorial2"
import { IconTutorial3 } from "./imageForTutorial/imgForTutorial_3/IconTutorial3"
import { IconCarTutorial } from "./imageForTutorial/imgForTutorial_4/CarImg"
import { IconFlower } from "./imageForTutorial/imgForTutorial_5/IconFlower"
import { IconPresent } from './imageForTutorial/imgForTutorial_6/IconPresent' 




const stylesForLittleCircle = {
    backgroundColor: "white",
    position: "relative",
    justifyContent: "center",
    justifyContent: "space-around",
    paddingTop: 42,
    paddingBottom: 42,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 39,
    width: 142,
    height: 142,
    borderRadius: 142,
}

const stylesForBigCircle = {
    marginTop: 0,
    backgroundColor: "white",
    alignSelf: "center",
    width: 220,
    height: 220,
    borderRadius: 120,
    // position: 'relative'
}

const DATA = [
    {
        
        icon:  ImgCar,
        firstText: "Service and Reapir" ,
        secondText: "Vestibulum, ut bibendum est eget eu non, consequat, at sodales.",
        whiteCircle: stylesForBigCircle
    }, 
    {
        icon: IconTutorial2,
        firstText: "Service and Reapir",
        secondText: "Purus mattis adipiscing suspendisse in enim tristique bibendum at euismod.",
        whiteCircle: stylesForLittleCircle,
    },
    {
        icon: IconTutorial3,
        firstText: "Trusted Gatages",
        secondText: "Ultrices mattis tempus ante massa lectus.",
        whiteCircle: stylesForLittleCircle,
    },
    {
        icon: IconCarTutorial,
        firstText: "Free Pick Up",
        secondText: " Ut lacinia orci mi sagittis, consequat.",
        whiteCircle: stylesForLittleCircle,
    },
    {
        icon: IconFlower,
        firstText: "Peace of Mind ",
        secondText: " Ut lacinia orci mi sagittis, consequat.",
        whiteCircle: stylesForLittleCircle,
    },
    {
        icon: IconPresent,
        firstText: "Register Now ",
        secondText: "Lobortis nunc amet, nulla porttitor mauris dignissim volutpat.",
        whiteCircle: stylesForLittleCircle,
    }
]




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
            <ScrollView horizontal={true}>
                {
                    DATA.map((el, i) => {
                        return <TutorialScrolls key={i} icon={el.icon} whiteCircle={el.whiteCircle} firstText={el.firstText} secondText={el.secondText} />
                    })
                }
            </ScrollView>
            
            {/* < IconTutorial2 /> */}

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
        // backgroundColor: "blue",
        width: Dimensions.get("window").width
        // flexGrow: 1

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
