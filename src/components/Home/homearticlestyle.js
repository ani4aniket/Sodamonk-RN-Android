import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: "100%"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFBFB"
  },
  searchContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  searchBox: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: "50%",
    elevation: 3
  },
  searchInput: {
    width: "95%",
    fontSize: 18,
    fontFamily: "NunitoSans-Regular"
  },
  searchIcon: {
    marginLeft: "5%"
  },
  headtext: {
    color: "#666666",
    fontSize: 24,
    fontFamily: "NunitoSans-Bold",
    width: "90%",
    marginLeft: "7%"
  },
  articleContainer: {
    marginLeft: "5%",
    justifyContent: "center",
    alignContent: "center",
    width: "90%"
  },
  imagelist: {
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  imagecontainer: {
    marginTop: "2%",
    height: 165,
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  img: {
    width: "100%",
    height: "100%",
    tintColor: "rgba(254, 157, 44, 0.62)",
    justifyContent: "center",
    alignItems: "center"
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
    borderRadius: 20
  },
  evencolor: {
    backgroundColor: "rgba(25, 87, 167, 0.62);"
  },
  oddcolor: {
    backgroundColor: "rgba(254, 157, 44, 0.62)"
  },

  insidetext: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    alignContent: "center",
    fontFamily: "NunitoSans-Bold"
  },
  textline: {
    fontSize: 22,
    fontFamily: "NunitoSans-Bold",
    color: "#ffffff",
    textAlign: "center"
  },
  nearbybtn: {
    position: "absolute",
    top: "85%",
    left: "80%",
    right: 0,
    bottom: 0,
    zIndex: 999999,
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "#FE9D2C",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center"
  },
  neartext: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "NunitoSans-Bold",
  }
}));