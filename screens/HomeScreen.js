import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconButton } from '../components';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const auth = Firebase.auth();
const Tab = createBottomTabNavigator();

const SettingsTab = () => {
    const { user } = useContext(AuthenticatedUserContext);
    const handleSignOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Text style={styles.text}>Logins</Text>

                <Button
                    onPress={handleSignOut}
                    title="LogOut"
                    color="#841584"
                    style={styles.button}
                />
            </SafeAreaView>
        </View>
    );
}

const HomeTab = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView

            ></SafeAreaView>
        </View>
    )
}

export default () => {
    return (
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'black',
                    },
                }}
            >
                <Tab.Screen name="Home" component={HomeTab} />
                <Tab.Screen name="Settings" component={SettingsTab} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginLeft: 20,
        marginTop: 10
    },
    button: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35
    }
});
