// import React from "react";
// import Home from "./src/screen/home";

// function page(){
//   return <Home />
// };

// export default page;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Center, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';


function dashboard(){

    const [userdata, myUserData] = useState();
    const [isloading, setLoading] = useState();

    useEffect(() => {
        getuserData();
    }, []);

    const getuserData = async () => {
        try {
            const response = await fetch("https://hiflix.fun/jazz_tv/api.json");
            const myData = await response.json();
            myUserData(myData);
            // setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Center style={style.container}>
            {isloading ? (<View> <ActivityIndicator size={large} color="0000ff" /> </View>)
                : (
                    <View>


                        <View style={style.view}>
                            <TextInput style={style.searchbar} placeholder="Seatch Here..." />
                            <TouchableOpacity style={style.btn}>
                          
                            </TouchableOpacity>
                        </View>

                        <View style={style.container2}>

                            <TouchableOpacity style={style.textbg}>
                                <Text style={style.text}>All</Text>
                            </TouchableOpacity>

                        </View>

                        <FlatList data={userdata}
                            renderItem={({ item }) => {
                                return (
                                    <View style={style.card}>
                                        {/* <Image style={style.cardimg} source={require('../image/sell.jpg')} /> */}
                                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                            <Text style={style.title}>{item.itemnam}</Text>
                                            <Text style={style.label}>{item.label}</Text>
                                            <Text style={style.discription}>Ergonimical From Human Body Cover</Text>
                                            <Text style={style.prise}>{item.prise}</Text>

                                            <TouchableOpacity style={style.buy}>
                                                <Text style={style.text}>Buy</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                )};

        </Center>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#ebebeb",
    },
    view: {
        margin: 10,
        width: "90%",
        textAlign: "center",
        display: "flex",
        flexDirection: "row"
    },
    searchbar: {
        borderWidth: 1,
        borderColor: "#d4d4d4",
        borderRadius: 10,
        width: "60%",
        margin: 0,
        padding: 3,
        color: "#d4d4d4",
    },
    btn: {
        width: 50,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 8,
        position: "absolute",
        right: 0,
        padding: 15
    },
    container2: {
        position: "relative",
        padding: 10,
    },
    textbg: {
        backgroundColor: "#fe7466",
        padding: 10,
        width: 50,
        textAlign: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        width: "90%",
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    cardimg: {
        width: 100,
        height: 100,
    },
    title: {
        color: "#fe7466",
        fontSize: 17,
    },
    label: {
        fontSize: 13,
        fontWeight: "bold",
    },
    discription: {
        marginTop: 5,
        maxWidth: 140,
    },
    prise: {
        color: "#fe7466",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 5
    },
    buy: {
        backgroundColor: "#fe7466",
        borderRadius: 20,
        padding: 5,
        position: "absolute",
        top: "65%",
        right: -50,
        width: 60,
    }

})

export default dashboard