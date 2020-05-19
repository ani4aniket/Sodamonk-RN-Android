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

import styles from "./activitystyle";

export default class Activity extends React.Component {
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
      ],
      reviews: [
        {
          id: 1,
          name: "Ramu Kaka",
          rating: 5.0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        {
          id: 2,
          name: "Ramu Kaka",
          rating: 5.0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        {
          id: 3,
          name: "Ramu Kaka",
          rating: 5.0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        {
          id: 4,
          name: "Ramu Kaka",
          rating: 4.0,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
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
          <Text style={styles.headtext}>Recently Viewed</Text>
        </View>
        <View style={styles.sliderView}>


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
                  <View style={styles.labelView}>
                    <Text styles={styles.subtexthead}>{data.text}</Text>
                    <Text style={[styles.label, styles.paddingL5, styles.blue]}>
                      {"(32)"}
                    </Text>
                  </View>
                  <View style={styles.labelView}>
                    <Rating rating={data.rating} size={15} />
                    <Text style={[styles.label, styles.paddingL5]}>
                      {data.rating.toFixed(1)}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.aboutcontainer}>
          <Text style={styles.headtext}>You Reviewed :</Text>
        </View>
        <View style={styles.articleContainer}>
          {this.state.reviews.map((data, index) => (
            <View key={index} style={styles.boxView}>
              <View style={styles.image}>
                <Image
                  source={require("../../assets/profile/profile.png")}
                  style={styles.articleImage}
                />
              </View>
              <View style={styles.innerDetailsView}>
                <View style={styles.labelView}>
                  <Text style={[styles.name]}>{data.name}</Text>
                  <TouchableOpacity>
                    <Icon
                      name="like2"
                      size={20}
                      style={styles.paddingR5}
                      color={"#000"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name="sharealt"
                      size={20}
                      style={styles.paddingL5}
                      color={"#000"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.labelView}>
                  <Rating rating={data.rating} size={15} />
                  <Text style={[styles.label, styles.paddingL5]}>
                    {data.rating.toFixed(1)}
                  </Text>
                </View>
                <View style={styles.labelView}>
                  <Text style={[styles.label]}>{data.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
