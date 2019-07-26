import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const listItem = (props) => {
    <View>
        <Text>{props.placename}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem: {
        width:'100%'
    }
})

export default listItem;