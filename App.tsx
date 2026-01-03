import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Boardgame Scores 🎲</Text>

      {/* Exemple de section bibliothèque de jeux */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ma bibliothèque</Text>
        <Text style={styles.item}>Catan</Text>
        <Text style={styles.item}>7 Wonders</Text>
        <Text style={styles.item}>Carcassonne</Text>
      </View>

      {/* Exemple de section parties */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parties jouées</Text>
        <Text style={styles.item}>Catan - 12/12/2025 - Score: 10</Text>
        <Text style={styles.item}>7 Wonders - 02/01/2026 - Score: 20</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#1e293b", // slate-900
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    width: "100%",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#334155", // slate-800
    borderRadius: 12,
  },
  sectionTitle: {
    color: "#f1f5f9", // slate-100
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    color: "#e2e8f0", // slate-200
    fontSize: 16,
    marginBottom: 5,
  },
});
