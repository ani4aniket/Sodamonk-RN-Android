import * as React from "react";
import {
    Text,
    View,

} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Header from "../Header/Header";
import styles from "./styles";


export default class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            hidePassword: true,
            emailshow: "",
            passshow: "",
            page: 1,
            loginnext: false,
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    righticonstate(email, password) {
        this.setState({
            email: email,
            password: password
        });
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
        if (reg.test(email)) {
            this.setState({
                emailshow: true
            });
        } else {
            this.setState({
                emailshow: false
            });
        }
        if (password.trim() != "" && password.length >= 4) {
            this.setState({
                passshow: true
            });
        } else {
            this.setState({
                passshow: false
            });
        }
    }
    render() {
        return (

            <View style={styles.container}>
                <Header showBackIcon={false} title="Home" />
            </View>
        );
    }
}
