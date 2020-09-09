import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    ViewPropTypes,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class TouchWithText extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        onPress: PropTypes.func,
        containerStyle: ViewPropTypes.style,
        textStyle: PropTypes.object,
    };

    static defaultProps = {
        title: '按钮',
        onPress: () => {
        },
        containerStyle: {},
        textStyle: {},
    };

    constructor(props) {
        super(props);
        this.state = { //状态机变量声明

        };
    }

    render() {
        const {
            title,
            onPress,
            containerStyle,
            textStyle,
        } = this.props;
        return (
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                activeOpacity={0.8}
                onPress={onPress}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    }

}


const styles = StyleSheet.create({

    container: {
        borderRadius: 18,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    text: {
        fontSize: 16,
        color: '#fff',
    },

});

