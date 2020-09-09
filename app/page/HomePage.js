import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {inject} from 'mobx-react';
import TouchWithText from '../components/TouchWithText';

// noinspection JSUnresolvedVariable
@inject('user')
export default class HomePage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { //状态机变量声明

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchWithText title={'向mobx中添加数据'}
                               onPress={() => this._addDataToMobx()}
                />
                <TouchWithText title={'从mobx中获取数据'}
                               containerStyle={{marginTop: 20}}
                               onPress={() => this._getDataFromMobx()}
                />
            </View>
        );
    }

    _addDataToMobx = () => {
        let accountInfos = {
            userName: '张三',
            userId: '29183888202828',
        }
        this.props.user.setUserInfo(accountInfos);
        alert('添加成功,userName=张三');
    }

    _getDataFromMobx = () => {
       let value = this.props.user.userInfo.userName;
       alert('获取成功===>'+value);
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

