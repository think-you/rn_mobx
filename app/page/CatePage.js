import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class CatePage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { //状态机变量声明

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{`CatePage`}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

