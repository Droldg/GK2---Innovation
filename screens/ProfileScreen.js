import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../style/styles";
import { auth } from "../database/database";
import { signOut } from "firebase/auth";

export default function ProfileScreen() {
  const email = auth.currentUser?.email ?? "(ukendt)";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Min profil</Text>
      <Text style={{ marginBottom: 12 }}>Logget ind som: {email}</Text>
      <Button title="Log ud" onPress={() => signOut(auth)} />
    </View>
  );
}
// ProfileScreen.js viser brugerens email og en knap til at logge ud.