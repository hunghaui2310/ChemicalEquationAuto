import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";

const Equation = () => {
    const [text, onChangeText] = React.useState("");
    const bodyText = useState("This is not really a bird nest.");
    const coefficientText = useState("2");

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "blue", flex: 0.3 }} />
            <View style={styles.euqationStyle}>
                <Text>{coefficientText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nhap chat 1. VD: KMnO4"
                />
                <Text>{bodyText}</Text>
            </View>
            <View style={styles.euqationStyle}>
                <Text>{coefficientText}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nhap chat 2. VD: KMnO4"
                />
                <Text>{bodyText}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1
    },
    euqationStyle: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Equation;