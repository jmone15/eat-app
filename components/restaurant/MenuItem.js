import React from "react";
import {Image, Text, View, StyleSheet, ScrollView} from "react-native";
import {Divider} from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce",
        price: "$13.50",
        image: "https://www.jocooks.com/wp-content/uploads/2012/03/tandoori-chicken-1-11-500x375.jpg"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce",
        price: "$13.50",
        image: "https://www.jocooks.com/wp-content/uploads/2012/03/tandoori-chicken-1-11-500x375.jpg"
    }
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "500",
    }
});

export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndication={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox iconStyle={{
                            borderColor: "lightgray",
                            borderRadius: 0,
                        }} fillColor="green"/>
                        <FoodInfo food={foods[0]}/>
                        <FoodImage food={foods[0]}/>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{width: 220, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}}/>
    </View>
)
