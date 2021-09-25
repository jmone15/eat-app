import React from "react";
import {View} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurant/About";


export default function Restaurant() {
    return (
        <View>
            <About/>
            <Divider width={1.8} style={{marginVertical: 20}}/>
        </View>
    );
}
