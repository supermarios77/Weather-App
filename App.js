import { StatusBar } from "expo-status-bar";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import * as Location from 'expo-location';

const App = () => {
  let apiKey = "5e12c681da5ef47ef91bcd52da3a3520";

  const [temp, setTemp] = useState("24");
  const [location, setLocation] = useState("Antalya");
  const [humidity, setHumidity] = useState("64%");
  const [windSpeed, setWindSpeed] = useState("18 km/h");

  const search = async (inputValue) => {
    if (inputValue === "") {
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      setTemp(data.main.temp);
      setLocation(data.name);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <View style={styles.body}>
      <LinearGradient
        style={styles.container}
        colors={["#130754", "#3b2f80"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.topBar}>
          <TextInput
            style={styles.Input}
            textContentType="text"
            placeholder="Search"
            name="cityInput"
            onChangeText={search}
          />

          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => search(location)}
          >
            <MagnifyingGlassIcon />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require("./assets/weather-images/cloud.png")}
            style={styles.weatherImage}
          />
        </View>

        <View style={styles.weatherTemp} name="temp">
          {temp}
        </View>

        <View style={styles.weatherLocation} name="location">
          {location}
        </View>

        <View style={styles.dataContainer}>
          <View style={styles.element}>
            <Image
              source={require("./assets/weather-images/humidity.png")}
              style={styles.icon}
            />
            <View style={styles.data}>
              <Text style={styles.humidityPercent} name="humidity">
                {humidity}
              </Text>
              <Text style={styles.text}>Humidity</Text>
            </View>
          </View>

          <View style={styles.element}>
            <Image
              source={require("./assets/weather-images/wind.png")}
              style={styles.icon}
            />
            <View style={styles.data}>
              <Text style={styles.humidityPercent} name="windSpeed">
                {windSpeed}
              </Text>
              <Text style={styles.text}>Wind Speed</Text>
            </View>
          </View>
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
    flexWrap: "wrap",
  },
  Input: {
    display: "flex",
    display: "inline",
    width: "326px",
    height: "78px",
    backgroundColor: "#ebfffc",
    border: "none",
    outline: "none",
    paddingLeft: "40px",
    color: "#626262",
    borderRadius: "40px",
  },
  searchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "78px",
    height: "78px",
    backgroundColor: "#ebfffc",
    borderRadius: "40px",
    cursor: "pointer",
  },
  weatherImage: {
    width: "250px",
    height: "250px",
    marginTop: "29px",
    display: "flex",
    justifyContent: "center",
  },
  weatherTemp: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: "120px",
    fontFamily: "helvetica neue",
    fontWeight: "400",
  },
  weatherLocation: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: "50px",
    fontFamily: "Arial",
    fontWeight: "200",
  },
  dataContainer: {
    marginTop: "50px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "50px",
    color: "white",
  },
  element: {
    textAlign: "center",
    flexDirection: "row",
    margin: "auto",
    alignItems: "flex-start",
    gap: "12px",
  },
  data: {
    fontSize: "34px",
    fontWeight: "400",
  },
  icon: {
    marginTop: "10px",
    width: "35px",
    height: "35px",
  },
  text: {
    fontSize: "20px",
    fontWeight: "400",
    color: "white",
  },
  humidityPercent: {
    fontSize: "34px",
    fontWeight: "400",
    color: "white",
  },
});

export default App;
