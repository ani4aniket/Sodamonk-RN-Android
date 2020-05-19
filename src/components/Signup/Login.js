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
  AsyncStorage,
} from "react-native";
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";
import { isValidCheck } from "./Validation";
import { loginUser } from "../../api/requests";
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
      isLoading: true,
      showLoader: false,
      result: {
        name: "",
        email: "",
        last_name: "",
      },
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  loginenable(email, password) {
    this.setState({
      email: email,
      password: password,
    });
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    if (reg.test(email)) {
      this.setState({
        emailshow: true,
      });
    } else {
      this.setState({
        emailshow: false,
      });
    }
    if (password.trim() != "" && password.length >= 6) {
      this.setState({
        passshow: true,
      });
    } else {
      this.setState({
        passshow: false,
      });
    }
  }
  goToSignup() {
    this.props.navigation.navigate("Signup");
  }
  async login() {
    const data = {
      email: this.state.email,
      password: this.state.password,
      emailshow: this.state.emailshow,
      passshow: this.state.passshow,
    };
    if (isValidCheck(data)) {
      this.toggleLoader();
      const response = await loginUser(data);
      if (response) {
        console.log(response);
        const token = response.id;
        const userId = response.userId;
        await AsyncStorage.setItem("token", token);
        // await AsyncStorage.setItem("userId", userId);

        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: "Home",
              }),
            ],
          })
        );
        // console.log(await this.fetchToken());
        // console.log("===========")
        // console.log(await this.fetchUserId());
      } else {
        alert("Incorrect email or password");
        this.toggleLoader();
      }
    }
  }
  _fbAuth = async () => {
    let { isCancelled } = await LoginManager.logInWithPermissions([
      "public_profile",

      "email",
    ]);
    if (!isCancelled) {
      let data = await AccessToken.getCurrentAccessToken();
      let token = data.accessToken.toString();

      await AsyncStorage.setItem("token", token);

      console.log(await AsyncStorage.getItem("token"));

      //  await afterLoginComplete(token);
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,email,name,first_name,last_name,gender,picture,cover&access_token=${token}`
      );
      let result = await response.json();
      console.log("aiket:", result);
      let fbData = {
        email: result.email,
        password: "helloworld",
        name: result.name,
      };

      let fbResponse = await loginUser(fbData);
      let fbUserId = fbResponse.userId;

      await AsyncStorage.setItem("userId", fbUserId);

      // console.log("result result result ", result);
      //navigate to complete the registration.
      // this.props.navigation.navigate("Home", {
      //   name: this.state.result.name,
      //   email: this.state.result.email,
      //   surname: this.state.result.last_name
      // });
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: "Home",
            }),
          ],
        })
      );
    } else {
      console.log("Login incomplete");
    }
  };
  toggleLoader = async () => {
    await this.setState({
      showLoader: !this.state.showLoader,
    });
  };
  fetchToken = async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  };
  fetchUserId = async () => {
    const userId = await AsyncStorage.getItem("userId");
    return userId;
  };
  render() {
    return (
      <View>
        {this.state.isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{ width: "100%" }}>
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
                  onChangeText={(email) =>
                    this.loginenable(email, this.state.password)
                  }
                  autoCapitalize="none"
                  value={this.state.email}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  secureTextEntry={this.state.hidePassword}
                  style={[styles.input]}
                  placeholder="Password"
                  onChangeText={(password) =>
                    this.loginenable(this.state.email, password)
                  }
                  value={this.state.password}
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[styles.loginbutton, { marginTop: 20 }]}
                  onPress={() => this.login()}
                >
                  {this.state.showLoader ? (
                    <ActivityIndicator size={22} color="fff" />
                  ) : (
                    <Text style={styles.buttonText}>SIGN IN</Text>
                  )}
                </TouchableOpacity>
                <Text
                  style={[styles.paragraphforgot, styles.forgotpass]}
                  onPress={() => this.props.navigation.navigate("EnterEmail")}
                >
                  Forgot Password?
                </Text>
                <Text style={styles.paragraphforgot} onPress={() => null}>
                  or login with
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
              <View style={[styles.linetext, styles.t74]}>
                <Text style={[styles.accttext]}>
                  Don’t have an account?
                  <Text
                    style={[styles.acctdifftext]}
                    onPress={() => this.goToSignup()}
                  >
                    {" "}
                    Signup
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}
