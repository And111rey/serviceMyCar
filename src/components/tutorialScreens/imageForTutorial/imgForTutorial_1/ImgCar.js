import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

export const ImgCar = () => {
    return (
            <Image style={styles.img} source={require("./toyota_20.png")}/>
    )
}

const styles = StyleSheet.create({
    img: {
        // position:"absolute",
        // justifyContent: "center",
        // alignItems: "center"
        // left: -20
        marginLeft: -20
    }
})
