import React, { Component } from "react";
import {ScrollView, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Block, Icon} from "../components";

export default class Deliver extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeftContainerStyle: {
                paddingLeft: 24
            },
            headerRightContainerStyle: {
                paddingRight: 24
            },
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()} >
                    <Icon menu />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity>
                    <Icon notification/>
                </TouchableOpacity>
            ),
            headerTitle: (
                <Block row middle>
                    <Text h4>
                        Deliver
                    </Text>
                </Block>
            ),
        }
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    Bla Bla Bla
                </Text>
            </ScrollView>
        );
    }
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
});
