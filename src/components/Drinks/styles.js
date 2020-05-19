import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  drinkView: {
    width: "90%",
    // height: 160,
    marginTop: 15,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 0.5,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  image: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "40%"
  },
  detailsView: {
    width: "60%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // height: "100%",
    marginLeft: 15
  },
  drinkImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#E5E5E5",
    borderWidth: 0.5
  },
  drinkName: {
    fontSize: 16,
    fontFamily: "NunitoSans-Bold"
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 2
  },
  ratingText: {
    fontSize: 12,
    fontFamily: "NunitoSans-Regular",
    marginLeft: 5
  },
  countText: {
    fontSize: 12,
    fontFamily: "NunitoSans-Bold",
    marginLeft: 5
  },
  blue: {
    color: "#1957A7"
  },
  labelView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  label: {
    fontFamily: "NunitoSans-SemiBold",
    marginRight: 5,
    fontSize: 16
  },
  rupee: {
    marginTop: 3,
    marginRight: 2
  },
  locationText: {
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 16
  },
  reviewButton: {
    backgroundColor: "#1957A7",
    height: 30,
    width: 85,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "NunitoSans-Regular"
  },
  compareText: {
    fontSize: 14,
    fontFamily: "NunitoSans-SemiBold",
    color: "#FE9D2C",
    borderBottomColor: "#FE9D2C",
    borderBottomWidth: 0.5,
    marginLeft: 5
  },
  headtext: {
    color: "#FE9D2C",
    fontSize: 20,
    fontFamily: "NunitoSans-Bold",
    // flex: 1,
    // alignItems: "flex-start",
    // justifyContent: "center",
    // marginLeft: "5%",
    height: 25,
    marginBottom: "2%",
    marginTop: "2%"
  }
}));
