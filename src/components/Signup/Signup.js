import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
  ActivityIndicator,
  StatusBar,
  Modal,
  AsyncStorage
} from "react-native";

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager
} from "react-native-fbsdk";

import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";
import { createUser, loginUser } from "../../api/requests";
import { isValidCheck } from "./Validation";
import { StackActions, NavigationActions } from "react-navigation";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: "",
      hidePassword: true,
      emailshow: "",
      passshow: "",
      page: 1,
      loginnext: false,
      isLoading: true,
      showLoader: false,
      date: ""
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  righticonstate(email, password) {
    this.setState({
      email: email,
      password: password
    });
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    if (reg.test(email)) {
      this.setState({
        emailshow: true
      });
    } else {
      this.setState({
        emailshow: false
      });
    }
    if (password.trim() != "" && password.length >= 6) {
      this.setState({
        passshow: true
      });
    } else {
      this.setState({
        passshow: false
      });
    }
  }

  goToLogin() {
    this.props.navigation.goBack();
  }
  async signUp() {
    const nameNode = this.state.email.split("@");

    const data = {
      email: this.state.email,
      password: this.state.password,
      name: nameNode[0],
      passshow: this.state.passshow,
      emailshow: this.state.emailshow
    };
    const age = parseInt(this.state.age);
    // this.toggleLoader();
    if (age >= 21) {
      if (isValidCheck(data)) {
        this.toggleLoader();
        const response = await createUser(data);

        console.log("Res" + response);
        if (response.status >= 200 && response.status < 300) {
          // const response = await loginUser(data);
          // const token = response.id;
          // const userId = response.userId;
          // await AsyncStorage.setItem("token", token);
          // await AsyncStorage.setItem("userId", userId);

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
          // console.log(await this.fetchToken());
        } else {
          alert("User already exists.");
          this.toggleLoader();
          // this.props.navigation.goBack();
        }
      }
    } else {
      alert("You must be above 21 to use this app.");
    }
  }

  _fbAuth = async () => {
    let { isCancelled } = await LoginManager.logInWithPermissions([
      "public_profile",

      "email"
    ]);
    if (!isCancelled) {
      let data = await AccessToken.getCurrentAccessToken();
      let token = data.accessToken.toString();

      //  await afterLoginComplete(token);
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,email,name,first_name,last_name,gender,picture,cover&access_token=${token}`
      );
      let result = await response.json();

      let fbData = {
        email: result.email,
        password: "helloworld",
        name: result.name
      };

      let fbResponse = await createUser(fbData);
      console.log(fbResponse);
      if (fbResponse.status >= 200 && fbResponse.status < 300) {
        let fbResponse = await loginUser(fbData);
        let fbToken = fbResponse.id;
        let fbUserId = fbResponse.userId;
        await AsyncStorage.setItem("token", token);
        await AsyncStorage.setItem("userId", fbUserId);

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
        console.log(await this.fetchToken());
      } else {
        alert("User already exists.");

        // this.props.navigation.goBack();
      }
    } else {
      console.log("Login incomplete");
    }
  };

  fetchToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  };
  toggleLoader = async () => {
    await this.setState({
      showLoader: !this.state.showLoader
    });
  };
  render() {
    return (
      <View>
        {this.state.isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#ED5526", "#FE9D2C"]}
            >
              <Text />
            </LinearGradient>
            <View style={styles.maincontainer}>
              <View style={{ height: "12%" }}>
                <View style={styles.logocontainer}>
                  <Image
                    style={styles.logo}
                    source={require("../../assets/logo/logo.png")}
                  />
                </View>
                <View style={styles.logonamecontainer}>
                  <Image
                    style={styles.logo}
                    source={require("../../assets/logo/logoname.png")}
                  />
                </View>
              </View>

              <View style={[styles.outerloginbox, styles.triangle]} />

              <View style={[styles.loginbox]}>
                <TextInput
                  style={[styles.input, styles.mt12]}
                  placeholder="Email ID"
                  onChangeText={email =>
                    this.righticonstate(email, this.state.password)
                  }
                  autoCapitalize="none"
                  value={this.state.email}
                />
                <TextInput
                  secureTextEntry={this.state.hidePassword}
                  style={[styles.input]}
                  placeholder="Password"
                  onChangeText={password =>
                    this.righticonstate(this.state.email, password)
                  }
                  value={this.state.password}
                />
                <TextInput
                  style={[styles.input]}
                  keyboardType="number-pad"
                  placeholder="Age"
                  onChangeText={age => this.setState({ age })}
                  value={this.state.age}
                />

                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[styles.loginbutton, { marginTop: 20 }]}
                  onPress={() => this.signUp()}
                >
                  {this.state.showLoader ? (
                    <ActivityIndicator size={22} color="fff" />
                  ) : (
                    <Text style={styles.buttonText}>SIGN UP</Text>
                  )}
                </TouchableOpacity>
                <Text style={styles.paragraphforgot} onPress={() => null}>
                  or signup with
                </Text>
                <View style={styles.socialButtonView}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[styles.loginbutton, styles.googleloginbtn]}
                    onPress={() => null}
                  >
                    <Text style={styles.buttonText}>GOOGLE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[styles.loginbutton, styles.fbloginbtn]}
                    onPress={() => this._fbAuth()}
                  >
                    <Text style={styles.buttonText}>FACEBOOK</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* <View style={[styles.linetext]}>
                <Text style={[styles.accttext]}>
                  {"Already have an account ? "}
                  <Text
                    style={[styles.acctdifftext]}
                    onPress={() => this.goToLogin()}
                  >
                    Login
                  </Text>
                </Text>
              </View> */}
            </View>
          </View>
        )}
      </View>
    );
  }
}
