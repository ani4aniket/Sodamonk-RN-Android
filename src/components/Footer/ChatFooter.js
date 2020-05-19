import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import styles from "./chatfooterstyles";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import SendBird from "sendbird";

var sb = new SendBird({ appId: "5AC1FAAE-D1EB-484A-9A5A-CEEBF49C1ED8" });

export default class ChatFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  addMessage() {
    {
      if (this.state.text != "") {
        sendmsg = this.state.text;
        this.props.sendMessage();
      } else {
        console.log("empty");
      }
    }
  }
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
    });
  }

  sendMessage = () => {
    if (this.state.text) {
      if (this.state.text.trim() != "") {
        let chatHistory = Object.assign({}, this.state.chatHistory);
        let messages = chatHistory.messages;
        let messageBody = {
          time: moment().format("hh:mm a"),
          type: "text",
          imageSource: "",
          message: this.state.text.trim(),
          from: this.state.myUserId,
          senderName: this.state.myUserName,
          id: new Date().toLocaleTimeString(),
          profileUrl: this.state.myProfileUrl
        };
        messages.push(messageBody);
        this.sendChatMessage(this.state.text.trim(), messageBody);
        this.setState({
          // chatHistory: chatHistory,
          // text: ""
        });
      }
    }
  };
  render() {
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.iconView}>
          <Icon name="ios-add-circle" size={26} color="#C4C4C4" />
        </TouchableOpacity>
        {/* <KeyboardAwareScrollView
          style={styles.container}
          getTextInputRefs={() => {
            return [this._textInputRef];
          }}
        > */}
        <TextInput
          // ref={r => {
          //   this._textInputRef = r;
          // }}
          placeholder="Write here"
          style={[styles.input]}
          value={this.state.text}
          onChangeText={text =>
            this.setState({
              text: text
            })
          }
        />

        <TouchableOpacity
          style={styles.iconViewSend}
          onPress={() => this.addMessage()}
        >
          <Icon name="md-send" size={26} color="#1957A7" />
        </TouchableOpacity>
        {/* </KeyboardAwareScrollView> */}
      </View>
    );
  }
}
