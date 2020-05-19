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
    ImageBackground
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";


import styles from "./styles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rating from "../Rating/Rating";

export default class PlaceDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {
                id: 1,
                name: "City 75 Pub and Patio",
                type: "Bar and Restaurant",
                rating: 5,
                address: "Level 3 & 4, Malik Plaza, Ashirwaad Chowk, Pocket 1, Sector 4, Dwarka, Delhi, 110075",
                phone: "99999999",
                email: "abc@xyz.com",
                distance: 1.5,
                imageUrl: ""

            },
            reviews: [{
                id: 1,
                name: "Ramu Kaka",
                rating: 5,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            },
            {
                id: 2,
                name: "Ramu Kaka",
                rating: 5,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
            }],
            totalReviews: 100

        }
    }



    render() {
        return (
            <View style={styles.container}>
                <Header showBackIcon={true} title="Places" navigation={this.props.navigation} />

                <View style={styles.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start", alignItems: "center" }} style={{ width: "100%" }} >


                        <View style={[styles.flexColumn, styles.start, { width: "100%", height: 200 }]}>
                            <Image source={require("../../assets/blog/concert.jpeg")} style={styles.placeImage}></Image>
                            <TouchableOpacity activeOpacity={0.2} style={[styles.distanceButton, { zIndex: 1, position: "absolute", top: "80%", left: "70%", opacity: 0.5 }]}>
                                <Text style={styles.buttonText}>1.5 kms</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsView}>
                            <Text style={[styles.textBold, styles.font24, styles.black]}>{this.state.place.name}</Text>
                            <View style={styles.labelView}>
                                <Text style={[styles.label, styles.paddingR5, styles.borderRight]}>
                                    {this.state.place.type}
                                </Text>
                                <Rating rating={this.state.place.rating} size={15} />
                                <Text style={[styles.label, styles.paddingL5]}>{this.state.place.rating}</Text>

                            </View>
                            <View style={styles.labelView}>
                                <Text style={[styles.textSemiBold, styles.black, styles.size16]}>{this.state.place.address}</Text>
                            </View>
                            <View style={styles.labelView}>
                                <Text style={[styles.label, styles.paddingR5, styles.borderRight, styles.gold, styles.size16]}>
                                    {this.state.place.phone}
                                </Text>
                                <Text style={[styles.label, styles.blue, styles.size16]}>
                                    {this.state.place.email}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.detailsView]}>
                            <View style={[styles.flexRow, styles.start, styles.alignCenter]}>
                                <View style={[styles.flexRow, styles.start, styles.alignCenter, { width: "70%" }]}>
                                    <Text style={[styles.textBold, styles.font24, styles.black]}>Reviews</Text>
                                    <Text style={[styles.label, styles.paddingL5, styles.mt5]}>
                                        {"(" + this.state.totalReviews + ")"}
                                    </Text>
                                    <Text style={[styles.label, styles.paddingL5, styles.gold, styles.mt5]}>
                                        View All
                            </Text>
                                </View>

                                <TouchableOpacity style={styles.reviewButton}>
                                    <Text style={styles.buttonText}>Add a Review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.articleContainer}>
                            {this.state.reviews.map(review => <View key={review.id} style={styles.boxView}>
                                <View style={styles.image}>
                                    <Image source={require("../../assets/profile/profile.png")} style={styles.articleImage}></Image>
                                </View>
                                <View style={styles.innerDetailsView}>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.textBold, styles.black, { width: "70%", fontSize: 16 }]}>{review.name}</Text>
                                        <Icon name="like2" size={20} style={styles.paddingR5} />
                                        <Icon name="sharealt" size={20} style={styles.paddingL5} />
                                    </View>
                                    <View style={styles.labelView}>
                                        <Rating rating={5} size={15} />
                                        <Text style={[styles.label, styles.paddingL5]}>{this.state.place.rating}</Text>
                                    </View>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.label]}>{review.description}</Text>
                                    </View>
                                </View>
                            </View>)}
                        </View>
                    </ScrollView>
                </View>
                <Footer navigation={this.props.navigation} />
            </View >
        );
    }
}
