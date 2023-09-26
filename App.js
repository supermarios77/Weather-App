import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const API_KEY = "5e12c681da5ef47ef91bcd52da3a3520";
const DEFAULT_LOCATION = "Antalya";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({
    temp: "24",
    location: "Antalya",
    humidity: "64%",
    windSpeed: "18 km/h",
    weatherIconCode: "01d", // Default icon code for clear day
  });
  const [searchInput, setSearchInput] = useState("");

  const search = async (inputValue) => {
    if (inputValue === "") {
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        temp: data.main.temp,
        location: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weatherIconCode: data.weather[0].icon, // Get the icon code from the API response
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Display a user-friendly error message
    }
  };

  const fetchDefaultWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_LOCATION}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        temp: data.main.temp,
        location: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weatherIconCode: data.weather[0].icon, // Get the icon code from the API response
      });
    } catch (error) {
      console.error("Error fetching default weather data:", error);
      // Display a user-friendly error message
    }
  };

  useEffect(() => {
    fetchDefaultWeather();
  }, []);

  return (
    <View style={styles.body}>
      <LinearGradient
        style={styles.container}
        colors={["#130754", "#3b2f80"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={setSearchInput}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => search(searchInput)}
          >
            <MagnifyingGlassIcon />
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData.weatherIconCode}@4x.png`
          }}
          style={styles.weatherImage} 
        />

        <Text style={styles.tempText}>{weatherData.temp}°C</Text>
        <Text style={styles.locationText}>{weatherData.location}</Text>

        <View style={styles.dataContainer}>
          <WeatherData style={styles.dataLabel} label="Humidity" data={weatherData.humidity} />
          <WeatherData style={styles.dataLabel} label="Wind Speed" data={weatherData.windSpeed} />
        </View>
      </LinearGradient>
    </View>
  );
};

const WeatherData = ({ label, data }) => {
  return (
    <View style={styles.weatherData}>
      <Text style={styles.dataText}>{data}</Text>
      <Text style={styles.dataLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 700,
    height: 800,
    margin: "auto",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100,
    borderRadius: 20
  },
  body: {
    backgroundColor: "#161515",
    width: "100%",
    height: "auto",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    flex: 1,
    padding: 20,
    width: 300,
    backgroundColor: "#ebfffc",
    borderRadius: 40,
    paddingHorizontal: 20,
    color: "#626262",
  },
  searchButton: {
    width: 60,
    height: 60,
    backgroundColor: "#ebfffc",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  weatherImage: {
    width: 350,
    height: 250,
    marginTop: 30,
  },
  tempText: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
  },
  locationText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    gap: 20,
  },
  weatherData: {
    alignItems: "center",
    flexDirection: "column"
  },
  dataIcon: {
    width: 35,
    height: 35,
    marginTop: 10,
  },
  dataText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    gap: 3,
  },
  dataLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default WeatherApp;
