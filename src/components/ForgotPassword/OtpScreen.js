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
  AsyncStorage
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

import { StackActions, NavigationActions } from "react-navigation";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  goToChangePassword() {
    this.props.navigation.navigate("ChangePassword");
  }
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
                <Text style={[styles.otpText, styles.mt12]}>
                  An OTP has been sent to your email.
                </Text>
                <TextInput
                  style={[styles.input, styles.mt12]}
                  placeholder="Enter OTP"
                  //   onChangeText={email =>
                  //     this.loginenable(email, this.state.password)
                  //   }
                  autoCapitalize="none"
                  //   value={this.state.email}
                  underlineColorAndroid="transparent"
                  keyboardType="number-pad"
                />

                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.loginbutton,
                    {
                      marginTop: 20,
                      marginBottom: 20
                    }
                  ]}
                  onPress={() => this.goToChangePassword()}
                >
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}
