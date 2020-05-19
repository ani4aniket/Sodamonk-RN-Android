import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#E5E5E5"
    },
    mainContainer: {
        flex: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%"
    },
    searchContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        height: 100,
        zIndex: 1,
        position: "absolute"
    },
    cityContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 200,
        width: "90%",
        flex: 1
    },
    mt3: {
        marginTop: "3%",
    },
    articleContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",

        width: "90%",
        marginTop: "10%"
    },
    searchBox: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: "50%",
        elevation: 5,
    },
    searchInput: {
        width: "95%",
        fontSize: 20,
        fontFamily: "NunitoSans-Regular"
    },
    searchIcon: {
        marginLeft: "5%"
    },
    titleText: {
        fontSize: 20,
        fontFamily: "NunitoSans-ExtraBold",
        color: "#000"
    },
    cityListView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 180,

    },
    cityButton: {
        height: 160,
        width: 120,
        borderRadius: 10,
        alignItems: "center",

        marginRight: 15
    },
    cityImage: {
        height: "100%",
        width: "100%",
        opacity: 0.8,

    },
    evencolor: {
        backgroundColor: "rgba(25, 87, 167, 0.62);"
    },
    oddcolor: {
        backgroundColor: "rgba(254, 157, 44, 0.62)"
    },
    cityName: {
        zIndex: 1,
        position: "absolute",
        marginLeft: "20%",
        marginTop: "20%",
        color: "#fff",
        fontSize: 22,
        fontFamily: "NunitoSans-Bold",
        borderBottomColor: "#fff",
        borderBottomWidth: 3
    },
    articleButton: {
        height: 200,
        width: "100%",
        borderRadius: 10,
        marginTop: "5%",

    },
    articleTitle: {
        zIndex: 1,
        position: "absolute",
        marginLeft: "10%",
        marginTop: "10%",
        color: "#fff",
        fontSize: 22,
        fontFamily: "NunitoSans-Bold",
        width: "50%"

    },
    articleListView: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 4,
        width: "100%",
        marginTop: "2%"
    },
    headerView: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    viewAll: {
        color: "blue",
        fontFamily: "NunitoSans-SemiBold",
        fontSize: 14
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
        backgroundColor: "#FFF",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center"
    },
    neartext: {
        color: "#000",
        fontSize: 12,
        textAlign: "center",
        fontFamily: "NunitoSans-Bold",
    },
    sliderarrowbtn: {
        position: "absolute",
        top: "40%",
        left: "92%",
        right: 0,
        bottom: 0,
        zIndex: 999999,
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: "#FFF",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center"
    },
    map: {
        height: "100%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boxView: {
        width: 300,
        height: 120,
        marginRight: 10,
        marginLeft: 20,
        marginTop: 15,
        borderColor: "grey",
        borderWidth: 0.5,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",

    },
    image: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",

    },
    detailsView: {
        width: "60%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        marginLeft: 5
    },
    articleImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: "#E5E5E5",
        borderWidth: 0.5
    },
    articleName: {
        fontSize: 18,
        fontFamily: "NunitoSans-SemiBold",
        color: "#000"
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
    gold: {
        color: "#FE9D2C"
    }
}));