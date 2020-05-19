import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  FlatList
} from "react-native";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "../Rating/Rating";
import { fetchBlogList } from "../../api/requests";
import { SITE_URL } from "../../api/constants";

export default class Bloglist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listdata: []
    };
  }

  async componentDidMount() {
    const blogs = await fetchBlogList();
    const blogCatId = this.props.navigation.getParam("itemId");
    const filteredBlogs = blogs.filter(
      item => item.data.blogcategoryid === blogCatId
    );
    // console.log(filteredBlogs);
    this.setState(prevState => {
      return {
        isLoading: false,
        listdata: [...prevState.listdata, ...filteredBlogs]
      };
    });
    // console.log(this.state.listdata);
  }

  render() {
    // console.log(this.props.navigation.getParam("itemId"));
    return (
      <View style={[styles.container]}>
        <Header
          showBackIcon={true}
          title="Blog"
          navigation={this.props.navigation}
        />
        <View style={styles.mainContainer}>
          {this.state.isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#1957A7" />
            </View>
          ) : (
            <View style={styles.mt2}>
              <View style={styles.imagelist}>
                <FlatList
                  data={this.state.listdata}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.imagecontainerBlog}
                      activeOpacity={0.6}
                      onPress={() =>
                        this.props.navigation.navigate("Blogarticle", {
                          blogContent: item.data.main_content
                        })
                      }
                    >
                      <ImageBackground
                        source={{
                          uri: `${SITE_URL}/${item.data.image}`
                        }}
                        style={styles.img}
                        resizeMode={"cover"}
                        borderRadius={20}
                      >
                        <View
                          style={[
                            styles.overlay,
                            this.state.listdata.indexOf(item) % 2 == 0
                              ? styles.evencolor
                              : styles.oddcolor
                          ]}
                        />
                        <View style={[styles.insidetext]}>
                          <Text style={styles.textline}>{item.title}</Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.title}
                />
              </View>
            </View>
          )}
        </View>

        <Footer navigation={this.props.navigation} blog={true} />
      </View>
    );
  }
}
