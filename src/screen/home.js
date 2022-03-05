import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./login"
import signp from "./signp";
import Dash from "./dashbord";

function Homescreen(props) {

    return (
        <View style={Style.container}>
            <Image style={Style.image} source={require('../../assets/img1.png')} />

            <Text style={Style.heading1}>
                Welcome To UI Lover
            </Text>

            <Text style={Style.para}>
                We have meny features  such as shopping cart,
                map and massenger for you in this app.
                you can Enjoy in App
            </Text>

            <TouchableOpacity style={Style.login}
                onPress={() => {
                    props.navigation.navigate("Login")
                }} >
                <Text style={Style.text}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.register}
                onPress={() => {
                    props.navigation.navigate("Rigester")
                }}>
                <Text style={Style.text2}> Register </Text>
            </TouchableOpacity>

        </View>

    )
};


const Style = StyleSheet.create({
    container: {
        display: "flex",
        flexBasis: 1,
        textAlign: "center",
        margin: 30,
    },
    heading1: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
    },
    para: {
        fontSize: 13,
        color: "#707070",
        marginTop: 30,
        marginBottom: 20,
    },
    login: {
        width: "100%",
        padding: 10,
        backgroundColor: "#7b00ff",
        borderRadius: 10,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    },
    register: {
        marginTop: 10,
        width: "100%",
        padding: 7,
        backgroundColor: "#ddbdff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5500ff",
    },
    text2: {
        color: "#7b00ff",
        fontWeight: "bold",
        fontSize: 15,
    },
    image: {
        width: "100%",
        height: 200,
    }
})

const Stack = createNativeStackNavigator();

function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Rigester" component={signp} />
                <Stack.Screen name="Dashboard" component={Dash} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Home