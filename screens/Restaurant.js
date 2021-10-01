import React from "react";
import {StyleSheet, View} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurant/About";
import MenuItem from "../components/restaurant/MenuItem";
import ViewCart from "../components/restaurant/ViewCart";

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce",
        price: "€13.50",
        image: "https://www.jocooks.com/wp-content/uploads/2012/03/tandoori-chicken-1-11-500x375.jpg"
    },
    {
        title: "Pasta",
        description: "With butter lettuce, tomato and sauce",
        price: "€13.50",
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

export default function Restaurant({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical: 20}}/>
            <MenuItem restaurantName={route.params.name} foods={foods}/>
            <ViewCart navigation={navigation}/>
        </View>
    );
}

