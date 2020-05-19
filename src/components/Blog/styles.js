import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#E5E5E5"
    // width: "100%"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },

  mt2: {
    marginTop: "5%",
    width: "100%"
  },
  headtext: {
    color: "#FE9D2C",
    fontSize: 20,
    fontFamily: "NunitoSans-Bold",
    marginLeft: "5%",
    height: 25
    // marginBottom: "5%"
  },

  imagelist: {
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  imagecontainer: {
    marginTop: "5%",
    height: 125,
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  imagecontainerBlog: {
    marginTop: "4%",
    height: 125,
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
    width: "90%",
    alignContent: "center"
  },
  insidetextBloglist: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "130%",
    alignContent: "center"
  },
  textline: {
    fontSize: 20,
    fontFamily: "NunitoSans-Bold",
    color: "#ffffff",
    textAlign: "center"
  },
  webviewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#e5e5e5"
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}));
