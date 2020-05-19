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
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Iconen from "react-native-vector-icons/Entypo";

import styles from "./liststyles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rating from "../Rating/Rating";

export default class Forumlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      datalist: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet lol",
          date: "24 Mar’ 19, 22:00",
          name: "John Doe",
          replies: 100,
          views: 226,
          rating: 5.0
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet lol",
          date: "24 Mar’ 19, 22:00",
          name: "John Doe",
          replies: 15,
          views: 220,
          rating: 4.5
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet lol",
          date: "24 Mar’ 19, 22:00",
          name: "John Doe",
          replies: 50,
          views: 210,
          rating: 4.0
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet lol",
          date: "24 Mar’ 19, 22:00",
          name: "John Doe",
          replies: 5,
          views: 200,
          rating: 3.0
        }
      ]
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
        <Header
          showBackIcon={true}
          title="Forum"
          navigation={this.props.navigation}
        />

        <View style={styles.mainContainer}>
          {this.state.isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator />
            </View>
          ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listconatiner}>
                  <View style={styles.borderbottom}>
                    <Text style={styles.headtext}>Topics</Text>
                  </View>
                  {this.state.datalist.map((data, index) => (
                    <TouchableWithoutFeedback
                      key={index}
                      onPress={() =>
                        this.props.navigation.navigate("Forumdetails")
                      }
                    >
                      <View style={styles.mainbox}>
                        <View style={[styles.borderbottom]}>
                          <View style={[styles.subbox, styles.flexrow]}>
                            <View style={[styles.w35]}>
                              <TouchableWithoutFeedback
                                //style={[styles.center]}
                                onPress={() =>
                                  this.props.navigation.navigate(
                                    "Forumdetails"
                                  )
                                }
                              >
                                <View style={styles.imageview}>
                                  <Image
                                    source={require("../../assets/review/review.png")}
                                    style={styles.img}
                                  />
                                </View>
                              </TouchableWithoutFeedback>
                            </View>
                            <View
                              style={[
                                styles.w65,
                                styles.flexcoloum,
                                styles.ml2
                              ]}
                            >
                              <Text style={[styles.boxtexthead]}>
                                {data.title}
                              </Text>
                              <View style={[styles.flexrow, styles.mt5]}>
                                <Text style={[styles.textline]}>
                                  {data.date + " | "}
                                  <Text style={[styles.blue]}>
                                    {data.name}
                                  </Text>
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={[styles.flexrow]}>
                          <View
                            style={[
                              styles.w33,
                              styles.borderright,
                              styles.center,
                              styles.pb5,
                              styles.flexcoloum
                            ]}
                          >
                            <Text style={[styles.counttext, styles.yellow]}>
                              {data.replies}
                            </Text>
                            <Text style={[styles.countsubtext]}>replies</Text>
                          </View>
                          <View
                            style={[
                              styles.w33,
                              styles.borderright,
                              styles.center,
                              styles.pb5,
                              styles.flexcoloum
                            ]}
                          >
                            <Text style={[styles.counttext, styles.blue]}>
                              {data.views}
                            </Text>
                            <Text style={[styles.countsubtext]}>views</Text>
                          </View>
                          <View
                            style={[
                              styles.w33,
                              styles.center,
                              styles.pb5,
                              styles.flexcoloum
                            ]}
                          >
                            <Text style={[styles.counttext, styles.yellow]}>
                              {data.rating.toFixed(1)}
                            </Text>
                            <Text style={[styles.countsubtext]}>rating</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
                </View>
              </ScrollView>
            )}
        </View>
        <Footer navigation={this.props.navigation} forum={true} />
      </View>
    );
  }
}
