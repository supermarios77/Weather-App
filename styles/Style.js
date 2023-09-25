import { StyleSheet } from "react-native";

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

export default Style;