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
  backgroundcolor: {
    backgroundColor: "#1957A7"
  },
  profilecontainer: {
    //width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: "8%"
  },
  dpcontainer: {
    width: 100,
    height: 100
  },
  dp: {
    width: "100%",
    height: "100%"
  },
  namecontainer: {
    marginTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center"
  },
  dpname: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "NunitoSans-Bold"
  },
  tagname: {
    marginTop: "2%",
    color: "#77B2FF",
    fontSize: 12,
    fontFamily: "NunitoSans-Regular"
  },
  multiplecontainer: {
    marginTop: "10%",
    marginBottom: "5%"
  },
  boxlecontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center"
  },
  subboxlecontainer: {
    width: "33.33%"
  },
  pcolor: {
    color: "#FFC27B"
  },
  profiletext: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 15,
    textTransform: "uppercase",
    fontFamily: "NunitoSans-Bold"
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}));
