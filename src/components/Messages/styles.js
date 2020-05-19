import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    width: "100%",
    height: "100%"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start"
    // alignItems: "center"
  },
  msgcontainer: {
    marginLeft: "5%",
    marginTop: "5%",
    width: "90%"
  },
  blue: {
    color: "#1957A7",
    fontFamily: "NunitoSans-Regular"
  },
  flexend: {
    justifyContent: "flex-end"
  },
  mt4: {
    marginTop: "4%"
  },
  headtext: {
    fontSize: 26,
    color: "#000",
    fontFamily: "NunitoSans-Bold",
    marginBottom: "6%"
  },
  articleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "95%",
    flex: 1,
    marginBottom: 20,
    marginLeft: "0%"
  },
  boxView: {
    width: "100%",
    paddingBottom: "6%",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderBottomColor: "rgba(172, 146, 146, 0.25)",
    borderBottomWidth: 1
  },
  bordertop: {
    borderTopColor: "rgba(172, 146, 146, 0.25)",
    borderTopWidth: 1
  },
  articleImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20
  },
  image: {
    height: 65,
    justifyContent: "flex-start",
    alignItems: "center",
    width: 65,
    marginTop: 10
  },
  innerDetailsView: {
    width: "75%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 10
  },
  labelView: {
    flexDirection: "row",
    //alignItems: "center",
    marginTop: "2%"
  },
  label: {
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 14,
    width: "80%"
  },
  name: {
    color: "#000",
    fontFamily: "NunitoSans-Bold",
    width: "80%",
    fontSize: 16
  },
  remmsg: {
    fontFamily: "NunitoSans-SemiBold",
    color: "#FFF"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1957A7",
    borderRadius: 20,
    height: 20,
    width: 20,
    textAlign: "center",
    elevation: 3
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}));
