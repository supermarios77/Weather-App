import { StatusBar } from "expo-status-bar";
import { View, TextInput, Text, StyleSheet } from "react-native";
function App() {
  return (
    <View style={Style.container}>
      

      <View Style={Style.topBar}>
        <TextInput
          style={styles.Input}
          textContentType="text"
          placeholder="Search"
        />
      </View>

      <Text>Hello</Text>

      <StatusBar style="auto" />
    </View>
    
  );
}

const Style = StyleSheet.create({
  container: {
      width: "607px",
      height: "829px",
      margin: "auto",
      marginTop: "75px",
      borderRadius: "12px",
  },
  topBar: {
      display: "flex",
      justifyContent: "center",
      gap: "14px",
      paddingTop: "60px"
  },
  Input: {
      display: "flex",
      width: "326px",
      height: "78px",
      backgroundColor: "#ebfffc",
      border: "none",
      outline: "none",
      borderRadius: "40px",
      paddingLeft: "40px",
      color: "#626262"
  },
  gradient: {
      width: "100%",
      height: "100%",
    },
})

export default App;
