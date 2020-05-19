import * as React from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    PermissionsAndroid,
    ScrollView


} from "react-native";

import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Animated } from 'react-native-maps';
import { fetchNearby } from "../../api/requests";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles";

import Icon from "react-native-vector-icons/Feather";
import IconfaV from "react-native-vector-icons/FontAwesome5";

import Iconant from "react-native-vector-icons/AntDesign";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const screenHeight = Dimensions.get('window').height
export default class Nearby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places_api: "AIzaSyCRTtCaYOWbcjRIVPC_YI0oqvp5O7Yx5kQ",
            cities: [],
            articles: [{
                id: 1,
                title: "10 best drinks you have ever had",
                imageUrl: "https://s3-alpha-sig.figma.com/img/669f/af46/89f583db84d9968b02b595917372d36c?Expires=1560124800&Signature=L~I13yG8~d1AamRblHXC2y6Ir7H1FRApt4oC~E5~g~NFL5OtFfHJeZi5Ld1F4ylh~xYS-PXUHAhpWarNKZ1DW6cmdoT1nHho9onLbODXhhA29BH2vrPhcytrlApuMOEi4gqih54EOHfBNrfLhZD0AiCq-cnCP~KjbgR~JK3a~oZnhuIps1Wt47j-KX8Hht9IaeSEBjH0v8~xb7tqDZCvqmvSmsPVRXmh0gEURvTyyE0XmonrXgEDzcZ9AIIA8MV5rPmYdPtkdneoYF2qMHQTolhKSONU43lIYLaJXt2XaLCFMrk~tslzOTU7lqI9xJsHRiKXcNU7ttrwcF1fTEq3MA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            },
            {
                id: 2,
                title: "10 best drinks you have ever had",
                imageUrl: "https://s3-alpha-sig.figma.com/img/669f/af46/89f583db84d9968b02b595917372d36c?Expires=1560124800&Signature=L~I13yG8~d1AamRblHXC2y6Ir7H1FRApt4oC~E5~g~NFL5OtFfHJeZi5Ld1F4ylh~xYS-PXUHAhpWarNKZ1DW6cmdoT1nHho9onLbODXhhA29BH2vrPhcytrlApuMOEi4gqih54EOHfBNrfLhZD0AiCq-cnCP~KjbgR~JK3a~oZnhuIps1Wt47j-KX8Hht9IaeSEBjH0v8~xb7tqDZCvqmvSmsPVRXmh0gEURvTyyE0XmonrXgEDzcZ9AIIA8MV5rPmYdPtkdneoYF2qMHQTolhKSONU43lIYLaJXt2XaLCFMrk~tslzOTU7lqI9xJsHRiKXcNU7ttrwcF1fTEq3MA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            ],
            mapRegion: null,
            lastLat: null,
            lastLong: null,
            initialRegion: null,
            markers: [],

        };
    }
    async componentDidMount() {
        await this.requestLocationPermission();
    }
    async  requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Location Permission',
                    'message': 'This App needs access to your location ' +
                        'so we can know where you are.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log(granted)
                this.getInitialLocation();
            } else {
                console.log(granted);
                // this.requestLocationPermission();
            }
        } catch (err) {
            console.warn(err)
        }
    }
    getCurrentLocation = () => {
        this.watchId = navigator.geolocation.watchPosition(
            position => {
                console.log('position: ',position);
                // Create the object to update this.state.mapRegion through the onRegionChange function
                /*let region = new AnimatedRegion({
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                });
                let body = JSON.stringify({
                    location: {
                        lat: parseFloat(position.coords.latitude),
                        lng: parseFloat(position.coords.longitude)
                    }
                });
                this.setState(
                    {
                        lastLat: parseFloat(position.coords.latitude),
                        lastLong: parseFloat(position.coords.longitude)
                    },
                    () => {
                        if (Object.keys(this.state.currentEvent).length > 0) {
                            this.setDirection(this.state.currentEvent);
                        }
                    }
                );*/
                if(position && position.coords && position.coords.longitude){
                    fetchNearby(this.state.places_api, position.coords.longitude, position.coords.latitude).then((places)=>{
                        console.log('found places',places);
                        let tmp_places = new Array();
                        places.results.forEach(place => {
                            tmp_places.push({
                                id: place.id,
                                name: place.name,
                                photo: (place.photos && place.photos.length > 0) ? 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&key='+this.state.places_api+'&photoreference='+place.photos[0].photo_reference:null,
                                location: place.geometry.location  
                            });
                        });
                        this.setState({cities:tmp_places});
                    }).catch(error=>{
                        console.log('fetch nearby error',error);
                    })
                }
                // if (this.state.userProfile) {
                //   updateProfile(this.state.userProfile.id, body).then(response => {
                //     console.log("Response", response);
                //   });
                // }
                // this.mapView.animateToRegion(region, 1000);
                // this.onRegionChange(region, region.latitude, region.longitude);
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
        );
    };
    async getInitialLocation() {
        console.log("called");
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log("Position", position);
                // Create the object to update this.state.mapRegion through the onRegionChange function
                let region = {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                };

                this.setState({
                    initialRegion: region
                });
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 1
            }
        );
    }
    async goToInitialLocation() {
        /*let initialRegion = Object.assign({}, this.state.initialRegion);
        initialRegion["latitudeDelta"] = 0.005;
        initialRegion["longitudeDelta"] = 0.005;
        this.mapView.animateToRegion(initialRegion, 2000);
        await this.setState({
            enableTrackEvent: true
        });*/
        this.getCurrentLocation();
    }
    onRegionChange(region, lastLat, lastLong) {
        //  this.mapView.animateToRegion(region);
        // console.warn("Region",region);
        this.setState(
            {
                mapRegion: region,
                // If there are no new values set the current ones
                lastLat: lastLat || this.state.lastLat,
                lastLong: lastLong || this.state.lastLong
            },
            () => {
                // this.mapView.animateToRegion(region);
                let body = JSON.stringify({
                    location: {
                        lat: lastLat || this.state.lastLat,
                        lng: lastLong || this.state.lastLong
                    }
                });
                if (this.state.userProfile) {
                    if (this.state.lastLat && this.state.lastLong) {
                        updateProfile(this.state.userProfile.id, body).then(response => {
                            console.log("Response", response);
                        });
                    }
                }
            }
        );
    }

    showDrinks() {
        this.props.navigation.navigate("Drinks");
    }
    showArticle() {
        this.props.navigation.navigate("Blogarticle");
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
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBox}>
                            <Icon
                                name="search"
                                size={24}
                                style={styles.searchIcon}
                            />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Alcohol Outlets Near You"
                            />
                        </View>
                    </View>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={this.state.mapRegion}
                        followUserLocation={true}
                        ref={ref => (this.mapView = ref)}
                        zoomEnabled={true}
                        showMyLocationButton={true}
                        showsUserLocation={false}
                        onMapReady={this.goToInitialLocation.bind(this)}
                        initialRegion={this.state.initialRegion}
                    >
                    </MapView>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                        style={{

                            top: "75%",
                            zIndex: 1,
                            position: "absolute"

                        }}
                    >
                        {this.state.cities.map((city, index) => (
                            <TouchableWithoutFeedback key={city.id} onPress={() =>
                                this.props.navigation.navigate(page)}>
                                <View style={styles.boxView}>
                                    <View style={styles.image}>
                                        <Image source={{ uri: city.photo}} style={styles.articleImage}></Image>
                                    </View>
                                    <View style={styles.detailsView}>
                                        <Text style={styles.articleName}>{city.name}</Text>

                                        <View style={styles.labelView}>
                                            <Text style={styles.label}>Bar</Text>
                                            {/*<Text style={[styles.label, styles.gold, { width: "50%" }]} numberOfLines={2} ellipsizeMode={"tail"}>2.5 miles</Text>*/}
                                        </View>

                                    </View>

                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                    </ScrollView>

                </View>

                <Footer navigation={this.props.navigation} home={true} />
            </View>
        );
    }
}
