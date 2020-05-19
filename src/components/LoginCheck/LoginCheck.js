import * as React from "react";
import { View, AsyncStorage } from "react-native";

import { StackActions, NavigationActions } from "react-navigation";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hidePassword: true,
      emailshow: "",
      passshow: "",
      page: 1,
      loginnext: false,
      isLoading: true
    };
  }

  async componentDidMount() {
    const loggedinUserId = await AsyncStorage.getItem("userId");
    const loggedinToken = await AsyncStorage.getItem("token");

    if (loggedinToken && loggedinUserId) {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: "Home"
            })
          ]
        })
      );
    } else {
      this.props.navigation.dispatch(
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

  render() {
    return <View />;
  }
}
