import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  ActivityIndicator
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
import { searchProducts, fetchProducts } from "../../api/requests";

export default class Viewall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [
        {
          id: 1,
          name: "Jack Daniels",
          imageUrl: "../../assets/beer.jpeg",
          totalRatings: 35,
          rating: 5,
          minPrice: 500,
          maxPrice: 800,
          location: "Black sheep Bistro,Goa"
        },
        {
          id: 2,
          name: "Kingfisher",
          imageUrl: "../../assets/beer.jpeg",
          rating: 5,
          totalRatings: 35,
          minPrice: 500,
          maxPrice: 800,
          location: "Black sheep Bistro,Goa"
        },
        {
          id: 3,
          name: "Whiskey",
          imageUrl: "../../assets/beer.jpeg",
          totalRatings: 35,
          rating: 5,
          minPrice: 500,
          maxPrice: 800,
          location: "Black sheep Bistro,Goa"
        }
      ],
      isLoading: false,
      timeout: 0,
      products: [],
      articles: [],
      locations: [],
      forum: [],
      searchQuery: ""
    };
  }
  renderRating(rating) {
    let ratingComponent = [];
    for (let i = 0; i < rating; i++) {
      ratingComponent.push(<Icon name="star" size={15} />);
    }
    return ratingComponent;
  }

  async componentDidMount() {
    const allProducts = await fetchProducts();

    this.setState(prevState => {
      return {
        products: [...prevState.products, ...allProducts]
      };
    });
  }

  handleSearch = async sQuery => {
    // var sQuery = this.state.searchQuery;
    this.setState({ isLoading: true });
    console.log(sQuery);
    const products = await searchProducts(sQuery);

    this.setState({ products: [] });

    this.setState(prevState => {
      return {
        isLoading: false,
        products: [...prevState.products, ...products]
      };
    });
    console.log(this.state.products);
  };

  render() {
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
                  value={this.state.searchQuery}
                  onChangeText={searchQuery => {
                    this.setState({ searchQuery });
                    if (this.state.timeout) clearTimeout(this.state.timeout);
                    this.state.timeout = setTimeout(() => {
                      this.handleSearch(this.state.searchQuery);
                    }, 100);
                  }}
                  placeholder="Search Here"
                />
                {/* <Button title="search" onPress={this.handleSearch} /> */}
              </View>
            </View>
            <View style={styles.forumContainer}>
              <View style={styles.headerView}>
                <Iconmetirial
                  name="text-subject"
                  size={30}
                  color="#FE9D2C"
                  style={styles.headerIcon}
                />
                <Text style={styles.viewtitleText}>Products</Text>
              </View>
              {this.state.isLoading ? (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" color="orange" />
                </View>
              ) : (
                <View style={styles.mt5}>
                  <TouchableOpacity
                    style={[styles.sliderarrowbtn]}
                    onPress={() =>
                      this.props.navigation.navigate("SearchResult", {
                        title: "Products",
                        product: true,
                        page: "Drinks",
                        keyword: this.state.searchQuery
                      })
                    }
                  >
                    <Iconant
                      style={[styles.sliderarrow]}
                      name="arrowright"
                      size={22}
                      color="#FFF"
                    />
                  </TouchableOpacity>
                  <View style={styles.flexRow}>
                    {this.state.products.map((data, index) => (
                      <View style={[styles.review]} key={index}>
                        <TouchableOpacity>
                          <View style={styles.imagebox}>
                            <Image
                              style={styles.img}
                              source={require("../../assets/profile/fav.jpeg")}
                              resizeMode="cover"
                            />
                          </View>
                        </TouchableOpacity>
                        <View styles={styles.subtext}>
                          <Text
                            styles={styles.subtexthead}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            ellipsis="....."
                          >
                            {data.name}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
            <View style={styles.forumContainer}>
              <View style={styles.headerView}>
                <Icon
                  name="file-text-o"
                  size={30}
                  color="#FE9D2C"
                  style={styles.headerIcon}
                />
                <Text style={styles.viewtitleText}>Articles</Text>
              </View>

              <View style={styles.mt5}>
                <TouchableOpacity
                  style={[styles.sliderarrowbtn]}
                  onPress={() =>
                    this.props.navigation.navigate("SearchResult", {
                      title: "Articles",
                      articles: true,
                      page: "Blogarticle"
                    })
                  }
                >
                  <Iconant
                    style={[styles.sliderarrow]}
                    name="arrowright"
                    size={22}
                    color="#FFF"
                  />
                </TouchableOpacity>
                <View style={styles.flexRow}>
                  {this.state.articles.map((data, index) => (
                    <View style={[styles.review]} key={index}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Bloglist")
                        }
                      >
                        <View style={styles.imagebox}>
                          <Image
                            style={styles.img}
                            source={require("../../assets/profile/fav.jpeg")}
                            resizeMode="cover"
                          />
                        </View>
                      </TouchableOpacity>
                      <View styles={styles.subtext}>
                        <Text
                          styles={styles.subtexthead}
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          ellipsis="....."
                        >
                          {data.text}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.forumContainer}>
              <View style={styles.headerView}>
                <Iconline
                  name="location-pin"
                  size={30}
                  color="#FE9D2C"
                  style={styles.headerIcon}
                />
                <Text style={styles.viewtitleText}>Locations</Text>
              </View>

              <View style={styles.mt5}>
                <TouchableOpacity
                  style={[styles.sliderarrowbtn]}
                  onPress={() =>
                    this.props.navigation.navigate("SearchResult", {
                      title: "Locations",
                      location: true,
                      page: "PlaceDetails"
                    })
                  }
                >
                  <Iconant
                    style={[styles.sliderarrow]}
                    name="arrowright"
                    size={22}
                    color="#FFF"
                  />
                </TouchableOpacity>
                <View style={styles.flexRow}>
                  {this.state.locations.map((data, index) => (
                    <View style={[styles.review]} key={index}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("PlaceDetails")
                        }
                      >
                        <View style={styles.imagebox}>
                          <Image
                            style={styles.img}
                            source={require("../../assets/profile/fav.jpeg")}
                            resizeMode="cover"
                          />
                        </View>
                      </TouchableOpacity>
                      <View styles={styles.subtext}>
                        <Text
                          styles={styles.subtexthead}
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          ellipsis="....."
                        >
                          {data.text}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.forumContainer}>
              <View style={styles.headerView}>
                <Icon
                  name="commenting-o"
                  size={30}
                  color="#FE9D2C"
                  style={styles.headerIcon}
                />
                <Text style={styles.viewtitleText}>Forum</Text>
              </View>

              <View style={styles.mt5}>
                <TouchableOpacity
                  style={[styles.sliderarrowbtn]}
                  onPress={() =>
                    this.props.navigation.navigate("SearchResult", {
                      title: "Forum",
                      forum: true,
                      page: "Forumdetails"
                    })
                  }
                >
                  <Iconant
                    style={[styles.sliderarrow]}
                    name="arrowright"
                    size={22}
                    color="#FFF"
                  />
                </TouchableOpacity>
                <View style={styles.flexRow}>
                  {this.state.forum.map((data, index) => (
                    <View style={[styles.review]} key={index}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Forumdetails")
                        }
                      >
                        <View style={styles.imagebox}>
                          <Image
                            style={styles.img}
                            source={require("../../assets/profile/fav.jpeg")}
                            resizeMode="cover"
                          />
                        </View>
                      </TouchableOpacity>
                      <View styles={styles.subtext}>
                        <Text
                          styles={styles.subtexthead}
                          numberOfLines={2}
                          ellipsizeMode="tail"
                          ellipsis="....."
                        >
                          {data.text}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
