import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  pl8: {
    paddingLeft: "8%"
  },
  pr8: {
    paddingLeft: "8%"
  },
  mr8: {
    marginRight: "8%"
  },
  aboutcontainer: {
    marginLeft: "10%",
    marginRight: "5%"
  },
  aboutcontainerng: {
    marginLeft: "-12%",
    marginRight: "-6%"
  },
  headtext: {
    marginTop: "5%",
    fontSize: 16,
    //fontWeight: "bold",
    color: "#5E5E5E",
    marginBottom: "2%",
    fontFamily: "NunitoSans-Bold"
  },
  paragraph: {
    marginTop: "2%",
    color: "#888888",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "NunitoSans-Regular"
  },
  imagebox: {
    height: 130,
    width: 110,
    borderRadius: 15
  },
  img: {
    borderRadius: 15,
    height: "100%",
    width: "100%"
  },
  subtext: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center"
  },
  subtexthead: {
    textAlign: "center",
    color: "#000000",
    fontFamily: "NunitoSans-Regular"
  },
  review: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "5%",
    marginLeft: 5, marginRight: 5

  },
  sliderarrowbtn: {
    position: "absolute",
    top: 50,
    left: "88%",
    right: 0,
    bottom: 0,
    zIndex: 999999,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#FE9D2C",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center"
  },
  flexRow: {
    flexDirection: "row"
  },
  ratingtext: {
    color: "#8A8A8A",
    fontFamily: "NunitoSans-Regular",
    fontSize: 15
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0.8,
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.588)",
    borderRadius: 15
  },
  insidetext: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center"
  },
  textline: {
    fontSize: 18,
    fontFamily: "NunitoSans-Bold",
    color: "#FFF",
    textAlign: "center"
  },
  sliderView: {
    marginLeft: 20
  }
}));