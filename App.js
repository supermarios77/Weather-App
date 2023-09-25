import { StatusBar } from "expo-status-bar";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const App = () => {
  return (
    <View style={styles.body}>

      <LinearGradient
        style={styles.container}
        colors={["#130754", "#3b2f80"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >

        <View style={styles.topBar} >

          <TextInput
            style={styles.Input}
            textContentType="text"
            placeholder="Search"
          />

          <TouchableOpacity
            onPress={() => toggleSearch(!showSearch)}
            style={styles.searchIcon}
          >
            <MagnifyingGlassIcon />

          </TouchableOpacity>

        </View>

        <StatusBar style="auto" />

      </LinearGradient>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#161515",
    width: "100%",
    height: "auto",
  },
  container: {
    width: "40rem",
    height: "50rem",
    margin: "auto",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "4rem",
    borderRadius: "12px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "center",
    gap: "14px",
    paddingTop: "60px",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  Input: {
    display: "flex",
    display: "inline",
    width: "326px",
    height: "78px",
    backgroundColor: "#ebfffc",
    border: "none",
    outline: "none",
    borderRadius: "40px",
    paddingLeft: "40px",
    color: "#626262",
  },
  searchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "78px",
    height: "78px",
    backgroundColor: "#ebfffc",
    borderRadius: "40px",
    cursor: "pointer"

  }
});

export default App;
