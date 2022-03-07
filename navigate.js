import React from 'react';
import {Main} from './src/pages/Main';
import {Stadium} from './src/pages/Stadium';
import {Players} from './src/pages/Players';
import {Table} from './src/pages/Table';
import {Trophies} from './src/pages/Trophies';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigate = () => {
    return <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#034694'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
}}
        >
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: 'Main'}}
            />
            <Stack.Screen
                name="Stadium"
                component={Stadium}
                options={{title: 'Stadium'}}
            />
            <Stack.Screen
                name="Players"
                component={Players}
                options={{title: 'Players'}}
            />
            <Stack.Screen
                name="Table"
                component={Table}
                options={{title: 'Table'}}
            />
            <Stack.Screen
                name="Trophies"
                component={Trophies}
                options={{title: 'Trophies'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}