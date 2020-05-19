import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "../Rating/Rating";

export default class RecentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentList: [
        {
          id: 1,
          name: "Imperial Stout",
          imageUrl: "../../assets/beer2.jpeg",
          totalRatings: 12,
          rating: 1,
          hour: 10
        },
        {
          id: 2,
          name: "Imperial Stout",
          imageUrl: "../../assets/beer2.jpeg",
          totalRatings: 42,
          rating: 3,
          hour: 21
        },
        {
          id: 3,
          name: "Imperial Stout",
          imageUrl: "../../assets/beer2.jpeg",
          totalRatings: 32,
          rating: 4,
          hour: 12
        },
        {
          id: 4,
          name: "Imperial Stout",
          imageUrl: "../../assets/beer2.jpeg",
          totalRatings: 42,
          rating: 3,
          hour: 21
        },
        {
          id: 5,
          name: "Imperial Stout",
          imageUrl: "../../assets/beer2.jpeg",
          totalRatings: 32,
          rating: 4,
          hour: 12
        }
      ]
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Header showBackIcon={true} title="Recent Viewed" navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
          >
            <View style={[styles.flexRow, styles.mt5, styles.mb8]}>
              {this.state.recentList.map((data, index) => (
                <View style={[styles.recentview]} key={index}>
                  <View
                    style={[
                      styles.mainview,
                      styles.borderBottom,
                      index % 2 == 0 ? styles.borderRight : null
                    ]}
                  >
                    <View style={styles.recentImage}>
                      <Image
                        source={require("../../assets/beer2.jpeg")}
                        style={styles.image}
                      />
                    </View>
                    <View style={[styles.detailsview, styles.mb5]}>
                      <Text style={styles.name}>
                        {data.name}
                        <Text style={[styles.name, styles.blue]}>
                          {" (" + data.totalRatings + ")"}
                        </Text>
                      </Text>
                      <Text>
                        {data.hour}
                        {" hrs ago"}
                      </Text>
                      <View style={[styles.flexRow, styles.mt2]}>
                        <Rating rating={data.rating} size={15} />
                        <Text style={[styles.ratingvalue]}>
                          {data.rating}
                        </Text>
                      </View>
                      <View style={[styles.mt5]}>
                        <TouchableOpacity style={[styles.reviewButton]} onPress={() => this.props.navigation.navigate("Review")}>
                          <Text style={styles.buttonText}>Add a Review</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
