import React, { useState } from "react"
import { View, StyleSheet, StatusBar, Text, Picker, ScrollView, TouchableOpacity, Alert } from "react-native"
import { PRIMARY_GREY_BACKGROUND, PRIMARY_WHITE, PRIMARY_GREEN, PRIMARY_BLACK } from "../../assets/styles/styles"
import VirtualKeyboard from 'react-native-virtual-keyboard'

import { Vector } from "./icons/Vector"
import { NumberInputs } from "./antoms/NumberInputs"
import { ButtonSIGNUP } from "./antoms/ButtonSIGNUP"
import { ButtonSignUpBlack } from "./antoms/ButtonSignUpBlack"
import { BtnGreen } from "../../assets/buttons/BtnGreen"
import { ForLittleInpt } from "./antoms/ForLittleInpt"
import { TextInput } from "react-native-gesture-handler"
// import { PRIMARY_GREY_BACKGROUND } from "../../assets/styles/styles"

const DATA = [
    { id: 0, name: "Украина", city: ["Киев", "Одесса", "Хмельницкий", "Харьков"] },
    { id: 1, name: "Россия", city: ["Москва", "Санкт-Петербург", "Ростов", "Мурманск", "Омск"] },
    { id: 2, name: "США", city: ["Техас", "Вашингтон", "Юта", "Детроиt"] },
]

export const ScreenAddAdress = (props) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [city, setCity] = useState("")
    const [arrCity, setArrSity] = useState([])

    console.log("..выбраная страна...", selectedValue)

    const getCountry = () => {
        let counrty = DATA[selectedValue.itemIndex - 1]
       
            let cities = Object.values(counrty)
            console.log("..выбранные города..", cities[2])
            return cities[2]
       
      
        
    }
    
    console.log("...TOWN......", city)
    return (
        <ScrollView>
            <View style={styles.content}>

                <StatusBar backgroundColor={PRIMARY_GREY_BACKGROUND} barStyle="dark-content" />

                <View style={styles.topPart}>
                    <View style={styles.header}>
                        < Vector />
                    </View>
                    <Text style={styles.title}>Add Address</Text>
                </View>


                <View style={styles.bottomPart}>
                    <View style={styles.selCountry}>
                        <Picker
                            // mode="dropdown"
                            selectedValue={selectedValue.itemValue}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedValue({ itemValue, itemIndex })
                            }
                            }>
                                <Picker.Item label="---" value="---" />
                            {DATA.map((el) => {
                                return <Picker.Item key={el.id} label={el.name} value={el.name} />
                            })}
                        </Picker>
                    </View>



                    <View style={styles.selState}>
                        <Picker
                            // mode="dropdown"
                            
                            selectedValue={city.itemValue}
                            onValueChange={(itemValue, itemIndex) => {
                                setCity({ itemValue, itemIndex })
                            }
                            }>
                                <Picker.Item label="Empty" value="Empty" />
                                {
                                    selectedValue? getCountry().map((el) =>{
                                        let i = 0
                                        return <Picker.Item key={i+1}label={el} value={el} />
                                    }):<Picker.Item label="Empty" value="Empty" />     
                                }
                    
                        </Picker>
                    </View>
                    <TextInput style={styles.searchObjectStyles}/>




         

                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({


    content: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        flex: 1
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
            marginTop: 15
    }
    


})