import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabsNavigator} from './TabsNavigator';

const Stack = createStackNavigator();

export const StackNavigator  = () => {
    return(
        <Stack.Navigator initialRouteName={'Main'}
                         headerMode={'screen'}
                         screenOptions={({route,navigation}) => ({
                             headerTitleAlign: 'center',
                             headerBackTitleVisible: false,
                         })}>
            <Stack.Screen name={'Main'}
                          component={TabsNavigator}
            />
        </Stack.Navigator>
    )
}
