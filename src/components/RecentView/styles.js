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
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  flexRow: {
    flexDirection: "row",

    width: "100%",
    flexWrap: "wrap"
  },
  blue: {
    color: "#1957A7"
  },
  mt2: {
    marginTop: "2%"
  },
  mb8: {
    marginBottom: "8%"
  },
  mb5: {
    marginBottom: "5%"
  },
  mt5: {
    marginTop: "5%"
  },
  mt10: {
    marginTop: "10%"
  },
  borderRight: {
    borderRightColor: "#E5E5E5",
    borderRightWidth: 0.5
  },
  borderBottom: {
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 0.5
  },
  mainview: {
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  recentview: {
    width: "50%",
    height: 235,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  recentImage: {
    marginTop: "10%",
    height: 110,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderColor: "#E5E5E5",
    borderWidth: 0.5,
    borderRadius: 15,
    height: 110,
    width: "100%"
  },
  detailsview: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  name: {
    fontSize: 16,
    fontFamily: "NunitoSans-SemiBold",
    color: "#000"
  },
  ratingvalue: {
    marginLeft: "2%",
    fontFamily: "NunitoSans-SemiBold",
    marginTop: "-2.7%",
    fontSize: 20,
  },
  reviewButton: {
    backgroundColor: "#1957A7",
    height: 30,
    width: 110,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "NunitoSans-Regular"
  }
}));
