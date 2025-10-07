// styles.js definerer farver og styles, som bruges i hele appen. Her er det samlet i en separat fil.

import { StyleSheet } from "react-native";

const palette = {
  bg: "#F7F7FB",
  card: "#FFFFFF",
  border: "#E5E7EB",
  text: "#111827",
  muted: "#6B7280",
  primary: "#111827", 
  success: "#059669",
  danger: "#DC2626",
};

export default StyleSheet.create({
  // Layout og tekst
  container: { flex: 1, padding: 16, backgroundColor: palette.bg },
  title: { fontSize: 24, fontWeight: "800", color: palette.text, marginBottom: 12 },

// Home Typografien
appTitle: { fontSize: 28, fontWeight: "800", color: "#111827", marginBottom: 4 },
subtitle:  { color: "#6B7280", marginBottom: 12 },
helperText:{ color: "#6B7280", fontSize: 12 },

  // Kort til tilbud (bruges på tilbudene i tilbudsskærmen)
  card: {
    backgroundColor: palette.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 14,

    // Lidt skygge/elevation for at løfte kortet visuelt. Giver en visuel effekt.
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: { fontSize: 18, fontWeight: "700", color: palette.text, marginBottom: 6 },
  cardLine: { color: palette.muted, marginBottom: 2 },

  // Knapper
  button: {
    marginTop: 10,
    alignSelf: "flex-start",
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: palette.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },

  // Badges til "X antal tilbage/udsolgt"
  badge: {
    paddingHorizontal: 10,
    height: 26,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: { color: "#fff", fontWeight: "700", fontSize: 12 },

  // Chips for indhold. Viser madens ingredienser og indhold, fx "Salat", "Brød", "Æg" osv.
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 6, marginBottom: 6 },
  chip: {
    paddingHorizontal: 10,
    height: 26,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: palette.border,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  chipText: { color: palette.muted, fontSize: 12 },

  // Række med elementer (bruges i kortene til at placere titel og badge på samme linje)
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },

  // Filtreringsbar (funktionaliteten som brugeren kan trykke på for at filtrere tilbud)
  filterBar: { flexDirection: "row", alignItems: "center", marginBottom: 8, gap: 8 },
  filterBtn: {
    paddingHorizontal: 12,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  filterBtnActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },
  filterText: { color: "#111827", fontWeight: "600", fontSize: 12 },
  filterTextActive: { color: "#fff" },

input: {
  borderWidth: 1,
  borderColor: palette.border,
  borderRadius: 10,
  paddingHorizontal: 12,
  height: 44,
  backgroundColor: "#fff",
  marginBottom: 10,
},



});
