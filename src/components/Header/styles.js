import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        width: "100%",
        flex: 1,

    },
    titleView: {
        flexDirection: "row",
        width: "60%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "5%"
    },
    profileView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "40%"
    },
    titleText: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        marginLeft: "10%",
        fontFamily: "NunitoSans-Bold",
        marginBottom: "2%"
    },
    profileButton: {
        height: 35,
        width: 35,
        borderRadius: 35,
        backgroundColor: "#fff",
        marginLeft: "15%",
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        height: "100%",
        width: "100%"
    },
    ml20:{
        marginLeft:"20%"
    },
    ml15:{
        marginLeft:"15%"
    }

}));