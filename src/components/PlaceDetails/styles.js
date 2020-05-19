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
    flexColumn: {
        flexDirection: "column"
    },
    flexRow: {
        flexDirection: "row"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    start: {
        justifyContent: "flex-start"
    },
    end: {
        justifyContent: "flex-end"
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
    textSemiBold: {
        fontFamily: "NunitoSans-SemiBold"
    },
    size14: {
        fontSize: 14
    },
    size16: {
        fontSize: 16
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
    },
    placeImage: {
        height: "100%",
        width: "100%"
    },
    width100: {
        width: "100%"
    },
    detailsView: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 15,
        marginTop: 10
    },
    innerDetailsView: {
        width: "60%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 15,
        marginTop: 10
    },
    font24: {
        fontSize: 24
    },
    black: {
        color: "#000"
    },
    labelView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,

    },
    label: {
        fontFamily: "NunitoSans-SemiBold",
        marginRight: 5,
        fontSize: 14
    },
    paddingR5: {
        paddingRight: 5
    },
    paddingL5: {
        paddingLeft: 5
    },
    borderRight: {
        borderRightColor: "#888888",
        borderRightWidth: 0.5
    },
    blue: {
        color: "#1957A7"
    },
    alignCenter: {
        alignItems: "center"
    },
    mt5: {
        marginTop: 5
    },
    reviewButton: {
        backgroundColor: "#1957A7",
        height: 30,
        width: 100,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    distanceButton: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        height: 30,
        width: "20%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "NunitoSans-Regular"
    },
    boxView: {
        width: "100%",
        paddingBottom: 10,
        marginTop: 15,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",

    },
    image: {
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 100,
        marginTop: 10

    },
    articleImage: {
        height: 80,
        width: 80,
        borderRadius: 20,


    },
    articleContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "90%",
        flex: 1,
        marginBottom: 20
    },






}));