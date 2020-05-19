import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  AsyncStorage,
} from "react-native";
import { SITE_URL } from "../../api/constants";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles";

import Icon from "react-native-vector-icons/Feather";
import IconfaV from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";
import Iconant from "react-native-vector-icons/AntDesign";
import { fetchBlogList } from "../../api/requests";
import { fetchLatest } from "../../api/requests";

const screenHeight = Dimensions.get("window").height;
export default class Home extends React.Component {
  static navigationOptions = {
    headerLeft: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          id: 1,
          name: "Mumbai",
          imageUrl: require("../../assets/mumbai.png"),
        },
        {
          id: 2,
          name: "Bangalore",
          imageUrl: require("../../assets/concert.png"),
        },
        {
          id: 3,
          name: "Kolkata",
          imageUrl: require("../../assets/mumbai.png"),
        },
      ],
      articles: [],
    };
  }

  async componentDidMount() {
    // const blogs = await fetchLatest();
    // this.setState(prevState => {
    //   return {
    //     articles: [...prevState.articles, ...blogs]
    //   };
    // });
    // console.log(blogs);
  }

  showDrinks() {
    this.props.navigation.navigate("Drinks");
  }
  showArticle(articleDesc) {
    this.props.navigation.navigate("Blogarticle", {
      blogContent: articleDesc,
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Header
          showBackIcon={false}
          title="Home"
          navigation={this.props.navigation}
        />

        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={[styles.nearbybtn]}
            onPress={() => this.props.navigation.navigate("Nearby")}
            activeOpacity={0.6}
          >
            <IconfaV name="map-pin" size={30} color="#000" />
            <Text style={styles.neartext}>Nearby</Text>
          </TouchableOpacity>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
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
            <View style={styles.cityContainer}>
              <Text style={styles.titleText}>Drinks in your city</Text>
              <View>
                <TouchableOpacity style={[styles.sliderarrowbtn]}>
                  <Iconant name="arrowright" size={22} color="#343434" />
                </TouchableOpacity>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {this.state.cities.map((city, index) => (
                    <TouchableOpacity
                      key={city.id}
                      style={[styles.cityButton]}
                      onPress={() => this.showDrinks()}
                    >
                      <Text style={styles.cityName}>{city.name}</Text>
                      <ImageBackground
                        style={[styles.cityImage]}
                        source={city.imageUrl}
                        borderRadius={20}
                      >
                        <View
                          style={[
                            styles.overlay,
                            index % 2 == 0 ? styles.evencolor : styles.oddcolor,
                          ]}
                        />
                      </ImageBackground>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.articleContainer}>
              <View style={styles.headerView}>
                <View
                  style={{
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    width: "50%",
                  }}
                >
                  <Text style={styles.titleText}>Latest Articles</Text>
                </View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    width: "50%",
                  }}
                >
                  <Text
                    style={styles.viewAll}
                    onPress={() => this.props.navigation.navigate("Bloglist")}
                  >
                    View all
                  </Text>
                </View>
              </View>

              <View style={styles.articleListView}>
                {this.state.articles.map((article, index) => (
                  <TouchableOpacity
                    key={article.id}
                    style={[styles.articleButton]}
                    onPress={() => this.showArticle(article.data.main_content)}
                  >
                    <Text style={styles.articleTitle}>{article.title}</Text>
                    <ImageBackground
                      style={[styles.cityImage]}
                      source={{
                        uri: `${SITE_URL}/${article.data.image}`,
                      }}
                      borderRadius={20}
                    >
                      <View
                        style={[
                          styles.overlay,
                          index % 2 == 0 ? styles.evencolor : styles.oddcolor,
                        ]}
                      />
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} home={true} />
      </View>
    );
  }
}
