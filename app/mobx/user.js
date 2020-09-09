import {action,observable} from 'mobx';

export default class user {

    @observable userInfo = {}

    constructor(props) {

    }

    @action
    setUserInfo(info) {
        this.userInfo = {...info}
    }

}
