import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    elevation: 10,

    backgroundColor: "#fff"
  },
  iconView: {
    width: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  tabText: {
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 14,
    color: "#000"
  }
}));
