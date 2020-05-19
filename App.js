import React, { Component } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import Signup from "./src/components/Signup/Signup";
import Login from "./src/components/Signup/Login";
import Home from "./src/components/Home/Home";
import Brand from "./src/components/Brand/Brand";

import Forumdetails from "./src/components/Forum/Forumdetails";

import Auth from "./src/components/Auth/Auth";

import Bloglist from "./src/components/Blog/Bloglist";
import Blogarticle from "./src/components/Blog/Blogarticle";
import Profile from "./src/components/Profile/Profile";
import Drinks from "./src/components/Drinks/Drinks";
import SearchResult from "./src/components/SearchResult/SearchResult";
import Alerts from "./src/components/Alerts/Alerts";
import PlaceDetails from "./src/components/PlaceDetails/PlaceDetails";

import RecentView from "./src/components/RecentView/RecentView";
import Review from "./src/components/AddReview/Review";
import HomeArticle from "./src/components/Home/HomeArticle";
import Messages from "./src/components/Messages/Messages";
import Chat from "./src/components/Chat/Chat";
import Forumlist from "./src/components/Forum/Forumlist";
import Viewall from "./src/components/SearchResult/Viewall";
import Nearby from "./src/components/Nearby/Nearby";
import BlogOfList from "./src/components/Blog/BlogsOfList";
import OtpScreen from "./src/components/ForgotPassword/OtpScreen";
import ChangePassword from "./src/components/ForgotPassword/ChangePassword";
import EnterEmail from "./src/components/ForgotPassword/EnterEmail";
import EditProfile from "./src/components/Profile/EditProfile";
import LoginCheck from "./src/components/LoginCheck/LoginCheck";

const RootScreen = "LoginCheck";
const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    Home: Home,
    Bloglist: Bloglist,
    BlogOfList: BlogOfList,
    Blogarticle: Blogarticle,
    Profile: Profile,
    Drinks: Drinks,
    Forumdetails: Forumdetails,
    SearchResult: SearchResult,
    Alerts: Alerts,
    PlaceDetails: PlaceDetails,
    RecentView: RecentView,
    Review: Review,
    HomeArticle: HomeArticle,
    Messages: Messages,
    Chat: Chat,
    Forumlist: Forumlist,
    Viewall: Viewall,
    Nearby: Nearby,
    OtpScreen: OtpScreen,
    ChangePassword: ChangePassword,
    EnterEmail: EnterEmail,
    EditProfile: EditProfile,
    LoginCheck: LoginCheck
  },
  {
    initialRouteName: RootScreen,
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
