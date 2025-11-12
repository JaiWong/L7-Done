// Exercise 2
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1, // ✅ Fixed capitalization (was "BorderWidth")
        justifyContent: "center", // optional, to center text vertically
    },
    boxText: {
        textAlign: "center",
        color: "white",
    },
    title: {
        fontWeight: "bold",
    },
});

const Exercise2 = () => {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Our People</Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Our Campus</Text>
            </View>
        </View>
    );
};

export default Exercise2;
