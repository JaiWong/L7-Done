// Exercise4
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "whitesmoke",
        borderColor: "whitesmoke",
        marginTop: 30,
        padding: 10,
    },
    child: {
        alignItems: "center", // ✅ lowercase
        justifyContent: "center",
        width: 80,
        height: 80,
    },
    text: {
        fontWeight: "bold",
        color: "white",
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "skyblue" }]}>
                <Text style={styles.text}>Square 1</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "aquamarine" }]}>
                <Text style={styles.text}>Square 2</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "crimson" }]}>
                <Text style={styles.text}>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
