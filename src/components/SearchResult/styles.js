import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f4efef"
  },
  mainContainer: {
    flex: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  forumContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    //height: 200,
    width: "90%",
    flex: 1
  },
  articleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    flex: 1
    //marginBottom: 20
  },
  titleText: {
    fontSize: 24,
    fontFamily: "NunitoSans-Bold",
    color: "#000"
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerIcon: {
    marginRight: 10
  },
  boxView: {
    width: "98.5%",
    height: 140,
    marginTop: 15,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5
  },
  image: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "40%"
  },
  detailsView: {
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    marginLeft: 15
  },
  articleImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    borderColor: "#E5E5E5",
    borderWidth: 0.5
  },
  articleName: {
    fontSize: 18,
    fontFamily: "NunitoSans-Bold",
    color: "#000"
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
    fontSize: 12
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
  searchContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  searchBox: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: "50%",
    elevation: 5
  },
  searchInput: {
    width: "95%",
    fontSize: 20,
    fontFamily: "NunitoSans-Regular"
  },
  searchIcon: {
    marginLeft: "5%"
  },
  viewtitleText: {
    fontSize: 24,
    fontFamily: "NunitoSans-Bold",
    color: "#666666"
  },
  review: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "5%",
    marginLeft: 5,
    marginRight: 5
  },
  sliderarrowbtn: {
    position: "absolute",
    top: "30%",
    left: "95%",
    right: 0,
    bottom: 0,
    zIndex: 999999,
    height: 30,
    width: 30,
    borderRadius: 40,
    backgroundColor: "#1957A7",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center"
  },
  flexRow: {
    flexDirection: "row"
  },
  //   ratingtext: {
  //     color: "#8A8A8A",
  //     fontFamily: "NunitoSans-Regular",
  //     fontSize: 15
  //   },
  imagebox: {
    height: 100,
    width: 100,
    borderRadius: 15,
    borderColor: "rgba(172, 146, 146, 0.25)",
    borderWidth: 1
  },
  img: {
    borderRadius: 15,
    height: "100%",
    width: "100%"
  },
  sliderView: {
    marginLeft: 20
  },
  subtext: {
    color: "#000",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center"
  },
  subtexthead: {
    textAlign: "center",
    color: "#000",
    fontFamily: "NunitoSans-Regular"
  },
  ele5: {
    elevation: 5
  },
  mt5: {
    marginTop: "5%"
  },

  loading: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
}));
