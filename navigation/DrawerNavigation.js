import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import UserScreen from '../screens/UserScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import { MaterialIcons } from '@expo/vector-icons'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#45AE02' },
            headerTintColor: 'white',
            drawerActiveBackgroundColor: "#56DE53",
            drawerActiveTintColor: 'green',
            drawerStyle: { backgroundColor: "#56790E" }
        }}>
            <Drawer.Screen name="Welcome" component={UserScreen}
                options={{
                    drawerLabel: "Welcome Screen",
                    drawerIcon: ({ size, color }) => <MaterialIcons name="home" color={color} size={size} />
                }} />
            <Drawer.Screen name="User" component={WelcomeScreen} options={{
                drawerLabel: "User Screen",
                drawerIcon: ({ size, color }) => <MaterialIcons name="people" color={color} size={size} />
            }} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation