import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default (Rating = props => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(props.rating)].map((e, i) => (
        <Icon key={i} name="star" size={props.size} style={{ paddingLeft: 1, paddingRight: 1 }} color="#FE9D2C" />
      ))}
      {[...Array(5 - props.rating)].map((e, i) => (
        <Icon key={i} name="star" size={props.size} style={{ paddingLeft: 1, paddingRight: 1 }} color="#E5E5E5" />
      ))}
    </View>
  );
});
