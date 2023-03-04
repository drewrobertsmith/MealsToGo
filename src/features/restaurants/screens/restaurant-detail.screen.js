import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />

            <List.Accordion
                title="Breakfast"
                left={(props) => <List.Icon {...props} icon="bread-slice" />}
                onPress={handlePress}
            >
                <List.Item title="Burrito" />
                <List.Item title="Sandwich" />
            </List.Accordion>
            <List.Accordion
                title="Lunch"
                left={(props) => <List.Icon {...props} icon="hamburger" />}
                onPress={handlePress}
            >
                <List.Item title="Buffalo Chicken" />
                <List.Item title="Fries" />
            </List.Accordion>
            <List.Accordion
                title="Dinner"
                left={(props) => <List.Icon {...props} icon="food-steak" />}
                onPress={handlePress}
            >
                <List.Item title="Steak" />
                <List.Item title="Potatoes" />
            </List.Accordion>
        </SafeArea>
    );
};
