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
    alignItems: "center"
  },
  forumcontainer: {
    marginTop: "6%",
    width: "95%",
    //alignItems: "center"
    marginLeft: "5%"
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
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 24,
    color: "#020202"
  },
  flexrow: {
    flexDirection: "row",
    width: "100%"
  },
  textleft: {
    textAlign: "left",
    width: "60%",
    marginTop: "2%",
    marginBottom: "4%"
  },
  textright: {
    marginTop: "12%",
    width: "40%",
    textAlign: "right",
    marginBottom: "4%",
    marginLeft: "8%"
  },
  borderline: {
    borderBottomColor: "rgba(206, 199, 199, 0.5)",
    borderBottomWidth: 1,
    width: "90%"
  },
  articlebox: {
    marginTop: "6%",
    marginBottom: "10%"
  },
  articledate: {
    fontSize: 16,
    marginBottom: "4%",
    fontFamily: "NunitoSans-Regular",
    color: "#000"
  },
  textcontainbox: {
    textAlign: "center",
    alignItems: "center",
    width: "95%",
    marginBottom: "5%",
    fontFamily: "NunitoSans-Regular"
  },
  containbox: {
    color: "#888888",
    fontSize: 18,
    fontFamily: "NunitoSans-Regular",
    textAlign: "justify"
  },
  dpcontainer: {
    width: 70,
    height: 70
  },
  dp: {
    width: "100%",
    height: "100%"
  },
  left: {
    textAlign: "left"
  },
  profileName: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 18,
    color: "#1957A7",
    marginBottom: "2%"
  },
  rattingNumber: {
    marginLeft: "4%",
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    marginTop: "-2%"
  }
}));