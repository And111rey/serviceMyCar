import React from "react"
import {View, StyleSheet} from  "react-native"
import Svg, {
    Path,
    Circle,
    Ellipse,
    Line,
    G,
    Defs,
    ClipPath,
    Rect,
    LinearGradient,
    Stop,
    Mask,
} from 'react-native-svg';
import { Vibration } from "react-native";

export const Pointer = () => {
    return (
        <View style={styles.pointerStyle}>
        <Svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.99971 0C3.14026 0 0 2.97286 0 6.62694C0 7.58007 0.206068 8.49009 0.612173 9.33195C2.36229 12.9575 5.71776 16.7853 6.70471 17.872C6.77866 17.9532 6.88646 18 6.9999 18C7.11335 18 7.22115 17.9532 7.29509 17.872C8.28165 16.7855 11.6371 12.9579 13.3878 9.33195C13.7941 8.49009 14 7.58007 14 6.62694C13.9996 2.97286 10.8594 0 6.99971 0ZM6.99971 10.069C4.99487 10.069 3.36364 8.52473 3.36364 6.62676C3.36364 4.72861 4.99487 3.18434 6.99971 3.18434C9.00455 3.18434 10.6358 4.72861 10.6358 6.62676C10.636 8.52473 9.00474 10.069 6.99971 10.069Z" fill="white" />
        </Svg>
        </View>
    )
}
const styles = StyleSheet.create({
    pointerStyle: {
        position: "absolute",
        left: 14
    }
}) 