import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Alert
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { StackActions, NavigationActions } from "react-navigation";
import PopupMenu from "./PopUp";

import Icon from "react-native-vector-icons/Entypo";

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager
} from "react-native-fbsdk";

export default (Header = props => {
  getLoggedinUserId = async () => {
    const loggedinUserId = await AsyncStorage.getItem("userId");
    return loggedinUserId;
  };
  onPopupEvent = (eventName, index) => {
    if (eventName !== "itemSelected") return;
    if (index === 0) this.logoutUser();
    else this.onRemove();
  };

  FBLogout = accessToken => {
    let logout = new GraphRequest(
      "me/permissions/",
      {
        accessToken: accessToken,
        httpMethod: "DELETE"
      },
      (error, result) => {
        if (error) {
          console.log("Error fetching data: " + error.toString());
        } else {
          LoginManager.logOut();
        }
      }
    );
    new GraphRequestManager().addRequest(logout).start();
  };

  logoutUser = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            const accessToken = await AsyncStorage.getItem("token");
            console.log(accessToken);
            this.FBLogout(accessToken);
            removeItemValue("userId");
            removeItemValue("token");

            props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "Login"
                  })
                ]
              })
            );
          }
        }
      ],
      { cancelable: false }
    );
  };
  removeItemValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#ED5526", "#FE9D2C"]}
      style={styles.headerContainer}
    >
      <View style={styles.titleView}>
        {props.showBackIcon ? (
          <Icon
            name="chevron-left"
            color="#fff"
            size={24}
            onPress={() => props.navigation.goBack()}
          />
        ) : null}

        <Text style={styles.titleText}>{props.title}</Text>
      </View>

      <View style={styles.profileView}>
        {props.chat ? null : (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Messages", {
                loggedUserid: getLoggedinUserId()
              })
            }
          >
            <Icon name="chat" color="#fff" size={24} />
          </TouchableOpacity>
        )}

        <Icon
          style={props.menu ? styles.ml20 : styles.ml15}
          name="bell"
          color="#fff"
          size={24}
          onPress={() => props.navigation.navigate("Alerts")}
        />
        {props.menu ? (
          <View style={styles.ml15}>
            <PopupMenu actions={["Logout"]} onPress={this.onPopupEvent} />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() =>
              props.navigation.navigate("Profile", {
                loggedUserid: getLoggedinUserId()
              })
            }
          >
            <Image
              source={require("../../assets/profile/profile.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
});
