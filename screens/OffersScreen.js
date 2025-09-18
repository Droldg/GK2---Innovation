// OffersScreen.js viser en liste over madtilbud, som brugeren kan filtrere og reservere.

import React, { useMemo, useState } from "react";
import { View, Text, FlatList, Pressable, Platform } from "react-native";
import styles from "../styles";

// Simulerede tilbud, for at vise funktionaliteten. 
const seedOffers = [
    { id: "1", title: "Pastaboks", items: ["Pasta", "Tomatsauce", "Salat"], price: 15, pickup: "15:30–16:30", qty: 3 },
    { id: "2", title: "Vegetarboks", items: ["Grønt", "Hummus", "Brød"], price: 12, pickup: "15:30–16:00", qty: 0 },
    { id: "3", title: "Smørrebrød mix", items: ["Æg/rejer", "Frikadelle", "Kartoffel"], price: 20, pickup: "14:45–15:30", qty: 6 },
    { id: "4", title: "Suppe + brød", items: ["Tomatsuppe", "Flüte"], price: 10, pickup: "15:00–16:00", qty: 4 },
    { id: "5", title: "Salatbowl", items: ["Kylling", "Quinoa", "Dressing"], price: 18, pickup: "15:15–16:15", qty: 2 },
    { id: "6", title: "Wokboks", items: ["Nudler", "Grøntsager", "Soja"], price: 16, pickup: "15:20–16:20", qty: 5 },
    { id: "7", title: "Lasagne", items: ["Oksekød", "Ost", "Salat"], price: 22, pickup: "15:30–16:30", qty: 1 },
    { id: "8", title: "Dessertboks", items: ["Cheesecake", "Frugt"], price: 8, pickup: "15:30–16:00", qty: 7 },
];


export default function OffersScreen() {
    const [offers, setOffers] = useState(seedOffers); // Nuværende liste af tilbud (state kan ændres ved reservation)
    const [onlyAvailable, setOnlyAvailable] = useState(false); // Filter for kun at vise ledige tilbud. Dvs. alle udsolgte skjules.

    const list = useMemo( // Udregner den liste der faktisk vises på skærmen.
        () => offers.filter(o => (onlyAvailable ? o.qty > 0 : true)),
        [offers, onlyAvailable]
    );

    const reserve = (id) => // Reserveringsfunktion - trækker 1 fra qty på det valgte tilbud
        setOffers((prev) => prev.map((o) => (o.id === id && o.qty > 0 ? { ...o, qty: o.qty - 1 } : o)));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tilbud i dag</Text>

            
            <View style={styles.filterBar}>
                <Pressable
                    onPress={() => setOnlyAvailable((v) => !v)}
                    style={({ pressed }) => [
                        styles.filterBtn,
                        onlyAvailable && styles.filterBtnActive,
                        pressed && Platform.OS === "android" ? { opacity: 0.8 } : null,
                    ]}
                >
                    <Text style={[styles.filterText, onlyAvailable && styles.filterTextActive]}>
                        {onlyAvailable ? "Vis alle" : "Kun ledige"}
                    </Text>
                </Pressable>
            </View>

            <FlatList
                data={list}
                keyExtractor={(o) => o.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.cardTitle}>{item.title}</Text>

                            {/* Badge viser antal tilbage/udsolgt */}
                            <View
                                style={[
                                    styles.badge,
                                    { backgroundColor: item.qty > 0 ? "#059669" : "#DC2626" },
                                ]}
                            >
                                <Text style={styles.badgeText}>
                                    {item.qty > 0 ? `${item.qty} tilbage` : "Udsolgt"}
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.cardLine}>Afhentning: {item.pickup}</Text>
                        <Text style={styles.cardLine}>Pris: {item.price} kr.</Text>

                        {/* Indhold som chips */}
                        <View style={styles.chipRow}>
                            {item.items.map((x, i) => (
                                <View key={i} style={styles.chip}>
                                    <Text style={styles.chipText}>{x}</Text>
                                </View>
                            ))}
                        </View>

                        <Pressable
                            onPress={() => reserve(item.id)}
                            android_ripple={{ color: "rgba(0,0,0,0.1)" }}
                            disabled={item.qty === 0}
                            style={[styles.button, item.qty === 0 && { opacity: 0.5 }]}
                        >
                            <Text style={styles.buttonText}>{item.qty > 0 ? "Reserver" : "Udsolgt"}</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
}
