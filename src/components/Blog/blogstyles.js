import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  topimg: {
    width: "100%",
    height: "100%"
  },
  topimgbox: {
    width: "100%",
    height: 180
  },
  forumcontainer: {
    marginTop: "6%",
    width: "90%",
    alignItems: "flex-start",
    flexDirection: "column"

  },
  w40: {
    width: "40%"
  },
  w60: {
    width: "60%"
  },
  mt8: {
    marginTop: "8%"
  },
  mr5: {
    marginRight: "5%"
  },
  ml8: {
    marginLeft: "8%"
  },

  heading: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 24,
    color: "#000",
    width: "90%"
  },
  subtext: {
    flexDirection: "row",
    width: "90%",
  },
  textleft: {
    width: "80%",
    fontFamily: "NunitoSans-Regular",
    fontSize: 18,
    marginTop: "5%",
  },
  textright: {
    marginTop: "4%",
    width: "20%",
  },
  borderline: {
    borderBottomColor: "rgba(206, 199, 199, 0.5)",
    borderBottomWidth: 1,
    width: "90%"
  },
  articlebox: {
    marginTop: "6%",

  },
  textcontainbox: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "5%"
  },
  containbox: {
    color: "#888888",
    fontSize: 18,
    fontFamily: "NunitoSans-Regular",
  },
  pcolor: {
    color: "#FE9D2C"
  }
}));
