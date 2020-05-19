import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    width: "100%",
    height: "100%"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    backgroundColor: "#F8F8F8"
    // justifyContent: "flex-start",
    // alignItems: "flex-start"
  },
  w35: {
    width: "35%"
  },
  w65: {
    width: "65%"
  },
  w33: {
    width: "33.33%"
  },
  ml2: {
    marginLeft: "2%"
  },
  mt5: {
    marginTop: "5%"
  },
  mb5: {
    marginBottom: "5%"
  },
  pb5: {
    paddingBottom: "5%"
  },
  center: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center"
  },
  listconatiner: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%"
  },
  headtext: {
    fontSize: 26,
    fontFamily: "NunitoSans-Bold",
    color: "#666666",
    marginBottom: "3%"
  },
  borderbottom: {
    borderBottomColor: "rgba(206, 199, 199, 0.5)",
    borderBottomWidth: 1
  },
  borderright: {
    borderRightColor: "rgba(206, 199, 199, 0.5)",
    borderRightWidth: 1
  },
  mainbox: {
    elevation: 3,
    backgroundColor: "#FFF",
    marginTop: "4%",
    flexDirection: "column",
    width: "100%",
    borderColor: "rgba(206, 199, 199, 0.5)",
    borderWidth: 0.5,
    borderRadius: 15,
    //height:180,
    //paddingBottom: "5%"
  },
  flexrow: {
    flexDirection: "row"
  },
  flexcoloum: {
    flexDirection: "column"
  },
  blue: {
    color: "#1957A7"
  },
  yellow: {
    color: "#FE9D2C"
  },
  subbox: {
    width: "86%",
    marginLeft: "7%",
    marginTop: "3%",
    paddingBottom: "2%"
  },
  imageview: {
    width: "85%",
    height: 70,
    borderColor: "grey",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  img: {
    height: "100%",
    width: "100%"
  },
  boxtexthead: {
    fontSize: 18,
    fontFamily: "NunitoSans-Bold",
    color: "#5E5E5E"
  },
  textline: {
    fontSize: 15,
    fontFamily: "NunitoSans-SemiBold",
    color: "#5E5E5E"
  },
  counttext: {
    fontSize: 24,
    fontFamily: "NunitoSans-SemiBold"
  },
  countsubtext: {
    fontSize: 16,
    fontFamily: "NunitoSans-Regular",
    color: "#888888"
  }
}));
