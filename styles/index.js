import { StyleSheet, Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent : 'center',
      alignItems :'center'
    },
    closeButton: {
      position: "absolute",
      top: 35,
      left: 15,
      height: closeButtonSize,
      width: closeButtonSize,
      borderRadius: Math.floor(closeButtonSize / 2),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#c4c5c4",
      opacity: 0.7,
      zIndex: 2,
    },
    media: {
      ...StyleSheet.absoluteFillObject,
    },
    closeCross: {
      width: "68%",
      height: 1,
      backgroundColor: "black",
    },
    control: {
      position: "absolute",
      flexDirection: "row",
      bottom: 38,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    capture: {
      backgroundColor: "#f5f6f5",
      borderRadius: 5,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
      marginHorizontal: 31,
    },
    recordIndicatorContainer: {
      flexDirection: "row",
      position: "absolute",
      top: 25,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      opacity: 0.7,
    },
    recordTitle: {
      fontSize: 14,
      color: "#ffffff",
      textAlign: "center",
    },
    recordDot: {
      borderRadius: 3,
      height: 6,
      width: 6,
      backgroundColor: "#ff0000",
      marginHorizontal: 5,
    },
    text: {
      color: "#fff",
    },
  });

  export default styles