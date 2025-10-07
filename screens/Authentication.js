import React, { useState } from "react";
import { View, Button } from "react-native";
import styles from "../style/styles";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function Authentication() {
  const [mode, setMode] = useState("login");
  return (
    <View style={styles.container}>
      {mode === "login" ? <Login /> : <Signup />}
      <View style={{ height: 8 }} />
      {mode === "login" ? (
        <Button title="Opret bruger" onPress={() => setMode("signup")} />
      ) : (
        <Button title="Har du en konto? Log ind" onPress={() => setMode("login")} />
      )}
    </View>
  );
}
// Authentication.js håndterer login og oprettelse af bruger. Skifter mellem Login og Signup komponenterne.