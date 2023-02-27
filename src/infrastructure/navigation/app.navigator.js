import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { theme } from "../../infrastructure/theme";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "ios-settings",
};

const SettingsScreen = () => {
    return (
        <SafeArea>
            <Text>Settings!</Text>
        </SafeArea>
    );
};

const MapScreen = () => {
    return (
        <SafeArea>
            <Text>Maps!</Text>
        </SafeArea>
    );
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        //this is the only place I could make hiding the header work
        headerShown: false,
    };
};

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
                tabBarActiveTintColor: theme.colors.brand.primary,
            }}
        >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>

);
