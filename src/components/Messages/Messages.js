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
  AsyncStorage,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { fetchUser } from "../../api/requests";
import styles from "./styles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SendBird from "sendbird";
var sb = new SendBird({ appId: "5AC1FAAE-D1EB-484A-9A5A-CEEBF49C1ED8" });
export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.messageTimer;
    this.state = {
      isLoading: true,
      channels: [],
      showLoader: false,
      userId: "",
      connectedToSendBird: false,
      messages: []
    };
  }

  async componentDidMount() {
    const currentUserId = await AsyncStorage.getItem("userId");
    this.setState({ userId: currentUserId });
    this.connectToSendBird(currentUserId);
    this.receiveMessages();
  }

  connectToSendBird(userId) {
    sb.connect(userId, (user, error) => {
      if (error) {
        return;
      }
      this.setState(
        {
          connectedToSendBird: true,
          isLoading: false
        },
        () => {
          this.getChannelList(this.state.userId);
        }
      );
      // this.messageTimer = setInterval(()=> {
      //   this.getChannelList(this.state.userId);
      // }, 2000);
    });
  }

  getChannelList(userId) {
    var filteredQuery = sb.GroupChannel.createMyGroupChannelListQuery();
    // console.log(filteredQuery);
    filteredQuery.userIdsIncludeFilter = [userId];
    filteredQuery.next((channels, error) => {
      // console.log(channels);
      if (error) {
        return;
      }
      this.getChannelDetails(userId, channels);
    });
  }

  async getChannelDetails(userId, channels) {
    await this.setState({
      channels: channels
    });
    // console.log(this.state.channels);
    let messageList = [...this.state.messages];
    // console.log(messageList);
    for (i in channels) {
      let messageIndex = messageList.findIndex(
        message => message.id === channels[i].url
      );
      let msgType = "text";
      // if (channels[i].lastMessage.messageType == "file") {
      //   msgType = "image";
      // }
      let channelName =
        channels[i].name != ""
          ? channels[i].name
          : await this.getChannelName(channels[i]);

      //Modify existing user chat
      if (messageIndex != -1) {
        let currentMsgObj = messageList[messageIndex];
        if (currentMsgObj.lastMessageId != channels[i].lastMessage.messageId) {
          var json = JSON.parse(channels[i].lastMessage.data);
          currentMsgObj.lastMessage = channels[i].lastMessage.message;
          currentMsgObj.lastMessageId = channels[i].lastMessage.messageId;
          currentMsgObj.lastMessageType = msgType;
          currentMsgObj.lastMessageTime = json.time;
          messageList.splice(messageIndex, 1);
          messageList.unshift(currentMsgObj);
        }
      } //Add new chat
      else {
        var json = JSON.parse(channels[i].lastMessage.data);
        // console.log(channels[i]);
        messageList.unshift({
          id: channels[i].url,

          lastMessage: channels[i].lastMessage.message,
          lastMessageId: channels[i].lastMessage.messageId,
          lastMessageType: msgType,
          lastMessageTime: json.time,
          channel: channels[i],

          username: channelName,
          status: channels[i].unreadMessageCount > 0 ? "online" : "offline",
          unreadMsg: channels[i].unreadMessageCount,
          profileUrl: ""
        });
      }
    }

    await this.setState({
      messages: messageList
    });
    // console.log(this.state.messages);
  }

  async receiveMessages() {
    let ChannelHandler = new sb.ChannelHandler();
    // console.log(ChannelHandler);

    ChannelHandler.onMessageReceived = async (channel, message) => {
      // console.log(channel);
      // console.log(message);
      // console.log(this.state.messages);
      let msgObjs = [...this.state.messages];
      // console.log(msgObjs);
      let index = this.state.messages.findIndex(msg => msg.id == channel.url);
      let msgType = "text";
      // if (message.messageType == "file") {
      //   msgType = "image";
      // }
      let channelName =
        channel.name != "" ? channel.name : await this.getChannelName(channel);
      /**Modifies last message of existing user chat */
      if (index != -1) {
        var json = JSON.parse(message.data);
        let currentMsgObj = msgObjs[index];
        currentMsgObj.lastMessage = message.message;
        currentMsgObj.lastMessageId = message.messageId;
        currentMsgObj.lastMessageTime = json.time;
        currentMsgObj.unreadMsg = channel.unreadMessageCount;
        (currentMsgObj.lastMessageType = msgType),
          (currentMsgObj.status = "online");
        msgObjs.splice(index, 1);
        msgObjs.unshift(currentMsgObj);
      } else {
        /** Add new user chat */
        var json = JSON.parse(message.data);
        msgObjs.unshift({
          id: channel.url,

          lastMessage: message.message,
          lastMessageId: message.messageId,
          lastMessageType: msgType,
          channel: channel,
          lastMessageTime: json.time,
          unreadMsg: channel.unreadMessageCount,
          username: channelName,
          status: "online",
          profileUrl: ""
        });
      }
      this.setState({
        messages: msgObjs
      });
      // console.log(this.state.messages);
    };
    sb.addChannelHandler(this.state.userId, ChannelHandler);
  }

  async getChannelName(channel) {
    // console.log(channel);
    let members = channel.members;
    let guestUserIndex = members.findIndex(
      member => member.userId != this.state.userId
    );
    let user = await fetchUser(members[guestUserIndex].userId);
    return user.name;
  }

  async goToChat(message) {
    let messages = [...this.state.messages];
    let index = messages.findIndex(msg => msg.id == message.id);
    messages[index].status = "offline";
    messages[index].unreadMsg = 0;
    await this.setState({
      messages: messages
    });
    let currentChannel = messages[index].channel;
    currentChannel.refresh((response, error) => {
      response.markAsRead();
      if (error) {
        return;
      }
      currentChannel = response;
      let channelData = JSON.parse(currentChannel.data);
      let memberList = [];
      let memberCounter = 0;
      currentChannel.members.forEach(async member => {
        memberCounter++;
        let user = await this.props.navigation.getParam("loggedUserid");
        memberList.push({
          id: user
          //  username: user.username,
          //  profileUrl: user.profile[0].avatar
          //    ? user.profile[0].avatar.includes("http")
          //      ? user.profile[0].avatar
          //      : url.AVATAR + user.profile[0].avatar
          //    : ""
        });
        if (memberCounter == currentChannel.members.length) {
          this.props.navigation.navigate("Chat", {
            members: memberList,
            groupChannel: currentChannel,
            // groupName:messages[index].username ,
            chatType: channelData.chatType
          });
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          showBackIcon={true}
          chat={true}
          title="Messages"
          navigation={this.props.navigation}
        />

        <View style={styles.mainContainer}>
          {this.state.isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#1957A7" />
            </View>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.msgcontainer}>
                <Text style={styles.headtext}>Messages</Text>
                <View style={styles.articleContainer}>
                  {this.state.messages.map((message, index) => (
                    <TouchableOpacity
                      key={message.id}
                      activeOpacity={0.6}
                      onPress={() => this.goToChat(message)}
                      style={[
                        styles.boxView,
                        index == 0 ? styles.bordertop : null
                      ]}
                    >
                      {/* {console.log(message)} */}
                      <View style={styles.image}>
                        <Image
                          source={require("../../assets/profile/profile.png")}
                          style={styles.articleImage}
                        />
                      </View>
                      <View style={styles.innerDetailsView}>
                        <View style={styles.labelView}>
                          <Text style={[styles.name]}>{message.username}</Text>
                          <Text
                            style={[
                              message.unreadMsg == 0 ? null : styles.blue
                            ]}
                          >
                            {message.lastMessageTime}
                          </Text>
                        </View>
                        <View style={styles.labelView}>
                          <Text
                            style={[styles.label]}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            ellipsis=".."
                          >
                            {message.lastMessage}
                          </Text>
                          {message.unreadMsg == 0 ? null : (
                            <View style={[styles.center]}>
                              <Text style={[styles.remmsg]}>
                                {message.unreadMsg}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>
          )}
        </View>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}
