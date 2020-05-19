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
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Rating from "../Rating/Rating";

import styles from "./aboutstyle";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ratingValue: 2,
      datalist: [
        {
          id: 1,
          url: false,
          text: "Whiskeys",
          rating: 3
        },
        {
          id: 2,
          url: false,
          text: "Wine",
          rating: 4
        },
        {
          id: 3,
          url: false,
          text: "Vodka",
          rating: 2
        },
        {
          id: 4,
          url: false,
          text: "Again Vodka",
          rating: 1
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
      <View>
        <View style={styles.aboutcontainer}>
          <Text style={styles.headtext}>My Bio</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
          </Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
          </Text>
          <Text style={styles.headtext}>Favourites</Text>
        </View>

        <View style={styles.sliderView}>
          <TouchableOpacity style={[styles.sliderarrowbtn]}>
            <Icon
              name="arrowright"
              size={30}
              color="#FFF"
            />
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.datalist.map((data, index) => (
              <View style={[styles.review]} key={index}>
                <TouchableOpacity>
                  <View style={styles.imagebox}>
                    <View style={styles.imageslider}>
                      <Image
                        style={styles.img}
                        source={require("../../assets/profile/fav.jpeg")}
                        resizeMode="cover"
                      />
                      <View style={[styles.overlay]} />
                      <View style={[styles.insidetext]}>
                        <Text style={styles.textline}>{data.text}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sliderView}>
          <TouchableOpacity style={[styles.sliderarrowbtn]}>
            <Icon
              style={[styles.sliderarrow]}
              name="arrowright"
              size={30}
              color="#FFF"
            />
          </TouchableOpacity>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.datalist.map((data, index) => (
              <View style={[styles.review]} key={index}>
                <TouchableOpacity>
                  <View style={styles.imagebox}>
                    <View style={styles.imageslider}>
                      <Image
                        style={styles.img}
                        source={require("../../assets/profile/fav.jpeg")}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <View styles={styles.subtext}>
                  <Text styles={styles.subtexthead}>
                    {data.text}
                  </Text>
                  <View style={[styles.flexRow]}>
                    <Rating rating={data.rating} size={16} />
                    <Text style={[styles.ratingtext]}>{data.rating}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
