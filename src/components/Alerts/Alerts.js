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
export default class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            events: [],
            articles: []
        }
    }
    render() {
        return (
            <View style={[styles.container]}>
                <Header showBackIcon={true} title="Alerts" navigation={this.props.navigation} />
                <View style={styles.mainContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start", alignItems: "center" }} style={{ width: "100%" }}>
                        <View style={styles.forumContainer}>
                            <View style={styles.headerView}>
                                <View style={[styles.width50, styles.alignLeft]}>
                                    <Text style={styles.titleText}>Forum Topics</Text>
                                </View>
                                <View style={[styles.width50, styles.alignRight]}>
                                    <Text style={[styles.textBold, styles.size14, styles.blue]}>Clear All</Text>
                                </View>

                            </View>
                            <View style={[styles.boxView]}>
                                <View style={styles.image}>
                                    <Image source={require("../../assets/beer.jpeg")} style={styles.articleImage}></Image>
                                </View>
                                <View style={styles.detailsView}>
                                    <Text style={styles.articleName}>Test Heading With Multiple Words</Text>
                                    <View style={styles.labelView}>
                                        <Text style={styles.label}>24 May 19,22:00 |</Text>
                                        <Text style={[styles.label, styles.blue, { width: "50%" }]} numberOfLines={2} ellipsizeMode={"tail"}>John Doe</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.articleContainer}>
                            <View style={styles.headerView}>

                                <Text style={styles.titleText}>Events</Text>
                            </View>
                            <View style={styles.boxView}>
                                <View style={styles.image}>
                                    <Image source={require("../../assets/beer.jpeg")} style={styles.articleImage}></Image>
                                </View>
                                <View style={styles.detailsView}>
                                    <Text style={styles.articleName}>Drink Technology</Text>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.label, styles.paddingR5, styles.borderRight]}>June 5-8</Text>
                                        <Text style={[styles.label, styles.paddingR5, styles.borderRight, styles.gold]}>9am-5pm</Text>
                                        <Text style={[styles.label,]}>Mumbai</Text>

                                    </View>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.label, styles.blue]} >Learn More ></Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.boxView}>
                                <View style={styles.image}>
                                    <Image source={require("../../assets/article.png")} style={styles.articleImage}></Image>
                                </View>
                                <View style={styles.detailsView}>
                                    <Text style={styles.articleName}>Drink Technology</Text>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.label, styles.paddingR5, styles.borderRight]}>June 5-8</Text>
                                        <Text style={[styles.label, styles.paddingR5, styles.borderRight, styles.gold]}>9am-5pm</Text>
                                        <Text style={[styles.label,]}>Mumbai</Text>

                                    </View>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.label, styles.blue]} >Learn More ></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.articleContainer}>
                            <View style={styles.headerView}>

                                <Text style={styles.titleText}>Articles</Text>
                            </View>
                            <View style={styles.articleBoxView}>
                                <View style={styles.image}>
                                    <Image source={require("../../assets/beer.jpeg")} style={styles.articleImage}></Image>
                                </View>
                                <View style={styles.detailsView}>
                                    <Text style={styles.articleName}>Test Heading With Multiple Words</Text>
                                    <View style={styles.labelView}>
                                        <Text style={styles.label}>This is the first line of the article for testing</Text>
                                    </View>
                                    <View style={styles.labelView}>
                                        <Text style={[styles.label, styles.blue]} >Start Reading ></Text>
                                    </View>
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
