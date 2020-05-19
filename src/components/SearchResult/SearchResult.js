import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from "react-native";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Iconmetirial from "react-native-vector-icons/MaterialCommunityIcons";
import Iconant from "react-native-vector-icons/AntDesign";
import Iconline from "react-native-vector-icons/SimpleLineIcons";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "../Rating/Rating";
import { searchProducts } from "../../api/requests";
import { SITE_URL } from "../../api/constants";

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }

  async componentDidMount() {
    const sQuery = this.props.navigation.getParam("keyword");
    console.log(sQuery);
    const products = await searchProducts(sQuery);

    this.setState(prevState => {
      return {
        drinks: [...prevState.drinks, ...products]
      };
    });
    console.log(this.state.drinks);
  }
  renderRating(rating) {
    let ratingComponent = [];
    for (let i = 0; i < rating; i++) {
      ratingComponent.push(<Icon name="star" size={15} />);
    }
    return ratingComponent;
  }

  render() {
    const page = this.props.navigation.getParam("page", null);
    return (
      <View style={[styles.container]}>
        <Header
          showBackIcon={true}
          title="Search Results"
          navigation={this.props.navigation}
        />
        <View style={styles.mainContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
            style={{ width: "100%" }}
          >
            <View style={styles.searchContainer}>
              <View style={styles.searchBox}>
                <Icon name="search" size={24} style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search Here"
                />
              </View>
            </View>
            <View style={styles.articleContainer}>
              <View style={styles.headerView}>
                {this.props.navigation.getParam("product") ? (
                  <Iconmetirial
                    name="text-subject"
                    size={30}
                    color="#FE9D2C"
                    style={styles.headerIcon}
                  />
                ) : null}
                {this.props.navigation.getParam("articles") ? (
                  <Icon
                    name="file-text-o"
                    size={30}
                    color="#FE9D2C"
                    style={styles.headerIcon}
                  />
                ) : null}
                {this.props.navigation.getParam("location") ? (
                  <Iconline
                    name="location-pin"
                    size={30}
                    color="#FE9D2C"
                    style={styles.headerIcon}
                  />
                ) : null}
                {this.props.navigation.getParam("forum") ? (
                  <Icon
                    name="commenting-o"
                    size={30}
                    color="#FE9D2C"
                    style={styles.headerIcon}
                  />
                ) : null}

                <Text style={styles.titleText}>
                  {this.props.navigation.getParam("title", "Default")}
                </Text>
              </View>
              <FlatList
                data={this.state.drinks}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(page)}
                  >
                    <View style={styles.boxView}>
                      <View style={styles.image}>
                        <Image
                          source={
                            item.data
                              ? { uri: `${item.data.image}` }
                              : require("../../assets/beer.jpeg")
                          }
                          style={styles.articleImage}
                        />
                      </View>
                      <View style={styles.detailsView}>
                        <Text style={styles.articleName}>{item.name}</Text>

                        <View style={styles.labelView}>
                          <Text style={styles.label}>24 May 19,22:00 |</Text>
                          <Text
                            style={[
                              styles.label,
                              styles.blue,
                              { width: "50%" }
                            ]}
                            numberOfLines={2}
                            ellipsizeMode={"tail"}
                          >
                            John Doe
                          </Text>
                        </View>
                        <View style={styles.labelView}>
                          <Text style={[styles.label, styles.blue]}>
                            Start Reading >
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
