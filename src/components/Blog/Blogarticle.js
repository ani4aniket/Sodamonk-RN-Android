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
  WebView
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Iconen from "react-native-vector-icons/Entypo";

// import styles from "./blogstyles";
import styles from "./styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rating from "../Rating/Rating";

export default class Blogarticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      badges: false,
      about: true,
      activity: false,
      current: "about"
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    var htmlContent = this.props.navigation.getParam("blogContent");
    // console.log(htmlContent);
    return (
      //<View style={styles.container}>
        //<Header showBackIcon={true} title="Blog" navigation={this.props.navigation} />
        <View style={{flex:1}}>
          <WebView
            style={{flex:1}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ html: htmlContent }}
          />
        </View>
      // </View>
      // <View style={styles.container}>
      //   <Header
      //     showBackIcon={true}
      //     title="Blog"
      //     navigation={this.props.navigation}
      //   />

      //   <View style={styles.mainContainer}>
      //     {this.state.isLoading ? (
      //       <View style={styles.loading}>
      //         <ActivityIndicator />
      //       </View>
      //     ) : (
      //       <ScrollView
      //         showsVerticalScrollIndicator={false}
      //         contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      //         style={{ width: "100%" }}
      //       >
      //         <View style={styles.topimgbox}>
      //           <Image
      //             style={styles.topimg}
      //             source={require("../../assets/blog/concert.jpeg")}
      //           />
      //         </View>
      //         <View style={styles.forumcontainer}>
      //           <Text style={styles.heading}>
      //             Lorem Ipsum Dolor sit amet consect
      //           </Text>
      //           <View style={[styles.subtext]}>
      //             <Text style={[styles.pcolor, styles.textleft]}>
      //               {"June 5, 2019 | 21:23"}
      //             </Text>
      //             <View style={[styles.textright]}>
      //               <View style={[styles.subtext, styles.ml30]}>
      //                 <TouchableOpacity style={[styles.mr5]}>
      //                   <Text>
      //                     <Iconen
      //                       styles={styles.icon}
      //                       name="facebook-with-circle"
      //                       size={30}
      //                       color="#3b5998"
      //                     />
      //                   </Text>
      //                 </TouchableOpacity>
      //                 <TouchableOpacity style={[styles.mr5]}>
      //                   <Text>
      //                     <Icon
      //                       styles={styles.icon}
      //                       name="google-plus-official"
      //                       size={32}
      //                       color="#db3236"
      //                     />
      //                   </Text>
      //                 </TouchableOpacity>
      //                 <TouchableOpacity>
      //                   <Text>
      //                     <Iconen
      //                       styles={styles.icon}
      //                       name="linkedin-with-circle"
      //                       size={30}
      //                       color="#0077B5"
      //                     />
      //                   </Text>
      //                 </TouchableOpacity>
      //               </View>
      //             </View>
      //           </View>
      //           <View style={styles.articlebox}>
      //             <View style={styles.textcontainbox}>

      //             </View>
      //           </View>
      //         </View>
      //       </ScrollView>
      //     )}
      //   </View>
      //   <Footer navigation={this.props.navigation} />
      // </View>
    );
  }
}
