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
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "../Rating/Rating";
import { fetchVariants, fetchProducts } from "../../api/requests";
import { SITE_URL } from "../../api/constants";

export default class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      products: [],
      brandList: []
    };
  }

  async componentDidMount() {
    const products = await fetchProducts();
    const drinks = await fetchVariants();
    let brandList = [];
    brandList = [...products];
    brandList.forEach(brand => {
      brand.products = drinks.filter(drink => drink.productId == brand.id);
    });
    // console.log(brandList);
    this.setState({ brandList });
    console.log(this.state.brandList);
  }

  renderRating(rating) {
    let ratingComponent = [];
    for (let i = 0; i < rating; i++) {
      ratingComponent.push(<Icon name="star" size={15} />);
    }
    return ratingComponent;
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Header
          showBackIcon={true}
          title="Drinks"
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
            {this.state.brandList.map(d => (
              <View key={d.id} style={styles.drinkView}>
                <Text style={styles.headtext}>{d.name}</Text>

                {d.products.map(drink => (
                  <View key={drink.id}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginTop: 15,
                        borderBottomColor: "#E5E5E5",
                        borderBottomWidth: 0.5,
                        width: "90%",
                        paddingBottom: 10
                      }}
                      // style={styles.drinkView}
                    >
                      <Image
                        source={
                          drink.brandimage
                            ? {
                                uri: `${SITE_URL}/${drink.brandimage}`
                              }
                            : require("../../assets/beer.jpeg")
                        }
                        style={styles.drinkImage}
                      />
                      <View style={styles.detailsView}>
                        <Text style={styles.drinkName}>{drink.name}</Text>
                        <View style={styles.ratingView}>
                          <Rating size={15} rating={4} />
                          <Text style={styles.ratingText}>{"5" + ".0"}</Text>
                          <Text style={[styles.countText, styles.blue]}>
                            {"(" + "4.5" + ")"}
                          </Text>
                        </View>
                        <View style={styles.labelView}>
                          <Text style={styles.label}>Price:</Text>
                          <Icon
                            name="rupee"
                            size={15}
                            color="#1957A7"
                            style={styles.rupee}
                          />
                          <Text style={[styles.label, styles.blue]}>
                            {"800" + " -"}
                          </Text>
                          <Icon
                            name="rupee"
                            size={15}
                            color="#1957A7"
                            style={styles.rupee}
                          />
                          <Text style={[styles.label, styles.blue]}>
                            {"1000"}
                          </Text>
                        </View>
                        <View style={styles.labelView}>
                          <Text
                            style={styles.label}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                          >
                            {"Location: " + "Kolkata"}
                          </Text>
                        </View>
                        <View style={styles.labelView}>
                          <TouchableOpacity
                            style={styles.reviewButton}
                            onPress={() =>
                              this.props.navigation.navigate("Review")
                            }
                          >
                            <Text style={styles.buttonText}>Add Review</Text>
                          </TouchableOpacity>
                          <Text style={[styles.compareText]}>
                            Compare Price
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} brands={true} />
      </View>
    );
  }
}
