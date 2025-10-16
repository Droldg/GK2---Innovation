// screens/ProfileScreen.js
import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import styles from "../style/styles";
import { auth } from "../database/database";
import { signOut } from "firebase/auth";

export default function ProfileScreen() {
  const email = auth.currentUser?.email ?? "(ukendt)";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Logget ud", "Du er nu logget ud. Vi håber at se dig igen snart!");
    } catch (error) {
      Alert.alert("Fejl", "Kunne ikke logge ud. Prøv igen.");
    }
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.authCard}>
        <Text style={styles.title}>Min profil</Text>
        <Text style={{ marginBottom: 16 }}>
          Du er logget ind som:{" "}
          <Text style={{ fontWeight: "700", color: "#2563EB" }}>{email}</Text>
        </Text>

        <Pressable style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log ud</Text>
        </Pressable>
      </View>
    </View>
  );
}
// ProfileScreen.js viser brugerens e-mail og en knap til at logge ud via Firebase Authentication.