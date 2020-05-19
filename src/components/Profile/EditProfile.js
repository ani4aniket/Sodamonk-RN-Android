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
  ImageBackground
} from "react-native";

import styles from "./styles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import About from "./About";
import Badges from "./Badges";
import Activity from "./Activity";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      badges: false,
      about: true,
      activity: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  showpage(pageid) {
    if (pageid == 1) {
      this.setState({
        badges: true,
        about: false,
        activity: false
      });
    }
    if (pageid == 2) {
      this.setState({
        badges: false,
        about: true,
        activity: false
      });
    }
    if (pageid == 3) {
      this.setState({
        badges: false,
        about: false,
        activity: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          showBackIcon={true}
          title="Profile"
          menu={true}
          navigation={this.props.navigation}
        />

        <View style={styles.mainContainer}>
          {this.state.isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator />
            </View>
          ) : (
            <ScrollView>
              <View style={styles.backgroundcolor}>
                <View style={styles.profilecontainer}>
                  <View style={styles.dpcontainer}>
                    <Image
                      style={styles.dp}
                      source={require("../../assets/profile/profile.png")}
                    />
                  </View>
                  <View style={styles.namecontainer}>
                    <Text style={styles.dpname}>John Doe</Text>
                    <Text style={styles.tagname}>Noobmaster</Text>
                  </View>
                </View>
                <View style={styles.multiplecontainer}>
                  <View style={styles.boxlecontainer}>
                    <View style={styles.subboxlecontainer}>
                      <Text
                        style={[
                          styles.profiletext,
                          this.state.about ? styles.pcolor : null
                        ]}
                        onPress={() => this.showpage(2)}
                      >
                        Edit Profile
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {this.state.about ? <About /> : null}
              {this.state.badges ? <Badges /> : null}
              {this.state.activity ? <Activity /> : null}
            </ScrollView>
          )}
        </View>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
