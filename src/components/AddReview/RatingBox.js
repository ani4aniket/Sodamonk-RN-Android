import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "../Rating/Rating";

export default class RatingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: 3
    };
  }

  render() {
    return (
              <View style={[styles.mt4, styles.reviewbox]}>
                <TouchableOpacity style={[styles.sliderarrowbtn]}>
                  <Icon
                    style={[styles.sliderarrow]}
                    name="arrowright"
                    size={30}
                    color="#FFF"
                  />
                </TouchableOpacity>
                <Text style={[styles.reviewboxtext]}>MRP Compliance</Text>
                <View style={[styles.rating, styles.subtext]}>
                  <View style={[styles.textleft]}>
                    <Rating rating={this.state.ratingValue} size={28} />
                  </View>
                  <View style={[styles.textright]}>
                    <Text style={[styles.ratingtext]}>
                      {this.state.ratingValue}
                    </Text>
                  </View>
                </View>
                <Text style={[styles.subtext, styles.mt4]}>
                  Moderately fair
                </Text>
              </View>
    );
  }
}
