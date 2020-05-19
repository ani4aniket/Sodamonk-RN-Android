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
  mt4: {
    marginTop: "4%"
  },
  mt10: {
    marginTop: "10%"
  },
  mb4: {
    marginBottom: "10%"
  },
  reviewcontainer: {
    //marginBottom: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    height: 110,
    width: 110,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderRadius: 80,
    height: "100%",
    width: "100%"
  },
  blue: {
    color: "#1957A7"
  },
  head: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 22
  },
  reviewbox: {
    height: 170,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "87%",
    elevation: 5,
    borderRadius: 15
  },
  reviewButton: {
    backgroundColor: "#1957A7",
    height: 40,
    width: "40%",
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "NunitoSans-SemiBold"
  },
  sliderarrow: {
    padding: "14%"
    //backgroundColor: "#000"
    //right:"30%"
  },
  sliderarrowbtn: {
    position: "absolute",
    top: "38%",
    left: "93%",
    right: 0,
    bottom: 0,
    zIndex: 999999,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#1957A7"
  },
  disable: {
    backgroundColor: "#ACC8EB"
  },
  reviewboxtext: {
    marginTop: "-6%",
    marginBottom: "2%",
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
    color: "#5E5E5E"
  },
  rating: {
    marginTop: "6%"
  },
  subtext: {
    color: "#8A8A8A",
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    width: "80%"
  },
  subtext: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "3%"
  },
  textleft: {
    width: "40%",
    fontFamily: "NunitoSans-Regular",
    fontSize: 18
  },
  slidertextleft: {
    width: "60%",
    fontFamily: "NunitoSans-Regular",
    fontSize: 18
  },
  slidertextright: {
    fontFamily: "NunitoSans-Regular",
    width: "20%",
    fontSize: 18,
    marginLeft: "2%"
  },
  textright: {
    fontFamily: "NunitoSans-Regular",
    width: "10%",
    fontSize: 18,
    marginLeft: "5%"
  },
  ratingtext: {
    color: "#8A8A8A",
    fontFamily: "NunitoSans-Regular",
    fontSize: 24,
    paddingLeft: 10
  }
}));
