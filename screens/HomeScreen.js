// HomeScreen.js er startsiden i appen, som giver brugeren mulighed for at navigere til tilbud eller info-skærmen.

import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>MadRedder</Text>
            <Text style={styles.subtitle}>
                Få overblik over dagens rester i kantinen og reserver en boks til lav pris.
            </Text>

            <View style={{ height: 8 }} />
            <Button title="Se tilbud" onPress={() => navigation.navigate("Offers")} />

            <View style={{ height: 8 }} />
            <Button title="Info" onPress={() => navigation.navigate("Info")} />

            <View style={{ height: 16 }} />
            <Text style={styles.helperText}>
                Tip: Tilbud opdateres i løbet af eftermiddagen. Afhent inden for det angivne tidsrum.
            </Text>
        </View>
    );
}
