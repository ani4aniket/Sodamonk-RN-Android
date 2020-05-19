import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Slider,
} from "react-native";

import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "../Rating/Rating";

export default class Ratingslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: 1,
      value: 3,
      slideStartingCount:0,
      min:1,
      step:0.5,
      max:5
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
          <View style={[styles.slidertextleft]}>
            <Slider
              value={this.state.value}
              step={this.state.step}
              minimumValue={this.state.min}
              maximumValue={this.state.max}
              minimumTrackTintColor="#FE9D2C"
              maximumTrackTintColor="#000000"
              thumbTintColor={"#FE9D2C"}
              onSlidingStart={value =>
                this.setState({
                  value: value
                })
              }
              onSlidingComplete={value =>
                this.setState({
                  value: value
                })
              }
            />
          </View>
          <View style={[styles.slidertextright]}>
            <Text style={[styles.ratingtext]}>
              {this.state.value.toFixed(1)}
            </Text>
          </View>
        </View>
        <Text style={[styles.subtext, styles.mt4]}>Moderately fair</Text>
      </View>
    );
  }
}
