import User from './user';


class AppStore {

    constructor() {
        this.user = new User();
    }

}

export default new AppStore();
