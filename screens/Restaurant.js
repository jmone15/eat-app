import React from "react";
import {View} from "react-native";
import {Divider} from "react-native-elements";
import About from "../components/restaurant/About";
import MenuItem from "../components/restaurant/MenuItem";
import ViewCart from "../components/restaurant/ViewCart";


export default function Restaurant({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical: 20}}/>
            <MenuItem restaurantName={route.params.name}/>
            <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        </View>
    );
}

