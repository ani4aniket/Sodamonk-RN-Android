import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./homearticlestyle";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listdata: [
        {
          id: 1,
          url:
            "https://s3-alpha-sig.figma.com/img/4f05/ba68/d54176fcc7b2093ef3d2b92a0ccfb5e2?Expires=1560124800&Signature=D~RfcXhHbPm-bqk48tCl1GYDMuvs~CmtFqc3AUXoe4Nq43~f95RxHMbsA5HBGZ3KolNfwKAcbC6zzX-CDNYWI5DGzVYxBOhpTSMDfevcMY-X9zdk0rjorJX0vOsfHvYOr7g6lGR-lM0Fj9hWfS8~4SjY7wEciF5bHPounhp9NhorDY4Agh2-1con1PYl5sUNM0I1smreo~DqX~fKJ2p39aXZbde~tbOzayW0gL6S~sVQYlNaYZEy3SOtrbZOH69~wmz6cTxuRTyBvf2-HBZ0QXlsyEv~ORJOdM7iFVH5Ow6vDjPQO3gHceHXUUt8LMV-7slC8pkE3eInJHWm~odUKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          text: "11 Best American Whiskeys"
        },
        {
          id: 2,
          url:
            "https://s3-alpha-sig.figma.com/img/669f/af46/89f583db84d9968b02b595917372d36c?Expires=1560124800&Signature=L~I13yG8~d1AamRblHXC2y6Ir7H1FRApt4oC~E5~g~NFL5OtFfHJeZi5Ld1F4ylh~xYS-PXUHAhpWarNKZ1DW6cmdoT1nHho9onLbODXhhA29BH2vrPhcytrlApuMOEi4gqih54EOHfBNrfLhZD0AiCq-cnCP~KjbgR~JK3a~oZnhuIps1Wt47j-KX8Hht9IaeSEBjH0v8~xb7tqDZCvqmvSmsPVRXmh0gEURvTyyE0XmonrXgEDzcZ9AIIA8MV5rPmYdPtkdneoYF2qMHQTolhKSONU43lIYLaJXt2XaLCFMrk~tslzOTU7lqI9xJsHRiKXcNU7ttrwcF1fTEq3MA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          text: "20 Proven Classic Cocktail Recipes That Never Fail"
        },
        {
          id: 3,
          url:
            "https://s3-alpha-sig.figma.com/img/4f05/ba68/d54176fcc7b2093ef3d2b92a0ccfb5e2?Expires=1560124800&Signature=D~RfcXhHbPm-bqk48tCl1GYDMuvs~CmtFqc3AUXoe4Nq43~f95RxHMbsA5HBGZ3KolNfwKAcbC6zzX-CDNYWI5DGzVYxBOhpTSMDfevcMY-X9zdk0rjorJX0vOsfHvYOr7g6lGR-lM0Fj9hWfS8~4SjY7wEciF5bHPounhp9NhorDY4Agh2-1con1PYl5sUNM0I1smreo~DqX~fKJ2p39aXZbde~tbOzayW0gL6S~sVQYlNaYZEy3SOtrbZOH69~wmz6cTxuRTyBvf2-HBZ0QXlsyEv~ORJOdM7iFVH5Ow6vDjPQO3gHceHXUUt8LMV-7slC8pkE3eInJHWm~odUKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          text: "Inside3"
        },
        {
          id: 4,
          url:
            "https://s3-alpha-sig.figma.com/img/669f/af46/89f583db84d9968b02b595917372d36c?Expires=1560124800&Signature=L~I13yG8~d1AamRblHXC2y6Ir7H1FRApt4oC~E5~g~NFL5OtFfHJeZi5Ld1F4ylh~xYS-PXUHAhpWarNKZ1DW6cmdoT1nHho9onLbODXhhA29BH2vrPhcytrlApuMOEi4gqih54EOHfBNrfLhZD0AiCq-cnCP~KjbgR~JK3a~oZnhuIps1Wt47j-KX8Hht9IaeSEBjH0v8~xb7tqDZCvqmvSmsPVRXmh0gEURvTyyE0XmonrXgEDzcZ9AIIA8MV5rPmYdPtkdneoYF2qMHQTolhKSONU43lIYLaJXt2XaLCFMrk~tslzOTU7lqI9xJsHRiKXcNU7ttrwcF1fTEq3MA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          text: "Inside4"
        }
      ]
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Header showBackIcon={false} title="Home" navigation={this.props.navigation} />
        <View style={styles.mainContainer}>
          <TouchableOpacity style={[styles.nearbybtn]} activeOpacity={0.6}>
            <Icon name="map-pin" size={30} color="#FFF" />
            <Text style={styles.neartext}>Nearby</Text>
          </TouchableOpacity>
          <ScrollView
            showsVerticalScrollIndicator={false}
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
            <Text style={styles.headtext}>Latest Articles</Text>
            <View style={styles.articleContainer}>
              <View style={styles.imagelist}>
                {this.state.listdata.map((data, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.imagecontainer}
                    activeOpacity={0.6}
                    onPress={() => null}
                  >
                    <ImageBackground
                      source={{ uri: data.url }}
                      style={styles.img}
                      resizeMode={"cover"}
                      borderRadius={20}
                    >
                      <View
                        style={[
                          styles.overlay,
                          index % 2 == 0
                            ? styles.evencolor
                            : styles.oddcolor
                        ]}
                      />
                      <View style={[styles.insidetext]}>
                        <Text style={styles.textline}>{data.text}</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
