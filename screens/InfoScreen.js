// InfoScreen.js er en skærm, som har til formål at give brugeren information om appens koncept og formål.

import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function InfoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Info</Text>
            <Text style={styles.subtitle}>
                MadRedder mindsker madspild i virksomheders kantiner ved at gøre overskudsmad synlig og let at reservere.
                Kantinen udgiver ‘dagens rester’ med pris og afhentningstid; medarbejdere kan reservere en boks direkte i appen.
            </Text>
        </View>
    );
}
