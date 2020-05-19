import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default (Footer = props => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Icon name="home" size={26} color={props.home ? "#FE9D2C" : "#000"} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => props.navigation.navigate("Drinks")}
      >
        <Icon
          name="glass"
          size={26}
          color={props.brands ? "#FE9D2C" : "#000"}
        />
        <Text style={styles.tabText}>Brands</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => props.navigation.navigate("Bloglist")}
      >
        <Icon
          name="file-text-o"
          size={26}
          color={props.blog ? "#FE9D2C" : "#000"}
        />
        <Text style={styles.tabText}>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconView}
        disabled={true}
        onPress={() => props.navigation.navigate("Forumlist")}
      >
        <Icon
          name="commenting-o"
          size={26}
          color={props.forum ? "#FE9D2C" : "#000"}
        />
        <Text style={styles.tabText}>Forum</Text>
      </TouchableOpacity>
    </View>
  );
});
