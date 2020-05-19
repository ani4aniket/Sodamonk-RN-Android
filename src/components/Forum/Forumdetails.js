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

import Icon from "react-native-vector-icons/FontAwesome";
import Iconen from "react-native-vector-icons/Entypo";

import styles from "./styles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rating from "../Rating/Rating";

export default class Forumdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header showBackIcon={true} title="Forum" navigation={this.props.navigation} />

        <View style={styles.mainContainer}>
          {this.state.isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator />
            </View>
          ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.forumcontainer}>
                  <Text style={styles.heading}>
                    Lorem Ipsum Dolor sit amet
                  </Text>
                  <View style={[styles.borderline]}>
                    <View style={[styles.flexrow]}>
                      <View style={[styles.textleft]}>
                        <View style={[styles.flexrow]}>
                          <View style={[styles.w40]}>
                            <View style={styles.dpcontainer}>
                              <TouchableOpacity>
                                <Image
                                  style={styles.dp}
                                  source={require("../../assets/profile/profile.png")}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View style={[styles.textright, styles.left, styles.w60]}>
                              <Text style={[styles.profileName,]}>
                                John Doe
                      </Text>
                              <View style={[styles.flexrow]}>
                                  <Rating rating={5} size={15} />
                                <Text style={[styles.rattingNumber,]}>
                                  5.0
                      </Text>
                              </View>
                            </View>
                          </View>
                      </View>
                      <View style={[styles.textright]}>
                        <View style={[styles.flexrow, styles.mt8, styles.ml8]}>
                          <TouchableOpacity style={[styles.mr5]}>
                            <Text>
                              <Iconen
                                styles={styles.icon}
                                name="facebook-with-circle"
                                size={30}
                                color="#3b5998"
                              />
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.mr5]}>
                            <Text>
                              <Icon
                                styles={styles.icon}
                                name="google-plus-official"
                                size={32}
                                color="#db3236"
                              />
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Text>
                              <Iconen
                                styles={styles.icon}
                                name="linkedin-with-circle"
                                size={30}
                                color="#0077B5"
                              />
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.articlebox}>
                    <Text style={styles.articledate}>
                      {"24 Mar’ 19, 22:00"}
                    </Text>
                    <View style={styles.textcontainbox}>
                      <Text style={styles.containbox}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </Text>
                    </View>
                    <View style={styles.textcontainbox}>
                      <Text style={styles.containbox}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </Text>
                    </View>
                  </View>
                </View>

              </ScrollView>
            )}
        </View>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
