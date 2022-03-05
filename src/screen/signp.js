import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native"
import { useState } from "react";
import Dashbord from "./dashbord";

function SignUp(props) {

    const [nameError, setNamError] = useState('');
    const [userNam, setUserNam] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [rePasssword, setrepassword] = useState('');

    const handlesignup = () => {
        if (userNam == "") {
            setNamError("Please Enter Your Name");
        }
        else if (email == "") {
            setNamError("Please Enter Your Email");
        }
        else if (password == "") {
            setNamError("Please Enter Your Password");
        }
        else if (rePasssword == "") {
            setNamError("Please Reconfirm Password");
        }
        else {
            props.navigation.navigate("Dashboard")
        }
    };



    return (
        <View style={Style.container}>
            <Dashbord textdata={userNam} />
            <Image style={Style.image} source={require('../../assets/img3.png')} />
            <Text style={Style.heading1}>Sign Up</Text>

            <View>
                <TextInput style={Style.input} onChangeText={text => setUserNam(text)} placeholder="Your Name" />
                <TextInput style={Style.input} onChangeText={text => setemail(text)} placeholder="Your Email" />
                <TextInput style={Style.input} onChangeText={text => setPassword(text)} placeholder="Password" />
                <TextInput style={Style.input} onChangeText={text => setrepassword(text)} placeholder="Re-Password" />
            </View>

            <TouchableOpacity onPress={handlesignup} style={Style.login}>
                <Text style={Style.text}> SignUp </Text>
            </TouchableOpacity>


            {setNamError !== "" && <View style={Style.alert}>
                <Text style={Style.alerttext}>{nameError}</Text>
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
    }
})

export default SignUp