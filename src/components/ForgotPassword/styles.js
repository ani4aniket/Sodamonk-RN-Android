import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  loading: {
    marginTop: "75%"
  },
  mb8: {
    marginBottom: "8%"
  },
  mt8: {
    marginTop: "8%"
  },
  mt12: {
    marginTop: "12%"
  },
  mt2: {
    marginTop: "2%"
  },
  mtn4: {
    marginTop: "-4%"
  },
  container: {
    marginTop: 0,
    width: "100%",
    height: "10%"
    // backgroundColor:linear-gradient(293.54deg, #FE9D2C 5.51%, #ED5526 99.66%);
  },
  maincontainer: {
    marginTop: "7%"
  },
  logocontainer: {
    width: 40,
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    left: "45%",
    right: "50%"
  },
  logo: {
    width: "100%",
    height: "100%"
  },
  logonamecontainer: {
    width: "50%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
    marginTop: "1%"
  },
  outerloginbox: {
    backgroundColor: "#1957A7",
    //paddingBottom: "13%",
    marginTop: "24%",
    height: "85%",
    alignItems: "center",
    paddingHorizontal: "1%"
    // borderTopColor: "#FFF",
    // borderTopWidth:2
  },
  loginbox: {
    alignItems: "center",
    // marginTop: "-42%",
    backgroundColor: "#ffffff",
    shadowColor: "rgba(172, 146, 146, 0.25)",
    shadowOpacity: 1,
    shadowRadius: 2,
    width: "80%",
    zIndex: 1,
    position: "absolute",
    top: "18%",
    left: "10%",
    shadowOffset: {
      height: 10,
      width: 10
    },
    borderRadius: 34,
    borderColor: "rgba(172, 146, 146, 0.25)",
    borderWidth: 2
    // marginLeft:"-12.5%"
  },
  input: {
    paddingLeft: "10%",
    backgroundColor: "#F3F9FA",
    color: "#000000",
    fontSize: 18,
    borderRadius: 33,
    width: "90%",
    marginTop: 15,
    height: 45
  },

  loginbutton: {
    width: "90%",
    height: 45,
    backgroundColor: "#FE9D2C",
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center"
  },
  googleloginbtn: {
    backgroundColor: "#DC4E41"
  },
  fbloginbtn: {
    marginTop: 10,
    backgroundColor: "#40679A"
  },
  buttonText: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
    color: "white"
  },
  otpText: {
    fontFamily: "NunitoSans-Bold"
  },
  paragraphforgot: {
    marginTop: "5%",
    fontSize: 15,
    color: "#050505",
    fontFamily: "NunitoSans-Regular",
    textAlign: "center",
    width: "100%"
  },
  linetext: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    zIndex: 1,
    position: "absolute",
    top: "70%",
    left: "22.5%"
  },
  t74: {
    top: "74%"
  },
  accttext: {
    color: "#FFFFFF"
  },
  acctdifftext: {
    color: "#97C4FF"
  },
  forgotpass: {
    color: "#1957A7"
  },
  socialButtonView: {
    alignItems: "center",
    width: "100%",
    marginBottom: "5%",
    marginTop: 20
  },
  triangle: {
    // borderStyle: "solid",
    borderTopWidth: 50,
    borderRightWidth: 60,
    borderBottomWidth: 50,
    borderLeftWidth: 60,
    borderTopColor: "#fff",
    borderRightColor: "transparent",
    borderLeftColor: "transparent"
  }
}));
