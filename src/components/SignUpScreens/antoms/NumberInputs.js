import React from "react"
import { View, StyleSheet, TextInput, Image } from "react-native"
import { PRIMARY_GREY_BACKGROUND } from "../../../assets/styles/styles"
import { FlagCountry } from "../icons/CountryFlag"

export const NumberInputs = (props) => {
    return (
        <View style={styles.numberInputs}>
            < FlagCountry />
            {/* <Image style={styles.flag}  source={require("../../../assets/Flags/hotpng.png")}/> */}
            < TextInput keyboardType="decimal-pad" style={styles.countryCodeInpt} placeholder="+971" placeholderTextColor="#A3ABB8" />
            < TextInput keyboardType="decimal-pad" keyboardAppearance="dark" style={styles.phoneNumberInpt} placeholder="Phone number" placeholderTextColor="#A3ABB8" />
        </View>
    )
}
const styles = StyleSheet.create({
    numberInputs: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        width: 317,
        alignContent: "space-between"
    },

    flag: {
        position: "absolute",
        zIndex: 1,
        margin: 10

    },
    countryCodeInpt: {
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        width: 99,
        borderRadius: 8,
        padding: 13,
        paddingLeft: 40,
        height: 44,

    },
    phoneNumberInpt: {
        width: 201,
        height: 44,
        backgroundColor: PRIMARY_GREY_BACKGROUND,
        borderRadius: 8,
        padding: 13
    }
})