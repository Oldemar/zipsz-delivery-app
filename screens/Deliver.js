import {ScrollView} from "react-native";
import React from "react";
import Text from "react-native-web/dist/exports/Text";

export default function Deliver() {
    return (
        <ScrollView style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
             <Text>
                 Bla Bla Bla
             </Text>
        </ScrollView>
    );
}

Deliver.navigationOptions = {
    title: 'Deliver',
};