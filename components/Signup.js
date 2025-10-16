// Signup.js
// Signup komponent til oprettelse af ny bruger ved hjælp af Firebase
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/database";
import styles from "../style/styles";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const emailTrimmed = email.trim().toLowerCase();
    const isEmailValid = /\S+@\S+\.\S+/.test(emailTrimmed);
    if (!isEmailValid) {
      Alert.alert("Ugyldig e-mail", "Indtast en gyldig e-mailadresse (fx navn@domæne.dk).");
      return;
    }
    if (password.length < 6) {
      Alert.alert("For kort adgangskode", "Adgangskoden skal være mindst 6 tegn.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, emailTrimmed, password);
      Alert.alert("Bruger oprettet", "Velkommen! Du er nu oprettet som bruger." );
    } catch (e) {
      const map = {
        "auth/email-already-in-use": "E-mailen er allerede registreret.",
        "auth/invalid-email": "Ugyldig e-mailadresse.",
        "auth/weak-password": "Adgangskoden er for svag (min. 6 tegn).",
      };
      Alert.alert("Fejl", map[e.code] || e.message);
    }
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.authCard}>
        <Text style={styles.title}>Opret bruger</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Adgangskode (min. 6 tegn)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Opret bruger</Text>
        </Pressable>
      </View>
    </View>
  );
}
