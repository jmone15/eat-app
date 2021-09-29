import React, {useState} from "react";
import {Modal, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false);
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    const total = items
        .map(item => Number(
            item.price.replace("€", "")
        )).reduce((prev, curr) => prev + curr, 0);

    const totalEUR = total.toLocaleString('en', {
        style: "currency",
        currency: "EUR",
    });

    const style = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },
        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },
        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },
        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={style.modalContainer}>
                    <View style={style.modalCheckoutContainer}>
                        <Text style={style.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item}/>
                        ))}
                        <View style={style.subtotalContainer}>
                            <Text style={style.subtotalText}>Subtotal</Text>
                            <Text>{totalEUR}</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                        }}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                alignItems: "center",
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: "relative"
                            }} onPress={() => setModalVisible(false)}
                            >
                                <Text style={{color: "white", fontSize: 20}}>Checkout</Text>
                                <Text style={{
                                    position: "absolute",
                                    right: 20,
                                    color: "white",
                                    fontSize: 15,
                                    top: 17,
                                }}>{total ? totalEUR : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    /*const checkoutModalContent = () => {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
            }}>
                <View style={{
                    backgroundColor: "black",
                    padding: 10,
                    borderRadius: 30,
                    width: 150,
                    alignItems: "center",
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{color: "white"}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };*/

    //console.log(totalEUR);

    return (
        <>
            <Modal animationType="slide"
                   visible={modalVisible}
                   transparent={true}
                   onRequestClose={() => setModalVisible(false)}>
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 80,
                    zIndex: 999,
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <TouchableOpacity style={
                            {
                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                                          onPress={() => setModalVisible(true)}
                        >
                            <Text style={{color: "white", fontSize: 20, marginRight: 30}}>
                                View Card
                            </Text>
                            <Text style={{color: "white", fontSize: 20}}>{totalEUR}</Text>
                        </TouchableOpacity>
                    </View>
                </View>) : (<></>)}
        </>
    );
}
