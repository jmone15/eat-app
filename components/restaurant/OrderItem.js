import React from "react";
import {Text, View} from "react-native";


export default function OrderItem({item}) {
    const {title, price} = item;
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            borderBottomColor: 1,
            borderBottomWidth: "#656161"
        }}>
            <Text style={{fontWeight: "600", fontSize: 16}}>{title}</Text>
            <Text style={{opacity: 0.7, fontSize: 16}}>{price}</Text>
        </View>
    );
}


