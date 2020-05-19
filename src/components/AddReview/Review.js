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
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import RatingBox from "./RatingBox";
import RatingSlider from "./Ratingslider";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: 3,
      disable: true,
      ratingbox: true,
      ratingslider: false
    };
  }

  showSlider() {
    this.setState({
      ratingbox: false,
      ratingslider: true,
      disable: true
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Header showBackIcon={true} title="Add a review" navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }}
          >
            <View style={[styles.reviewcontainer]}>
              <View style={[styles.mt10]}>
                <View style={[styles.imgContainer]}>
                  <Image
                    source={require("../../assets/review/review.png")}
                    style={styles.image}
                  />
                </View>
              </View>
              <View style={[styles.mt4]}>
                <Text style={[styles.head, styles.blue]}>
                  City 75 Pub and Patio
                </Text>
              </View>
              {this.state.ratingbox ? <RatingBox /> : <RatingSlider />}
              <TouchableOpacity
                style={[
                  styles.reviewButton,
                  styles.mt4,
                  this.state.disable ? styles.disable : null
                ]}
                onPress={() => this.showSlider()}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
