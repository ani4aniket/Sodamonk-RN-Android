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

import styles from "./badgesstyle";

export default class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      row: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
            id:3
          },
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
        <View style={styles.badgescontainer}>
          {this.state.row.map((data, index) => (
            <View style={styles.mr5}
            key={index}>
              <View style={styles.iconholder}>
                <View style={styles.iconsubholder}>
                  <View style={styles.iconcontainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles.img}
                        source={require("../../assets/profile/icon.png")}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.iconsubholder}>
                  <View style={styles.iconcontainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles.img}
                        source={require("../../assets/profile/icon.png")}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.iconsubholder}>
                  <View style={styles.iconcontainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles.img}
                        source={require("../../assets/profile/icon.png")}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.iconsubholder}>
                  <View style={styles.iconcontainer}>
                    <TouchableOpacity>
                      <Image
                        style={styles.img}
                        source={require("../../assets/profile/icon.png")}
                        resizeMode="cover"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
