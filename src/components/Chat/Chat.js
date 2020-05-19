import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
  AsyncStorage,
  TextInput
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/AntDesign";
import SendBird from "sendbird";
import { fetchUser } from "../../api/requests";

var sb = new SendBird({ appId: "5AC1FAAE-D1EB-484A-9A5A-CEEBF49C1ED8" });
import stylesFooter from "./chatfooterstyles";
import LinearGradient from "react-native-linear-gradient";
import IconN from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import styles from "./styles";

import Header from "../Header/Header";

// import ChatFooter from "../Footer/ChatFooter";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.connectedMembers = 0;
    this.state = {
      isLoading: true,
      keyboardOffset: 0,
      userid: 4,
      countid: 5,
      currentUserId: this.props.navigation.getParam("currentUserId"),
      members: [
        {
          type: "user",
          name: "admin",
          email: "admin@aniketk.com",
          verified: false,
          id: "5d2c4d1629b1a759be5213b4",
          createdAt: "2019-07-15T09:53:26.622Z",
          updatedAt: "2019-07-15T09:53:26.622Z"
        },
        {
          type: "user",
          name: "admin",
          email: "admin@ianiket.me",
          verified: false,
          id: "5d2c4dce29b1a759be5213b5",
          createdAt: "2019-07-15T09:56:30.684Z",
          updatedAt: "2019-07-15T09:56:30.684Z"
        }
      ],
      groupName: this.props.navigation.getParam("groupName", ""),
      groupChannel: this.props.navigation.getParam("groupChannel", {}),
      chatType: this.props.navigation.getParam("chatType"),
      chatStatus: this.props.navigation.getParam("status", "new"),
      myUserId: "",
      myUserName: "",
      color: "#1957A7",
      nextMessage: "",
      chatHistory: {
        from: "",
        messages: []
      }
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    //this.mergeAllGroupMembers();
    this.setMyUserData();

    this.startChannelHandler();
    this.chatInit();
  }

  // mergeAllGroupMembers = () => {
  //   let currentUser = [{ id: this.state.currentUserId }];
  //   let members = [...this.state.members];
  //   if (members.findIndex(member => member.id == currentUser.id) == -1) {
  //     members.unshift(currentUser);
  //     this.setState({
  //       members: members
  //     });
  //   }
  // };

  setInvitationPreference = () => {
    sb.setChannelInvitationPreference(true, function(response, error) {
      if (error) {
        console.log(error);
        return;
      }
    });
  };

  setMyUserData = async () => {
    // let user = this.state.currentUserId;
    const loggedinUserId = await AsyncStorage.getItem("userId");
    let user = await fetchUser(loggedinUserId);
    await this.setState({
      myUserId: loggedinUserId,
      myUserName: user.name
    });
  };

  startChannelHandler = () => {
    var ChannelHandler = new sb.ChannelHandler();
    ChannelHandler.onMessageReceived = (channel, message) => {
      channel.markAsRead();
      if (channel.url == this.state.groupChannel.url) {
        let chatHistory = Object.assign({}, this.state.chatHistory);
        if (message.messageType == "file") {
          let messageData = JSON.parse(message.data);
          messageData.imageSource = message.url;
          chatHistory.messages.push(messageData);
        } else {
          chatHistory.messages.push(JSON.parse(message.data));
        }

        this.setState({
          chatHistory: chatHistory
        });
      }
    };

    let members = [...this.state.members];
    var handlerId = members
      .map(function(member) {
        return member.id;
      })
      .join("");
    sb.addChannelHandler(handlerId, ChannelHandler);
  };

  async chatInit() {
    let members = [...this.state.members];
    let userIdArray = members.map(member => member.id);
    this.connectToSendBird(userIdArray);
    // let memberCounter = 0;
    // userIdArray.forEach(userId => {
    //   memberCounter++;
    //   this.connectToSendBird(userId);
    //   if (memberCounter == userIdArray.length) {
    //     if (Object.keys(this.state.groupChannel).length == 0) {
    //       this.createChannel();
    //     } else {
    //       this.fetchMessages();
    //     }
    //   }
    // });
  }
  createChannel() {
    this.setInvitationPreference();
    let members = [...this.state.members];
    let userIds = members.map(member => member.id);

    let params = new sb.GroupChannelParams();
    let isDistinct = true;
    let channelName =
      this.state.groupName.length > 0 ? this.state.groupName : "";
    if (this.state.chatType == "group" && this.state.chatStatus == "new") {
      isDistinct = false;
    } else if (this.state.chatType == "direct") {
      isDistinct = true;
    }

    params.isPublic = false;
    params.isDistinct = true;
    params.addUserIds(userIds);
    params.data = JSON.stringify({
      chatType: this.state.chatType
    });
    params.name = channelName;
    sb.GroupChannel.createChannel(params, (groupChannel, error) => {
      if (error) {
        console.log(error);
        return;
      }
      this.setState({
        groupChannel: groupChannel
      });

      this.fetchMessages();
    });
  }
  fetchMessages() {
    let messageList = [];
    var prevMessageListQuery = this.state.groupChannel.createPreviousMessageListQuery();

    prevMessageListQuery.reverse = false;
    let currentObj = this;
    prevMessageListQuery.load(function(messages, error) {
      if (error) {
        console.log(error);
        return;
      }
      messages.forEach(message => {
        if (message.data != "" && message.data) {
          if (message.messageType == "file") {
            let messageData = JSON.parse(message.data);
            messageData.imageSource = message.url;
            messageList.push(messageData);
          } else {
            messageList.push(JSON.parse(message.data));
          }
        }
      });
      let chatHistory = Object.assign({}, currentObj.state.chatHistory);
      chatHistory.messages = messageList;
      currentObj.setState({
        chatHistory: chatHistory,
        isLoading: false
      });
      // currentObj.toggleLoader();
      currentObj.state.groupChannel.markAsRead();
    });
  }
  connectToSendBird(userIdArray) {
    sb.connect(userIdArray[this.connectedMembers], (user, error) => {
      if (error) {
        console.log(error);
        return;
      }
      this.connectedMembers++;
      if (this.connectedMembers + 1 > userIdArray.length) {
        if (Object.keys(this.state.groupChannel).length == 0) {
          this.createChannel();
        } else {
          this.fetchMessages();
        }
        return;
      }
      this.connectToSendBird(userIdArray);
    });
  }
  handleChatInput = val => {
    this.setState({
      nextMessage: val
    });
  };
  sendChatMessage(message, messageBody) {
    const params = new sb.UserMessageParams();

    params.message = message;
    params.data = JSON.stringify(messageBody);
    params.pushNotificationDeliveryOption = "default"; // Either 'default' or 'suppress'

    this.state.groupChannel.sendUserMessage(params, function(message, error) {
      if (error) {
        console.log(error);
        return;
      }
      // console.log(message);
    });
  }

  sendMessage = () => {
    if (this.state.nextMessage) {
      if (this.state.nextMessage.trim() != "") {
        let chatHistory = Object.assign({}, this.state.chatHistory);
        let messages = chatHistory.messages;
        let messageBody = {
          time: moment().format("hh:mm a"),
          type: "text",
          imageSource: "",
          message: this.state.nextMessage.trim(),
          from: this.state.myUserId,
          senderName: this.state.myUserName,
          id: new Date().toLocaleTimeString()
          // profileUrl: this.state.myProfileUrl
        };
        messages.push(messageBody);
        this.sendChatMessage(this.state.nextMessage.trim(), messageBody);
        this.setState({
          chatHistory: chatHistory,
          nextMessage: ""
        });
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          showBackIcon={true}
          title="Messages"
          navigation={this.props.navigation}
        />
        <View style={styles.mainContainer}>
          {this.state.isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#1957A7" />
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              ref={ref => (this.scrollView = ref)}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.scrollView.scrollToEnd({ animated: true });
              }}
            >
              <View style={styles.msgcontainer}>
                <View style={styles.articleContainer}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <View style={[styles.boxView, styles.borderbottom]}>
                      <View style={styles.image}>
                        <Image
                          source={require("../../assets/profile/profile.png")}
                          style={styles.articleImage}
                        />
                      </View>
                      <View style={styles.innerDetailsView}>
                        <View style={styles.labelView}>
                          <Text style={[styles.name]}>Thunder Buddies</Text>
                        </View>
                        <View style={styles.labelView}>
                          <Text
                            style={[styles.label]}
                            // numberOfLines={1}
                            // ellipsizeMode="tail"
                            // ellipsis="....."
                          >
                            John Doe, Bhagat Singh,
                            <Text style={styles.yellow}>{" +3 Others"}</Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ width: "100%" }}
                    ref={ref => (this.scrollView = ref)}
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                      this.scrollView.scrollToEnd({ animated: true });
                    }}
                  >
                    <View>
                      {this.state.chatHistory.messages.map(message =>
                        !(message.from == this.state.myUserId) ? (
                          <View style={styles.flexrow} key={message.id}>
                            <View style={styles.chatimage}>
                              <Image
                                source={require("../../assets/profile/profile.png")}
                                style={styles.articleImage}
                              />
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                              <View style={[styles.chatbox, styles.backgrey]}>
                                <Text
                                  style={[
                                    { color: this.state.color },
                                    styles.sendername
                                  ]}
                                >
                                  {message.senderName}
                                </Text>
                                <View style={styles.chatView}>
                                  <Text style={[styles.chatmsg]}>
                                    {message.message}
                                  </Text>
                                </View>
                                <Text style={[styles.time]}>
                                  {message.time}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <View style={styles.senderView} key={message.id}>
                            <TouchableOpacity
                              style={[styles.chatboxrecv, styles.backblue]}
                              activeOpacity={0.8}
                            >
                              <Text style={[styles.chatmsg, styles.white]}>
                                {message.message}
                              </Text>

                              <Text style={[styles.time, styles.lightblue]}>
                                {message.time}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )
                      )}
                    </View>
                  </KeyboardAwareScrollView>
                </View>
              </View>
            </ScrollView>
          )}
        </View>

        <View style={[stylesFooter.footerContainer]}>
          <TouchableOpacity style={stylesFooter.iconView}>
            <IconN name="ios-add-circle" size={26} color="#C4C4C4" />
          </TouchableOpacity>

          <TextInput
            placeholder="Write here"
            style={[stylesFooter.input]}
            onChangeText={val => this.handleChatInput(val)}
            value={this.state.nextMessage}
          />

          <TouchableOpacity
            style={stylesFooter.iconViewSend}
            onPress={() => this.sendMessage()}
          >
            <IconN name="md-send" size={26} color="#1957A7" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
