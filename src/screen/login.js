import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import { SocialIcon } from 'react-native-elements';



function Login(props) {

    const [nam, setnam] = useState('');
    const [password, setpassword] = useState('');
    const [namError, setNamError] = useState('');

    const handlelogin = () => {
        if (nam == "") {
            setNamError("Please Enter Your Email")
        }

        else if (password == "") {
            setNamError("Please Enter Your Password")
        }

        else {
            props.navigation.navigate("Dashboard")
        }
    }


    return (
        <View style={Style.container}>

            <Image style={Style.image} source={require('../../assets/img2.png')} />
            <Text style={Style.heading1}>Login to Your Account</Text>

            <View style={Style.icons}>

                <SocialIcon type="facebook" onPress={() => {
                    alert('twitter')
                }} />

                <SocialIcon type="twitter" onPress={() => {
                    alert('twitter')
                }} />

                <SocialIcon type="google" onPress={() => {
                    alert('twitter')
                }} />

            </View>

            <View>
                <TextInput onChangeText={text => setnam(text)} style={Style.input} placeholder="Your Email" />
                <TextInput onChangeText={text => setpassword(text)} style={Style.input} placeholder="Password" />
            </View>

            <TouchableOpacity style={Style.login}>
                <Text style={Style.text}
                    onPress={() => handlelogin()} > Login </Text>
            </TouchableOpacity>

            { namError !== "" &&  <View style={Style.alert}>
                <Text style={Style.alerttext}>{namError}</Text>
            </View>}

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
        marginTop: 10,
    },
    login: {
        width: "100%",
        padding: 10,
        backgroundColor: "#7b00ff",
        borderRadius: 10,
        marginTop: 20,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    },
    image: {
        width: "100%",
        height: 200,
    },
    input: {
        marginTop: 20,
        width: "100%",
        padding: 10,
        backgroundColor: "#ddbdff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5500ff",
        color: "#5500ff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        placeholderTextColor: "#5500ff",
    },
    alert: {
        marginTop: 20,
        width: "100%",
        padding: 3,
        backgroundColor: "#fbdadf",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#ff98a9",
        textAlign: "center",
    },
    alerttext: {
        color: "#7b2432",
    },
    icons: {
        flexDirection:'row', 
        flexWrap:'wrap',
        margin: "auto",
        marginTop: 15,
    }
});


export default Login;