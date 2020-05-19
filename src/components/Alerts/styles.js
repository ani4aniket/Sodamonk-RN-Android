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
        width: "90%",
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    articleContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "90%",
        flex: 1,
        marginBottom: 20
    },
    titleText: {
        fontSize: 20,
        fontFamily: "NunitoSans-Bold",
        color: "#5E5E5E"
    },
    headerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerIcon: {
        marginRight: 10
    },
    boxView: {
        width: "100%",
        height: 90,
        marginTop: 15,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        elevation: 5
    },
    articleBoxView: {
        width: "100%",

        marginTop: 15,

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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "100%",
        marginLeft: 15,
        marginTop: 10
    },
    articleImage: {
        height: 70,
        width: 70,
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
        marginTop: 5,

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
        height: 100,
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
    width50: {
        width: "50%"
    },
    alignLeft: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center"
    },
    alignRight: {
        justifyContent: "flex-end",
        flexDirection: "row",
        alignItems: "center"
    },
    textBold: {
        fontFamily: "NunitoSans-Bold"
    },
    size14: {
        fontSize: 14
    },
    textRegular: {
        fontFamily: "NunitoSans-Regular"
    },
    paddingR5: {
        paddingRight: 5
    },
    borderRight: {
        borderRightColor: "#888888",
        borderRightWidth: 0.5
    },
    gold: {
        color: "#FE9D2C"
    }





}));