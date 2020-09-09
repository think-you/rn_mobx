import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabBar} from '../assets/image/ImageRes';
import HomePage from '../page/HomePage';
import CatePage from '../page/CatePage';

const Tab = createBottomTabNavigator();

export const TabsNavigator = (props) => {
    return (
        <React.Fragment>
            <Tab.Navigator initalRouteName={'Home'}
                           backBehavior={'initialRoute'}
                           shifting={true}
                           sceneAnimationEnabled={false}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused, color, size}) => {
                                   let iconName;
                                   if (route.name === 'Home') {
                                       iconName = focused ? tabBar.tabbar_home_h : tabBar.tabbar_home_h;
                                   } else if (route.name === 'Cate') {
                                       iconName = focused ? tabBar.tabbar_cate_h : tabBar.tabbar_cate_h;
                                   }
                                   return <Image style={{width: 32, height: 32}} source={iconName} resizeMode={'cover'}/>;
                               },
                           })
                           }
            >
                <Tab.Screen name={'Home'}
                            component={HomePage}
                            options={{
                                tabBarLabel: '首页',
                            }}
                />
                <Tab.Screen name={'Cate'}
                            component={CatePage}
                            options={{
                                tabBarLabel: '分类',
                            }}
                />
            </Tab.Navigator>
        </React.Fragment>
    );
}
