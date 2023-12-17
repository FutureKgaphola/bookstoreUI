import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItem } from '../utils/asyncStorage.js';
import OnboardingScreen from '../screens/OnboardingScreen.jsx';
import Home from '../screens/Home.jsx';

const appStack = createNativeStackNavigator();

const Stack = () => {
    const [showOnboarding, setShowOnboarding] = useState(null);
    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, [])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            // hide onboarding
            setShowOnboarding(false);
        } else {
            // show onboarding
            setShowOnboarding(true);
        }
    }

    if (showOnboarding == null) {
        return null;
    }

    const optns = { headerShown: false };
    if (showOnboarding==true) {
        return (
            <NavigationContainer>
                <appStack.Navigator initialRouteName={'Onboarding'}>
                    <appStack.Screen name="Onboarding" options={optns} component={OnboardingScreen} />
                    <appStack.Screen name="Home" options={optns} component={Home} />
                </appStack.Navigator>
            </NavigationContainer>
        );
    }else{
        return (
            <NavigationContainer>
                <appStack.Navigator initialRouteName={'Home'}>
                    <appStack.Screen name="Onboarding" options={optns} component={OnboardingScreen} />
                    <appStack.Screen name="Home" options={optns} component={Home} />
                </appStack.Navigator>
            </NavigationContainer>
        );
    }

}

export default Stack;