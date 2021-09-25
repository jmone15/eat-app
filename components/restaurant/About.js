import React from "react";
import {Image, Text, View} from "react-native";

const image = "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
const title = "Farm House Chicken Thai Cuisine";
const description = "Thai • Comfort";

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}/>
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180}}/>
)

