import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";

function Dash( {textdata} ) {
    return (
        <View style={Style.container}>
            <Image style={Style.image} source={require('../../assets/proflie.jpg')} />
            <Text style={Style.nam}> {textdata} </Text>
            <Text style={Style.heading}>Good Morning</Text>

            <View style={Style.maincontainer}>

                <Text>Hello</Text>
            </View>
        </View>
    )
};

const Style = StyleSheet.create({
    container: {
        textAlign: "center",
        height: "35%",
        backgroundColor: "#7b00ff",
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#fff",
        textAlign: "center",
    },
    heading: {
        color: "#ffd900",
        fontWeight: "bold",
        fontSize: 22,
    },
    nam: {
        fontSize: 37,
        textAlign: "center",
        color: "#fff",
        marginTop: 10,
    },
    maincontainer: {
        backgroundColor: "#ededed",
        height: "300%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10,
    },
});

export default Dash