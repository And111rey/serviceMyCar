import React from "react"
import { Image, StyleSheet } from "react-native"

export const FlagCountry = () => {
    return (
        <Image style={styles.flag} source={require("../../../assets/Flags/hotpng.png")}/>
    )
}

const styles = StyleSheet.create({
    flag: {
        position: "absolute",
        zIndex:1,
        margin: 10
        
    },
})