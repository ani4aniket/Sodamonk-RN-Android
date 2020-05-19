import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1
    // flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "stretch",
    // width: "100%",
    // height: "100%"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    backgroundColor: "#FBFBFB"
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
  yellow: {
    color: "#FE9D2C"
  },
  white: {
    color: "#FFF"
  },
  lightblue: {
    color: "#B0D3FF"
  },
  backgrey: {
    backgroundColor: "#F4F4F4"
  },
  backblue: {
    backgroundColor: "#1957A7"
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
    width: "90%",
    flex: 1,
    marginBottom: 20,
    marginLeft: "5%"
  },
  boxView: {
    width: "100%",
    paddingBottom: "6%",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff"
  },
  borderbottom: {
    borderBottomColor: "rgba(172, 146, 146, 0.25)",
    borderBottomWidth: 1
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
  chatimage: {
    height: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    width: 40,
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
    marginTop: 5
  },
  label: {
    fontFamily: "NunitoSans-SemiBold",
    marginRight: "2%",
    fontSize: 14,
    width: "80%"
  },
  name: {
    color: "#000",
    fontFamily: "NunitoSans-Bold",
    width: "80%",
    fontSize: 16
  },
  chatbox: {
    width: "90%",
    //height:"70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#FFF",
    paddingLeft: 9,
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 15
  },
  chatboxrecv: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 15,
    marginLeft: 15,
    paddingTop: 8,
    paddingBottom: 5,
    marginTop: 15,
    paddingLeft: 12,
    paddingRight: 5
  },
  recivermsg: {
    flexDirection: "column",
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
    paddingLeft: "5%",
    borderRadius: 15
  },
  flexrow: {
    flexDirection: "row"
  },
  chatmsg: {
    textAlign: "left",
    color: "#000",
    fontFamily: "NunitoSans-Regular",
    fontSize: 16
  },
  sendername: {
    marginTop: "2%",
    fontFamily: "NunitoSans-Bold",
    fontSize: 16
  },
  chatView: {
    marginTop: "2%",
    marginBottom: "4%"
  },
  time: {
    textAlign: "right",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginRight: "5%",
    fontSize: 10,
    fontFamily: "NunitoSans-Regular"
  },
  senderView: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%"
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}));
