/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {PureComponent} from 'react';
import {
    View,
} from 'react-native';
import {AppContainer} from './app/router/AppContainer';
import {Provider} from 'mobx-react';
import store from './app/mobx/store';

export default class App extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Provider {...store}>
                <View style={{flex: 1}}>
                    <AppContainer screenProps={{...this.props}}/>
                </View>
            </Provider>
        );
    }

}

