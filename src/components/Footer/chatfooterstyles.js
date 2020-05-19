import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    elevation: 1,
    borderTopColor: "grey",
    borderTopWidth: 0.5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: "grey",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "#fff"
  },
  input: {
    marginTop: "2%",
    marginBottom: "2%",
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "#F0F0F0",
    color: "#000000",
    fontSize: 18,
    borderRadius: 50,
    width: "90%",
    marginLeft: "5%",
    fontFamily: "NunitoSans-Regular"
  },
  iconView: {
    position: "absolute",
    width: "21%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
    zIndex: 9999
  },
  iconViewSend: {
    position: "absolute",
    width: "20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: "80%",
    right: 0,
    opacity: 1,
    zIndex: 9999
  }
}));
